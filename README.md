# React-Learning

Projeto de estudos para praticar desenvolvimento front-end com React e TypeScript. Atualmente, a aplicação exibe um contador simples com controles para incrementar, decrementar e zerar o valor.

## Tecnologias

- React 19
- TypeScript
- Vite
- ESLint

## Pré-requisitos

- Node.js e npm instalados.

## Como executar

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço local informado pelo Vite no terminal.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática. |
| `npm run lint` | Executa o ESLint para verificar o código. |
| `npm run build` | Verifica os tipos com TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente a versão de produção gerada. |

Para visualizar a versão de produção, gere-a primeiro com `npm run build` e depois execute `npm run preview`.

## Contador

O componente `SimpleCounter` recebe duas propriedades opcionais:

| Propriedade | Tipo | Padrão | Descrição |
| --- | --- | --- | --- |
| `title` | `string` | `"Contador Simples"` | Texto exibido como título do contador. |
| `step` | `number` | `1` | Quantidade somada ou subtraída a cada clique. |

Exemplo de uso:

```tsx
<SimpleCounter title="Meu contador" step={5} />
```

Nesse exemplo, os botões de soma e subtração alteram o valor em intervalos de cinco. O botão de zerar redefine o contador para `0`.

## Estrutura principal

```text
src/
├── components/
│   └── simple-counter/
│       ├── SimpleCounter.tsx
│       └── SimpleCounter.css
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```
