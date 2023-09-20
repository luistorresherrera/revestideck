import { traerProducto } from "./json_connection.js";

export async function traerMensajeProductos() {
  const listaProductoIndex = await traerProducto();

  // PINTAR PRODUCTOS

  let mensajeProductos = `<div id="productos" class="row col-12 text-center">
  <h3>Productos TOP3</h3>
  </div>
  <div class="row d-flex justify-content-around">`;

  listaProductoIndex.forEach((element) => {
    let mensajeColor = "";

    mensajeProductos =
      mensajeProductos +
      `<div class="col-11 col-sm-11 col-md-4 col-lg-4 col-xl-4">
        <div class="card">
        <div class="card-product-image">
        <img src="./images/productos/perfil/${element.html_name}.png" />
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
                <img src="./images/productos/colores/${element.html_name}_${elementColor.url}.png" />
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
  return mensajeProductos;
}
