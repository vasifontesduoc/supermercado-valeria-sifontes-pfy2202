import { useState } from 'react';

function Contactanos() {
    const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
        setForm({ nombre: '', correo: '', mensaje: '' });
    };

    return (
        <section className="pagina-texto">
            <h1>Contáctanos</h1>

            <div className="info-contacto">
                <p>📍 Av. José Pedro Alessandri 500, Ñuñoa</p>
                <p>📞 +56 9 2345 6789</p>
                <p>✉️ contacto@supermercado.cl</p>
                <p>🕘 Lunes a Sábado, 8:00 a 21:00</p>
                <p>🕘 Domingo, 9:00 a 18:00</p>
            </div>

            <form className="formulario" onSubmit={handleSubmit}>
                <label>
                    Nombre
                    <input name="nombre" value={form.nombre} onChange={handleChange} required />
                </label>
                <label>
                    Correo
                    <input type="email" name="correo" value={form.correo} onChange={handleChange} required />
                </label>
                <label>
                    Mensaje
                    <textarea name="mensaje" rows="4" value={form.mensaje} onChange={handleChange} required />
                </label>
                <button type="submit">Enviar</button>
            </form>

            {enviado && (
                <p className="exito">¡Gracias! Tu mensaje fue enviado correctamente.</p>
            )}
        </section>
    );
}

export default Contactanos;