function TarjetaResumen({ numero, texto, alerta = false }) {
    return (
        <div
            className={`flex flex-col bg-white rounded-2xl px-[22px] py-5 border-l-[5px] text-gray-500 shadow-suave transition-transform hover:-translate-y-1 ${alerta ? 'border-naranja' : 'border-verde'
                }`}
        >
            <span
                className={`font-titulo text-4xl font-bold leading-tight ${alerta ? 'text-naranja' : 'text-verde'
                    }`}
            >
                {numero}
            </span>
            <span>{texto}</span>
        </div>
    );
}

export default TarjetaResumen;