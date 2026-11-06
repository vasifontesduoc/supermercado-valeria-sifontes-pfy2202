// Tabla reutilizable: recibe los títulos de las columnas y las filas como children
function Tabla({ columnas, children }) {
    return (
        <div className="overflow-x-auto bg-white rounded-2xl shadow-suave">
            <table className="w-full text-left">
                <thead className="bg-verde-claro text-verde-oscuro font-titulo text-sm uppercase tracking-wide">
                    <tr>
                        {columnas.map((columna) => (
                            <th key={columna} className="px-5 py-3.5 font-semibold">
                                {columna}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="[&>tr:last-child>td]:border-b-0">{children}</tbody>
            </table>
        </div>
    );
}

export default Tabla;