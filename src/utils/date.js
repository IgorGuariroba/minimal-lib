/**
 * Formata uma data para o formato localizado.
 * @param {string|Date} date - A data a ser formatada.
 * @param {string} [locale='pt-BR'] - A localidade a ser usada para formatação.
 * @returns {string} - A data formatada de acordo com a localidade.
 */
export const formatDate = (date, locale = 'pt-BR') => {
    try {
        // Verificar se a data é null ou undefined
        if (date == null) {
            return 'Invalid Date';
        }

        // Garantir que a data seja interpretada na data local correta
        const dateObj = new Date(date);

        // Verificar se a data é válida
        if (isNaN(dateObj.getTime())) {
            return 'Invalid Date';
        }

        if (typeof date === 'string' && date.includes('-')) {
            // Para strings de data no formato 'YYYY-MM-DD'
            const [year, month, day] = date.split('-');
            dateObj.setFullYear(parseInt(year), parseInt(month) - 1, parseInt(day));
        }
        return dateObj.toLocaleDateString(locale);
    } catch {
        return 'Invalid Date';
    }
};