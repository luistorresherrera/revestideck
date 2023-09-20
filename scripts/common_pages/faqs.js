export function returnFaqs() {
  let mensaje = `<h3>Preguntas frecuentes de nuestros clientes</h3>
        <div class="row justify-content-center">
          <div class="col-10 text-start">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ¿Qué es WPC?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                  WPC son las siglas de "Wood-Plastic Composite" en inglés, que se traduce como "Compuesto de Madera y Plástico" en español. Es un material compuesto que se utiliza comúnmente en la construcción y la fabricación de productos que buscan combinar las propiedades de la madera y el plástico para obtener ventajas específicas. Un producto WPC generalmente está compuesto por una mezcla de fibras de madera o serrín y plástico, a menudo reciclado. La proporción exacta de madera y plástico puede variar según el fabricante y el producto final deseado. Este compuesto se procesa mediante extrusión u otros métodos de moldeo para crear productos como tablas de terrazas, revestimientos de paredes, vallas, muebles de exterior y más.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ¿Cuál es la diferencia entre WPC y PVC?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                  Las diferencias clave entre WPC (Wood-Plastic Composite) y PVC (Policloruro de Vinilo) se centran en sus componentes, apariencia, resistencia al agua, durabilidad, mantenimiento y costos. WPC combina madera y plástico, imita la madera, es resistente al agua pero requiere algo de mantenimiento, mientras que el PVC es completamente sintético, no imita la madera, es altamente resistente al agua, de bajo mantenimiento y a menudo más costoso.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ¿Por qué conviene usar WPC para la decoración?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                  El WPC es una elección atractiva para la decoración debido a su aspecto similar a la madera, versatilidad de diseño, resistencia a la humedad y durabilidad, además de su bajo mantenimiento y contribución a la sostenibilidad.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    ¿Cómo puedo comprar los productos?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Los productos que ofrecemos los puedes adquirir por medio esta página web o puedes comunicarte con nuestros asesores por Whatsapp.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    ¿En cuánto tiempo me hacen la entrega de los productos?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Normalmente las entregas son inmediatas porque los productos los tenemos en stock; sin embargo, en caso se requiera importación, el tiempo de entrega sería dentro de los 45 días calendario.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  return mensaje;
}
