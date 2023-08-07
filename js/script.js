let previoustitle = document.title;
window.addEventListener("blur", () => {
  previoustitle = document.title;
  document.title = "Do not go! Comes back!";
});
window.addEventListener("focus", () => {
  document.title = previoustitle;
});

function mostrar1() {
  document.getElementById(`AboutMe`).style.display = `none`;
  document.getElementById(`Principio`).style.display = `grid`;
  document.getElementById(`Education`).style.display = `none`;
  document.getElementById(`Experience`).style.display = `none`;
  document.getElementById(`Jobs`).style.display = `none`;
  document.getElementById(`menu`).style.left = "-100%";
  document.getElementById(`boton-menu`).style.display = "flex";
}
function mostrar() {
  document.getElementById(`AboutMe`).style.display = `flex`;
  document.getElementById(`Principio`).style.display = `none`;
  document.getElementById(`Education`).style.display = `none`;
  document.getElementById(`Experience`).style.display = `none`;
  document.getElementById(`Jobs`).style.display = `none`;
  document.getElementById(`menu`).style.left = "-100%";
  document.getElementById(`boton-menu`).style.display = "flex";
}
function mostrar2() {
  document.getElementById(`Education`).style.display = `flex`;
  document.getElementById(`Principio`).style.display = `none`;
  document.getElementById(`AboutMe`).style.display = `none`;
  document.getElementById(`Experience`).style.display = `none`;
  document.getElementById(`Jobs`).style.display = `none`;
  document.getElementById(`menu`).style.left = "-100%";
  document.getElementById(`boton-menu`).style.display = "flex";
}
function mostrar3() {
  document.getElementById(`Experience`).style.display = `flex`;
  document.getElementById(`Principio`).style.display = `none`;
  document.getElementById(`AboutMe`).style.display = `none`;
  document.getElementById(`Education`).style.display = `none`;
  document.getElementById(`Jobs`).style.display = `none`;
  document.getElementById(`menu`).style.left = "-100%";
  document.getElementById(`boton-menu`).style.display = "flex";
}
function mostrar4() {
  document.getElementById(`Jobs`).style.display = `flex`;
  document.getElementById(`Principio`).style.display = `none`;
  document.getElementById(`AboutMe`).style.display = `none`;
  document.getElementById(`Education`).style.display = `none`;
  document.getElementById(`Experience`).style.display = `none`;
  document.getElementById(`menu`).style.left = "-100%";
  document.getElementById(`boton-menu`).style.display = "flex";
}
function mostrar5() {
  document.getElementById(`menu`).style.left = "-100%";
  document.getElementById(`boton-menu`).style.display = "flex";
}

function Traba2() {
  document.getElementById(`trabajo2p`).style.display = `flex`;
}
function Traba3() {
  document.getElementById(`trabajo3p`).style.display = `flex`;
}

var botonMenu = document.getElementById("boton-menu");
var menu = document.getElementById("menu");
var salirmenu = document.getElementById("salirmenu");

botonMenu.addEventListener("click", function () {
  menu.style.left = "0";
  botonMenu.style.display = "none";
});
salirmenu.addEventListener("click", function () {
  menu.style.left = "-100%";
  botonMenu.style.display = "flex";
});

document
  .getElementById("salirmenu")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

document.getElementById("pachuxbo").addEventListener("click", function () {
  window.open("https://matiasdbruyn.github.io/Pachux/", "_blank");
});

document.getElementById("arquibo").addEventListener("click", function () {
  window.open("https://matiasdbruyn.github.io/ArquiAires/", "_blank");
});

var pachux = document.getElementById("pachux");
pachux.addEventListener("mouseover", function () {
  document.getElementById("pachuxcont").style.display = "flex";
});

pachux.addEventListener("mouseout", function () {
  document.getElementById("pachuxcont").style.display = "none";
});

var arquiaires = document.getElementById("arquiaires");
arquiaires.addEventListener("mouseover", function () {
  document.getElementById("arquicont").style.display = "flex";
});

arquiaires.addEventListener("mouseout", function () {
  document.getElementById("arquicont").style.display = "none";
});
