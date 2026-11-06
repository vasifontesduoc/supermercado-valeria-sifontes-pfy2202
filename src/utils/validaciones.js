// Expresiones regulares reutilizables
export const PATRONES = {
    nombreProducto: /^[\p{L}\d][\p{L}\d\s.,'()%\/-]{1,59}$/u, // 2 a 60 caracteres
    marca: /^[\p{L}\d][\p{L}\d\s.&'-]{0,39}$/u, // 1 a 40 caracteres
    nombrePersona: /^\p{L}[\p{L}\s'-]{1,49}$/u, // solo letras, 2 a 50 caracteres
    correo: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
};

export function cumple(valor, patron) {
    return patron.test(String(valor).trim());
}

// Cada validador devuelve un mensaje de error, o '' si todo está bien
export function validarArticulo({ nombre, marca, tipo, precio, stock }) {
    if (!nombre.trim() || !marca.trim() || !tipo || precio === '' || stock === '') {
        return 'Por favor completa todos los campos.';
    }
    if (!cumple(nombre, PATRONES.nombreProducto)) {
        return 'El nombre debe tener entre 2 y 60 caracteres: letras, números, espacios y . , - ( ) %';
    }
    if (!cumple(marca, PATRONES.marca)) {
        return "La marca solo puede tener letras, números, espacios y . & ' -";
    }
    if (!Number.isInteger(Number(precio)) || Number(precio) <= 0) {
        return 'El precio debe ser un número entero mayor a 0.';
    }
    if (!Number.isInteger(Number(stock)) || Number(stock) < 0) {
        return 'El stock debe ser un número entero igual o mayor a 0.';
    }
    return '';
}

export function validarContacto({ nombre, correo, mensaje }) {
    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
        return 'Por favor completa todos los campos.';
    }
    if (!cumple(nombre, PATRONES.nombrePersona)) {
        return 'El nombre solo puede tener letras y espacios (mínimo 2 letras).';
    }
    if (!cumple(correo, PATRONES.correo)) {
        return 'Ingresa un correo válido, por ejemplo nombre@correo.cl';
    }
    if (mensaje.trim().length < 10) {
        return 'El mensaje debe tener al menos 10 caracteres.';
    }
    return '';
}