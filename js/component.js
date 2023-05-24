class Component {
    constructor(options) {
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    }

    render() {
        const $el = document.querySelector(this.el);
        if (!$el) return;
        $el.innerHTML = this.template(this.data);
    }

    remove() {
        const $el = document.querySelector(this.el);
        if (!$el) return;
        $el.innerHTML = ''; // Eliminar el contenido del elemento
        this.isVisible = false; // Establecer la visibilidad a false al eliminar el componente
    }

    setState(obj) {
        for (let key in obj) {
            if (this.data.hasOwnProperty(key)) {
                this.data[key] = obj[key];
            }
        }

        this.render();
    }

    getState() {
        return JSON.parse(JSON.stringify(this.data));
    }
}

export default Component;