import { traerMensajeCotzacion } from "./cargar_modal_cotizacion.js";
import { traerMensajeProductos } from "./cargar_productos.js";
import { returnFaqs } from "./common_pages/faqs.js";
import { returnSello } from "./common_pages/sellocalidad.js";
import { returnSpecsWPC } from "./common_pages/specs.js";
import { returnVentajas } from "./common_pages/ventajas.js";
// import { traerProducto } from "./json_connection.js";

// animación en hero
const typed = new Typed(`.typed`, {
  stringsElement: `#cadenas-texto`,
  typeSpeed: 75,
  startDelay: 10,
  backSpeed: 75,
  smartBackspace: true,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  showCursor: true,
  cursoChar: `|`,
  contentType: `html`,
});

document.getElementById("specsWPC").innerHTML = returnSpecsWPC(0);
document.getElementById("faqs").innerHTML = returnFaqs();
document.getElementById("ventajas").innerHTML = returnVentajas(0);
document.getElementById("selloCalidad").innerHTML = returnSello(0);

// document.getElementById("btnDiseno").addEventListener("click", () => {
//   document.getElementById("nombreDiseno").value =
//     localStorage.getItem("nombre_completo");
//   document.getElementById("celularDiseno").value =
//     localStorage.getItem("celular");
//   document.getElementById("correoDiseno").value = localStorage.getItem("email");
// });

document
  .getElementById("btnSolicitarDiseno")
  .addEventListener("click", async () => {
    let validar = true;
    document
      .getElementById("nombreDiseno")
      .removeAttribute("style", "border: 2px solid red;");
    document
      .getElementById("celularDiseno")
      .removeAttribute("style", "border: 2px solid red;");
    document
      .getElementById("correoDiseno")
      .removeAttribute("style", "border: 2px solid red;");

    if (!document.getElementById("nombreDiseno").value) {
      document
        .getElementById("nombreDiseno")
        .setAttribute("style", "border: 2px solid red;");
      validar = false;
    }
    if (!document.getElementById("celularDiseno").value) {
      document
        .getElementById("celularDiseno")
        .setAttribute("style", "border: 2px solid red;");
      validar = false;
    }
    if (!document.getElementById("correoDiseno").value) {
      document
        .getElementById("correoDiseno")
        .setAttribute("style", "border: 2px solid red;");
      validar = false;
    }
    if (!document.getElementById("correoDiseno").value.includes("@")) {
      document
        .getElementById("correoDiseno")
        .setAttribute("style", "border: 2px solid red;");
      validar = false;
    }

    //poner datos de usuario en local storage
    if (validar) {
      localStorage.setItem(
        "nombre_completo",
        document.getElementById("nombreDiseno").value
      );
      localStorage.setItem(
        "celular",
        document.getElementById("celularDiseno").value
      );
      localStorage.setItem(
        "email",
        document.getElementById("correoDiseno").value
      );

      document.getElementById("formDiseno").submit();

      await Swal.fire(
        "¡Solicitud Enviada!",
        "En breve te contactaremos",
        "success"
      );
      location.reload();
    }
  });

// // PINTAR PRODUCTOS

document.getElementById("productosX").innerHTML = await traerMensajeProductos();

//Pintar modal de cotización inmediata con productos

document.getElementById("exampleModal").innerHTML =
  await traerMensajeCotzacion();
