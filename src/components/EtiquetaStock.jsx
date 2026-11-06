import { estadoStock } from '../utils/stock';

const colores = {
    ok: 'bg-verde-claro text-verde-oscuro',
    bajo: 'bg-[#fff1d6] text-[#9a6200]',
    agotado: 'bg-[#fde3dc] text-[#b23a12]',
};

// Muestra el estado del stock con su color (Disponible / Stock bajo / Agotado)
function EtiquetaStock({ stock }) {
    const estado = estadoStock(stock);
    return <span className={`etiqueta ${colores[estado.clase]}`}>{estado.texto}</span>;
}

export default EtiquetaStock;