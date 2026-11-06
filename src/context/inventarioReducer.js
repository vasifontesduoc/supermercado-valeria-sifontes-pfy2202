// Reducer del inventario

// Devuelve una copia de los artículos con el stock de uno ajustado
function ajustarStock(articulos, id, diferencia) {
    return articulos.map((articulo) =>
        articulo.id === id ? { ...articulo, stock: articulo.stock + diferencia } : articulo
    );
}

export function inventarioReducer(state, action) {
    switch (action.type) {
        case 'AGREGAR_ARTICULO':
            return { ...state, articulos: [...state.articulos, action.payload] };

        case 'ELIMINAR_ARTICULO': {
            const id = action.payload;
            return {
                articulos: state.articulos.filter((articulo) => articulo.id !== id),
                carrito: state.carrito.filter((item) => item.id !== id),
            };
        }

        // Suma 1 unidad al carrito y resta 1 del inventario
        case 'AGREGAR_AL_CARRITO': {
            const id = action.payload;
            const articulo = state.articulos.find((a) => a.id === id);
            if (!articulo || articulo.stock <= 0) return state; // sin stock no se agrega

            const yaEnCarrito = state.carrito.some((item) => item.id === id);
            const carrito = yaEnCarrito
                ? state.carrito.map((item) =>
                    item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
                )
                : [...state.carrito, { id, cantidad: 1 }];

            return { articulos: ajustarStock(state.articulos, id, -1), carrito };
        }

        // Resta 1 unidad del carrito y la devuelve al inventario
        case 'DISMINUIR_DEL_CARRITO': {
            const id = action.payload;
            const item = state.carrito.find((i) => i.id === id);
            if (!item) return state;

            const carrito =
                item.cantidad === 1
                    ? state.carrito.filter((i) => i.id !== id)
                    : state.carrito.map((i) => (i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i));

            return { articulos: ajustarStock(state.articulos, id, 1), carrito };
        }

        // Quita el artículo completo del carrito y devuelve todas sus unidades
        case 'QUITAR_DEL_CARRITO': {
            const id = action.payload;
            const item = state.carrito.find((i) => i.id === id);
            if (!item) return state;

            return {
                articulos: ajustarStock(state.articulos, id, item.cantidad),
                carrito: state.carrito.filter((i) => i.id !== id),
            };
        }

        // Devuelve todo lo del carrito al inventario
        case 'VACIAR_CARRITO': {
            const articulos = state.articulos.map((articulo) => {
                const item = state.carrito.find((i) => i.id === articulo.id);
                return item ? { ...articulo, stock: articulo.stock + item.cantidad } : articulo;
            });
            return { articulos, carrito: [] };
        }

        default:
            return state;
    }
}