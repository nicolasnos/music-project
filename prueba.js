const formContact = document.querySelector(".contacto");

const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

formContact.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(email.value);
  console.log(nombre.value);
  console.log(mensaje.value);
  alert("tu mensaje fue enviado");
});
