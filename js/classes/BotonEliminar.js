import alerta from "../components/alerta.js";
import tablaProducto from "../components/productos.js";

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
  }
  


const accionBotonEliminar = new BotonEliminar();
export default accionBotonEliminar;