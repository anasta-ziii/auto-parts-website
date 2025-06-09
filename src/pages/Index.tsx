import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SearchSection />
      <CategoriesSection />
      <FeaturedProducts />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
