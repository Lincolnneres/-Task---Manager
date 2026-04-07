# 📋 Task Manager — Fullstack

> Aplicação fullstack para gerenciamento de tarefas com autenticação JWT, construída com React, Node.js, Express e MongoDB.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Deploy](https://img.shields.io/badge/Deploy-Render-46E3B7?style=flat-square&logo=render&logoColor=white)](https://render.com)

---

## 🚀 Demo

| | Link |
|---|---|
| 🌐 **Frontend** | [https://task-manager-frontend-416z.onrender.com](https://task-manager-frontend-416z.onrender.com) |
| ⚙️ **API** | [https://task-manager-zsch.onrender.com](https://task-manager-zsch.onrender.com) |

> ⚠️ Instância gratuita — pode levar até 50 segundos para responder após inatividade.

---

## 📸 Preview

<img width="1366" height="693" alt="TELA DE LOGIN" src="https://github.com/user-attachments/assets/8c1209da-a40d-4abf-9843-c5d948745b61" />
<img width="1366" height="693" alt="gerenciador de tarefas " src="https://github.com/user-attachments/assets/1b81fde8-c22c-4b43-9a19-0e809267f4fc" />



## ✨ Funcionalidades

- 🔐 Cadastro e login de usuários com JWT
- ✅ CRUD completo de tarefas
- 🛡️ Rotas protegidas por middleware de autenticação
- 🌍 Integração frontend e backend via API REST
- 🗄️ Banco de dados MongoDB Atlas

---

## 🛠️ Tecnologias

### Frontend
| Tecnologia | Uso |
|---|---|
| React 18 | Interface do usuário |
| Vite | Bundler |
| Axios | Requisições HTTP |
| React Router | Navegação |

### Backend
| Tecnologia | Uso |
|---|---|
| Node.js | Runtime |
| Express | Framework HTTP |
| Mongoose | ODM para MongoDB |
| JSON Web Token | Autenticação |
| bcryptjs | Hash de senhas |

---

## 📁 Estrutura do Projeto

```
task-manager/
├── frontend2/
│   ├── src/
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── pages/            # Páginas da aplicação
│   │   ├── services/
│   │   │   └── api.js        # Configuração do Axios
│   │   └── context/          # Contexto de autenticação
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── controllers/      # Lógica de negócio
    │   ├── middleware/        # Autenticação JWT
    │   ├── models/            # Models MongoDB
    │   ├── routes/            # Rotas da API
    │   └── app.js             # Configuração do servidor
    └── package.json
```

---

## 📡 Endpoints da API

### Autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/api/auth/register` | Cadastrar novo usuário |
| `POST` | `/api/auth/login` | Fazer login e obter token |

### Tarefas (🔒 requer token JWT)

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/tasks` | Listar todas as tarefas |
| `POST` | `/api/tasks` | Criar nova tarefa |
| `PUT` | `/api/tasks/:id` | Atualizar tarefa |
| `DELETE` | `/api/tasks/:id` | Deletar tarefa |

---

## 🚢 Deploy

Ambos frontend e backend estão hospedados no **Render** com deploy automático a cada push na branch `main`.

| Serviço | Tipo | URL |
|---------|------|-----|
| Frontend | Static Site | [task-manager-frontend-416z.onrender.com](https://task-manager-frontend-416z.onrender.com) |
| Backend | Web Service | [task-manager-zsch.onrender.com](https://task-manager-zsch.onrender.com) |

---

## 📝 Licença

Este projeto está sob a licença MIT.

---

<div align="center">
  Feito com ❤️ por <a href="https://github.com/Lincolnneres">Lincoln Neres</a>
</div>
