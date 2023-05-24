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

export default Alerta;