// Quita tildes y pasa a minúsculas: "Lácteos" → "lacteos"
export function normalizar(texto) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}