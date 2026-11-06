import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';

// Lazy loading: cada página se descarga recién cuando el usuario la visita
const Home = lazy(() => import('../pages/Home'));
const QuienesSomos = lazy(() => import('../pages/QuienesSomos'));
const Contactanos = lazy(() => import('../pages/Contactanos'));
const ListadoArticulos = lazy(() => import('../pages/ListadoArticulos'));
const AgregarArticulo = lazy(() => import('../pages/AgregarArticulo'));
const DetalleArticulo = lazy(() => import('../pages/DetalleArticulo'));
const Carrito = lazy(() => import('../pages/Carrito'));
const NoEncontrado = lazy(() => import('../pages/NoEncontrado'));

// Todas las rutas del sitio en un solo lugar
function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="quienes-somos" element={<QuienesSomos />} />
                <Route path="contactanos" element={<Contactanos />} />

                {/* Rutas anidadas de artículos */}
                <Route path="articulos">
                    <Route index element={<ListadoArticulos />} />
                    <Route path="nuevo" element={<AgregarArticulo />} />
                    <Route path=":id" element={<DetalleArticulo />} />
                </Route>

                <Route path="carrito" element={<Carrito />} />

                {/* Ruta comodín: siempre al final */}
                <Route path="*" element={<NoEncontrado />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;