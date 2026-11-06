import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MenuSuperior from '../components/MenuSuperior';
import MenuInferior from '../components/MenuInferior';

// Estructura común de todas las páginas: header, menús y el contenido de la ruta actual
function Layout() {
    return (
        <div className="App">
            <header className="app-header">
                <h2>🛒 SuperMercado</h2>
                <MenuSuperior />
            </header>

            <main className="contenido">
                {/* Mientras se descarga una página (lazy loading) se muestra este mensaje */}
                <Suspense fallback={<p className="py-10 text-center text-gray-500 animate-pulse">Cargando...</p>}>
                    {/* Outlet muestra la página que corresponde a la URL */}
                    <Outlet />
                </Suspense>
            </main>

            <MenuInferior />
        </div>
    );
}

export default Layout;