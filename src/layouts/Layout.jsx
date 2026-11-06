import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import MenuSuperior from '../components/MenuSuperior';
import MenuInferior from '../components/MenuInferior';

// Estructura común de todas las páginas: header, menús y el contenido de la ruta actual
function Layout() {
    const { pathname } = useLocation();

    return (
        <div className="min-h-screen pb-[110px]">
            <header className="bg-gradient-to-br from-verde to-verde-oscuro text-white text-center px-4 py-[22px] shadow-header">
                <h2 className="text-[1.7rem] font-bold">🛒 SuperMercado</h2>
                <MenuSuperior />
            </header>

            <main className="max-w-[1000px] mx-auto px-4 py-9">
                {/* Mientras se descarga una página (lazy loading) se muestra este mensaje */}
                <Suspense fallback={<p className="py-10 text-center text-gris animate-pulse">Cargando...</p>}>
                    {/* key reinicia la animación cada vez que cambia la página */}
                    <div key={pathname} className="animate-aparecer">
                        {/* Outlet muestra la página que corresponde a la URL */}
                        <Outlet />
                    </div>
                </Suspense>
            </main>

            <MenuInferior />
        </div>
    );
}

export default Layout;