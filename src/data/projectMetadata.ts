import type { ProjectMetadata } from "./projects";

export const projectMetadata: ProjectMetadata[] = [
  {
    "id": "my-bet",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "NextAuth",
      "Prisma",
      "Redis",
      "SSE",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript"
    ],
    "color": "#bd93f9",
    "glowColor": "rgba(189, 147, 249, 0.25)",
    "githubUrl": "https://github.com/emanuelVINI01/my-bet",
    "badges": [
      "Transactional",
      "Auth",
      "Real-Time",
      "TypeScript"
    ],
    "year": 2026,
    "stage": "experiment",
    "captures": [
      {
        "src": "/projects/my-bet/image1.png",
        "width": 1919,
        "height": 889,
        "caption": {
          "pt": "Catálogo de jogos",
          "en": "Game catalog",
          "de": "Spielekatalog"
        },
        "alt": {
          "pt": "my-bet — Catálogo de jogos",
          "en": "my-bet — Game catalog",
          "de": "my-bet — Spielekatalog"
        },
        "viewport": "desktop",
        "origin": "existing"
      }
    ]
  },
  {
    "id": "simple-bank",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "Expo",
      "Google Gemini",
      "TypeScript",
      "Tailwind CSS"
    ],
    "color": "#bd93f9",
    "glowColor": "rgba(189, 147, 249, 0.25)",
    "githubUrl": "https://github.com/emanuelVINI01/simple-bank",
    "liveUrl": "https://bank.emanuelvini.dev",
    "badges": [
      "Transactional",
      "Auth",
      "AI",
      "Dashboard",
      "TypeScript"
    ],
    "year": 2026,
    "stage": "experiment",
    "runCommands": [
      "npm ci",
      "npm run prisma:generate",
      "npm run dev"
    ],
    "captures": [
      {
        "src": "/projects/simple-bank/image1.png",
        "width": 1836,
        "height": 941,
        "caption": {
          "pt": "Página inicial",
          "en": "Landing page",
          "de": "Startseite"
        },
        "alt": {
          "pt": "simple-bank — Página inicial",
          "en": "simple-bank — Landing page",
          "de": "simple-bank — Startseite"
        },
        "viewport": "desktop",
        "origin": "existing"
      },
      {
        "src": "/projects/simple-bank/image2.png",
        "width": 1836,
        "height": 941,
        "caption": {
          "pt": "Cadastro de conta",
          "en": "Account registration",
          "de": "Kontoregistrierung"
        },
        "alt": {
          "pt": "simple-bank — Cadastro de conta",
          "en": "simple-bank — Account registration",
          "de": "simple-bank — Kontoregistrierung"
        },
        "viewport": "desktop",
        "origin": "existing"
      },
      {
        "src": "/projects/simple-bank/image3.png",
        "width": 268,
        "height": 587,
        "caption": {
          "pt": "Dashboard mobile",
          "en": "Mobile dashboard",
          "de": "Mobiles Dashboard"
        },
        "alt": {
          "pt": "simple-bank — Dashboard mobile",
          "en": "simple-bank — Mobile dashboard",
          "de": "simple-bank — Mobiles Dashboard"
        },
        "viewport": "mobile",
        "origin": "existing"
      },
      {
        "src": "/projects/simple-bank/image4.png",
        "width": 268,
        "height": 587,
        "caption": {
          "pt": "Formulário de transferência mobile",
          "en": "Mobile transfer form",
          "de": "Mobiles Überweisungsformular"
        },
        "alt": {
          "pt": "simple-bank — Formulário de transferência mobile",
          "en": "simple-bank — Mobile transfer form",
          "de": "simple-bank — Mobiles Überweisungsformular"
        },
        "viewport": "mobile",
        "origin": "existing"
      }
    ]
  },
  {
    "id": "cvm-runtime",
    "category": "Systems",
    "tech": [
      "Rust",
      "Assembly",
      "minifb",
      "Cargo"
    ],
    "color": "#ff5555",
    "glowColor": "rgba(255, 85, 85, 0.24)",
    "githubUrl": "https://github.com/emanuelVINI01/my-vm",
    "badges": [
      "Real-Time"
    ],
    "year": 2026,
    "stage": "experiment",
    "runCommands": [
      "cargo run --release -- path/to/program.asm"
    ]
  },
  {
    "id": "cvm-compiler",
    "category": "Systems",
    "tech": [
      "Rust",
      "Pest",
      "Cargo"
    ],
    "color": "#ff6e6e",
    "glowColor": "rgba(255, 110, 110, 0.22)",
    "githubUrl": "https://github.com/emanuelVINI01/my-vm-compiler",
    "badges": [
      "Utility"
    ],
    "year": 2026,
    "stage": "experiment",
    "runCommands": [
      "cargo run -- program.cvm output.asm"
    ]
  },
  {
    "id": "apiflash",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Google Gemini",
      "Zod"
    ],
    "color": "#34d399",
    "glowColor": "rgba(52, 211, 153, 0.25)",
    "githubUrl": "https://github.com/emanuelVINI01/apiflash",
    "liveUrl": "https://apiflash.emanuelvini.dev",
    "badges": [
      "API",
      "AI",
      "TypeScript"
    ],
    "year": 2026,
    "stage": "application",
    "runCommands": [
      "npm ci",
      "npm run dev"
    ]
  },
  {
    "id": "browia",
    "category": "React & AI",
    "tech": [
      "TypeScript",
      "React",
      "Manifest V3",
      "OpenRouter",
      "Ollama",
      "Vite"
    ],
    "color": "#d6a84f",
    "glowColor": "rgba(214, 168, 79, 0.25)",
    "githubUrl": "https://github.com/emanuelVINI01/browia",
    "badges": [
      "AI",
      "Browser Extension",
      "TypeScript"
    ],
    "year": 2026,
    "stage": "experiment",
    "runCommands": [
      "npm ci",
      "npm run build:extension"
    ]
  },
  {
    "id": "lowvia",
    "category": "React & AI",
    "tech": [
      "Electron",
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Ollama",
      "OpenRouter"
    ],
    "color": "#7e57c2",
    "glowColor": "rgba(126, 87, 194, 0.25)",
    "githubUrl": "https://github.com/emanuelVINI01/lowvia",
    "badges": [
      "AI",
      "Electron",
      "TypeScript"
    ],
    "year": 2026,
    "stage": "experiment",
    "runCommands": [
      "npm ci",
      "npm run dev"
    ]
  },
  {
    "id": "snippetvault",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "Prisma",
      "NextAuth",
      "Zod",
      "TypeScript"
    ],
    "color": "#bd93f9",
    "glowColor": "rgba(189, 147, 249, 0.22)",
    "githubUrl": "https://github.com/emanuelVINI01/snippetvault",
    "liveUrl": "https://snippetvault.emanuelvini.dev",
    "badges": [
      "Auth",
      "Search",
      "TypeScript"
    ],
    "year": 2026,
    "stage": "application",
    "runCommands": [
      "npm ci",
      "npm run prisma:generate",
      "npm run dev"
    ]
  },
  {
    "id": "typedash",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Recharts",
      "NextAuth",
      "Zod"
    ],
    "color": "#ff79c6",
    "glowColor": "rgba(255, 121, 198, 0.25)",
    "githubUrl": "https://github.com/emanuelVINI01/typedash",
    "liveUrl": "https://typedash.emanuelvini.dev",
    "badges": [
      "Real-Time",
      "Dashboard",
      "TypeScript"
    ],
    "year": 2026,
    "stage": "application",
    "runCommands": [
      "npm ci",
      "npm run dev"
    ]
  },
  {
    "id": "ryzen-shop-bot",
    "category": "Tools & Automation",
    "tech": [
      "TypeScript",
      "discord.js",
      "Node.js"
    ],
    "color": "#32a885",
    "glowColor": "rgba(50, 168, 133, 0.22)",
    "githubUrl": "https://github.com/emanuelVINI01/RyzenShopBot",
    "badges": [
      "Discord Bot",
      "Legacy",
      "TypeScript"
    ],
    "year": 2023,
    "stage": "legacy",
    "runCommands": [
      "npm ci",
      "npm run build"
    ]
  },
  {
    "id": "ryzen-hosting",
    "category": "React & AI",
    "tech": [
      "Next.js",
      "React",
      "TypeScript",
      "Chakra UI",
      "Framer Motion"
    ],
    "color": "#7289da",
    "glowColor": "rgba(114, 137, 218, 0.22)",
    "githubUrl": "https://github.com/emanuelVINI01/ryzen-site",
    "badges": [
      "Legacy",
      "TypeScript"
    ],
    "year": 2022,
    "stage": "legacy",
    "runCommands": [
      "npm ci",
      "npm run dev"
    ]
  },
  {
    "id": "dv-duels",
    "category": "Minecraft",
    "tech": [
      "Java",
      "Spigot API",
      "MySQL",
      "HikariCP",
      "Caffeine",
      "Maven"
    ],
    "color": "#ffb86c",
    "glowColor": "rgba(255, 184, 108, 0.18)",
    "githubUrl": "https://github.com/emanuelVINI01/dv-duels",
    "badges": [
      "Java",
      "Legacy"
    ],
    "year": 2022,
    "stage": "legacy",
    "runCommands": [
      "mvn package"
    ]
  },
  {
    "id": "portifolio-frontend",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "TypeScript",
      "React"
    ],
    "color": "#bd93f9",
    "glowColor": "rgba(189, 147, 249, 0.18)",
    "githubUrl": "https://github.com/emanuelVINI01/portifolio-frontend",
    "badges": [
      "Portfolio",
      "TypeScript"
    ],
    "year": 2026,
    "stage": "legacy"
  },
  {
    "id": "z-discord-core",
    "category": "Minecraft",
    "tech": [
      "Java",
      "Discord API",
      "Maven"
    ],
    "color": "#4ade80",
    "glowColor": "rgba(74, 222, 128, 0.2)",
    "githubUrl": "https://github.com/emanuelVINI01/zDiscordCore",
    "badges": [
      "Discord Bot",
      "Java",
      "Legacy"
    ],
    "year": 2022,
    "stage": "legacy"
  },
  {
    "id": "comuni-mine-bot",
    "category": "Minecraft",
    "tech": [
      "TypeScript",
      "discord.js",
      "Node.js"
    ],
    "color": "#22c55e",
    "glowColor": "rgba(34, 197, 94, 0.2)",
    "githubUrl": "https://github.com/emanuelVINI01/ComuniMineBot",
    "badges": [
      "Discord Bot",
      "TypeScript",
      "Legacy"
    ],
    "year": 2023,
    "stage": "legacy"
  },
  {
    "id": "minecraft-feast-bot",
    "category": "Minecraft",
    "tech": [
      "JavaScript",
      "discord.js",
      "Node.js"
    ],
    "color": "#16a34a",
    "glowColor": "rgba(22, 163, 74, 0.2)",
    "githubUrl": "https://github.com/emanuelVINI01/MinecraftFeastBot",
    "badges": [
      "Discord Bot",
      "Legacy"
    ],
    "year": 2023,
    "stage": "legacy"
  },
  {
    "id": "advanced-sql",
    "category": "Minecraft",
    "tech": [
      "Kotlin",
      "SQL",
      "JDBC"
    ],
    "color": "#84cc16",
    "glowColor": "rgba(132, 204, 22, 0.2)",
    "githubUrl": "https://github.com/emanuelVINI01/AdvancedSQL",
    "badges": [
      "Utility",
      "Legacy"
    ],
    "year": 2023,
    "stage": "legacy"
  },
  {
    "id": "z-manutencao",
    "category": "Minecraft",
    "tech": [
      "Java",
      "Spigot API",
      "Maven"
    ],
    "color": "#65a30d",
    "glowColor": "rgba(101, 163, 13, 0.2)",
    "githubUrl": "https://github.com/emanuelVINI01/zManutencao",
    "badges": [
      "Java",
      "Legacy"
    ],
    "year": 2021,
    "stage": "legacy"
  },
  {
    "id": "z-silk2",
    "category": "Minecraft",
    "tech": [
      "Java",
      "Spigot API",
      "Maven"
    ],
    "color": "#4d7c0f",
    "glowColor": "rgba(77, 124, 15, 0.2)",
    "githubUrl": "https://github.com/emanuelVINI01/zSilk2",
    "badges": [
      "Java",
      "Legacy"
    ],
    "year": 2021,
    "stage": "legacy"
  },
  {
    "id": "multi-server-api",
    "category": "Minecraft",
    "tech": [
      "Java",
      "REST API",
      "Spigot API"
    ],
    "color": "#15803d",
    "glowColor": "rgba(21, 128, 61, 0.2)",
    "githubUrl": "https://github.com/emanuelVINI01/MultiServer-API",
    "badges": [
      "API",
      "Java",
      "Legacy"
    ],
    "year": 2023,
    "stage": "legacy"
  },
  {
    "id": "swiss-learn",
    "stage": "application",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Expo",
      "FSRS"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "npm ci",
      "npm run dev"
    ],
    "githubUrl": "https://github.com/emanuelVINI01/swiss-learn",
    "liveUrl": "https://learn.emanuelvini.dev"
  },
  {
    "id": "termop",
    "stage": "experiment",
    "category": "Tools & Automation",
    "tech": [
      "TypeScript",
      "Ink",
      "React",
      "LM Studio",
      "MCP"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "npm ci",
      "npm run dev"
    ],
    "githubUrl": "https://github.com/emanuelVINI01/termop"
  },
  {
    "id": "russian-alphabet",
    "stage": "application",
    "category": "React & AI",
    "tech": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "npm ci",
      "npm run dev"
    ],
    "githubUrl": "https://github.com/emanuelVINI01/russian-alphabet"
  },
  {
    "id": "deadlatch",
    "stage": "scaffold",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "TypeScript",
      "Prisma"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "npm ci",
      "npm run dev"
    ]
  },
  {
    "id": "chess-mistery",
    "stage": "experiment",
    "category": "Research",
    "tech": [
      "Next.js",
      "Python",
      "FastAPI",
      "PyTorch",
      "python-chess"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "cd web",
      "npm ci",
      "npm run dev"
    ]
  },
  {
    "id": "brainer",
    "stage": "experiment",
    "category": "Research",
    "tech": [
      "Rust",
      "Candle",
      "Neural Networks"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "cargo run --release"
    ]
  },
  {
    "id": "kotlin-vortey",
    "stage": "experiment",
    "category": "Tools & Automation",
    "tech": [
      "Kotlin",
      "Ktor",
      "Caffeine",
      "Gradle"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "./gradlew run"
    ],
    "githubUrl": "https://github.com/emanuelVINI01/KotlinVortey"
  },
  {
    "id": "my-game-papers",
    "stage": "application",
    "category": "Tools & Automation",
    "tech": [
      "Electron",
      "React",
      "TypeScript",
      "QR Code"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "npm ci",
      "npm run dev"
    ]
  },
  {
    "id": "agentics",
    "stage": "experiment",
    "category": "React & AI",
    "tech": [
      "Python",
      "Next.js",
      "WebSocket",
      "Ollama",
      "Google Gemini"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "python3 main.py"
    ]
  },
  {
    "id": "lomaw",
    "stage": "experiment",
    "category": "Research",
    "tech": [
      "Rust",
      "GGUF",
      "AVX2",
      "Tokio"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "cargo run -- --help"
    ]
  },
  {
    "id": "my-llm-executor",
    "stage": "experiment",
    "category": "Research",
    "tech": [
      "Rust",
      "Candle",
      "CUDA",
      "Tokenizers"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "cargo run --bin infer"
    ]
  },
  {
    "id": "my-codec",
    "stage": "scaffold",
    "category": "Tools & Automation",
    "tech": [
      "Rust",
      "Clap"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "cargo run -- --help"
    ]
  },
  {
    "id": "compound-interest-calc",
    "stage": "scaffold",
    "category": "Mobile",
    "tech": [
      "Expo",
      "React Native",
      "TypeScript"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "npm ci",
      "npm run start"
    ]
  },
  {
    "id": "office-tools",
    "stage": "scaffold",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "React",
      "TypeScript"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "npm ci",
      "npm run dev"
    ]
  },
  {
    "id": "electron-app",
    "stage": "scaffold",
    "category": "Tools & Automation",
    "tech": [
      "Vite",
      "TypeScript"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "npm ci",
      "npm run dev"
    ]
  },
  {
    "id": "github-follow-bot",
    "stage": "experiment",
    "category": "Tools & Automation",
    "tech": [
      "TypeScript",
      "Octokit",
      "Commander"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": []
  },
  {
    "id": "portifolio",
    "stage": "application",
    "category": "Full Stack",
    "tech": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    "color": "#8be9fd",
    "glowColor": "rgba(139, 233, 253, 0.2)",
    "badges": [],
    "runCommands": [
      "npm ci",
      "npm run dev"
    ],
    "githubUrl": "https://github.com/emanuelVINI01/portifolio",
    "liveUrl": "https://emanuelmissena.com"
  }
];
