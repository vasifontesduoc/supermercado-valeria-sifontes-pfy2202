// Mensaje reutilizable para listas vacías, búsquedas sin resultados y páginas no encontradas
function EstadoVacio({ icono, titulo, mensaje, children }) {
    return (
        <div className="panel py-12 text-center">
            {icono && <p className="text-6xl mb-4">{icono}</p>}
            <h2 className="font-titulo text-2xl font-bold text-verde-oscuro mb-2">{titulo}</h2>
            {mensaje && <p className="text-gris mb-6">{mensaje}</p>}
            {children}
        </div>
    );
}

export default EstadoVacio;