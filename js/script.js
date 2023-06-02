let previoustitle = document.title;
window.addEventListener("blur", () => {
  previoustitle = document.title;
  document.title = "Do not go! Comes back!";
});
window.addEventListener("focus", () => {
  document.title = previoustitle;
});

function mostrar() {
  document.getElementById(`AboutMe`).style.display = `flex`;
}
function mostrar2() {
  document.getElementById(`Education`).style.display = `flex`;
}
function mostrar3() {
  document.getElementById(`Experience`).style.display = `flex`;
}
function mostrar4() {
  document.getElementById(`Jobs`).style.display = `flex`;
}
/*
function ocultar() {
  document.getElementById(
    `AboutMe``Education``Experience``Jobs`
  ).style.display = `none`;
} */
/*function trabajo2() {
  document.getElementById(`trabajo2`).style.display = `flex`;
}*/
/*
const el = document.getElementById("poster");
const height = el.clientHeight;
const width = el.clientWidth;

el.addEventListener("mousemove", (evt) => {
  const { layerX, layerY } = evt;
  const yRotation = ((layerX - width / 2) / width) * 20;
  const xRotation = ((layerY - height / 2) / height) * 20;
  const string = `
  perspective(500px)
  scale (1.1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)`;

  el.estilos.transform = string;
});

el.addEventListener("mousemove", (evt) => {
  el.estlos.transform = `
perspective(500px)
scale (1)
rotateX(0)
rotateY(0)`;
});
*/
