import Component from "../component.js";

class Alerta extends Component {
    constructor(options) {
        super(options);
    }

    templateAlerta() {
        return `<div class="position-fixed top-0 end-0 p-3 m-2">
        <div class="alert alert-${this.data.color} alert-dismissible fade show" role="alert">
        ${this.data.mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>`;
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