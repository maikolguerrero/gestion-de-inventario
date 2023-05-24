import formulario from "./classes/Formulario.js";
import tablaProducto from "./components/productos.js";
import tablaCategoria from "./components/categorias.js";
import listaCategorias from "./components/listaCategorias.js";
import accionBotonEliminar from "./classes/BotonEliminar.js";

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

d.getElementById("tabla-categorias").addEventListener("click", accionBotonEliminar.eliminarCategoria);





