/**
 * Capitaliza a primeira letra de uma string.
 * @param {string} str - A string a ser capitalizada.
 * @returns {string} - A string capitalizada.
 */
export const capitalize = (str) => {
    if (str == null) return '';
    str = String(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Trunca uma string para um comprimento específico.
 * @param {string} str - A string a ser truncada.
 * @param {number} [length=100] - O comprimento máximo da string.
 * @returns {string} - A string truncada com '...' adicionado ao final, se necessário.
 */
export const truncate = (str, length = 100) => {
    if (str == null) return str;
    str = String(str);
    return str.length > length ? str.substring(0, length).trim() + '...' : str;
};