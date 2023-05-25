import alertas from "../components/alertas.js";
import tablaProducto from "../components/productos.js";
import tablaCategoria from "../components/categorias.js";
import listasCategorias from "../components/listaCategorias.js";

class Backup {
    exportarDatos(event) {

        const target = event.target;
        const botonExportar = target.closest(".exportar");

        if (botonExportar) {
            const productos = JSON.parse(localStorage.getItem("productos")) || [];
            const categorias = JSON.parse(localStorage.getItem("categorias")) || [];

            // Crea el objeto de datos
            let data = {
                productos: productos,
                categorias: categorias
            };
            let jsonData = JSON.stringify(data);

            // Crea un Blob con el contenido JSON
            let blob = new Blob([jsonData], { type: 'application/json' });

            // Crea un enlace de descarga
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'respaldo inventario.json';

            // Agrega el enlace al documento
            document.body.appendChild(a);

            // Simula un clic en el enlace para abrir el diálogo de guardado
            a.click();

            // Remueve el enlace del documento
            document.body.removeChild(a);

            // Mostrar Alerta
            alertas.inventarioExportado.mostrar();
            alertas.inventarioImportado2.mostrar();
        }
    }

    importarDatos(event) {
        const archivo = event.target.files[0];

        // Verificar si se ha seleccionado un archivo
        if (!archivo) {
            return;
        }

        const lector = new FileReader();

        lector.onload = function (e) {
            const contenidoArchivo = e.target.result;
            try {
                const datos = JSON.parse(contenidoArchivo);

                // Validar que el archivo JSON contiene los datos esperados
                if (!datos || (!datos.productos && !datos.categorias)) {
                    alertas.errorFaltanDatosJSON.mostrar();
                    return;
                }

                let productosImportados = [];
                let categoriasImportadas = [];
                let productosValidos = true;
                let categoriasValidas = true;

                if (datos.productos && datos.productos != []) {
                    // Verificar si todos los productos tienen las propiedades requeridas
                    productosImportados = datos.productos;
                    productosValidos = productosImportados.every((producto) => {
                        return (
                            producto.nombre &&
                            producto.categoria &&
                            producto.presentacion &&
                            producto.descripcion &&
                            producto.precio &&
                            producto.moneda &&
                            producto.cantidad
                        );
                    });
                }

                if (datos.categorias && datos.categorias != []) {
                    // Verificar si todas las categorías tienen las propiedades requeridas
                    categoriasImportadas = datos.categorias;
                    categoriasValidas = categoriasImportadas.every((categoria) => {
                        return (
                            categoria.nombre &&
                            categoria.proveedor &&
                            categoria.calidad &&
                            categoria.descripcion
                        );
                    });
                }

                // Importar los datos si todos los productos y categorías son válidos
                if (productosValidos && categoriasValidas) {
                    // Guardar el inventario en el LocalStorage
                    localStorage.setItem('productos', JSON.stringify(productosImportados));
                    localStorage.setItem('categorias', JSON.stringify(categoriasImportadas));

                    // Actualizar las propiedades de los componentes
                    tablaProducto.setState({
                        productos: productosImportados
                    });

                    tablaCategoria.setState({
                        categorias: categoriasImportadas
                    });

                    listasCategorias.listaCategorias.setState({
                        categorias: categoriasImportadas
                    });
                    listasCategorias.listaCategorias2.setState({
                        categorias: categoriasImportadas
                    });

                    // Mostrar mensaje de éxito
                    alertas.inventarioImportado.mostrar();
                } else {
                    // Mostrar mensaje de error si los datos no son válidos
                    alertas.errorDatosInvalidosJSON.mostrar();
                }
            } catch (error) {
                // Mostrar mensaje de error si hay un error al analizar el archivo JSON
                alertas.errorLeerJSON.mostrar();
            }
        };
        lector.readAsText(archivo);
    }
}

const backup = new Backup();
export default backup;