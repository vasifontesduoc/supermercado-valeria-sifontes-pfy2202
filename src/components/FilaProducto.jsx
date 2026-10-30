import { Link } from 'react-router-dom';
import { estadoStock } from '../data/productos';

const coloresEstado = {
    ok: 'bg-verde-claro text-verde-oscuro',
    bajo: 'bg-[#fff1d6] text-[#9a6200]',
    agotado: 'bg-[#fde3dc] text-[#b23a12]',
};

function FilaProducto({ producto }) {
    const estado = estadoStock(producto.stock);
    const celda = 'px-[18px] py-3.5 border-b border-[#e7e2d6]';

    return (
        <tr className="hover:bg-[#f6fbf8] transition-colors">
            <td className={celda}>
                <Link
                    to={`/producto/${producto.id}`}
                    className="text-verde-oscuro font-medium border-b border-dashed border-verde hover:text-verde hover:border-solid"
                >
                    {producto.nombre}
                </Link>
            </td>
            <td className={celda}>{producto.categoria}</td>
            <td className={celda}>{producto.stock}</td>
            <td className={celda}>${producto.precio.toLocaleString('es-CL')}</td>
            <td className={celda}>
                <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${coloresEstado[estado.clase]}`}
                >
                    {estado.texto}
                </span>
            </td>
        </tr>
    );
}

export default FilaProducto;