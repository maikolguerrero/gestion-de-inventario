// class Alerta {
//     // Mensajes para mantener informado al usuario
//     mostrarMsg(mensaje, color) {
//         // Creamos un div
//         const div = document.createElement("div");
//         div.className = `alert alert-${color} alert-dismissible fade show mt-2`;
//         div.role = `alert`;

//         div.innerHTML = `${mensaje}
//         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;

//         // div.appendChild(document.createTextNode(mensaje));

//         // Mostramos el mensaje en pantalla (sleccionamos el contenedor)
//         const contenedor = document.querySelector(".container");
//         const app = document.querySelector("#App");

//         // Insertamos el mensaje (el div antes del app)
//         contenedor.insertBefore(div, app);

//         // Quitamos el mensaje alerta luego de uns 3 segundos
//         setTimeout(() => {
//             document.querySelector(".alert").remove();
//         }, 5000);
//     }
// }

import Alerta from "../classes/Alerta.js";


// const productoAgregado = new Alerta({
//     el: "#alerta-container",
//     data: {
//         mensaje: "Producto creado exitosamente.",
//         color: "success"
//     },
//     template: function () {
//         return `<div class="alert alert-${this.data.color} alert-dismissible fade show mt-2" role="alert">
//            ${this.data.mensaje}
//             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//           </div>`
//     }

// });

// const productoEliminado = new Alerta({
//     el: "#alerta-container",
//     data: {
//         mensaje: "Producto eliminado exitosamente.",
//         color: "danger"
//     },
//     template: function () {
//         return `<div class="alert alert-${this.data.color} alert-dismissible fade show mt-2" role="alert">
//             ${this.data.mensaje}
//             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//           </div>`;
//     }
// }
// );


const productoAgregado = new Alerta({
    el: "#alerta-container-agregar-producto",
    data: {
        mensaje: "Producto creado exitosamente.",
        color: "success"
    },
    template: function () {
        return `<div class="position-fixed top-0 end-0 p-3 m-2">
            <div class="alert alert-${this.data.color} alert-dismissible fade show" role="alert">
            ${this.data.mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>`;
    }
});

const productoEliminado = new Alerta({
    el: "#alerta-container-inventario-producto",
    data: {
        mensaje: "Producto eliminado exitosamente.",
        color: "success"
    },
    template: function () {
        return `<div class="position-fixed top-0 end-0 p-3 m-2">
            <div class="alert alert-${this.data.color} alert-dismissible fade show" role="alert">
            ${this.data.mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>`;
    }
});


// const alertOptions = new Alerta({
//     el: '#alerta-container', // Elemento donde se mostrará la alerta
//     data: {
//         mensaje: 'Producto agregado correctamente',
//         color: 'success'
//     },
//     duration: 5000 // Duración en milisegundos (opcional)
// });



export default { productoAgregado, productoEliminado};


