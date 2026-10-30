// app/sections/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SectionsShell } from "@/components/sections/library-shell";
import "../globals.css"

// Demonstração interna: noindex é mitigação de indexação, não controle de acesso.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function SectionsLayout({ children }: { children: ReactNode }) {
  return <SectionsShell>{children}</SectionsShell>;
}
