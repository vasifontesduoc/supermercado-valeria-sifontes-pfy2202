const bloques = [
    {
        titulo: '🎯 Misión',
        texto:
            'Abastecer a nuestra comunidad con productos de calidad, manteniendo un inventario ordenado y siempre disponible.',
    },
    {
        titulo: '🔭 Visión',
        texto:
            'Ser el supermercado de confianza de la zona, reconocido por su atención cercana y su gestión eficiente.',
    },
    {
        titulo: '💚 Valores',
        lista: ['Calidad', 'Responsabilidad', 'Cercanía con el cliente'],
    },
];

function QuienesSomos() {
    return (
        <section>
            <h1 className="titulo-pagina mb-4">Quiénes somos</h1>
            <p className="text-lg text-gris max-w-[700px] mb-6">
                Somos un supermercado de barrio con más de 15 años de experiencia, comprometido con
                ofrecer productos frescos y de calidad a precios justos para toda la familia.
            </p>

            <div className="grid gap-[18px] sm:grid-cols-3">
                {bloques.map((bloque) => (
                    <div key={bloque.titulo} className="panel transition-transform hover:-translate-y-1">
                        <h3 className="text-xl font-semibold text-verde mb-2">{bloque.titulo}</h3>
                        {bloque.texto && <p className="text-gris">{bloque.texto}</p>}
                        {bloque.lista && (
                            <ul className="list-disc pl-5 text-gris">
                                {bloque.lista.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default QuienesSomos;