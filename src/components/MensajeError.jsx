function MensajeError({ children }) {
    if (!children) return null;
    return (
        <p className="bg-red-50 text-red-700 rounded-xl px-4 py-2 text-sm" role="alert">
            {children}
        </p>
    );
}

export default MensajeError;