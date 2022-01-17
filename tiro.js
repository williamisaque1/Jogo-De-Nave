document.querySelector("body").style.overflow = "hidden";

let frame;
let posX;
let posY;
let matando = 0;
var tiro = document.createElement("div");
tiro.className = "tiros";
document.querySelector("#main").appendChild(tiro);
let qtdeClick = 0;
function incializandoTiros() {
  if (qtdeClick === 0) {
    posY = document.querySelector("#jogador").getBoundingClientRect().y;
    posX = document.querySelector("#jogador").getBoundingClientRect().x;
    console.log("click");
    atirar();
    qtdeClick++;
  }
}
function atirar() {
  frame = requestAnimationFrame(atirar);
  window.addEventListener("mouseover", (e) =>
    console.log(e.clientX + " |" + e.clientY)
  );
  if (document.querySelector(".balas")?.getBoundingClientRect() != null) {
    if (
      posX <= larguraDaTela - 30 &&
      !(
        Math.round(
          document?.querySelector(".balas").getBoundingClientRect().left
        ) ==
          Math.round(
            document.querySelector(".tiros").getBoundingClientRect().right
          ) &&
        document.querySelector(".tiros").getBoundingClientRect().y >
          document?.querySelector(".balas").getBoundingClientRect().top &&
        Math.round(
          document.querySelector(".tiros").getBoundingClientRect().y
        ) <=
          Math.round(
            document?.querySelector(".balas").getBoundingClientRect().bottom
          )
      )
    ) {
      if (
        Math.round(
          document.querySelector(".tiros").getBoundingClientRect().right
        ) >=
          Math.round(
            document?.querySelector(".balas").getBoundingClientRect().left
          ) &&
        Math.round(
          document.querySelector(".tiros").getBoundingClientRect().right
        ) <=
          Math.round(
            document?.querySelector(".balas").getBoundingClientRect().left
          ) +
            10 &&
        document.querySelector(".tiros").getBoundingClientRect().y >
          document.querySelector(".balas").getBoundingClientRect().top &&
        Math.round(
          document.querySelector(".tiros").getBoundingClientRect().y
        ) <=
          Math.round(
            document.querySelector(".balas").getBoundingClientRect().bottom
          )
      ) {
        console.log("acertou miseravel");

        document.querySelector(".balas").remove();

        matando++;
        document.querySelector("div#placar > h5").textContent =
          "matando: " + matando;
        qtdeClick = 0;
      }
      // }

      posX += 10;
      document.querySelector(".tiros").style.display = "inline";
      document.querySelector(".tiros").style.transform =
        "translate(" + posX + "px , " + posY + "px )";
    } else {
      console.log("ja errra", posX);

      document.querySelector(".tiros").remove();
      var tiro = document.createElement("div");
      tiro.className = "tiros";
      document.querySelector("#main").appendChild(tiro);
      qtdeClick = 0;
      cancelAnimationFrame(frame);
    }
  } else {
    lancarbalas();
  }
}

window.addEventListener("click", incializandoTiros);

/*

function limparTiros(e) {
  if (e == "animationend") {
    document.querySelectorAll(".tiros").forEach((tiro, index) => {
      console.log("limpar", document.querySelectorAll(".tiros").length);
      tiro.remove();
    });
  } else {
    document.querySelectorAll(".tiros").forEach((tiro, index) => {
      setTimeout(() => {
        tiro.remove();
      }, 500);
    });
  }
}

function atirar() {
  console.log("atirando");
  var tiro = document.createElement("div");
  tiro.className = "tiros";
  document.querySelector("#main").appendChild(tiro).style.transform =
    "translate(" + x + "px , " + posicaoJogadorY + "px )";

  document.querySelectorAll(".balas").forEach((bala, i) => {
    /* console.log(
      "tiro corderndas" +
        b.x +
        "-" +
        b.y +
        " |" +
        bala.getBoundingClientRect().top +
        "|" +
        bala.getBoundingClientRect().bottom
    );
    document.querySelectorAll(".tiros").forEach((elem) => {
      elem.addEventListener("animationend", (e) => {
        limparTiros(e.type);
      });
    });
    console.log(
      document.querySelector(".tiros").getBoundingClientRect().y >=
        bala.getBoundingClientRect().top
    );
    console.log(
      document.querySelector(".tiros").getBoundingClientRect().y <=
        bala.getBoundingClientRect().bottom
    );
    if (
      document.querySelector(".tiros").getBoundingClientRect().y >=
        bala.getBoundingClientRect().top &&
      document.querySelector(".tiros").getBoundingClientRect().y <=
        bala.getBoundingClientRect().bottom
    ) {
      console.log(
        "matei voce",
        document.querySelector(".tiros").getBoundingClientRect().x +
          "|||" +
          bala.getBoundingClientRect().left
      );
      setTimeout(() => {
        bala.remove();
        limparBalas();
      }, 100);
    }
  });
}

window.addEventListener("click", (e) => {
  atirar(e);
});
*/
