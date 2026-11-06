import { Link } from 'react-router-dom';

function NoEncontrado() {
    return (
        <section className="panel py-12 text-center">
            <p className="text-6xl mb-4">🧺</p>
            <h1 className="titulo-pagina mb-2">Página no encontrada</h1>
            <p className="text-gray-500 mb-6">La dirección que buscas no existe.</p>
            <Link to="/" className="btn btn-primario">
                Volver al inicio
            </Link>
        </section>
    );
}

export default NoEncontrado;