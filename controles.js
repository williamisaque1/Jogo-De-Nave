var posicaoJogadorX;
var posicaoJogadorY;
var direcaoX;
var direcaoY;
var velocidade;
var jogador;
var alturaDaTela;
var larguraDaTela;

function keyDown(event) {
  let tecla = event.keyCode;
  switch (tecla) {
    case 37:
      direcaoX = -1;
      break;
    case 39:
      direcaoX = 1;
      break;
    case 38:
      direcaoY = -1;
      break;
    case 40:
      direcaoY = 1;
      break;
  }

  //alert(tecla);
  //37 esquerda
  //38 cima
  // 39 direita
  // 40 baixo
}
function keyUp(event) {
  let tecla = event.keyCode;
  if (tecla == 37 || tecla == 39) {
    direcaoX = 0;
  } else if (tecla == 38 || tecla == 40) {
    direcaoY = 0;
  }
  // cancelAnimationFrame(frame);
}
function controleJogador() {
  console.log(posicaoJogadorY >= 0);
  if (posicaoJogadorY >= 0) {
    posicaoJogadorX += direcaoX * velocidade;
    posicaoJogadorY += direcaoY * velocidade;

    jogador.style.transform =
      "translate(" +
      posicaoJogadorX +
      "px ," +
      posicaoJogadorY +
      "px)" +
      "rotate(90deg)";
  } else {
    posicaoJogadorY = posicaoJogadorY + 1;
  }
}
function gameLoop() {
  controleJogador();
  frame = requestAnimationFrame(gameLoop);
}

function inicio() {
  direcaoX = direcaoY = 0;
  posicaoJogadorX = posicaoJogadorY = 0;
  velocidade = 3;

  jogador = document.querySelector("#jogador");
  alturaDaTela = window.innerHeight;
  larguraDaTela = window.innerWidth;

  gameLoop();
}
window.addEventListener("load", inicio);
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
