import alerta from "../components/alertas.js";
import tablaProducto from "../components/productos.js";
import tablaCategoria from "../components/categorias.js";
import listasCategorias from "../components/listaCategorias.js";

class BotonEliminar {
    // Función para manejar el evento de eliminar un producto
    eliminarProducto(event) {
        alerta.productoEliminado.remove();
        const target = event.target;
        const botonEliminar = target.closest(".btn-eliminar");
        if (botonEliminar) {
            const index = parseInt(botonEliminar.getAttribute("data-index"));
            if (!isNaN(index)) {
                // Obtener productos del estado
                const productos = tablaProducto.getState().productos;
                // Actualizar el array de productos sin el elemento eliminado
                const productosActualizados = productos.filter((_, i) => i !== index);
                // Actualizar el estado con los productos actualizados
                tablaProducto.setState({
                    productos: productosActualizados
                });

                // Actualizar el LocalStorage con los productos actualizados
                localStorage.setItem("productos", JSON.stringify(productosActualizados));

                // Mostrar mensaje de producto eliminado
                alerta.productoEliminado.mostrar();
            }
        }
    }

    eliminarCategoria(event) {
        alerta.categoriaEliminada.remove();
        const target = event.target;
        const botonEliminar = target.closest(".btn-eliminar");
        if (botonEliminar) {
            const index = parseInt(botonEliminar.getAttribute("data-index"));
            if (!isNaN(index)) {
                // Obtener categorías del estado
                const categorias = tablaCategoria.getState().categorias;
                // Actualizar el array de categorías sin el elemento eliminado
                const categoriasActualizadas = categorias.filter((_, i) => i !== index);
                // Actualizar el estado con las categorías actualizadas
                tablaCategoria.setState({
                    categorias: categoriasActualizadas
                });
                // Actualizar la propiedad categoría del componente
                listasCategorias.listaCategorias.setState({
                    categorias: categoriasActualizadas
                });
                listasCategorias.listaCategorias2.setState({
                    categorias: categoriasActualizadas
                });

                // Actualizar el LocalStorage con las categorías actualizadas
                localStorage.setItem("categorias", JSON.stringify(categoriasActualizadas));

                // Mostrar mensaje de categoría eliminada
                alerta.categoriaEliminada.mostrar();
            }
        }
    }
}

const accionBotonEliminar = new BotonEliminar();
export default accionBotonEliminar;