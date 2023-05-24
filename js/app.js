import formulario from "./classes/Formulario.js";
import tablaProducto from "./components/productos.js";
import tablaCategoria from "./components/categorias.js";
import listaCategorias from "./components/listaCategorias.js";
import accionBotonEliminar from "./classes/BotonEliminar.js";
import backup from "./classes/backup.js";

const d = document;

// Renderizar los productos al iniciar la app
d.addEventListener("DOMContentLoaded", () => { tablaProducto.render(); tablaCategoria.render(); listaCategorias.render() });

// Agregar un producto con los datos obtenidos del formulario
const formularioProducto = d.getElementById("formulario-producto");
formularioProducto.addEventListener("submit", formulario.agregarProducto);

// Agregar un producto con los datos obtenidos del formulario
const formularioCategoria = d.getElementById("formulario-categoria");
formularioCategoria.addEventListener("submit", formulario.agregarCategoria);

// Borrar producto con el boton de eliminar
d.getElementById("tabla-productos").addEventListener("click", accionBotonEliminar.eliminarProducto);

// Borrar categoría con el boton de eliminar
d.getElementById("tabla-categorias").addEventListener("click", accionBotonEliminar.eliminarCategoria);


// Exportar datos del inventario
d.getElementById("tabla-productos").addEventListener("click", backup.exportarDatos);
d.getElementById("tabla-categorias").addEventListener("click", backup.exportarDatos);

// Obtener una referencia al elemento de entrada de archivo
const inputArchivo = document.getElementById("formFile");

// Agrega el evento de cambio al elemento de entrada de archivo
inputArchivo.addEventListener("change", backup.importarDatos);



