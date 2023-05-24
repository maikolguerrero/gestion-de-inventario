import Producto from "./Producto.js";
import tablaProducto from "../components/productos.js";
import alerta from "../components/alerta.js";

class Formulario {
    // Función para manejar el envío del formulario para agregar productos
    agregarProducto(event) {
        event.preventDefault(); // Cancelar el comportamiento por defecto de actualizar el formulario
        // Validación de los campos del formulario
        if (!this.checkValidity()) {
            this.classList.add('was-validated'); // Agregar clase de validación Bootstrap
        } else {
            event.preventDefault(); // Cancelar el comportamiento por defecto de actualizar el formulario

            // Capturar los valores del producto (guardarlos en constantes)
            const nombre = document.getElementById("nombre-producto").value;
            const categoria = document.getElementById("categoria").value;
            const presentacion = document.getElementById("presentacion").value;
            const descripcion = document.getElementById("descripcion").value;
            const precio = document.getElementById("precio").value;
            const moneda = document.getElementById("moneda").value;
            const cantidad = document.getElementById("cantidad").value;

            // Crear un nuevo objeto de tipo Producto para guardar la información
            const producto = new Producto(nombre, categoria, presentacion, descripcion, precio, moneda, cantidad);

            // Guardar el producto en el LocalStorage
            let productos = JSON.parse(localStorage.getItem('productos')) || [];
            productos.push(producto);
            localStorage.setItem('productos', JSON.stringify(productos));

            // Actualizar la propiedad productos del componente
            tablaProducto.setState({
                productos: productos
            });

            // Limpiar el formulario
            this.reset();

            // Quitar la clase de validación del formulario
            this.classList.remove('was-validated');

            //Mostrar Alerta
            alerta.productoAgregado.mostrar();
        }
    }
}

const formulario = new Formulario();
export default formulario;