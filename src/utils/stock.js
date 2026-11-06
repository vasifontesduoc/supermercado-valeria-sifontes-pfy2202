// Única fuente para el estado del stock: umbral, texto y clases de color
export const UMBRAL_STOCK_BAJO = 10;

export function estadoStock(stock) {
    if (stock === 0) return { texto: 'Agotado', clases: 'bg-[#fde3dc] text-[#b23a12]' };
    if (stock < UMBRAL_STOCK_BAJO) return { texto: 'Stock bajo', clases: 'bg-[#fff1d6] text-[#9a6200]' };
    return { texto: 'Disponible', clases: 'bg-verde-claro text-verde-oscuro' };
}