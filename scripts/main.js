import { returnFaqs } from "./common_pages/faqs.js";
import { returnSello } from "./common_pages/sellocalidad.js";
import { returnSpecsWPC } from "./common_pages/specs.js";
import { returnVentajas } from "./common_pages/ventajas.js";
import { traerProducto } from "./json_connection.js";

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

document.getElementById("btnDiseno").addEventListener("click", () => {
  document.getElementById("nombreDiseno").value =
    localStorage.getItem("nombre_completo");
  document.getElementById("celularDiseno").value =
    localStorage.getItem("celular");
  document.getElementById("correoDiseno").value = localStorage.getItem("email");
});

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

const listaProductoIndex = await traerProducto();

// PINTAR PRODUCTOS

let mensajeProductos = `<div id="productos" class="row col-12 text-center">
  <h3>Productos TOP</h3>
  </div>
  <div class="row d-flex justify-content-around">`;

listaProductoIndex.forEach((element) => {
  let mensajeColor = "";

  mensajeProductos =
    mensajeProductos +
    `<div class="col-11 col-sm-11 col-md-4 col-lg-4 col-xl-4">
        <div class="card">
        <div class="card-product-image">
        <img src="${element.url_perfil_producto}" />
        <div class="card-product-image-type text-end">
        <span>${element.ambientes}</span>
        </div>
        </div>
        <div class="card-body">
        <h5 class="card-title">${element.nombre}</h5>
        <p class="card-text">
        ${element.descripcion_corta}
        </p>
        <div class="card-text d-flex flex-row">
        <div><p>Colores:</p></div>
        <div class="d-flex colors">`;

  element.colores.forEach((elementColor) => {
    mensajeColor =
      mensajeColor +
      `<div class="producto-color-chico">
                <img src="${elementColor.url}" />
                </div>`;
  });
  mensajeProductos = mensajeProductos + mensajeColor;
  mensajeProductos =
    mensajeProductos +
    `</div>
          </div>

          <div class="card-product-detail-button align-self-end">
          <a
          href="./pages/productos/${element.html_name}.html"
          class="btnMasDetalles"
          >Más información</a
          >
          <a
          href="./pages/productos/${element.html_name}.html"
          class="btnCotizarProducto"
                      >Cotizar</a
                    >
                  </div>
                </div>
              </div>
            </div>`;
});
mensajeProductos = mensajeProductos + `</div>`;

document.getElementById("productosX").innerHTML = mensajeProductos;
