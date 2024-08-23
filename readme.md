# Gerenciador de Tarefas

Uma API CRUD simples para gerenciar tarefas, construída com Node.js, Express, TypeScript e SQLite usando Prisma.

## Funcionalidades

- **Criar**: Adicione novas tarefas com título, descrição e status.
- **Ler**: Visualize todas as tarefas ou uma tarefa específica pelo ID.
- **Atualizar**: Edite os detalhes de uma tarefa existente.
- **Deletar**: Remova tarefas pelo ID.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **TypeScript**: Superconjunto de JavaScript com tipagem estática.
- **SQLite**: Banco de dados leve e autônomo.
- **Prisma**: ORM moderno 

## Requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes para Node.js)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/gerenciador-de-tarefas.git
   cd gerenciador-de-tarefas

2. Instale as dependências:

   ```bash
   npm install

3. Gere Prisma:

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate

4. Rodar:

   ```bash
   npx tsc -p tsconfig.json
   node dist/index.js






