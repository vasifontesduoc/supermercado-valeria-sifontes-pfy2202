import { NavLink } from 'react-router-dom';

function MenuSuperior() {
    const estilo = ({ isActive }) =>
        `px-4 py-2 rounded-full text-sm font-medium transition ${isActive
            ? 'bg-white text-verde-oscuro'
            : 'text-white/80 hover:bg-white/15 hover:text-white'
        }`;

    return (
        <nav className="flex flex-wrap justify-center gap-2 mt-3">
            <NavLink to="/articulos" end className={estilo}>
                📋 Listado de artículos
            </NavLink>
            <NavLink to="/articulos/nuevo" className={estilo}>
                + Agregar artículo
            </NavLink>
        </nav>
    );
}

export default MenuSuperior;