import { estadoStock } from '../utils/stock';

// Muestra el estado del stock con su color (Disponible / Stock bajo / Agotado)
function EtiquetaStock({ stock }) {
    const estado = estadoStock(stock);
    return <span className={`etiqueta ${estado.clases}`}>{estado.texto}</span>;
}

export default EtiquetaStock;