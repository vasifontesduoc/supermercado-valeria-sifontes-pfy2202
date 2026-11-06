function CampoFormulario({ id, etiqueta, como: Elemento = 'input', ...props }) {
    return (
        <div>
            <label htmlFor={id} className="block font-medium mb-1">
                {etiqueta}
            </label>
            <Elemento id={id} name={id} className="campo" {...props} />
        </div>
    );
}

export default CampoFormulario;