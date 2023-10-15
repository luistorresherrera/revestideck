export function returnVentajas(codPage) {
  let instalacion = "../../images/icons/tiempo-reducido-instalacion.svg";
  let mantenimiento = "../../images/icons/ahorro-mantenimiento.svg";
  let stock = "../../images/icons/stock.svg";
  let distribucion = "../../images/icons/distribucion.svg";
  let soporte = "../../images/icons/design.svg";
  let asesoria = "../../images/icons/asesoria.svg";

  if (codPage == 0) {
    instalacion = "./images/icons/tiempo-reducido-instalacion.svg";
    mantenimiento = "./images/icons/ahorro-mantenimiento.svg";
    stock = "./images/icons/stock.svg";
    distribucion = "./images/icons/distribucion.svg";
    soporte = "./images/icons/design.svg";
    asesoria = "./images/icons/asesoria.svg";
  }

  let mensaje = `
<h3>Ventajas de Revestideck</h3>
        <div class="caracteristicas row d-flex flex-row justify-content-around">
          <div
            class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center"
          >
            <img src="${instalacion}" alt="Facil instalación"/>
            <h4>Reduce tiempos y costos de instalación</h4>
          </div>
          <div
            class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center"
          >
            <img src="${mantenimiento}" alt="No requiere mantenimiento"/>
            <h4>Minimiza el costo de mantenimiento</h4>
          </div>
          <div
            class="col-6 col-xs- col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center"
          >
            <img src="${stock}" alt="Tenemos stock de productos"/>
            <h4>Stock variado de productos</h4>
          </div>
          <div
            class="col-6 col-xs- col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center"
          >
            <img src="${distribucion}" alt="Distribución a nivel nacional"/>
            <h4>Distribución en todo Chile</h4>
          </div>
          <div
            class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center"
          >
            <img src="${soporte}" />
            <h4>Soporte en el diseño e instalación</h4>
          </div>
          <div
            class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center"
          >
            <img src="${asesoria}" alt="Asesoría personalizada"/>
            <h4>Asesoría personalizada</h4>
          </div>
        </div>`;
  return mensaje;
}
