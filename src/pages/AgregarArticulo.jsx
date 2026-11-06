import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import { CATEGORIAS } from '../data/categorias';
import Boton from '../components/Boton';

const formularioVacio = { nombre: '', marca: '', tipo: '', precio: '', stock: '' };

function AgregarArticulo() {
    const { agregarArticulo } = useInventario();
    const navigate = useNavigate();
    const [form, setForm] = useState(formularioVacio);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const precio = Number(form.precio);
        const stock = Number(form.stock);

        if (!form.nombre.trim() || !form.marca.trim() || !form.tipo || form.precio === '' || form.stock === '') {
            setError('Por favor completa todos los campos.');
            return;
        }
        if (!Number.isInteger(precio) || precio <= 0) {
            setError('El precio debe ser un número entero mayor a 0.');
            return;
        }
        if (!Number.isInteger(stock) || stock < 0) {
            setError('El stock debe ser un número entero igual o mayor a 0.');
            return;
        }

        agregarArticulo({
            nombre: form.nombre.trim(),
            marca: form.marca.trim(),
            tipo: form.tipo,
            precio,
            stock,
        });
        navigate('/articulos'); // redirige al listado después de guardar
    };

    return (
        <section className="max-w-xl">
            <h1 className="titulo-pagina mb-6">Agregar artículo</h1>

            <form onSubmit={handleSubmit} className="panel p-8 space-y-5" noValidate>
                <div>
                    <label htmlFor="nombre" className="block font-medium mb-1">Nombre</label>
                    <input
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Ej: Yogurt Natural 1 L"
                        className="campo"
                    />
                </div>

                <div>
                    <label htmlFor="marca" className="block font-medium mb-1">Marca</label>
                    <input
                        id="marca"
                        name="marca"
                        value={form.marca}
                        onChange={handleChange}
                        placeholder="Ej: Soprole"
                        className="campo"
                    />
                </div>

                <div>
                    <label htmlFor="tipo" className="block font-medium mb-1">Tipo de producto</label>
                    <select id="tipo" name="tipo" value={form.tipo} onChange={handleChange} className="campo">
                        <option value="">Selecciona un tipo</option>
                        {CATEGORIAS.map((tipo) => (
                            <option key={tipo} value={tipo}>{tipo}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="precio" className="block font-medium mb-1">Precio ($)</label>
                        <input
                            id="precio"
                            name="precio"
                            type="number"
                            min="1"
                            value={form.precio}
                            onChange={handleChange}
                            placeholder="Ej: 1890"
                            className="campo"
                        />
                    </div>
                    <div>
                        <label htmlFor="stock" className="block font-medium mb-1">Stock inicial</label>
                        <input
                            id="stock"
                            name="stock"
                            type="number"
                            min="0"
                            value={form.stock}
                            onChange={handleChange}
                            placeholder="Ej: 20"
                            className="campo"
                        />
                    </div>
                </div>

                {error && (
                    <p className="bg-red-50 text-red-700 rounded-xl px-4 py-2 text-sm" role="alert">{error}</p>
                )}

                <Boton type="submit" className="w-full py-3">
                    Guardar artículo
                </Boton>
            </form>
        </section>
    );
}

export default AgregarArticulo;