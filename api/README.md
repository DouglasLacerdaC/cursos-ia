# Feedback IA - API

API desenvolvida para integração com o sistema de cursos! Com integrações ao Stripe, Gemini e GoogleOAuth.

## 🚀 Tecnologias

- [Express](https://expressjs.com/pt-br/) - Framework
- [Typescript](https://www.typescriptlang.org/) - Superset do javascript
- [Prisma](https://www.prisma.io/) - ORM do NodeJS
- [Yup](https://www.npmjs.com/package/yup) - Validador de schemas typescript

## 📦️ Pré-Requisitos

Antes de começar você vai precisar ter instalado na sua máquina as ferramentas [Git](https://git-scm.com/) e [Docker](https://www.docker.com/).

## 🖥️ Executar o [Prisma](https://www.prisma.io/docs)

- Gerar o banco:

```
  npx prisma db push
```

- Adicionar os dados no banco

```
  npx prisma db seed
```

- Iniciar gerenciador de banco do Prisma

```
  npx prisma studio
```

## 💳 Executando a CLI do [Stripe](https://docs.stripe.com/stripe-cli?install-method=windows)

1. Após a configuração da CLI do stripe, faça o login:

```
  stripe login
```

2. Rode o comando para expor o [webhook](https://docs.stripe.com/webhooks)

```
  stripe listen --forward-to localhost:3000/purchases/webhook
```

## ⚡ Executando o projeto

1. Clone o repositório

```
  git clone https://github.com/DouglasLacerdaC/feedback-ia
```

2. Acesse a pasta /api e rode o comando para instalar as dependências

```
  npm install
```

3. Rode o comando para rodar a aplicação

```
  npm run dev
```

4. Acesse pelo navegador

```
  http://localhost:[PORT]
```
