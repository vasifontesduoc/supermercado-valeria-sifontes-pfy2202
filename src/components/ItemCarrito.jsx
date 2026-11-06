import { Link } from 'react-router-dom';
import { formatearPrecio } from '../utils/formato';

// Una fila del carrito con los botones para cambiar la cantidad
function ItemCarrito({ item, onAumentar, onDisminuir, onQuitar }) {
    return (
        <li className="panel flex flex-wrap items-center justify-between gap-4">
            <div className="flex-1 min-w-[180px]">
                <Link
                    to={`/articulos/${item.id}`}
                    className="font-titulo text-lg font-semibold text-verde-oscuro hover:underline"
                >
                    {item.nombre}
                </Link>
                <p className="text-sm text-gray-500">
                    {item.marca} · {formatearPrecio(item.precio)} c/u
                </p>
                <p className="text-xs text-gray-400 mt-1">Quedan {item.stock} en inventario</p>
            </div>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    className="btn-cantidad"
                    onClick={onDisminuir}
                    aria-label={`Quitar una unidad de ${item.nombre}`}
                >
                    −
                </button>
                <span className="w-8 text-center font-bold" aria-live="polite">
                    {item.cantidad}
                </span>
                <button
                    type="button"
                    className="btn-cantidad"
                    onClick={onAumentar}
                    disabled={item.stock === 0}
                    aria-label={`Agregar una unidad de ${item.nombre}`}
                >
                    +
                </button>
            </div>

            <p className="w-24 text-right font-bold">{formatearPrecio(item.precio * item.cantidad)}</p>

            <button
                type="button"
                onClick={onQuitar}
                className="text-sm font-medium text-red-600 hover:underline"
            >
                Quitar
            </button>
        </li>
    );
}

export default ItemCarrito;