const formContact = document.querySelector(".contacto");

formContact.addEventListener("submit", function (event) {
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
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
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
    document.querySelector('input[name="email"]').classList.add("error");
  }
});

console.log(JSON.parse(localStorage.getItem("dataUserV1")));

/*const boton = document.getElementById("button");
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");

boton.addEventListener("submit", click);

function click(e) {
  alert("tu mensaje se ha enviado");
  console.log(`tu nombre es ${nombre.value}`);
  console.log(`tu email es ${email.value}`);
  console.log(`lo que quieres decir es ${mensaje.value}`);
  const data = Object.fromEntries(new FormData(e.target));
  console.log(data.nombre);
  console.log(data.email);
  console.log(data.mensaje);
  const correo = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const name =
    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

  if (correo.test(addres)) {
    console.log(`correo valido`);
    if (name.test(nameS)) {
      console.log(`nombre valido`);
    }
    if (mensaje.lenght > 30) {
      localStorage.setItem{"dataUserV1", JSON.stringify({
        correo,
        mensaje,
        nombre
      })
      };
    };
  } else {
    alert(`hay algo mal`);
  }
}
*/
