//põe a pagina em dark mode / light mode
const themeChange = () => {
  const toggle = document.getElementById("toggleDark");
  const body = document.querySelector("body");
  toggle.classList.toggle("bi-moon");
  if (toggle.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "#28ac86";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "#28ac86";
    body.style.transition = "2s";
  }
};

let titulo = document.getElementById("titulo");
let ptbr = document.getElementById("pt-br");
let mainNumber = 0;
let titlee = document.getElementById("main-title");
let id1 = document.getElementById("link1");
let id2 = document.getElementById("link2");

const changeLeng = () => {
  increment();
  setTimeout(transicao, 500);
  setTimeout(verifyNav, 1000);
  decrement();
};

const increment = () => mainNumber++;

const decrement = () => {
  if (mainNumber >= 2) {
    mainNumber = 0;
  } else {
    mainNumber++;
  }
};
const global = document.getElementById("globall");
const body = document.querySelector("body");

const transicao = () => {
  if (mainNumber >= 2) {
    ptbr.style.color = "#28ac8700";
    titulo.style.color = "#28ac8700";
    titlee.style.color = "#28ac8700";
    id1.style.color = "#28ac8700";
    id2.style.color = "#28ac8700";
  } else {
    ptbr.style.color = "#28ac8700";
    titulo.style.color = "#28ac8700";
    titlee.style.color = "#28ac8700";
    id1.style.color = "#28ac8700";
    id2.style.color = "#28ac8700";
  }
};

const verifyNav = () => {
  if (mainNumber >= 2) {
    ptbr.innerHTML = "PT";
    titulo.innerHTML = "Hello";
    titlee.innerHTML = "Welcome";
    id1.innerHTML = "My projects";
    id2.innerHTML = "About me";
    ptbr.style.color = "#28ac86";
    titulo.style.color = "#28ac86";
    titlee.style.color = "#28ac86";
    id1.style.color = "#28ac86";
    id2.style.color = "#28ac86";
    id1.innerHTML = '<a id="link1" class="link" href="projects.html">My Projects</a>'
  } else {
    ptbr.innerHTML = "EN";
    titulo.innerHTML = "Olá";
    titlee.innerHTML = "Bem vindo";
    id1.innerHTML = "Meus Projetos";
    id2.innerHTML = "Sobre mim";
    ptbr.style.color = "#28ac86";
    titulo.style.color = "#28ac86";
    titlee.style.color = "#28ac86";
    id1.style.color = "#28ac86";
    id2.style.color = "#28ac86";
    id1.innerHTML = '<a id="link1" class="link" href="projetos.html">Meus Projetos</a>'
  }
};

const projetoImg = document.getElementById('projetoImg')

const showImg = () => {
  projetoImg.style.opacity = '1'
  projetoImg.src = 'assets/siteRpgImg.png'
}

const clearImg = () => {
  projetoImg.style.opacity = '0'
}




const mudaSite = () => {
  window.location.href = 'https://scheunemannn.github.io/Carousel-RPG/'
}

