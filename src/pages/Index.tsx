import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppGrid from "@/components/AppGrid";
import QualitySection from "@/components/QualitySection";
import ProductivitySection from "@/components/ProductivitySection";
import DevicesSection from "@/components/DevicesSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import UsersSection from "@/components/UsersSection";
import Footer from "@/components/Footer";
import LevelUpSection from "@/components/LevelUpSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AppGrid />
      <LevelUpSection />
      <QualitySection />
      <ProductivitySection />
      <DevicesSection />
      <EnterpriseSection />
      <UsersSection />
      <Footer />
    </div>
  );
};

export default Index;
