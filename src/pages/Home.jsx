import { useState } from 'react';
import { productos } from '../data/productos';
import { normalizar } from '../utils/normalizar';
import TarjetaResumen from '../components/TarjetaResumen';
import FilaProducto from '../components/FilaProducto';

function Home() {
    const [busqueda, setBusqueda] = useState('');

    const texto = normalizar(busqueda);
    const filtrados = productos.filter(
        (p) =>
            normalizar(p.nombre).includes(texto) ||
            normalizar(p.categoria).includes(texto)
    );

    const totalUnidades = productos.reduce((suma, p) => suma + p.stock, 0);
    const alertas = productos.filter((p) => p.stock < 10).length;

    return (
        <section>
            <h1>Inventario del Supermercado</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
                <TarjetaResumen numero={productos.length} texto="Productos" />
                <TarjetaResumen numero={totalUnidades} texto="Unidades en stock" />
                <TarjetaResumen numero={alertas} texto="Con stock bajo o agotado" alerta />
            </div>

            <input
                type="text"
                className="buscador"
                placeholder="Buscar por producto o categoría..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            <div className="tabla-contenedor">
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Categoría</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtrados.map((p) => (
                            <FilaProducto key={p.id} producto={p} />
                        ))}
                    </tbody>
                </table>
                {filtrados.length === 0 && (
                    <p className="sin-resultados">No se encontraron productos.</p>
                )}
            </div>
        </section>
    );
}

export default Home;