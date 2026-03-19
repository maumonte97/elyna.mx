import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elyna — Prefiltro de Candidatos con IA de Voz",
  description:
    "Automatiza el prefiltro de reclutamiento con agentes de voz IA. Llama a cientos de candidatos en paralelo, extrae datos clave y recibe un ranking listo para entrevistar.",
};

export default function ReclutamientoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
