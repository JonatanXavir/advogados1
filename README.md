# advogados1
# API de Gerenciamento de Advogados e Processos

Esta é uma API RESTful construída com Node.js e Express para gerenciar advogados e seus respectivos processos judiciais. A API utiliza Sequelize como ORM, validação de schema com AJV e autenticação baseada em JWT (JSON Web Tokens).

## Funcionalidades

-   Cadastro e autenticação de usuários.
-   CRUD completo para Advogados.
-   CRUD completo para Processos, associados a um advogado.
-   Rotas protegidas com autenticação JWT.
-   Validação de dados de entrada.

## Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução JavaScript.
-   **Express**: Framework para construção de APIs.
-   **Sequelize**: ORM para Node.js (compatível com Postgres, MySQL, MariaDB, SQLite e Microsoft SQL Server).
-   **JSON Web Token (JWT)**: Para autenticação e autorização.
-   **AJV**: Para validação de schemas JSON.
-   **Crypto**: Para hashing de senhas.

## Configuração do Ambiente

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    cd <nome-do-repositorio>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis, substituindo os valores conforme necessário:

    ```env
    # Configurações da Aplicação
    PORT=3000

    # Configurações do JWT
    SECRET=seu_segredo_super_secreto_para_jwt

    # Configurações do Banco de Dados
    DBHOST=localhost
    DBNAME=advogados_db
    DBUSER=seu_usuario_db
    DBPASS=sua_senha_db
    DBDIALECT=postgres # ou mysql, sqlite, mssql
    ```

4.  **Inicie o servidor:**
    ```bash
    npm start
    ```
    O servidor estará rodando em `http://localhost:3000`.

---

## Endpoints da API

**Prefixo:** Todas as rotas da API são acessadas sem um prefixo base (ex: `/api`).

### Autenticação e Usuários

#### `POST /usuario`

Cria um novo usuário no sistema.

**Body:**
```json
{
  "nome": "João da Silva",
  "email": "joao.silva@example.com",
  "senha": "senha123"
}
```
**Resposta (201 Created):** Retorna os dados do usuário criado e um token de acesso.

#### `POST /usuario/login`

Autentica um usuário e retorna um token de acesso.

**Body:**
```json
{
  "email": "joao.silva@example.com",
  "senha": "senha123"
}
```
**Resposta (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Advogados

> **Nota:** Todas as rotas de `/advogado` requerem um token de autenticação no header `Authorization` no formato `Bearer <token>`.

#### `GET /advogado`
Recupera uma lista de todos os advogados e seus processos associados.

#### `GET /advogado/:id`
Recupera um advogado específico pelo seu ID.

#### `POST /advogado`
Cria um novo advogado.

**Body:**
```json
{
  "nome": "Dr. Carlos Andrade",
  "oab": "123456SP",
  "especialidade": "Direito Civil"
}
```

#### `PUT /advogado/:id`
Atualiza os dados de um advogado existente.

#### `DELETE /advogado/:id`
Exclui um advogado.

---

### Processos

> **Nota:** Todas as rotas de `/processo` requerem um token de autenticação.

#### `GET /advogado/:id_advogado/processo`
Recupera todos os processos de um advogado específico.

#### `POST /advogado/:id_advogado/processo`
Cria um novo processo para um advogado.

**Body:**
```json
{
  "descricao": "Processo de danos morais",
  "numero_processo": "0001234-56.2023.8.26.0001",
  "status": "Em andamento"
}
```

#### `PUT /advogado/:id_advogado/processo/:id_processo`
Atualiza um processo específico de um advogado.

#### `DELETE /advogado/:id_advogado/processo/:id_processo`
Exclui um processo específico de um advogado.
