import { Link } from 'react-router-dom';
import { estadoStock } from '../data/productos';

function FilaProducto({ producto }) {
    const estado = estadoStock(producto.stock);

    return (
        <tr>
            <td>
                <Link to={`/producto/${producto.id}`} className="link-producto">
                    {producto.nombre}
                </Link>
            </td>
            <td>{producto.categoria}</td>
            <td>{producto.stock}</td>
            <td>${producto.precio.toLocaleString('es-CL')}</td>
            <td>
                <span className={`estado ${estado.clase}`}>{estado.texto}</span>
            </td>
        </tr>
    );
}

export default FilaProducto;