//* Configuracion (icono desplegable)
document.querySelector('.select-arrow').addEventListener('click', function() {
document.querySelector('#opciones').click();
});

//*Construccion del Producto dentro de la app
class Product{
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
    añadirPro(){

    }

    // Eliminar un producto
    eliminarPro(){

    }

    // Mensajes para mantener informado al usuario
    mostrarMsg(){

    }
}


//* Eventos del DOM (Interactividad del ussuario)

//Envio de los datos de Formulario