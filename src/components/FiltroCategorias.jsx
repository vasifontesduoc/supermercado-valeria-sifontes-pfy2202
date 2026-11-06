import { CATEGORIAS } from '../data/categorias';

// Botones para filtrar por categoría. Muestra cuántos artículos hay en cada una.
function FiltroCategorias({ articulos, seleccionada, onSeleccionar }) {
    const opciones = ['Todas', ...CATEGORIAS];

    const contar = (categoria) =>
        categoria === 'Todas'
            ? articulos.length
            : articulos.filter((articulo) => articulo.tipo === categoria).length;

    return (
        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filtrar por categoría">
            {opciones.map((categoria) => {
                const activa = categoria === seleccionada;
                return (
                    <button
                        key={categoria}
                        type="button"
                        onClick={() => onSeleccionar(categoria)}
                        aria-pressed={activa}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border-2 transition ${activa
                                ? 'bg-verde border-verde text-white'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-verde hover:text-verde'
                            }`}
                    >
                        {categoria}
                        <span className={`ml-1.5 text-xs ${activa ? 'text-white/80' : 'text-gray-400'}`}>
                            ({contar(categoria)})
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

export default FiltroCategorias;