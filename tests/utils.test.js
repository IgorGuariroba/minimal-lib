import { capitalize, truncate, formatDate } from '../src';
  
  describe('capitalize', () => {
    test('deve capitalizar corretamente a primeira letra', () => {
      expect(capitalize('teste')).toBe('Teste');
      expect(capitalize('palavra')).toBe('Palavra');
      expect(capitalize('a')).toBe('A');
    });
  
    test('deve lidar com casos especiais', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
      expect(capitalize('')).toBe('');
      expect(capitalize(123)).toBe('123');
    });
  });
  
  describe('truncate', () => {
    test('deve truncar strings quando excedem o limite', () => {
      expect(truncate('This is exactly ten', 10)).toBe('This is ex...');
      expect(truncate('longword    ', 6)).toBe('longwo...');
    });
  
    test('deve manter strings que não excedem o limite', () => {
      expect(truncate('abcde', 5)).toBe('abcde');
      expect(truncate('abc', 5)).toBe('abc');
    });
  
    test('deve tratar corretamente espaços', () => {
      // Espaços no final
      expect(truncate('Hello world  ', 8)).toBe('Hello wo...');
      expect(truncate('Test   ', 4)).toBe('Test...');
      expect(truncate('word    ', 4)).toBe('word...');
      
      // Espaços no limite de truncamento
      expect(truncate('abc  ', 5)).toBe('abc  ');
      expect(truncate('word     ', 5)).toBe('word...');
      
      // Outros casos com espaços
      expect(truncate('ab c  d', 4)).toBe('ab c...');
      expect(truncate('     ', 3)).toBe('...');
    });
  
    test('deve lidar com casos especiais', () => {
      expect(truncate('This is a long text', 0)).toBe('...');
      expect(truncate(null, 10)).toBe(null);
      expect(truncate(undefined, 10)).toBe(undefined);
      expect(truncate(123, 10)).toBe('123');
      expect(truncate('', 0)).toBe('');
      expect(truncate('', 5)).toBe('');
    });

      test('deve exercitar o comportamento do trim() em diferentes situações', () => {
          // Caso onde trim() afeta o resultado (remove espaços no início/fim após truncamento)
          expect(truncate('  texto com espaços  ', 10)).toBe('texto co...');

          // Caso onde string tem apenas espaços no início que são mantidos após truncamento
          expect(truncate('   abc', 5)).toBe('ab...');

          // Caso onde truncate deixa apenas espaços, que são removidos pelo trim()
          expect(truncate('abc   ', 3)).toBe('abc...');

          // Caso extremo: comprimento 1 com espaços
          expect(truncate('a   ', 1)).toBe('a...');
      });

      test('deve lidar com casos limite de .trim()', () => {
          // Caso onde o tamanho exato deixa espaços no final que serão removidos pelo trim()
          expect(truncate('abc   ', 3)).toBe('abc...');
      });
  });
  
  describe('formatDate', () => {
    test('deve formatar datas no formato YYYY-MM-DD', () => {
      expect(formatDate('2023-04-15')).toBe('15/04/2023');
      expect(formatDate('2023-12-31')).toBe('31/12/2023');
      expect(formatDate('2020-02-29')).toBe('29/02/2020');
    });
  
    test('deve formatar datas no formato YYYY/MM/DD', () => {
      expect(formatDate('2023/10/10')).toMatch(/10\/10\/2023|10\/10\/23/);
    });
  
    test('deve funcionar com objetos Date', () => {
      const data = new Date(2023, 0, 15); // 15/01/2023
      expect(formatDate(data)).toMatch(/15\/01\/2023|15\/01\/23/);
    });
  
    test('deve tratar corretamente datas inválidas', () => {
      expect(formatDate(null)).toBe('Invalid Date');
      expect(formatDate(undefined)).toBe('Invalid Date');
      expect(formatDate('invalid-date')).toBe('Invalid Date');
    });
  
    test('deve capturar exceções internas', () => {
      const originalDate = global.Date;
      global.Date = function() {
        throw new Error('Date error');
      };
  
      expect(formatDate('2023-01-01')).toBe('Invalid Date');
  
      // Restaura o Date original
      global.Date = originalDate;
    });
  
    test('deve respeitar diferentes locales', () => {
      expect(formatDate('2023-05-15', 'en-US')).toMatch(/5\/15\/2023|5\/15\/23/);
    });
  });