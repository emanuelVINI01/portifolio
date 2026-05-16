import type { Metadata } from "next";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emanuelvini.dev"),
  title: {
    default: "emanuelVINI | Full-stack Developer Portfolio",
    template: "%s | emanuelVINI",
  },
  description:
    "Portfolio interativo de Emanuel Vini, desenvolvedor full-stack focado em produtos web, APIs resilientes, sistemas transacionais, automação e interfaces com Framer Motion.",
  icons: {
    icon: "https://github.com/emanuelVINI01.png",
    apple: "https://github.com/emanuelVINI01.png",
  },
  openGraph: {
    title: "emanuelVINI | Full-stack Developer Portfolio",
    description:
      "Produtos web, APIs resilientes, sistemas transacionais, automação e interfaces com Framer Motion.",
    url: "https://emanuelvini.dev",
    siteName: "emanuelVINI",
    images: ["https://github.com/emanuelVINI01.png"],
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jetbrains.variable} ${firaCode.variable} h-full`}>
      <body className={`${jetbrains.className} min-h-full`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
