export const traerDatosProducto = async (id_producto) => {
  const productoSeleccionado = {};
  const response = await fetch("../../json/productos.json");
  const data = await response.json();

  await data.forEach((element) => {
    if (element.id == id_producto) {
      productoSeleccionado.nombre = element.nombre;
      productoSeleccionado.id = element.id;
      productoSeleccionado.sku = element.sku;
      productoSeleccionado.categoria = element.categoria;
      productoSeleccionado.descripcion = element.descripcion;
      productoSeleccionado.material = element.material;
      productoSeleccionado.ambientes = element.ambientes;
      productoSeleccionado.precio_tabla = element.precio_tabla;
      productoSeleccionado.precio_m2 = element.precio_m2;
      productoSeleccionado.largo_cm = element.largo_cm;
      productoSeleccionado.ancho_cm = element.ancho_cm;
      productoSeleccionado.espesor_mm = element.espesor_mm;
      productoSeleccionado.ambientes = element.ambientes;
      productoSeleccionado.url_imagen = element.url_imagen;
      productoSeleccionado.url_portada = element.url_portada;
      productoSeleccionado.garantia = element.garantia;
      productoSeleccionado.info_adicional = element.info_adicional;
      productoSeleccionado.instalacion = element.instalacion;

      const arrayColores = [];
      const colores = element.colores;

      colores.forEach((elementColor) => {
        arrayColores.push({ color: elementColor.color, url: elementColor.url });
      });
      productoSeleccionado.colores = arrayColores;
    }
  });

  return productoSeleccionado;
};
