# Back-end-Login

## Alunos:

-Carlos Eduardo Pires de Santana Hereman
-Letícia Marchioni
-Luccas Hessel
-Thales Heron de Assunção Granja

Este repositório contém o código-fonte de um sistema de login back-end.

## Como Executar

Para configurar e executar este projeto localmente, siga os passos abaixo:

1. **Clonar o repositório:**

```bash
git clone https://github.com/ThalesGranja/Back-end-Login.git
cd Back-end-Login
```

2. **Instalar as dependências:**

```bash
npm install
```

3. **Configurar o banco de dados e criar o usuário inicial:**

Execute o script `createUser.js` para popular o banco de dados com um usuário padrão:

```bash
node createUser.js
```

4. **Iniciar a aplicação:**

Execute o `app.js` para iniciar o servidor back-end:

```bash
node app.js
```

O servidor estará rodando em `http://localhost:3000` (ou na porta configurada no `app.js`).

## Dados para Login

Utilize as seguintes credenciais para testar o login:

- **E-mail:** `teste@email.com`
- **Senha:** `123456`

## Estrutura do Projeto

- `controllers/`: Lógica de controle para as rotas.
- `middleware/`: Funções de middleware para autenticação e outras operações.
- `models/`: Definição dos modelos de dados (e.g., usuário).
- `public/`: Arquivos estáticos (HTML, CSS, JS do frontend, se houver).
- `routes/`: Definição das rotas da API.
- `views/`: Arquivos de template para renderização de páginas (e.g., EJS, Handlebars).
- `app.js`: Ponto de entrada principal da aplicação.
- `createUser.js`: Script para criação de usuário inicial no banco de dados.
- `package.json`: Metadados do projeto e lista de dependências.
- `package-lock.json`: Registro exato das dependências instaladas.
