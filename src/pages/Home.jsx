import { useState } from 'react';
import { useInventario } from '../context/InventarioContext';
import { normalizar } from '../utils/normalizar';
import { UMBRAL_STOCK_BAJO } from '../utils/stock';
import TarjetaResumen from '../components/TarjetaResumen';
import FilaProducto from '../components/FilaProducto';
import Tabla from '../components/Tabla';
import EstadoVacio from '../components/EstadoVacio';

function Home() {
    const { articulos } = useInventario(); // mismo inventario global que el resto del sitio
    const [busqueda, setBusqueda] = useState('');

    const texto = normalizar(busqueda);
    const filtrados = articulos.filter(
        (a) =>
            normalizar(a.nombre).includes(texto) ||
            normalizar(a.tipo).includes(texto) ||
            normalizar(a.marca).includes(texto)
    );

    const totalUnidades = articulos.reduce((suma, a) => suma + a.stock, 0);
    const alertas = articulos.filter((a) => a.stock < UMBRAL_STOCK_BAJO).length;

    return (
        <section>
            <h1 className="titulo-pagina mb-6">Inventario del Supermercado</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
                <TarjetaResumen numero={articulos.length} texto="Productos" />
                <TarjetaResumen numero={totalUnidades} texto="Unidades en stock" />
                <TarjetaResumen numero={alertas} texto="Con stock bajo o agotado" alerta />
            </div>

            <input
                type="text"
                className="campo rounded-full px-5 mb-5"
                placeholder="Buscar por producto, marca o categoría..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                aria-label="Buscar productos"
            />

            {filtrados.length === 0 ? (
                <EstadoVacio
                    icono="🔍"
                    titulo="No se encontraron productos"
                    mensaje="Prueba con otra palabra o revisa cómo está escrita."
                />
            ) : (
                <Tabla columnas={['Producto', 'Categoría', 'Stock', 'Precio', 'Estado']}>
                    {filtrados.map((articulo) => (
                        <FilaProducto key={articulo.id} producto={articulo} />
                    ))}
                </Tabla>
            )}
        </section>
    );
}

export default Home;