import { Language } from '@/i18n/dictionaries';

export type ProjectCategory =
  | 'Financial Systems'
  | 'Developer Tools'
  | 'Web Products';

export type BadgeType =
  | 'Transactional'
  | 'Auth'
  | 'API'
  | 'Dashboard'
  | 'Open Source'
  | 'Speed Optimized'
  | 'Real-Time'
  | 'Search'
  | 'Analytics'
  | 'File Upload'
  | 'Utility'
  | 'Portfolio'
  | 'TypeScript';

export interface Project {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  category: ProjectCategory;
  tech: string[];
  color: string;
  glowColor: string;
  githubUrl: string;
  liveUrl?: string;
  badges: BadgeType[];
  highlights: { label: string; value: string }[];
  year?: number;
  updatedAt?: string;
}

const projectsPt: Project[] = [
  {
    id: 'transactional-wallet-ledger',
    name: 'Transactional Wallet Ledger',
    shortDesc: 'API e dashboard para carteira transacional com ledger auditável.',
    longDesc:
      'Projeto full-stack integrando Fastify API e dashboard em Next.js para modelagem de uma carteira transacional. Contempla cadastro, autenticação estrita, chaves de pagamento, resolução de destinatários, transferências e histórico rigoroso de débito/crédito. O foco arquitetural reside em garantir consistência transacional (ACID), validação via Zod, contratos bem definidos de API e uma interface orientada à operação.',
    category: 'Financial Systems',
    tech: ['Fastify', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zod', 'Playwright'],
    color: 'var(--dracula-cyan)',
    glowColor: 'rgba(139, 233, 253, 0.22)',
    githubUrl: 'https://github.com/emanuelVINI01/transactional-wallet-ledger',
    liveUrl: 'https://transactional-wallet-ledger.emanuelvini.dev',
    badges: ['Transactional', 'Auth', 'API', 'Dashboard', 'TypeScript'],
    highlights: [
      { label: 'Arquitetura', value: 'Fastify API + Next.js dashboard' },
      { label: 'Consistência', value: 'Débito/crédito em transação Prisma' },
      { label: 'Segurança', value: 'Sessão Bearer + criptografia com bcrypt' },
      { label: 'Qualidade', value: 'Schemas Zod + testes automatizados (API/E2E)' },
    ],
    year: 2026,
    updatedAt: '2026-05-07',
  },
  {
    id: 'apiflash',
    name: 'apiFlash',
    shortDesc: 'Cliente HTTP leve para testes de endpoints direto no navegador.',
    longDesc:
      'Ferramenta projetada sob a filosofia dark-first para emissão de requisições HTTP (GET, POST, PUT, DELETE) com suporte a cabeçalhos avançados, editor de corpo de requisição e visualização instantânea de respostas em JSON. Desenvolvido para prover máxima velocidade e mínima fricção, otimizando o fluxo de trabalho de desenvolvedores.',
    category: 'Developer Tools',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    color: 'var(--dracula-green)',
    glowColor: 'rgba(80, 250, 123, 0.2)',
    githubUrl: 'https://github.com/emanuelVINI01/api-flash',
    liveUrl: 'https://apiflash.emanuelvini.dev',
    badges: ['API', 'Speed Optimized', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Métodos', value: 'GET, POST, PUT, DELETE' },
      { label: 'UX', value: 'Tema Dracula, configuração zero (Zero-config)' },
      { label: 'Headers', value: 'Painel dedicado para edição avançada' },
      { label: 'Resposta', value: 'Renderização otimizada de payloads JSON' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'snippetvault',
    name: 'SnippetVault',
    shortDesc: 'Case full-stack de organização de conhecimento técnico.',
    longDesc:
      'Projeto de portfolio estruturado como um produto SaaS para desenvolvedores. O SnippetVault demonstra autenticação com GitHub, modelagem de dados com Prisma, validação de contratos com Zod, dashboard operacional, busca pública e fluxo de compartilhamento. Mais do que um cofre de snippets, apresenta decisões de arquitetura, experiência de uso e organização de código em uma aplicação full-stack completa.',
    category: 'Developer Tools',
    tech: ['Next.js', 'Prisma', 'NextAuth', 'Zod', 'TypeScript'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.22)',
    githubUrl: 'https://github.com/emanuelVINI01/snippetvault',
    liveUrl: 'https://snippetvault.emanuelvini.dev',
    badges: ['Auth', 'Search', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Produto', value: 'Dashboard de gestão para desenvolvedores' },
      { label: 'Arquitetura', value: 'Next.js, Prisma, NextAuth e Zod' },
      { label: 'Descoberta', value: 'Busca pública e links compartilháveis' },
      { label: 'Portfolio', value: 'Case de app full-stack para recrutadores' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'typedash',
    name: 'TypeDash',
    shortDesc: 'Plataforma analítica de digitação com métricas em tempo real.',
    longDesc:
      'Aplicação de alta performance para treinamento de digitação. Calcula em tempo real métricas de WPM (Words Per Minute) e precisão, mantendo um histórico detalhado de performance, geração de gráficos evolutivos e estruturação de um ranking global. Emprega infraestrutura em PostgreSQL e uma interface limpa, responsiva e direta.',
    category: 'Web Products',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Recharts', 'NextAuth', 'Zod'],
    color: 'var(--dracula-cyan)',
    glowColor: 'rgba(139, 233, 253, 0.2)',
    githubUrl: 'https://github.com/emanuelVINI01/typedash',
    liveUrl: 'https://typedash.emanuelvini.dev',
    badges: ['Real-Time', 'Dashboard', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Métricas', value: 'Cálculo de WPM e precisão assíncronos' },
      { label: 'Ranking', value: 'Leaderboard sincronizado globalmente' },
      { label: 'Auth', value: 'Integração robusta com GitHub' },
      { label: 'Data Viz', value: 'Análise de histórico com Recharts' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'mtx-upload',
    name: 'MTX-Upload',
    shortDesc: 'Gerenciador estruturado de arquivos com suporte a compartilhamento.',
    longDesc:
      'Aplicação corporativa para gerenciamento seguro de arquivos. Suporta processos de upload assíncrono, manipulação de metadados, exclusão segura e geração de links para compartilhamento externo. Desenvolvido para demonstrar fluência em operações de I/O em ambientes baseados em React e Next.js.',
    category: 'Web Products',
    tech: ['Next.js', 'Prisma', 'TypeScript'],
    color: 'var(--dracula-yellow)',
    glowColor: 'rgba(241, 250, 140, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/MTX-Upload',
    liveUrl: 'https://mtx-upload.emanuelvini.dev',
    badges: ['File Upload', 'Dashboard', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Gestão', value: 'Upload, renomeação e exclusão lógica' },
      { label: 'Distribuição', value: 'Geração de links seguros para download' },
      { label: 'Stack', value: 'Implementação com Next.js e Prisma' },
    ],
    year: 2026,
    updatedAt: '2026-03-16',
  },
  {
    id: 'portifolio-frontend',
    name: 'Portfolio Frontend',
    shortDesc: 'Base arquitetural anterior do portfólio web corporativo.',
    longDesc:
      'Versão legada do portfólio pessoal, utilizada como laboratório prático para pesquisa de interfaces de usuário, estruturação de componentes e apresentação profissional. Serviu como a fundação arquitetural para a atual presença online, mantendo as diretrizes de código limpo e identidade visual marcante.',
    category: 'Web Products',
    tech: ['Next.js', 'TypeScript', 'React'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/portifolio-frontend',
    liveUrl: 'https://emanuelvini.dev',
    badges: ['Portfolio', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Aplicação', value: 'Pesquisa e design de interfaces' },
      { label: 'Stack', value: 'Desenvolvido em Next.js e React' },
      { label: 'Evolução', value: 'Fundação para a estrutura digital atual' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'random-uuid',
    name: 'Random UUID',
    shortDesc: 'Utilitário em TypeScript para geração de identificadores universais.',
    longDesc:
      'Módulo minimalista projetado para aumentar a produtividade no ecossistema de desenvolvimento, fornecendo geração padronizada de UUIDs. Integrado ao catálogo como uma prova de conceito para micro-ferramentas otimizadas, reutilizáveis e totalmente dissociadas de grandes infraestruturas.',
    category: 'Developer Tools',
    tech: ['TypeScript'],
    color: 'var(--dracula-orange)',
    glowColor: 'rgba(255, 184, 108, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/random-uuid',
    liveUrl: 'https://random-uuid.emanuelvini.dev',
    badges: ['Utility', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Escopo', value: 'Micro-utilitário de infraestrutura de desenvolvimento' },
      { label: 'Core', value: 'Implementação 100% em TypeScript' },
    ],
    year: 2023,
    updatedAt: '2023-09-14',
  },
];

const projectsEn: Project[] = [
  {
    id: 'transactional-wallet-ledger',
    name: 'Transactional Wallet Ledger',
    shortDesc: 'API and dashboard for a transactional wallet with an auditable ledger.',
    longDesc:
      'Full-stack project integrating a Fastify API and a Next.js dashboard to model a transactional wallet. Features user registration, strict authentication, payment keys, payee resolution, fund transfers, and a rigorous debit/credit history. The architectural focus lies in ensuring transactional consistency (ACID), schema validation via Zod, well-defined API contracts, and a clear operation interface.',
    category: 'Financial Systems',
    tech: ['Fastify', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zod', 'Playwright'],
    color: 'var(--dracula-cyan)',
    glowColor: 'rgba(139, 233, 253, 0.22)',
    githubUrl: 'https://github.com/emanuelVINI01/transactional-wallet-ledger',
    liveUrl: 'https://transactional-wallet-ledger.emanuelvini.dev',
    badges: ['Transactional', 'Auth', 'API', 'Dashboard', 'TypeScript'],
    highlights: [
      { label: 'Architecture', value: 'Fastify API + Next.js dashboard' },
      { label: 'Consistency', value: 'Debit/credit wrapped in Prisma transactions' },
      { label: 'Security', value: 'Bearer sessions + bcrypt encryption' },
      { label: 'Quality', value: 'Zod schemas + Automated testing (API/E2E)' },
    ],
    year: 2026,
    updatedAt: '2026-05-07',
  },
  {
    id: 'apiflash',
    name: 'apiFlash',
    shortDesc: 'Lightweight HTTP client for in-browser endpoint testing.',
    longDesc:
      'A dark-first tool engineered for issuing HTTP requests (GET, POST, PUT, DELETE) featuring advanced header support, a request body editor, and instantaneous JSON response visualization. Designed to provide maximum speed and minimal friction, heavily optimizing the developer workflow.',
    category: 'Developer Tools',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    color: 'var(--dracula-green)',
    glowColor: 'rgba(80, 250, 123, 0.2)',
    githubUrl: 'https://github.com/emanuelVINI01/api-flash',
    liveUrl: 'https://apiflash.emanuelvini.dev',
    badges: ['API', 'Speed Optimized', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Methods', value: 'GET, POST, PUT, DELETE' },
      { label: 'UX', value: 'Dracula theme, zero-config environment' },
      { label: 'Headers', value: 'Dedicated panel for advanced configuration' },
      { label: 'Response', value: 'Optimized rendering of JSON payloads' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'snippetvault',
    name: 'SnippetVault',
    shortDesc: 'Full-stack case study for organizing technical knowledge.',
    longDesc:
      'Portfolio project structured as a SaaS-style product for developers. SnippetVault demonstrates GitHub authentication, Prisma data modeling, Zod contract validation, an operational dashboard, public search, and sharing flows. More than a snippet vault, it presents architecture decisions, product UX, and code organization in a complete full-stack application.',
    category: 'Developer Tools',
    tech: ['Next.js', 'Prisma', 'NextAuth', 'Zod', 'TypeScript'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.22)',
    githubUrl: 'https://github.com/emanuelVINI01/snippetvault',
    liveUrl: 'https://snippetvault.emanuelvini.dev',
    badges: ['Auth', 'Search', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Product', value: 'Management dashboard for developers' },
      { label: 'Architecture', value: 'Next.js, Prisma, NextAuth, and Zod' },
      { label: 'Discovery', value: 'Public search and shareable links' },
      { label: 'Portfolio', value: 'Full-stack app case for recruiters' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'typedash',
    name: 'TypeDash',
    shortDesc: 'Typing analytics platform providing real-time metrics.',
    longDesc:
      'High-performance application for typing assessment. Computes WPM (Words Per Minute) and accuracy metrics in real-time, maintaining detailed performance history, generating evolutionary charts, and structuring a global leaderboard. Leverages PostgreSQL infrastructure alongside a clean, responsive, and direct interface.',
    category: 'Web Products',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Recharts', 'NextAuth', 'Zod'],
    color: 'var(--dracula-cyan)',
    glowColor: 'rgba(139, 233, 253, 0.2)',
    githubUrl: 'https://github.com/emanuelVINI01/typedash',
    liveUrl: 'https://typedash.emanuelvini.dev',
    badges: ['Real-Time', 'Dashboard', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Metrics', value: 'Asynchronous WPM and accuracy calculation' },
      { label: 'Ranking', value: 'Globally synchronized leaderboard' },
      { label: 'Auth', value: 'Robust GitHub integration' },
      { label: 'Data Viz', value: 'Historical analytics powered by Recharts' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'mtx-upload',
    name: 'MTX-Upload',
    shortDesc: 'Structured file manager supporting secure sharing.',
    longDesc:
      'Corporate application for secure file management. Supports asynchronous upload processes, metadata manipulation, secure deletion, and generation of links for external sharing. Engineered to demonstrate fluency in I/O operations within React and Next.js environments.',
    category: 'Web Products',
    tech: ['Next.js', 'Prisma', 'TypeScript'],
    color: 'var(--dracula-yellow)',
    glowColor: 'rgba(241, 250, 140, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/MTX-Upload',
    liveUrl: 'https://mtx-upload.emanuelvini.dev',
    badges: ['File Upload', 'Dashboard', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Management', value: 'Upload, renaming, and logical deletion' },
      { label: 'Distribution', value: 'Secure download link generation' },
      { label: 'Stack', value: 'Implementation using Next.js and Prisma' },
    ],
    year: 2026,
    updatedAt: '2026-03-16',
  },
  {
    id: 'portifolio-frontend',
    name: 'Portfolio Frontend',
    shortDesc: 'Previous architectural foundation of the corporate web portfolio.',
    longDesc:
      'Legacy version of the personal portfolio, utilized as a practical laboratory for user interface research, component structuring, and professional presentation. It served as the architectural foundation for the current online presence, strictly adhering to clean code guidelines and a distinct visual identity.',
    category: 'Web Products',
    tech: ['Next.js', 'TypeScript', 'React'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/portifolio-frontend',
    liveUrl: 'https://emanuelvini.dev',
    badges: ['Portfolio', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Application', value: 'Interface research and design' },
      { label: 'Stack', value: 'Developed utilizing Next.js and React' },
      { label: 'Evolution', value: 'Foundation for the current digital structure' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'random-uuid',
    name: 'Random UUID',
    shortDesc: 'TypeScript utility for universal identifier generation.',
    longDesc:
      'Minimalist module designed to increase productivity within the development ecosystem by providing standardized UUID generation. Integrated into the catalog as a proof of concept for optimized, reusable micro-tools completely decoupled from large infrastructures.',
    category: 'Developer Tools',
    tech: ['TypeScript'],
    color: 'var(--dracula-orange)',
    glowColor: 'rgba(255, 184, 108, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/random-uuid',
    liveUrl: 'https://random-uuid.emanuelvini.dev',
    badges: ['Utility', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Scope', value: 'Development infrastructure micro-utility' },
      { label: 'Core', value: '100% TypeScript implementation' },
    ],
    year: 2023,
    updatedAt: '2023-09-14',
  },
];

export const getProjects = (lang: Language): Project[] => {
  return lang === 'pt' ? projectsPt : projectsEn;
};

export const getCategories = (lang: Language): { key: ProjectCategory | 'all'; label: string; color: string }[] => {
  return lang === 'pt' ? [
    { key: 'all', label: 'Todos', color: 'var(--dracula-purple)' },
    { key: 'Financial Systems', label: 'Sistemas Financeiros', color: 'var(--dracula-cyan)' },
    { key: 'Developer Tools', label: 'Ferramentas de Desenvolvimento', color: 'var(--dracula-green)' },
    { key: 'Web Products', label: 'Produtos Web', color: 'var(--dracula-purple)' },
  ] : [
    { key: 'all', label: 'All', color: 'var(--dracula-purple)' },
    { key: 'Financial Systems', label: 'Financial Systems', color: 'var(--dracula-cyan)' },
    { key: 'Developer Tools', label: 'Developer Tools', color: 'var(--dracula-green)' },
    { key: 'Web Products', label: 'Web Products', color: 'var(--dracula-purple)' },
  ];
};
