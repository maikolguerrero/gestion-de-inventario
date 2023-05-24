import Alerta from "../classes/Alerta.js";

const productoAgregado = new Alerta({
    el: "#alerta-container-agregar-producto",
    data: {
        mensaje: "Producto creado exitosamente.",
        color: "success"
    },
    template: function () {
        return `<div class="position-fixed top-0 end-0 p-3 m-2">
            <div class="alert alert-${this.data.color} alert-dismissible fade show" role="alert">
            ${this.data.mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>`;
    }
});

const productoEliminado = new Alerta({
    el: "#alerta-container-inventario-producto",
    data: {
        mensaje: "Producto eliminado exitosamente.",
        color: "success"
    },
    template: function () {
        return `<div class="position-fixed top-0 end-0 p-3 m-2">
            <div class="alert alert-${this.data.color} alert-dismissible fade show" role="alert">
            ${this.data.mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>`;
    }
});

const categoriaAgregada = new Alerta({
    el: "#alerta-container-agregar-categoria",
    data: {
        mensaje: "Categoría creada exitosamente.",
        color: "success"
    },
    template: function () {
        return `<div class="position-fixed top-0 end-0 p-3 m-2">
            <div class="alert alert-${this.data.color} alert-dismissible fade show" role="alert">
            ${this.data.mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>`;
    }
});

const categoriaEliminada = new Alerta({
    el: "#alerta-container-inventario-categoria",
    data: {
        mensaje: "Categoría eliminada exitosamente.",
        color: "success"
    },
    template: function () {
        return `<div class="position-fixed top-0 end-0 p-3 m-2">
            <div class="alert alert-${this.data.color} alert-dismissible fade show" role="alert">
            ${this.data.mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>`;
    }
});

export default { productoAgregado, productoEliminado, categoriaAgregada, categoriaEliminada };


