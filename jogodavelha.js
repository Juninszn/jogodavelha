const board = document.getElementById("board")
const casinhas = board.getElementsByTagName("div")

let jogadas = 0;

for (let i=0; i<casinhas.length; i++) {
  console.log(casinhas[i])
  casinhas[i].addEventListener('click', casinhaclick)
}

function casinhaclick() {
    if(jogadas%2 == 0) {
        this.innerHTML = "X";
    }else{
        this.innerHTML = "O";
    }
    jogadas +=1;
}