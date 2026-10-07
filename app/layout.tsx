import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "@/components/Providers";
import "./globals.css";

const jetbrains = localFont({
  src: "../public/fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
  display: "swap",
  variable: "--font-jetbrains",
});

const firaCode = localFont({
  src: "../public/fonts/fira-code-latin.woff2",
  weight: "300 700",
  display: "swap",
  variable: "--font-fira",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emanuelmissena.com"),
  title: {
    default: "Emanuel Missena – Full-stack Developer Portfolio",
    template: "%s | Emanuel Vini",
  },
  description:
    "Emanuel Missena (Emanuel Vini): aplicações web com TypeScript, Next.js e PostgreSQL, ferramentas com IA e experimentos em Rust. Projetos, código e trajetória.",
  keywords: [
    "Emanuel Vini",
    "EmanuelMissena",
    "Emanuel Missena",
    "emanuelvini",
    "emanuelVINI01",
    "full-stack developer",
    "desenvolvedor full-stack",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "APIs REST",
    "sistemas transacionais",
    "IA aplicada",
    "JavaScript",
    "Node.js",
  ],
  authors: [{ name: "Emanuel Vini", url: "https://emanuelmissena.com" }],
  creator: "Emanuel Vini",
  publisher: "Emanuel Vini",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://emanuelmissena.com",
  },
  icons: {
    icon: "/profile.png",
    apple: "/profile.png",
  },
  openGraph: {
    title: "Emanuel Vini (EmanuelMissena) | Full-stack Developer",
    description:
      "Portfólio de Emanuel Vini (EmanuelMissena). Engenharia de software do baixo nível (Rust, VMs) ao alto nível (APIs REST, mobile e IA).",
    url: "https://emanuelmissena.com",
    siteName: "Emanuel Vini Portfolio",
    images: [{ url: "/profile.png", width: 400, height: 400, alt: "Emanuel Vini – Full-stack Developer" }],
    type: "profile",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Emanuel Vini (EmanuelMissena) | Full-stack Developer",
    description: "Do baixo nível com Rust/VMs ao alto nível com Next.js, APIs e IA aplicada.",
    images: ["/profile.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emanuel Vini",
  alternateName: ["EmanuelMissena", "Emanuel Missena", "emanuelVINI", "emanuelvini"],
  url: "https://emanuelmissena.com",
  image: "https://emanuelmissena.com/profile.png",
  jobTitle: "Full-stack Software Developer",
  description:
    "Desenvolvedor full-stack com projetos em TypeScript, Next.js, PostgreSQL, IA aplicada e máquinas virtuais experimentais em Rust.",
  knowsAbout: [
    "Next.js", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL",
    "APIs REST", "Sistemas Transacionais", "Inteligência Artificial",
    "Java", "Kotlin", "Rust", "Servidores Linux", "Discord Bots",
  ],
  sameAs: [
    "https://github.com/emanuelVINI01",
    "https://emanuelmissena.com",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jetbrains.variable} ${firaCode.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jetbrains.className} min-h-full`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
