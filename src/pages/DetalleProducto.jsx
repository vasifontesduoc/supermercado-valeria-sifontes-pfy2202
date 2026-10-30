import { useParams, useNavigate, Link } from 'react-router-dom';
import { productos, estadoStock } from '../data/productos';

function DetalleProducto() {
    const { id } = useParams();       // lee el :id de la URL
    const navigate = useNavigate();   // permite redirigir por código

    const producto = productos.find((p) => p.id === Number(id));

    if (!producto) {
        return (
            <section>
                <h1>Producto no encontrado</h1>
                <Link to="/" className="link-producto">Volver al inventario</Link>
            </section>
        );
    }

    const estado = estadoStock(producto.stock);

    return (
        <section>
            <button className="btn-volver" onClick={() => navigate('/')}>
                ← Volver al inventario
            </button>

            <h1>{producto.nombre}</h1>

            <div className="detalle">
                <p><strong>Categoría:</strong> {producto.categoria}</p>
                <p><strong>Stock:</strong> {producto.stock} unidades</p>
                <p><strong>Precio:</strong> ${producto.precio.toLocaleString('es-CL')}</p>
                <p>
                    <strong>Estado:</strong>{' '}
                    <span className={`estado ${estado.clase}`}>{estado.texto}</span>
                </p>
            </div>
        </section>
    );
}

export default DetalleProducto;