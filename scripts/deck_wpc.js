import { returnFaqs } from "./common_pages/faqs.js";
import { returnFooter } from "./common_pages/footer.js";
import { returnOtrosProductos } from "./common_pages/otrosProductos.js";
import { returnSello } from "./common_pages/sellocalidad.js";
import { returnSpecsWPC } from "./common_pages/specs.js";
import { returnVentajas } from "./common_pages/ventajas.js";
import { returnNavegacion } from "./common_pages/navigation.js";
import { traerDatosProducto, traerProducto } from "./json_connection.js";

//trae el codigo del producto a buscar en base de datos
const codProducto = document.getElementById("codigoProducto").innerText;

//hacer el preload de las secciones comunes
document.getElementById("footer").innerHTML = returnFooter();
document.getElementById("specsWPC").innerHTML = returnSpecsWPC();
document.getElementById("faqs").innerHTML = returnFaqs();
document.getElementById("ventajas").innerHTML = returnVentajas();
document.getElementById("selloCalidad").innerHTML = returnSello();
document.getElementById("navegacion").innerHTML = returnNavegacion();
document.getElementById("seccionProductos").innerHTML = returnOtrosProductos(
  Number(codProducto)
);

// asigna el resultado del objeto encontrado en la base de datos basado en le código del producto
const producto = await traerDatosProducto(codProducto);

//pone la imagen de portada del producto

document.getElementById(
  "hero-portada-deck"
).style.backgroundImage = `url('${producto.url_portada}')`;
// coloca los datos en el primer cuadro del producto
document
  .getElementById("imagenProducto")
  .setAttribute("src", producto.url_imagen);
document.getElementById("nombreProducto").innerHTML = producto.nombre;
document.getElementById("categoriaProducto").innerHTML = producto.categoria;
document.getElementById("valorTablaProducto").innerHTML = `CLP ${Number(
  producto.precio_tabla
).toLocaleString("es")}`;
document.getElementById("valorM2Producto").innerHTML = `CLP ${Number(
  producto.precio_m2
).toLocaleString("es")}`;
document.getElementById(
  "dimensionesProducto"
).innerHTML = `${producto.largo_cm}cm (largo) x ${producto.ancho_cm}cm (ancho) x ${producto.espesor_mm}mm (alto)`;
document.getElementById("descripcionProducto").innerHTML = producto.descripcion;
document.getElementById("materialProducto").innerHTML = producto.material;
document.getElementById("ambientesProducto").innerHTML = producto.ambientes;
let htmlColores = "";
let selectColores = "";
let countColor = 0;

//trae de base de datos todos los colores para ponerlos en el cuadro de descripción y cotización
producto.colores.forEach((element) => {
  htmlColores =
    htmlColores +
    `<div class="col producto-color-div">
  <div class="producto-color">
    <img
      src="${element.url}"
    />
  </div>
  <p>${element.color}</p>
</div>`;
  if (countColor == 0) {
    selectColores =
      selectColores +
      `<option selected value="${countColor}">${element.color}</option>`;
  } else {
    selectColores =
      selectColores + `<option value="${countColor}">${element.color}</option>`;
  }
  countColor = ++countColor;
});
document.getElementById("coloresProducto").innerHTML = htmlColores;

// pinta el cuadro de cotización con los datos traidos de base de datos
document
  .getElementById("inputNombreProducto")
  .setAttribute("value", `${producto.nombre} (Código: ${producto.sku})`);
document.getElementById("selectColorCotizacion").innerHTML = selectColores;

const btnMasCantidad = document.getElementById("masCantidadCotizador");
const btnMenosCantidad = document.getElementById("menosCantidadCotizador");
const inputCantidad = document.getElementById("CantidadCotizador");
const precioFinal = document.getElementById("precioFinal");
//calcula el precio que debe aparecer en el cotizador por primera vez por una unidad
recalcularPrecio();

// incrementa la cantidad de productos
btnMasCantidad.addEventListener("click", () => {
  inputCantidad.value = ++inputCantidad.value;
  recalcularPrecio();
});
// reduce la cantidad de productos
btnMenosCantidad.addEventListener("click", () => {
  if (inputCantidad.value > 1) {
    inputCantidad.value = --inputCantidad.value;
    recalcularPrecio();
  }
});

// modifica el select de tipo de cotización

document
  .getElementById("selectTipoCotizacion")
  .addEventListener("change", () => {
    let precio = "";
    if (document.getElementById("selectTipoCotizacion").value == 0) {
      precio = "Indica la cantidad de tablas a cotizar:";
    } else {
      precio = "Indica la cantidad de metros cuadrados (m2) a cotizar:";
    }
    document.getElementById("mensajeCantidad").innerHTML = precio;
    recalcularPrecio();
  });

// sucede cuando cambia la celda de cantidad de producto
let valorAnterior = document.getElementById("CantidadCotizador").value;
document.getElementById("CantidadCotizador").addEventListener("input", () => {
  // Obtiene el valor actual del campo de entrada
  let valor = document.getElementById("CantidadCotizador").value;

  // Reemplaza todo lo que no sea dígito con una cadena vacía
  valor = valor.replace(/\D/g, "");

  // Actualiza el valor del campo de entrada con solo los dígitos
  document.getElementById("CantidadCotizador").value = valor;
  if (valorAnterior != valor) {
    recalcularPrecio();
    valorAnterior = valor;
  }
});

// función de recálculo del precio

function recalcularPrecio() {
  let cantidad = 0;
  let precio = 0;
  let equivalencia = "";

  if (Number(document.getElementById("selectTipoCotizacion").value) == 1) {
    precio = Number(inputCantidad.value) * producto.precio_m2;
    equivalencia = `(Equivale a ${Math.ceil(
      Number(inputCantidad.value) /
        ((Number(producto.largo_cm) / 100) * (Number(producto.ancho_cm) / 100))
    )} tablas)`;
  } else {
    precio = Number(inputCantidad.value) * producto.precio_tabla;
    equivalencia = `(Equivale a ${(
      Number(inputCantidad.value) *
      ((Number(producto.largo_cm) / 100) * (Number(producto.ancho_cm) / 100))
    ).toFixed(2)} m2)`;
  }

  let tiempo = setInterval(() => {
    cantidad += precio / 10;
    precioFinal.innerHTML = cantidad.toLocaleString("es");

    if (cantidad == precio) {
      clearInterval(tiempo);
    }
  }, 20);

  document.getElementById("equivalencia").innerHTML = equivalencia;
}

//pintar garantía, instalacion e información adicional

document.getElementById("garantia").innerHTML = producto.garantia;
document.getElementById("info_adicional").innerHTML = producto.info_adicional;
document.getElementById("instalacion").innerHTML = producto.instalacion;

//Pintar modal de cotización inmediata con productos
const listaProductos = await traerProducto();
let mensajeModalCotizacion = `<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title">
      Selecciona el producto que deseas cotizar:
    </h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body">`;
listaProductos.forEach((element) => {
  mensajeModalCotizacion =
    mensajeModalCotizacion +
    `<a href="./pages/productos/${element.html_name}.html"
    <div class="d-flex flex-row card-productos-cotizacion">
  <div class="image-cotizacion">
    <img src="${element.url_imagen}" />
  </div>
  <div class="row d-flex flex-column">
    <div><h4>${element.nombre}</h4></div>
    <div>
      <p>
      ${element.descripcion_corta}
      </p>
    </div>
  
</div></a>`;
});
mensajeModalCotizacion =
  mensajeModalCotizacion +
  `</div>
<div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-dismiss="modal"
  >
    Cerrar
  </button>
</div>
</div>
</div>`;

document.getElementById("exampleModal").innerHTML = mensajeModalCotizacion;

//pegar todos los datos en el modal de presupuesto
document.getElementById("btnPresupuesto").addEventListener("click", () => {
  document.getElementById("productoPresupuesto").innerHTML =
    document.getElementById("inputNombreProducto").value;
  document.getElementById("colorPresupuesto").innerHTML =
    document.getElementById("selectColorCotizacion").options[
      document.getElementById("selectColorCotizacion").selectedIndex
    ].text;
  document.getElementById("cantidadPresupuesto").innerHTML =
    document.getElementById("CantidadCotizador").value;
  document.getElementById("precioPresupuesto").innerHTML = `CLP ${
    document.getElementById("precioFinal").innerHTML
  } + IVA`;

  document.getElementById("nombrePresupuesto").value =
    localStorage.getItem("nombre_completo");
  document.getElementById("celularPresupuesto").value =
    localStorage.getItem("celular");
  document.getElementById("correoPresupuesto").value =
    localStorage.getItem("email");
});

//validar los datos cuando el cliente completa el formulario de modale de prupuesto
document
  .getElementById("btnSolicitarDescuento")
  .addEventListener("click", () => {
    let validar = true;
    document
      .getElementById("nombrePresupuesto")
      .removeAttribute("style", "border: 2px solid red;");
    document
      .getElementById("celularPresupuesto")
      .removeAttribute("style", "border: 2px solid red;");
    document
      .getElementById("correoPresupuesto")
      .removeAttribute("style", "border: 2px solid red;");

    if (!document.getElementById("nombrePresupuesto").value) {
      document
        .getElementById("nombrePresupuesto")
        .setAttribute("style", "border: 2px solid red;");
      validar = false;
    }
    if (!document.getElementById("celularPresupuesto").value) {
      document
        .getElementById("celularPresupuesto")
        .setAttribute("style", "border: 2px solid red;");
      validar = false;
    }
    if (!document.getElementById("correoPresupuesto").value) {
      document
        .getElementById("correoPresupuesto")
        .setAttribute("style", "border: 2px solid red;");
      validar = false;
    }
    if (!document.getElementById("correoPresupuesto").value.includes("@")) {
      document
        .getElementById("correoPresupuesto")
        .setAttribute("style", "border: 2px solid red;");
      validar = false;
    }

    //poner datos de usuario en locas storage
    if (validar) {
      localStorage.setItem(
        "nombre_completo",
        document.getElementById("nombrePresupuesto").value
      );
      localStorage.setItem(
        "celular",
        document.getElementById("celularPresupuesto").value
      );
      localStorage.setItem(
        "email",
        document.getElementById("correoPresupuesto").value
      );
    }
  });

//validar que el número de celular sean solo numeros
document.getElementById("celularPresupuesto").addEventListener("input", () => {
  let celular = document.getElementById("celularPresupuesto").value;
  celular = celular.replace(/\D/g, "");
  document.getElementById("celularPresupuesto").value = celular;
});
