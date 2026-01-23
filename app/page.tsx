import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Section (includes Services features) */}
      <AboutSection />

      {/* Services Section (carousel/showcase) - below About */}
      <ServicesSection />
    </main>
  );
}
