import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DemoCall from "@/components/landing/DemoCall";
import Stats from "@/components/landing/Stats";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import TransferSection from "@/components/landing/TransferSection";
import Solutions from "@/components/landing/Solutions";
import Automation from "@/components/landing/Automation";
import Integrations from "@/components/landing/Integrations";
import Industries from "@/components/landing/Industries";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--dark)] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <DemoCall />
      <Stats />
      <Features />
      <HowItWorks />
      <TransferSection />
      <Solutions />
      <Automation />
      <Integrations />
      <Industries />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
