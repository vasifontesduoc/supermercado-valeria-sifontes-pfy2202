import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useInventario } from '../context/InventarioContext';
import FiltroCategorias from '../components/FiltroCategorias';
import EtiquetaStock from '../components/EtiquetaStock';
import Tabla from '../components/Tabla';
import EstadoVacio from '../components/EstadoVacio';
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

    return (
        <section>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <h1 className="titulo-pagina">Listado de artículos</h1>
                <Link to="/articulos/nuevo" className="btn btn-primario">
                    + Agregar artículo
                </Link>
            </div>

            <p className="text-gris mb-4">
                Mostrando {articulosFiltrados.length} de {articulos.length} artículos
                {categoria !== 'Todas' && ` · Categoría: ${categoria}`}
            </p>

            <FiltroCategorias
                articulos={articulos}
                seleccionada={categoria}
                onSeleccionar={setCategoria}
            />

            {articulosFiltrados.length === 0 ? (
                <EstadoVacio
                    icono="📦"
                    titulo={articulos.length === 0 ? 'No hay artículos en el inventario' : 'Sin artículos en esta categoría'}
                    mensaje={articulos.length === 0 ? 'Agrega el primero desde el formulario.' : `No hay artículos de "${categoria}".`}
                >
                    <Link to="/articulos/nuevo" className="btn btn-primario">
                        + Agregar artículo
                    </Link>
                </EstadoVacio>
            ) : (
                <Tabla columnas={['Nombre', 'Marca', 'Tipo', 'Precio', 'Stock', 'Acciones']}>
                    {articulosFiltrados.map((articulo) => (
                        <tr
                            key={articulo.id}
                            onClick={() => navigate(`/articulos/${articulo.id}`)}
                            className="cursor-pointer hover:bg-green-50 transition"
                        >
                            <td className="celda font-medium text-verde-oscuro">
                                <Link to={`/articulos/${articulo.id}`} className="hover:underline">
                                    {articulo.nombre}
                                </Link>
                            </td>
                            <td className="celda">{articulo.marca}</td>
                            <td className="celda">
                                <span className="etiqueta bg-verde-claro text-verde-oscuro">{articulo.tipo}</span>
                            </td>
                            <td className="celda">{formatearPrecio(articulo.precio)}</td>
                            <td className="celda whitespace-nowrap">
                                <span className="mr-2 font-semibold">{articulo.stock}</span>
                                <EtiquetaStock stock={articulo.stock} />
                            </td>
                            <td className="celda">
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
                </Tabla>
            )}
        </section>
    );
}

export default ListadoArticulos;