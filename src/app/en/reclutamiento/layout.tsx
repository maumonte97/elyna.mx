import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elyna — AI-Powered Candidate Screening",
  description:
    "Automate recruitment screening with AI voice agents. Call hundreds of candidates in parallel, extract key data, and get a ranking ready to interview.",
  alternates: {
    canonical: "https://elyna.mx/en/reclutamiento",
    languages: { es: "https://elyna.mx/reclutamiento", en: "https://elyna.mx/en/reclutamiento" },
  },
};

export default function RecruitmentLayoutEN({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
