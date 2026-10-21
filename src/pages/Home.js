import { useState } from 'react';

const productos = [
    { id: 1, nombre: 'Arroz Grado 1 (1 kg)', categoria: 'Abarrotes', stock: 120, precio: 1290 },
    { id: 2, nombre: 'Aceite Vegetal (1 L)', categoria: 'Abarrotes', stock: 45, precio: 2490 },
    { id: 3, nombre: 'Leche Entera (1 L)', categoria: 'Lácteos', stock: 8, precio: 1090 },
    { id: 4, nombre: 'Yogurt Natural', categoria: 'Lácteos', stock: 60, precio: 450 },
    { id: 5, nombre: 'Pan Marraqueta (kg)', categoria: 'Panadería', stock: 0, precio: 1990 },
    { id: 6, nombre: 'Manzana Roja (kg)', categoria: 'Frutas y Verduras', stock: 75, precio: 1490 },
    { id: 7, nombre: 'Palta Hass (kg)', categoria: 'Frutas y Verduras', stock: 5, precio: 4990 },
    { id: 8, nombre: 'Detergente Líquido (3 L)', categoria: 'Limpieza', stock: 30, precio: 6990 },
];

function estadoStock(stock) {
    if (stock === 0) return { texto: 'Agotado', clase: 'agotado' };
    if (stock < 10) return { texto: 'Stock bajo', clase: 'bajo' };
    return { texto: 'Disponible', clase: 'ok' };
}

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
                                    <td>{p.nombre}</td>
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