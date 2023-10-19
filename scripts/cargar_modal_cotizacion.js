import { traerProductoIndex } from "./json_connection.js";

export async function traerMensajeCotzacion() {
  const listaProductoIndex = await traerProductoIndex();

  let mensajeModalCotizacion = `<div class="modal-dialog modal-dialog-centered">
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
  listaProductoIndex.forEach((element) => {
    mensajeModalCotizacion =
      mensajeModalCotizacion +
      `<a href="./pages/productos/${element.html_name}.html"
    <div class="d-flex flex-row card-productos-cotizacion">
  <div class="image-cotizacion">
    <img src="./images/productos/producto/${element.html_name}.png" alt="${element.nombre}"/>
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
  return mensajeModalCotizacion;
}
