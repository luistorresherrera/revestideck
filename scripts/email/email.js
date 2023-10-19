export const enviarMail = (
  cliente,
  producto,
  color,
  tablas,
  precio,
  celular,
  correo
) => {
  let templateParams = {
    cliente: cliente,
    producto: producto,
    color: color,
    tablas: tablas,
    precio: precio,
    celular: celular,
    correo: correo,
  };

  emailjs.send("service_d87gxhx", "template_ekczxoh", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};
