import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import FiltroCategorias from '../components/FiltroCategorias';
import EtiquetaStock from '../components/EtiquetaStock';
import { formatearPrecio } from '../utils/formato';

function ListadoArticulos() {
    const { articulos, eliminarArticulo } = useInventario();
    const navigate = useNavigate();

    // El filtro es estado local: solo esta página lo necesita
    const [categoria, setCategoria] = useState('Todas');

    // No se modifica el inventario original: se calcula una lista filtrada a partir de él
    const articulosFiltrados =
        categoria === 'Todas'
            ? articulos
            : articulos.filter((articulo) => articulo.tipo === categoria);

    const celda = 'px-5 py-3';

    return (
        <section>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <h1 className="titulo-pagina">Listado de artículos</h1>
                <Link to="/articulos/nuevo" className="btn btn-primario">
                    + Agregar artículo
                </Link>
            </div>

            <p className="text-gray-500 mb-4">
                Mostrando {articulosFiltrados.length} de {articulos.length} artículos
                {categoria !== 'Todas' && ` · Categoría: ${categoria}`}
            </p>

            <FiltroCategorias
                articulos={articulos}
                seleccionada={categoria}
                onSeleccionar={setCategoria}
            />

            {articulosFiltrados.length === 0 ? (
                <div className="panel text-center text-gray-500">
                    {articulos.length === 0
                        ? 'No hay artículos en el inventario.'
                        : `No hay artículos en la categoría "${categoria}".`}
                </div>
            ) : (
                <div className="overflow-x-auto bg-white rounded-2xl shadow-suave">
                    <table className="w-full text-left">
                        <thead className="bg-verde-claro text-verde-oscuro text-sm uppercase">
                            <tr>
                                <th className={celda}>Nombre</th>
                                <th className={celda}>Marca</th>
                                <th className={celda}>Tipo</th>
                                <th className={celda}>Precio</th>
                                <th className={celda}>Stock</th>
                                <th className={celda}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articulosFiltrados.map((articulo) => (
                                <tr
                                    key={articulo.id}
                                    onClick={() => navigate(`/articulos/${articulo.id}`)}
                                    className="cursor-pointer hover:bg-green-50 transition"
                                >
                                    <td className={`${celda} font-medium text-verde-oscuro`}>
                                        <Link to={`/articulos/${articulo.id}`} className="hover:underline">
                                            {articulo.nombre}
                                        </Link>
                                    </td>
                                    <td className={celda}>{articulo.marca}</td>
                                    <td className={celda}>
                                        <span className="etiqueta bg-verde-claro text-verde-oscuro">{articulo.tipo}</span>
                                    </td>
                                    <td className={celda}>{formatearPrecio(articulo.precio)}</td>
                                    <td className={celda}>
                                        <span className="mr-2 font-semibold">{articulo.stock}</span>
                                        <EtiquetaStock stock={articulo.stock} />
                                    </td>
                                    <td className={celda}>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation(); // evita que el clic abra el detalle
                                                eliminarArticulo(articulo.id);
                                            }}
                                            className="btn btn-peligro px-3 py-1 text-sm"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

export default ListadoArticulos;