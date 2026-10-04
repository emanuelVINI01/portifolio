# Avaliação individual — 04/10/2026

Inspeção estática e verificações executadas. Os diretórios abaixo são relativos ao workspace. As descrições do catálogo foram alinhadas a estes achados. Inventário de arquivos/hashes não significa leitura integral de todas as fontes. Demonstração funcional e captura atual permanecem pendentes para todos os cases.

## My Bet

- ID: `my-bet`; estágio: Experimento.
- Fonte: indisponível localmente; consulta remota bloqueada.

Case de jogos e estado transacional descrito no catálogo anterior, com ledger em centavos, sessões Redis e integração PIX. O código do projeto não está disponível neste workspace e o repositório remoto não pôde ser consultado; números de jogos, gateways e garantias financeiras aguardam verificação.

Verificação: Descrição histórica herdada do catálogo anterior; não foram confirmados recursos atuais.

## Simple Bank

- ID: `simple-bank`; estágio: Experimento.
- Fonte: `simple-bank`.

Aplicação de demonstração com dashboard, extrato, chaves de pagamento e transferências. O serviço de pagamentos grava débitos e créditos em uma transação Prisma, verifica saldo e usa uma chave de idempotência. Há registro de usuário, sessões Auth.js, recibos e recursos Gemini para análise e preenchimento de transferências. O cliente Expo consome a mesma API. É uma simulação com dados de demonstração, sem integração bancária real comprovada nesta revisão.

Verificação: 6 testes passaram. Quatro capturas antigas foram inspecionadas; banco e sessão fictícia necessários para novas.

Áreas planejadas: `dashboard`, `payment-keys`, `transactions`, `home`, `login`, `register`.

Componentes agrupados: `mobile-login`, `mobile-dashboard`, `mobile-transfer`, `mobile-transactions`, `mobile-payment-keys`.

## my-vm — CVM Runtime

- ID: `cvm-runtime`; estágio: Experimento.
- Fonte: `vm/my-vm`.

Runtime experimental da linguagem CVM. Interpreta Assembly com registradores A–Z, pilha, memória e portas de entrada e saída. O código atual renderiza um framebuffer RGBA de 1280×800 via minifb e recebe entrada de mouse. O compilador e o sistema experimental my-vm-os fazem parte do mesmo ecossistema. Hardware e interrupções são simulados; o programa roda no sistema operacional hospedeiro.

Verificação: Cargo compilou com 0 testes; não comprova comportamento gráfico. Janela minifb/OS ainda precisa demonstração.

Componentes agrupados: `os-framebuffer`.

## my-vm-compiler — CVM Compiler

- ID: `cvm-compiler`; estágio: Experimento.
- Fonte: `vm/my-vm-compiler`.

Compilador experimental para uma linguagem com sintaxe semelhante a C. Usa Pest para ler arquivos .cvm, gera uma representação intermediária e produz Assembly para my-vm. O código separa parsing, geração de IR, otimização e codegen; os exemplos incluem controle de fluxo, structs e acesso a memória. Dois testes golden verificam compilação e saída de referência. A linguagem e o runtime próprios delimitam seu uso.

Verificação: 2 testes golden passaram em cargo test --offline --locked, com avisos de código não utilizado.

## apiFlash

- ID: `apiflash`; estágio: Aplicação.
- Fonte: `apiflash`.

Workbench para montar requisições HTTP, editar headers e corpo, inspecionar respostas e gerar código. Coleções e histórico organizam o trabalho; recursos Gemini apoiam geração e análise. O proxy valida protocolos, resolve DNS e bloqueia endereços privados, retornando o IP resolvido para uso na conexão. Nesta revisão, 147 testes passaram e um teste dependente de DNS externo falhou. Essas verificações não representam uma auditoria completa de segurança.

Verificação: 147 testes passaram, 1 dependente de DNS externo falhou. Banco/sessão necessários para persistência.

Áreas planejadas: `home`, `collections`, `docs`, `history`, `login`, `workspace`.

## Browia

- ID: `browia`; estágio: Experimento.
- Fonte: `browia`.

Extensão Manifest V3 com painel lateral de conversa. O código atual integra OpenRouter e Ollama, serialização do DOM, ferramentas de abas e páginas, orçamento de tokens e persistência de sessões. Ferramentas de interação passam por um fluxo de aprovação. Um documento offscreen mantém o processamento separado da interface. Depende das APIs do Chrome e de um provedor de modelo configurado; a visualização pelo Vite não equivale à extensão instalada.

Verificação: Build da extensão passou. Instalar dist em perfil Chrome isolado; preview Vite não comprova APIs Chrome.

Áreas planejadas: `chat`, `settings`.

## Lowvia

- ID: `lowvia`; estágio: Experimento.
- Fonte: `lowvia`.

Aplicação desktop com conversas, seleção de modelos, configurações, notas de pesquisa e relatórios. Integra Ollama e OpenRouter. A pesquisa usa ferramentas de busca e leitura de páginas, com SearXNG gerenciado pelo processo principal. A interface renderiza Markdown, código e matemática. A execução completa depende dos serviços de pesquisa e dos modelos configurados; o modo local exige Ollama disponível.

Verificação: Somente revisão estática; não executado neste ambiente. Pré-requisitos específicos estão na receita.

Áreas planejadas: `chat`, `models`, `settings`, `research`, `reports`.

## SnippetVault

- ID: `snippetvault`; estágio: Aplicação.
- Fonte: `snippetvault`.

Aplicação Next.js para manter código reutilizável. O código inclui coleções, versões, importação e exportação, variáveis, busca, fork e controles de visibilidade. Auth.js associa os dados ao usuário; Prisma faz a persistência e Zod valida entradas. Há rotas IA para documentação e sugestões de testes. Na revisão local, 191 testes passaram. Capturas dos fluxos autenticados ainda dependem de execução com banco e sessão de demonstração.

Verificação: 191 testes passaram; dashboard/snippets autenticados precisam de banco e sessão fictícia.

Áreas planejadas: `home`, `dashboard`, `login`, `snippet-id`.

## TypeDash

- ID: `typedash`; estágio: Aplicação.
- Fonte: `typedash`.

Aplicação de treino de digitação com cálculo de WPM e precisão, tela de prática, dashboard e ranking. A lógica de métricas está separada da interface, com validação nas rotas de API e persistência de resultados no PostgreSQL via Prisma. Auth.js oferece login GitHub. Gráficos ajudam a acompanhar o histórico. Os 113 testes locais passaram; não há benchmark de carga anexado para justificar alegações de alta performance.

Verificação: 113 testes passaram; prática é pública, resultados/dashboard dependem de sessão e banco.

Áreas planejadas: `home`, `about`, `dashboard`, `login`, `practice`, `ranking`.

## RyzenShopBot

- ID: `ryzen-shop-bot`; estágio: Legado.
- Fonte: `RyzenShopBot`.

Bot Discord em TypeScript com comandos de tickets, economia, moderação e informações. Registry e router separam a descoberta e execução de comandos; serviços cuidam de tickets e saldo. Há detecção anti-raid e rotação de presença. O código requer token e um servidor Discord de teste para execução; nenhuma comunidade real foi acionada nesta revisão.

Verificação: Só revisão estática. Token e guild de demonstração necessários; nenhuma comunidade real acionada.

## RyzenHosting Site

- ID: `ryzen-hosting`; estágio: Legado.
- Fonte: `ryzen-site`.

Site histórico para um serviço de hosting, construído com Next.js 12, React 17 e Chakra UI. Organiza apresentação, planos, preços, recursos e depoimentos em componentes. O conteúdo comercial e as métricas exibidas pertencem à versão histórica; esta revisão não comprova disponibilidade atual do serviço nem os números de operação.

Verificação: Somente revisão estática; não executado neste ambiente. Pré-requisitos específicos estão na receita.

Áreas planejadas: `home`, `minecraft`, `minecraftgaming`, `vps`, `vpsgaming`, `dedicated`, `web`, `apps`, `serviceterms`, `privacypolicy`.

## DVDuels

- ID: `dv-duels`; estágio: Legado.
- Fonte: `dv-duels`.

Plugin Java de duelos para Spigot, com convites, aceitação, arenas e kits configuráveis. Managers cuidam do ciclo da partida; listeners tratam eventos e o repositório persiste estatísticas em MySQL com HikariCP. Configurações e mensagens ficam em YAML. A demonstração requer servidor Minecraft e banco de teste; compatibilidade atual precisa ser validada na versão de servidor escolhida.

Verificação: Só revisão estática. Servidor Minecraft e MySQL de teste necessários; compatibilidade atual não verificada.

## Portfolio Frontend

- ID: `portifolio-frontend`; estágio: Legado.
- Fonte: indisponível localmente; consulta remota bloqueada.

Versão anterior do portfólio: experimentos de interface com Next.js e React. Projeto histórico preservado na trajetória. A versão atual do repositório não pôde ser conferida nesta revisão; a descrição registra o escopo do catálogo anterior.

Verificação: Descrição histórica herdada do catálogo anterior; não foram confirmados recursos atuais.

## zDiscordCore

- ID: `z-discord-core`; estágio: Legado.
- Fonte: indisponível localmente; consulta remota bloqueada.

Plugin Java para vincular contas Minecraft e Discord. Projeto histórico preservado na trajetória. A versão atual do repositório não pôde ser conferida nesta revisão; a descrição registra o escopo do catálogo anterior.

Verificação: Descrição histórica herdada do catálogo anterior; não foram confirmados recursos atuais.

## ComuniMineBot

- ID: `comuni-mine-bot`; estágio: Legado.
- Fonte: indisponível localmente; consulta remota bloqueada.

Bot Discord para moderação e utilidades de comunidade Minecraft. Projeto histórico preservado na trajetória. A versão atual do repositório não pôde ser conferida nesta revisão; a descrição registra o escopo do catálogo anterior.

Verificação: Descrição histórica herdada do catálogo anterior; não foram confirmados recursos atuais.

## MinecraftFeastBot

- ID: `minecraft-feast-bot`; estágio: Legado.
- Fonte: indisponível localmente; consulta remota bloqueada.

Bot Discord para eventos de comunidades Minecraft. Projeto histórico preservado na trajetória. A versão atual do repositório não pôde ser conferida nesta revisão; a descrição registra o escopo do catálogo anterior.

Verificação: Descrição histórica herdada do catálogo anterior; não foram confirmados recursos atuais.

## AdvancedSQL

- ID: `advanced-sql`; estágio: Legado.
- Fonte: indisponível localmente; consulta remota bloqueada.

Biblioteca Kotlin para acesso a MySQL e SQLite em plugins JVM. Projeto histórico preservado na trajetória. A versão atual do repositório não pôde ser conferida nesta revisão; a descrição registra o escopo do catálogo anterior.

Verificação: Descrição histórica herdada do catálogo anterior; não foram confirmados recursos atuais.

## zManutencao

- ID: `z-manutencao`; estágio: Legado.
- Fonte: indisponível localmente; consulta remota bloqueada.

Plugin Java de manutenção de servidores Minecraft; parte da trajetória inicial. Projeto histórico preservado na trajetória. A versão atual do repositório não pôde ser conferida nesta revisão; a descrição registra o escopo do catálogo anterior.

Verificação: Descrição histórica herdada do catálogo anterior; não foram confirmados recursos atuais.

## zSilk2

- ID: `z-silk2`; estágio: Legado.
- Fonte: indisponível localmente; consulta remota bloqueada.

Plugin Java de regras de servidor Minecraft; parte da trajetória inicial. Projeto histórico preservado na trajetória. A versão atual do repositório não pôde ser conferida nesta revisão; a descrição registra o escopo do catálogo anterior.

Verificação: Descrição histórica herdada do catálogo anterior; não foram confirmados recursos atuais.

## MultiServer-API

- ID: `multi-server-api`; estágio: Legado.
- Fonte: indisponível localmente; consulta remota bloqueada.

API Java para integrações entre plataformas de servidores Minecraft. Projeto histórico preservado na trajetória. A versão atual do repositório não pôde ser conferida nesta revisão; a descrição registra o escopo do catálogo anterior.

Verificação: Descrição histórica herdada do catálogo anterior; não foram confirmados recursos atuais.

## SwissLearn

- ID: `swiss-learn`; estágio: Aplicação.
- Fonte: `swiss-learn`.

Aplicação para estudar vocabulário e frases de Züridütsch, com interface PT/EN/DE. O código implementa trilha de aulas, sessões retomáveis, áudio, revisão FSRS, escrita, conversação, progresso e ranking. Transações PostgreSQL organizam recompensas e atividades; uma fila processa feedback de escrita. Conteúdo tem revisão editorial. O cliente Expo reutiliza o backend. Os 82 testes unitários locais passaram; piloto com alunos e publicação atual não foram comprovados nesta revisão.

Verificação: 82 testes unitários passaram; cliente Expo exige runtime nativo; banco/sessão fictícia e worker são necessários para fluxos completos.

Áreas planejadas: `home`, `lang`, `lang-conversation`, `lang-grammar`, `lang-more`, `lang-practice`, `lang-progress`, `lang-questions`, `lang-ranking`, `lang-settings`, `lang-study-id`, `lang-writing`, `lang-signin`, `lang-signin-check-email`, `lang-privacy`, `lang-terms`, `lang-profile-userid`.

Componentes agrupados: `mobile-signin`, `mobile-dashboard`, `mobile-questions`, `mobile-ranking`, `mobile-profile`.

## Termop

- ID: `termop`; estágio: Experimento.
- Fonte: `termop`.

CLI com interface React/Ink para conversar com modelos do LM Studio. Separa loop de agente, prompts, gestão de modelos e ferramentas de filesystem. Expõe ferramentas por MCP stdio e limita o volume de contexto. Requer o servidor local do LM Studio e modelos instalados. O typecheck passou; desempenho em tarefas reais ainda precisa de avaliação.

Verificação: Typecheck passou. Servidor LM Studio e modelo local necessários para sessão terminal.

## Russian Alphabet

- ID: `russian-alphabet`; estágio: Aplicação.
- Fonte: `russian-alphabet`.

Aplicação React que gera sequências semelhantes a palavras russas e pede sua transliteração para o alfabeto latino. O verificador aceita alternativas de escrita; a interface oferece referência do alfabeto, feedback, sequência de acertos e tema claro/escuro. O gerador produz pseudopalavras, não um catálogo de vocabulário real.

Verificação: Build Vite passou. Exercício, referência do alfabeto e tema claro foram mapeados.

Áreas planejadas: `home`, `alphabet`, `light-theme`.

## Deadlatch

- ID: `deadlatch`; estágio: Scaffold.
- Fonte: `deadlatch`.

Landing page, documentação e estrutura de dashboard com áreas de switches, chaves API e configurações. As camadas de domínio e persistência ainda contêm scaffolding. Criptografia e execução dos gatilhos não estão implementadas no código revisado; a proposta do produto deve ser distinguida das telas já construídas.

Verificação: Somente revisão estática; não executado neste ambiente. Pré-requisitos específicos estão na receita.

Áreas planejadas: `home`, `dashboard`, `dashboard-api-keys`, `dashboard-settings`, `dashboard-switches`, `docs`.

## Chess Mystery

- ID: `chess-mistery`; estágio: Experimento.
- Fonte: `chess-mistery/web`.

Frontend com partidas e visualização neural, acompanhado de uma API FastAPI. O código inclui rede de política PyTorch, máscara de movimentos legais, inferência, treinamento e checkpoints. A configuração padrão seleciona serviços mock; a engine neural e o oráculo Stockfish são opcionais. Não há resultado de força de jogo ou modelo treinado validado anexado à revisão.

Verificação: Revisão estática do frontend e API. Código PyTorch opcional presente; defaults mock. Não executados treino/inferência nem avaliação de força de jogo.

Áreas planejadas: `home`, `neural`, `play`, `watch`.

## Brainer

- ID: `brainer`; estágio: Experimento.
- Fonte: `brainer`.

O código V1 usa neurônios com candidatos de próximo passo, probabilidade de parada e combinação diferenciável de estados no treino. A inferência escolhe um caminho discreto. A demonstração usa dados sintéticos e métricas de passos. O README ainda descreve V0, por isso a descrição foi baseada no código atual. A execução está pendente por dependências Rust ausentes no cache.

Verificação: Cargo offline bloqueado: anyhow ausente no cache. O código V1 diverge do README V0.

## KotlinVortey

- ID: `kotlin-vortey`; estágio: Experimento.
- Fonte: `KotlinVortey`.

Servidor Ktor com endpoint POST /event. Registra consumidores, publica eventos em uma fila baseada em cache e dispara listeners que fazem chamadas HTTP. O EventBus suporta filtros e listeners de execução única. O armazenamento é em memória; persistência durável, autenticação e garantias de entrega não foram demonstradas.

Verificação: Somente revisão estática; não executado neste ambiente. Pré-requisitos específicos estão na receita.

## My Game Papers

- ID: `my-game-papers`; estágio: Aplicação.
- Fonte: `my-game-papers`.

Interface Electron/React com início, cartelas, geração, jogo, histórico e configurações. As regras de sorteio e conferência ficam em funções de domínio separadas; hooks controlam cartelas, áudio e rodadas. QR codes apoiam geração e leitura de cartelas. Os dados e ajustes ficam armazenados localmente. O README padrão não descrevia essas funcionalidades.

Verificação: npm run typecheck:web falhou com 8 erros: alertPhrases inexistente, argumento adicional em speakCached e símbolos não utilizados. Corrigir antes do build atual; capturas pendentes.

Áreas planejadas: `home`, `cartelas`, `generator`, `game`, `history`, `settings`.

## Agentics

- ID: `agentics`; estágio: Experimento.
- Fonte: `agentics/web-interface`.

Loop Python que coordena conversas e ferramentas de agentes, com handlers de arquivos, processos, web e mensagens. Um frontend Next.js acompanha agentes e respostas em streaming via WebSocket. Provedores Gemini e Ollama são configuráveis. O projeto de login aninhado é um laboratório associado, não outro produto validado. A execução depende de provedores e servidor WebSocket.

Verificação: Somente revisão estática; não executado neste ambiente. Pré-requisitos específicos estão na receita.

Áreas planejadas: `home`.

## Lomaw

- ID: `lomaw`; estágio: Experimento.
- Fonte: `lomaw`.

CLI com comandos de download e execução, leitura GGUF com mmap e módulos de operações matriciais escalares e AVX2. O caminho de conversa revisado usa estruturas de modelo e tokenização simuladas; há fallbacks mock no carregador. O projeto demonstra componentes de infraestrutura, mas não comprova inferência completa de pesos de um modelo real.

Verificação: Cargo offline bloqueado: clap ausente no cache. Caminho de conversa contém mocks/fallbacks.

## My LLM Executor

- ID: `my-llm-executor`; estágio: Experimento.
- Fonte: `my-llm-executor`.

Biblioteca neural e binários para treino, construção de tokenizer e inferência. O caminho de inferência usa Candle/CUDA, tokenizer local e pesos safetensors, com geração autoregressiva. Requer GPU compatível, dados e pesos específicos. A presença do código não comprova qualidade de geração, benchmark ou reprodução do treinamento.

Verificação: Cargo offline bloqueado: anyhow ausente no cache. GPU, pesos, tokenizer e dados necessários.

## My Codec

- ID: `my-codec`; estágio: Scaffold.
- Fonte: `my-codec`.

O executável usa Clap para interpretar argumentos de encode e decode. Os handlers atuais apenas imprimem entrada e saída; não codificam nem decodificam vídeo. Há um arquivo de módulo de encoder sem implementação conectada ao fluxo principal. É um scaffold de ferramenta, não um codec funcional.

Verificação: Cargo offline bloqueado: clap ausente no cache. Handlers não implementam encode/decode.

## Compound Interest Calc

- ID: `compound-interest-calc`; estágio: Scaffold.
- Fonte: `compound-interest-calc`.

O código disponível contém a tela padrão Expo com StatusBar e estilos básicos. Ainda não há formulário, cálculo de juros ou gráficos. O nome do diretório registra a intenção inicial, enquanto o estágio exibido corresponde à implementação encontrada.

Verificação: Somente revisão estática; não executado neste ambiente. Pré-requisitos específicos estão na receita.

Áreas planejadas: `initial-screen`.

## Office Tools

- ID: `office-tools`; estágio: Scaffold.
- Fonte: `office-tools`.

A página revisada é o template create-next-app com links de documentação e deploy. Não foram encontradas ferramentas de escritório implementadas. A entrada preserva o projeto como scaffold e não apresenta o template como aplicação concluída.

Verificação: Somente revisão estática; não executado neste ambiente. Pré-requisitos específicos estão na receita.

Áreas planejadas: `home`.

## Electron App — base Vite

- ID: `electron-app`; estágio: Scaffold.
- Fonte: `electron-app`.

Apesar do nome, o manifesto e o código revisados são uma base Vite/TypeScript. A tela contém um contador e links do template. Não há dependência ou processo principal Electron. É uma base inicial de interface, sem funcionalidades desktop comprovadas.

Verificação: Somente revisão estática; não executado neste ambiente. Pré-requisitos específicos estão na receita.

Áreas planejadas: `home`.

## GitHub Follow Bot

- ID: `github-follow-bot`; estágio: Experimento.
- Fonte: `github-follow-bot`.

Cliente Octokit com autenticação, busca de seguidores, fila e limite de ações. O comando pode alterar relações de seguidores em uma conta real. A revisão ficou restrita ao código; nenhuma ação em outras contas foi executada. Não há suíte de testes implementada no script test do projeto.

Verificação: Só revisão estática; nenhuma relação entre contas foi modificada. Script test não contém suíte implementada.

## Portfolio — Emanuel Missena

- ID: `portifolio`; estágio: Aplicação.
- Fonte: `portifolio`.

Este site reúne trajetória, tecnologias e projetos em português, inglês e alemão. O catálogo centraliza metadados técnicos e mantém textos traduzidos. Cada case distingue aplicação, experimento, legado ou scaffold; galerias mostram as imagens disponíveis. URLs de projetos existentes foram preservadas. Fontes locais permitem build sem depender do Google Fonts.

Verificação: Lint, typecheck, catálogo e build passaram. Smoke/capturas Chromium e publicação GitHub bloqueados.

Áreas planejadas: `home`, `projects`, `projects-slug`.

## Diretórios adicionais

| Diretório | Avaliação / tratamento |
| --- | --- |
| Minecraft-Clone | Remoto de Morgs6000; 280 fontes C# inventariadas. Não atribuído ao autor nem publicado como projeto próprio. |
| dh | Script Python/yt-dlp de filtro de títulos, arquivo de downloads e conversão MP3 via FFmpeg. Lido como auxiliar; não executado. Áudio, logs e dados não anexados ao portfólio. |
| my-vm | Exemplo associado ao ecossistema; runtime efetivo está em vm/my-vm. |
| my-vm-os | Pasta externa sem fonte identificada; implementação efetiva em vm/my-vm-os, agrupada no case CVM Runtime. |
| swiss-learn-mobile | Cliente Expo agrupado no case SwissLearn; não atribuído backend independente. |
| test_project | Arquivos vazios de laboratório e manifesto Express/JWT/bcrypt. Nenhuma fonte de aplicação identificada; não apresentado como backend concluído. |
| architecture, eval | Documentação e avaliações auxiliares. |
| autmaia, de, hd, test-qwen, trabalho | Sem código de aplicação identificado pelo inventário. Nenhum nome, funcionalidade ou screenshot inventado. |

A conta GitHub não pôde ser enumerada. Outros repositórios remotos fora do workspace podem existir. As fontes indisponíveis devem continuar identificadas até acesso e revisão atuais.
