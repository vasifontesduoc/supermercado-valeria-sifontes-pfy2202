import { BrowserRouter } from 'react-router';
import { InventarioProvider } from './context/InventarioContext';
import AppRoutes from './routes/AppRoutes';

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