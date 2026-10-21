import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos, estadoStock } from '../data/productos';

function Home() {
    const [busqueda, setBusqueda] = useState('');

    const texto = busqueda.toLowerCase();
    const filtrados = productos.filter(
        (p) =>
            p.nombre.toLowerCase().includes(texto) ||
            p.categoria.toLowerCase().includes(texto)
    );

    const totalUnidades = productos.reduce((suma, p) => suma + p.stock, 0);
    const alertas = productos.filter((p) => p.stock < 10).length;

    return (
        <section>
            <h1>Inventario del Supermercado</h1>

            <div className="resumen">
                <div className="tarjeta">
                    <span className="numero">{productos.length}</span>
                    <span>Productos</span>
                </div>
                <div className="tarjeta">
                    <span className="numero">{totalUnidades}</span>
                    <span>Unidades en stock</span>
                </div>
                <div className="tarjeta alerta">
                    <span className="numero">{alertas}</span>
                    <span>Con stock bajo o agotado</span>
                </div>
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
                        {filtrados.map((p) => {
                            const estado = estadoStock(p.stock);
                            return (
                                <tr key={p.id}>
                                    <td>
                                        <Link to={`/producto/${p.id}`} className="link-producto">{p.nombre}</Link>
                                    </td>
                                    <td>{p.categoria}</td>
                                    <td>{p.stock}</td>
                                    <td>${p.precio.toLocaleString('es-CL')}</td>
                                    <td>
                                        <span className={`estado ${estado.clase}`}>{estado.texto}</span>
                                    </td>
                                </tr>
                            );
                        })}
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