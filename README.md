# Projeto Indaiatuba Palete

Este repositório é dividido em duas partes:

- **ip-front**: Aplicação frontend desenvolvida para interação com o usuário.
- **ip-back**: API backend responsável pela lógica de negócio, persistência de dados e autenticação.

---

## 🔧 Tecnologias Utilizadas

### Backend (`ip-back`)
- Java + Spring Boot
- Spring Security (para autenticação)
- JPA / Hibernate

### Frontend (`ip-front`)
- Next.js
- React

---

## 📦 Funcionalidades da API (`ip-back`)

- **Cadastro de Usuário:** Criação de contas com validação de dados.
- **Login de Usuário:** Autenticação segura com geração de token (JWT).
- **Cadastro de Produto:** Registro de produtos com dados como:
  - Nome
  - Descrição
  - Tipo (chapatex, pallet de madeira ou pallet de plástico)
- **Cadastro de Orçamento:** Criação de orçamentos baseados nos produtos cadastrados.
