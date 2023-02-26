"use strict";

const IDBrequest = indexedDB.open("instagram", 1);

IDBrequest.addEventListener("upgradeneeded", () => {
  const db = IDBrequest.result;
  const objectStore = db.createObjectStore("usuarios", {
    autoIncrement: true,
    keyPath: "usuario",
  });
  objectStore.createIndex("email", "email", { unique: true });
  objectStore.createIndex("nombre", "nombre", { unique: false });
  objectStore.createIndex("usuario", "usuario", { unique: true });
  objectStore.createIndex("password", "password", { unique: false });

  console.log("Se creo correctamente");
});

IDBrequest.addEventListener("success", (e) => {
  // console.log("Todo salio correctamente");
});

IDBrequest.addEventListener("error", (e) => {
  console.log(e);
});

const agregarObjetos = (usuario) => {
  const db = IDBrequest.result;
  const transaction = db.transaction("usuarios", "readwrite");
  const objectStore = transaction.objectStore("usuarios");
  objectStore.add(usuario);
  transaction.addEventListener("complete", (e) => {
    window.location.href = "./instagram.html";
    // console.log("Objeto agregado correctamente");
  });
  transaction.addEventListener("error", (e) => {
    // console.log("Error al agregar Objeto");
  });
};

const obtenerObjetos = (usuario) => {
  const db = IDBrequest.result;
  const transaction = db.transaction("usuarios", "readonly");
  const objectStore = transaction.objectStore("usuarios");
  objectStore.get(usuario);
  const request = objectStore.get(usuario);
  transaction.addEventListener("complete", () => {
    if (request.result) {
      const user = request.result;
      console.log(user);
    } else {
      console.log("Usuario no encontado");
    }
  });
};

// const obtenerObjetos = usuario => {
//     const db = IDBrequest.result;
//     console.log(db)
//     const request = db.transaction('usuarios')
//     .objectStore('usuarios')
//     .get(usuario);
//     return new Promise((resolve, reject) => {
//     request.addEventListener("success", () => {
//         const user = request.result;
//         resolve (user)
//     })
//     request.addEventListener("error", () => {
//         reject("No se ha encontrado el usuario")
//     })
// })
// }

// obtenerObjetos("yostintejaby").then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log("err")
// })

const leerObjetos = (usuario) => {
  const db = IDBrequest.result;
  const transaction = db.transaction("usuarios", "readonly");
  const objectStore = transaction.objectStore("usuarios");
  const cursor = objectStore.openCursor();
  return new Promise((resolve, reject) => {
    cursor.addEventListener("success", () => {
      if (cursor.result) {
        if (
          usuario.usuario == cursor.result.value.usuario &&
          usuario.password == cursor.result.value.password
        ) {
          window.location.href = "./instagram.html";
          resolve();
        } else {
          resolve("Usuario no encontrado, Compruébala");
        }
      } else {
      }
    });
    cursor.addEventListener("error", () => {
      reject("error al leer los datos");
    });
  });
};

// entrar o registrar

const formRegister = document.getElementById("formRegister");
const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const msgRegister = document.querySelector(".msg-register");

const send = document.querySelector(".send");

email.addEventListener("keyup", (e) => {
  send.style.background = "#0095f6";
  send.style.cursor = "pointer";
});
nombre.addEventListener("keyup", (e) => {
  send.style.background = "#0095f6";
  send.style.cursor = "pointer";
});
usuario.addEventListener("keyup", (e) => {
  send.style.background = "#0095f6";
  send.style.cursor = "pointer";
});
password.addEventListener("keyup", (e) => {
  send.style.background = "#0095f6";
  send.style.cursor = "pointer";
});

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  validarRegister()
    .then(() => {
      const data = {
        email: e.target.email.value,
        nombre: e.target.nombre.value,
        usuario: e.target.usuario.value,
        password: e.target.password.value,
      };
      agregarObjetos(data);
      secondContainer.style.display = "none";
      firstContainer.style.display = "block";
      email.value = null;
      nombre.value = null;
      usuario.value = null;
      password.value = null;
    })
    .catch((error) => {
      msgRegister.textContent = error;
    });
});

const validarMayuscula = (letra) => {
  return letra === letra.toUpperCase();
};

const verificar = () => {
  for (let i = 0; i < password.value.length; i++) {
    let letter = password.value.charAt(i);
    if (validarMayuscula(letter)) {
      return false;
    } else return true;
  }
};

const validarRegister = () => {
  return new Promise((resolve, reject) => {
    if (
      email.value.length < 10 ||
      email.value.length > 40 ||
      email.value.indexOf("@") == -1 ||
      email.value.indexOf(".") == -1
    )
      reject("El correo electronico es invalidó");
    else if (nombre.value.length < 10 || nombre.value.length > 60)
      reject("El nombre es invalidó");
    else if (usuario.value.length < 5 || usuario.value.length > 15)
      reject("El usuario es invalidó");
    else if (
      password.value.length < 10 ||
      password.value.length > 30 ||
      verificar()
    )
      reject("La contraseña es invalida");
    resolve(true);
  });
};

const formLogin = document.getElementById("formLogin");
const log = document.getElementById("user");
const pas = document.getElementById("pass");
const enviar = document.querySelector(".enviar");
const msgLogin = document.querySelector(".msg-login");

log.addEventListener("keyup", (e) => {
  enviar.style.background = "#0095f6";
  enviar.style.cursor = "pointer";
});
pas.addEventListener("keyup", (e) => {
  enviar.style.background = "#0095f6";
  enviar.style.cursor = "pointer";
});

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    usuario: e.target.usuario.value,
    password: e.target.password.value,
  };
  leerObjetos(data).then((res) => {
    msgLogin.textContent = res;
  });
});

// Evento login

const firstContainer = document.querySelector(".firstContainer");
const secondContainer = document.querySelector(".secondContainer");

const signup = document.getElementById("registrate");
const login = document.getElementById("IniciarSesion");

signup.addEventListener("click", () => {
  firstContainer.style.display = "none";
  secondContainer.style.display = "block";
  log.value = null;
  pas.value = null;
});

login.addEventListener("click", () => {
  secondContainer.style.display = "none";
  firstContainer.style.display = "block";
  email.value = null;
  nombre.value = null;
  usuario.value = null;
  password.value = null;
});
