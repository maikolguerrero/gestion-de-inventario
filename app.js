//* Configuracion (icono desplegable)
document.querySelector('.select-arrow').addEventListener('click', function() {
document.querySelector('#opciones').click();
});

//*Construccion del Producto dentro de la app
class Producto{
    constructor(nombre, descripcion, categoria, precio, año){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.año = año;        
    }
}

//*Construccion de los Metodos (Funcionalodades)

class Metodo {
    // Añadir un producto
    añadirPro(producto) {
        // Acedemos a al espacio de la lista de productos que definimos en el HTML
        const listaProductos = document.getElementById("lista-Productos");
        // Creamos un div para meter el producto (innerTHML)
        const div = document.createElement("div");
        div.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>Producto</strong>: ${producto.nombre} -
                        <strong>Descripción</strong>: ${producto.descripcion} -
                        <strong>Categoría</strong>: ${producto.categoria} -
                        <strong>Precio</strong>: ${producto.precio} $ - 
                        <strong>Año</strong>: ${producto.año}
                        <a href="#" class="btn btn-warning" name="editar">Editar</a>
                        <a href="#" class="btn btn-danger" name="borrar">Delete</a>
                    </div>
                </div>
            `;
        // Metemos el producto al div (appendchild)
        listaProductos.appendChild(div);
    }
    
    // Funcion para resetear el formulario al agregar
    resetearForm() {
        document.getElementById("Formulario-pro").reset();
    }

    // Eliminar un producto
    eliminarPro(elementoHTML){
        // Comprobamos que el enlace selecionado sea el de borrar y no el de editar (name)
        if (elementoHTML.name === "borrar") {
            // Nos vamos al primer padre (tarjeta) y luego al segundo (el div del card)
            elementoHTML.parentElement.parentElement.parentElement.remove();
            this.mostrarMsg("Product Deleted Succsssfully", "success");
        }
    }

    // Mensajes para mantener informado al usuario
    mostrarMsg(mensaje, color){
        // Creamos un div
        const div = document.createElement("div");
        // Le damos la clase al div
        div.className = `alert alert-${color} mt-2`;
        // Le agregamos el mensaje (apendchild - vreatetextnode)
        div.appendChild(document.createTextNode(mensaje));
    
        // Mostramos el mensaje en pantalla (sleccionamos el contenedor)
        const contenedor = document.querySelector(".container");
        const app = document.querySelector("#App");
    
        // Insert Message in the UI
        contenedor.insertBefore(div, app);
    
        // Remove the Message after 3 seconds
        setTimeout(function () {
        document.querySelector(".alert").remove();
        }, 3000);
    }
}


//* Eventos del DOM (Interactividad del ussuario)

//Envio de los datos de Formulario (obtengo el formulario y le añado un evento de escucha del envio)
document.getElementById("Formulario-pro")
    .addEventListener("submit", function (e) {
    // Cancelamos el comportamiento por defecto de actualizar el formulario
    e.preventDefault();

    // Capturamos los valores del producto (los guardamos en constantes)
    const nombre = document.getElementById("nombre").value,
        descripcion = document.getElementById("descripcion").value,
        categoria = document.getElementById("categoria").value,
        precio = document.getElementById("precio").value,
        año = document.getElementById("año").value;


    // Creamos un nuevo objeto de tipo Producto
    const producto = new Producto(nombre, descripcion, categoria, precio, año);

    // Creamos la instancia de un nuevo metodo
    const metodo = new Metodo();

    // Validación del los campos en el formulario
    if (nombre === "" || descripcion === "" || categoria === "") {
        ui.showMessage("Please Insert data in all fields", "danger");
    }

    // Guargamos el producto
    metodo.añadirPro(producto);
    // Mostramos el mensaje de creación exitosa
    metodo.mostrarMsg("Product Added Successfully", "success");
    // Reseteamos el producto
    metodo.resetearForm();
});

  // Capturamos el evento de click en el boton de eliminar 
document.getElementById("lista-Productos").addEventListener("click", (e) => {
    const metodo = new Metodo();
    // Nos aseguramos de que se haya dado click al enlace
    metodo.eliminarPro(e.target);
    e.preventDefault();
});