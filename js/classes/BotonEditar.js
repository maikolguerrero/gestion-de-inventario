import tablaCategoria from "../components/categorias.js";
import tablaProducto from "../components/productos.js";
import modalEditar from "./ModalEditar.js";

class BotonEditar {
    editarProducto(event) {
        const target = event.target;
        const botonEditar = target.closest(".btn-editar");
        if (botonEditar) {
            const index = parseInt(botonEditar.getAttribute("data-index"));
            if (!isNaN(index)) {
                // Obtener productos del estado
                const productos = tablaProducto.getState().productos;

                // Obtener el producto seleccionado para editar
                const productoSeleccionado = productos[index];

                // Asignar los valores del producto a los campos del formulario de edición
                document.getElementById("nombre-producto-editar").value = productoSeleccionado.nombre;
                document.getElementById("categoria-editar").value = productoSeleccionado.categoria;
                document.getElementById("presentacion-editar").value = productoSeleccionado.presentacion;
                document.getElementById("descripcion-editar").value = productoSeleccionado.descripcion;
                document.getElementById("precio-editar").value = productoSeleccionado.precio;
                document.getElementById("moneda-editar").value = productoSeleccionado.moneda;
                document.getElementById("cantidad-editar").value = productoSeleccionado.cantidad;

                // Abre el modal de edición de producto
                modalEditar.modalEditarProducto.show();

                localStorage.setItem("productoSeleccionadoEditarIndex", index);
            }
        }
    }

    editarCategoria(event) {
        const target = event.target;
        const botonEditar = target.closest(".btn-editar");
        if (botonEditar) {
            const index = parseInt(botonEditar.getAttribute("data-index"));
            if (!isNaN(index)) {
                // Obtener categorías del estado
                const categorias = tablaCategoria.getState().categorias;

                // Obtener la categoría seleccionada para editar
                const categoriaSeleccionada = categorias[index];

                // Asignar los valores de la categoría a los campos del formulario de edición
                document.getElementById("nombre-categoria-editar").value = categoriaSeleccionada.nombre;
                document.getElementById("proveedor-editar").value = categoriaSeleccionada.proveedor;
                document.getElementById("calidad-editar").value = categoriaSeleccionada.calidad;
                document.getElementById("descripcion-categoria-editar").value = categoriaSeleccionada.descripcion;

                // Abre el modal de edición de categoría
                modalEditar.modalEditarCategoria.show();

                localStorage.setItem("categoriaSeleccionadaEditarIndex", index);
            }
        }
    }
}

const accionBotonEditar = new BotonEditar();
export default accionBotonEditar;