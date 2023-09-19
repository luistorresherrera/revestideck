export function returnFooter() {
  let mensaje = `<div class="row d-flex flex-row mt-5">
        <div
          class="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-row justify-content-start"
        >
          <div
            class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 footer-margin text-center text-lg-start"
          >
            <img src="../../images/corp/logo-footer.svg" />
          </div>
          <div
            class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 footer-margin text-center text-lg-start"
          >
            <h4>Links</h4>
            <div><a href="../../index.html" target="_self">Inicio</a></div>
            <div><a href="#productos">Productos</a></div>
            <div><a href="#diseno">Diseño e instalación</a></div>
            <div><a data-bs-toggle="modal"
            data-bs-target="#exampleModal">Solicitar cotización inmediata</a></div>
          </div>
        </div>
        <div
          class="row col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-row justify-content-start justify-content-lg-end"
        >
          <div
            class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-3 text-center text-lg-start"
          >
            <h4>Productos</h4>
            <div><a href="./deck_wpc.html" target="_self">Deck WPC</a></div>
            <div><a href="./cortavista_wpc.html" target="_self">Cortavista WPC</a></div>
            <div><a href="./wall_panel_wpc.html" target="_self">Wall Panel WPC</a></div>
            <div><a href="./wall_panel.html" target="_self">Wall Panel</a></div>
            <div><a href="./siding_wpc.html" target="_self">Siding WPC</a></div>
          </div>
          <div
            class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-3 text-center text-lg-start"
          >
            <h4>Dirección</h4>
            Marconi N° 287 - Recoleta, RM, Chile
          </div>
        </div>
      </div>`;
  return mensaje;
}
