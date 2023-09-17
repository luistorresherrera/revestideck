export function returnOtrosProductos(codProducto) {
  let mensaje = `<div id="productos" class="row col-12 text-center">
    <h3>Otros productos que te pueden interesar</h3>
  </div>
  <div class="row d-flex justify-content-around">`;

  if (codProducto != 1) {
    mensaje =
      mensaje +
      `
    <div class="col-11 col-sm-11 col-md-4 col-lg-3 col-xl-3">
      <div class="card">
        <div class="card-product-image">
          <img src="../../images/productos/deck-wpc.jpeg" />
          <div class="card-product-image-type text-end">
            <span>Exterior / Interior</span>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Deck WPC</h5>
          <p class="card-text">
            Ideal para piscinas, quinchos, casas de playa, terrazas e
            interiores elegantes.
          </p>
          <div class="card-text d-flex flex-row">
            <div><p>Colores:</p></div>
            <div class="d-flex colors">
              <svg class="cafeoscuro">
                <circle cx="15" cy="13" r="10" /></svg
              ><svg><circle cx="15" cy="13" r="10" class="gris" /></svg
              ><svg>
                <circle cx="15" cy="13" r="10" class="grisclaro" /></svg
              ><svg>
                <circle cx="15" cy="13" r="10" class="cafecaoba" />
              </svg>
            </div>
          </div>

          <div class="card-product-detail-button align-self-end">
            <a href="" class="btnMasDetalles">Más información</a>
            <a href="" class="btnCotizarProducto">Cotizar</a>
          </div>
        </div>
      </div>
    </div>`;
  }
  if (codProducto != 2) {
    mensaje =
      mensaje +
      `
    <div class="col-11 col-sm-11 col-md-4 col-lg-3 col-xl-3">
      <div class="card">
        <div class="card-product-image">
          <img src="../../images/productos/cortavista-wpc.jpeg" />
          <div class="card-product-image-type text-end">
            <span>Exterior / Interior</span>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Cortavista WPC</h5>
          <p class="card-text">
            Permite separar ambientes de una manera muy elegante,
            limitando la visión de un lado al otro.
          </p>
          <div class="card-text d-flex flex-row">
            <div><p>Colores:</p></div>
            <div class="d-flex colors">
              <svg class="cafeoscuro">
                <circle cx="15" cy="13" r="10" />
              </svg>
            </div>
          </div>
          <div class="card-product-detail-button align-self-end">
            <a href="" class="btnMasDetalles">Más información</a>
            <a href="" class="btnCotizarProducto">Cotizar</a>
          </div>
        </div>
      </div>
    </div>`;
  }
  if (codProducto != 3) {
    mensaje =
      mensaje +
      `
    <div class="col-11 col-sm-11 col-md-4 col-lg-3 col-xl-3">
      <div class="card">
        <div class="card-product-image">
          <img src="../../images/productos/wall-panel-wpc.jpeg" />
          <div class="card-product-image-type text-end">
            <span>Exterior / Interior</span>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Wall Panel WPC</h5>
          <p class="card-text">
            Excelente para decorar distintos tipos de ambientes con un
            estilo elegante, moderno y de alta duración.
          </p>
          <div class="card-text d-flex flex-row">
            <div><p>Colores:</p></div>
            <div class="d-flex colors">
              <svg class="marronoscuro">
                <circle cx="15" cy="13" r="10" />
              </svg>
            </div>
          </div>
          <div class="card-product-detail-button align-self-end">
            <a href="" class="btnMasDetalles">Más información</a>
            <a href="" class="btnCotizarProducto">Cotizar</a>
          </div>
        </div>
      </div>
    </div>`;
  }
  if (codProducto != 4) {
    mensaje =
      mensaje +
      `
    <div class="col-11 col-sm-11 col-md-4 col-lg-3 col-xl-3">
      <div class="card">
        <div class="card-product-image">
          <img src="../../images/productos/wall-panel-interior.webp" />
          <div class="card-product-image-type text-end">
            <span>Interior</span>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Wall Panel</h5>
          <p class="card-text">
            Excelente para decorar distintos tipos de ambientes con un
            estilo elegante y moderno.
          </p>
          <div class="card-text d-flex flex-row">
            <div><p>Colores:</p></div>
            <div class="d-flex colors">
              <svg class="negro"><circle cx="15" cy="13" r="10" /></svg
              ><svg><circle cx="15" cy="13" r="10" class="marron" /></svg>
            </div>
          </div>
          <div class="card-product-detail-button align-self-end">
            <a href="" class="btnMasDetalles">Más información</a>
            <a href="" class="btnCotizarProducto">Cotizar</a>
          </div>
        </div>
      </div>
    </div>`;
  }
  if (codProducto != 5) {
    mensaje =
      mensaje +
      `
    <div class="col-11 col-sm-11 col-md-4 col-lg-3 col-xl-3">
      <div class="card">
        <div class="card-product-image">
          <img src="../../images/productos/siding-wpc.jpeg" />
          <div class="card-product-image-type text-end">
            <span>Exterior</span>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Siding WPC</h5>
          <p class="card-text">
            Revestimiento de WPC utilizado normalmente para fachadas para
            casas y edificios.
          </p>
          <div class="card-text d-flex flex-row">
            <div><p>Colores:</p></div>
            <div class="d-flex colors">
              <svg class="marronclaro">
                <circle cx="15" cy="13" r="10" /></svg
              ><svg>
                <circle cx="15" cy="13" r="10" class="grisclaro" /></svg
              ><svg><circle cx="15" cy="13" r="10" class="gris" /></svg
              ><svg><circle cx="15" cy="13" r="10" class="marron" /></svg
              ><svg><circle cx="15" cy="13" r="10" class="negro" /></svg>
            </div>
          </div>
          <div class="card-product-detail-button align-self-end">
            <a href="" class="btnMasDetalles">Más información</a>
            <a href="" class="btnCotizarProducto">Cotizar</a>
          </div>
        </div>
      </div>
    </div>`;
  }
  mensaje = mensaje + `</div>`;
  return mensaje;
}
