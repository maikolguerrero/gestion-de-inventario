import Component from "../component.js";

class Alerta extends Component {
    constructor(options) {
        super(options);
    }

    mostrar(duration = 5000) {
        this.remove(); // Eliminar la alerta existente
        clearTimeout(this.timeoutId); // Limpiar temporizador existente
    
        setTimeout(() => {
            this.render(); // Mostrar la alerta después de un segundo
            clearTimeout(this.timeoutId); // Limpiar temporizador existente
            this.timeoutId = setTimeout(() => {
                this.remove(); // Eliminar la alerta después de la duración especificada
            }, duration);
        }, 500);
    }
}


// class Alerta extends Component {
//     constructor(options) {
//         super(options);
//         this.duration = options.duration || 5000; // Duración predeterminada de 5000 milisegundos (5 segundos)
//     }

//     render() {
//         const container = document.querySelector(this.el);
//         if (!container) return;

//         const alertElement = document.createElement('div');
//         alertElement.classList.add('alert', `alert-${this.data.color}`, 'alert-dismissible', 'fade', 'show');
//         alertElement.role = 'alert';
//         alertElement.innerHTML = `
//             ${this.data.mensaje}
//             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//         `;

//         container.appendChild(alertElement);
//     }

//     setDuration(duration) {
//         this.timeoutId = setTimeout(() => {
//             this.remove(); // Eliminar la alerta
//         }, duration);
//     }
// }



// class Alerta extends Component {
//     constructor(options) {
//         super(options);
//     }

//     render() {
//         const container = document.querySelector(this.el);
//         if (!container) return;

//         const alertElement = document.createElement('div');
//         alertElement.classList.add('alert', `alert-${this.data.color}`, 'alert-dismissible', 'fade', 'show');
//         alertElement.role = 'alert';
//         alertElement.innerHTML = `
//             ${this.data.mensaje}
//             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//         `;

//         container.appendChild(alertElement);
//     }

//     remove() {
//         const container = document.querySelector(this.el);
//         if (!container) return;

//         container.innerHTML = ''; // Eliminar el contenido del contenedor
//     }
// }

export default Alerta;