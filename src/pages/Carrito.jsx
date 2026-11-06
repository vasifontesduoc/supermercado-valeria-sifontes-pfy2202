import { Link } from 'react-router';
import { useInventario } from '../context/InventarioContext';
import ItemCarrito from '../components/ItemCarrito';
import Boton from '../components/Boton';
import EstadoVacio from '../components/EstadoVacio';
import { formatearPrecio } from '../utils/formato';

function Carrito() {
    const {
        itemsCarrito,
        unidadesEnCarrito,
        totalCarrito,
        agregarAlCarrito,
        disminuirDelCarrito,
        quitarDelCarrito,
        vaciarCarrito,
    } = useInventario();

    if (itemsCarrito.length === 0) {
        return (
            <section>
                <EstadoVacio
                    icono="🛒"
                    titulo="Tu carrito está vacío"
                    mensaje="Agrega artículos desde el listado del inventario."
                >
                    <Link to="/articulos" className="btn btn-primario">
                        Ver artículos
                    </Link>
                </EstadoVacio>
            </section>
        );
    }

    return (
        <section>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h1 className="titulo-pagina">Carrito de compras</h1>
                <Boton variante="peligro" onClick={vaciarCarrito}>
                    Vaciar carrito
                </Boton>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
                <ul className="space-y-3">
                    {itemsCarrito.map((item) => (
                        <ItemCarrito
                            key={item.id}
                            item={item}
                            onAumentar={() => agregarAlCarrito(item.id)}
                            onDisminuir={() => disminuirDelCarrito(item.id)}
                            onQuitar={() => quitarDelCarrito(item.id)}
                        />
                    ))}
                </ul>

                <aside className="panel h-fit">
                    <h2 className="text-xl font-bold text-verde-oscuro mb-4">Resumen</h2>
                    <div className="flex justify-between text-gris mb-2">
                        <span>Unidades</span>
                        <span>{unidadesEnCarrito}</span>
                    </div>
                    <div className="flex justify-between border-t border-borde pt-3 mb-6 text-lg font-bold">
                        <span>Total</span>
                        <span>{formatearPrecio(totalCarrito)}</span>
                    </div>
                    <Link to="/articulos" className="btn btn-secundario w-full">
                        Seguir comprando
                    </Link>
                </aside>
            </div>
        </section>
    );
}

export default Carrito;