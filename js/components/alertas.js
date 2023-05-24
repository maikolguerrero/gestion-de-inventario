import Alerta from "../classes/Alerta.js";

const productoAgregado = new Alerta({
    el: "#alerta-container-agregar-producto",
    data: {
        mensaje: "Producto creado exitosamente.",
        color: "success"
    },
    template: function () {
        return this.templateAlerta();
    }
});

const productoEliminado = new Alerta({
    el: "#alerta-container-inventario-producto",
    data: {
        mensaje: "Producto eliminado exitosamente.",
        color: "success"
    },
    template: function () {
        return this.templateAlerta();
    }
});

const categoriaAgregada = new Alerta({
    el: "#alerta-container-agregar-categoria",
    data: {
        mensaje: "Categoría creada exitosamente.",
        color: "success"
    },
    template: function () {
        return this.templateAlerta();
    }
});

const categoriaEliminada = new Alerta({
    el: "#alerta-container-inventario-categoria",
    data: {
        mensaje: "Categoría eliminada exitosamente.",
        color: "success"
    },
    template: function () {
        return this.templateAlerta();
    }
});

const inventarioExportado = new Alerta({
    el: "#alerta-container-inventario-producto",
    data: {
        mensaje: "Se han exportado los datos del inventario correctamente.",
        color: "success"
    },
    template: function () {
        return this.templateAlerta();
    }
});

const inventarioImportado = new Alerta({
    el: "#alerta-container-inventario-producto",
    data: {
        mensaje: "Se han importado los datos del inventario correctamente.",
        color: "success"
    },
    template: function () {
        return this.templateAlerta();
    }
});

const inventarioImportado2 = new Alerta({
    el: "#alerta-container-inventario-categoria",
    data: {
        mensaje: "Se han importado los datos del inventario correctamente.",
        color: "success"
    },
    template: function () {
        return this.templateAlerta();
    }
});

const errorLeerJSON = new Alerta({
    el: "#alerta-container-inventario-producto",
    data: {
        mensaje: "Error al leer el archivo JSON.",
        color: "danger"
    },
    template: function () {
        return this.templateAlerta();
    }
});

const errorFaltanDatosJSON = new Alerta({
    el: "#alerta-container-inventario-producto",
    data: {
        mensaje: "El archivo JSON no contiene los datos esperados.",
        color: "danger"
    },
    template: function () {
        return this.templateAlerta();
    }
});

const errorDatosInvalidosJSON = new Alerta({
    el: "#alerta-container-inventario-producto",
    data: {
        mensaje: "El archivo JSON contiene datos inválidos.",
        color: "danger"
    },
    template: function () {
        return this.templateAlerta();
    }
});

export default {
    productoAgregado,
    productoEliminado,
    categoriaAgregada,
    categoriaEliminada,
    inventarioExportado,
    inventarioImportado,
    inventarioImportado2,
    errorLeerJSON,
    errorFaltanDatosJSON,
    errorDatosInvalidosJSON
};


