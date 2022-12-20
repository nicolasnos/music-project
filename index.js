const contacto = document.querySelector(".contacto");

contacto.addEventListener("submit", (e) => {
  e.preventDefault();

  document
    .querySelectorAll(".error")
    ?.forEach((i) => i.classlist.remove("error"));
});

const eValidation = new RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const nValidation = new RegExp(
  /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/
);

if (eValidation.test(email) && email > 7) {
  if (nValidation.test(nombre) && nombre > 10) {
    if (mensaje.lenght > 30) {
      localStorage.setItem(
        "dataUserV1",
        JSON.stringify({
          email,
          nombre,
          mensaje,
        })
      );
    } else {
      document.querySelector('input[name="mensaje"').classList.add("error");
    }
  } else {
    document.querySelector('input[name="nombre"').classList.add("error");
  }
} else {
  document.querySelector('input[name="email"').classList.add("error");
}

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
