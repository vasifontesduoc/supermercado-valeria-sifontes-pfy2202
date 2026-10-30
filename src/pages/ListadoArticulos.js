import { Link } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';

function ListadoArticulos() {
    const { articulos, eliminarArticulo } = useInventario();

    return (
        <section>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <h1 className="font-titulo text-3xl font-bold text-verde-oscuro">
                    Listado de artículos
                </h1>
                <Link
                    to="/articulos/nuevo"
                    className="bg-verde hover:bg-verde-oscuro text-white font-bold px-5 py-2 rounded-full transition"
                >
                    + Agregar artículo
                </Link>
            </div>

            <p className="text-gray-500 mb-6">Total en inventario: {articulos.length} artículos</p>

            {articulos.length === 0 ? (
                <p className="bg-white rounded-2xl shadow-md p-8 text-center text-gray-500">
                    No hay artículos en el inventario.
                </p>
            ) : (
                <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
                    <table className="w-full text-left">
                        <thead className="bg-verde-claro text-verde-oscuro text-sm uppercase">
                            <tr>
                                <th className="px-5 py-3">#</th>
                                <th className="px-5 py-3">Nombre</th>
                                <th className="px-5 py-3">Marca</th>
                                <th className="px-5 py-3">Tipo</th>
                                <th className="px-5 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articulos.map((articulo, index) => (
                                <tr key={articulo.id} className="hover:bg-green-50 transition">
                                    <td className="px-5 py-3 text-gray-400">{index + 1}</td>
                                    <td className="px-5 py-3 font-medium">{articulo.nombre}</td>
                                    <td className="px-5 py-3">{articulo.marca}</td>
                                    <td className="px-5 py-3">
                                        <span className="bg-verde-claro text-verde-oscuro text-xs font-bold px-3 py-1 rounded-full">
                                            {articulo.tipo}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3">
                                        <button
                                            onClick={() => eliminarArticulo(articulo.id)}
                                            className="text-red-600 hover:bg-red-50 px-3 py-1 rounded-full text-sm font-medium transition"
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