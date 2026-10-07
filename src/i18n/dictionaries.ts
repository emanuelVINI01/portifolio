export type Language = 'pt' | 'en' | 'de';
export type Dictionary = typeof pt;

export function pick<T>(lang: Language, values: { pt: T; en: T; de: T }): T {
  return values[lang] ?? values.en;
}

export const pt = {
  "projectDetail": {
    "back": "Voltar para projetos",
    "highlights": "Destaques técnicos",
    "repository": "Abrir repositório",
    "live": "Abrir demonstração",
    "stack": "Tecnologias"
  },
  "projectStage": {
    "application": "Aplicação",
    "experiment": "Experimento",
    "legacy": "Legado",
    "scaffold": "Em construção"
  },
  "gallery": {
    "title": "Telas do projeto",
    "expand": "Ampliar imagem",
    "close": "Fechar imagem",
    "previous": "Imagem anterior",
    "next": "Próxima imagem",
    "select": "Selecionar imagem",
    "existing": "Registro anterior"
  },
  "aboutMe": {
    "label": "Quem sou eu",
    "title": "Emanuel Missena (Emanuel Vini)",
    "subtitle": "Conheça minha trajetória, de onde venho e o que me motiva a construir engenharia de software real.",
    "p1": "Oi — sou Emanuel Missena, nascido em Santos, SP. A família veio lá da Itália, o sobrenome ficou. Na internet e nos repos, a maioria me conhece como Emanuel Vini ou @emanuelVINI01, que é o codinome que usei desde que comecei. Comecei a mexer com servidor aos 10 anos, sem manual, só errando e refazendo.",
    "p2": "Vim do suporte técnico de servidor de Minecraft, passei por automação de Discord, plugins em Java, e fui empurrando o nível até chegar onde estou: sistemas transacionais, APIs REST e IA aplicada. Não me formei nisso — fui atrás. E essa diferença aparece no código.",
    "roleTag": "Engenheiro Full-Stack · 16 anos",
    "buildingSince": "construindo desde 2020 · Santos, BR"
  },
  "skills": {
    "label": "Habilidades",
    "title": "Minha Stack e Ferramentas",
    "subtitle": "O que realmente uso — sem enrolação."
  },
  "common": {
    "online": "Online",
    "available": "Disponível para projetos sob demanda",
    "availableCorporate": "Disponível para projetos remotos e produtos sob demanda.",
    "viewAll": "Ver todos",
    "viewProjects": "Ver projetos",
    "publicGithub": "GitHub Público",
    "searchPlaceholder": "Buscar por nome, stack, categoria...",
    "projectsFound": "projetos encontrados",
    "projectFound": "projeto encontrado",
    "for": "para",
    "noProjectsFound": "Nenhum projeto encontrado",
    "adjustSearch": "Ajuste o termo de busca ou selecione outra categoria.",
    "viewProject": "Ver projeto",
    "techStack": "Tecnologias",
    "close": "Fechar",
    "liveProject": "Abrir app",
    "repository": "Repositório",
    "allRightsReserved": "Todos os direitos reservados.",
    "navigation": "Navegação",
    "contact": "Contato",
    "verifyOnGithub": "Verificar no GitHub"
  },
  "nav": {
    "home": "Início",
    "story": "História",
    "services": "Serviços",
    "projects": "Projetos",
    "stack": "Stack"
  },
  "hero": {
    "title": "Desenvolvimento full-stack, de APIs e dados a interfaces e ferramentas.",
    "subtitle": "Sou Emanuel Missena, também conhecido como Emanuel Vini. Construo aplicações web com TypeScript, Next.js e PostgreSQL, ferramentas com IA e experimentos de sistemas em Rust. Minha trajetória começou com plugins Java e automação de servidores. Explore os projetos para conhecer o código, as decisões e o escopo de cada aplicação.",
    "statsLabel1": "PROJETOS NO CATÁLOGO",
    "statsDetail1": "Aplicações, experimentos e legado",
    "statsLabel2": "PRIMEIRO PROOF PÚBLICO",
    "statsDetail2": "Plugins Java criados no GitHub em junho/2021",
    "statsLabel3": "FOCO ATUAL",
    "statsDetail3": "Next.js, Prisma, IA aplicada e sistemas transacionais",
    "stackLabel": "Stack operacional",
    "stack1": "Next.js App Router, React, Tailwind CSS e Framer Motion",
    "stack2": "Fastify, Prisma, PostgreSQL, Zod e Playwright",
    "stack3": "Java, Kotlin, Discord bots, APIs e automação de infraestrutura",
    "commandTitle": "portfolio://quality-scan",
    "commandSubtitle": "comandos reais, sinais auditáveis e UX em movimento",
    "commandStatus": "portfolio pronto para avaliação",
    "contactMe": "Copiar e-mail",
    "copyEmailShort": "Copiar",
    "emailCopied": "E-mail copiado",
    "emailLabel": "Contato direto"
  },
  "story": {
    "label": "História técnica",
    "title": "Começou como curiosidade. Virou operação. Hoje virou produto.",
    "subtitle": "A narrativa abaixo foi escrita para ser lida como uma investigação: cada capítulo mostra uma pressão real, a decisão técnica tomada e o rastro público que ajuda a auditar a trajetória.",
    "narrativeLabel": "A abertura",
    "narrativeTitle": "Eu não entrei na tecnologia por tutorial bonito. Entrei porque algo quebrava e alguém precisava resolver.",
    "narrative": [
      "Em 2020, o isolamento virou laboratório. Eu comecei com Java, Minecraft, arquivos .jar, plugin.yml e stack traces que não explicavam nada com carinho. A única saída era ler, testar, quebrar e compilar de novo.",
      "O começo não foi limpo. Tinha código acoplado, nome ruim, gambiarra para entender API e muita tentativa que falhava no console. Mas cada erro obrigava uma investigação: fórum antigo, wiki incompleta, documentação oficial, issue esquecida e conversa técnica em idioma que eu ainda estava aprendendo.",
      "Depois o código saiu do hobby e entrou em operação. Servidor dedicado, VM, painel, cliente, pagamento, ticket, rota, uptime. Quando existe cliente esperando, arquitetura deixa de ser palavra bonita e vira sobrevivência.",
      "Essa fase me treinou a fazer uma coisa que separa desenvolvedor mediano de desenvolvedor forte: olhar para um sistema quebrado sem travar, reduzir o problema, testar hipótese e transformar bagunça em arquitetura.",
      "Hoje eu uso IA, vibecoding e agentes como aceleradores. Mas a base que decide o que faz sentido veio de outro lugar: console, Linux, API, banco, rede e responsabilidade sobre sistemas que não podiam simplesmente cair."
    ],
    "principles": [
      {
        "kicker": "Raiz",
        "title": "A curva começou no erro",
        "text": "A base veio de documentação, fóruns, wikis, erro de compilação e leitura de código existente. O código inicial não era perfeito; refatorar o que eu mesmo quebrava foi o que criou critério técnico."
      },
      {
        "kicker": "Infra",
        "title": "Operação muda o nível",
        "text": "Servidores, máquinas virtuais, painéis, rotas, limites de recurso e uptime moldaram uma visão prática de sistema em produção."
      },
      {
        "kicker": "Negócio",
        "title": "Pagamento não perdoa bug",
        "text": "Webhooks, gateway de pagamento e idempotência ensinaram cedo que backend bom protege dinheiro, estado e confiança."
      },
      {
        "kicker": "Agora",
        "title": "IA entra como escala",
        "text": "Vibecoding e multi-agentes entram como ferramentas de escala, não como substituto para arquitetura, debugging e decisão técnica."
      }
    ],
    "commandCenter": {
      "label": "Capítulo 03",
      "eyebrow": "ChatOps antes de eu conhecer esse nome",
      "title": "O centro de comando que levou meio terabyte de RAM para dentro do Discord.",
      "lead": "Entre os 11 e 13 anos, a infraestrutura deixou de ser brincadeira: dois dedicados bare-metal da OVHCloud, 256GB de RAM em cada máquina e clientes abrindo tickets quando qualquer pico de CPU parecia o fim do mundo. O gargalo deixou de ser hardware. Virou tempo.",
      "sceneTitle": "A cena que resume tudo",
      "scene": "Um cliente abria ticket de madrugada cobrando SLA. Do outro lado, um garoto de 12 anos pegava o celular, rodava um comando privado no Discord, consultava o node, reiniciava a VM ou matava um processo travado, respondia como suporte profissional e ia para a escola.",
      "stats": [
        {
          "value": "512GB",
          "label": "RAM orquestrada",
          "text": "Dois servidores OVHCloud de 256GB descritos na operação."
        },
        {
          "value": "24/7",
          "label": "pressão real",
          "text": "Tickets, manutenção, quedas, rotas e suporte enquanto a rotina escolar continuava."
        },
        {
          "value": "API",
          "label": "não era só chat",
          "text": "Bots atuavam como interface operacional para painéis, instâncias e clientes."
        }
      ],
      "flow": [
        "Ticket chega no Discord",
        "Bot cruza cliente, fatura e instância",
        "Comando chama API ou rotina Linux",
        "Node responde, VM estabiliza, cliente recebe status"
      ],
      "terminal": [
        "$ /node ovh-01 diagnose vm cliente-42",
        "cpu: spike detected | route: degraded | invoice: ok",
        "$ /vm cliente-42 restart --graceful",
        "status: recovered | ticket: closed with incident note"
      ],
      "powers": [
        {
          "title": "APIs como painel invisível",
          "text": "O bot consumia rotas REST do Virtualizor e do Pterodactyl com token, transformando chat em cockpit de infraestrutura."
        },
        {
          "title": "Terminal dentro do fluxo",
          "text": "Restart de VM, diagnóstico e processos travados saíam do SSH manual e viravam comandos restritos no Discord."
        },
        {
          "title": "Alertas para crise",
          "text": "Warnings globais avisavam clientes sobre manutenção, instabilidade de rota, variação de uptime e incidentes em nodes."
        },
        {
          "title": "Financeiro conectado",
          "text": "Faturas vencidas geravam alerta e podiam cortar recursos da instância quando o limite operacional era ultrapassado."
        }
      ],
      "proofKicker": "Prova pública",
      "proofTitle": "Rastro público conectado a esse capítulo",
      "proofNote": "A operação OVH/Virtualizor/Pterodactyl é relato operacional. O rastro público auditável está nos bots e integrações Discord/Minecraft publicados no GitHub, e na VM em Rust que dá sequência a essa mesma obsessão por bare metal.",
      "proofLinks": [
        {
          "name": "zDiscordCore",
          "meta": "Java, criado em 30/04/2022",
          "href": "https://github.com/emanuelVINI01/zDiscordCore"
        },
        {
          "name": "ComuniMineBot",
          "meta": "TypeScript, publicado em 16/08/2023",
          "href": "https://github.com/emanuelVINI01/ComuniMineBot"
        },
        {
          "name": "RyzenShopBot",
          "meta": "TypeScript, publicado em 16/08/2023",
          "href": "https://github.com/emanuelVINI01/RyzenShopBot"
        },
        {
          "name": "MinecraftFeastBot",
          "meta": "JavaScript, publicado em 16/08/2023",
          "href": "https://github.com/emanuelVINI01/MinecraftFeastBot"
        },
        {
          "name": "my-vm",
          "meta": "Rust, VM com hardware simulado — evolução do interesse por sistemas",
          "href": "https://github.com/emanuelVINI01/my-vm"
        }
      ],
      "closer": "Empresas grandes chamam isso de ChatOps: Slack ou Teams conectado à nuvem para operar infraestrutura com velocidade. Eu construí a minha versão com Discord, TypeScript, APIs e servidores reais porque precisava ganhar tempo, reduzir suporte manual e manter cliente online."
    },
    "timelineLabel": "Linha do tempo",
    "timelineTitle": "Uma evolução com datas auditáveis.",
    "timelineSubtitle": "Os marcos públicos abaixo foram cruzados com o GitHub em 16 de maio de 2026. A parte operacional de infraestrutura vem da história pessoal; a camada de repositórios funciona como prova verificável.",
    "timeline": [
      {
        "period": "2020 / 10 anos",
        "title": "Java, Minecraft e autodidatismo",
        "text": "A pandemia virou laboratório. A entrada foi por Java puro, plugins de Minecraft, arquivos .jar, plugin.yml e leitura direta de stack traces, com inglês e russo usados como ferramentas para destravar documentação e fóruns.",
        "proof": "Base narrativa: a sequência pública posterior em Java mostra que essa origem virou código real.",
        "href": "https://github.com/emanuelVINI01?tab=repositories"
      },
      {
        "period": "2021 / 11 anos",
        "title": "Primeiros plugins Java públicos",
        "text": "Repositórios como zSilk2 e zManutencao aparecem no GitHub em 21 de junho de 2021, com foco em Bukkit/Spigot e customização de servidor.",
        "proof": "zManutencao: commit inicial público em 21/06/2021; zSilk2: repositório Java criado no mesmo dia.",
        "href": "https://github.com/emanuelVINI01/zManutencao"
      },
      {
        "period": "2022-2023 / 12-13 anos",
        "title": "Plugins, APIs e arquitetura para servidores",
        "text": "A fase JVM evoluiu para módulos de core, vinculação Minecraft/Discord, APIs multi-servidor e plugins com regras específicas para comunidades reais.",
        "proof": "zDiscordCore foi criado em 30/04/2022; MultiServer-API teve commits em 15/07/2023 e 19/08/2023.",
        "href": "https://github.com/emanuelVINI01/MultiServer-API"
      },
      {
        "period": "2023 / 13 anos",
        "title": "Kotlin, SQL e automação comercial",
        "text": "A stack expandiu para Kotlin, bancos relacionais e bots de Discord, conectando lógica de loja, comunidade e persistência de dados.",
        "proof": "AdvancedSQL, em Kotlin, teve commits públicos em 01/09/2023; ComuniMineBot foi publicado em 16/08/2023.",
        "href": "https://github.com/emanuelVINI01/AdvancedSQL"
      },
      {
        "period": "2026 / 16 anos",
        "title": "Produtos web full-stack",
        "text": "A base de backend passou para aplicações demonstráveis com Next.js, Prisma, PostgreSQL, autenticação, dashboards, upload, métricas e ferramentas para desenvolvedores.",
        "proof": "MTX-Upload, money-manager, TypeDash, SnippetVault e apiFlash foram criados em março de 2026.",
        "href": "https://github.com/emanuelVINI01/typedash"
      },
      {
        "period": "Presente",
        "title": "Sistemas transacionais e agentes de IA",
        "text": "O foco atual une engenharia de produto, consistência financeira, interfaces polidas e orquestração com IA para acelerar entrega sem abandonar fundamentos.",
        "proof": "Transactional Wallet Ledger foi criado em 07/05/2026; Tunelay aparece como o repositório mais recente em 15/05/2026.",
        "href": "https://github.com/emanuelVINI01/transactional-wallet-ledger"
      }
    ],
    "proofLabel": "Proof of Work",
    "proofTitle": "Os sinais públicos que sustentam a narrativa.",
    "proofSubtitle": "Snapshot histórico registrado em maio de 2026. Os números abaixo descrevem aquela consulta, não a quantidade atual de repositórios; a revisão atual usa o catálogo e o código local.",
    "evidence": [
      {
        "value": "37",
        "label": "repos autorais",
        "text": "Repositórios próprios públicos, separados dos forks, mostrando continuidade de 2021 a 2026."
      },
      {
        "value": "30",
        "label": "antes de 2024",
        "text": "Projetos autorais antigos, anteriores à fase atual de produtos web e ao hype recente de IA."
      },
      {
        "value": "18",
        "label": "JVM públicos",
        "text": "16 repositórios Java e 2 Kotlin autorais, cobrindo plugins, APIs, SQL e sistemas de servidor."
      },
      {
        "value": "11",
        "label": "TypeScript",
        "text": "Camada moderna com Next.js, dashboards, ferramentas para devs, métricas e sistemas transacionais."
      }
    ],
    "glossaryLabel": "O que isso significa",
    "glossaryTitle": "Os termos técnicos, traduzidos para impacto real.",
    "glossary": [
      {
        "term": ".jar, plugin.yml e stack trace",
        "text": "Não é só “plugin de Minecraft”: é empacotamento Java, ciclo de build, declaração de comandos/eventos e debugging por erro real em runtime."
      },
      {
        "term": "Bare metal, VM e zero overselling",
        "text": "É operar recurso físico com responsabilidade: CPU, memória, disco, IP e banda precisam bater com o que foi vendido ao cliente."
      },
      {
        "term": "Pterodactyl, Nodes e Eggs",
        "text": "É provisionar servidores de jogo com isolamento, templates de runtime, alocação de portas e rede, não apenas instalar um painel bonito."
      },
      {
        "term": "Webhooks e idempotência",
        "text": "É impedir que um pagamento duplicado gere crédito duplicado. Cada evento financeiro precisa ser processado uma única vez e com rastreabilidade."
      },
      {
        "term": "Multi-agentes e Vibecoding",
        "text": "É usar IA para acelerar análise, boilerplate, testes e iteração, mantendo a arquitetura e as decisões críticas sob controle humano."
      }
    ]
  },
  "services": {
    "label": "Serviços",
    "title": "Entrega full-stack com leitura clara para times técnicos.",
    "subtitle": "O portfólio organiza projetos reais por arquitetura, decisões de produto, stack e pontos avaliáveis: autenticação, modelagem, APIs, dashboards, validação, deploy e acabamento de interface.",
    "s1Title": "APIs e sistemas transacionais",
    "s1Text": "APIs com contratos tipados, validação de entrada, autenticação e persistência. Os cases mostram decisões de consistência e tratamento de erros.",
    "s2Title": "Dashboards e produtos web",
    "s2Text": "Interfaces responsivas para formulários, dashboards e ferramentas. Os projetos mostram navegação, estados de interação e apresentação dos dados.",
    "s3Title": "Arquitetura e qualidade",
    "s3Text": "Organização de código por responsabilidade, contratos tipados e verificações pertinentes ao projeto. Limitações e próximos passos ficam explícitos nos cases."
  },
  "journey": {
    "label": "Trajetória",
    "title": "Da base Java/Kotlin para produtos web completos.",
    "subtitle": "A evolução do portfolio mantém a origem técnica visível: a experiência com JVM formou a base para projetar sistemas, enquanto a stack atual amplia isso para interfaces, APIs e produtos demonstráveis publicamente.",
    "step1Label": "Base JVM",
    "step1Title": "Java e Kotlin",
    "step1Text": "Primeira fase focada em orientação a objetos, APIs internas, persistência, bibliotecas e organização de código em projetos com regras reais.",
    "step2Label": "Transição web",
    "step2Title": "TypeScript e produto",
    "step2Text": "A base de arquitetura foi levada para front e back web, com React, Next.js, Fastify, Prisma e bancos relacionais.",
    "step3Label": "Fase atual",
    "step3Title": "Produtos avaliáveis",
    "step3Text": "Hoje o foco está em dashboards, ferramentas para desenvolvedores e sistemas transacionais com escopo claro, domínio próprio e código público."
  },
  "stack": {
    "label": "Stack",
    "title": "Integração fluida entre interfaces, APIs e modelagem de dados.",
    "subtitle": "TypeScript, Next.js e PostgreSQL aparecem nas aplicações web. Java e Kotlin fazem parte da trajetória com plugins e automação. Rust sustenta o ecossistema CVM e os experimentos de computação. Cada case mostra as tecnologias usadas e o estágio da implementação.",
    "item1": "Frontend moderno e reativo empregando App Router, React, Tailwind CSS e Framer Motion.",
    "item2": "APIs, autenticação e persistência com TypeScript, Prisma e PostgreSQL nos projetos web.",
    "item3": "O estágio de cada projeto está indicado no catálogo."
  },
  "projects": {
    "label": "Projetos selecionados",
    "title": "Projetos fortes para avaliação técnica.",
    "subtitle": "Uma curadoria técnica dos repositórios mantidos sob emanuelVINI01, preservando a trajetória Java/Kotlin e priorizando os projetos atuais de sistemas, aplicações baseadas em dados e infraestrutura para desenvolvedores.",
    "spotlightLabel": "Centro de avaliação",
    "spotlightTitle": "Três projetos em palco, com o sistema mais forte no centro.",
    "spotlightText": "Aplicações, ferramentas e experimentos selecionados para explorar o código e as decisões de implementação.",
    "allProjectsLabel": "Todos os projetos"
  },
  "footer": {
    "description": "Desenvolvedor full-stack com projetos em aplicações web, APIs, ferramentas IA e sistemas experimentais em Rust.",
    "availableText": "Aberto a oportunidades remotas, desafios técnicos e construção de produtos com TypeScript, Next.js, Fastify e Prisma."
  }
};

export const en: Dictionary = {
  "projectDetail": {
    "back": "Back to projects",
    "highlights": "Technical highlights",
    "repository": "Open repository",
    "live": "Open demo",
    "stack": "Technologies"
  },
  "projectStage": {
    "application": "Application",
    "experiment": "Experiment",
    "legacy": "Legacy",
    "scaffold": "Scaffold"
  },
  "gallery": {
    "title": "Project screens",
    "expand": "Expand image",
    "close": "Close image",
    "previous": "Previous image",
    "next": "Next image",
    "select": "Select image",
    "existing": "Earlier capture"
  },
  "aboutMe": {
    "label": "About Me",
    "title": "Emanuel Missena (Emanuel Vini)",
    "subtitle": "Learn about my origins, my background, and what drives me to build real software engineering.",
    "p1": "Hey — I'm Emanuel Missena, from Santos, SP, Brazil. Italian roots, Santos upbringing. Online I go by Emanuel Vini or @emanuelVINI01, the alias I've used since I started coding. I was running servers at 10, no courses, just trial and error and a lot of broken configs.",
    "p2": "Started doing Minecraft server support, moved to Discord bots and Java plugins, then pushed further into REST APIs, transactional systems and applied AI. No degree — just built things until they worked, then built harder things. That gap shows up in the code.",
    "roleTag": "Full-Stack Engineer · Age 16",
    "buildingSince": "building since 2020 · Santos, BR"
  },
  "skills": {
    "label": "Skills",
    "title": "My Stack and Tools",
    "subtitle": "What I actually use — no filler."
  },
  "common": {
    "online": "Online",
    "available": "Available for on-demand projects",
    "availableCorporate": "Available for remote projects and on-demand products.",
    "viewAll": "View all",
    "viewProjects": "View projects",
    "publicGithub": "Public GitHub",
    "searchPlaceholder": "Search by name, stack, category...",
    "projectsFound": "projects found",
    "projectFound": "project found",
    "for": "for",
    "noProjectsFound": "No projects found",
    "adjustSearch": "Adjust your search term or select another category.",
    "viewProject": "View project",
    "techStack": "Technologies",
    "close": "Close",
    "liveProject": "Open app",
    "repository": "Repository",
    "allRightsReserved": "All rights reserved.",
    "navigation": "Navigation",
    "contact": "Contact",
    "verifyOnGithub": "Verify on GitHub"
  },
  "nav": {
    "home": "Home",
    "story": "Story",
    "services": "Services",
    "projects": "Projects",
    "stack": "Stack"
  },
  "hero": {
    "title": "Full-stack development, from APIs and data to interfaces and tools.",
    "subtitle": "I am Emanuel Missena, also known as Emanuel Vini. I build web applications with TypeScript, Next.js and PostgreSQL, AI tools and systems experiments in Rust. I started with Java plugins and server automation. Explore the projects to inspect the code, decisions and scope of each application.",
    "statsLabel1": "PROJECTS IN THE CATALOG",
    "statsDetail1": "Applications, experiments and legacy projects",
    "statsLabel2": "First public proof",
    "statsDetail2": "Java plugins created on GitHub in June 2021",
    "statsLabel3": "Current focus",
    "statsDetail3": "Next.js, Prisma, applied AI, and transactional systems",
    "stackLabel": "Operational Stack",
    "stack1": "Next.js App Router, React, Tailwind CSS, and Framer Motion",
    "stack2": "Fastify, Prisma, PostgreSQL, Zod, and Playwright",
    "stack3": "Java, Kotlin, Discord bots, APIs, and infrastructure automation",
    "commandTitle": "portfolio://quality-scan",
    "commandSubtitle": "real commands, auditable signals, and motion-first UX",
    "commandStatus": "portfolio ready for review",
    "contactMe": "Copy email",
    "copyEmailShort": "Copy",
    "emailCopied": "Email copied",
    "emailLabel": "Direct contact"
  },
  "story": {
    "label": "Technical Story",
    "title": "It started as curiosity. It became operations. Today it became product.",
    "subtitle": "The story below is designed to read like an investigation: every chapter shows real pressure, the technical decision behind it, and the public trail that helps audit the journey.",
    "narrativeLabel": "The opening",
    "narrativeTitle": "I did not enter tech through polished tutorials. I entered because something broke and someone had to fix it.",
    "narrative": [
      "In 2020, isolation became a lab. I started with Java, Minecraft, .jar files, plugin.yml, and stack traces that did not explain anything gently. The only path was to read, test, break things, and compile again.",
      "The beginning was not clean. There was coupled code, bad naming, API guesswork, and many attempts that failed in the console. But every error forced an investigation: old forums, incomplete wikis, official documentation, forgotten issues, and technical conversations in languages I was still learning.",
      "Then the code left the hobby phase and entered operations. Dedicated server, VM, panel, customer, payment, ticket, route, uptime. When customers are waiting, architecture stops being a nice word and becomes survival.",
      "That phase trained the skill that separates average developers from strong ones: looking at a broken system without freezing, reducing the problem, testing hypotheses, and turning mess into architecture.",
      "Today I use AI, vibecoding, and agents as accelerators. But the foundation behind the decisions came from somewhere else: console output, Linux, APIs, databases, networks, and responsibility for systems that could not simply go down."
    ],
    "principles": [
      {
        "kicker": "Roots",
        "title": "The curve started with errors",
        "text": "The foundation came from documentation, forums, wikis, compilation errors, and reading existing code. The early code was not perfect; refactoring what I broke myself built technical judgment."
      },
      {
        "kicker": "Infra",
        "title": "Operations raised the stakes",
        "text": "Servers, virtual machines, panels, routes, resource limits, and uptime shaped a practical view of production systems."
      },
      {
        "kicker": "Business",
        "title": "Payments punish bugs",
        "text": "Webhooks, payment gateways, and idempotency taught early that good backend work protects money, state, and trust."
      },
      {
        "kicker": "Now",
        "title": "AI enters as scale",
        "text": "Vibecoding and multi-agent workflows act as scaling tools, not replacements for architecture, debugging, and technical judgment."
      }
    ],
    "commandCenter": {
      "label": "Chapter 03",
      "eyebrow": "ChatOps before I knew the name",
      "title": "The command center that moved half a terabyte of RAM into Discord.",
      "lead": "Between ages 11 and 13, infrastructure stopped being a side project: two OVHCloud bare-metal dedicated servers, 256GB of RAM each, and customers opening tickets whenever a CPU spike looked like the end of the world. The bottleneck was no longer hardware. It was time.",
      "sceneTitle": "The scene that explains everything",
      "scene": "A customer opened a late-night ticket demanding SLA. On the other side, a 12-year-old picked up his phone, ran a private Discord command, checked the node, restarted a VM or killed a stuck process, answered like professional support, and went to school.",
      "stats": [
        {
          "value": "512GB",
          "label": "RAM orchestrated",
          "text": "Two 256GB OVHCloud servers described in the operation."
        },
        {
          "value": "24/7",
          "label": "real pressure",
          "text": "Tickets, maintenance, outages, routes, and support while school life continued."
        },
        {
          "value": "API",
          "label": "not just chat",
          "text": "Bots acted as an operational interface for panels, instances, and customers."
        }
      ],
      "flow": [
        "Ticket lands in Discord",
        "Bot connects customer, invoice, and instance",
        "Command calls API or Linux routine",
        "Node responds, VM stabilizes, customer gets status"
      ],
      "terminal": [
        "$ /node ovh-01 diagnose vm client-42",
        "cpu: spike detected | route: degraded | invoice: ok",
        "$ /vm client-42 restart --graceful",
        "status: recovered | ticket: closed with incident note"
      ],
      "powers": [
        {
          "title": "APIs as an invisible panel",
          "text": "The bot consumed Virtualizor and Pterodactyl REST routes with tokens, turning chat into an infrastructure cockpit."
        },
        {
          "title": "Terminal inside the workflow",
          "text": "VM restarts, diagnostics, and stuck processes moved from manual SSH into restricted Discord commands."
        },
        {
          "title": "Crisis alerts",
          "text": "Global warnings informed customers about maintenance, routing instability, uptime changes, and node incidents."
        },
        {
          "title": "Finance connected to ops",
          "text": "Overdue invoices triggered alerts and could cut instance resources when the operational limit was crossed."
        }
      ],
      "proofKicker": "Public proof",
      "proofTitle": "Public trail connected to this chapter",
      "proofNote": "The OVH/Virtualizor/Pterodactyl operation is an operational account. The project catalog preserves the Discord/Minecraft work and the experimental Rust VM with simulated hardware.",
      "proofLinks": [
        {
          "name": "zDiscordCore",
          "meta": "Java, created on Apr 30, 2022",
          "href": "https://github.com/emanuelVINI01/zDiscordCore"
        },
        {
          "name": "ComuniMineBot",
          "meta": "TypeScript, published on Aug 16, 2023",
          "href": "https://github.com/emanuelVINI01/ComuniMineBot"
        },
        {
          "name": "RyzenShopBot",
          "meta": "TypeScript, published on Aug 16, 2023",
          "href": "https://github.com/emanuelVINI01/RyzenShopBot"
        },
        {
          "name": "MinecraftFeastBot",
          "meta": "JavaScript, published on Aug 16, 2023",
          "href": "https://github.com/emanuelVINI01/MinecraftFeastBot"
        },
        {
          "name": "my-vm",
          "meta": "Rust, VM with simulated hardware — a continuation of the interest in systems",
          "href": "https://github.com/emanuelVINI01/my-vm"
        }
      ],
      "closer": "Large companies call this ChatOps: Slack or Teams connected to cloud operations for faster response. I built my version with Discord, TypeScript, APIs, and real servers because I needed to save time, reduce manual support, and keep customers online."
    },
    "timelineLabel": "Timeline",
    "timelineTitle": "An evolution with auditable dates.",
    "timelineSubtitle": "The public milestones below were checked against GitHub on May 16, 2026. The infrastructure layer comes from the personal story; the repository layer is the verifiable proof.",
    "timeline": [
      {
        "period": "2020 / Age 10",
        "title": "Java, Minecraft, and self-directed learning",
        "text": "The pandemic became a lab. The entry point was pure Java, Minecraft plugins, .jar files, plugin.yml, and reading stack traces directly, with English and Russian used as tools to unlock documentation and forums.",
        "proof": "Narrative foundation: the later public Java sequence shows that this origin became real code.",
        "href": "https://github.com/emanuelVINI01?tab=repositories"
      },
      {
        "period": "2021 / Age 11",
        "title": "First public Java plugins",
        "text": "Repositories such as zSilk2 and zManutencao appear on GitHub on June 21, 2021, focused on Bukkit/Spigot and server customization.",
        "proof": "zManutencao: public initial commit on June 21, 2021; zSilk2: Java repository created the same day.",
        "href": "https://github.com/emanuelVINI01/zManutencao"
      },
      {
        "period": "2022-2023 / Ages 12-13",
        "title": "Plugins, APIs, and server architecture",
        "text": "The JVM phase evolved into core modules, Minecraft/Discord linking, multi-server APIs, and plugins with specific rules for real communities.",
        "proof": "zDiscordCore was created on April 30, 2022; MultiServer-API had commits on July 15, 2023 and August 19, 2023.",
        "href": "https://github.com/emanuelVINI01/MultiServer-API"
      },
      {
        "period": "2023 / Age 13",
        "title": "Kotlin, SQL, and commercial automation",
        "text": "The stack expanded into Kotlin, relational databases, and Discord bots, connecting shop logic, communities, and data persistence.",
        "proof": "AdvancedSQL, written in Kotlin, had public commits on September 1, 2023; ComuniMineBot was published on August 16, 2023.",
        "href": "https://github.com/emanuelVINI01/AdvancedSQL"
      },
      {
        "period": "2026 / Age 16",
        "title": "Full-stack web products",
        "text": "The backend foundation moved into demonstrable applications with Next.js, Prisma, PostgreSQL, authentication, dashboards, uploads, metrics, and developer tools.",
        "proof": "MTX-Upload, money-manager, TypeDash, SnippetVault, and apiFlash were created in March 2026.",
        "href": "https://github.com/emanuelVINI01/typedash"
      },
      {
        "period": "Present",
        "title": "Transactional systems and AI agents",
        "text": "The current focus combines product engineering, financial consistency, polished interfaces, and AI orchestration to accelerate delivery without abandoning fundamentals.",
        "proof": "Transactional Wallet Ledger was created on May 7, 2026; Tunelay appears as the newest repository on May 15, 2026.",
        "href": "https://github.com/emanuelVINI01/transactional-wallet-ledger"
      }
    ],
    "proofLabel": "Proof of Work",
    "proofTitle": "The public signals behind the narrative.",
    "proofSubtitle": "Historical snapshot recorded in May 2026. The figures below describe that query rather than the current repository count; the present review uses the catalog and local code.",
    "evidence": [
      {
        "value": "37",
        "label": "original repos",
        "text": "Original public repositories, separated from forks, showing continuity from 2021 to 2026."
      },
      {
        "value": "30",
        "label": "before 2024",
        "text": "Older original projects predating the current web product phase and the recent AI hype cycle."
      },
      {
        "value": "18",
        "label": "public JVM repos",
        "text": "16 original Java repositories and 2 Kotlin repositories covering plugins, APIs, SQL, and server systems."
      },
      {
        "value": "11",
        "label": "TypeScript repos",
        "text": "Modern layer with Next.js, dashboards, developer tools, metrics, and transactional systems."
      }
    ],
    "glossaryLabel": "What it means",
    "glossaryTitle": "The technical terms translated into real impact.",
    "glossary": [
      {
        "term": ".jar, plugin.yml, and stack traces",
        "text": "This is not just “a Minecraft plugin”: it is Java packaging, build cycles, command/event declaration, and debugging real runtime errors."
      },
      {
        "term": "Bare metal, VM, and zero overselling",
        "text": "This means operating physical resources responsibly: CPU, memory, disk, IPs, and bandwidth must match what was sold to the customer."
      },
      {
        "term": "Pterodactyl, Nodes, and Eggs",
        "text": "This means provisioning game servers with isolation, runtime templates, port allocation, and networking, not merely installing a panel."
      },
      {
        "term": "Webhooks and idempotency",
        "text": "This prevents a duplicated payment event from creating duplicated credit. Every financial event must be processed once and remain traceable."
      },
      {
        "term": "Multi-agents and Vibecoding",
        "text": "This means using AI to accelerate analysis, boilerplate, tests, and iteration while keeping architecture and critical decisions under human control."
      }
    ]
  },
  "services": {
    "label": "Services",
    "title": "Full-stack delivery with clear signals for technical teams.",
    "subtitle": "The portfolio organizes real projects by architecture, product decisions, stack, and evaluation points: authentication, data modeling, APIs, dashboards, validation, deployment, and interface polish.",
    "s1Title": "APIs and transactional systems",
    "s1Text": "APIs with typed contracts, input validation, authentication and persistence. The cases show consistency decisions and error handling.",
    "s2Title": "Dashboards and web products",
    "s2Text": "Responsive interfaces for forms, dashboards and tools. Projects show navigation, interaction states and data presentation.",
    "s3Title": "Architecture and quality",
    "s3Text": "Code organized by responsibility, typed contracts and project-specific checks. Cases make limitations and next steps explicit."
  },
  "journey": {
    "label": "Journey",
    "title": "From Java/Kotlin foundations to complete web products.",
    "subtitle": "The portfolio evolution keeps the technical origin visible: JVM experience shaped the foundation for system design, while the current stack expands that base into public-facing interfaces, APIs, and products.",
    "step1Label": "JVM foundation",
    "step1Title": "Java and Kotlin",
    "step1Text": "First phase focused on object-oriented design, internal APIs, persistence, libraries, and code organization in projects with real rules.",
    "step2Label": "Web transition",
    "step2Title": "TypeScript and product",
    "step2Text": "That architecture foundation moved into frontend and backend web work with React, Next.js, Fastify, Prisma, and relational databases.",
    "step3Label": "Current phase",
    "step3Title": "Evaluable products",
    "step3Text": "The current focus is dashboards, developer tools, and transactional systems with clear scope, custom domains, and public code."
  },
  "stack": {
    "label": "Stack",
    "title": "Seamless integration between interfaces, APIs, and data modeling.",
    "subtitle": "TypeScript, Next.js and PostgreSQL support the web applications. Java and Kotlin are part of the plugin and automation history. Rust supports the CVM ecosystem and computing experiments. Each case shows its technologies and implementation stage.",
    "item1": "Modern and reactive frontend employing App Router, React, Tailwind CSS, and Framer Motion.",
    "item2": "APIs, authentication and persistence with TypeScript, Prisma and PostgreSQL in the web projects.",
    "item3": "Each project’s stage is shown in the catalog."
  },
  "projects": {
    "label": "Selected projects",
    "title": "Strong projects for technical evaluation.",
    "subtitle": "A technical curation of repositories maintained under emanuelVINI01, preserving the Java/Kotlin journey while prioritizing current systems, data-driven applications, and developer infrastructure.",
    "spotlightLabel": "Evaluation center",
    "spotlightTitle": "Three projects on stage, with the strongest system elevated in the center.",
    "spotlightText": "Selected applications, tools and experiments for exploring code and implementation decisions.",
    "allProjectsLabel": "All projects"
  },
  "footer": {
    "description": "Full-stack developer with projects in web applications, APIs, AI tools and experimental Rust systems.",
    "availableText": "Open to remote opportunities, technical challenges, and product work with TypeScript, Next.js, Fastify, and Prisma."
  }
};

export const de: Dictionary = {
  "projectDetail": {
    "back": "Zurück zu Projekten",
    "highlights": "Technische Merkmale",
    "repository": "Repository öffnen",
    "live": "Demo öffnen",
    "stack": "Technologien"
  },
  "projectStage": {
    "application": "Anwendung",
    "experiment": "Experiment",
    "legacy": "Historisch",
    "scaffold": "Grundgerüst"
  },
  "gallery": {
    "title": "Projektansichten",
    "expand": "Bild vergrößern",
    "close": "Bild schließen",
    "previous": "Vorheriges Bild",
    "next": "Nächstes Bild",
    "select": "Bild auswählen",
    "existing": "Frühere Aufnahme"
  },
  "aboutMe": {
    "label": "Über mich",
    "title": "Emanuel Missena (Emanuel Vini)",
    "subtitle": "Lernen Sie meinen Werdegang kennen, meine Herkunft und was mich antreibt, echtes Software-Engineering zu betreiben.",
    "p1": "Hallo — ich bin Emanuel Missena, geboren in Santos, SP, Brasilien. Italienische Wurzeln, aufgewachsen in Santos. Online bin ich als Emanuel Vini bzw. @emanuelVINI01 bekannt, das Pseudonym, das ich seit meinen ersten Zeilen Code verwende. Mit 10 Jahren habe ich schon Server administriert, ganz ohne Kurse, nur durch Ausprobieren und viele kaputte Konfigurationen.",
    "p2": "Angefangen habe ich im technischen Support für Minecraft-Server, dann Discord-Bots und Java-Plugins, später ging es weiter zu REST-APIs, transaktionalen Systemen und angewandter KI. Kein Abschluss — nur so lange gebaut, bis es funktionierte, und dann Schwierigeres gebaut. Dieser Unterschied zeigt sich im Code.",
    "roleTag": "Full-Stack-Entwickler · 16 Jahre",
    "buildingSince": "seit 2020 im Aufbau · Santos, BR"
  },
  "skills": {
    "label": "Fähigkeiten",
    "title": "Mein Stack und meine Werkzeuge",
    "subtitle": "Was ich wirklich einsetze — ohne Umschweife."
  },
  "common": {
    "online": "Online",
    "available": "Verfügbar für Projekte auf Anfrage",
    "availableCorporate": "Verfügbar für Remote-Projekte und Produkte auf Anfrage.",
    "viewAll": "Alle ansehen",
    "viewProjects": "Projekte ansehen",
    "publicGithub": "Öffentliches GitHub",
    "searchPlaceholder": "Suche nach Name, Stack, Kategorie...",
    "projectsFound": "Projekte gefunden",
    "projectFound": "Projekt gefunden",
    "for": "für",
    "noProjectsFound": "Keine Projekte gefunden",
    "adjustSearch": "Passen Sie den Suchbegriff an oder wählen Sie eine andere Kategorie.",
    "viewProject": "Projekt ansehen",
    "techStack": "Technologien",
    "close": "Schließen",
    "liveProject": "App öffnen",
    "repository": "Repository",
    "allRightsReserved": "Alle Rechte vorbehalten.",
    "navigation": "Navigation",
    "contact": "Kontakt",
    "verifyOnGithub": "Auf GitHub prüfen"
  },
  "nav": {
    "home": "Start",
    "story": "Geschichte",
    "services": "Leistungen",
    "projects": "Projekte",
    "stack": "Stack"
  },
  "hero": {
    "title": "Full-Stack-Entwicklung: APIs, Daten, Oberflächen und Werkzeuge.",
    "subtitle": "Ich bin Emanuel Missena, auch bekannt als Emanuel Vini. Ich entwickle Webanwendungen mit TypeScript, Next.js und PostgreSQL, KI-Werkzeuge und Systemexperimente in Rust. Mein Einstieg waren Java-Plugins und Serverautomatisierung. Die Projekte zeigen Code, Entscheidungen und den Umfang der jeweiligen Anwendung.",
    "statsLabel1": "PROJEKTE IM KATALOG",
    "statsDetail1": "Anwendungen, Experimente und historische Projekte",
    "statsLabel2": "Erster öffentlicher Beleg",
    "statsDetail2": "Java-Plugins, auf GitHub erstellt im Juni 2021",
    "statsLabel3": "Aktueller Fokus",
    "statsDetail3": "Next.js, Prisma, angewandte KI und transaktionale Systeme",
    "stackLabel": "Operativer Stack",
    "stack1": "Next.js App Router, React, Tailwind CSS und Framer Motion",
    "stack2": "Fastify, Prisma, PostgreSQL, Zod und Playwright",
    "stack3": "Java, Kotlin, Discord-Bots, APIs und Infrastruktur-Automatisierung",
    "commandTitle": "portfolio://quality-scan",
    "commandSubtitle": "echte Befehle, auditierbare Signale und Motion-first UX",
    "commandStatus": "Portfolio bereit zur Bewertung",
    "contactMe": "E-Mail kopieren",
    "copyEmailShort": "Kopieren",
    "emailCopied": "E-Mail kopiert",
    "emailLabel": "Direktkontakt"
  },
  "story": {
    "label": "Technische Geschichte",
    "title": "Es begann als Neugier. Es wurde zum Betrieb. Heute ist es ein Produkt.",
    "subtitle": "Die folgende Geschichte liest sich wie eine Ermittlung: Jedes Kapitel zeigt echten Druck, die dahinterstehende technische Entscheidung und die öffentliche Spur, die hilft, den Werdegang zu überprüfen.",
    "narrativeLabel": "Der Anfang",
    "narrativeTitle": "Ich kam nicht über polierte Tutorials zur Technik. Ich kam, weil etwas kaputt war und jemand es reparieren musste.",
    "narrative": [
      "2020 wurde die Isolation zum Labor. Ich begann mit Java, Minecraft, .jar-Dateien, plugin.yml und Stack-Traces, die nichts freundlich erklärten. Der einzige Weg war: lesen, testen, kaputt machen und neu kompilieren.",
      "Der Anfang war nicht sauber. Es gab gekoppelten Code, schlechte Benennungen, API-Rätselraten und viele fehlgeschlagene Versuche in der Konsole. Aber jeder Fehler erzwang eine Recherche: alte Foren, unvollständige Wikis, offizielle Dokumentation, vergessene Issues und technische Gespräche in Sprachen, die ich noch lernte.",
      "Dann verließ der Code die Hobby-Phase und ging in den Betrieb über. Dedizierter Server, VM, Panel, Kunde, Zahlung, Ticket, Route, Uptime. Wenn Kunden warten, hört Architektur auf, ein schönes Wort zu sein, und wird zum Überleben.",
      "Diese Phase trainierte die Fähigkeit, die durchschnittliche von starken Entwicklern unterscheidet: ein kaputtes System betrachten, ohne zu erstarren, das Problem reduzieren, Hypothesen testen und Chaos in Architektur verwandeln.",
      "Heute nutze ich KI, Vibecoding und Agenten als Beschleuniger. Aber die Grundlage hinter den Entscheidungen kam von woanders: Konsolenausgaben, Linux, APIs, Datenbanken, Netzwerke und Verantwortung für Systeme, die einfach nicht ausfallen durften."
    ],
    "principles": [
      {
        "kicker": "Wurzeln",
        "title": "Die Lernkurve begann mit Fehlern",
        "text": "Die Grundlage kam aus Dokumentation, Foren, Wikis, Kompilierfehlern und dem Lesen fremden Codes. Der frühe Code war nicht perfekt; das Refactoring dessen, was ich selbst kaputt gemacht hatte, formte technisches Urteilsvermögen."
      },
      {
        "kicker": "Infra",
        "title": "Betrieb hob den Einsatz",
        "text": "Server, virtuelle Maschinen, Panels, Routen, Ressourcengrenzen und Uptime formten einen praktischen Blick auf Produktionssysteme."
      },
      {
        "kicker": "Geschäft",
        "title": "Zahlungen verzeihen keine Bugs",
        "text": "Webhooks, Payment-Gateways und Idempotenz lehrten früh, dass gute Backend-Arbeit Geld, Zustand und Vertrauen schützt."
      },
      {
        "kicker": "Heute",
        "title": "KI kommt als Skalierung ins Spiel",
        "text": "Vibecoding und Multi-Agenten-Workflows wirken als Skalierungswerkzeuge, nicht als Ersatz für Architektur, Debugging und technisches Urteilsvermögen."
      }
    ],
    "commandCenter": {
      "label": "Kapitel 03",
      "eyebrow": "ChatOps, bevor ich den Namen kannte",
      "title": "Das Kommandozentrum, das ein halbes Terabyte RAM nach Discord brachte.",
      "lead": "Zwischen 11 und 13 Jahren hörte Infrastruktur auf, ein Nebenprojekt zu sein: zwei OVHCloud-Bare-Metal-Server, je 256GB RAM, und Kunden, die Tickets öffneten, sobald eine CPU-Spitze wie der Weltuntergang aussah. Der Engpass war nicht mehr Hardware. Er war Zeit.",
      "sceneTitle": "Die Szene, die alles erklärt",
      "scene": "Ein Kunde eröffnete mitten in der Nacht ein Ticket und forderte SLA. Auf der anderen Seite griff ein 12-Jähriger zum Handy, führte einen privaten Discord-Befehl aus, prüfte den Node, startete eine VM neu oder beendete einen hängenden Prozess, antwortete wie ein professioneller Support — und ging zur Schule.",
      "stats": [
        {
          "value": "512GB",
          "label": "RAM orchestriert",
          "text": "Zwei OVHCloud-Server mit je 256GB, beschrieben im Betrieb."
        },
        {
          "value": "24/7",
          "label": "echter Druck",
          "text": "Tickets, Wartung, Ausfälle, Routen und Support, während der Schulalltag weiterlief."
        },
        {
          "value": "API",
          "label": "nicht nur Chat",
          "text": "Bots fungierten als operative Schnittstelle für Panels, Instanzen und Kunden."
        }
      ],
      "flow": [
        "Ticket landet in Discord",
        "Bot verknüpft Kunde, Rechnung und Instanz",
        "Befehl ruft API oder Linux-Routine auf",
        "Node antwortet, VM stabilisiert sich, Kunde erhält Status"
      ],
      "terminal": [
        "$ /node ovh-01 diagnose vm client-42",
        "cpu: spike detected | route: degraded | invoice: ok",
        "$ /vm client-42 restart --graceful",
        "status: recovered | ticket: closed with incident note"
      ],
      "powers": [
        {
          "title": "APIs als unsichtbares Panel",
          "text": "Der Bot rief die REST-Routen von Virtualizor und Pterodactyl per Token auf und verwandelte Chat in ein Infrastruktur-Cockpit."
        },
        {
          "title": "Terminal im Workflow",
          "text": "VM-Neustarts, Diagnosen und hängende Prozesse wanderten von manuellem SSH zu eingeschränkten Discord-Befehlen."
        },
        {
          "title": "Warnungen bei Krisen",
          "text": "Globale Warnungen informierten Kunden über Wartung, Routing-Instabilität, Uptime-Änderungen und Node-Vorfälle."
        },
        {
          "title": "Finanzen mit dem Betrieb verbunden",
          "text": "Überfällige Rechnungen lösten Warnungen aus und konnten Instanz-Ressourcen kappen, sobald das Betriebslimit überschritten war."
        }
      ],
      "proofKicker": "Öffentlicher Beleg",
      "proofTitle": "Öffentliche Spur zu diesem Kapitel",
      "proofNote": "Der Betrieb von OVH/Virtualizor/Pterodactyl ist ein Erfahrungsbericht. Der Projektkatalog bewahrt die Discord-/Minecraft-Arbeit und die experimentelle Rust-VM mit simuliertem Hardwaremodell.",
      "proofLinks": [
        {
          "name": "zDiscordCore",
          "meta": "Java, erstellt am 30.04.2022",
          "href": "https://github.com/emanuelVINI01/zDiscordCore"
        },
        {
          "name": "ComuniMineBot",
          "meta": "TypeScript, veröffentlicht am 16.08.2023",
          "href": "https://github.com/emanuelVINI01/ComuniMineBot"
        },
        {
          "name": "RyzenShopBot",
          "meta": "TypeScript, veröffentlicht am 16.08.2023",
          "href": "https://github.com/emanuelVINI01/RyzenShopBot"
        },
        {
          "name": "MinecraftFeastBot",
          "meta": "JavaScript, veröffentlicht am 16.08.2023",
          "href": "https://github.com/emanuelVINI01/MinecraftFeastBot"
        },
        {
          "name": "my-vm",
          "meta": "Rust, VM mit simulierter Hardware — Fortführung des Interesses an Systemen",
          "href": "https://github.com/emanuelVINI01/my-vm"
        }
      ],
      "closer": "Große Unternehmen nennen das ChatOps: Slack oder Teams verbunden mit der Cloud für schnellere Reaktionen. Ich habe meine Version mit Discord, TypeScript, APIs und echten Servern gebaut, weil ich Zeit sparen, manuellen Support reduzieren und Kunden online halten musste."
    },
    "timelineLabel": "Zeitleiste",
    "timelineTitle": "Eine Entwicklung mit überprüfbaren Daten.",
    "timelineSubtitle": "Die folgenden öffentlichen Meilensteine wurden am 16. Mai 2026 mit GitHub abgeglichen. Die Infrastrukturebene stammt aus der persönlichen Geschichte; die Repository-Ebene ist der überprüfbare Beleg.",
    "timeline": [
      {
        "period": "2020 / 10 Jahre",
        "title": "Java, Minecraft und autodidaktisches Lernen",
        "text": "Die Pandemie wurde zum Labor. Der Einstieg erfolgte über reines Java, Minecraft-Plugins, .jar-Dateien, plugin.yml und das direkte Lesen von Stack-Traces — Englisch und Russisch dienten als Werkzeuge, um Dokumentation und Foren zu erschließen.",
        "proof": "Narrative Grundlage: Die spätere öffentliche Java-Historie zeigt, dass aus diesem Ursprung echter Code wurde.",
        "href": "https://github.com/emanuelVINI01?tab=repositories"
      },
      {
        "period": "2021 / 11 Jahre",
        "title": "Erste öffentliche Java-Plugins",
        "text": "Repositories wie zSilk2 und zManutencao erscheinen am 21. Juni 2021 auf GitHub, mit Fokus auf Bukkit/Spigot und Server-Anpassung.",
        "proof": "zManutencao: öffentlicher erster Commit am 21.06.2021; zSilk2: Java-Repository am selben Tag erstellt.",
        "href": "https://github.com/emanuelVINI01/zManutencao"
      },
      {
        "period": "2022-2023 / 12-13 Jahre",
        "title": "Plugins, APIs und Server-Architektur",
        "text": "Die JVM-Phase entwickelte sich zu Kernmodulen, Minecraft/Discord-Verknüpfung, Multi-Server-APIs und Plugins mit spezifischen Regeln für echte Communities.",
        "proof": "zDiscordCore wurde am 30.04.2022 erstellt; MultiServer-API hatte Commits am 15.07.2023 und 19.08.2023.",
        "href": "https://github.com/emanuelVINI01/MultiServer-API"
      },
      {
        "period": "2023 / 13 Jahre",
        "title": "Kotlin, SQL und kommerzielle Automatisierung",
        "text": "Der Stack erweiterte sich um Kotlin, relationale Datenbanken und Discord-Bots, die Shop-Logik, Communities und Datenpersistenz verbanden.",
        "proof": "AdvancedSQL, in Kotlin geschrieben, hatte öffentliche Commits am 01.09.2023; ComuniMineBot wurde am 16.08.2023 veröffentlicht.",
        "href": "https://github.com/emanuelVINI01/AdvancedSQL"
      },
      {
        "period": "2026 / 16 Jahre",
        "title": "Full-Stack-Webprodukte",
        "text": "Die Backend-Grundlage wanderte in vorzeigbare Anwendungen mit Next.js, Prisma, PostgreSQL, Authentifizierung, Dashboards, Uploads, Metriken und Entwickler-Tools.",
        "proof": "MTX-Upload, money-manager, TypeDash, SnippetVault und apiFlash wurden im März 2026 erstellt.",
        "href": "https://github.com/emanuelVINI01/typedash"
      },
      {
        "period": "Gegenwart",
        "title": "Transaktionale Systeme und KI-Agenten",
        "text": "Der aktuelle Fokus verbindet Produkt-Engineering, finanzielle Konsistenz, polierte Oberflächen und KI-Orchestrierung, um Lieferzeiten zu beschleunigen, ohne die Grundlagen aufzugeben.",
        "proof": "Transactional Wallet Ledger wurde am 07.05.2026 erstellt; Tunelay erscheint am 15.05.2026 als neuestes Repository.",
        "href": "https://github.com/emanuelVINI01/transactional-wallet-ledger"
      }
    ],
    "proofLabel": "Proof of Work",
    "proofTitle": "Die öffentlichen Signale hinter der Geschichte.",
    "proofSubtitle": "Historischer Stand aus Mai 2026. Die Zahlen beschreiben diese damalige Abfrage, nicht die aktuelle Repository-Anzahl; die heutige Prüfung nutzt Katalog und lokalen Code.",
    "evidence": [
      {
        "value": "37",
        "label": "eigene Repos",
        "text": "Projekte im Katalogitories, getrennt von Forks, mit durchgehender Kontinuität von 2021 bis 2026."
      },
      {
        "value": "30",
        "label": "vor 2024",
        "text": "Ältere eigene Projekte aus der Zeit vor der aktuellen Webprodukt-Phase und dem jüngsten KI-Hype."
      },
      {
        "value": "18",
        "label": "öffentliche JVM-Repos",
        "text": "16 eigene Java-Repositories und 2 Kotlin-Repositories, die Plugins, APIs, SQL und Serversysteme abdecken."
      },
      {
        "value": "11",
        "label": "TypeScript-Repos",
        "text": "Moderne Ebene mit Next.js, Dashboards, Entwickler-Tools, Metriken und transaktionalen Systemen."
      }
    ],
    "glossaryLabel": "Was das bedeutet",
    "glossaryTitle": "Die Fachbegriffe, übersetzt in reale Wirkung.",
    "glossary": [
      {
        "term": ".jar, plugin.yml und Stack-Traces",
        "text": "Das ist nicht nur „ein Minecraft-Plugin“: Es ist Java-Packaging, Build-Zyklen, Command/Event-Deklaration und das Debugging echter Laufzeitfehler."
      },
      {
        "term": "Bare Metal, VM und null Überbuchung",
        "text": "Das bedeutet, physische Ressourcen verantwortungsvoll zu betreiben: CPU, RAM, Speicher, IPs und Bandbreite müssen dem entsprechen, was dem Kunden verkauft wurde."
      },
      {
        "term": "Pterodactyl, Nodes und Eggs",
        "text": "Das bedeutet, Spieleserver mit Isolation, Runtime-Vorlagen, Port-Zuweisung und Netzwerk bereitzustellen — nicht nur ein Panel zu installieren."
      },
      {
        "term": "Webhooks und Idempotenz",
        "text": "Das verhindert, dass ein doppeltes Zahlungsereignis doppeltes Guthaben erzeugt. Jedes Finanzereignis muss genau einmal verarbeitet werden und nachvollziehbar bleiben."
      },
      {
        "term": "Multi-Agenten und Vibecoding",
        "text": "Das bedeutet, KI zu nutzen, um Analyse, Boilerplate, Tests und Iteration zu beschleunigen — während Architektur und kritische Entscheidungen unter menschlicher Kontrolle bleiben."
      }
    ]
  },
  "services": {
    "label": "Leistungen",
    "title": "Full-Stack-Lieferung mit klaren Signalen für technische Teams.",
    "subtitle": "Das Portfolio ordnet reale Projekte nach Architektur, Produktentscheidungen, Stack und Bewertungspunkten: Authentifizierung, Datenmodellierung, APIs, Dashboards, Validierung, Deployment und Interface-Feinschliff.",
    "s1Title": "APIs und transaktionale Systeme",
    "s1Text": "APIs mit typisierten Verträgen, Eingabeprüfung, Authentifizierung und Persistenz. Die Cases zeigen Konsistenzentscheidungen und Fehlerbehandlung.",
    "s2Title": "Dashboards und Webprodukte",
    "s2Text": "Responsive Oberflächen für Formulare, Dashboards und Werkzeuge. Projekte zeigen Navigation, Interaktionszustände und Datendarstellung.",
    "s3Title": "Architektur und Qualität",
    "s3Text": "Code nach Verantwortlichkeiten, typisierte Verträge und projektspezifische Prüfungen. Cases benennen Grenzen und nächste Schritte."
  },
  "journey": {
    "label": "Werdegang",
    "title": "Von der Java/Kotlin-Grundlage zu vollständigen Webprodukten.",
    "subtitle": "Die Portfolio-Entwicklung lässt den technischen Ursprung sichtbar: Die JVM-Erfahrung formte die Grundlage für den Systementwurf, während der heutige Stack diese Basis auf öffentliche Interfaces, APIs und Produkte erweitert.",
    "step1Label": "JVM-Grundlage",
    "step1Title": "Java und Kotlin",
    "step1Text": "Erste Phase mit Fokus auf objektorientiertes Design, interne APIs, Persistenz, Bibliotheken und Code-Organisation in Projekten mit echten Regeln.",
    "step2Label": "Übergang zum Web",
    "step2Title": "TypeScript und Produkt",
    "step2Text": "Diese architektonische Grundlage wanderte in Frontend- und Backend-Web-Arbeit mit React, Next.js, Fastify, Prisma und relationalen Datenbanken.",
    "step3Label": "Aktuelle Phase",
    "step3Title": "Bewertbare Produkte",
    "step3Text": "Der aktuelle Fokus liegt auf Dashboards, Entwickler-Tools und transaktionalen Systemen mit klarem Umfang, eigenen Domains und öffentlichem Code."
  },
  "stack": {
    "label": "Stack",
    "title": "Nahtlose Integration zwischen Interfaces, APIs und Datenmodellierung.",
    "subtitle": "TypeScript, Next.js und PostgreSQL tragen die Webanwendungen. Java und Kotlin gehören zum Werdegang mit Plugins und Automatisierung. Rust unterstützt das CVM-Ökosystem und Rechenexperimente. Jeder Case zeigt Technologien und Implementierungsstand.",
    "item1": "Modernes, reaktives Frontend mit App Router, React, Tailwind CSS und Framer Motion.",
    "item2": "APIs, Authentifizierung und Persistenz mit TypeScript, Prisma und PostgreSQL in den Webprojekten.",
    "item3": "Der Stand jedes Projekts steht im Katalog."
  },
  "projects": {
    "label": "Ausgewählte Projekte",
    "title": "Starke Projekte für die technische Bewertung.",
    "subtitle": "Eine technische Kuratierung der unter emanuelVINI01 gepflegten Repositories, die den Java/Kotlin-Werdegang bewahrt und aktuelle Systeme, datengetriebene Anwendungen und Entwickler-Infrastruktur priorisiert.",
    "spotlightLabel": "Bewertungszentrum",
    "spotlightTitle": "Drei Projekte auf der Bühne, mit dem stärksten System in der Mitte.",
    "spotlightText": "Ausgewählte Anwendungen, Werkzeuge und Experimente zum Erkunden von Code und Implementierungsentscheidungen.",
    "allProjectsLabel": "Alle Projekte"
  },
  "footer": {
    "description": "Full-Stack-Entwickler mit Projekten in Webanwendungen, APIs, KI-Werkzeugen und experimentellen Rust-Systemen.",
    "availableText": "Offen für Remote-Möglichkeiten, technische Herausforderungen und Produktarbeit mit TypeScript, Next.js, Fastify und Prisma."
  }
};

export const dictionaries = { pt, en, de };
