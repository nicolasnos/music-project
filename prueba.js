const formContact = document.querySelector(".contacto__form");

formContact.addEventListener("submit", (event) => {
  event.preventDefault();

  // Elimina los errores de los que ya pasam
  document
    .querySelectorAll(".error")
    ?.forEach((item) => item.classList.remove("error"));

  // convierte los valores de los imputs en un objeto
  const data = Object.fromEntries(new FormData(event.target));
  const { correo, mensaje, nombre } = data;

  // Expresiones regulares
  const emailValidation = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const nameValidator = new RegExp(
    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/
  );

  // Condicionales para los datos
  if (emailValidation.test(correo) && correo.length > 7) {
    if (nameValidator.test(nombre) && nombre.length > 10) {
      if (mensaje.length > 30) {
        localStorage.setItem(
          "dataUserV1",
          JSON.stringify({
            correo,
            mensaje,
            nombre,
          })
        );
      } else {
        document.querySelector('input[name="mensaje"]').classList.add("error");
      }
    } else {
      document.querySelector('input[name="nombre"]').classList.add("error");
    }
  } else {
    document.querySelector('input[name="correo"]').classList.add("error");
  }
});

const imprimir = document.querySelector("#getUsers");

imprimir.addEventListener("click", function (event) {
  const data = JSON.parse(localStorage.getItem("dataUserV1"));
  console.log(data);

  document.querySelector("#dataUserGet").innerHTML += `
    <li>${data.nombre}</li>
    <li>${data.correo}</li>
    <li>${data.mensaje}</li>
  `;
});
