export function returnSello(codPage) {
  let calidad = "../../images/icons/calidad.png";

  if (codPage == 0) {
    let calidad = "./images/icons/calidad.png";
  }

  let mensaje = `<img src="${calidad}" />`;
  return mensaje;
}
