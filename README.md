# 📚 Sistema de Gerenciamento de Livros

Este projeto é um sistema simples para **cadastro, listagem, alteração e exclusão de livros**, desenvolvido com **React + TypeScript** e um backend hospedado no Render.

---

## 🚀 Funcionalidades

- 📌 **Listar Livros**: Exibe uma lista de livros disponíveis.
- ➕ **Cadastrar Livro**: Permite adicionar novos livros ao sistema.
- ✏️ **Alterar Livro**: Atualiza as informações de um livro existente.
- ❌ **Excluir Livro**: Remove um livro do sistema.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React + TypeScript
- **Estilização**: CSS
- **Gerenciamento de Rotas**: React Router
- **Backend**: API hospedada no Render

---

## 🔧 Como Rodar o Projeto Localmente

### **1️⃣ Clonar o Repositório**
```bash
git clone https://github.com/SallesTachiyomi/1022a-marketplace-front-end
git clone https://github.com/SallesTachiyomi/1022a-marketplace
```

### **2️⃣ Instalar as Dependências**
```bash
npm install
```

### **3️⃣ Rodar o Projeto**
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (padrão do Vite).

🌍 Acesse o Projeto no Vercel
O projeto também está disponível no Vercel no seguinte link:

🔗 1022a-marketplace-front-end-alpha.vercel.app

---

## 🌍 API Utilizada

O backend da aplicação está hospedado no **Render** e pode ser acessado através da seguinte URL:

```
https://one022a-marketplace-xpww.onrender.com/produtos
```



### **📝 Endpoints Principais**

| Método  | Rota                          | Descrição                     |
|---------|-------------------------------|--------------------------------|
| GET     | `/produtos`                    | Retorna todos os livros        |
| POST    | `/produtos`                    | Cadastra um novo livro         |
| PUT     | `/produtos/:id`                | Atualiza um livro pelo ID      |
| DELETE  | `/produtos/:id`                | Remove um livro pelo ID        |

---

## 📌 Estrutura do Projeto

```
/src
 ├── /assets
 │    ├── react.svg
 ├── /componentes
 │    ├── /alterarproduto
 │    │    ├── AlterarProduto.tsx
 │    │    ├── AlterarProduto.css
 │    ├── /cadastroproduto
 │    │    ├── CadastroProduto.tsx
 │    │    ├── CadastroProduto.css
 ├── /header
 ├── App.tsx
 ├── App.css
 ├── index.css
 ├── main.tsx
```

---

## 📜 Licença

Este projeto é de código aberto e pode ser utilizado livremente.

---



💡 **Desenvolvido por [Erick Tarasiuk Alexandre, Gabriel Sales Machado de Souza]**