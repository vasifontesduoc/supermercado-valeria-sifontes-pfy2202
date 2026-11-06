import { useState } from 'react';
import { useFormulario } from '../hooks/useFormulario';
import { validarContacto } from '../utils/validaciones';
import CampoFormulario from '../components/CampoFormulario';
import MensajeError from '../components/MensajeError';
import Boton from '../components/Boton';

const datosContacto = [
    '📍 Av. José Pedro Alessandri 500, Ñuñoa',
    '📞 +56 9 2345 6789',
    '✉️ contacto@supermercado.cl',
    '🕘 Lunes a Sábado, 8:00 a 21:00',
    '🕘 Domingo, 9:00 a 18:00',
];

function Contactanos() {
    const [enviado, setEnviado] = useState(false);

    const { valores, error, handleChange, handleSubmit } = useFormulario({
        valoresIniciales: { nombre: '', correo: '', mensaje: '' },
        validar: validarContacto,
        alEnviar: (_datos, reiniciar) => {
            setEnviado(true);
            reiniciar();
        },
    });

    return (
        <section>
            <h1 className="titulo-pagina mb-6">Contáctanos</h1>

            <div className="grid gap-x-5 gap-y-1 sm:grid-cols-2 bg-verde-claro rounded-2xl px-6 py-[18px] mb-7">
                {datosContacto.map((dato) => (
                    <p key={dato}>{dato}</p>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="panel p-7 max-w-[560px] space-y-4" noValidate>
                <CampoFormulario id="nombre" etiqueta="Nombre" value={valores.nombre} onChange={handleChange} />
                <CampoFormulario
                    id="correo"
                    etiqueta="Correo"
                    type="email"
                    value={valores.correo}
                    onChange={handleChange}
                />
                <CampoFormulario
                    id="mensaje"
                    etiqueta="Mensaje"
                    como="textarea"
                    rows="4"
                    value={valores.mensaje}
                    onChange={handleChange}
                />

                <MensajeError>{error}</MensajeError>

                <Boton type="submit" className="w-full py-3">
                    Enviar
                </Boton>
            </form>

            {enviado && (
                <p className="mt-4 max-w-[560px] rounded-xl bg-verde-claro px-[18px] py-3 font-medium text-verde-oscuro" role="status">
                    ¡Gracias! Tu mensaje fue enviado correctamente.
                </p>
            )}
        </section>
    );
}

export default Contactanos;