// Clasifica el stock de un artículo para mostrarlo con colores
export function estadoStock(stock) {
    if (stock === 0) return { texto: 'Agotado', clase: 'agotado' };
    if (stock < 10) return { texto: 'Stock bajo', clase: 'bajo' };
    return { texto: 'Disponible', clase: 'ok' };
}