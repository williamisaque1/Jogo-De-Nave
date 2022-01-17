/*var tiro = document.createElement("div");
tiro.className = "balas";
document.querySelector("#main").appendChild(tiro).style.transform =
  "translate(" +
  "300" +
  "px , " +
  Math.floor(Math.random() * window.innerHeight) +
  "px )";*/
let posicaoX = window.innerWidth;
let posicaoY = Math.floor(Math.random() * window.innerHeight);

function criarbalas() {
  posicaoY = Math.floor(Math.random() * window.innerHeight);
  posicaoX = window.innerWidth;
  var balas = document.createElement("div");
  balas.className = "balas";
  document.querySelector("#main").appendChild(balas);

  lancarbalas();
}
function lancarbalas() {
  // console.log(posicaoX);
  if (posicaoX > 0 && document.querySelector(".balas") != null) {
    document
      .querySelector(".balas")
      .setAttribute(
        "style",
        "transform:translate(" + posicaoX + "px ," + posicaoY + "px )"
      );
    frame = requestAnimationFrame(lancarbalas);
    posicaoX -= 2;
  } else {
    if (posicaoX == 0) {
      console.log("bbbjhjhj", posicaoX);
      document.querySelector(".balas").remove();
    }

    criarbalas();
  }
}

window.addEventListener("load", lancarbalas);
/*function limparBalas() {
  let numeroDeObstaculos = document.querySelectorAll(".balas").length;
  console.log(
    "executado",
    document.querySelectorAll(".balas").length + "  |" + numeroDeObstaculos
  );
  if (numeroDeObstaculos == 0 || numeroDeObstaculos == 10) {
    let texto = document.createElement("h1");

    numeroDeObstaculos == 0 && (texto.textContent = "obrigado por jogar.");

    document.querySelector("#main").appendChild(texto);
  }

  if (numeroDeObstaculos == 10) {
    console.log("-----------2------- ");
    document.querySelectorAll(".balas").forEach((bala, index) => {
      let cancel = setTimeout(() => {
        bala.remove();
        clearTimeout(cancel);
      }, index * 500);
    });
  }
}

function lancarObstaculos() {
  for (
    let lancandoObstaculo = 1;
    lancandoObstaculo <= 10;
    lancandoObstaculo++
  ) {
    setTimeout(() => {
      console.log("for");
      let tiro = document.createElement("div");
      tiro.className = "balas";
      document.querySelector("#main").appendChild(tiro).style.transform =
        "translate(" +
        Number(0) +
        "px , " +
        Math.floor(Math.random() * window.innerHeight) +
        "px )";

      limparBalas();
    }, lancandoObstaculo * 500);
  }
}
function matarObstaculos() {
  document.querySelectorAll(".balas").forEach((bala, i) => {
    topObstaculo/ = bala.getBoundingClientRect().top;
    bottomObstaculo = bala.getBoundingClientRect().bottom;
    leftObstaculo = bala.getBoundingClientRect().left;

    if (y >= topObstaculo && y <= bottomObstaculo && x + 30 >= leftObstaculo) {
      bala.remove();
      limparBalas();
    } else {
      console.log("morrendo");
    }
  });
}
/*function moverNave(event) {
    x = event.clientX;
    y = event.clientY;
    console.log("memovendo " + "X " + x + "Y " + y);
    if (window.innerWidth - 30 > x && y < window.innerHeight - 50) {
      document.getElementById("mouse").style.transform =
        "translate(" + x + "px ," + y + "px)" + "rotate(90deg)";
    }
  }

window.addEventListener("mousemove", (e) => {
  //moverNave(e);

  matarObstaculos();
});*/
