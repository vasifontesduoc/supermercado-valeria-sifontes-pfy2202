function QuienesSomos() {
    return (
        <section className="pagina-texto">
            <h1>Quiénes somos</h1>
            <p>
                Somos un supermercado de barrio con más de 15 años de experiencia,
                comprometido con ofrecer productos frescos y de calidad a precios justos
                para toda la familia.
            </p>

            <div className="bloques">
                <div className="bloque">
                    <h3>🎯 Misión</h3>
                    <p>
                        Abastecer a nuestra comunidad con productos de calidad, manteniendo
                        un inventario ordenado y siempre disponible.
                    </p>
                </div>
                <div className="bloque">
                    <h3>🔭 Visión</h3>
                    <p>
                        Ser el supermercado de confianza de la zona, reconocido por su
                        atención cercana y su gestión eficiente.
                    </p>
                </div>
                <div className="bloque">
                    <h3>💚 Valores</h3>
                    <ul>
                        <li>Calidad</li>
                        <li>Responsabilidad</li>
                        <li>Cercanía con el cliente</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default QuienesSomos;