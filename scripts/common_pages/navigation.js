export function returnNavegacion() {
  let mensaje = `<nav class="navbar navbar-expand-lg align-middle">
  <div class="nav-logoDiv d-flex justify-content-around">
  <a class="navbar-brand" href="../../index.html"
  >
    <img
      src="../../images/corp/favicon.svg"
      alt="Revestideck"
      class="logo-isotipoNav"
    />
    </a>
    <div lass="nav-logoDiv d-flex flex-column justify-content-around">
      <div>
        <a class="navbar-brand" href="../../index.html"
          ><img
            class="logo-nombreNav"
            src="../../images/corp/nombre-revestideck.svg"
            alt="Revestideck"
        /></a>
      </div>
      <div class="tituloH1-nav align-middle">
        <h1>REVESTIMIENTO / DECK WPC</h1>
      </div>
    </div>
  </div>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div
    class="collapse navbar-collapse justify-content-end"
    id="navbarNavDropdown"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="../../index.html"
          >Inicio</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#productos">Productos</a>
      </li>
      
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://wa.me/51987494869/?text=Hola"
          target="_blank"
          >Contáctanos</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link btnDiseno"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          >COTIZACIÓN INMEDIATA</a
        >
      </li>
    </ul>
  </div>
</nav>`;
  return mensaje;
}
