import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contactanos from './pages/Contactanos';
import MenuInferior from './components/MenuInferior';
import DetalleProducto from './pages/DetalleProducto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h2>🛒 SuperMercado</h2>
        </header>

        <main className="contenido">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
          </Routes>
        </main>

        <MenuInferior />
      </div>
    </Router>
  );
}

export default App;