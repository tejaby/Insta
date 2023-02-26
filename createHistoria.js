"use strict";

const createStories = (usuario, perfil, historia) => {
  if (!historia) return false;

  const divHistoria = document.createElement("div");
  const divBorder = document.createElement("div");
  const imgHistoria = document.createElement("img");

  divHistoria.classList.add("historia");
  divBorder.classList.add("border");

  imgHistoria.setAttribute("src", perfil);

  divBorder.appendChild(imgHistoria);
  divHistoria.appendChild(divBorder);

  // modal historias //

  const containerHistoria = document.createElement("div");
  const modalHistoria = document.createElement("div");
  const headerModalH = document.createElement("div");
  const imgPerfilModal = document.createElement("img");
  const divUsuarioH = document.createElement("div");
  const spanUsuario = document.createElement("span");
  const divCerrarH = document.createElement("div");
  const spanCerrarModal = document.createElement("span");
  const bodyModal = document.createElement("div");
  const imgHistoriaModal = document.createElement("img");

  containerHistoria.classList.add("containerHistoria");
  modalHistoria.classList.add("modalHistoria");
  headerModalH.classList.add("headerModalH");
  imgPerfilModal.classList.add("imgPerfilModal");
  divUsuarioH.classList.add("divUsuarioH");
  spanUsuario.classList.add("spanUsuario");
  divCerrarH.classList.add("divCerrarH");
  spanCerrarModal.classList.add("spanCerrarModal");
  bodyModal.classList.add("bodyModal");
  imgHistoriaModal.classList.add("imgHistoriaModal");

  imgPerfilModal.setAttribute("src", perfil);
  spanUsuario.textContent = usuario;
  spanCerrarModal.textContent = "X";
  imgHistoriaModal.setAttribute("src", historia);

  divUsuarioH.appendChild(spanUsuario);
  divCerrarH.appendChild(spanCerrarModal);
  headerModalH.appendChild(imgPerfilModal);
  headerModalH.appendChild(divUsuarioH);
  headerModalH.appendChild(divCerrarH);
  bodyModal.appendChild(imgHistoriaModal);
  modalHistoria.appendChild(headerModalH);
  modalHistoria.appendChild(bodyModal);
  containerHistoria.appendChild(modalHistoria);

  divBorder.addEventListener("click", () => {
    divBorder.classList.add("visto");
    containerHistoria.style.display = "flex";
    document.body.style.overflow = "hidden";
    document.body.appendChild(containerHistoria);
    // setTimeout(() => {
    //     if(document.querySelector(".containerHistoria")){
    //         containerHistoria.style.display = "none";
    //         document.body.style.overflow = "auto";
    //         document.body.removeChild(containerHistoria);
    //     }
    // }, 20000);
  });

  spanCerrarModal.addEventListener("click", () => {
    containerHistoria.style.display = "none";
    document.body.style.overflow = "scroll";
    document.body.removeChild(containerHistoria);
  });

  return divHistoria;
};

export { createStories };
