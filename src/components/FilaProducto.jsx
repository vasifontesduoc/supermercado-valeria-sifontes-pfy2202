import { Link } from 'react-router';
import EtiquetaStock from './EtiquetaStock';
import { formatearPrecio } from '../utils/formato';

function FilaProducto({ producto }) {
    return (
        <tr className="hover:bg-[#f6fbf8] transition-colors">
            <td className="celda">
                <Link
                    to={`/articulos/${producto.id}`}
                    className="text-verde-oscuro font-medium border-b border-dashed border-verde hover:text-verde hover:border-solid"
                >
                    {producto.nombre}
                </Link>
            </td>
            <td className="celda">{producto.tipo}</td>
            <td className="celda">{producto.stock}</td>
            <td className="celda">{formatearPrecio(producto.precio)}</td>
            <td className="celda">
                <EtiquetaStock stock={producto.stock} />
            </td>
        </tr>
    );
}

export default FilaProducto;