"use client";

import Navbar from "@/components/landing/Navbar";
import RecruitHero from "@/components/reclutamiento/RecruitHero";
import RecruitProblem from "@/components/reclutamiento/RecruitProblem";
import RecruitDemoCall from "@/components/reclutamiento/RecruitDemoCall";
import RecruitHowItWorks from "@/components/reclutamiento/RecruitHowItWorks";
import RecruitFeatures from "@/components/reclutamiento/RecruitFeatures";
import RecruitUseCases from "@/components/reclutamiento/RecruitUseCases";
import RecruitResults from "@/components/reclutamiento/RecruitResults";
import RecruitAutomation from "@/components/reclutamiento/RecruitAutomation";
import Integrations from "@/components/landing/Integrations";
import Pricing from "@/components/landing/Pricing";
import RecruitFAQ from "@/components/reclutamiento/RecruitFAQ";
import RecruitCTA from "@/components/reclutamiento/RecruitCTA";
import Footer from "@/components/landing/Footer";

export default function ReclutamientoPage() {
  return (
    <main>
      <Navbar />
      <RecruitHero />
      <RecruitProblem />
      <RecruitDemoCall />
      <RecruitHowItWorks />
      <RecruitFeatures />
      <RecruitUseCases />
      <RecruitResults />
      <RecruitAutomation />
      <Integrations />
      <Pricing />
      <RecruitFAQ />
      <RecruitCTA />
      <Footer />
    </main>
  );
}
