import { createContext, useContext, useEffect, useReducer } from 'react';
import { inventarioReducer } from './inventarioReducer';
import { articulosIniciales } from '../data/articulosIniciales';

const InventarioContext = createContext();
const CLAVE_STORAGE = 'inventario-supermercado';

const estadoInicial = { articulos: articulosIniciales, carrito: [] };

// Si hay datos guardados en el navegador los usa; si no, parte con el inventario inicial
function cargarEstado(inicial) {
    try {
        const guardado = JSON.parse(localStorage.getItem(CLAVE_STORAGE));
        if (guardado && Array.isArray(guardado.articulos) && Array.isArray(guardado.carrito)) {
            return guardado;
        }
    } catch {
        // Si los datos guardados están dañados, se usan los iniciales
    }
    return inicial;
}

export function InventarioProvider({ children }) {
    const [state, dispatch] = useReducer(inventarioReducer, estadoInicial, cargarEstado);
    const { articulos, carrito } = state;

    // Guarda inventario y carrito cada vez que cambian
    useEffect(() => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(state));
    }, [state]);

    // Datos derivados: se calculan a partir del estado, no se guardan aparte
    const itemsCarrito = carrito
        .map((item) => {
            const articulo = articulos.find((a) => a.id === item.id);
            return articulo ? { ...articulo, cantidad: item.cantidad } : null;
        })
        .filter(Boolean);

    const unidadesEnCarrito = carrito.reduce((suma, item) => suma + item.cantidad, 0);
    const totalCarrito = itemsCarrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
    const cantidadEnCarrito = (id) => carrito.find((item) => item.id === id)?.cantidad ?? 0;

    const valor = {
        articulos,
        itemsCarrito,
        unidadesEnCarrito,
        totalCarrito,
        cantidadEnCarrito,
        agregarArticulo: (articulo) =>
            dispatch({ type: 'AGREGAR_ARTICULO', payload: { id: Date.now(), ...articulo } }),
        eliminarArticulo: (id) => dispatch({ type: 'ELIMINAR_ARTICULO', payload: id }),
        agregarAlCarrito: (id) => dispatch({ type: 'AGREGAR_AL_CARRITO', payload: id }),
        disminuirDelCarrito: (id) => dispatch({ type: 'DISMINUIR_DEL_CARRITO', payload: id }),
        quitarDelCarrito: (id) => dispatch({ type: 'QUITAR_DEL_CARRITO', payload: id }),
        vaciarCarrito: () => dispatch({ type: 'VACIAR_CARRITO' }),
    };

    return <InventarioContext.Provider value={valor}>{children}</InventarioContext.Provider>;
}

// Hook para usar el inventario desde cualquier componente
export function useInventario() {
    return useContext(InventarioContext);
}