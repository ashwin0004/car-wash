import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import DiscountSection from './components/DiscountSection';
import CarDetailingSection from './components/CarDetailingSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Section (includes Services features) */}
      <AboutSection />

      {/* Services Section (carousel/showcase) - below About */}
      <ServicesSection />
      {/* Pricing Section (placed after Services) */}
      <PricingSection />

      {/* Car Detailing Section (placed after Pricing) */}
      <CarDetailingSection />

      {/* Discount Program Section */}
      <DiscountSection />
    </main>
  );
}
