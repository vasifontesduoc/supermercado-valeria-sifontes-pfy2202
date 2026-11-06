import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useInventario } from '../context/InventarioContext';
import Boton from '../components/Boton';
import EstadoVacio from '../components/EstadoVacio';
import EtiquetaStock from '../components/EtiquetaStock';
import { formatearPrecio } from '../utils/formato';

function DetalleArticulo() {
    const { id } = useParams(); // lee el :id de la URL
    const navigate = useNavigate();
    const { articulos, agregarAlCarrito, cantidadEnCarrito } = useInventario();

    // Estado booleano simple para mostrar el aviso "Agregado al carrito"
    const [agregado, setAgregado] = useState(false);

    useEffect(() => {
        if (!agregado) return;
        const temporizador = setTimeout(() => setAgregado(false), 2000);
        return () => clearTimeout(temporizador);
    }, [agregado]);

    // El id de la URL es texto, por eso se compara como texto
    const articulo = articulos.find((a) => String(a.id) === id);

    if (!articulo) {
        return (
            <section>
                <EstadoVacio icono="🔎" titulo="Artículo no encontrado" mensaje="Puede que haya sido eliminado.">
                    <Link to="/articulos" className="btn btn-primario">
                        Volver al listado
                    </Link>
                </EstadoVacio>
            </section>
        );
    }

    const enCarrito = cantidadEnCarrito(articulo.id);
    const agotado = articulo.stock === 0;

    const handleAgregar = () => {
        agregarAlCarrito(articulo.id);
        setAgregado(true);
    };

    return (
        <section className="max-w-2xl">
            <Boton variante="secundario" onClick={() => navigate('/articulos')} className="mb-6">
                ← Volver al listado
            </Boton>

            <div className="panel p-8">
                <span className="etiqueta bg-verde-claro text-verde-oscuro mb-3">{articulo.tipo}</span>
                <h1 className="titulo-pagina mb-1">{articulo.nombre}</h1>
                <p className="text-gris mb-6">Marca: {articulo.marca}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="rounded-xl bg-crema p-4">
                        <p className="text-sm text-gris">Precio</p>
                        <p className="font-titulo text-2xl font-bold text-verde-oscuro">
                            {formatearPrecio(articulo.precio)}
                        </p>
                    </div>
                    <div className="rounded-xl bg-crema p-4">
                        <p className="text-sm text-gris">Disponibles</p>
                        <p className="font-titulo text-2xl font-bold text-verde-oscuro">{articulo.stock}</p>
                        <EtiquetaStock stock={articulo.stock} />
                    </div>
                </div>

                <Boton onClick={handleAgregar} disabled={agotado} className="w-full py-3">
                    {agotado ? 'Sin stock disponible' : '🛒 Agregar al carrito'}
                </Boton>

                {agregado && (
                    <p className="mt-4 rounded-xl bg-verde-claro px-4 py-2 text-verde-oscuro font-medium" role="status">
                        ✓ Agregado al carrito
                    </p>
                )}

                {enCarrito > 0 && (
                    <p className="mt-4 text-center text-gris">
                        Tienes {enCarrito} en el carrito ·{' '}
                        <Link to="/carrito" className="font-semibold text-verde hover:underline">
                            Ver carrito
                        </Link>
                    </p>
                )}
            </div>
        </section>
    );
}

export default DetalleArticulo;