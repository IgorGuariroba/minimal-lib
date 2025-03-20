### 2. Comentários JSDoc
 Use comentários JSDoc para documentar suas funções e métodos. Isso ajuda a gerar documentação automaticamente e melhora a compreensão do código.
 
 Exemplo:
 ```javascript
 /**
  * Capitaliza a primeira letra de uma string.
  * @param {string} str - A string a ser capitalizada.
  * @returns {string} - A string capitalizada.
  */
 export const capitalize = (str) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
 };
 
 /**
  * Trunca uma string para o comprimento especificado.
  * @param {string} str - A string a ser truncada.
  * @param {number} [length=100] - O comprimento máximo da string.
  * @returns {string} - A string truncada.
  */
 export const truncate = (str, length = 100) => {
   return str.length > length ? str.substring(0, length) + '...' : str;
 };
 
 /**
  * Formata uma data para o formato local especificado.
  * @param {Date|string} date - A data a ser formatada.
  * @param {string} [locale='pt-BR'] - O local para formatação.
  * @returns {string} - A data formatada.
  */
 export const formatDate = (date, locale = 'pt-BR') => {
   return new Date(date).toLocaleDateString(locale);
 };