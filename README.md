# Indaiatuba Palete

Bem-vindo ao repositório do **Indaiatuba Palete**, um sistema completo para gerenciamento de produtos, orçamentos e autenticação de usuários, desenvolvido para atender às necessidades de transporte e armazenamento seguro de mercadorias.

## 📋 Descrição do Projeto

O **Indaiatuba Palete** é um sistema web que oferece:
- **Frontend**: Interface de usuário moderna e responsiva, desenvolvida com **Next.js** e **TailwindCSS**.
- **Backend**: API RESTful robusta, construída com **Spring Boot**, para gerenciar usuários, produtos e solicitações de orçamento.
- **Autenticação JWT**: Segurança implementada com autenticação baseada em tokens JWT.
- **Banco de Dados**: Persistência de dados utilizando **H2 Database** (em memória).

## 🚀 Funcionalidades

### Frontend
- Página inicial com informações sobre a empresa e seus produtos.
- Sistema de login e registro de usuários.
- Formulário para solicitação de orçamento.
- Navegação responsiva e design moderno.

### Backend
- Gerenciamento de usuários (CRUD).
- Gerenciamento de produtos (CRUD).
- Criação e consulta de solicitações de orçamento.
- Autenticação e autorização com JWT.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js**: Framework React para renderização do lado do servidor.
- **TailwindCSS**: Framework CSS para estilização.
- **TypeScript**: Superset do JavaScript para tipagem estática.

### Backend
- **Spring Boot**: Framework Java para desenvolvimento de APIs RESTful.
- **JWT (JSON Web Token)**: Para autenticação e autorização.
- **H2 Database**: Banco de dados em memória para desenvolvimento e testes.
- **Maven**: Gerenciador de dependências.

📊 Status da Versão
- **Versão Atual: 0.1.0**  
* Frontend:  
  * Funcionalidades básicas implementadas, incluindo login, registro, e formulário de orçamento.  
  * Navegação responsiva e design moderno.  
  * Integração com o backend para autenticação e gerenciamento de produtos.  
* Backend: 
  - Endpoints para gerenciamento de usuários, produtos e orçamentos implementados.  
  - Autenticação JWT funcional.  
  - Banco de dados H2 configurado para persistência em memória.  
  - Configuração de CORS para integração com o frontend.  

📝 Observações:  
Este projeto está em fase inicial de desenvolvimento e ainda pode conter bugs ou funcionalidades incompletas.  
O backend utiliza um banco de dados em memória (H2) para facilitar o desenvolvimento e testes. Em produção, recomenda-se configurar um banco de dados persistente, como MySQL ou PostgreSQL.
A autenticação JWT está implementada, mas a renovação de tokens e logout ainda não foram adicionados.
