import { useState } from 'react';

export function useFormulario({ valoresIniciales, validar, alEnviar }) {
    const [valores, setValores] = useState(valoresIniciales);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValores((anteriores) => ({ ...anteriores, [name]: value }));
    };

    const reiniciar = () => {
        setValores(valoresIniciales);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mensajeError = validar ? validar(valores) : '';
        if (mensajeError) {
            setError(mensajeError);
            return;
        }
        setError('');
        alEnviar(valores, reiniciar);
    };

    return { valores, error, handleChange, handleSubmit, reiniciar };
}