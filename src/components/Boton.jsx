// Botón reutilizable con variantes de estilo
const variantes = {
    primario: 'btn-primario',
    secundario: 'btn-secundario',
    peligro: 'btn-peligro',
};

function Boton({ variante = 'primario', type = 'button', className = '', ...props }) {
    return <button type={type} className={`btn ${variantes[variante]} ${className}`} {...props} />;
}

export default Boton;