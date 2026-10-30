import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InventarioProvider } from './context/InventarioContext';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contactanos from './pages/Contactanos';
import DetalleProducto from './pages/DetalleProducto';
import ListadoArticulos from './pages/ListadoArticulos';
import AgregarArticulo from './pages/AgregarArticulo';
import MenuInferior from './components/MenuInferior';
import MenuSuperior from './components/MenuSuperior';
import './App.css';

function App() {
  return (
    <InventarioProvider>
      <Router>
        <div className="App">
          <header className="app-header">
            <h2>🛒 SuperMercado</h2>
            <MenuSuperior />
          </header>

          <main className="contenido">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/contactanos" element={<Contactanos />} />
              <Route path="/producto/:id" element={<DetalleProducto />} />
              <Route path="/articulos" element={<ListadoArticulos />} />
              <Route path="/articulos/nuevo" element={<AgregarArticulo />} />
              <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
          </main>

          <MenuInferior />
        </div>
      </Router>
    </InventarioProvider>
  );
}

export default App;