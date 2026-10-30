import { createContext, useContext, useEffect, useReducer } from 'react';

const InventarioContext = createContext();

const articulosIniciales = [
    { id: 1, nombre: 'Leche Entera 1 L', marca: 'Colún', tipo: 'Lácteos' },
    { id: 2, nombre: 'Arroz Grado 1 1 kg', marca: 'Tucapel', tipo: 'Abarrotes' },
    { id: 3, nombre: 'Detergente Líquido 3 L', marca: 'Omo', tipo: 'Limpieza' },
];

// El reducer decide cómo cambia el estado según la acción recibida
function inventarioReducer(state, action) {
    switch (action.type) {
        case 'AGREGAR':
            return [...state, { id: Date.now(), ...action.payload }];
        case 'ELIMINAR':
            return state.filter((articulo) => articulo.id !== action.payload);
        default:
            return state;
    }
}

// Si hay artículos guardados en el navegador los usa; si no, usa los iniciales
function cargarArticulos(inicial) {
    const guardados = localStorage.getItem('articulos');
    return guardados ? JSON.parse(guardados) : inicial;
}

export function InventarioProvider({ children }) {
    const [articulos, dispatch] = useReducer(inventarioReducer, articulosIniciales, cargarArticulos);

    // Cada vez que cambia la lista, se guarda para no perderla al recargar
    useEffect(() => {
        localStorage.setItem('articulos', JSON.stringify(articulos));
    }, [articulos]);

    const agregarArticulo = (articulo) => dispatch({ type: 'AGREGAR', payload: articulo });
    const eliminarArticulo = (id) => dispatch({ type: 'ELIMINAR', payload: id });

    return (
        <InventarioContext.Provider value={{ articulos, agregarArticulo, eliminarArticulo }}>
            {children}
        </InventarioContext.Provider>
    );
}

// Hook para usar el inventario desde cualquier componente
export function useInventario() {
    return useContext(InventarioContext);
}