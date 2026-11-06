import { useNavigate } from 'react-router';
import { useInventario } from '../context/InventarioContext';
import { useFormulario } from '../hooks/useFormulario';
import { validarArticulo } from '../utils/validaciones';
import { CATEGORIAS } from '../data/categorias';
import CampoFormulario from '../components/CampoFormulario';
import MensajeError from '../components/MensajeError';
import Boton from '../components/Boton';

function AgregarArticulo() {
    const { agregarArticulo } = useInventario();
    const navigate = useNavigate();

    const { valores, error, handleChange, handleSubmit } = useFormulario({
        valoresIniciales: { nombre: '', marca: '', tipo: '', precio: '', stock: '' },
        validar: validarArticulo,
        alEnviar: (datos) => {
            agregarArticulo({
                nombre: datos.nombre.trim(),
                marca: datos.marca.trim(),
                tipo: datos.tipo,
                precio: Number(datos.precio),
                stock: Number(datos.stock),
            });
            navigate('/articulos'); // redirige al listado después de guardar
        },
    });

    return (
        <section className="max-w-xl">
            <h1 className="titulo-pagina mb-6">Agregar artículo</h1>

            <form onSubmit={handleSubmit} className="panel p-8 space-y-5" noValidate>
                <CampoFormulario
                    id="nombre"
                    etiqueta="Nombre"
                    value={valores.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Yogurt Natural 1 L"
                />
                <CampoFormulario
                    id="marca"
                    etiqueta="Marca"
                    value={valores.marca}
                    onChange={handleChange}
                    placeholder="Ej: Soprole"
                />
                <CampoFormulario
                    id="tipo"
                    etiqueta="Tipo de producto"
                    como="select"
                    value={valores.tipo}
                    onChange={handleChange}
                >
                    <option value="">Selecciona un tipo</option>
                    {CATEGORIAS.map((tipo) => (
                        <option key={tipo} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </CampoFormulario>

                <div className="grid grid-cols-2 gap-4">
                    <CampoFormulario
                        id="precio"
                        etiqueta="Precio ($)"
                        type="number"
                        min="1"
                        value={valores.precio}
                        onChange={handleChange}
                        placeholder="Ej: 1890"
                    />
                    <CampoFormulario
                        id="stock"
                        etiqueta="Stock inicial"
                        type="number"
                        min="0"
                        value={valores.stock}
                        onChange={handleChange}
                        placeholder="Ej: 20"
                    />
                </div>

                <MensajeError>{error}</MensajeError>

                <Boton type="submit" className="w-full py-3">
                    Guardar artículo
                </Boton>
            </form>
        </section>
    );
}

export default AgregarArticulo;