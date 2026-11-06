import { NavLink } from 'react-router';
import { useInventario } from '../context/InventarioContext';

function MenuSuperior() {
    const { unidadesEnCarrito } = useInventario();

    const estilo = ({ isActive }) =>
        `inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${isActive ? 'bg-white text-verde-oscuro' : 'text-white/80 hover:bg-white/15 hover:text-white'
        }`;

    return (
        <nav className="flex flex-wrap justify-center gap-2 mt-3">
            <NavLink to="/articulos" end className={estilo}>
                📋 Listado de artículos
            </NavLink>
            <NavLink to="/articulos/nuevo" className={estilo}>
                + Agregar artículo
            </NavLink>
            <NavLink to="/carrito" className={estilo}>
                🛒 Carrito
                {unidadesEnCarrito > 0 && (
                    <span className="ml-2 inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded-full bg-naranja text-white text-xs font-bold">
                        {unidadesEnCarrito}
                    </span>
                )}
            </NavLink>
        </nav>
    );
}

export default MenuSuperior;