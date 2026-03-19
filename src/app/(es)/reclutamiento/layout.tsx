import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elyna — Pre-filtro de Candidatos con IA de Voz",
  description:
    "Automatiza el pre-filtro de reclutamiento con agentes de voz IA. Llama a cientos de candidatos en paralelo, extrae datos clave y recibe un ranking listo para entrevistar.",
  alternates: {
    canonical: "https://elyna.mx/reclutamiento",
    languages: { es: "https://elyna.mx/reclutamiento", en: "https://elyna.mx/en/reclutamiento" },
  },
};

export default function ReclutamientoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
