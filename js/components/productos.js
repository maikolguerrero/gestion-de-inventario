import Component from '../component.js';

// Buscar productos en el LocalStorage
let productos = JSON.parse(localStorage.getItem('productos')) || [];

const tablaProducto = new Component({
  el: "#tabla-productos",
  data: {
    productos: productos,
  },
  template: function (props) {
    if (props.productos.length < 1) {
      return `<h2 class="text-center">No hay productos guardados actualmente.</h2>`;
    }

    let i = 0;
    let filas = props.productos
      .map((producto, index) => {
        i++;
        return `
            <tr>
              <th scope="row">${i}</th>
              <td>${producto.nombre}</td>
              <td>${producto.presentacion}</td>
              <td>${producto.categoria}</td>
              <td class="td-wrap">${producto.descripcion}</td>
              <td>${producto.precio} ${producto.moneda}</td>
              <td>${producto.cantidad}</td>
              <td>
                <div class="text-center d-flex justify-content-center">
                  <button type="button" class="btn btn-outline-info me-3">
                    <ion-icon name="create-outline"></ion-icon>
                    Editar
                  </button>
                  <button type="button" class="btn btn-outline-danger me-3 btn-eliminar" data-index="${index}">
                    <ion-icon name="trash-outline"></ion-icon>
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>`;
      })
      .join("");

    return `
      <div class="container-fluid mb-4 col-12 gap-4">
        <div class="mt-4">
          <button class="btn btn-primary exportar">Exportar Inventario</button>
        </div>
      </div>

      <div class="container-fluid mt-4 mb-3 gap-3 d-flex flex-column flex-md-row">
      <form class="d-flex col-md-6 col-12" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>

      <div class="col-md-5 col-12 d.flex justify-content-center">
        <form class="d-flex" role="search-2">
          <select class="form-select form-select-lg me-2" aria-label="Ejemplo de .form-select-md">
            <option selected>Filtra la lista</option>
            <option value="Nombre">Nombre</option>
            <option value="Calidad">Calidad</option>
            <option value="Proveedor">Proveedor</option>
          </select>
          <button class="btn btn-outline-success" type="submit">Filtrar</button>
        </form>
      </div>
    </div>

    <div class="container max-vh-100 table-responsive-xxl">
      <table class="table table-dark table-striped text-center align-middle border border-3 border-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">PRESENTACIÓN</th>
            <th scope="col">CATEGORÍA</th>
            <th scope="col">DESCRIPCIÓN</th>
            <th scope="col">PRECIO</th>
            <th scope="col">CANTIDAD</th>
            <th scope="col">OPCIONES</th>
          </tr>
        </thead>
          <tbody>
            ${filas}
          </tbody>
      </table>
    </div>`;
  }
});

export default tablaProducto;