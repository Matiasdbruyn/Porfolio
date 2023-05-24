let previoustitle = document.title;
window.addEventListener("blur", () => {
  previoustitle = document.title;
  document.title = "Do not go! Comes back!";
});
window.addEventListener("focus", () => {
  document.title = previoustitle;
});

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
