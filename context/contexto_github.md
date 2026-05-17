# Meus Repositórios do GitHub
Gerado em: dom 29 mar 2026 17:08:46 -03
---
## Repositório: api-flash
**Descrição:** O testador de requisições HTTP definitivo para quem não quer perder tempo. Leve, funcional e com o tema Dracula. Teste seus endpoints GET, POST, PUT e DELETE instantaneamente.

### README:

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


---

## Repositório: snippetvault
**Descrição:** Sem descrição

### README:

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


---

## Repositório: typedash
**Descrição:** TypeDash is an open-source typing speed trainer designed for enthusiasts who love the Dracula theme. Track your WPM (Words Per Minute), accuracy, and performance history with a premium, responsive interface.

### README:

# TypeDash 🚀

O **TypeDash** é uma plataforma moderna e minimalista para testes de velocidade e precisão de digitação. Inspirado em ferramentas como o MonkeyType, o projeto oferece uma interface fluida com o tema **Dracula**, permitindo que os usuários acompanhem seu progresso e compitam em um ranking global.

## ✨ Funcionalidades

- **Teste de Digitação:** Interface responsiva com cálculo progressivo de WPM e precisão.
- **Gráficos de Performance:** Visualização detalhada do desempenho durante o teste (via Recharts).
- **Dashboard Pessoal:** Histórico completo de testes realizados pelo usuário autenticado.
- **Ranking Global:** Tabela de classificação em tempo real com os melhores resultados da comunidade.
- **Autenticação:** Login seguro via GitHub utilizando Auth.js (NextAuth v5).
- **Tema Dracula:** Design premium e confortável para longas sessões de uso.

## 🛠️ Tecnologias Utilizadas

- **Core:** [Next.js 15](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) com [Prisma ORM](https://www.prisma.io/)
- **Autenticação:** [NextAuth.js v5 (Beta)](https://authjs.dev/)
- **Gráficos:** [Recharts](https://recharts.org/)
- **Validação:** [Zod](https://zod.dev/)

---

## 🚀 Como Começar

### Pré-requisitos

- Node.js (v20+)
- Uma instância de banco de dados PostgreSQL.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/emanuelVINI01/typedash.git
   cd typedash
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com os seguintes valores:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/typedash"
   AUTH_SECRET="seu-secret-aqui"
   AUTH_GITHUB_ID="seu-client-id"
   AUTH_GITHUB_SECRET="seu-client-secret"
   ```

4. Prepare o banco de dados:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

Acesse `http://localhost:3000` para ver o projeto em execução.

---

## 📡 Documentação da API

### 1. Palavras Aleatórias
Retorna uma lista de palavras para serem usadas no teste.

- **URL:** `/api/words`
- **Método:** `GET`
- **Resposta:** `string[]` (Array de 50 palavras aleatórias)

### 2. Salvar Métrica
Salva o resultado de um teste de digitação. Requer autenticação.

- **URL:** `/api/metrics`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "log": [
      { "key": "a", "time": 1711732000000, "expected": "a" },
      { "key": "b", "time": 1711732001000, "expected": "b" }
    ]
  }
  ```
- **Resposta de Sucesso:** `{ "success": true, "id": "cl..." }`
- **Erros:** `401 Unauthorized`, `400 Invalid format`.

### 3. Minhas Métricas
Retorna o histórico de testes do usuário conectado. Requer autenticação.

- **URL:** `/api/metrics/me`
- **Método:** `GET`
- **Parâmetros de Query:** `limit` (padrão: 10, máx: 100)
- **Resposta:** Lista de objetos contendo WPM, precisão, duração e data.

### 4. Ranking Global
Retorna os melhores resultados de todos os usuários.

- **URL:** `/api/metrics/ranking`
- **Método:** `GET`
- **Parâmetros de Query:** `limit` (padrão: 10, máx: 100)
- **Resposta:** Lista de métricas ordenadas por WPM (descendente).

---

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE). Criado por [emanuelVINI](https://github.com/emanuelVINI01).


---

## Repositório: my-bet
**Descrição:** A bet system with Double, Crash, Mines and Dice

### README:

# Modular Betting Framework 🚀

Uma solução robusta, escalável e de alto desempenho para plataformas de apostas modernas, focada em eventos CTF (Capture The Flag) e jogos de cassino modularizados.

A robust, scalable, and high-performance solution for modern betting platforms, focused on CTF (Capture The Flag) events and modularized casino games.

---

## 🏗️ Arquitetura de Engines / Engine Architecture

O coração da plataforma é baseado em uma hierarquia de classes que utiliza **Herança e Polimorfismo** para centralizar a lógica financeira e de integridade, permitindo que cada jogo implemente apenas suas regras específicas.

The platform's core is based on a class hierarchy that uses **Inheritance and Polymorphism** to centralize financial and integrity logic, allowing each game to implement only its specific rules.

### Hierarquia de Classes / Class Hierarchy

1.  **`BaseGameEngine`**: Classe abstrata mestre. Gerencia a conexão com o banco de dados (Prisma), transações financeiras atômicas e validações de saldo.
    *   *Master abstract class. Manages database connection (Prisma), atomic financial transactions, and balance validations.*
2.  **`SSEGameEngine`**: Extensão para jogos em tempo real (Crash, Double). Utiliza **Server-Sent Events** para broadcast de estado em massa com baixa latência.
    *   *Extension for real-time games (Crash, Double). Uses **Server-Sent Events** for low-latency mass state broadcasting.*
3.  **`StateGameEngine`**: Extensão para jogos baseados em interação individual (Mines). Gerencia estados complexos por usuário e cliques específicos.
    *   *Extension for individual interaction games (Mines). Manages complex per-user states and specific clicks.*

> **Por que essa arquitetura?** Centralizamos o "trabalho pesado" (débito de saldo, registro de logs, segurança) na base. Criar um novo jogo (ex: Tower ou Dice) requer apenas herdar da engine correta e implementar a lógica visual.
>
> **Why this architecture?** We centralize the "heavy lifting" (balance debit, transaction logging, security) in the base. Creating a new game (e.g., Tower or Dice) only requires inheriting from the correct engine and implementing the visual logic.

---

## 🛠️ Abstração de API & Handlers / API Abstraction

Eliminamos o boilerplate repetitivo através de **Wrappers** e **Factories**, permitindo que novas rotas de aposta sejam criadas com apenas uma linha de código.

We've eliminated repetitive boilerplate through **Wrappers** and **Factories**, allowing new betting routes to be created with just one line of code.

### Handlers Declarativos

*   **`withBetAuth`**: Wrapper que garante autenticação, validação de Zod Payload e execução da aposta em um contexto seguro.
    *   *Wrapper that ensures authentication, Zod Payload validation, and bet execution in a secure context.*
*   **`createBetRoute`**: Uma Factory comercial que transforma instâncias de Engine em endpoints prontos:
    ```typescript
    // app/api/games/mines/route.ts
    export const POST = createBetRoute(gameEngine, MinesSchema);
    ```

---

## 📡 Referência de API / API Reference

| Endpoint | Método / Method | Descrição / Description | Payload (Zod) |
| :--- | :--- | :--- | :--- |
| `/api/games/[game]` | `POST` | Realiza uma nova aposta / Places a new bet | `{ amount: number, ...params }` |
| `/api/games/[game]/state` | `GET` | Busca o estado atual do jogo/aposta / Fetches current game/bet state | `N/A` |
| `/api/games/[game]/action` | `POST` | Interação (ex: clicar slot no Mines) / Interaction (e.g. click slot in Mines) | `{ index: number }` |
| `/api/games/[game]/stop` | `POST` | Cashout / Encerra a rodada / Cashout / Ends the round | `N/A` |

### Status Codes
*   **200 OK**: Sucesso / Success.
*   **400 Bad Request**: Saldo insuficiente ou payload inválido / Insufficient balance or invalid payload.
*   **401 Unauthorized**: Usuário não autenticado / User not authenticated.
*   **500 Internal Error**: Erro crítico no motor / Critical engine error.

---

## 🛡️ Segurança & Integridade / Security & Integrity

A integridade dos dados é nossa prioridade absoluta. Implementamos múltiplas camadas de proteção:

Data integrity is our absolute priority. We have implemented multiple protection layers:

1.  **Atomicidade com Prisma `$transaction`**: Todas as operações de débito e criação de aposta ocorrem em uma única transação de banco de dados. Se um falhar, o outro é revertido.
    *   ***Atomicity with Prisma `$transaction`**: All debit and bet creation operations occur in a single database transaction. If one fails, the other is rolled back.*
2.  **Redis Session Locking**: Utilizamos travas do Redis para evitar o **Double Spending**. Um usuário não consegue disparar duas apostas idênticas no mesmo milissegundo.
    *   ***Redis Session Locking**: We use Redis locks to prevent **Double Spending**. A user cannot trigger two identical bets in the same millisecond.*
3.  **Anti-ID Spoofing**: Todas as rotas validam o `userId` via sessão segura (`auth()`), impedindo que um usuário tente apostar ou sacar em nome de outro.
    *   ***Anti-ID Spoofing**: All routes validate the `userId` via a secure session (`auth()`), preventing a user from attempting to bet or withdraw on behalf of another.*

---

## 🎨 White Label & Customização / White Label & Customization

A plataforma foi desenhada para ser multi-tenant e facilmente customizável:

The platform was designed to be multi-tenant and easily customizable:

*   **Dynamic Theming**: O sistema injeta variáveis CSS `:root` dinamicamente baseadas nas configurações do banco de dados/Redis, permitindo mudar cores, fontes e logotipos sem novos deploys.
    *   ***Dynamic Theming**: The system injects CSS `:root` variables dynamically based on database/Redis configurations, allowing color, font, and logo changes without new redeployments.*
*   **RTP & Limites Dinâmicos**: O *Return to Player* (RTP) e os limites de aposta são lidos em tempo real do ambiente/Redis, permitindo ajustes de lucratividade on-the-fly.
    *   ***RTP & Dynamic Limits**: Return to Player (RTP) and betting limits are read in real-time from the environment/Redis, allowing on-the-fly profitability adjustments.*

---

## 🚀 Performance & Manutenção / Performance & Maintenance

*   **SSE (Server-Sent Events)**: Escolhemos SSE em vez de WebSockets para o broadcast dos jogos (Crash/Double) por ser mais leve, compatível com HTTP/2 e possuir reconexão automática nativa.
    *   ***SSE (Server-Sent Events)**: We chose SSE over WebSockets for game broadcasting (Crash/Double) as it's lighter, HTTP/2 compatible, and has native automatic reconnection.*
*   **Cron Job (Faxina)**: Um sistema automatizado limpa cadastros não verificados a cada 15 minutos e encerra apostas órfãs no Mines após 10 minutos de inatividade.
    *   ***Cron Job (Cleanup)**: An automated system cleans unverified registrations every 15 minutes and closes orphan Mines bets after 10 minutes of inactivity.*

---

## 👨‍💻 Desenvolvedor / Developer

Desenvolvido com foco em excelência técnica e escalabilidade.

Developed with a focus on technical excellence and scalability.

**Emanuel Vini**


---

## Repositório: money-manager
**Descrição:** A simple finance manager project.

### README:

# Money Manager 💰

O **Money Manager** é uma aplicação web de gestão financeira completa para ajudar usuários a controlarem suas receitas e despesas. Foi construído com foco em design moderno (UI/UX sofisticado, Dark Mode, Minimalismo e Glassmorphism) e excelente usabilidade.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído usando tecnologias modernas para o desenvolvimento frontend e backend:

- **[Next.js (App Router)](https://nextjs.org/)**: Framework React para renderização, roteamento e rotas de API.
- **[React](https://reactjs.org/)**: Biblioteca para a construção da interface do usuário baseada em componentes.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para JavaScript que aumenta a segurança e produtividade do código.
- **[Tailwind CSS (v4)](https://tailwindcss.com/)**: Framework CSS utilitário para a estilização ágil e design responsivo.
- **[Prisma](https://www.prisma.io/)**: ORM para a comunicação eficiente com o banco de dados.
- **[SQLite](https://sqlite.org/)**: Banco de dados relacional para ambiente de desenvolvimento (`dev.db`).
- **[Recharts](https://recharts.org/)**: Biblioteca para criação de gráficos financeiros na dashboard.
- **[Lucide React](https://lucide.dev/)**: Fornecimento da iconografia limpa e moderna usada no sistema.
- **[Zod](https://zod.dev/)**: Validação e parsing de schemas (dados e formulários).

## ✨ Funcionalidades

- **Dashboard Financeiro (Home)**: Visualização geral de saldos, fluxo de caixa, receitas, despesas e distribuição em gráficos (CashFlow).
- **Módulo de Transações**: 
  - Adição, edição e exclusão de transações de entrada e saída.
  - Campos aprimorados: Valor em decimais, Data flexível, Categoria e Descrição opcional de até 150 caracteres.
  - Ordenação decrescente/crescente por datas e outros filtros.
- **Estatísticas Avançadas**: Gráficos de pizza para exibir a distribuição real de gastos segmentados por categorias (suporta "Outros" para agrupar as menos expressivas).
- **Gestão de Categorias**: Sistema completo para administrar categorias de transações.
- **Ferramentas e Calculadoras**: Utilitários integrados, como a Calculadora de Juros Compostos (cálculo robusto com valor inicial, depósitos mensais, taxas e visualização de resultados em grid interativo).
- **Autenticação**: Telas modernas de Login/Cadastro com efeitos refinados, micro-animações, estados de carregamento e gestão simplificada da sessão (Local Storage).
- **Adaptação de UI**: Suporte total a **Dark Mode** e esquema de cores customizados ao longo de toda a plataforma, priorizando a legibilidade dos gráficos e tooltip formatações refinadas de moedas e datas.

## 📦 Como executar localmente

1. **Clone este repositório** e acesse a pasta do projeto:
```bash
# git clone <url-do-repositorio> # opcional caso já clonado
cd money_manager
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Configure as variáveis de ambiente**:
Crie ou verifique o arquivo `.env` na raiz do projeto contendo a string de conexão com o banco de dados:
```env
DATABASE_URL="file:./dev.db"
# Outras variáveis (se necessário)
```

4. **Prepare o banco de dados (Prisma)**:
Sincronize o banco de dados e as dependências geradas do Prisma:
```bash
npx prisma db push
# ou se estiver usando arquétipos de migração:
npx prisma migrate dev
```

5. **Inicie o servidor de desenvolvimento**:
```bash
npm run dev
```

6. **Acesse a aplicação**:
Abra [http://localhost:3000](http://localhost:3000) no seu navegador ou a porta indicada pelo terminal (como `3001` ou `3002`).

## 📂 Estrutura do Projeto (Principais Diretórios)

- `app/`: Diretório principal do Next.js App Router.
  - `components/`: Componentes reutilizáveis (e.g., Auth, Dashboard, Formulários, Chart Tooltips, Layout e Sidebar).
  - `api/`: Rotas assíncronas para chamadas de banco e serviços de back-end.
- `prisma/`: Arquivos relacionados ao esquema de banco e ao banco SQLite embarcado (`dev.db`).
- `lib/`: Classes genéricas e úteis da aplicação.
- `public/`: Imagens, favicons e recursos globais expostos da web.


---

## Repositório: MTX-Upload
**Descrição:** A simple system of file manage and uploading. Include share, rename, delete and download. Made with nextjs, prisma.

### README:

# MTX-Upload
A simple system of file manage and uploading. Include share, rename, delete and download. Made with nextjs, prisma.


---

## Repositório: emanuelVINI01
**Descrição:** Sem descrição

### README:

<img src="https://user-images.githubusercontent.com/59892753/122819440-d97f2e80-d2b0-11eb-87dd-0d6737de5452.png" width="350px" align="right">

I im 16 years old, and i can do what your or i need, i have my bests skills in Java, C#, Python and JavaScript.

https://emanuelvini01.github.io/

- 🎓 Focused on learning more always.
- 📌 My mission is simplify.
- 🍷 I always try to make the better code.
- ⚒️ You can contact me in discord: emanuelvini

<h3> &nbsp;Skills </h3>

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![C#](https://img.shields.io/badge/csharp-20232A?style=for-the-badge&logo=csharp)
![JavaScript](https://img.shields.io/badge/javascript-20232A?style=for-the-badge&logo=javascript)
![TypeScript](https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb-20232A?style=for-the-badge&logo=mongodb)
![Python](https://img.shields.io/badge/python-20232A?style=for-the-badge&logo=python)
![SQLite](https://camo.githubusercontent.com/932123bf240349f3785c02228b113b06299079e8740f480c767e8335fd6d752a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3037343035453f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d7768697465)



---

## Repositório: portifolio-frontend
**Descrição:** Sem descrição

### README:

*(README não encontrado)*


---

## Repositório: guide
**Descrição:** The official guide for discord.js, created and maintained by core members of its community.

### README:

<div align="center">
	<img src="guide/images/branding/banner-blurple-small.png" title="discord.js Guide" alt="discord.js Guide" />
</div>

# Discord.js Guide

Imagine a guide... that explores the many possibilities for your [discord.js](https://github.com/discordjs/discord.js) bot.

## About

This guide is aimed at users who are either unfamiliar or inexperienced with Node.js and creating Discord bots. It assumes you have a basic understanding of JavaScript.

There are many different subjects covered, such as:

- How to get a bot [up and running](https://discordjs.guide/preparations/) from scratch;
- How to properly [create](https://discordjs.guide/creating-your-bot/), [organize](https://discordjs.guide/creating-your-bot/command-handling.html), and expand on your commands;
- In-depth explanations and examples regarding popular topics (e.g. [reactions](https://discordjs.guide/popular-topics/reactions.html), [embeds](https://discordjs.guide/popular-topics/embeds.html), [canvas](https://discordjs.guide/popular-topics/canvas.html));
- Working with databases (e.g. [sequelize](https://discordjs.guide/sequelize/) and [keyv](https://discordjs.guide/keyv/));
- Getting started with [sharding](https://discordjs.guide/sharding/);
- And much more.

## Contributing

If you're interested in contributing to the guide, you should check out our [GitHub Projects](https://github.com/discordjs/guide/projects) page or [open issues](https://github.com/discordjs/guide/issues). There's a [contribution guide](https://github.com/discordjs/guide/blob/main/CONTRIBUTING.md) you should read once you decide on what you want to contribute.


---

## Repositório: ckl-cppbuilder
**Descrição:** Sem descrição

### README:

*(README não encontrado)*


---

## Repositório: GArmazem
**Descrição:** Sem descrição

### README:

*(README não encontrado)*


---

## Repositório: DRTestBot
**Descrição:** Sem descrição

### README:

*(README não encontrado)*


---

## Repositório: random-uuid
**Descrição:** Sem descrição

### README:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


---

## Repositório: AdvancedSQL
**Descrição:** API to easy use of MySQL and SQLite database.

### README:

# AdvancedSQL

The API you need in your project to use SQLite and MySQL more easily!

## How to download?

### Gradle:

```gradle
repositories {
  maven { url 'https://jitpack.io' }
}
dependencies {
	implementation 'com.github.emanuelVINI01:advancedsql:VERSION'
}
```


### Maven:

```xml
<repositories>
 <repository>
	<id>jitpack.io</id>
	<url>https://jitpack.io</url>
 </repository>
</repositories>
<dependency>
  <groupId>com.github.emanuelVINI01</groupId>
  <artifactId>advancedsql</artifactId>
  <version>VERSION</version>
</dependency>
```

## How to use?

### You can check the wiki clicking [here](https://github.com/emanuelVINI01/AdvancedSQL/wiki) to tutorial about, good coding!


---

## Repositório: PTDBot
**Descrição:** Serviços e Pagamentos BRDevs

### README:

*(README não encontrado)*


---

## Repositório: FeastCore
**Descrição:** Centro de todos plugins do Feast (API)

### README:

# FeastCore
Core of all Feast plugins (API)

<h2> Tecnologies used: </h2>


<h3><bold><a href="https://github.com/projectlombok/lombok"> Lombok </a> </bold>: Annotations as @Getter e @Setter, deixando o código mais limpo. </h3>


<div>
  <h3><a href="https://github.com/henrysaantos/sql-provider">SQLProvider</h1>
  <h3><a href="https://github.com/tr7zw/Item-NBT-API">NBTAPI</h1>
</div>

<h3>
 You only need put plugin in: FeastCore/plugins.<br/>
</h3>

<h2>Example:</h2>

```java
    
package com.emanuelvini.feastcrates;

import com.emanuelvini.feastcore.bukkit.api.plugin.BukkitFeastPlugin;
import lombok.Getter;

public class MainFeast extends BukkitFeastPlugin {


    @Override
    public void setupDependencies() {
        super.setupDependencies();
        addDependency("example", "https://github.com/example/example/releases/download/v1.0/example.jar");
        
    }

    @Override
    public void onEnable() {
        super.onEnable();
        saveDefaultConfig();
    }

    @Override
    public void onDisable() {
        super.onDisable();
    }
}

```




---

## Repositório: emanuelvini01.github.io
**Descrição:** Sem descrição

### README:

# emanuelvini.github.io

---

## Repositório: sql-provider
**Descrição:** Construa plugins utilizando sql facilemente.

### README:

*(README não encontrado)*


---

## Repositório: EMTrocar
**Descrição:** A plugin for ZappyCraft discord verification

### README:

# EMTrocar
A plugin for ZappyCraft discord verification, not tested.

![Trade /trade start](https://img001.prntscr.com/file/img001/1DcGRdIKRrmhVEPdQbu2CQ.png)
![Trade /aceitar](https://img001.prntscr.com/file/img001/VtTwHp7UR-eL2Fxe7HA1fg.png)
![Trade /aceitar](https://img001.prntscr.com/file/img001/1rHd1FYxRO-gWbOL8J3qbg.png)

When you click in green glass, the trade will be confirmed.

Its a trade plugin, you do `/trade <player nick>`, open a menu and you put item, if target player accept, we put a item and open inventory to you, if accept the trade, give items to two players.

/aceitar <player nick> accept a trade.

Because I only was have **two hours** to make this, can have many bugs.


---

## Repositório: MultiServer-API
**Descrição:** API to make one code for multiplie servers type, like: Bukkit, Sponge, BungeeCord, Velocity and others.

### README:

*(README não encontrado)*


---

## Repositório: RyzenSite
**Descrição:** Sem descrição

### README:

# Ryzen Site

This was the site of my old host, open in 2021 and closed at Jun 22.

Uses TypeScript and ChakraUI.


---

## Repositório: zDiscordCore
**Descrição:** Plugin de Vinculação do Minecraft com Discord

### README:

# zDiscordCore
Sistema de vinculação do Discord ao Minecraft com API para uso em outros plugins.

(This project was made when I have 11 years, the code is **VERY** shadow, but the start is always here.)


---

## Repositório: zOlhoDeDeus
**Descrição:** Sem descrição

### README:

# zOlhoDeDeus

This project was made when I have 11 years, the code is **VERY** shadow, but the start is always here.


---

## Repositório: zRankupV2
**Descrição:** Sem descrição

### README:

# zRankupV2

(This project was made when I have 11 years, the code is **VERY** shadow, but the start is always here.)


---

## Repositório: zCash
**Descrição:** Sem descrição

### README:

# zCash

(This project was made when I have 11 years, the code is **VERY** shadow, but the start is always here.)


---

## Repositório: zHomeGUI
**Descrição:** Homes eu uma GUI.

### README:

# zHomeGUI
Homes em uma GUI.

(This project was made when I have 11 years, the code is **VERY** shadow, but the start is always here.)


---

## Repositório: zAntiVPN
**Descrição:** Sem descrição

### README:

# zAntiVPN


Um plugin para bloquear pessoas acessarem seu servidor de VPN!

(This project was made when I have 11 years, the code is **VERY** shadow, but the start is always here.)


---

## Repositório: zSilk2
**Descrição:** Um plugin de quebrar blocos inquebraveis para bukkit / spigot

### README:

# zSilk2

This project was made when I have 11 years, the code is **VERY** shadow, but the start is always here.


---

## Repositório: zManutencao
**Descrição:** Um plugin para seu servidor bukkit / spigot 1.8+ de manutenção totalmente personalizado! v1.1

### README:

# zManutencao

This project was made when I have 11 years, the code is **VERY** shadow, but the start is always here.


---

## Repositório: zSaveWorld
**Descrição:** Sem descrição

### README:

# zSaveWorld

This project was made when I have 11 years, the code is **VERY** shadow, but the start is always here.


---

## Repositório: ComuniMineBot
**Descrição:** A discord bot with many functions for a Minecraft Community.

### README:

# ComuniMineBot
A discord bot with many functions for a Minecraft Community.

The bot have music system, economy system and others utility commands, you can check in the commands folder.


---

## Repositório: RyzenShopBot
**Descrição:** Sem descrição

### README:

# RyzenShopBot

A discord bot with many utilities, in typescript. Have economy system, admin commands and others.


---

## Repositório: MinecraftFeastBot
**Descrição:** Sem descrição

### README:

# FeastBot

A discord bot for Minecraft server with many functions, and is always happy.


---

## Repositório: DVDuels
**Descrição:** A trial plugin for devroom

### README:

# DVDuels
A trial plugin for devroom test verification. 

A simple duel plugin with kit system, have contains bugs because not fully tested, fully configurable.<br>

`/duel <player> [kit]` - Starts a duel with a player, if kit not selected, will be default kit.<br>
`/accept <player>` - Accept duel of player was request you to duel.<br>
`/stats` - Show stats stored in database.<br>


---

## Repositório: FeastLobby
**Descrição:** Um plugin de Lobby da FeastPlugins

### README:

# FeastLobby
A simple lobby plugin for FeastPlugins



#### If you have problems, create a issue.

|Comamand         |Description                      |Permission                    |
|----------------|-------------------------------|-----------------------------|
|/lobbyadmin editar|Abre o menu de edição de algum servidor.|feastlobby.admin.editarservidor|
|/lobbyadmin criar|Permite você criar um servidor.|feastlobby.admin.criar|
|/lobbyadmin deletar|Permite você deletar um servidor.|feastlobby.admin.deletar|
|/lobbyadmin npc set|Permite você definir o NPC de um servidor.|feastlobby.admin.npc|
|/lobbyadmin npc remove|Permite você remover o NPC de um servidor.|feastlobby.admin.npc|

### Instalação

You can find compiled jars [`here`](https://github.com/feastplugins/FeastLobby/releases). Or you can build own builts.

The installation is easy, only put the plugin in **/plugins/FeastCore/plugins/** and restart.

### Placeholders

- "%feastlobby_id" --> Retorn the server status;

### Dependends

- [**PlaceholderAPI**](https://www.spigotmc.org/resources/placeholderapi.6245)
- [**HolographicDisplays**](https://dev.bukkit.org/projects/holographic-displays)


---

## Repositório: FeastScore
**Descrição:** Um plugin de Scoreboard com diversos hooks e configurações.

### README:

# FeastScore
A scoreboard plugin with configurations and hooks.

# [Click to see demo video.](https://youtu.be/gdYQ47cKQlE])

![](https://i.imgur.com/JGSneqb.gif)

![](https://i.imgur.com/9Xsftok.gif)
    
# Configuration of scoreboard

```yaml
# Suporte atual aos hooks: PlotSquared e SimpleClans
required-hook: "PlotSquared" #Requer que o jogador esteja em um terreno dominado.
required-world: "" #Mundo ao qual o jogador deve estar para ativar ela
required-permission: "" #Se for vazio não requer
weight: 2 #Usado para definir se ela será sobreescrita a outra scoreboard

scoreboard:
  title: "&5&lFEAST PLUGINS"
  lines:
    - "&r"
    - " &fTPS: &a%server_tps%"
    - " &fNome: &a%player_name%"
    - "&r"
    - " &fPing: &a%player_ping%"
    - ' &fUptime: &a%server_uptime%'
    - ""
    - " &dfeastplugins.com"

```


---

## Repositório: PremiumChat
**Descrição:** A BungeeCord,Velocity and Bukkit chat plugin.

### README:

*(README não encontrado)*


---

## Repositório: chessdisplay
**Descrição:** A fully customizable chess board.

### README:

# chessdisplay

chessdisplay is a Python board to chess to represent chess positions fully customizable.




## Examples
```python

import chessdisplay, chess

board = chess.Board()

game_display = chessdisplay.Display(board)
game_display.await_close()


```

## Install
Install the latest version:
```sh
pip install chessdisplay

```
[GNU GENERAL PUBLIC LICENSE](LICENSE)

---

## Repositório: Blaze
**Descrição:** A API For Blaze Games

### README:


# Blaze - TS/JS Blaze API
A websocket connection for Blaze games
<img src="/Media/blaze.png" alt="Blaze"/>

## Example
You can check at [example.ts](https://github.com/viniciusgdr/Blaze/blob/master/Example/example.ts)
an event receiving usage model

To run the example, download or clone the repo and then type the following in terminal:
1. ``` cd path/Blaze ```
2. ``` npm i ```
3. ``` npm run example ``` 


## Install

Stable version:
```
npm i @viniciusgdr/Blaze
```
Or use the edge version
```
  npm i github:viniciusgdr/Blaze
```
    
## Handling Events
```ts
'authenticated': { success: boolean; subscribe: string[] }
'close': { code: number; reason: string; }

'crash.tick': CrashUpdate | CrashUpdateV2;
'double.tick': DoubleUpdate | DoubleUpdateV2;

'crash_waiting': CrashUpdate | CrashUpdateV2 | DoubleUpdate | DoubleUpdateV2;
'crash_graphing': CrashUpdate | CrashUpdateV2 | DoubleUpdate | DoubleUpdateV2;
'crash_complete': CrashUpdate | CrashUpdateV2 | DoubleUpdate | DoubleUpdateV2;
```

Example:
```ts
const socket = makeConnectionBlaze({
    type: 'crash', // or 'doubles'
})
socket.ev.on('game_complete', (msg) => {
    console.log(msg)
})
```
## Notes
This option declared as "true" closes the socket when the match ends
```ts
const socket = makeConnectionBlaze({
    needCloseWithCompletedSession: boolean
})
```

You can set the interval time between sends that the socket is alive in blaze
```ts
const socket = makeConnectionBlaze({
    timeoutSendingAliveSocket: number
})
```

You can set the your token of blaze (Optional)
```ts
const socket = makeConnectionBlaze({
    token: string
})
```

This option declared as "true" limits you from repeating the same event several times in the round. so sending only once.
```ts
const socket = makeConnectionBlaze({
    requireNotRepeated: false
    // the default is true
})
```
## Licence

[MIT](https://choosealicense.com/licenses/mit/)



---

## Repositório: YT2Cut
**Descrição:** Sem descrição

### README:

# YT2Cut

## A project maked for download cutted for youtube videos.


---

## Repositório: Nukkit
**Descrição:** Nukkit is a Nuclear-Powered Server Software For Minecraft: Pocket Edition

### README:

![nukkit](https://github.com/Nukkit/Nukkit/blob/master/images/banner.png)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](LICENSE)
[![Build Status](https://ci.potestas.xyz/job/NukkitX/job/master/badge/icon)](https://ci.potestas.xyz/job/NukkitX/job/master/)
[![Discord](https://img.shields.io/discord/393465748535640064.svg)](https://discord.gg/5PzMkyK)

ATTENTION
-------------
**This repo is inactive. Try [NukkitX](https://github.com/NukkitX/Nukkit)**

Introduction
-------------

Nukkit is nuclear-powered server software for Minecraft Bedrock Edition.
It has a few key advantages over other server software:

* Written in Java, Nukkit is faster and more stable.
* Having a friendly structure, it's easy to contribute to Nukkit's development and rewrite plugins from other platforms into Nukkit plugins.

Nukkit is **under improvement** yet, we welcome contributions. 

Example servers running Nukkit
--------------------
- **play.EaseCation.net**
- **pe.GameTeam.cz**
- **MultiLabs.net**

Get Nukkit & Plugins
--------------------

#### Recommended Sites

* __[Official Site & Forums](https://potestas.xyz)__
* __[Download](https://ci.potestas.xyz/job/NukkitX/job/master)__

*Thank you for visiting our official sites. Our official websites are provided free of charge, and we do not like to place ads on the home page affecting your reading. If you like this project, please [donate to us](#). All the donations will only be used for Nukkit websites and services.*

Build JAR file
-------------
- `git submodule update --init`
- `mvn clean package`

Running
-------------
Simply run `start.sh` or `start.cmd`, or execute `java -jar Nukkit.jar`.

Plugin API
-------------
#### **Example Plugin**
Example Plugin which shows the API of Nukkit.

* __[Example Plugin](http://github.com/Nukkit/ExamplePlugin)__

Contributing
------------
Please read the [CONTRIBUTING](.github/CONTRIBUTING.md) guide before submitting any issue. Issues with insufficient information or in the wrong format will be closed and will not be reviewed.


---

## Repositório: batblaze
**Descrição:** Sem descrição

### README:

# batblaze

---

## Repositório: zPunish-master
**Descrição:** Sem descrição

### README:

*(README não encontrado)*


---

## Repositório: zPackestV2
**Descrição:** Sem descrição

### README:

# zPackestV2

---

## Repositório: zLoader
**Descrição:** Sem descrição

### README:

# zLoader
O loader para atualizar meus plugins automaticamente!


---

