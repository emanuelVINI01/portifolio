export type Language = 'pt' | 'en';
export type Dictionary = typeof pt;

export const pt = {
  common: {
    online: 'Online',
    available: 'Disponível para projetos sob demanda',
    availableCorporate: 'Disponível para projetos remotos e produtos sob demanda.',
    viewAll: 'Ver todos',
    viewProjects: 'Ver projetos',
    publicGithub: 'GitHub Público',
    searchPlaceholder: 'Buscar por nome, stack, categoria...',
    projectsFound: 'projetos encontrados',
    projectFound: 'projeto encontrado',
    for: 'para',
    noProjectsFound: 'Nenhum projeto encontrado',
    adjustSearch: 'Ajuste o termo de busca ou selecione outra categoria.',
    viewProject: 'Ver projeto',
    techStack: 'Tecnologias',
    close: 'Fechar',
    liveProject: 'Abrir app',
    repository: 'Repositório',
    allRightsReserved: 'Todos os direitos reservados.',
    navigation: 'Navegação',
    contact: 'Contato',
    verifyOnGithub: 'Verificar no GitHub',
  },
  nav: {
    home: 'Início',
    story: 'História',
    services: 'Serviços',
    projects: 'Projetos',
    stack: 'Stack',
  },
  hero: {
    title: 'A história de quem transformou suporte, servidores e IA em engenharia real.',
    subtitle:
      'Sou Emanuel Vini, desenvolvedor full-stack de 16 anos. Antes de usar IA para acelerar entregas, eu já estava acordando para resolver servidor, debugando plugin Java, automatizando suporte no Discord e criando código que precisava funcionar para clientes reais. No começo, muito código era ruim e cheio de tentativa e erro. Foi exatamente esse atrito, entre fórum, wiki, documentação e produção quebrando, que formou o desenvolvedor que eu sou hoje.',
    statsLabel1: 'Repos autorais públicos',
    statsDetail1: '37 autorais + 4 forks na API pública em 16/05/2026',
    statsLabel2: 'Primeiro proof público',
    statsDetail2: 'Plugins Java criados no GitHub em junho/2021',
    statsLabel3: 'Foco atual',
    statsDetail3: 'Next.js, Prisma, IA aplicada e sistemas transacionais',
    stackLabel: 'Stack operacional',
    stack1: 'Next.js App Router, React, Tailwind CSS e Framer Motion',
    stack2: 'Fastify, Prisma, PostgreSQL, Zod e Playwright',
    stack3: 'Java, Kotlin, Discord bots, APIs e automação de infraestrutura',
    commandTitle: 'portfolio://quality-scan',
    commandSubtitle: 'comandos reais, sinais auditáveis e UX em movimento',
    commandStatus: 'portfolio pronto para avaliação',
    contactMe: 'Copiar e-mail',
    copyEmailShort: 'Copiar',
    emailCopied: 'E-mail copiado',
    emailLabel: 'Contato direto',
  },
  story: {
    label: 'História técnica',
    title: 'Começou como curiosidade. Virou operação. Hoje virou produto.',
    subtitle:
      'A narrativa abaixo foi escrita para ser lida como uma investigação: cada capítulo mostra uma pressão real, a decisão técnica tomada e o rastro público que ajuda a auditar a trajetória.',
    narrativeLabel: 'A abertura',
    narrativeTitle: 'Eu não entrei na tecnologia por tutorial bonito. Entrei porque algo quebrava e alguém precisava resolver.',
    narrative: [
      'Em 2020, o isolamento virou laboratório. Eu comecei com Java, Minecraft, arquivos .jar, plugin.yml e stack traces que não explicavam nada com carinho. A única saída era ler, testar, quebrar e compilar de novo.',
      'O começo não foi limpo. Tinha código acoplado, nome ruim, gambiarra para entender API e muita tentativa que falhava no console. Mas cada erro obrigava uma investigação: fórum antigo, wiki incompleta, documentação oficial, issue esquecida e conversa técnica em idioma que eu ainda estava aprendendo.',
      'Depois o código saiu do hobby e entrou em operação. Servidor dedicado, VM, painel, cliente, pagamento, ticket, rota, uptime. Quando existe cliente esperando, arquitetura deixa de ser palavra bonita e vira sobrevivência.',
      'Essa fase me treinou a fazer uma coisa que separa desenvolvedor mediano de desenvolvedor forte: olhar para um sistema quebrado sem travar, reduzir o problema, testar hipótese e transformar bagunça em arquitetura.',
      'Hoje eu uso IA, vibecoding e agentes como aceleradores. Mas a base que decide o que faz sentido veio de outro lugar: console, Linux, API, banco, rede e responsabilidade sobre sistemas que não podiam simplesmente cair.',
    ],
    principles: [
      {
        kicker: 'Raiz',
        title: 'A curva começou no erro',
        text: 'A base veio de documentação, fóruns, wikis, erro de compilação e leitura de código existente. O código inicial não era perfeito; refatorar o que eu mesmo quebrava foi o que criou critério técnico.',
      },
      {
        kicker: 'Infra',
        title: 'Operação muda o nível',
        text: 'Servidores, máquinas virtuais, painéis, rotas, limites de recurso e uptime moldaram uma visão prática de sistema em produção.',
      },
      {
        kicker: 'Negócio',
        title: 'Pagamento não perdoa bug',
        text: 'Webhooks, gateway de pagamento e idempotência ensinaram cedo que backend bom protege dinheiro, estado e confiança.',
      },
      {
        kicker: 'Agora',
        title: 'IA entra como escala',
        text: 'Vibecoding e multi-agentes entram como ferramentas de escala, não como substituto para arquitetura, debugging e decisão técnica.',
      },
    ],
    commandCenter: {
      label: 'Capítulo 03',
      eyebrow: 'ChatOps antes de eu conhecer esse nome',
      title: 'O centro de comando que levou meio terabyte de RAM para dentro do Discord.',
      lead:
        'Entre os 11 e 13 anos, a infraestrutura deixou de ser brincadeira: dois dedicados bare-metal da OVHCloud, 256GB de RAM em cada máquina e clientes abrindo tickets quando qualquer pico de CPU parecia o fim do mundo. O gargalo deixou de ser hardware. Virou tempo.',
      sceneTitle: 'A cena que resume tudo',
      scene:
        'Um cliente abria ticket de madrugada cobrando SLA. Do outro lado, um garoto de 12 anos pegava o celular, rodava um comando privado no Discord, consultava o node, reiniciava a VM ou matava um processo travado, respondia como suporte profissional e ia para a escola.',
      stats: [
        { value: '512GB', label: 'RAM orquestrada', text: 'Dois servidores OVHCloud de 256GB descritos na operação.' },
        { value: '24/7', label: 'pressão real', text: 'Tickets, manutenção, quedas, rotas e suporte enquanto a rotina escolar continuava.' },
        { value: 'API', label: 'não era só chat', text: 'Bots atuavam como interface operacional para painéis, instâncias e clientes.' },
      ],
      flow: [
        'Ticket chega no Discord',
        'Bot cruza cliente, fatura e instância',
        'Comando chama API ou rotina Linux',
        'Node responde, VM estabiliza, cliente recebe status',
      ],
      terminal: [
        '$ /node ovh-01 diagnose vm cliente-42',
        'cpu: spike detected | route: degraded | invoice: ok',
        '$ /vm cliente-42 restart --graceful',
        'status: recovered | ticket: closed with incident note',
      ],
      powers: [
        {
          title: 'APIs como painel invisível',
          text: 'O bot consumia rotas REST do Virtualizor e do Pterodactyl com token, transformando chat em cockpit de infraestrutura.',
        },
        {
          title: 'Terminal dentro do fluxo',
          text: 'Restart de VM, diagnóstico e processos travados saíam do SSH manual e viravam comandos restritos no Discord.',
        },
        {
          title: 'Alertas para crise',
          text: 'Warnings globais avisavam clientes sobre manutenção, instabilidade de rota, variação de uptime e incidentes em nodes.',
        },
        {
          title: 'Financeiro conectado',
          text: 'Faturas vencidas geravam alerta e podiam cortar recursos da instância quando o limite operacional era ultrapassado.',
        },
      ],
      proofKicker: 'Prova pública',
      proofTitle: 'Rastro público conectado a esse capítulo',
      proofNote:
        'A operação OVH/Virtualizor/Pterodactyl é relato operacional. O rastro público auditável está nos bots e integrações Discord/Minecraft publicados no GitHub.',
      proofLinks: [
        {
          name: 'zDiscordCore',
          meta: 'Java, criado em 30/04/2022',
          href: 'https://github.com/emanuelVINI01/zDiscordCore',
        },
        {
          name: 'ComuniMineBot',
          meta: 'TypeScript, publicado em 16/08/2023',
          href: 'https://github.com/emanuelVINI01/ComuniMineBot',
        },
        {
          name: 'RyzenShopBot',
          meta: 'TypeScript, publicado em 16/08/2023',
          href: 'https://github.com/emanuelVINI01/RyzenShopBot',
        },
        {
          name: 'MinecraftFeastBot',
          meta: 'JavaScript, publicado em 16/08/2023',
          href: 'https://github.com/emanuelVINI01/MinecraftFeastBot',
        },
      ],
      closer:
        'Empresas grandes chamam isso de ChatOps: Slack ou Teams conectado à nuvem para operar infraestrutura com velocidade. Eu construí a minha versão com Discord, TypeScript, APIs e servidores reais porque precisava ganhar tempo, reduzir suporte manual e manter cliente online.',
    },
    timelineLabel: 'Linha do tempo',
    timelineTitle: 'Uma evolução com datas auditáveis.',
    timelineSubtitle:
      'Os marcos públicos abaixo foram cruzados com o GitHub em 16 de maio de 2026. A parte operacional de infraestrutura vem da história pessoal; a camada de repositórios funciona como prova verificável.',
    timeline: [
      {
        period: '2020 / 10 anos',
        title: 'Java, Minecraft e autodidatismo',
        text: 'A pandemia virou laboratório. A entrada foi por Java puro, plugins de Minecraft, arquivos .jar, plugin.yml e leitura direta de stack traces, com inglês e russo usados como ferramentas para destravar documentação e fóruns.',
        proof: 'Base narrativa: a sequência pública posterior em Java mostra que essa origem virou código real.',
        href: 'https://github.com/emanuelVINI01?tab=repositories',
      },
      {
        period: '2021 / 11 anos',
        title: 'Primeiros plugins Java públicos',
        text: 'Repositórios como zSilk2 e zManutencao aparecem no GitHub em 21 de junho de 2021, com foco em Bukkit/Spigot e customização de servidor.',
        proof: 'zManutencao: commit inicial público em 21/06/2021; zSilk2: repositório Java criado no mesmo dia.',
        href: 'https://github.com/emanuelVINI01/zManutencao',
      },
      {
        period: '2022-2023 / 12-13 anos',
        title: 'Plugins, APIs e arquitetura para servidores',
        text: 'A fase JVM evoluiu para módulos de core, vinculação Minecraft/Discord, APIs multi-servidor e plugins com regras específicas para comunidades reais.',
        proof: 'zDiscordCore foi criado em 30/04/2022; MultiServer-API teve commits em 15/07/2023 e 19/08/2023.',
        href: 'https://github.com/emanuelVINI01/MultiServer-API',
      },
      {
        period: '2023 / 13 anos',
        title: 'Kotlin, SQL e automação comercial',
        text: 'A stack expandiu para Kotlin, bancos relacionais e bots de Discord, conectando lógica de loja, comunidade e persistência de dados.',
        proof: 'AdvancedSQL, em Kotlin, teve commits públicos em 01/09/2023; ComuniMineBot foi publicado em 16/08/2023.',
        href: 'https://github.com/emanuelVINI01/AdvancedSQL',
      },
      {
        period: '2026 / 16 anos',
        title: 'Produtos web full-stack',
        text: 'A base de backend passou para aplicações demonstráveis com Next.js, Prisma, PostgreSQL, autenticação, dashboards, upload, métricas e ferramentas para desenvolvedores.',
        proof: 'MTX-Upload, money-manager, TypeDash, SnippetVault e apiFlash foram criados em março de 2026.',
        href: 'https://github.com/emanuelVINI01/typedash',
      },
      {
        period: 'Presente',
        title: 'Sistemas transacionais e agentes de IA',
        text: 'O foco atual une engenharia de produto, consistência financeira, interfaces polidas e orquestração com IA para acelerar entrega sem abandonar fundamentos.',
        proof: 'Transactional Wallet Ledger foi criado em 07/05/2026; Tunelay aparece como o repositório mais recente em 15/05/2026.',
        href: 'https://github.com/emanuelVINI01/transactional-wallet-ledger',
      },
    ],
    proofLabel: 'Proof of Work',
    proofTitle: 'Os sinais públicos que sustentam a narrativa.',
    proofSubtitle:
      'A API pública do GitHub retornou 41 repositórios no total em 16/05/2026: 37 autorais e 4 forks. Entre os autorais, 30 foram criados antes de 2024.',
    evidence: [
      {
        value: '37',
        label: 'repos autorais',
        text: 'Repositórios próprios públicos, separados dos forks, mostrando continuidade de 2021 a 2026.',
      },
      {
        value: '30',
        label: 'antes de 2024',
        text: 'Projetos autorais antigos, anteriores à fase atual de produtos web e ao hype recente de IA.',
      },
      {
        value: '18',
        label: 'JVM públicos',
        text: '16 repositórios Java e 2 Kotlin autorais, cobrindo plugins, APIs, SQL e sistemas de servidor.',
      },
      {
        value: '11',
        label: 'TypeScript',
        text: 'Camada moderna com Next.js, dashboards, ferramentas para devs, métricas e sistemas transacionais.',
      },
    ],
    glossaryLabel: 'O que isso significa',
    glossaryTitle: 'Os termos técnicos, traduzidos para impacto real.',
    glossary: [
      {
        term: '.jar, plugin.yml e stack trace',
        text: 'Não é só “plugin de Minecraft”: é empacotamento Java, ciclo de build, declaração de comandos/eventos e debugging por erro real em runtime.',
      },
      {
        term: 'Bare metal, VM e zero overselling',
        text: 'É operar recurso físico com responsabilidade: CPU, memória, disco, IP e banda precisam bater com o que foi vendido ao cliente.',
      },
      {
        term: 'Pterodactyl, Nodes e Eggs',
        text: 'É provisionar servidores de jogo com isolamento, templates de runtime, alocação de portas e rede, não apenas instalar um painel bonito.',
      },
      {
        term: 'Webhooks e idempotência',
        text: 'É impedir que um pagamento duplicado gere crédito duplicado. Cada evento financeiro precisa ser processado uma única vez e com rastreabilidade.',
      },
      {
        term: 'Multi-agentes e Vibecoding',
        text: 'É usar IA para acelerar análise, boilerplate, testes e iteração, mantendo a arquitetura e as decisões críticas sob controle humano.',
      },
    ],
  },
  services: {
    label: 'Serviços',
    title: 'Entrega full-stack com leitura clara para recrutadores e times técnicos.',
    subtitle:
      'O portfólio organiza projetos reais por arquitetura, decisões de produto, stack e pontos avaliáveis: autenticação, modelagem, APIs, dashboards, validação, deploy e acabamento de interface.',
    s1Title: 'APIs e sistemas transacionais',
    s1Text:
      'Modelagem rigorosa de contratos, validação de dados, autenticação de ponta a ponta e garantia de consistência. Desenvolvimento de backends robustos projetados para escalabilidade e confiabilidade extremas.',
    s2Title: 'Dashboards e produtos web',
    s2Text:
      'Construção de interfaces dark responsivas e altamente otimizadas. Transformação de requisitos complexos e fluxos técnicos em métricas claras e produtos de alto valor agregado.',
    s3Title: 'Arquitetura e qualidade',
    s3Text:
      'Planejamento modular, separação estrita de responsabilidades, tipagem forte de ponta a ponta e estabelecimento de pipelines de deploy para garantir manutenibilidade e evolução contínua da base de código.',
  },
  journey: {
    label: 'Trajetória',
    title: 'Da base Java/Kotlin para produtos web completos.',
    subtitle:
      'A evolução do portfolio mantém a origem técnica visível: a experiência com JVM formou a base para projetar sistemas, enquanto a stack atual amplia isso para interfaces, APIs e produtos demonstráveis publicamente.',
    step1Label: 'Base JVM',
    step1Title: 'Java e Kotlin',
    step1Text:
      'Primeira fase focada em orientação a objetos, APIs internas, persistência, bibliotecas e organização de código em projetos com regras reais.',
    step2Label: 'Transição web',
    step2Title: 'TypeScript e produto',
    step2Text:
      'A base de arquitetura foi levada para front e back web, com React, Next.js, Fastify, Prisma e bancos relacionais.',
    step3Label: 'Fase atual',
    step3Title: 'Produtos avaliáveis',
    step3Text:
      'Hoje o foco está em dashboards, ferramentas para desenvolvedores e sistemas transacionais com escopo claro, domínio próprio e código público.',
  },
  stack: {
    label: 'Stack',
    title: 'Integração fluida entre interfaces, APIs e modelagem de dados.',
    subtitle:
      'O histórico contínuo de projetos mostra uma evolução clara: primeiro Java/Kotlin e o ecossistema JVM, depois TypeScript, Next.js e soluções web com regras de negócio sofisticadas. O destaque atual recai sobre o Transactional Wallet Ledger: uma arquitetura monorepo integrando Fastify e Next.js com foco em auditoria e rastreabilidade transacional.',
    item1: 'Frontend moderno e reativo empregando App Router, React, Tailwind CSS e Framer Motion.',
    item2:
      'Backend de alta performance suportado por Fastify, Prisma, PostgreSQL e controle estrito de autenticação e validação.',
    item3: 'Repositórios em nível de produção demonstrando práticas avançadas de engenharia de software.',
  },
  projects: {
    label: 'Projetos selecionados',
    title: 'Projetos fortes para avaliação técnica.',
    subtitle:
      'Uma curadoria técnica dos repositórios mantidos sob emanuelVINI01, preservando a trajetória Java/Kotlin e priorizando os projetos atuais de sistemas, aplicações baseadas em dados e infraestrutura para desenvolvedores.',
    spotlightLabel: 'Centro de avaliação',
    spotlightTitle: 'Três projetos em palco, com o sistema mais forte no centro.',
    spotlightText:
      'A página abre como um deck técnico: o projeto central fica mais elevado, os laterais dão contexto e a interação guia o recrutador para abrir, comparar e auditar.',
    allProjectsLabel: 'Todos os projetos',
  },
  footer: {
    description:
      'Desenvolvedor full-stack focado em produtos web, APIs resilientes, modelagem de dados e interfaces bem acabadas para avaliação técnica.',
    availableText:
      'Aberto a oportunidades remotas, desafios técnicos e construção de produtos com TypeScript, Next.js, Fastify e Prisma.',
  },
};

export const en: Dictionary = {
  common: {
    online: 'Online',
    available: 'Available for on-demand projects',
    availableCorporate: 'Available for remote projects and on-demand products.',
    viewAll: 'View all',
    viewProjects: 'View projects',
    publicGithub: 'Public GitHub',
    searchPlaceholder: 'Search by name, stack, category...',
    projectsFound: 'projects found',
    projectFound: 'project found',
    for: 'for',
    noProjectsFound: 'No projects found',
    adjustSearch: 'Adjust your search term or select another category.',
    viewProject: 'View project',
    techStack: 'Technologies',
    close: 'Close',
    liveProject: 'Open app',
    repository: 'Repository',
    allRightsReserved: 'All rights reserved.',
    navigation: 'Navigation',
    contact: 'Contact',
    verifyOnGithub: 'Verify on GitHub',
  },
  nav: {
    home: 'Home',
    story: 'Story',
    services: 'Services',
    projects: 'Projects',
    stack: 'Stack',
  },
  hero: {
    title: 'The story of turning support, servers, and AI into real engineering.',
    subtitle:
      'I am Emanuel Vini, a 16-year-old full-stack developer. Before using AI to accelerate delivery, I was already waking up to fix servers, debugging Java plugins, automating Discord support, and writing code that had to work for real clients. In the beginning, a lot of the code was rough and full of trial and error. That friction, moving through forums, wikis, documentation, and broken production systems, shaped the developer I am today.',
    statsLabel1: 'Original public repos',
    statsDetail1: '37 original repos + 4 forks in the public API on May 16, 2026',
    statsLabel2: 'First public proof',
    statsDetail2: 'Java plugins created on GitHub in June 2021',
    statsLabel3: 'Current focus',
    statsDetail3: 'Next.js, Prisma, applied AI, and transactional systems',
    stackLabel: 'Operational Stack',
    stack1: 'Next.js App Router, React, Tailwind CSS, and Framer Motion',
    stack2: 'Fastify, Prisma, PostgreSQL, Zod, and Playwright',
    stack3: 'Java, Kotlin, Discord bots, APIs, and infrastructure automation',
    commandTitle: 'portfolio://quality-scan',
    commandSubtitle: 'real commands, auditable signals, and motion-first UX',
    commandStatus: 'portfolio ready for review',
    contactMe: 'Copy email',
    copyEmailShort: 'Copy',
    emailCopied: 'Email copied',
    emailLabel: 'Direct contact',
  },
  story: {
    label: 'Technical Story',
    title: 'It started as curiosity. It became operations. Today it became product.',
    subtitle:
      'The story below is designed to read like an investigation: every chapter shows real pressure, the technical decision behind it, and the public trail that helps audit the journey.',
    narrativeLabel: 'The opening',
    narrativeTitle: 'I did not enter tech through polished tutorials. I entered because something broke and someone had to fix it.',
    narrative: [
      'In 2020, isolation became a lab. I started with Java, Minecraft, .jar files, plugin.yml, and stack traces that did not explain anything gently. The only path was to read, test, break things, and compile again.',
      'The beginning was not clean. There was coupled code, bad naming, API guesswork, and many attempts that failed in the console. But every error forced an investigation: old forums, incomplete wikis, official documentation, forgotten issues, and technical conversations in languages I was still learning.',
      'Then the code left the hobby phase and entered operations. Dedicated server, VM, panel, customer, payment, ticket, route, uptime. When customers are waiting, architecture stops being a nice word and becomes survival.',
      'That phase trained the skill that separates average developers from strong ones: looking at a broken system without freezing, reducing the problem, testing hypotheses, and turning mess into architecture.',
      'Today I use AI, vibecoding, and agents as accelerators. But the foundation behind the decisions came from somewhere else: console output, Linux, APIs, databases, networks, and responsibility for systems that could not simply go down.',
    ],
    principles: [
      {
        kicker: 'Roots',
        title: 'The curve started with errors',
        text: 'The foundation came from documentation, forums, wikis, compilation errors, and reading existing code. The early code was not perfect; refactoring what I broke myself built technical judgment.',
      },
      {
        kicker: 'Infra',
        title: 'Operations raised the stakes',
        text: 'Servers, virtual machines, panels, routes, resource limits, and uptime shaped a practical view of production systems.',
      },
      {
        kicker: 'Business',
        title: 'Payments punish bugs',
        text: 'Webhooks, payment gateways, and idempotency taught early that good backend work protects money, state, and trust.',
      },
      {
        kicker: 'Now',
        title: 'AI enters as scale',
        text: 'Vibecoding and multi-agent workflows act as scaling tools, not replacements for architecture, debugging, and technical judgment.',
      },
    ],
    commandCenter: {
      label: 'Chapter 03',
      eyebrow: 'ChatOps before I knew the name',
      title: 'The command center that moved half a terabyte of RAM into Discord.',
      lead:
        'Between ages 11 and 13, infrastructure stopped being a side project: two OVHCloud bare-metal dedicated servers, 256GB of RAM each, and customers opening tickets whenever a CPU spike looked like the end of the world. The bottleneck was no longer hardware. It was time.',
      sceneTitle: 'The scene that explains everything',
      scene:
        'A customer opened a late-night ticket demanding SLA. On the other side, a 12-year-old picked up his phone, ran a private Discord command, checked the node, restarted a VM or killed a stuck process, answered like professional support, and went to school.',
      stats: [
        { value: '512GB', label: 'RAM orchestrated', text: 'Two 256GB OVHCloud servers described in the operation.' },
        { value: '24/7', label: 'real pressure', text: 'Tickets, maintenance, outages, routes, and support while school life continued.' },
        { value: 'API', label: 'not just chat', text: 'Bots acted as an operational interface for panels, instances, and customers.' },
      ],
      flow: [
        'Ticket lands in Discord',
        'Bot connects customer, invoice, and instance',
        'Command calls API or Linux routine',
        'Node responds, VM stabilizes, customer gets status',
      ],
      terminal: [
        '$ /node ovh-01 diagnose vm client-42',
        'cpu: spike detected | route: degraded | invoice: ok',
        '$ /vm client-42 restart --graceful',
        'status: recovered | ticket: closed with incident note',
      ],
      powers: [
        {
          title: 'APIs as an invisible panel',
          text: 'The bot consumed Virtualizor and Pterodactyl REST routes with tokens, turning chat into an infrastructure cockpit.',
        },
        {
          title: 'Terminal inside the workflow',
          text: 'VM restarts, diagnostics, and stuck processes moved from manual SSH into restricted Discord commands.',
        },
        {
          title: 'Crisis alerts',
          text: 'Global warnings informed customers about maintenance, routing instability, uptime changes, and node incidents.',
        },
        {
          title: 'Finance connected to ops',
          text: 'Overdue invoices triggered alerts and could cut instance resources when the operational limit was crossed.',
        },
      ],
      proofKicker: 'Public proof',
      proofTitle: 'Public trail connected to this chapter',
      proofNote:
        'The OVH/Virtualizor/Pterodactyl operation is an operational account. The auditable public trail lives in the Discord/Minecraft bots and integrations published on GitHub.',
      proofLinks: [
        {
          name: 'zDiscordCore',
          meta: 'Java, created on Apr 30, 2022',
          href: 'https://github.com/emanuelVINI01/zDiscordCore',
        },
        {
          name: 'ComuniMineBot',
          meta: 'TypeScript, published on Aug 16, 2023',
          href: 'https://github.com/emanuelVINI01/ComuniMineBot',
        },
        {
          name: 'RyzenShopBot',
          meta: 'TypeScript, published on Aug 16, 2023',
          href: 'https://github.com/emanuelVINI01/RyzenShopBot',
        },
        {
          name: 'MinecraftFeastBot',
          meta: 'JavaScript, published on Aug 16, 2023',
          href: 'https://github.com/emanuelVINI01/MinecraftFeastBot',
        },
      ],
      closer:
        'Large companies call this ChatOps: Slack or Teams connected to cloud operations for faster response. I built my version with Discord, TypeScript, APIs, and real servers because I needed to save time, reduce manual support, and keep customers online.',
    },
    timelineLabel: 'Timeline',
    timelineTitle: 'An evolution with auditable dates.',
    timelineSubtitle:
      'The public milestones below were checked against GitHub on May 16, 2026. The infrastructure layer comes from the personal story; the repository layer is the verifiable proof.',
    timeline: [
      {
        period: '2020 / Age 10',
        title: 'Java, Minecraft, and self-directed learning',
        text: 'The pandemic became a lab. The entry point was pure Java, Minecraft plugins, .jar files, plugin.yml, and reading stack traces directly, with English and Russian used as tools to unlock documentation and forums.',
        proof: 'Narrative foundation: the later public Java sequence shows that this origin became real code.',
        href: 'https://github.com/emanuelVINI01?tab=repositories',
      },
      {
        period: '2021 / Age 11',
        title: 'First public Java plugins',
        text: 'Repositories such as zSilk2 and zManutencao appear on GitHub on June 21, 2021, focused on Bukkit/Spigot and server customization.',
        proof: 'zManutencao: public initial commit on June 21, 2021; zSilk2: Java repository created the same day.',
        href: 'https://github.com/emanuelVINI01/zManutencao',
      },
      {
        period: '2022-2023 / Ages 12-13',
        title: 'Plugins, APIs, and server architecture',
        text: 'The JVM phase evolved into core modules, Minecraft/Discord linking, multi-server APIs, and plugins with specific rules for real communities.',
        proof: 'zDiscordCore was created on April 30, 2022; MultiServer-API had commits on July 15, 2023 and August 19, 2023.',
        href: 'https://github.com/emanuelVINI01/MultiServer-API',
      },
      {
        period: '2023 / Age 13',
        title: 'Kotlin, SQL, and commercial automation',
        text: 'The stack expanded into Kotlin, relational databases, and Discord bots, connecting shop logic, communities, and data persistence.',
        proof: 'AdvancedSQL, written in Kotlin, had public commits on September 1, 2023; ComuniMineBot was published on August 16, 2023.',
        href: 'https://github.com/emanuelVINI01/AdvancedSQL',
      },
      {
        period: '2026 / Age 16',
        title: 'Full-stack web products',
        text: 'The backend foundation moved into demonstrable applications with Next.js, Prisma, PostgreSQL, authentication, dashboards, uploads, metrics, and developer tools.',
        proof: 'MTX-Upload, money-manager, TypeDash, SnippetVault, and apiFlash were created in March 2026.',
        href: 'https://github.com/emanuelVINI01/typedash',
      },
      {
        period: 'Present',
        title: 'Transactional systems and AI agents',
        text: 'The current focus combines product engineering, financial consistency, polished interfaces, and AI orchestration to accelerate delivery without abandoning fundamentals.',
        proof: 'Transactional Wallet Ledger was created on May 7, 2026; Tunelay appears as the newest repository on May 15, 2026.',
        href: 'https://github.com/emanuelVINI01/transactional-wallet-ledger',
      },
    ],
    proofLabel: 'Proof of Work',
    proofTitle: 'The public signals behind the narrative.',
    proofSubtitle:
      'The public GitHub API returned 41 total repositories on May 16, 2026: 37 original repositories and 4 forks. Among the originals, 30 were created before 2024.',
    evidence: [
      {
        value: '37',
        label: 'original repos',
        text: 'Original public repositories, separated from forks, showing continuity from 2021 to 2026.',
      },
      {
        value: '30',
        label: 'before 2024',
        text: 'Older original projects predating the current web product phase and the recent AI hype cycle.',
      },
      {
        value: '18',
        label: 'public JVM repos',
        text: '16 original Java repositories and 2 Kotlin repositories covering plugins, APIs, SQL, and server systems.',
      },
      {
        value: '11',
        label: 'TypeScript repos',
        text: 'Modern layer with Next.js, dashboards, developer tools, metrics, and transactional systems.',
      },
    ],
    glossaryLabel: 'What it means',
    glossaryTitle: 'The technical terms translated into real impact.',
    glossary: [
      {
        term: '.jar, plugin.yml, and stack traces',
        text: 'This is not just “a Minecraft plugin”: it is Java packaging, build cycles, command/event declaration, and debugging real runtime errors.',
      },
      {
        term: 'Bare metal, VM, and zero overselling',
        text: 'This means operating physical resources responsibly: CPU, memory, disk, IPs, and bandwidth must match what was sold to the customer.',
      },
      {
        term: 'Pterodactyl, Nodes, and Eggs',
        text: 'This means provisioning game servers with isolation, runtime templates, port allocation, and networking, not merely installing a panel.',
      },
      {
        term: 'Webhooks and idempotency',
        text: 'This prevents a duplicated payment event from creating duplicated credit. Every financial event must be processed once and remain traceable.',
      },
      {
        term: 'Multi-agents and Vibecoding',
        text: 'This means using AI to accelerate analysis, boilerplate, tests, and iteration while keeping architecture and critical decisions under human control.',
      },
    ],
  },
  services: {
    label: 'Services',
    title: 'Full-stack delivery with clear signals for recruiters and technical teams.',
    subtitle:
      'The portfolio organizes real projects by architecture, product decisions, stack, and evaluation points: authentication, data modeling, APIs, dashboards, validation, deployment, and interface polish.',
    s1Title: 'APIs and transactional systems',
    s1Text:
      'Rigorous contract modeling, data validation, end-to-end authentication, and consistency guarantees. Development of robust backends designed for extreme scalability and reliability.',
    s2Title: 'Dashboards and web products',
    s2Text:
      'Construction of highly optimized and responsive dark interfaces. Transformation of complex requirements and technical workflows into clear metrics and high-value products.',
    s3Title: 'Architecture and quality',
    s3Text:
      'Modular planning, strict separation of concerns, end-to-end strong typing, and establishment of deployment pipelines to ensure maintainability and continuous evolution of the codebase.',
  },
  journey: {
    label: 'Journey',
    title: 'From Java/Kotlin foundations to complete web products.',
    subtitle:
      'The portfolio evolution keeps the technical origin visible: JVM experience shaped the foundation for system design, while the current stack expands that base into public-facing interfaces, APIs, and products.',
    step1Label: 'JVM foundation',
    step1Title: 'Java and Kotlin',
    step1Text:
      'First phase focused on object-oriented design, internal APIs, persistence, libraries, and code organization in projects with real rules.',
    step2Label: 'Web transition',
    step2Title: 'TypeScript and product',
    step2Text:
      'That architecture foundation moved into frontend and backend web work with React, Next.js, Fastify, Prisma, and relational databases.',
    step3Label: 'Current phase',
    step3Title: 'Evaluable products',
    step3Text:
      'The current focus is dashboards, developer tools, and transactional systems with clear scope, custom domains, and public code.',
  },
  stack: {
    label: 'Stack',
    title: 'Seamless integration between interfaces, APIs, and data modeling.',
    subtitle:
      'The continuous project history shows a clear evolution: first Java/Kotlin and the JVM ecosystem, then TypeScript, Next.js, and web solutions with sophisticated business rules. The current highlight is Transactional Wallet Ledger: a monorepo architecture integrating Fastify and Next.js with a focus on auditability and transactional traceability.',
    item1: 'Modern and reactive frontend employing App Router, React, Tailwind CSS, and Framer Motion.',
    item2:
      'High-performance backend supported by Fastify, Prisma, PostgreSQL, and strict authentication and validation control.',
    item3: 'Production-grade repositories demonstrating advanced software engineering practices.',
  },
  projects: {
    label: 'Selected projects',
    title: 'Strong projects for technical evaluation.',
    subtitle:
      'A technical curation of repositories maintained under emanuelVINI01, preserving the Java/Kotlin journey while prioritizing current systems, data-driven applications, and developer infrastructure.',
    spotlightLabel: 'Evaluation center',
    spotlightTitle: 'Three projects on stage, with the strongest system elevated in the center.',
    spotlightText:
      'The page opens like a technical deck: the center project sits higher, the side projects add context, and the motion guides recruiters to open, compare, and audit.',
    allProjectsLabel: 'All projects',
  },
  footer: {
    description:
      'Full-stack developer focused on web products, resilient APIs, data modeling, and polished interfaces for technical evaluation.',
    availableText:
      'Open to remote opportunities, technical challenges, and product work with TypeScript, Next.js, Fastify, and Prisma.',
  },
};

export const dictionaries = { pt, en };
