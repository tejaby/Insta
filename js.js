import { createPosts } from "./createPublicaciones.js";
import { createStories } from "./createHistoria.js";

const publicaciones = document.querySelector(".publicaciones");
const historias = document.querySelector(".historias");

const obtenerData = async (url) => {
  try {
    const request = await fetch(url);
    const content = await request.json();
    const arr = content.contenido;
    return arr;
  } catch (e) {
    console.log("No se encontro la base de datos");
  }
};

const cargarMasPosts = (entry) => {
  if (entry[0].isIntersecting) {
    cargarPosts(5);
  }
};

const observar = new IntersectionObserver(cargarMasPosts, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
});

let contador = 0;

const cargarPosts = async (cargar) => {
  let url = "data.txt";
  const arr = await obtenerData(url);
  const fragmento = document.createDocumentFragment();
  for (let i = 0; i < cargar; i++) {
    if (arr[contador] != undefined) {
      const newPost = createPosts(
        arr[contador].usuario,
        arr[contador].perfil,
        arr[contador].img,
        arr[contador].seguidores.length
      );
      fragmento.appendChild(newPost);
      contador++;
      if (i == cargar - 1) {
        observar.observe(newPost);
      }
    } else {
      // console.log("no hay mas publicaciones");
      break;
    }
  }
  publicaciones.appendChild(fragmento);

  // modal nav
};
const more = document.querySelector(".more");

const contenedorOpciones = document.createElement("div");

const divSetting = document.createElement("div");
const aSetting = document.createElement("a");
const spanSetting = document.createElement("span");
const divAspecto = document.createElement("div");
const aAspecto = document.createElement("a");
const spanAspecto = document.createElement("span");
const divInformar = document.createElement("div");
const aInformar = document.createElement("a");
const spanInfomar = document.createElement("span");
const divSalir = document.createElement("div");
const aSalir = document.createElement("a");
const spanSalir = document.createElement("span");

contenedorOpciones.classList.add("contenedorOpciones");
divSetting.classList.add("divSetting");
aSetting.classList.add("aSetting");
spanSetting.classList.add("material-icons");
spanSetting.classList.add("spanSetting");
divAspecto.classList.add("divAspecto");
aAspecto.classList.add("aAspecto");
spanAspecto.classList.add("material-icons");
spanAspecto.classList.add("spanAspecto");
divInformar.classList.add("divInformar");
aInformar.classList.add("aInformar");
spanInfomar.classList.add("material-icons");
spanInfomar.classList.add("spanInfomar");
divSalir.classList.add("divSalir");
aSalir.classList.add("aSalir");
spanSalir.classList.add("material-icons");
spanSalir.classList.add("spanSalir");

aSetting.textContent = "Configuración";
aSetting.setAttribute("href", "#");
spanSetting.textContent = "settings";
aAspecto.textContent = "Cambiar aspecto";
aAspecto.setAttribute("href", "#");
spanAspecto.textContent = "dark_mode";
aInformar.textContent = "Informar de un problema";
aInformar.setAttribute("href", "#");
spanInfomar.textContent = "info";
aSalir.textContent = "Salir";
aSalir.setAttribute("href", "#");
spanSalir.textContent = "logout";

divSetting.appendChild(aSetting);
divSetting.appendChild(spanSetting);
divAspecto.appendChild(aAspecto);
divAspecto.appendChild(spanAspecto);
divInformar.appendChild(aInformar);
divInformar.appendChild(spanInfomar);
divSalir.appendChild(aSalir);
divSalir.appendChild(spanSalir);
contenedorOpciones.appendChild(divSetting);
contenedorOpciones.appendChild(divAspecto);
contenedorOpciones.appendChild(divInformar);
contenedorOpciones.appendChild(divSalir);

more.addEventListener("click", () => {
  if (document.querySelector(".contenedorOpciones")) {
    document.body.removeChild(contenedorOpciones);
  } else {
    document.body.appendChild(contenedorOpciones);
  }
});

addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".contenedorOpciones")) {
    document.body.removeChild(contenedorOpciones);
  }
});

divAspecto.addEventListener("click", () => {
  document.body.removeChild(contenedorOpciones);
});

divSalir.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
});

const nav = document.getElementById("nav");
const navA = document.querySelector(".navA");
const links_div = document.querySelectorAll(".links-div");
const spanA = document.querySelectorAll(".material-icons");
const linksA = document.querySelectorAll(".linksA");
const spanO = document.querySelector(".menu");
const spanOs = document.querySelector(".mas");

divAspecto.addEventListener("click", () => {
  document.body.classList.toggle("themeB");
  navA.classList.toggle("themeNavA");
  nav.classList.toggle("themeN");
  for (let i = 0; i < links_div.length; i++) {
    links_div[i].classList.toggle("themeDivLinks");
    spanA[i].classList.toggle("themeLinksS");
    linksA[i].classList.toggle("themeLinksA");
  }
  more.classList.toggle("themeDivO");
  spanO.classList.toggle("themeOptionS");
  spanOs.classList.toggle("themeOptionS");
  historias.classList.toggle("themeH");
  publicaciones.classList.toggle("themeP");

  contenedorOpciones.classList.toggle("themeDivContO");
  divSetting.classList.toggle("divOpciones");
  divAspecto.classList.toggle("divOpciones");
  divInformar.classList.toggle("divOpciones");
  divSalir.classList.toggle("divOpciones");

  aSetting.classList.toggle("aOpciones");
  aAspecto.classList.toggle("aOpciones");
  aInformar.classList.toggle("aOpciones");
  aSalir.classList.toggle("aOpciones");

  spanSetting.classList.toggle("spanOpciones");
  spanAspecto.classList.toggle("spanOpciones");
  spanInfomar.classList.toggle("spanOpciones");
  spanSalir.classList.toggle("spanOpciones");
});

let accountant = 0;

const cargarStories = async () => {
  let url = "data.txt";
  const arr = await obtenerData(url);
  const fragmento = document.createDocumentFragment();
  for (let i = 0; i < arr.length; i++) {
    if (arr[accountant] != undefined) {
      const newStorie = createStories(
        arr[accountant].usuario,
        arr[accountant].perfil,
        arr[accountant].historia
      );
      if (newStorie) {
        fragmento.appendChild(newStorie);
      }
      accountant++;
    } else {
      console.log("no hay mas historias");
      break;
    }
  }
  historias.appendChild(fragmento);
};

addEventListener("load", () => {
  cargarPosts(5);
  cargarStories();
});
// Hay 47 usuarios.
