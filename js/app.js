import formulario from "./classes/Formulario.js";
import tablaProducto from "./components/productos.js";
import accionBotonEliminar from "./classes/BotonEliminar.js";

const d = document;

// Renderizar los productos al iniciar la app
d.addEventListener("DOMContentLoaded", tablaProducto.render());

// Agregar un producto con los datos obtenidos del formulario
const formularioProducto = d.getElementById("formulario-producto");
formularioProducto.addEventListener("submit", formulario.agregarProducto);

// Borrar producto con el boton de eliminar
d.getElementById("tabla-productos").addEventListener("click", accionBotonEliminar.eliminarProducto);





