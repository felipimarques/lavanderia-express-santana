import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "#1 Lavanderia Express Santana — 4.8★ no Google",
  description:
    "Lavanderia express em Santana, Zona Norte. Enquanto sua roupa lava, sua vida continua: café, treino, mercado, série. Nota 4.8 no Google com 54 avaliações. WhatsApp (11) 99181-4685.",
  keywords: ["lavanderia Santana", "lavanderia express Zona Norte", "passadoria"],
  openGraph: { title: "#1 Lavanderia Express — sua roupa lava, sua vida continua", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
