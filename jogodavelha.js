const board = document.getElementById("board");
const casinhas = board.getElementsByClassName("casinha");
let jogadas = 0;
let jogadorAtual = "X"; // Começa com o jogador X

// Adiciona evento de clique para cada casinha
for (let i = 0; i < casinhas.length; i++) {
  casinhas[i].addEventListener('click', casinhaClick);
}

// Função chamada quando uma casinha é clicada
function casinhaClick() {
  // Verifica se a casinha já foi marcada
  if (this.innerHTML !== "") {
    return; // Se já foi marcada, sai da função sem fazer nada
  }

  // Marca a casinha com o símbolo do jogador atual (X ou O)
  this.innerHTML = jogadorAtual;

  // Verifica se houve um vencedor após a jogada
  if (verificarVencedor()) {
    // Marca a linha vencedora
    marcarLinhaVencedora();
    alert(`Jogador ${jogadorAtual} venceu!`);
    reiniciarJogo(); // Reinicia o jogo após o alerta de vitória
    return;
  }

  // Verifica se houve empate (todas as casinhas estão marcadas)
  jogadas++;
  if (jogadas === 9) {
    alert("Empate!");
    reiniciarJogo(); // Reinicia o jogo após o alerta de empate
    return;
  }

  // Alterna para o próximo jogador
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

// Função para verificar se houve um vencedor
function verificarVencedor() {
  const linhas = [
    [0, 1, 2], // Linhas horizontais
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Linhas verticais
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonais
    [2, 4, 6]
  ];

  // Verifica todas as possíveis combinações de vitória
  for (let linha of linhas) {
    if (casinhas[linha[0]].innerHTML !== "" &&
        casinhas[linha[0]].innerHTML === casinhas[linha[1]].innerHTML &&
        casinhas[linha[0]].innerHTML === casinhas[linha[2]].innerHTML) {
      return linha; // Retorna a linha vencedora se houver um vencedor
    }
  }

  return null; // Retorna null se não houver vencedor
}

// Função para marcar a linha vencedora com cor verde
function marcarLinhaVencedora() {
  const linhaVencedora = verificarVencedor();
  if (linhaVencedora) {
    for (let i = 0; i < linhaVencedora.length; i++) {
      casinhas[linhaVencedora[i]].classList.add("linha-vencedora");
    }
  }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  // Limpa o conteúdo de todas as casinhas
  for (let i = 0; i < casinhas.length; i++) {
    casinhas[i].innerHTML = "";
    casinhas[i].classList.remove("linha-vencedora"); // Remove a classe de linha vencedora
  }

  // Reinicia variáveis
  jogadas = 0;
  jogadorAtual = "X"; // Começa com o jogador X
}
