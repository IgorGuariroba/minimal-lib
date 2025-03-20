# minimal-lib

Biblioteca de utilitários JavaScript leve e sem dependências, fornecendo funções para manipulação de strings e datas.

## 📋 Índice

- [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)
- [Uso](#uso)
- [Desenvolvimento](#desenvolvimento)
- [Testes](#testes)
- [Licença](#licença)

## 🚀 Instalação

```bash
npm install minimal-lib
```

## ✨ Funcionalidades

- **Strings**:
    - `capitalize`: Capitaliza a primeira letra de uma string
    - `truncate`: Trunca uma string para um comprimento específico

- **Datas**:
    - `formatDate`: Formata datas com suporte a múltiplos locales

## 💻 Uso

### Funções para Strings

```javascript
import { capitalize, truncate } from 'minimal-lib';

// Capitalize
capitalize('olá mundo'); // 'Olá mundo'
capitalize('javascript'); // 'Javascript'

// Truncate
truncate('Este é um texto muito longo', 10); // 'Este é um...'
truncate('JavaScript é incrível', 15); // 'JavaScript é i...'
```

### Funções para Datas

```javascript
import { formatDate } from 'minimal-lib';

// Formatação padrão (pt-BR)
formatDate('2023-10-15'); // '15/10/2023'

// Com locale específico
formatDate('2023-10-15', 'en-US'); // '10/15/2023'

// Com objetos Date
const data = new Date(2023, 0, 15);
formatDate(data); // '15/01/2023'
```

## 🔧 Desenvolvimento

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/IgorGuariroba/minimal-lib.git
cd minimal-lib
npm install
```

Scripts disponíveis:

```bash
npm run build    # Compila a biblioteca
npm run dev      # Modo de desenvolvimento com watch
npm run test     # Executa testes
npm run lint     # Verifica qualidade do código
npm run doc      # Gera documentação
```

## 🧪 Testes

A biblioteca inclui testes abrangentes para todas as funcionalidades:

```bash
npm test
```

## 📄 Licença

MIT © Igor Guariroba

---

Desenvolvido com ❤️ por [Igor Guariroba](https://github.com/IgorGuariroba)