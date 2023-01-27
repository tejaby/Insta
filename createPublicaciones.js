"use strict";

const createPosts = (usuario, perfil, img, seguidores) => {
    const divPublicacion = document.createElement("div");

    const divHeader = document.createElement("div");
    const divPerfil = document.createElement("div");
    const imgPerfil = document.createElement("img");
    const divUsuario = document.createElement("div");
    const spanPerfil = document.createElement("span");
    const divFav = document.createElement("div");
    const spanFav = document.createElement("span");
    const divOption = document.createElement("div");
    const buttonOption = document.createElement("button");
    const spanOption = document.createElement("span");

    const divImg = document.createElement("div");
    const imgImg = document.createElement("img");

    const divFooter = document.createElement("div");
    const divLike = document.createElement("div");
    const buttonLike = document.createElement("button");
    const spanLike = document.createElement("span");
    const divComment = document.createElement("div");
    const buttonComment = document.createElement("button");
    const spanComment = document.createElement("span");
    const divSend = document.createElement("div");
    const buttonSend = document.createElement("button");
    const spanSend = document.createElement("span");
    const divBookmark = document.createElement("div");
    const buttonBookmark = document.createElement("button");
    const spanBookmark = document.createElement("span");

    const divcomments = document.createElement("div");
    const divIco = document.createElement("div");
    const buttonIco = document.createElement("button");
    const spanIco = document.createElement("span");
    const divOpine = document.createElement("div");
    const inputOpine = document.createElement("input");
    const divTopost = document.createElement("div");
    const buttonTopost = document.createElement("button");


    divPublicacion.classList.add("publicacion");

    divHeader.classList.add("header");
    divPerfil.classList.add("perfil");
    imgPerfil.classList.add("imgPerfil")
    divUsuario.classList.add("usuario");
    divOption.classList.add("option");
    divFav.classList.add("fav");
    spanFav.classList.add("material-icons");
    buttonOption.classList.add("btnOption");
    spanOption.classList.add("material-icons");

    spanFav.textContent = "star";
    spanOption.textContent = "drag_handle";

    divImg.classList.add("img");
    imgImg.classList.add("imgPublicacion");

    divFooter.classList.add("footer");
    divLike.classList.add("like");
    buttonLike.classList.add("buttonLike");
    spanLike.classList.add("material-icons");
    divComment.classList.add("comment");
    buttonComment.classList.add("buttonComment");
    spanComment.classList.add("material-icons");
    divSend.classList.add("send");
    buttonSend.classList.add("buttonSend")
    spanSend.classList.add("material-icons");
    divBookmark.classList.add("bookmark");
    buttonBookmark.classList.add("buttonBookmark")
    spanBookmark.classList.add("material-icons");

    spanLike.textContent = "favorite";
    spanComment.textContent = "mode_comment";
    spanSend.textContent = "send";
    spanBookmark.textContent = "bookmark";

    divcomments.classList.add("comments");
    divIco.classList.add("ico");
    buttonIco.classList.add("buttonIco");
    spanIco.classList.add("material-icons");
    divOpine.classList.add("opine");
    inputOpine.classList.add("inputOpine");
    divTopost.classList.add("toPost");
    buttonTopost.classList.add("buttonTopost");
    buttonTopost.classList.add("imposible");
 

    spanIco.textContent = "mood";
    buttonTopost.textContent = "Publicar"



    imgPerfil.setAttribute("src", perfil);
    spanPerfil.textContent = usuario;

    imgImg.setAttribute("src", img);

    inputOpine.setAttribute("placeholder", "Añade un comentario");


    buttonOption.appendChild(spanOption);

    buttonLike.appendChild(spanLike);
    buttonComment.appendChild(spanComment);
    buttonSend.appendChild(spanSend);
    buttonBookmark.appendChild(spanBookmark);

    buttonIco.appendChild(spanIco);


    divPerfil.appendChild(imgPerfil);
    divUsuario.appendChild(spanPerfil);
    divFav.appendChild(spanFav);
    divOption.appendChild(buttonOption);

    divLike.appendChild(buttonLike);
    divComment.appendChild(buttonComment);
    divSend.appendChild(buttonSend);
    divBookmark.appendChild(buttonBookmark);

    divIco.appendChild(buttonIco);
    divOpine.appendChild(inputOpine);
    divTopost.appendChild(buttonTopost);

    divHeader.appendChild(divPerfil);
    divHeader.appendChild(divUsuario);
    // divHeader.appendChild(divFav);
    divHeader.appendChild(divOption);

    divImg.appendChild(imgImg);

    divFooter.appendChild(divLike);
    divFooter.appendChild(divComment);
    divFooter.appendChild(divSend);
    divFooter.appendChild(divBookmark);

    divcomments.appendChild(divIco);
    divcomments.appendChild(divOpine);
    divcomments.appendChild(divTopost);

    divPublicacion.appendChild(divHeader);
    divPublicacion.appendChild(divImg);
    divPublicacion.appendChild(divFooter);
    divPublicacion.appendChild(divcomments);


    // modal info usuario
    
    const containerModal = document.createElement("div");
    const modalProfile = document.createElement("div");
    const imgModal = document.createElement("img");
    const modalInfo = document.createElement("div");
    const infoUsuario = document.createElement("div");
    const h3Usuario = document.createElement("h3");
    const infoSeguidores = document.createElement("div")
    const h3Seguidores = document.createElement("h3");

    containerModal.classList.add("containerModal");
    modalProfile.classList.add("modalProfile");
    modalInfo.classList.add("modalInfo");
    infoUsuario.classList.add("infoUsuarios");
    infoSeguidores.classList.add("infoSeguidores");

    imgModal.setAttribute("src", perfil);
    h3Usuario.textContent = usuario;
    h3Seguidores.textContent = `seguidores: ${seguidores}`;

    infoUsuario.appendChild(h3Usuario);
    infoSeguidores.appendChild(h3Seguidores);

    modalProfile.appendChild(imgModal);
    modalInfo.appendChild(infoUsuario);
    modalInfo.appendChild(infoSeguidores);

    containerModal.appendChild(modalProfile);
    containerModal.appendChild(modalInfo);
    divPerfil.appendChild(containerModal);

    // Otra manera de mostrar info del usuario.

    // imgPerfil.addEventListener("mouseover", () => {
    //     setTimeout(() => {
    //         divPerfil.appendChild(containerModal);
    //     }, 400);
    // });

    // spanPerfil.addEventListener("mouseover", () => {
    //     setTimeout(() => {
    //         divPerfil.appendChild(containerModal);
    //     }, 400);
    // });

    // containerModal.addEventListener("mouseleave", () => {
    //     divPerfil.removeChild(containerModal);

    // });

    // modal header opciones //

    const containerOption = document.createElement("div");
    const modalOption = document.createElement("div");
    const denunciar = document.createElement("div");
    const spanDenunciar = document.createElement("span");
    const stopFollowing = document.createElement("div");
    const spanStopF = document.createElement("span");
    const agregarFav = document.createElement("div");
    const spanAgregarF = document.createElement("span");
    const verHistoria = document.createElement("div");
    const spanVerH = document.createElement("span")
    const cancelar = document.createElement("div");
    const spanCancelar = document.createElement("span");

    containerOption.classList.add("containerOption");
    modalOption.classList.add("modalOption");
    denunciar.classList.add("denunciar");
    spanDenunciar.classList.add("spanDenunciar");
    stopFollowing.classList.add("stopFollowing");
    spanStopF.classList.add("spanStopF");
    agregarFav.classList.add("agregarFav");
    spanAgregarF.classList.add("spanAgregarF");
    verHistoria.classList.add("verHistoria");
    spanVerH.classList.add("spanVerH");
    cancelar.classList.add("cancelar");

    spanDenunciar.textContent = "Denunciar";
    spanStopF.textContent = "Dejar de seguir";
    spanAgregarF.textContent = "Añadir a favoritos";
    spanVerH.textContent = "Ver historia";
    spanCancelar.textContent = "Cancelar";

    denunciar.appendChild(spanDenunciar);
    stopFollowing.appendChild(spanStopF);
    agregarFav.appendChild(spanAgregarF);
    verHistoria.appendChild(spanVerH);
    cancelar.appendChild(spanCancelar);
    modalOption.appendChild(denunciar);
    modalOption.appendChild(stopFollowing);
    modalOption.appendChild(agregarFav);
    modalOption.appendChild(verHistoria);
    modalOption.appendChild(cancelar);
    containerOption.appendChild(modalOption);


    buttonOption.addEventListener("click", () => {
        containerOption.style.display = "flex";
        document.body.style.overflow = "hidden";
        document.body.appendChild(containerOption);
    });

    cancelar.addEventListener("click", () => {
        containerOption.style.display = "none";
        document.body.style.overflow = "scroll";
        document.body.removeChild(containerOption);
    });

    agregarFav.addEventListener("click", () => {
        if (document.querySelector(".fav")) {
            divHeader.removeChild(divFav);
        } else {
            divHeader.appendChild(divPerfil);
            divHeader.appendChild(divUsuario);
            divHeader.appendChild(divFav);
            divHeader.appendChild(divOption);
        }

        spanFav.classList.add("agregadoFav");
        containerOption.style.display = "none";
        document.body.style.overflow = "scroll";
        document.body.removeChild(containerOption);
    });

    // addEventListener("keyup", e =>{
    //     if (e.key == "Escape" && document.querySelector(".containerOption")) {
    //         containerOption.style.display = "none";
    //         document.body.style.overflow = "scroll";
    //         document.body.removeChild(containerOption);
    //     }
    // })



    // Eventos img

    imgImg.addEventListener("dblclick", () => {
        spanLike.classList.add("active");
    });


    // Eventos footer

    spanLike.addEventListener("click", () => {
        spanLike.classList.toggle("active");
    });

    spanBookmark.addEventListener("click", () => {
        spanBookmark.classList.toggle("active");
    });


    // Eventos comments

    inputOpine.addEventListener("keyup", () => {
        buttonTopost.classList.replace("imposible", "posible");
    });

    buttonTopost.addEventListener("click", () => {
            buttonTopost.classList.replace("posible", "imposible");
            inputOpine.value = null;
    });





    return divPublicacion;

}



export { createPosts }