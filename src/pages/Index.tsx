import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CollaborationsSection from "@/components/sections/CollaborationsSection";
import AboutSection from "@/components/sections/AboutSection";
import VisionSection from "@/components/sections/VisionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import NetworkSection from "@/components/sections/NetworkSection";
import ProductionSection from "@/components/sections/ProductionSection";
import WhySection from "@/components/sections/WhySection";
import ClientsSection from "@/components/sections/ClientsSection";
import SecuritySection from "@/components/sections/SecuritySection";
import FounderSection from "@/components/sections/FounderSection";
import PromiseSection from "@/components/sections/PromiseSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CollaborationsSection />
        <AboutSection />
        <VisionSection />
        <ServicesSection />
        <NetworkSection />
        <ProductionSection />
        <WhySection />
        <ClientsSection />
        <SecuritySection />
        <FounderSection />
        <PromiseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
