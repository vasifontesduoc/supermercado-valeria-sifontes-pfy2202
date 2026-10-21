export const productos = [
    { id: 1, nombre: 'Arroz Grado 1 (1 kg)', categoria: 'Abarrotes', stock: 120, precio: 1290 },
    { id: 2, nombre: 'Aceite Vegetal (1 L)', categoria: 'Abarrotes', stock: 45, precio: 2490 },
    { id: 3, nombre: 'Leche Entera (1 L)', categoria: 'Lácteos', stock: 8, precio: 1090 },
    { id: 4, nombre: 'Yogurt Natural', categoria: 'Lácteos', stock: 60, precio: 450 },
    { id: 5, nombre: 'Pan Marraqueta (kg)', categoria: 'Panadería', stock: 0, precio: 1990 },
    { id: 6, nombre: 'Manzana Roja (kg)', categoria: 'Frutas y Verduras', stock: 75, precio: 1490 },
    { id: 7, nombre: 'Palta Hass (kg)', categoria: 'Frutas y Verduras', stock: 5, precio: 4990 },
    { id: 8, nombre: 'Detergente Líquido (3 L)', categoria: 'Limpieza', stock: 30, precio: 6990 },
];

export function estadoStock(stock) {
    if (stock === 0) return { texto: 'Agotado', clase: 'agotado' };
    if (stock < 10) return { texto: 'Stock bajo', clase: 'bajo' };
    return { texto: 'Disponible', clase: 'ok' };
}