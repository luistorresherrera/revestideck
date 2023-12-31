export function returnSpecsWPC(codPage) {
  let agua = "../../images/icons/specs/water-proof.svg";
  let termitas = "../../images/icons/specs/termite-resistance.svg";
  let clima = "../../images/icons/specs/weather-resistance.svg";
  let sostenibilidad = "../../images/icons/specs/sustainability.svg";
  let moho = "../../images/icons/specs/mold-resistance.svg";
  let impactos = "../../images/icons/specs/crash-resistance.svg";

  if (codPage == 0) {
    agua = "./images/icons/specs/water-proof.svg";
    termitas = "./images/icons/specs/termite-resistance.svg";
    clima = "./images/icons/specs/weather-resistance.svg";
    sostenibilidad = "./images/icons/specs/sustainability.svg";
    moho = "./images/icons/specs/mold-resistance.svg";
    impactos = "./images/icons/specs/crash-resistance.svg";
  }

  let mensaje = `<div class="d-flex flex-row">
  <div class="d-flex flex-column col-12 text-center">
    <h3>¿Por qué utilizar productos de WPC?</h3>
    <p>&nbsp;</p>

    <div class="d-flex flex-row justify-content-around"></div>
  </div>
</div>

<div class="row d-flex flex-row justify-content-around text-center">
  <div
    class="row d-flex flex-row col-12 col-xs-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
  >
    <div
      class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 specs-container"
      4
    >
      <div class="specs-item">
        <img
          class="specs-item-icon"
          src="${agua}"
          alt="Resistente al agua y delislizamiento"
        />
        <h4>Resistente al agua</h4>
      </div>
    </div>
    <div
      class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 specs-container"
    >
      <div class="specs-item">
        <img
          class="specs-item-icon"
          src="${termitas}"
          alt="Resistente a las termitas"
        />
        <h4>Resistente a las termitas</h4>
      </div>
    </div>
    <div
      class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 specs-container"
    >
      <div class="specs-item">
        <img
          class="specs-item-icon"
          src="${clima}"
          alt="Resistente a climas extremos"
        />
        <h4>Resistente a climas extremos</h4>
      </div>
    </div>
    <div
      class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 specs-container"
    >
      <div class="specs-item">
        <img
          class="specs-item-icon"
          src="${sostenibilidad}"
          alt="Sostenibilidad mediambiental"
        />
        <h4>Sostenible con el medio ambiente</h4>
      </div>
    </div>
    <div
      class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 specs-container"
    >
      <div class="specs-item">
        <img
          class="specs-item-icon"
          src="${moho}"
          alt="Resistente al moho"
        />
        <h4>Resistente al moho y humedad</h4>
      </div>
    </div>
    <div
      class="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 specs-container"
    >
      <div class="specs-item">
        <img
          class="specs-item-icon"
          src="${impactos}"
          alt="Resistente a los impactos"
        />
        <h4>Resistente a los impactos</h4>
      </div>
    </div>
  </div>
  <div
    class="row col-12 col-xs-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
  >
    <div class="text-start mt-5 mt-lg-0">
      <h4>Gran durabilidad</h4>
      <p>
        Los pisos Deck WPC son extremadamente duraderos y resistentes a
        los elementos, lo que los convierte en una opción ideal para
        áreas expuestas al sol, la lluvia o la humedad. Tus pisos no se
        deformarán, ni agrietarán, ni pudrirán con el paso del tiempo.
      </p>
      <h4>No requiere mantenimiento constante</h4>
      <p>
      La resistencia a la intemperie, la falta de necesidad de selladores o pintura, la resistencia al agua y al moho, la durabilidad y la resistencia a las plagas hacen que los productos WPC sean una opción de bajo mantenimiento para aplicaciones exteriores, lo que los convierte en una elección popular para terrazas, revestimientos y otras aplicaciones al aire libre.
      </p>
      <h4>Resistencia al deslizamiento</h4>
      <p>
        La mayoría de los pisos Deck WPC cuentan con una superficie
        antideslizante, lo que los convierte en una opción segura para
        áreas húmedas, como alrededor de una piscina o un jacuzzi. Esto
        ayuda a prevenir caídas y proporciona una mayor tranquilidad,
        especialmente si tienes niños o adultos mayores en casa.
      </p>
    </div>
  </div>
</div>`;

  return mensaje;
}
