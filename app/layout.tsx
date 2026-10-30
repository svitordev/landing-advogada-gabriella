// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Gabriella | Advocacia Personalizada",
  description:
    "Informações sobre a atuação profissional e os serviços jurídicos apresentados por Maria Gabriella — Advocacia Personalizada.",
  // Política temporária de pré-publicação: conteúdo da home ainda pendente de
  // aprovação da cliente. A liberação da indexação é etapa obrigatória do go-live.
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`min-h-screen bg-background text-foreground antialiased ${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
