import Producto from "./Producto.js";
import Categoria from "./Categoria.js";
import tablaProducto from "../components/productos.js";
import tablaCategoria from "../components/categorias.js";
import alerta from "../components/alertas.js";
import listasCategorias from "../components/listaCategorias.js";
import ModalEditar from "./ModalEditar.js";


class Formulario {
    // Función para manejar el envío del formulario para agregar productos
    agregarProducto(event) {
        event.preventDefault();

        const nombreInput = document.getElementById("nombre-producto");
        const categoriaInput = document.getElementById("categoria");
        const presentacionInput = document.getElementById("presentacion");
        const descripcionInput = document.getElementById("descripcion");
        const precioInput = document.getElementById("precio");
        const monedaInput = document.getElementById("moneda");
        const cantidadInput = document.getElementById("cantidad");

        const nombre = nombreInput.value.trim();
        const categoria = categoriaInput.value.trim();
        const presentacion = presentacionInput.value.trim();
        const descripcion = descripcionInput.value.trim();
        const precio = precioInput.value.trim();
        const moneda = monedaInput.value.trim();
        const cantidad = cantidadInput.value.trim();

        // Mostrar mensajes de validación para los campos con espacios en blanco
        if (nombre === '') {
            nombreInput.setCustomValidity("Por favor, ingresa un nombre válido.");
        } else {
            nombreInput.setCustomValidity("");
        }
        if (categoria === '') {
            categoriaInput.setCustomValidity("Por favor, ingresa una categoría válida.");
        } else {
            categoriaInput.setCustomValidity("");
        }
        if (presentacion === '') {
            presentacionInput.setCustomValidity("Por favor, ingresa una presentación válida.");
        } else {
            presentacionInput.setCustomValidity("");
        }
        if (descripcion === '') {
            descripcionInput.setCustomValidity("Por favor, ingresa una descripción válida.");
        } else {
            descripcionInput.setCustomValidity("");
        }
        if (precio === '') {
            precioInput.setCustomValidity("Por favor, ingresa un precio válido.");
        } else {
            precioInput.setCustomValidity("");
        }
        if (moneda === '') {
            monedaInput.setCustomValidity("Por favor, ingresa una moneda válida.");
        } else {
            monedaInput.setCustomValidity("");
        }
        if (cantidad === '') {
            cantidadInput.setCustomValidity("Por favor, ingresa una cantidad válida.");
        } else {
            cantidadInput.setCustomValidity("");
        }

        if (!this.checkValidity()) {
            this.classList.add('was-validated');
        } else {

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

    // Función para manejar el envío del formulario para agregar categorías
    agregarCategoria(event) {
        event.preventDefault();

        const nombreInput = document.getElementById("nombre-categoria");
        const proveedorInput = document.getElementById("proveedor");
        const calidadInput = document.getElementById("calidad");
        const descripcionInput = document.getElementById("descripcion-categoria");

        const nombre = nombreInput.value.trim();
        const proveedor = proveedorInput.value.trim();
        const calidad = calidadInput.value.trim();
        const descripcion = descripcionInput.value.trim();

        // Mostrar mensajes de validación para los campos con espacios en blanco
        if (nombre === '') {
            nombreInput.setCustomValidity("Por favor, ingresa un nombre válido.");
        } else {
            nombreInput.setCustomValidity("");
        }
        if (proveedor === '') {
            proveedorInput.setCustomValidity("Por favor, ingresa un proveedor válido.");
        } else {
            proveedorInput.setCustomValidity("");
        }
        if (calidad === '') {
            calidadInput.setCustomValidity("Por favor, ingresa una calidad válida.");
        } else {
            calidadInput.setCustomValidity("");
        }
        if (descripcion === '') {
            descripcionInput.setCustomValidity("Por favor, ingresa una descripción válida.");
        } else {
            descripcionInput.setCustomValidity("");
        }

        // Crear un nuevo objeto de tipo Producto para guardar la información
        const nuevaCategoria = new Categoria(nombre, proveedor, calidad, descripcion);

        // Obtener categorías del LocalStorage
        let categorias = JSON.parse(localStorage.getItem('categorias')) || [];

        // Verificar si el nombre de la categoría ya existe (sin distinguir mayúsculas y minúsculas)
        const categoriaExistente = categorias.find(categoria => categoria.nombre.toLowerCase() === nuevaCategoria.nombre.toLowerCase());
        if (categoriaExistente) {
            nombreInput.setCustomValidity("Por favor, ingresa un nombre válido.");
            return this.classList.add('was-validated');
        }

        if (!this.checkValidity()) {
            this.classList.add('was-validated');
        } else {

            // Guardar la categoría en el LocalStorage
            categorias.push(nuevaCategoria);
            localStorage.setItem('categorias', JSON.stringify(categorias));

            // Actualizar la propiedad categoría del componente
            tablaCategoria.setState({
                categorias: categorias
            });

            // Actualizar la propiedad categoría del componente
            listasCategorias.listaCategorias.setState({
                categorias: categorias
            });
            listasCategorias.listaCategorias2.setState({
                categorias: categorias
            });

            // Limpiar el formulario
            this.reset();

            // Quitar la clase de validación del formulario
            this.classList.remove('was-validated');

            //Mostrar Alerta
            alerta.categoriaAgregada.mostrar();
        }
    }

    editarProducto(event) {
        event.preventDefault();

        const nombreInput = document.getElementById("nombre-producto-editar");
        const categoriaInput = document.getElementById("categoria-editar");
        const presentacionInput = document.getElementById("presentacion-editar");
        const descripcionInput = document.getElementById("descripcion-editar");
        const precioInput = document.getElementById("precio-editar");
        const monedaInput = document.getElementById("moneda-editar");
        const cantidadInput = document.getElementById("cantidad-editar");

        const nombre = nombreInput.value.trim();
        const categoria = categoriaInput.value.trim();
        const presentacion = presentacionInput.value.trim();
        const descripcion = descripcionInput.value.trim();
        const precio = precioInput.value.trim();
        const moneda = monedaInput.value.trim();
        const cantidad = cantidadInput.value.trim();

        // Mostrar mensajes de validación para los campos con espacios en blanco
        if (nombre === '') {
            nombreInput.setCustomValidity("Por favor, ingresa un nombre válido.");
        } else {
            nombreInput.setCustomValidity("");
        }
        if (categoria === '') {
            categoriaInput.setCustomValidity("Por favor, ingresa una categoría válida.");
        } else {
            categoriaInput.setCustomValidity("");
        }
        if (presentacion === '') {
            presentacionInput.setCustomValidity("Por favor, ingresa una presentación válida.");
        } else {
            presentacionInput.setCustomValidity("");
        }
        if (descripcion === '') {
            descripcionInput.setCustomValidity("Por favor, ingresa una descripción válida.");
        } else {
            descripcionInput.setCustomValidity("");
        }
        if (precio === '') {
            precioInput.setCustomValidity("Por favor, ingresa un precio válido.");
        } else {
            precioInput.setCustomValidity("");
        }
        if (moneda === '') {
            monedaInput.setCustomValidity("Por favor, ingresa una moneda válida.");
        } else {
            monedaInput.setCustomValidity("");
        }
        if (cantidad === '') {
            cantidadInput.setCustomValidity("Por favor, ingresa una cantidad válida.");
        } else {
            cantidadInput.setCustomValidity("");
        }

        if (!this.checkValidity()) {
            this.classList.add('was-validated');
        } else {
            // Obtener productos del estado
            const productos = tablaProducto.getState().productos;

            // Obtener el índice del producto a editar
            const index = parseInt(localStorage.getItem("productoSeleccionadoEditarIndex"));
            // Verificar si el índice es válido
            if (!isNaN(index) && index >= 0 && index < productos.length) {
                // Obtener el producto seleccionado para editar
                const productoSeleccionado = productos[index];

                // Actualizar los valores del producto con los campos del formulario de edición
                productoSeleccionado.nombre = nombre;
                productoSeleccionado.categoria = categoria;
                productoSeleccionado.presentacion = presentacion;
                productoSeleccionado.descripcion = descripcion;
                productoSeleccionado.precio = precio;
                productoSeleccionado.moneda = moneda;
                productoSeleccionado.cantidad = cantidad;

                // Actualizar el array de productos en el estado
                tablaProducto.setState({
                    productos: productos
                });

                // Actualizar el LocalStorage con los productos actualizados
                localStorage.setItem("productos", JSON.stringify(productos));


                // Cerrar el modal de edición de producto
                ModalEditar.modalEditarProducto.hide();

                alerta.productoActualizado.mostrar();

                localStorage.removeItem("productoSeleccionadoIndex");
            }
        }
    }

    editarCategoria(event) {
        event.preventDefault();

        const nombreInput = document.getElementById("nombre-categoria-editar");
        const proveedorInput = document.getElementById("proveedor-editar");
        const calidadInput = document.getElementById("calidad-editar");
        const descripcionInput = document.getElementById("descripcion-categoria-editar");

        const nombre = nombreInput.value.trim();
        const proveedor = proveedorInput.value.trim();
        const calidad = calidadInput.value.trim();
        const descripcion = descripcionInput.value.trim();

        // Mostrar mensajes de validación para los campos con espacios en blanco
        if (nombre === '') {
            nombreInput.setCustomValidity("Por favor, ingresa un nombre válido.");
        } else {
            nombreInput.setCustomValidity("");
        }
        if (proveedor === '') {
            proveedorInput.setCustomValidity("Por favor, ingresa un proveedor válido.");
        } else {
            proveedorInput.setCustomValidity("");
        }
        if (calidad === '') {
            calidadInput.setCustomValidity("Por favor, ingresa una calidad válida.");
        } else {
            calidadInput.setCustomValidity("");
        }
        if (descripcion === '') {
            descripcionInput.setCustomValidity("Por favor, ingresa una descripción válida.");
        } else {
            descripcionInput.setCustomValidity("");
        }

        if (!this.checkValidity()) {
            this.classList.add('was-validated');
        } else {
            // Obtener categorías del estado
            const categorias = tablaCategoria.getState().categorias;

            // Obtener el índice de la categoría a editar
            const index = parseInt(localStorage.getItem("categoriaSeleccionadaEditarIndex"));
            // Verificar si el índice es válido
            if (!isNaN(index) && index >= 0 && index < categorias.length) {
                // Obtener la categoría seleccionada para editar
                const categoriaSeleccionada = categorias[index];

                // Actualizar los valores de la categoría con los campos del formulario de edición
                categoriaSeleccionada.nombre = nombre;
                categoriaSeleccionada.proveedor = proveedor;
                categoriaSeleccionada.calidad = calidad;
                categoriaSeleccionada.descripcion = descripcion;

                // Actualizar el array de categorías en el estado
                tablaCategoria.setState({
                    categorias: categorias
                });

                // Actualizar el LocalStorage con las categorías actualizadas
                localStorage.setItem("categorias", JSON.stringify(categorias));

                // Cerrar el modal de edición de categoría
                ModalEditar.modalEditarCategoria.hide();

                alerta.categoriaActualizada.mostrar();

                localStorage.removeItem("categoriaSeleccionadaEditarIndex");
            }
        }
    }
}

const formulario = new Formulario();
export default formulario;