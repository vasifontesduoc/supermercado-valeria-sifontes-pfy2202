import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';

const tipos = ['Abarrotes', 'Lácteos', 'Panadería', 'Frutas y Verduras', 'Carnes', 'Bebidas', 'Limpieza'];

const estiloCampo =
    'w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-verde focus:ring-4 focus:ring-verde-claro';

function AgregarArticulo() {
    const { agregarArticulo } = useInventario();
    const navigate = useNavigate();
    const [form, setForm] = useState({ nombre: '', marca: '', tipo: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.nombre.trim() || !form.marca.trim() || !form.tipo) {
            setError('Por favor completa todos los campos.');
            return;
        }
        agregarArticulo({
            nombre: form.nombre.trim(),
            marca: form.marca.trim(),
            tipo: form.tipo,
        });
        navigate('/articulos'); // redirige al listado después de guardar
    };

    return (
        <section className="max-w-xl">
            <h1 className="font-titulo text-3xl font-bold text-verde-oscuro mb-6">
                Agregar artículo
            </h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 space-y-5">
                <div>
                    <label htmlFor="nombre" className="block font-medium mb-1">Nombre</label>
                    <input
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Ej: Yogurt Natural 1 L"
                        className={estiloCampo}
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
                        className={estiloCampo}
                    />
                </div>

                <div>
                    <label htmlFor="tipo" className="block font-medium mb-1">Tipo de producto</label>
                    <select
                        id="tipo"
                        name="tipo"
                        value={form.tipo}
                        onChange={handleChange}
                        className={estiloCampo}
                    >
                        <option value="">Selecciona un tipo</option>
                        {tipos.map((tipo) => (
                            <option key={tipo} value={tipo}>{tipo}</option>
                        ))}
                    </select>
                </div>

                {error && (
                    <p className="bg-red-50 text-red-700 rounded-xl px-4 py-2 text-sm">{error}</p>
                )}

                <button
                    type="submit"
                    className="w-full bg-verde hover:bg-verde-oscuro text-white font-bold py-3 rounded-full transition"
                >
                    Guardar artículo
                </button>
            </form>
        </section>
    );
}

export default AgregarArticulo;