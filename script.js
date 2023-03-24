//põe a pagina em dark mode / light mode
const themeChange = () => {
  const toggle = document.getElementById("toggleDark");
  const body = document.querySelector("body");
  toggle.classList.toggle("bi-moon");
  if (toggle.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
};

let titulo = document.getElementById("titulo");
let ptbr = document.getElementById("pt-br");
let mainNumber = 0;
let titlee = document.getElementById("main-title");

const changeLeng = () => {
  increment();
  verififyNav();
  decrement();
};

const increment = () => mainNumber++;

const decrement = () => {
  if (mainNumber >= 2) {
    mainNumber = 0;
  }
  else {
    mainNumber++
  }
};

const verififyNav = () => {
  if (mainNumber >= 2) {
    ptbr.innerHTML = "PT";
    titulo.innerHTML = "Olá";
    titlee.innerHTML = "Bem vindo";
  } else {
    ptbr.innerHTML = "EN";
    titulo.innerHTML = "Hello";
    titlee.innerHTML = "Welcome";
  }
};
