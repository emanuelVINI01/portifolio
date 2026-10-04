# Implementação da revisão — 04/10/2026

## Resultado local

O catálogo passou de 20 para 37 cases em PT/EN/DE. Foram revisadas descrições curtas/longas, tecnologias, destaques, estado de implementação e dependências com base no código disponível. SwissLearn Mobile foi agrupado com SwissLearn; o cliente Expo do banco permanece junto ao Simple Bank; o sistema CVM é apresentado com runtime e compilador.

Aplicações, experimentos, legados e scaffolds recebem identificação na listagem, modal e case. A busca aceita o estágio traduzido. SwissLearn, Simple Bank e SnippetVault formam a seleção inicial. Fontes locais permitem compilar sem Google Fonts.

Apresentação, serviços, tecnologias e SEO foram revisados. Foram removidas alegações de VM bare-metal, escalabilidade sem evidência, números não verificados de gateways/jogos e badges genéricos de teste/open source. Contagens antigas do GitHub foram preservadas como snapshot histórico identificado, sem afirmar a contagem atual.

Cases e modais compartilham galeria com imagens inteiras, miniaturas, legendas traduzidas e ampliação por teclado. O modal identifica seu título, contém foco e restaura o elemento anterior. Repositórios são opcionais para não inventar remotos. As URLs existentes foram preservadas. O comportamento no browser ainda não foi validado.

## Evidências e limites

O inventário inicial cobre 40 diretórios. `source-audit.json` registra fontes, hashes, manifestos e rotas, sem incluir credenciais, dependências, logs, datasets e arquivos gerados. Os achados estão em [project-assessments.md](project-assessments.md). Inventariar não equivale a auditar integralmente o comportamento.

Cases históricos sem código local descrevem o catálogo anterior e aguardam acesso ao remoto. Minecraft-Clone pertence a outro proprietário no remoto e não foi atribuído ao autor. Pastas vazias e scripts auxiliares estão documentados separadamente. A conta remota não pôde ser enumerada: outros repositórios fora do workspace podem existir.

Cinco imagens anteriores foram inspecionadas: quatro do Simple Bank e uma do My Bet. Proporção/dimensões foram conferidas; a interface as identifica como anteriores. Conteúdo comercial dentro dessas imagens não comprova métricas ou disponibilidade atual.

## Execução e captura

`recipes.json` contém 37 receitas: 82 áreas de interface e 11 áreas adicionais dos componentes agrupados. Áreas web têm variantes desktop/mobile; Electron/extensão usam launchers próprios. CLI e ambientes nativos têm pré-requisitos explícitos. APIs não são contadas como telas.

O capturador exige banco local dedicado e sessão fictícia para áreas autenticadas. Valida HTTP/conteúdo, rejeita login como prova de tela protegida e registra status por área. Perfis de browser/Electron são temporários; sessões e capturas brutas são ignoradas pelo Git. Imagens novas só são anexadas após inspeção visual.

A execução registrou **181 entradas bloqueadas**, incluindo variantes e áreas manuais; não criou PNGs. Esse número representa o roteiro pendente, não screenshots concluídos. Resultados em `last-capture-run.json` e `browser-verification.json`.

## Validação realizada

| Projeto / verificação | Resultado em 04/10/2026 |
| --- | --- |
| Portfólio — lint | Passou sem erros/avisos após as correções. |
| Portfólio — typecheck | Passou. |
| Portfólio — catálogo | 37 IDs alinhados em 3 idiomas; 5 imagens com dimensões válidas. |
| Portfólio — build webpack | Passou com workers padrão: 43 páginas estáticas geradas, incluindo 37 cases. A listagem /projects continua dinâmica. |
| SnippetVault — testes existentes | 191 passaram em 18 arquivos. |
| TypeDash — testes existentes | 113 passaram em 9 arquivos. |
| Simple Bank — testes existentes | 6 passaram em 2 arquivos. |
| SwissLearn — testes unitários existentes | 82 passaram em 13 arquivos. |
| apiFlash — testes existentes | 147 passaram; 1 falhou na resolução DNS externo. |
| Termop — typecheck | Passou. |
| Russian Alphabet — build Vite | Passou. |
| Browia — build da extensão | Passou. |
| CVM Compiler — cargo test --offline --locked | 2 testes golden passaram; avisos de código não utilizado. |
| CVM Runtime — cargo test --offline --locked | Compilou; 0 testes executados. Não prova comportamento gráfico. |
| Brainer / My LLM Executor — Cargo offline | Bloqueados por anyhow ausente no cache. |
| Lomaw / My Codec — Cargo offline | Bloqueados por clap ausente no cache. |
| My Game Papers — typecheck:web | Falhou: 8 erros, incluindo alertPhrases inexistente e argumento adicional em speakCached. |
| Smoke no Chromium | Bloqueado na inicialização do browser. |

Testes unitários não comprovam integração real, qualidade dos modelos, segurança completa ou operação em produção. Nenhum projeto foi declarado implantado a partir desses resultados. As falhas encontradas nos demais projetos foram registradas; seus códigos não foram alterados nesta revisão do portfólio.

## GitHub e pendências

Descrições por repositório são derivadas do catálogo em `github-descriptions.json` e `github-commands.jsonl`. O README de perfil está em `profile-README.md`. O publicador usa gh, verifica acesso e confirma cada alteração; preserva homepage/topics. Projetos sem remoto identificado não recebem repositórios fictícios.

Bloqueios observados:

- `gh auth status`: token de emanuelVINI01 inválido; consultas à API também falharam por rede. Nenhuma descrição ou README remoto foi publicado.
- Next em 127.0.0.1:3200: `listen EPERM`. Aplicações web não puderam ser disponibilizadas localmente.
- O build Turbopack falhou ao abrir uma porta no processamento de CSS. O script `npm run build` foi ajustado para webpack, que compilou com sucesso.
- Chromium/Playwright: interrompido com `setsockopt: Operation not permitted` / SIGTRAP. Nenhuma captura nova ou inspeção funcional no browser.
- O ambiente não permite escalada para executar fora do sandbox; a solicitação do usuário não modifica essa restrição técnica.

Faltam autenticação/rede GitHub funcionais, ambiente que permita browser/portas, dependências dos runtimes e sessões/bancos fictícios preparados. A parte local disponível está implementada; execução visual completa e publicação continuam pendentes.
