/*https://lenguajejs.com/javascript/dom/navegar-elementos-dom/ */

const boton = document.getElementById("button");
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");

function click() {
  alert("tu mensaje se ha enviado");
  console.log(`tu nombre es ${nombre.value}`);
  console.log(`tu email es ${email.value}`);
  console.log(`lo que quieres decir es ${mensaje.value}`);
}

boton.addEventListener("click", click);
