import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import DiscountSection from './components/DiscountSection';
import CarDetailingSection from './components/CarDetailingSection';
import { CarWashSection } from './components/CarWashSection';
import ProductSection from './components/ProductSection';
import TestimonialSection from './components/TestimonialSection';
import ClientLogosSection from './components/ClientLogosSection';
import Footer from './components/Footer';

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

      {/* Car Wash Section */}
      <CarWashSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Client Logos Section */}
      <ClientLogosSection />

      {/* Popular Products Section */}
      <ProductSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
