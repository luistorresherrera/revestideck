import { traerDatosProducto } from "./json_connection.js";

const codProducto = document.getElementById("codigoProducto").innerText;

const producto = await traerDatosProducto(codProducto);
console.log(producto);
document
  .getElementById("imagenProducto")
  .setAttribute("src", producto.url_imagen);
document.getElementById("nombreProducto").innerHTML = producto.nombre;
document.getElementById("categoriaProducto").innerHTML = producto.categoria;

document.getElementById(
  "valorTablaProducto"
).innerHTML = `CLP ${producto.precio_tabla}`;
document.getElementById(
  "valorM2Producto"
).innerHTML = `CLP ${producto.precio_m2}`;
document.getElementById(
  "dimensionesProducto"
).innerHTML = `${producto.largo_cm}cm (largo) x ${producto.ancho_cm}cm (ancho) x ${producto.espesor_mm}mm (alto)`;
document.getElementById("descripcionProducto").innerHTML = producto.descripcion;
document.getElementById("materialProducto").innerHTML = producto.material;
document.getElementById("ambientesProducto").innerHTML = producto.ambientes;
let htmlColores = "";
let selectColores = "";
let countColor = 0;
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
document
  .getElementById("inputNombreProducto")
  .setAttribute("value", `${producto.nombre} (Código: ${producto.sku})`);
document.getElementById("selectColorCotizacion").innerHTML = selectColores;

const btnMasCantidad = document.getElementById("masCantidadCotizador");
const btnMenosCantidad = document.getElementById("menosCantidadCotizador");
const inputCantidad = document.getElementById("CantidadCotizador");
const precioFinal = document.getElementById("precioFinal");
recalcularPrecio();
btnMasCantidad.addEventListener("click", () => {
  inputCantidad.value = ++inputCantidad.value;
  recalcularPrecio();
});

btnMenosCantidad.addEventListener("click", () => {
  if (inputCantidad.value > 0) {
    inputCantidad.value = --inputCantidad.value;
    recalcularPrecio();
  }
});

function recalcularPrecio() {
  let cantidad = 0;
  let precio = inputCantidad.value * producto.precio_m2;
  let tiempo = setInterval(() => {
    cantidad += precio / 10;
    precioFinal.innerHTML = cantidad;

    if (cantidad == precio) {
      clearInterval(tiempo);
    }
  }, 20);
}
