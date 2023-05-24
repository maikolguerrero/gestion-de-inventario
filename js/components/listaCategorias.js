import Component from '../component.js';

// Obtener categorías del LocalStorage
let categorias = JSON.parse(localStorage.getItem('categorias')) || [];

const listaCategorias = new Component({
    el: "#lista-categorias",
    data: {
        categorias: categorias
    },
    template: function () {
        // Generar opciones de categorías para el formulario de agregar productos
        let opcionesCategoria = this.data.categorias.map(categoria => {
            return `<option value="${categoria.nombre}">${categoria.nombre}</option>`;
        }).join("");

        return `
                <label for="categoria" class="form-label">Categoría</label>
                <select class="form-select" id="categoria" required>
                    <option value="">Selecciona una categoría</option>
                    ${opcionesCategoria}
                    <option value="Sin categoría">Sin categoría</option>
                </select>
                <div class="invalid-feedback">
                    Por favor, selecciona una categoría válida.
                </div>
        `;
    },

});

export default listaCategorias
