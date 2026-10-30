import { NavLink } from 'react-router-dom';

const enlaces = [
    { to: '/', texto: '🏠 Inicio' },
    { to: '/quienes-somos', texto: '👥 Quiénes somos' },
    { to: '/contactanos', texto: '✉️ Contáctanos' },
];

function MenuInferior() {
    const estilo = ({ isActive }) =>
        `flex-1 text-center whitespace-nowrap rounded-full px-1 sm:px-2 py-2.5 text-xs sm:text-[0.95rem] font-medium transition-colors ${isActive
            ? 'bg-verde text-white'
            : 'text-gray-500 hover:bg-verde-claro hover:text-verde-oscuro'
        }`;

    return (
        <nav className="fixed bottom-[18px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[560px] flex justify-between gap-1.5 bg-white p-2 rounded-full shadow-flotante">
            {enlaces.map((enlace) => (
                <NavLink key={enlace.to} to={enlace.to} end className={estilo}>
                    {enlace.texto}
                </NavLink>
            ))}
        </nav>
    );
}

export default MenuInferior;