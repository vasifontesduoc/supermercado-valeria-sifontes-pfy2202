function TarjetaResumen({ numero, texto, alerta = false }) {
    return (
        <div className={`tarjeta ${alerta ? 'alerta' : ''}`}>
            <span className="numero">{numero}</span>
            <span>{texto}</span>
        </div>
    );
}

export default TarjetaResumen;