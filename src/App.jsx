import { BrowserRouter } from 'react-router-dom';
import { InventarioProvider } from './context/InventarioContext';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <InventarioProvider>
      {/* basename hace que las rutas funcionen también dentro de GitHub Pages */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </BrowserRouter>
    </InventarioProvider>
  );
}

export default App;