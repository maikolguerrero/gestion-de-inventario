//* Configuracion (icono desplegable)
document.querySelector(".select-arrow").addEventListener("click", function () {
    document.querySelector("#opciones").click();
  });
  
  //*Construccion del Producto dentro de la app
  class Producto {
    constructor(nombre, descripcion, categoria, precio, año) {
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
  
      // Creamos la clave del producto usando su nombre
      const clave = `producto-${producto.nombre}`;
      // Creamos el valor del producto usando JSON.stringify
      const valor = JSON.stringify(producto);
      // Guardamos el producto en el local storage
      localStorage.setItem(clave, valor);
    }
  
    // Funcion para resetear el formulario al agregar
    resetearForm() {
      document.getElementById("Formulario-pro").reset();
    }
  
    // Eliminar un producto
    eliminarPro(elementoHTML) {
      // Comprobamos que el enlace selecionado sea el de borrar y no el de editar (name)
      if (elementoHTML.name === "borrar") {
        // Nos vamos al primer padre (tarjeta) y luego al segundo (el div del card)
        const productoHTML =
          elementoHTML.parentElement.parentElement.parentElement;
        // Obtenemos el nombre del producto
        const nombre =
          productoHTML.querySelector(".card-body strong").textContent.split(
            ": "
          )[1];
        // Obtenemos la clave del producto usando su nombre
        const clave = `producto-${nombre}`;
        // Eliminamos el producto del local storage
        localStorage.removeItem(clave);
        // Eliminamos el producto del HTML
        productoHTML.remove();
        // Mostramos el mensaje del producto borrado
        this.mostrarMsg("Producto Borrado Exitosamente", "danger");
      }
    }
  
    // Mensajes para mantener informado al usuario
    mostrarMsg(mensaje, color) {
      // Creamos un div
      const div = document.createElement("div");
      // Le damos la clase al div
      div.className = `alert alert-${color} mt-2`;
      // Le agregamos el mensaje (apendchild - vreatetextnode)
      div.appendChild(document.createTextNode(mensaje));
  
      // Mostramos el mensaje en pantalla (sleccionamos el contenedor)
      const contenedor = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      // Insertamos el mensaje (el div antes del app)
      contenedor.insertBefore(div, app);
  
      // Quitamos el mensaje alerta luego de uns 3 segundos
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  
    // Mostrar los productos guardados en el local storage
    mostrarPro() {
      // Obtenemos todas las claves del local storage
      const claves = Object.keys(localStorage);
      // Recorremos las claves
      for (let clave of claves) {
        // Obtenemos el valor asociado a la clave
        const valor = localStorage.getItem(clave);
        // Convertimos el valor en un objeto usando JSON.parse
        const producto = JSON.parse(valor);
        // Acedemos al espacio de la lista de productos que definimos en el HTML
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
    }
  
    // Eliminar todos los productos
    eliminarTodosPro() {
      // Eliminamos todos los productos del local storage
      localStorage.clear();
      // Obtenemos todos los elementos HTML de la lista de productos
      const productosHTML = document.querySelectorAll("#lista-Productos .card");
      // Recorremos los elementos HTML y los eliminamos
      for (let productoHTML of productosHTML) {
        productoHTML.remove();
      }
    }
  }
  
  // Llamamos al método mostrarPro al inicio del script
  const metodo = new Metodo();
  metodo.mostrarPro();
  
  //* Eventos del DOM (Interactividad del ussuario)
  
  //Envio de los datos de Formulario (obtengo el formulario y le añado un evento de escucha del envio)
  document.getElementById("Formulario-pro").addEventListener("submit", function (e) {
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
    if (
     nombre === "" ||
     descripcion === "" ||
     categoria === "" ||
     precio === "" ||
     año === ""
   ) {
     return metodo.mostrarMsg(
       "Por favor, complete todos los campos del formulario",
       "warning"
     );
   }
  
    // Guargamos el producto
   metodo.añadirPro(producto);
    // Mostramos el mensaje de creación exitosa
   metodo.mostrarMsg("Producto Agregado Exitosamente", "success");
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
  
  // Creamos un botón para eliminar todos los productos
  const botonEliminarTodos = document.createElement("button");
  botonEliminarTodos.textContent = "Eliminar todos los productos";
  botonEliminarTodos.className = "btn btn-danger mt-2";
  // Añadimos un evento de click al botón para llamar al método eliminarTodosPro
  botonEliminarTodos.addEventListener("click", () => {
   metodo.eliminarTodosPro();
  });
  // Insertamos el botón debajo del formulario
  const formulario = document.getElementById("Formulario-pro");
  formulario.insertAdjacentElement("afterend", botonEliminarTodos);