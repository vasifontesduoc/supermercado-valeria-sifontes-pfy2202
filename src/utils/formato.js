// 1290 → "$1.290"
export function formatearPrecio(valor) {
    return `$${valor.toLocaleString('es-CL')}`;
}