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
                        <a href="#" class="btn btn-warning" name="edit">Editar</a>
                        <a href="#" class="btn btn-danger" name="delete">Delete</a>
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
    eliminarPro(){

    }

    // Mensajes para mantener informado al usuario
    mostrarMsg(){

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
    const Metodo = new Metodo();

    // Input User Validation
    if (nombre === "" || descripcion === "" || categoria === "") {
        ui.showMessage("Please Insert data in all fields", "danger");
    }

    // Save Product
    ui.addProduct(producto);
    ui.showMessage("Product Added Successfully", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});