import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Section (includes Services features) */}
      <AboutSection />
    </main>
  );
}
