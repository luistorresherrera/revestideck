import { traerDatosProducto } from "./json_connection.js";

//trae el codigo del producto a buscar en base de datos
const codProducto = document.getElementById("codigoProducto").innerText;

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
  if (inputCantidad.value > 0) {
    inputCantidad.value = --inputCantidad.value;
    recalcularPrecio();
  }
});

// modifica el select de tipo de cotización

document
  .getElementById("selectTipoCotizacion")
  .addEventListener("change", () => {
    recalcularPrecio();
  });

// sucede cuando cambia la celda de cantidad de producto
let valorAnterior = document.getElementById("CantidadCotizador").value;
document.getElementById("CantidadCotizador").addEventListener("input", () => {
  // Obtiene el valor actual del campo de entrada
  var valor = document.getElementById("CantidadCotizador").value;

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
const selectTipoCotizacion = document.getElementById("selectTipoCotizacion");
function recalcularPrecio() {
  let cantidad = 0;
  let precio = 0;

  if (Number(document.getElementById("selectTipoCotizacion").value) == 1) {
    precio = Number(inputCantidad.value) * producto.precio_m2;
  } else {
    precio = Number(inputCantidad.value) * producto.precio_tabla;
  }

  let tiempo = setInterval(() => {
    cantidad += precio / 10;
    precioFinal.innerHTML = cantidad.toLocaleString("es");

    if (cantidad == precio) {
      clearInterval(tiempo);
    }
  }, 20);
}
