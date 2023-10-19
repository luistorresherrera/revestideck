export const cargarSEO = (titulo, descripcion) => {
  // Configurar metadatos SEO con JavaScript
  let pageTitle = titulo;
  let metaDescription = descripcion;
  let metaKeywords =
    "Revesitdeck, Deck, Revestimiento, WPC, Wood Plastic Composite, Wall Panel, Siding, Decoración Interior, Decoracion Exterior, Terraza, Piscina, Pared, Techo, Quincho, Parrilla, Cubierta, Piso, Suelo";

  document.title = pageTitle; // Cambiar el título de la página
  let metaDescriptionTag = document.createElement("meta");
  metaDescriptionTag.name = "description";
  metaDescriptionTag.content = metaDescription;
  document.head.appendChild(metaDescriptionTag); // Agregar la etiqueta de descripción meta

  let metaKeywordsTag = document.createElement("meta");
  metaKeywordsTag.name = "keywords";
  metaKeywordsTag.content = metaKeywords;
  document.head.appendChild(metaKeywordsTag); // Agregar la etiqueta de palabras clave meta
};
