import type { Language } from "@/i18n/dictionaries";
import type { ProjectCopy } from "./projects";

export const projectCopy: Record<Language, Record<string, ProjectCopy>> = {
  "pt": {
    "my-bet": {
      "name": "My Bet",
      "shortDesc": "Aplicação experimental de jogos com ledger, sessões Redis e administração configurável.",
      "longDesc": "O repositório implementa jogos individuais e ao vivo, estado Redis/SSE, autenticação, histórico financeiro e integrações de pagamento. Funções centrais de ledger e referências de idempotência organizam apostas e pagamentos. Há áreas de usuário, afiliados, suporte e administração, com configurações de aparência e idioma. A revisão conferiu o código; as capturas usam um ambiente local de demonstração. Isso não comprova autorização para operação financeira nem auditoria integral das regras.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Aplicação experimental de jogos com ledger, sessões Redis e administração configurável."
        }
      ]
    },
    "simple-bank": {
      "name": "Simple Bank",
      "shortDesc": "Simulação bancária web e mobile com transferências, recibos e ledger de dupla entrada.",
      "longDesc": "Aplicação de demonstração com dashboard, extrato, chaves de pagamento e transferências. O serviço de pagamentos grava débitos e créditos em uma transação Prisma, verifica saldo e usa uma chave de idempotência. Há registro de usuário, sessões Auth.js, recibos e recursos Gemini para análise e preenchimento de transferências. O cliente Expo consome a mesma API. É uma simulação com dados de demonstração, sem integração bancária real comprovada nesta revisão.",
      "highlights": [
        {
          "label": "Dados",
          "value": "Débito e crédito em transação Prisma"
        },
        {
          "label": "Fluxos",
          "value": "Transferência, extrato, chaves e recibos"
        },
        {
          "label": "Clientes",
          "value": "Next.js e Expo na mesma API"
        }
      ]
    },
    "cvm-runtime": {
      "name": "my-vm · máquina virtual",
      "shortDesc": "Máquina virtual em Rust com 26 registradores, framebuffer 1280 × 800 e dispositivos simulados.",
      "longDesc": "O runtime lê Assembly textual, resolve labels e executa instruções sobre registradores A–Z, pilha e RAM. A RAM possui 256 × 1024 × 1024 palavras u32, aproximadamente 1 GiB. Uma janela minifb exibe o framebuffer 1280 × 800; mouse, teclado e interrupções alimentam o sistema convidado. O processo roda no sistema hospedeiro e requer sessão gráfica. A execução local exibiu o desktop. Os cliques não abriram os aplicativos internos nesta revisão.",
      "highlights": [
        {
          "label": "Arquitetura",
          "value": "26 registradores u32 e cerca de 1 GiB de RAM"
        },
        {
          "label": "Interface",
          "value": "Framebuffer, primitivas de desenho, teclado e mouse"
        },
        {
          "label": "Papel",
          "value": "Executa o Assembly do compilador CVM"
        }
      ]
    },
    "cvm-compiler": {
      "name": "my-vm-compiler · linguagem CVM",
      "shortDesc": "Compilador Rust que expande imports CVM, gera IR e emite Assembly para my-vm.",
      "longDesc": "A gramática PEG com Pest lê fontes .cvm com sintaxe semelhante a C. O gerador transforma o programa em IR e o codegen emite Assembly. A etapa de otimização ainda devolve a IR sem alterações. A CLI grava o .ir junto ao fonte e o .asm no caminho escolhido. Há funções, controle de fluxo, structs, ponteiros e Assembly inline. Um teste de snapshot e um smoke de memória passaram; src/main.cvm do sistema também compilou. Isso não comprova correção integral da linguagem ou execução gráfica.",
      "highlights": [
        {
          "label": "Pipeline",
          "value": "Imports → Pest → IR → Assembly"
        },
        {
          "label": "Otimização",
          "value": "Etapa reservada; ainda sem transformações"
        },
        {
          "label": "Verificação",
          "value": "Dois testes passaram e o fonte do OS compilou"
        }
      ]
    },
    "apiflash": {
      "name": "apiFlash",
      "shortDesc": "Cliente HTTP com coleções, histórico, geração por IA e exportação de requisições.",
      "longDesc": "Workbench para montar requisições HTTP, editar headers e corpo, inspecionar respostas e gerar código. Coleções e histórico organizam o trabalho; recursos Gemini apoiam geração e análise. O proxy valida protocolos, resolve DNS e bloqueia endereços privados, retornando o IP resolvido para uso na conexão. Nesta revisão, 147 testes passaram e um teste dependente de DNS externo falhou. Essas verificações não representam uma auditoria completa de segurança.",
      "highlights": [
        {
          "label": "Workbench",
          "value": "Requisições, respostas e exportação"
        },
        {
          "label": "Organização",
          "value": "Coleções e histórico"
        },
        {
          "label": "Proxy",
          "value": "Validação de destino e bloqueio de IPs privados"
        }
      ]
    },
    "browia": {
      "name": "Browia",
      "shortDesc": "Extensão de navegador com agente IA, sessões persistentes e aprovação de ações.",
      "longDesc": "Extensão Manifest V3 com painel lateral de conversa. O código atual integra OpenRouter e Ollama, serialização do DOM, ferramentas de abas e páginas, orçamento de tokens e persistência de sessões. Ferramentas de interação passam por um fluxo de aprovação. Um documento offscreen mantém o processamento separado da interface. Depende das APIs do Chrome e de um provedor de modelo configurado; a visualização pelo Vite não equivale à extensão instalada.",
      "highlights": [
        {
          "label": "Providers",
          "value": "OpenRouter e Ollama"
        },
        {
          "label": "Ferramentas",
          "value": "Inspeção DOM, abas e ações com aprovação"
        },
        {
          "label": "Sessões",
          "value": "Histórico persistente e processamento offscreen"
        }
      ]
    },
    "lowvia": {
      "name": "Lowvia",
      "shortDesc": "Assistente Electron com chat, modelos locais, pesquisa web e relatórios.",
      "longDesc": "Aplicação desktop com conversas, seleção de modelos, configurações, notas de pesquisa e relatórios. Integra Ollama e OpenRouter. A pesquisa usa ferramentas de busca e leitura de páginas, com SearXNG gerenciado pelo processo principal. A interface renderiza Markdown, código e matemática. A execução completa depende dos serviços de pesquisa e dos modelos configurados; o modo local exige Ollama disponível.",
      "highlights": [
        {
          "label": "Desktop",
          "value": "Electron, React e estado Redux"
        },
        {
          "label": "Pesquisa",
          "value": "SearXNG, leitura de páginas e notas"
        },
        {
          "label": "Providers",
          "value": "Ollama e OpenRouter"
        }
      ]
    },
    "snippetvault": {
      "name": "SnippetVault",
      "shortDesc": "Biblioteca de snippets com coleções, versões, busca e compartilhamento.",
      "longDesc": "Aplicação Next.js para manter código reutilizável. O código inclui coleções, versões, importação e exportação, variáveis, busca, fork e controles de visibilidade. Auth.js associa os dados ao usuário; Prisma faz a persistência e Zod valida entradas. Há rotas IA para documentação e sugestões de testes. Na revisão local, 191 testes passaram. Capturas dos fluxos autenticados usam banco local e sessão de demonstração.",
      "highlights": [
        {
          "label": "Conhecimento",
          "value": "Snippets, coleções e versões"
        },
        {
          "label": "Compartilhamento",
          "value": "Visibilidade, links e forks"
        },
        {
          "label": "Qualidade",
          "value": "191 testes passaram na revisão local"
        }
      ]
    },
    "typedash": {
      "name": "TypeDash",
      "shortDesc": "Treino de digitação com WPM, precisão, histórico e ranking.",
      "longDesc": "Aplicação de treino de digitação com cálculo de WPM e precisão, tela de prática, dashboard e ranking. A lógica de métricas está separada da interface, com validação nas rotas de API e persistência de resultados no PostgreSQL via Prisma. Auth.js oferece login GitHub. Gráficos ajudam a acompanhar o histórico. Os 113 testes locais passaram; não há benchmark de carga anexado para justificar alegações de alta performance.",
      "highlights": [
        {
          "label": "Prática",
          "value": "WPM e precisão durante o teste"
        },
        {
          "label": "Histórico",
          "value": "Dashboard e gráficos com Recharts"
        },
        {
          "label": "Qualidade",
          "value": "113 testes passaram na revisão local"
        }
      ]
    },
    "ryzen-shop-bot": {
      "name": "RyzenShopBot",
      "shortDesc": "Bot Discord em TypeScript com tickets, economia e moderação.",
      "longDesc": "Bot Discord em TypeScript com comandos de tickets, economia, moderação e informações. Registry e router separam a descoberta e execução de comandos; serviços cuidam de tickets e saldo. Há detecção anti-raid e rotação de presença. O código requer token e um servidor Discord de teste para execução; nenhuma comunidade real foi acionada nesta revisão.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Bot Discord em TypeScript com tickets, economia e moderação."
        },
        {
          "label": "Contexto",
          "value": "Projeto histórico; execução isolada pendente"
        }
      ]
    },
    "ryzen-hosting": {
      "name": "RyzenHosting Site",
      "shortDesc": "Site histórico de hosting com planos, preços e componentes React.",
      "longDesc": "Site histórico para um serviço de hosting, construído com Next.js 12, React 17 e Chakra UI. Organiza apresentação, planos, preços, recursos e depoimentos em componentes. O conteúdo comercial e as métricas exibidas pertencem à versão histórica; esta revisão não comprova disponibilidade atual do serviço nem os números de operação.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Site histórico de hosting com planos, preços e componentes React."
        },
        {
          "label": "Contexto",
          "value": "Projeto histórico; execução isolada pendente"
        }
      ]
    },
    "dv-duels": {
      "name": "DVDuels",
      "shortDesc": "Plugin Java de duelos Minecraft com arenas, kits e estatísticas em MySQL.",
      "longDesc": "Plugin Java de duelos para Spigot, com convites, aceitação, arenas e kits configuráveis. Managers cuidam do ciclo da partida; listeners tratam eventos e o repositório persiste estatísticas em MySQL com HikariCP. Configurações e mensagens ficam em YAML. A demonstração requer servidor Minecraft e banco de teste; compatibilidade atual precisa ser validada na versão de servidor escolhida.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Plugin Java de duelos Minecraft com arenas, kits e estatísticas em MySQL."
        },
        {
          "label": "Contexto",
          "value": "Projeto histórico; execução isolada pendente"
        }
      ]
    },
    "portifolio-frontend": {
      "name": "Portfolio Frontend",
      "shortDesc": "Portfólio histórico React publicado como arquivos estáticos no GitHub Pages.",
      "longDesc": "O repositório preserva a distribuição compilada de uma interface React: HTML, bundles JavaScript/CSS, mapas de código e imagens de projetos. É uma versão anterior da apresentação pessoal, útil para acompanhar a evolução visual. O código-fonte original e o ambiente de build não estão nesse repositório.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Portfólio histórico React publicado como arquivos estáticos no GitHub Pages."
        }
      ]
    },
    "z-discord-core": {
      "name": "zDiscordCore",
      "shortDesc": "Plugin Java que vincula contas Minecraft e Discord com comandos e persistência SQL.",
      "longDesc": "O código combina plugin Spigot e bot Discord. Comandos de vinculação e APIs relacionam jogadores às contas Discord; um provider SQL cuida da persistência. Listeners tratam mensagens e eventos do servidor. É um projeto legado: uma execução integrada exige servidor Minecraft e comunidade Discord de teste, além das dependências da época.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Plugin Java que vincula contas Minecraft e Discord com comandos e persistência SQL."
        }
      ]
    },
    "comuni-mine-bot": {
      "name": "ComuniMineBot",
      "shortDesc": "Bot Discord em TypeScript com moderação, música, economia e comandos de comunidade.",
      "longDesc": "A árvore de comandos separa administração, informação, moderação, música, diversão e economia. Classes de comando e utilitários organizam a execução, incluindo fila de música, saldo, pagamentos e recompensas diárias. É código histórico com dependências antigas; as integrações não foram acionadas em contas ou comunidades reais durante a revisão.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Bot Discord em TypeScript com moderação, música, economia e comandos de comunidade."
        }
      ]
    },
    "minecraft-feast-bot": {
      "name": "MinecraftFeastBot",
      "shortDesc": "Bot Discord JavaScript com slash commands de moderação e status de servidor Minecraft.",
      "longDesc": "O bot organiza slash commands para banimento, expulsão, limpeza, mute, anúncios, sugestões e revisão. O comando de status consulta uma API pública de servidores Minecraft. Um script registra comandos no Discord. A revisão conferiu o código sem registrar comandos ou enviar mensagens em uma comunidade real.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Bot Discord JavaScript com slash commands de moderação e status de servidor Minecraft."
        }
      ]
    },
    "advanced-sql": {
      "name": "AdvancedSQL",
      "shortDesc": "Biblioteca Kotlin com conexões MySQL/SQLite, prepared statements e adapters de resultados.",
      "longDesc": "Implementações MySQL e SQLite compartilham uma interface de banco. DatabaseExecutor fornece selectOne, selectMany e update com PreparedStatement; adapters convertem ResultSet em objetos. O repositório inclui testes de SQLite e adapter. É uma biblioteca JDBC histórica, não um ORM completo ou uma implementação comprovada de pool de conexões.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Biblioteca Kotlin com conexões MySQL/SQLite, prepared statements e adapters de resultados."
        }
      ]
    },
    "z-manutencao": {
      "name": "zManutencao",
      "shortDesc": "Plugin Bukkit Java com modo de manutenção e exceção de acesso por permissão.",
      "longDesc": "Um comando alterna o estado de manutenção. O listener de entrada remove jogadores sem a permissão configurada quando o modo está ativo; mensagens e permissões vêm da configuração. É uma implementação pequena e histórica, dependente de um servidor Bukkit compatível.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Plugin Bukkit Java com modo de manutenção e exceção de acesso por permissão."
        }
      ]
    },
    "z-silk2": {
      "name": "zSilk2",
      "shortDesc": "Plugin Bukkit Java que define blocos quebráveis e drops por nível de Silk Touch.",
      "longDesc": "O listener de BlockDamageEvent verifica o nível configurado de Silk Touch e uma lista de materiais. Há tratamento específico para barreiras e molduras de portal, além de comandos de item e recarga. O código usa espera síncrona no evento e depende das APIs Bukkit antigas; o case apresenta a implementação histórica e suas limitações.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Plugin Bukkit Java que define blocos quebráveis e drops por nível de Silk Touch."
        }
      ]
    },
    "multi-server-api": {
      "name": "MultiServer-API",
      "shortDesc": "API Java com interfaces compartilhadas e wrappers Bukkit para jogadores, mundo e servidor.",
      "longDesc": "Os módulos shared e bukkit separam contratos de plataforma e implementação. Interfaces representam mundo, localização, jogador, modo de jogo, servidor e plugin manager; wrappers adaptam objetos Bukkit a esses contratos. O código revisado demonstra a abstração Bukkit, sem comprovar que todas as outras plataformas estejam implementadas.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "API Java com interfaces compartilhadas e wrappers Bukkit para jogadores, mundo e servidor."
        }
      ]
    },
    "swiss-learn": {
      "name": "SwissLearn",
      "shortDesc": "Aprendizado de suíço-alemão com sessões diárias, revisão espaçada e cliente mobile.",
      "longDesc": "Aplicação para estudar vocabulário e frases de Züridütsch, com interface PT/EN/DE. O código implementa trilha de aulas, sessões retomáveis, áudio, revisão FSRS, escrita, conversação, progresso e ranking. Transações PostgreSQL organizam recompensas e atividades; uma fila processa feedback de escrita. Conteúdo tem revisão editorial. O cliente Expo reutiliza o backend. Os 82 testes unitários locais passaram; piloto com alunos e publicação atual não foram comprovados nesta revisão.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Aprendizado de suíço-alemão com sessões diárias, revisão espaçada e cliente mobile."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, Prisma, PostgreSQL, Auth.js, Expo, FSRS"
        }
      ]
    },
    "termop": {
      "name": "Termop",
      "shortDesc": "Agente de terminal para modelos locais, com ferramentas de arquivos e servidor MCP.",
      "longDesc": "CLI com interface React/Ink para conversar com modelos do LM Studio. Separa loop de agente, prompts, gestão de modelos e ferramentas de filesystem. Expõe ferramentas por MCP stdio e limita o volume de contexto. Requer o servidor local do LM Studio e modelos instalados. O typecheck passou; desempenho em tarefas reais ainda precisa de avaliação.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Agente de terminal para modelos locais, com ferramentas de arquivos e servidor MCP."
        },
        {
          "label": "Stack",
          "value": "TypeScript, Ink, React, LM Studio, MCP"
        }
      ]
    },
    "russian-alphabet": {
      "name": "Russian Alphabet",
      "shortDesc": "Treino de transliteração cirílica com referência de alfabeto e estatísticas de sessão.",
      "longDesc": "Aplicação React que gera sequências semelhantes a palavras russas e pede sua transliteração para o alfabeto latino. O verificador aceita alternativas de escrita; a interface oferece referência do alfabeto, feedback, sequência de acertos e tema claro/escuro. O gerador produz pseudopalavras, não um catálogo de vocabulário real.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Treino de transliteração cirílica com referência de alfabeto e estatísticas de sessão."
        },
        {
          "label": "Stack",
          "value": "React, TypeScript, Vite, Tailwind CSS"
        }
      ]
    },
    "deadlatch": {
      "name": "Deadlatch",
      "shortDesc": "Protótipo de interface para um serviço de gatilhos e liberação de informações.",
      "longDesc": "Landing page, documentação e estrutura de dashboard com áreas de switches, chaves API e configurações. As camadas de domínio e persistência ainda contêm scaffolding. Criptografia e execução dos gatilhos não estão implementadas no código revisado; a proposta do produto deve ser distinguida das telas já construídas.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Protótipo de interface para um serviço de gatilhos e liberação de informações."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, Prisma"
        }
      ]
    },
    "chess-mistery": {
      "name": "Chess Mystery",
      "shortDesc": "Laboratório de xadrez com tabuleiro web, visualização neural e backend experimental.",
      "longDesc": "Frontend com partidas e visualização neural, acompanhado de uma API FastAPI. O código inclui rede de política PyTorch, máscara de movimentos legais, inferência, treinamento e checkpoints. A configuração padrão seleciona serviços mock; a engine neural e o oráculo Stockfish são opcionais. Não há resultado de força de jogo ou modelo treinado validado anexado à revisão.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Laboratório de xadrez com tabuleiro web, visualização neural e backend experimental."
        },
        {
          "label": "Stack",
          "value": "Next.js, Python, FastAPI, PyTorch, python-chess"
        }
      ]
    },
    "brainer": {
      "name": "Brainer",
      "shortDesc": "Experimento de grafo neural com roteamento soft no treino e decisão hard na inferência.",
      "longDesc": "O código V1 usa neurônios com candidatos de próximo passo, probabilidade de parada e combinação diferenciável de estados no treino. A inferência escolhe um caminho discreto. A demonstração usa dados sintéticos e métricas de passos. O README ainda descreve V0, por isso a descrição foi baseada no código atual. O build release passou. Uma execução local em CPU produziu os caminhos iniciais e chegou à época 60 antes do limite de 180 segundos; as 300 épocas e a demonstração final não foram verificadas.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Experimento de grafo neural com roteamento soft no treino e decisão hard na inferência."
        },
        {
          "label": "Stack",
          "value": "Rust, Candle, Neural Networks"
        }
      ]
    },
    "kotlin-vortey": {
      "name": "KotlinVortey",
      "shortDesc": "API de eventos com fila em memória, listeners e entrega HTTP para consumidores.",
      "longDesc": "Servidor Ktor com endpoint POST /event. Registra consumidores, publica eventos em uma fila baseada em cache e dispara listeners que fazem chamadas HTTP. O EventBus suporta filtros e listeners de execução única. O armazenamento é em memória; persistência durável, autenticação e garantias de entrega não foram demonstradas.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "API de eventos com fila em memória, listeners e entrega HTTP para consumidores."
        },
        {
          "label": "Stack",
          "value": "Kotlin, Ktor, Caffeine, Gradle"
        }
      ]
    },
    "my-game-papers": {
      "name": "My Game Papers",
      "shortDesc": "Aplicativo desktop de bingo com cartelas, sorteio, QR codes e histórico local.",
      "longDesc": "Interface Electron/React com início, cartelas, geração, jogo, histórico e configurações. As regras de sorteio e conferência ficam em funções de domínio separadas; hooks controlam cartelas, áudio e rodadas. QR codes apoiam geração e leitura de cartelas. Os dados e ajustes ficam armazenados localmente. O README padrão não descrevia essas funcionalidades.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Aplicativo desktop de bingo com cartelas, sorteio, QR codes e histórico local."
        },
        {
          "label": "Stack",
          "value": "Electron, React, TypeScript, QR Code"
        }
      ]
    },
    "agentics": {
      "name": "Agentics",
      "shortDesc": "Orquestração experimental de agentes com terminal, ferramentas e painel WebSocket.",
      "longDesc": "Loop Python que coordena conversas e ferramentas de agentes, com handlers de arquivos, processos, web e mensagens. Um frontend Next.js acompanha agentes e respostas em streaming via WebSocket. Provedores Gemini e Ollama são configuráveis. O projeto de login aninhado é um laboratório associado, não outro produto validado. A execução depende de provedores e servidor WebSocket.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Orquestração experimental de agentes com terminal, ferramentas e painel WebSocket."
        },
        {
          "label": "Stack",
          "value": "Python, Next.js, WebSocket, Ollama, Google Gemini"
        }
      ]
    },
    "lomaw": {
      "name": "Lomaw",
      "shortDesc": "Laboratório Rust de GGUF, download de modelos e operações matriciais.",
      "longDesc": "CLI com comandos de download e execução, leitura GGUF com mmap e módulos de operações matriciais escalares e AVX2. O caminho de conversa revisado usa estruturas de modelo e tokenização simuladas; há fallbacks mock no carregador. O projeto demonstra componentes de infraestrutura, mas não comprova inferência completa de pesos de um modelo real.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Laboratório Rust de GGUF, download de modelos e operações matriciais."
        },
        {
          "label": "Stack",
          "value": "Rust, GGUF, AVX2, Tokio"
        }
      ]
    },
    "my-llm-executor": {
      "name": "My LLM Executor",
      "shortDesc": "Experimento de treinamento e inferência de modelo de linguagem com Rust e Candle.",
      "longDesc": "Biblioteca neural e binários para treino, construção de tokenizer e inferência. O caminho de inferência usa Candle/CUDA, tokenizer local e pesos safetensors, com geração autoregressiva. Requer GPU compatível, dados e pesos específicos. A presença do código não comprova qualidade de geração, benchmark ou reprodução do treinamento.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Experimento de treinamento e inferência de modelo de linguagem com Rust e Candle."
        },
        {
          "label": "Stack",
          "value": "Rust, Candle, CUDA, Tokenizers"
        }
      ]
    },
    "my-codec": {
      "name": "My Codec",
      "shortDesc": "Estrutura de CLI Rust com comandos encode e decode ainda demonstrativos.",
      "longDesc": "O executável usa Clap para interpretar argumentos de encode e decode. Os handlers atuais apenas imprimem entrada e saída; não codificam nem decodificam vídeo. Há um arquivo de módulo de encoder sem implementação conectada ao fluxo principal. É um scaffold de ferramenta, não um codec funcional.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Estrutura de CLI Rust com comandos encode e decode ainda demonstrativos."
        },
        {
          "label": "Stack",
          "value": "Rust, Clap"
        }
      ]
    },
    "compound-interest-calc": {
      "name": "Compound Interest Calc",
      "shortDesc": "Base Expo inicial para um aplicativo; cálculo de juros ainda não implementado.",
      "longDesc": "O código disponível contém a tela padrão Expo com StatusBar e estilos básicos. Ainda não há formulário, cálculo de juros ou gráficos. O nome do diretório registra a intenção inicial, enquanto o estágio exibido corresponde à implementação encontrada.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Base Expo inicial para um aplicativo; cálculo de juros ainda não implementado."
        },
        {
          "label": "Stack",
          "value": "Expo, React Native, TypeScript"
        }
      ]
    },
    "office-tools": {
      "name": "Office Tools",
      "shortDesc": "Base Next.js inicial; ferramentas de escritório ainda não implementadas.",
      "longDesc": "A página revisada é o template create-next-app com links de documentação e deploy. Não foram encontradas ferramentas de escritório implementadas. A entrada preserva o projeto como scaffold e não apresenta o template como aplicação concluída.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Base Next.js inicial; ferramentas de escritório ainda não implementadas."
        },
        {
          "label": "Stack",
          "value": "Next.js, React, TypeScript"
        }
      ]
    },
    "electron-app": {
      "name": "Electron App — base Vite",
      "shortDesc": "Template Vite e TypeScript com contador; integração Electron não encontrada.",
      "longDesc": "Apesar do nome, o manifesto e o código revisados são uma base Vite/TypeScript. A tela contém um contador e links do template. Não há dependência ou processo principal Electron. É uma base inicial de interface, sem funcionalidades desktop comprovadas.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Template Vite e TypeScript com contador; integração Electron não encontrada."
        },
        {
          "label": "Stack",
          "value": "Vite, TypeScript"
        }
      ]
    },
    "github-follow-bot": {
      "name": "GitHub Follow Bot",
      "shortDesc": "CLI experimental para percorrer seguidores e automatizar ações na API GitHub.",
      "longDesc": "Cliente Octokit com autenticação, busca de seguidores, fila e limite de ações. O comando pode alterar relações de seguidores em uma conta real. A revisão ficou restrita ao código; nenhuma ação em outras contas foi executada. Não há suíte de testes implementada no script test do projeto.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "CLI experimental para percorrer seguidores e automatizar ações na API GitHub."
        },
        {
          "label": "Stack",
          "value": "TypeScript, Octokit, Commander"
        }
      ]
    },
    "portifolio": {
      "name": "Portfolio — Emanuel Missena",
      "shortDesc": "Portfólio trilíngue com cases, galerias e uma seção dedicada à linguagem, runtime e sistema my-vm.",
      "longDesc": "Este site reúne trajetória, tecnologias e projetos em português, inglês e alemão. O catálogo centraliza metadados técnicos e mantém textos traduzidos. Cada case distingue aplicação, experimento, legado ou scaffold; galerias mostram as imagens disponíveis. URLs de projetos existentes foram preservadas. Fontes locais permitem build sem depender do Google Fonts. Uma seção exclusiva explica o fluxo CVM → IR → Assembly e o papel da VM, do desktop e do compilador Python legado.",
      "highlights": [
        {
          "label": "Implementação",
          "value": "Portfólio trilíngue com catálogo de projetos, cases e galerias de telas."
        },
        {
          "label": "Stack",
          "value": "Next.js, React, TypeScript, Tailwind CSS"
        }
      ]
    },
    "my-vm-os": {
      "name": "my-vm-os · desktop em CVM",
      "shortDesc": "Desktop experimental com janelas, terminal, editor, calculadora e arquivos na RAM da VM.",
      "longDesc": "O ponto de entrada src/main.cvm importa drivers gráficos e de teclado, VFS, gerenciador de janelas, desktop, barra de tarefas e quatro aplicativos. Rotinas CVM usam Assembly inline para desenhar, receber entrada e processar interrupções simuladas. O loop controla foco e redesenho. O VFS armazena até 32 entradas em RAM, sem persistência entre execuções. O fonte compilou com a toolchain atual. Não há isolamento de processos ou escalonador preemptivo comprovado. A execução local exibiu o desktop. Os cliques não abriram os aplicativos internos nesta revisão.",
      "highlights": [
        {
          "label": "Aplicativos",
          "value": "Terminal, editor, calculadora e explorador"
        },
        {
          "label": "Arquivos",
          "value": "VFS em RAM; até 32 entradas e sem persistência"
        },
        {
          "label": "Entrada",
          "value": "Mouse, teclado e interrupções simuladas"
        }
      ]
    },
    "my-vm-legacy-compiler": {
      "name": "old_compiler · frontend Python legado",
      "shortDesc": "Protótipo histórico que usa o AST de Python para emitir Assembly de uma versão anterior da VM.",
      "longDesc": "Antes da linguagem CVM, este frontend compilava um subconjunto de Python. Um linker descobre módulos locais; visitors, contexto de registradores e emissor produzem Assembly. Há funções, listas, strings, imports e controle de fluxo. A saída pode usar WRITESTR, ausente do parser atual da VM. Dos 126 testes descobertos, 106 passaram, 2 falharam na representação de labels e 18 foram ignorados; os testes de execução dependem de caminhos antigos. Não participa do pipeline CVM atual. O código histórico está disponível em um repositório público no GitHub.",
      "highlights": [
        {
          "label": "Origem",
          "value": "AST Python, linker e visitors"
        },
        {
          "label": "Compatibilidade",
          "value": "ISA anterior; fora do pipeline CVM"
        },
        {
          "label": "Testes",
          "value": "106 passaram, 2 falharam, 18 ignorados"
        }
      ]
    }
  },
  "en": {
    "my-bet": {
      "name": "My Bet",
      "shortDesc": "Experimental game application with a ledger, Redis sessions and configurable administration.",
      "longDesc": "The repository implements individual and live games, Redis/SSE state, authentication, financial history and payment integrations. Central ledger functions and idempotency references organize bets and payouts. User, affiliate, support and administration areas include appearance and language configuration. Source was reviewed; screenshots use a local demonstration environment. This does not establish authorization for financial operation or a complete audit of game rules.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Experimental game application with a ledger, Redis sessions and configurable administration."
        }
      ]
    },
    "simple-bank": {
      "name": "Simple Bank",
      "shortDesc": "Web and mobile banking simulation with transfers, receipts and a double-entry ledger.",
      "longDesc": "Demo application with a dashboard, transaction history, payment keys and transfers. The payment service records debit and credit entries in a Prisma transaction, checks balance and uses an idempotency key. User registration, Auth.js sessions, receipts and Gemini features support analysis and transfer form filling. An Expo client consumes the same API. This is a simulation with demo data; this review does not establish a real banking integration.",
      "highlights": [
        {
          "label": "Data",
          "value": "Debit and credit in a Prisma transaction"
        },
        {
          "label": "Flows",
          "value": "Transfers, history, payment keys and receipts"
        },
        {
          "label": "Clients",
          "value": "Next.js and Expo on the same API"
        }
      ]
    },
    "cvm-runtime": {
      "name": "my-vm · virtual machine",
      "shortDesc": "Rust virtual machine with 26 registers, a 1280 × 800 framebuffer and simulated devices.",
      "longDesc": "The runtime reads textual Assembly, resolves labels and executes instructions over A–Z registers, a stack and RAM. RAM contains 256 × 1024 × 1024 u32 words, approximately 1 GiB. A minifb window displays a 1280 × 800 framebuffer; mouse, keyboard and interrupts drive the guest system. The process runs on the host and requires a graphical session. Local execution displayed the desktop in an isolated session. Clicks did not open its internal applications during this review.",
      "highlights": [
        {
          "label": "Architecture",
          "value": "26 u32 registers and approximately 1 GiB RAM"
        },
        {
          "label": "Interface",
          "value": "Framebuffer, drawing primitives, keyboard and mouse"
        },
        {
          "label": "Role",
          "value": "Runs Assembly generated by the CVM compiler"
        }
      ]
    },
    "cvm-compiler": {
      "name": "my-vm-compiler · CVM language",
      "shortDesc": "Rust compiler that expands CVM imports, generates IR and emits Assembly for my-vm.",
      "longDesc": "A Pest PEG grammar reads .cvm sources with C-like syntax. The generator builds IR and codegen emits Assembly. The optimization stage currently returns IR unchanged. The CLI writes .ir beside the source and .asm to the selected path. Features include functions, control flow, structs, pointers and inline Assembly. One snapshot test and one memory smoke test passed; the OS src/main.cvm also compiled. This does not establish full language correctness or graphical execution.",
      "highlights": [
        {
          "label": "Pipeline",
          "value": "Imports → Pest → IR → Assembly"
        },
        {
          "label": "Optimization",
          "value": "Reserved stage; no transformations yet"
        },
        {
          "label": "Checks",
          "value": "Two tests passed and the OS source compiled"
        }
      ]
    },
    "apiflash": {
      "name": "apiFlash",
      "shortDesc": "HTTP client with collections, history, AI generation and request export.",
      "longDesc": "Workbench for composing HTTP requests, editing headers and bodies, inspecting responses and generating code. Collections and history organize requests; Gemini supports generation and analysis. The proxy validates protocols, resolves DNS and rejects private addresses, returning the resolved IP for the connection. During this review, 147 tests passed and one external-DNS-dependent test failed. These checks do not constitute a complete security audit.",
      "highlights": [
        {
          "label": "Workbench",
          "value": "Requests, responses and export"
        },
        {
          "label": "Organization",
          "value": "Collections and history"
        },
        {
          "label": "Proxy",
          "value": "Destination validation and private-IP blocking"
        }
      ]
    },
    "browia": {
      "name": "Browia",
      "shortDesc": "Browser extension with an AI agent, persistent sessions and action approval.",
      "longDesc": "Manifest V3 extension with a conversational side panel. Current code integrates OpenRouter and Ollama, DOM serialization, tab and page tools, token budgeting and session persistence. Interaction tools use an approval flow. An offscreen document separates processing from the interface. It requires Chrome APIs and a configured model provider; the Vite preview is not equivalent to the installed extension.",
      "highlights": [
        {
          "label": "Providers",
          "value": "OpenRouter and Ollama"
        },
        {
          "label": "Tools",
          "value": "DOM inspection, tabs and approved actions"
        },
        {
          "label": "Sessions",
          "value": "Persistent history and offscreen processing"
        }
      ]
    },
    "lowvia": {
      "name": "Lowvia",
      "shortDesc": "Electron assistant with chat, local models, web research and reports.",
      "longDesc": "Desktop application with conversations, model selection, settings, research notes and reports. It integrates Ollama and OpenRouter. Research uses search and page-reading tools, with SearXNG managed by the main process. The interface renders Markdown, code and mathematics. Full execution requires configured research services and models; local mode requires Ollama.",
      "highlights": [
        {
          "label": "Desktop",
          "value": "Electron, React and Redux state"
        },
        {
          "label": "Research",
          "value": "SearXNG, page reading and notes"
        },
        {
          "label": "Providers",
          "value": "Ollama and OpenRouter"
        }
      ]
    },
    "snippetvault": {
      "name": "SnippetVault",
      "shortDesc": "Snippet library with collections, versions, search and sharing.",
      "longDesc": "Next.js application for reusable code. The code includes collections, versions, import/export, variables, search, forks and visibility controls. Auth.js associates data with users; Prisma persists it and Zod validates input. AI routes support documentation and test suggestions. The local review passed 191 tests. Capturing authenticated flows still requires execution with a database and a demo session.",
      "highlights": [
        {
          "label": "Knowledge",
          "value": "Snippets, collections and versions"
        },
        {
          "label": "Sharing",
          "value": "Visibility, links and forks"
        },
        {
          "label": "Quality",
          "value": "191 tests passed in the local review"
        }
      ]
    },
    "typedash": {
      "name": "TypeDash",
      "shortDesc": "Typing practice with WPM, accuracy, history and ranking.",
      "longDesc": "Typing practice application with WPM and accuracy calculation, a practice screen, dashboard and ranking. Metric logic is separate from the interface, with API validation and PostgreSQL persistence through Prisma. Auth.js provides GitHub login. Charts show historical results. All 113 local tests passed; no attached load benchmark establishes a high-performance claim.",
      "highlights": [
        {
          "label": "Practice",
          "value": "WPM and accuracy during the test"
        },
        {
          "label": "History",
          "value": "Dashboard and Recharts charts"
        },
        {
          "label": "Quality",
          "value": "113 tests passed in the local review"
        }
      ]
    },
    "ryzen-shop-bot": {
      "name": "RyzenShopBot",
      "shortDesc": "TypeScript Discord bot with tickets, economy and moderation.",
      "longDesc": "TypeScript Discord bot with ticket, economy, moderation and information commands. Registry and router separate command discovery and execution; services manage tickets and balances. It includes anti-raid detection and presence rotation. Execution requires a token and a test Discord server; no real community was contacted during this review.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "TypeScript Discord bot with tickets, economy and moderation."
        },
        {
          "label": "Context",
          "value": "Historical project; isolated execution pending"
        }
      ]
    },
    "ryzen-hosting": {
      "name": "RyzenHosting Site",
      "shortDesc": "Historical hosting website with plans, pricing and React components.",
      "longDesc": "Historical hosting-service website built with Next.js 12, React 17 and Chakra UI. Components organize the introduction, plans, pricing, features and testimonials. Commercial content and displayed metrics belong to the historical version; this review does not establish current service availability or operational figures.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Historical hosting website with plans, pricing and React components."
        },
        {
          "label": "Context",
          "value": "Historical project; isolated execution pending"
        }
      ]
    },
    "dv-duels": {
      "name": "DVDuels",
      "shortDesc": "Java Minecraft duel plugin with arenas, kits and MySQL statistics.",
      "longDesc": "Java duel plugin for Spigot with invitations, acceptance, arenas and configurable kits. Managers handle match lifecycle; listeners process events and a repository persists MySQL statistics using HikariCP. Configuration and messages use YAML. Demonstration requires a Minecraft server and a test database; compatibility needs checking on the chosen server version.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Java Minecraft duel plugin with arenas, kits and MySQL statistics."
        },
        {
          "label": "Context",
          "value": "Historical project; isolated execution pending"
        }
      ]
    },
    "portifolio-frontend": {
      "name": "Portfolio Frontend",
      "shortDesc": "Historical React portfolio distributed as static files for GitHub Pages.",
      "longDesc": "The repository preserves a compiled React interface: HTML, JavaScript/CSS bundles, source maps and project images. It is an earlier personal presentation useful for tracking visual development. Original application sources and the build environment are absent from this repository.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Historical React portfolio distributed as static files for GitHub Pages."
        }
      ]
    },
    "z-discord-core": {
      "name": "zDiscordCore",
      "shortDesc": "Java plugin linking Minecraft and Discord accounts through commands and SQL persistence.",
      "longDesc": "The code combines a Spigot plugin and a Discord bot. Linking commands and APIs associate players with Discord accounts; a SQL provider handles persistence. Listeners process messages and server events. This legacy project requires a test Minecraft server, Discord community and compatible dependencies for integrated execution.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Java plugin linking Minecraft and Discord accounts through commands and SQL persistence."
        }
      ]
    },
    "comuni-mine-bot": {
      "name": "ComuniMineBot",
      "shortDesc": "TypeScript Discord bot with moderation, music, economy and community commands.",
      "longDesc": "Command groups separate administration, information, moderation, music, entertainment and economy. Command classes and utilities organize execution, including music queues, balances, payments and daily rewards. This is historical code with older dependencies; integrations were not invoked against real accounts or communities during review.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "TypeScript Discord bot with moderation, music, economy and community commands."
        }
      ]
    },
    "minecraft-feast-bot": {
      "name": "MinecraftFeastBot",
      "shortDesc": "JavaScript Discord bot with moderation slash commands and Minecraft server status.",
      "longDesc": "The bot organizes slash commands for bans, kicks, clearing, mute, announcements, suggestions and review. Its status command queries a public Minecraft server API. A separate script registers Discord commands. Source review did not register commands or send messages to a real community.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "JavaScript Discord bot with moderation slash commands and Minecraft server status."
        }
      ]
    },
    "advanced-sql": {
      "name": "AdvancedSQL",
      "shortDesc": "Kotlin library with MySQL/SQLite connections, prepared statements and result adapters.",
      "longDesc": "MySQL and SQLite implementations share a database interface. DatabaseExecutor exposes selectOne, selectMany and update through PreparedStatement; adapters map ResultSet data to objects. The repository includes SQLite and adapter tests. This historical JDBC library is not a complete ORM or a verified connection-pool implementation.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Kotlin library with MySQL/SQLite connections, prepared statements and result adapters."
        }
      ]
    },
    "z-manutencao": {
      "name": "zManutencao",
      "shortDesc": "Java Bukkit plugin with maintenance mode and permission-based access exceptions.",
      "longDesc": "A command toggles maintenance state. The join listener removes players without the configured permission while the mode is active; messages and permissions come from configuration. This small historical implementation depends on a compatible Bukkit server.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Java Bukkit plugin with maintenance mode and permission-based access exceptions."
        }
      ]
    },
    "z-silk2": {
      "name": "zSilk2",
      "shortDesc": "Java Bukkit plugin controlling breakable blocks and drops by Silk Touch level.",
      "longDesc": "A BlockDamageEvent listener checks the configured Silk Touch level and material list. Barriers and portal frames receive specific handling; item and reload commands are also present. The code uses a synchronous delay in the event and older Bukkit APIs. The case records the historical implementation and its limitations.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Java Bukkit plugin controlling breakable blocks and drops by Silk Touch level."
        }
      ]
    },
    "multi-server-api": {
      "name": "MultiServer-API",
      "shortDesc": "Java API with shared interfaces and Bukkit wrappers for players, worlds and servers.",
      "longDesc": "Shared and Bukkit modules separate platform contracts from implementation. Interfaces represent worlds, locations, players, game modes, servers and plugin managers; wrappers adapt Bukkit objects to these contracts. Reviewed code demonstrates the Bukkit abstraction without establishing implementations for every other platform.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Java API with shared interfaces and Bukkit wrappers for players, worlds and servers."
        }
      ]
    },
    "swiss-learn": {
      "name": "SwissLearn",
      "shortDesc": "Swiss German learning with daily sessions, spaced repetition and a mobile client.",
      "longDesc": "Application for studying Züridütsch vocabulary and phrases with PT/EN/DE interfaces. The code implements lesson paths, resumable sessions, audio, FSRS review, writing, conversation, progress and ranking. PostgreSQL transactions organize rewards and activities; a queue processes writing feedback. Content has editorial review. An Expo client reuses the backend. All 82 local unit tests passed; learner pilot results and current deployment were not established by this review.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Swiss German learning with daily sessions, spaced repetition and a mobile client."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, Prisma, PostgreSQL, Auth.js, Expo, FSRS"
        }
      ]
    },
    "termop": {
      "name": "Termop",
      "shortDesc": "Terminal agent for local models, with file tools and an MCP server.",
      "longDesc": "CLI with a React/Ink interface for LM Studio models. It separates the agent loop, prompts, model management and filesystem tools. It exposes tools through MCP stdio and bounds context volume. A local LM Studio server and installed models are required. Typecheck passed; performance on real tasks still needs evaluation.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Terminal agent for local models, with file tools and an MCP server."
        },
        {
          "label": "Stack",
          "value": "TypeScript, Ink, React, LM Studio, MCP"
        }
      ]
    },
    "russian-alphabet": {
      "name": "Russian Alphabet",
      "shortDesc": "Cyrillic transliteration practice with an alphabet reference and session statistics.",
      "longDesc": "React application generating Russian-like sequences for Latin transliteration practice. The checker accepts alternative spellings; the interface provides an alphabet reference, feedback, streak tracking and light/dark themes. The generator produces pseudowords rather than a real vocabulary catalog.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Cyrillic transliteration practice with an alphabet reference and session statistics."
        },
        {
          "label": "Stack",
          "value": "React, TypeScript, Vite, Tailwind CSS"
        }
      ]
    },
    "deadlatch": {
      "name": "Deadlatch",
      "shortDesc": "Interface prototype for a trigger-based information release service.",
      "longDesc": "Landing page, documentation and dashboard structure with switches, API keys and settings. Domain and persistence layers still contain scaffolding. Encryption and trigger execution are not implemented in the reviewed code; the product proposal is distinct from the screens already built.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Interface prototype for a trigger-based information release service."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, Prisma"
        }
      ]
    },
    "chess-mistery": {
      "name": "Chess Mystery",
      "shortDesc": "Chess lab with a web board, neural visualization and an experimental backend.",
      "longDesc": "Frontend with games and neural visualization, accompanied by a FastAPI API. Code includes a PyTorch policy network, legal-move masking, inference, training and checkpoints. Default configuration selects mock services; the neural engine and Stockfish oracle are optional. No validated trained model or playing-strength result is attached to this review.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Chess lab with a web board, neural visualization and an experimental backend."
        },
        {
          "label": "Stack",
          "value": "Next.js, Python, FastAPI, PyTorch, python-chess"
        }
      ]
    },
    "brainer": {
      "name": "Brainer",
      "shortDesc": "Neural graph experiment with soft training routes and hard inference decisions.",
      "longDesc": "V1 code uses neurons with next-step candidates, stopping probabilities and differentiable state combinations during training. Inference chooses a discrete path. The demo uses synthetic data and step metrics. The README still describes V0, so this description follows current code. The release build passed. A local CPU run produced initial routing paths and reached epoch 60 before the 180-second limit; all 300 epochs and the final demo were not verified.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Neural graph experiment with soft training routes and hard inference decisions."
        },
        {
          "label": "Stack",
          "value": "Rust, Candle, Neural Networks"
        }
      ]
    },
    "kotlin-vortey": {
      "name": "KotlinVortey",
      "shortDesc": "Event API with an in-memory queue, listeners and HTTP delivery to consumers.",
      "longDesc": "Ktor server exposing POST /event. It registers consumers, publishes events to a cache-backed queue and triggers listeners that make HTTP calls. EventBus supports filters and one-shot listeners. Storage is in memory; durable persistence, authentication and delivery guarantees were not demonstrated.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Event API with an in-memory queue, listeners and HTTP delivery to consumers."
        },
        {
          "label": "Stack",
          "value": "Kotlin, Ktor, Caffeine, Gradle"
        }
      ]
    },
    "my-game-papers": {
      "name": "My Game Papers",
      "shortDesc": "Desktop bingo application with cards, draws, QR codes and local history.",
      "longDesc": "Electron/React interface with home, cards, generation, games, history and settings. Draw and match rules live in separate domain functions; hooks manage cards, audio and rounds. QR codes support card generation and reading. Data and settings are stored locally. The default README did not describe these features.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Desktop bingo application with cards, draws, QR codes and local history."
        },
        {
          "label": "Stack",
          "value": "Electron, React, TypeScript, QR Code"
        }
      ]
    },
    "agentics": {
      "name": "Agentics",
      "shortDesc": "Experimental agent orchestration with a terminal, tools and a WebSocket panel.",
      "longDesc": "Python loop coordinating agent conversations and tools through file, process, web and message handlers. A Next.js frontend monitors agents and streamed responses over WebSocket. Gemini and Ollama providers are configurable. The nested login project is an associated lab rather than another validated product. Execution requires providers and a WebSocket server.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Experimental agent orchestration with a terminal, tools and a WebSocket panel."
        },
        {
          "label": "Stack",
          "value": "Python, Next.js, WebSocket, Ollama, Google Gemini"
        }
      ]
    },
    "lomaw": {
      "name": "Lomaw",
      "shortDesc": "Rust lab for GGUF, model downloads and matrix operations.",
      "longDesc": "CLI with download and execution commands, mmap-based GGUF reading and scalar/AVX2 matrix modules. The reviewed chat path uses simulated model structures and tokenization; the loader includes mock fallbacks. It demonstrates infrastructure components but does not establish complete inference from real model weights.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Rust lab for GGUF, model downloads and matrix operations."
        },
        {
          "label": "Stack",
          "value": "Rust, GGUF, AVX2, Tokio"
        }
      ]
    },
    "my-llm-executor": {
      "name": "My LLM Executor",
      "shortDesc": "Language-model training and inference experiment with Rust and Candle.",
      "longDesc": "Neural library and binaries for training, tokenizer construction and inference. The inference path uses Candle/CUDA, a local tokenizer and safetensors weights for autoregressive generation. Compatible GPU, data and specific weights are required. Source availability does not establish generation quality, benchmarks or reproducible training.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Language-model training and inference experiment with Rust and Candle."
        },
        {
          "label": "Stack",
          "value": "Rust, Candle, CUDA, Tokenizers"
        }
      ]
    },
    "my-codec": {
      "name": "My Codec",
      "shortDesc": "Rust CLI scaffold with placeholder encode and decode commands.",
      "longDesc": "The executable uses Clap to parse encode and decode arguments. Current handlers only print input and output; they do not encode or decode video. An encoder module file is not implemented in the main flow. This is a tool scaffold rather than a functioning codec.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Rust CLI scaffold with placeholder encode and decode commands."
        },
        {
          "label": "Stack",
          "value": "Rust, Clap"
        }
      ]
    },
    "compound-interest-calc": {
      "name": "Compound Interest Calc",
      "shortDesc": "Initial Expo application scaffold; compound-interest calculation is not implemented.",
      "longDesc": "Available code contains the default Expo screen, StatusBar and basic styles. There is no form, interest calculation or chart yet. The directory name records the initial intention, while the displayed stage reflects the implementation found.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Initial Expo application scaffold; compound-interest calculation is not implemented."
        },
        {
          "label": "Stack",
          "value": "Expo, React Native, TypeScript"
        }
      ]
    },
    "office-tools": {
      "name": "Office Tools",
      "shortDesc": "Initial Next.js scaffold; office tools are not implemented yet.",
      "longDesc": "The reviewed page is the create-next-app template with documentation and deployment links. No implemented office tools were found. This entry preserves the scaffold without presenting a template as a completed application.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Initial Next.js scaffold; office tools are not implemented yet."
        },
        {
          "label": "Stack",
          "value": "Next.js, React, TypeScript"
        }
      ]
    },
    "electron-app": {
      "name": "Electron App — base Vite",
      "shortDesc": "Vite and TypeScript counter template; no Electron integration was found.",
      "longDesc": "Despite its name, the reviewed manifest and code are a Vite/TypeScript starter. The screen contains a counter and template links. There is no Electron dependency or main process. It is an initial interface scaffold with no established desktop features.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Vite and TypeScript counter template; no Electron integration was found."
        },
        {
          "label": "Stack",
          "value": "Vite, TypeScript"
        }
      ]
    },
    "github-follow-bot": {
      "name": "GitHub Follow Bot",
      "shortDesc": "Experimental CLI for traversing followers and automating GitHub API actions.",
      "longDesc": "Octokit client with authentication, follower lookup, queueing and an action limit. Its command can change follower relationships on a real account. Review was limited to source; no actions on other accounts were performed. The project test script has no implemented test suite.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Experimental CLI for traversing followers and automating GitHub API actions."
        },
        {
          "label": "Stack",
          "value": "TypeScript, Octokit, Commander"
        }
      ]
    },
    "portifolio": {
      "name": "Portfolio — Emanuel Missena",
      "shortDesc": "Trilingual portfolio with case studies, galleries and a dedicated my-vm language, runtime and OS section.",
      "longDesc": "This site brings together history, technologies and projects in Portuguese, English and German. The catalog centralizes technical metadata and keeps translated copy. Cases distinguish applications, experiments, legacy projects and scaffolds; galleries display available images. Existing project URLs were preserved. Local fonts allow builds without depending on Google Fonts. A dedicated section explains the CVM → IR → Assembly flow and the roles of the VM, desktop and legacy Python compiler.",
      "highlights": [
        {
          "label": "Implementation",
          "value": "Trilingual portfolio with case studies, galleries and a dedicated my-vm language, runtime and OS section."
        },
        {
          "label": "Stack",
          "value": "Next.js, React, TypeScript, Tailwind CSS"
        }
      ]
    },
    "my-vm-os": {
      "name": "my-vm-os · CVM desktop",
      "shortDesc": "Experimental desktop with windows, terminal, editor, calculator and files in the VM RAM.",
      "longDesc": "The src/main.cvm entry point imports graphics and keyboard drivers, VFS, window manager, desktop, taskbar and four applications. CVM routines use inline Assembly for drawing, input and simulated interrupts. The main loop controls focus and redraws. The VFS holds up to 32 entries in RAM without persistence between runs. The source compiled with the current toolchain. Process isolation and preemptive scheduling have not been demonstrated. Local execution displayed the desktop. Clicks did not open its internal applications during this review.",
      "highlights": [
        {
          "label": "Applications",
          "value": "Terminal, editor, calculator and file explorer"
        },
        {
          "label": "Files",
          "value": "RAM VFS; up to 32 entries without persistence"
        },
        {
          "label": "Input",
          "value": "Mouse, keyboard and simulated interrupts"
        }
      ]
    },
    "my-vm-legacy-compiler": {
      "name": "old_compiler · legacy Python frontend",
      "shortDesc": "Historical prototype using Python AST to emit Assembly for an earlier VM version.",
      "longDesc": "Before CVM, this frontend compiled a subset of Python. A linker discovers local modules; visitors, a register context and an emitter produce Assembly. It covers functions, lists, strings, imports and control flow. Output can include WRITESTR, absent from the current VM parser. Of 126 discovered tests, 106 passed, 2 failed on label representation and 18 were skipped; execution tests depend on old paths. It is outside the current CVM pipeline. The historical code is available in a public GitHub repository.",
      "highlights": [
        {
          "label": "Frontend",
          "value": "Python AST, linker and visitors"
        },
        {
          "label": "Compatibility",
          "value": "Earlier ISA; outside the CVM pipeline"
        },
        {
          "label": "Tests",
          "value": "106 passed, 2 failed, 18 skipped"
        }
      ]
    }
  },
  "de": {
    "my-bet": {
      "name": "My Bet",
      "shortDesc": "Experimentelle Spieleanwendung mit Ledger, Redis-Sitzungen und konfigurierbarer Verwaltung.",
      "longDesc": "Das Repository enthält Einzel- und Live-Spiele, Redis/SSE-Zustand, Authentifizierung, Finanzhistorie und Zahlungsintegrationen. Zentrale Ledger-Funktionen und Idempotenzreferenzen strukturieren Einsätze und Auszahlungen. Nutzer-, Affiliate-, Support- und Verwaltungsbereiche bieten Design- und Spracheinstellungen. Der Code wurde geprüft; Screenshots stammen aus einer lokalen Demo. Dies belegt weder eine Zulassung für Finanzbetrieb noch eine vollständige Prüfung der Spielregeln.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Experimentelle Spieleanwendung mit Ledger, Redis-Sitzungen und konfigurierbarer Verwaltung."
        }
      ]
    },
    "simple-bank": {
      "name": "Simple Bank",
      "shortDesc": "Banking-Simulation für Web und Mobile mit Überweisungen, Belegen und doppelter Buchführung.",
      "longDesc": "Demo mit Dashboard, Transaktionsverlauf, Zahlungsschlüsseln und Überweisungen. Der Zahlungsdienst erfasst Soll und Haben in einer Prisma-Transaktion, prüft Guthaben und verwendet einen Idempotenzschlüssel. Registrierung, Auth.js-Sitzungen, Belege und Gemini unterstützen Analyse und Überweisungsformulare. Ein Expo-Client nutzt dieselbe API. Es handelt sich um eine Simulation mit Demodaten; eine reale Bankintegration wurde hier nicht nachgewiesen.",
      "highlights": [
        {
          "label": "Daten",
          "value": "Soll und Haben in einer Prisma-Transaktion"
        },
        {
          "label": "Abläufe",
          "value": "Überweisungen, Verlauf, Schlüssel und Belege"
        },
        {
          "label": "Clients",
          "value": "Next.js und Expo mit derselben API"
        }
      ]
    },
    "cvm-runtime": {
      "name": "my-vm · virtuelle Maschine",
      "shortDesc": "Virtuelle Maschine in Rust mit 26 Registern, 1280 × 800 Framebuffer und simulierten Geräten.",
      "longDesc": "Die Laufzeit liest textuelles Assembly, löst Labels auf und führt Anweisungen mit A–Z-Registern, Stack und RAM aus. Der RAM enthält 256 × 1024 × 1024 u32-Wörter, etwa 1 GiB. Ein minifb-Fenster zeigt den Framebuffer mit 1280 × 800 Pixeln; Maus, Tastatur und Interrupts versorgen das Gastsystem. Der Prozess läuft auf dem Host und braucht eine grafische Sitzung. Die Programme wurden kompiliert und der Desktop in einer isolierten lokalen Sitzung angezeigt. Klicks öffneten die internen Anwendungen bei dieser Prüfung nicht.",
      "highlights": [
        {
          "label": "Architektur",
          "value": "26 u32-Register und etwa 1 GiB RAM"
        },
        {
          "label": "Oberfläche",
          "value": "Framebuffer, Zeichenoperationen, Tastatur und Maus"
        },
        {
          "label": "Aufgabe",
          "value": "Führt Assembly des CVM-Compilers aus"
        }
      ]
    },
    "cvm-compiler": {
      "name": "my-vm-compiler · CVM-Sprache",
      "shortDesc": "Rust-Compiler, der CVM-Imports expandiert, IR erzeugt und Assembly für my-vm ausgibt.",
      "longDesc": "Eine PEG-Grammatik mit Pest liest .cvm-Dateien mit C-ähnlicher Syntax. Der Generator erzeugt IR und das Codegen-Modul Assembly. Die Optimierungsstufe gibt die IR derzeit unverändert zurück. Die CLI schreibt .ir neben die Quelldatei und .asm an den gewählten Pfad. Funktionen, Kontrollfluss, Structs, Zeiger und Inline-Assembly sind vorhanden. Ein Snapshot-Test und ein Speicher-Smoke-Test bestanden; auch src/main.cvm des Systems wurde kompiliert. Das belegt weder vollständige Sprachkorrektheit noch grafische Ausführung.",
      "highlights": [
        {
          "label": "Pipeline",
          "value": "Imports → Pest → IR → Assembly"
        },
        {
          "label": "Optimierung",
          "value": "Reservierte Stufe; noch keine Transformationen"
        },
        {
          "label": "Prüfung",
          "value": "Zwei Tests bestanden und OS-Quelle kompiliert"
        }
      ]
    },
    "apiflash": {
      "name": "apiFlash",
      "shortDesc": "HTTP-Client mit Sammlungen, Verlauf, KI-Generierung und Request-Export.",
      "longDesc": "Workbench zum Erstellen von HTTP-Requests, Bearbeiten von Headern und Bodies, Prüfen von Antworten und Erzeugen von Code. Sammlungen und Verlauf organisieren Requests; Gemini unterstützt Generierung und Analyse. Der Proxy prüft Protokolle, löst DNS auf und sperrt private Adressen; die aufgelöste IP wird für die Verbindung zurückgegeben. Bei der Prüfung bestanden 147 Tests; ein Test mit externem DNS schlug fehl. Dies ist kein vollständiges Sicherheitsaudit.",
      "highlights": [
        {
          "label": "Workbench",
          "value": "Requests, Antworten und Export"
        },
        {
          "label": "Organisation",
          "value": "Sammlungen und Verlauf"
        },
        {
          "label": "Proxy",
          "value": "Zielprüfung und Sperrung privater IPs"
        }
      ]
    },
    "browia": {
      "name": "Browia",
      "shortDesc": "Browser-Erweiterung mit KI-Agent, gespeicherten Sitzungen und Aktionsfreigabe.",
      "longDesc": "Manifest-V3-Erweiterung mit Chat-Seitenpanel. Der aktuelle Code integriert OpenRouter und Ollama, DOM-Serialisierung, Tab- und Seitenwerkzeuge, Token-Budgetierung und gespeicherte Sitzungen. Interaktionen verwenden einen Freigabeablauf. Ein Offscreen-Dokument trennt Verarbeitung und Oberfläche. Chrome-APIs und ein konfigurierter Modellanbieter sind erforderlich; die Vite-Vorschau entspricht keiner installierten Erweiterung.",
      "highlights": [
        {
          "label": "Anbieter",
          "value": "OpenRouter und Ollama"
        },
        {
          "label": "Werkzeuge",
          "value": "DOM-Inspektion, Tabs und freigegebene Aktionen"
        },
        {
          "label": "Sitzungen",
          "value": "Gespeicherter Verlauf und Offscreen-Verarbeitung"
        }
      ]
    },
    "lowvia": {
      "name": "Lowvia",
      "shortDesc": "Electron-Assistent mit Chat, lokalen Modellen, Web-Recherche und Berichten.",
      "longDesc": "Desktop-Anwendung mit Gesprächen, Modellwahl, Einstellungen, Recherche-Notizen und Berichten. Sie integriert Ollama und OpenRouter. Such- und Seitenlesewerkzeuge nutzen SearXNG, das der Hauptprozess verwaltet. Die Oberfläche zeigt Markdown, Code und Mathematik. Die vollständige Ausführung erfordert konfigurierte Recherche-Dienste und Modelle; der lokale Modus benötigt Ollama.",
      "highlights": [
        {
          "label": "Desktop",
          "value": "Electron, React und Redux-Zustand"
        },
        {
          "label": "Recherche",
          "value": "SearXNG, Seitenlesen und Notizen"
        },
        {
          "label": "Anbieter",
          "value": "Ollama und OpenRouter"
        }
      ]
    },
    "snippetvault": {
      "name": "SnippetVault",
      "shortDesc": "Snippet-Bibliothek mit Sammlungen, Versionen, Suche und Freigabe.",
      "longDesc": "Next.js-Anwendung für wiederverwendbaren Code mit Sammlungen, Versionen, Import/Export, Variablen, Suche, Forks und Sichtbarkeitseinstellungen. Auth.js ordnet Daten Nutzern zu, Prisma speichert sie und Zod prüft Eingaben. KI-Routen unterstützen Dokumentation und Testvorschläge. Lokal bestanden 191 Tests. Aufnahmen authentifizierter Abläufe erfordern noch eine Datenbank und eine Demo-Sitzung.",
      "highlights": [
        {
          "label": "Wissen",
          "value": "Snippets, Sammlungen und Versionen"
        },
        {
          "label": "Freigabe",
          "value": "Sichtbarkeit, Links und Forks"
        },
        {
          "label": "Qualität",
          "value": "191 Tests bestanden bei der lokalen Prüfung"
        }
      ]
    },
    "typedash": {
      "name": "TypeDash",
      "shortDesc": "Tipptraining mit WPM, Genauigkeit, Verlauf und Rangliste.",
      "longDesc": "Tipptraining mit WPM- und Genauigkeitsberechnung, Übungsansicht, Dashboard und Rangliste. Metriklogik und Oberfläche sind getrennt; APIs validieren Eingaben, Prisma speichert Ergebnisse in PostgreSQL. Auth.js bietet GitHub-Login. Diagramme zeigen den Verlauf. Alle 113 lokalen Tests bestanden; ein Lastbenchmark für Hochleistungsbehauptungen liegt nicht vor.",
      "highlights": [
        {
          "label": "Übung",
          "value": "WPM und Genauigkeit während des Tests"
        },
        {
          "label": "Verlauf",
          "value": "Dashboard und Recharts-Diagramme"
        },
        {
          "label": "Qualität",
          "value": "113 Tests bestanden bei der lokalen Prüfung"
        }
      ]
    },
    "ryzen-shop-bot": {
      "name": "RyzenShopBot",
      "shortDesc": "TypeScript-Discord-Bot mit Tickets, Wirtschaft und Moderation.",
      "longDesc": "TypeScript-Discord-Bot mit Ticket-, Wirtschafts-, Moderations- und Informationsbefehlen. Registry und Router trennen Entdeckung und Ausführung; Dienste verwalten Tickets und Guthaben. Anti-Raid-Erkennung und Präsenzrotation sind enthalten. Die Ausführung benötigt Token und Testserver; keine reale Community wurde kontaktiert.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "TypeScript-Discord-Bot mit Tickets, Wirtschaft und Moderation."
        },
        {
          "label": "Kontext",
          "value": "Historisches Projekt; isolierte Ausführung ausstehend"
        }
      ]
    },
    "ryzen-hosting": {
      "name": "RyzenHosting Site",
      "shortDesc": "Historische Hosting-Website mit Tarifen, Preisen und React-Komponenten.",
      "longDesc": "Historische Hosting-Website mit Next.js 12, React 17 und Chakra UI. Komponenten strukturieren Vorstellung, Tarife, Preise, Funktionen und Bewertungen. Geschäftsinhalte und Kennzahlen stammen aus der historischen Version; aktuelle Verfügbarkeit oder Betriebszahlen wurden hier nicht nachgewiesen.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Historische Hosting-Website mit Tarifen, Preisen und React-Komponenten."
        },
        {
          "label": "Kontext",
          "value": "Historisches Projekt; isolierte Ausführung ausstehend"
        }
      ]
    },
    "dv-duels": {
      "name": "DVDuels",
      "shortDesc": "Java-Plugin für Minecraft-Duelle mit Arenen, Kits und MySQL-Statistiken.",
      "longDesc": "Java-Duell-Plugin für Spigot mit Einladungen, Annahme, Arenen und konfigurierbaren Kits. Manager steuern den Matchablauf, Listener verarbeiten Events und ein Repository speichert MySQL-Statistiken über HikariCP. Konfiguration und Nachrichten liegen in YAML. Die Demo benötigt Minecraft-Testserver und Datenbank; Kompatibilität ist für die gewählte Serverversion zu prüfen.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Java-Plugin für Minecraft-Duelle mit Arenen, Kits und MySQL-Statistiken."
        },
        {
          "label": "Kontext",
          "value": "Historisches Projekt; isolierte Ausführung ausstehend"
        }
      ]
    },
    "portifolio-frontend": {
      "name": "Portfolio Frontend",
      "shortDesc": "Historisches React-Portfolio als statische Dateien für GitHub Pages.",
      "longDesc": "Das Repository enthält eine kompilierte React-Oberfläche mit HTML, JavaScript/CSS-Bundles, Source Maps und Projektbildern. Diese frühere persönliche Präsentation dokumentiert die visuelle Entwicklung. Originalquellen und Build-Umgebung fehlen im Repository.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Historisches React-Portfolio als statische Dateien für GitHub Pages."
        }
      ]
    },
    "z-discord-core": {
      "name": "zDiscordCore",
      "shortDesc": "Java-Plugin zur Verknüpfung von Minecraft- und Discord-Konten mit SQL-Persistenz.",
      "longDesc": "Der Code verbindet Spigot-Plugin und Discord-Bot. Befehle und APIs verknüpfen Spieler mit Discord-Konten; ein SQL-Provider speichert Zuordnungen. Listener verarbeiten Nachrichten und Serverereignisse. Für den integrierten Betrieb des Altprojekts sind ein Minecraft-Testserver, eine Discord-Testcommunity und passende Abhängigkeiten nötig.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Java-Plugin zur Verknüpfung von Minecraft- und Discord-Konten mit SQL-Persistenz."
        }
      ]
    },
    "comuni-mine-bot": {
      "name": "ComuniMineBot",
      "shortDesc": "Discord-Bot in TypeScript mit Moderation, Musik, Wirtschaft und Community-Befehlen.",
      "longDesc": "Befehlsgruppen trennen Verwaltung, Information, Moderation, Musik, Unterhaltung und Wirtschaft. Klassen und Hilfsfunktionen strukturieren Warteschlangen, Guthaben, Zahlungen und tägliche Belohnungen. Der historische Code nutzt ältere Abhängigkeiten; reale Konten oder Communities wurden bei der Prüfung nicht angesprochen.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Discord-Bot in TypeScript mit Moderation, Musik, Wirtschaft und Community-Befehlen."
        }
      ]
    },
    "minecraft-feast-bot": {
      "name": "MinecraftFeastBot",
      "shortDesc": "Discord-Bot in JavaScript mit Moderationsbefehlen und Minecraft-Serverstatus.",
      "longDesc": "Slash Commands unterstützen Sperren, Ausschluss, Bereinigung, Mute, Ankündigungen, Vorschläge und Prüfung. Der Statusbefehl fragt eine öffentliche Minecraft-Server-API ab. Ein eigenes Skript registriert Discord-Befehle. Bei der Codeprüfung wurden keine Befehle registriert oder Nachrichten an eine reale Community gesendet.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Discord-Bot in JavaScript mit Moderationsbefehlen und Minecraft-Serverstatus."
        }
      ]
    },
    "advanced-sql": {
      "name": "AdvancedSQL",
      "shortDesc": "Kotlin-Bibliothek mit MySQL/SQLite-Verbindungen, Prepared Statements und Ergebnisadaptern.",
      "longDesc": "MySQL- und SQLite-Implementierungen teilen eine Datenbankschnittstelle. DatabaseExecutor stellt selectOne, selectMany und update mit PreparedStatement bereit; Adapter übertragen ResultSet-Daten in Objekte. SQLite- und Adaptertests liegen vor. Die historische JDBC-Bibliothek ist kein vollständiges ORM und kein nachgewiesener Verbindungspool.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Kotlin-Bibliothek mit MySQL/SQLite-Verbindungen, Prepared Statements und Ergebnisadaptern."
        }
      ]
    },
    "z-manutencao": {
      "name": "zManutencao",
      "shortDesc": "Java-Bukkit-Plugin mit Wartungsmodus und Ausnahmen nach Berechtigung.",
      "longDesc": "Ein Befehl schaltet den Wartungszustand um. Der Join-Listener entfernt Spieler ohne konfigurierte Berechtigung, wenn der Modus aktiv ist. Nachrichten und Rechte kommen aus der Konfiguration. Die kleine historische Implementierung benötigt einen kompatiblen Bukkit-Server.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Java-Bukkit-Plugin mit Wartungsmodus und Ausnahmen nach Berechtigung."
        }
      ]
    },
    "z-silk2": {
      "name": "zSilk2",
      "shortDesc": "Java-Bukkit-Plugin für Blockabbau und Drops nach Silk-Touch-Level.",
      "longDesc": "Ein BlockDamageEvent-Listener prüft den konfigurierten Silk-Touch-Level und die Materialliste. Barrieren und Portalrahmen werden gesondert behandelt; Item- und Reload-Befehle sind vorhanden. Der Code verwendet synchrones Warten im Event und ältere Bukkit-APIs. Der Case beschreibt die historische Implementierung und ihre Grenzen.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Java-Bukkit-Plugin für Blockabbau und Drops nach Silk-Touch-Level."
        }
      ]
    },
    "multi-server-api": {
      "name": "MultiServer-API",
      "shortDesc": "Java-API mit gemeinsamen Schnittstellen und Bukkit-Wrappern für Spieler, Welt und Server.",
      "longDesc": "Die Module shared und bukkit trennen Plattformverträge und Implementierung. Schnittstellen beschreiben Welt, Position, Spieler, Spielmodus, Server und Pluginverwaltung; Wrapper adaptieren Bukkit-Objekte. Der geprüfte Code zeigt die Bukkit-Abstraktion, ohne Implementierungen aller anderen Plattformen nachzuweisen.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Java-API mit gemeinsamen Schnittstellen und Bukkit-Wrappern für Spieler, Welt und Server."
        }
      ]
    },
    "swiss-learn": {
      "name": "SwissLearn",
      "shortDesc": "Schweizerdeutsch-Lernen mit täglichen Sitzungen, verteiltem Wiederholen und Mobile-Client.",
      "longDesc": "Anwendung zum Lernen von Züridütsch-Vokabeln und Sätzen mit PT/EN/DE-Oberflächen. Der Code umfasst Lernpfade, fortsetzbare Sitzungen, Audio, FSRS-Wiederholung, Schreiben, Gespräche, Fortschritt und Ranglisten. PostgreSQL-Transaktionen verwalten Belohnungen und Aktivitäten; eine Queue verarbeitet Schreibfeedback. Inhalte haben redaktionelle Prüfung. Ein Expo-Client nutzt das Backend. Alle 82 lokalen Unit-Tests bestanden; Lernpilot-Ergebnisse und aktuelles Deployment wurden hier nicht nachgewiesen.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Schweizerdeutsch-Lernen mit täglichen Sitzungen, verteiltem Wiederholen und Mobile-Client."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, Prisma, PostgreSQL, Auth.js, Expo, FSRS"
        }
      ]
    },
    "termop": {
      "name": "Termop",
      "shortDesc": "Terminal-Agent für lokale Modelle mit Dateiwerkzeugen und MCP-Server.",
      "longDesc": "CLI mit React/Ink-Oberfläche für LM-Studio-Modelle. Agent-Schleife, Prompts, Modellverwaltung und Dateiwerkzeuge sind getrennt. Werkzeuge stehen über MCP stdio bereit, der Kontextumfang ist begrenzt. Ein lokaler LM-Studio-Server und installierte Modelle sind erforderlich. Die Typprüfung bestand; reale Aufgabenleistung ist noch zu evaluieren.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Terminal-Agent für lokale Modelle mit Dateiwerkzeugen und MCP-Server."
        },
        {
          "label": "Stack",
          "value": "TypeScript, Ink, React, LM Studio, MCP"
        }
      ]
    },
    "russian-alphabet": {
      "name": "Russian Alphabet",
      "shortDesc": "Kyrillisches Transliterationstraining mit Alphabetübersicht und Sitzungsstatistiken.",
      "longDesc": "React-Anwendung mit russischähnlichen Zeichenfolgen zum Üben der lateinischen Transliteration. Die Prüfung akzeptiert alternative Schreibweisen; Alphabetübersicht, Feedback, Trefferfolgen und helle/dunkle Themes unterstützen die Übung. Der Generator erzeugt Pseudowörter, keinen echten Wortschatz.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Kyrillisches Transliterationstraining mit Alphabetübersicht und Sitzungsstatistiken."
        },
        {
          "label": "Stack",
          "value": "React, TypeScript, Vite, Tailwind CSS"
        }
      ]
    },
    "deadlatch": {
      "name": "Deadlatch",
      "shortDesc": "Oberflächenprototyp für einen Dienst zur ereignisgesteuerten Informationsfreigabe.",
      "longDesc": "Landingpage, Dokumentation und Dashboard-Struktur für Switches, API-Schlüssel und Einstellungen. Domänen- und Persistenzschichten enthalten noch Gerüste. Verschlüsselung und Trigger-Ausführung sind im geprüften Code nicht implementiert; Produktidee und vorhandene Ansichten sind zu unterscheiden.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Oberflächenprototyp für einen Dienst zur ereignisgesteuerten Informationsfreigabe."
        },
        {
          "label": "Stack",
          "value": "Next.js, TypeScript, Prisma"
        }
      ]
    },
    "chess-mistery": {
      "name": "Chess Mystery",
      "shortDesc": "Schachlabor mit Web-Brett, neuronaler Visualisierung und experimentellem Backend.",
      "longDesc": "Frontend für Partien und neuronale Visualisierung mit FastAPI-Backend. Der Code enthält ein PyTorch-Policy-Netz, legale Zugmasken, Inferenz, Training und Checkpoints. Standardmäßig werden Mock-Dienste gewählt; neuronale Engine und Stockfish-Orakel sind optional. Ein validiertes trainiertes Modell oder Spielstärkenachweis liegt dieser Prüfung nicht bei.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Schachlabor mit Web-Brett, neuronaler Visualisierung und experimentellem Backend."
        },
        {
          "label": "Stack",
          "value": "Next.js, Python, FastAPI, PyTorch, python-chess"
        }
      ]
    },
    "brainer": {
      "name": "Brainer",
      "shortDesc": "Neuronales Graphenexperiment mit Soft-Routing im Training und Hard-Entscheidungen bei der Inferenz.",
      "longDesc": "V1-Code nutzt Neuronen mit Folgeschritt-Kandidaten, Stoppwahrscheinlichkeiten und differenzierbaren Zustandskombinationen im Training. Die Inferenz wählt einen diskreten Pfad. Die Demo verwendet synthetische Daten und Schrittmetriken. Das README beschreibt noch V0; diese Beschreibung folgt dem aktuellen Code. Der Release-Build war erfolgreich. Ein lokaler CPU-Lauf zeigte die ersten Routingpfade und erreichte Epoche 60 vor dem Zeitlimit von 180 Sekunden; alle 300 Epochen und die abschließende Demo wurden nicht geprüft.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Neuronales Graphenexperiment mit Soft-Routing im Training und Hard-Entscheidungen bei der Inferenz."
        },
        {
          "label": "Stack",
          "value": "Rust, Candle, Neural Networks"
        }
      ]
    },
    "kotlin-vortey": {
      "name": "KotlinVortey",
      "shortDesc": "Event-API mit In-Memory-Queue, Listenern und HTTP-Zustellung an Verbraucher.",
      "longDesc": "Ktor-Server mit POST /event. Er registriert Verbraucher, veröffentlicht Events in einer cachebasierten Queue und löst Listener mit HTTP-Aufrufen aus. EventBus unterstützt Filter und einmalige Listener. Daten liegen im Speicher; dauerhafte Persistenz, Authentifizierung und Zustellgarantien wurden nicht nachgewiesen.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Event-API mit In-Memory-Queue, Listenern und HTTP-Zustellung an Verbraucher."
        },
        {
          "label": "Stack",
          "value": "Kotlin, Ktor, Caffeine, Gradle"
        }
      ]
    },
    "my-game-papers": {
      "name": "My Game Papers",
      "shortDesc": "Desktop-Bingo-Anwendung mit Karten, Ziehungen, QR-Codes und lokalem Verlauf.",
      "longDesc": "Electron/React-Oberfläche mit Start, Karten, Generierung, Spiel, Verlauf und Einstellungen. Ziehungs- und Trefferregeln stehen in separaten Domänenfunktionen; Hooks verwalten Karten, Audio und Runden. QR-Codes unterstützen Kartenerzeugung und -lesen. Daten und Einstellungen werden lokal gespeichert. Das Standard-README beschrieb diese Funktionen nicht.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Desktop-Bingo-Anwendung mit Karten, Ziehungen, QR-Codes und lokalem Verlauf."
        },
        {
          "label": "Stack",
          "value": "Electron, React, TypeScript, QR Code"
        }
      ]
    },
    "agentics": {
      "name": "Agentics",
      "shortDesc": "Experimentelle Agent-Orchestrierung mit Terminal, Werkzeugen und WebSocket-Panel.",
      "longDesc": "Python-Schleife für Agentengespräche und Werkzeuge mit Datei-, Prozess-, Web- und Nachrichten-Handlern. Ein Next.js-Frontend zeigt Agenten und gestreamte Antworten über WebSocket. Gemini und Ollama sind konfigurierbar. Das eingebettete Login-Projekt ist ein zugehöriges Labor, kein weiteres validiertes Produkt. Die Ausführung benötigt Anbieter und WebSocket-Server.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Experimentelle Agent-Orchestrierung mit Terminal, Werkzeugen und WebSocket-Panel."
        },
        {
          "label": "Stack",
          "value": "Python, Next.js, WebSocket, Ollama, Google Gemini"
        }
      ]
    },
    "lomaw": {
      "name": "Lomaw",
      "shortDesc": "Rust-Labor für GGUF, Modelldownloads und Matrixoperationen.",
      "longDesc": "CLI mit Download- und Ausführungsbefehlen, mmap-basiertem GGUF-Lesen und skalaren/AVX2-Matrixmodulen. Der geprüfte Chatpfad nutzt simulierte Modellstrukturen und Tokenisierung; der Loader enthält Mock-Fallbacks. Das Projekt zeigt Infrastrukturkomponenten, belegt aber keine vollständige Inferenz aus realen Modellgewichten.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Rust-Labor für GGUF, Modelldownloads und Matrixoperationen."
        },
        {
          "label": "Stack",
          "value": "Rust, GGUF, AVX2, Tokio"
        }
      ]
    },
    "my-llm-executor": {
      "name": "My LLM Executor",
      "shortDesc": "Sprachmodell-Trainings- und Inferenzexperiment mit Rust und Candle.",
      "longDesc": "Neuronale Bibliothek und Programme für Training, Tokenizer-Erstellung und Inferenz. Der Inferenzpfad verwendet Candle/CUDA, lokalen Tokenizer und safetensors-Gewichte für autoregressive Generierung. Kompatible GPU, Daten und passende Gewichte sind erforderlich. Quellcode allein belegt keine Generierungsqualität, Benchmarks oder reproduzierbares Training.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Sprachmodell-Trainings- und Inferenzexperiment mit Rust und Candle."
        },
        {
          "label": "Stack",
          "value": "Rust, Candle, CUDA, Tokenizers"
        }
      ]
    },
    "my-codec": {
      "name": "My Codec",
      "shortDesc": "Rust-CLI-Gerüst mit demonstrativen encode- und decode-Befehlen.",
      "longDesc": "Das Programm verwendet Clap für encode- und decode-Argumente. Die Handler geben nur Ein- und Ausgaben aus; sie kodieren oder dekodieren kein Video. Ein Encoder-Modul ist nicht im Hauptablauf implementiert. Es handelt sich um ein Werkzeuggerüst, keinen funktionierenden Codec.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Rust-CLI-Gerüst mit demonstrativen encode- und decode-Befehlen."
        },
        {
          "label": "Stack",
          "value": "Rust, Clap"
        }
      ]
    },
    "compound-interest-calc": {
      "name": "Compound Interest Calc",
      "shortDesc": "Anfängliches Expo-App-Gerüst; Zinseszinsberechnung ist noch nicht implementiert.",
      "longDesc": "Der vorhandene Code enthält den Expo-Standardbildschirm, StatusBar und einfache Styles. Formular, Zinsberechnung und Diagramm fehlen noch. Der Verzeichnisname hält die ursprüngliche Idee fest, der angezeigte Stand entspricht dem gefundenen Code.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Anfängliches Expo-App-Gerüst; Zinseszinsberechnung ist noch nicht implementiert."
        },
        {
          "label": "Stack",
          "value": "Expo, React Native, TypeScript"
        }
      ]
    },
    "office-tools": {
      "name": "Office Tools",
      "shortDesc": "Anfängliches Next.js-Gerüst; Büro-Werkzeuge sind noch nicht implementiert.",
      "longDesc": "Die geprüfte Seite ist das create-next-app-Template mit Dokumentations- und Deployment-Links. Implementierte Büro-Werkzeuge wurden nicht gefunden. Dieser Eintrag dokumentiert das Gerüst, ohne das Template als fertige Anwendung darzustellen.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Anfängliches Next.js-Gerüst; Büro-Werkzeuge sind noch nicht implementiert."
        },
        {
          "label": "Stack",
          "value": "Next.js, React, TypeScript"
        }
      ]
    },
    "electron-app": {
      "name": "Electron App — base Vite",
      "shortDesc": "Vite-/TypeScript-Zählertemplate; keine Electron-Integration gefunden.",
      "longDesc": "Trotz des Namens sind Manifest und Code ein Vite-/TypeScript-Starter. Die Seite enthält einen Zähler und Template-Links. Electron-Abhängigkeit und Hauptprozess fehlen. Es handelt sich um ein anfängliches UI-Gerüst ohne belegte Desktop-Funktionen.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Vite-/TypeScript-Zählertemplate; keine Electron-Integration gefunden."
        },
        {
          "label": "Stack",
          "value": "Vite, TypeScript"
        }
      ]
    },
    "github-follow-bot": {
      "name": "GitHub Follow Bot",
      "shortDesc": "Experimentelle CLI für Follower-Traversierung und GitHub-API-Aktionen.",
      "longDesc": "Octokit-Client mit Authentifizierung, Follower-Suche, Queue und Aktionslimit. Der Befehl kann Follower-Beziehungen realer Konten ändern. Die Prüfung beschränkte sich auf Quellcode; es wurden keine Aktionen auf anderen Konten ausgeführt. Das Testskript enthält keine implementierte Testsuite.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Experimentelle CLI für Follower-Traversierung und GitHub-API-Aktionen."
        },
        {
          "label": "Stack",
          "value": "TypeScript, Octokit, Commander"
        }
      ]
    },
    "portifolio": {
      "name": "Portfolio — Emanuel Missena",
      "shortDesc": "Dreisprachiges Portfolio mit Cases, Galerien und einem eigenen Bereich für my-vm-Sprache, Laufzeit und System.",
      "longDesc": "Diese Website zeigt Werdegang, Technologien und Projekte auf Portugiesisch, Englisch und Deutsch. Der Katalog zentralisiert technische Metadaten und hält Texte übersetzt. Cases unterscheiden Anwendungen, Experimente, historische Projekte und Gerüste; Galerien zeigen vorhandene Bilder. Bestehende Projekt-URLs bleiben erhalten. Lokale Schriften ermöglichen Builds ohne Google Fonts. Ein eigener Bereich erklärt den Weg CVM → IR → Assembly und die Aufgaben von VM, Desktop und früherem Python-Compiler.",
      "highlights": [
        {
          "label": "Implementierung",
          "value": "Dreisprachiges Portfolio mit Projektkatalog, Cases und Bildschirmgalerien."
        },
        {
          "label": "Stack",
          "value": "Next.js, React, TypeScript, Tailwind CSS"
        }
      ]
    },
    "my-vm-os": {
      "name": "my-vm-os · Desktop in CVM",
      "shortDesc": "Experimenteller Desktop mit Fenstern, Terminal, Editor, Rechner und Dateien im VM-RAM.",
      "longDesc": "Der Einstiegspunkt src/main.cvm importiert Grafik- und Tastaturtreiber, VFS, Fenstermanager, Desktop, Taskleiste und vier Anwendungen. CVM-Routinen verwenden Inline-Assembly für Grafik, Eingaben und simulierte Interrupts. Die Hauptschleife verwaltet Fokus und Neuzeichnen. Das VFS hält bis zu 32 Einträge im RAM ohne Persistenz zwischen Ausführungen. Die Quelle wurde mit der aktuellen Toolchain kompiliert. Prozessisolation und präemptives Scheduling sind nicht nachgewiesen. Die lokale Ausführung zeigte den Desktop. Klicks öffneten die internen Anwendungen bei dieser Prüfung nicht.",
      "highlights": [
        {
          "label": "Anwendungen",
          "value": "Terminal, Editor, Rechner und Dateimanager"
        },
        {
          "label": "Dateien",
          "value": "RAM-VFS; bis zu 32 Einträge ohne Persistenz"
        },
        {
          "label": "Eingaben",
          "value": "Maus, Tastatur und simulierte Interrupts"
        }
      ]
    },
    "my-vm-legacy-compiler": {
      "name": "old_compiler · früheres Python-Frontend",
      "shortDesc": "Historischer Prototyp mit Python-AST zur Assembly-Erzeugung für eine frühere VM-Version.",
      "longDesc": "Vor CVM kompilierte dieses Frontend eine Teilmenge von Python. Ein Linker findet lokale Module; Visitors, Registerkontext und Emitter erzeugen Assembly. Funktionen, Listen, Strings, Imports und Kontrollfluss sind enthalten. Die Ausgabe kann WRITESTR enthalten, das im aktuellen VM-Parser fehlt. Von 126 entdeckten Tests bestanden 106, 2 scheiterten an der Labeldarstellung und 18 wurden übersprungen; Ausführungstests erwarten alte Pfade. Das Projekt gehört nicht zur aktuellen CVM-Pipeline. Der historische Code ist in einem öffentlichen GitHub-Repository verfügbar.",
      "highlights": [
        {
          "label": "Frontend",
          "value": "Python-AST, Linker und Visitors"
        },
        {
          "label": "Kompatibilität",
          "value": "Frühere ISA; außerhalb der CVM-Pipeline"
        },
        {
          "label": "Tests",
          "value": "106 bestanden, 2 fehlgeschlagen, 18 übersprungen"
        }
      ]
    }
  }
};
