import HeroSlider from './components/HeroSlider';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Premium Wash
              </h3>
              <p className="text-gray-600 mb-4">
                Complete exterior and interior cleaning with premium products
              </p>
              <span className="text-[#e81c2e] font-bold text-xl">$49.99</span>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Express Wash
              </h3>
              <p className="text-gray-600 mb-4">
                Quick and efficient exterior wash for busy schedules
              </p>
              <span className="text-[#e81c2e] font-bold text-xl">$24.99</span>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Full Detailing
              </h3>
              <p className="text-gray-600 mb-4">
                Professional detailing service for showroom finish
              </p>
              <span className="text-[#e81c2e] font-bold text-xl">$149.99</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
