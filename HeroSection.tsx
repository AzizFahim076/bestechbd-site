'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Professional%20construction%20workers%20and%20engineers%20working%20on%20road%20construction%20project%20in%20Bangladesh%20under%20bright%20sunlight%2C%20with%20asphalt%20steam%20rising%2C%20heavy%20machinery%20and%20cranes%20in%20background%2C%20realistic%20documentary%20photography%20style%20showing%20infrastructure%20development%2C%20workers%20wearing%20safety%20helmets%20and%20high-visibility%20vests%2C%20modern%20construction%20site%20with%20concrete%20pouring%20and%20road%20building%20equipment%2C%20authentic%20Bangladeshi%20construction%20scene%20with%20workers%20dedication%20and%20professionalism&width=1920&height=1080&seq=hero-construction&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Build the Roads to <span className="text-yellow-400">Tomorrow</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-4 font-medium">
              Powered by Progress, Grounded in Bangladesh
            </p>
            <p className="text-lg mb-8 text-gray-200 leading-relaxed">
              Bestech Group, a professional construction and infrastructure supply firm under Chowdhury Group, 
              has been shaping Bangladesh's infrastructure landscape through major public projects across the nation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/careers" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap text-center">
                Apply Now
              </Link>
              <Link href="/projects" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap text-center">
                View Projects
              </Link>
              <Link href="/brochures" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors cursor-pointer whitespace-nowrap text-center">
                Download Brochures
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20construction%20engineer%20wearing%20safety%20helmet%20and%20high-visibility%20vest%20at%20Bangladesh%20construction%20site%2C%20holding%20blueprints%20and%20inspecting%20road%20construction%20work%2C%20authentic%20documentary%20photography%20style%20showing%20dedicated%20professional%20worker%20against%20construction%20machinery%20background%2C%20realistic%20lighting%20and%20professional%20appearance%2C%20infrastructure%20development%20scene&width=300&height=400&seq=engineer1&orientation=portrait"
                  alt="Construction Engineer"
                  className="w-full h-48 object-cover object-top rounded-lg"
                />
                <img 
                  src="https://readdy.ai/api/search-image?query=Heavy%20construction%20machinery%20including%20cranes%20and%20asphalt%20equipment%20working%20on%20major%20road%20construction%20project%20in%20Bangladesh%2C%20steam%20rising%20from%20hot%20asphalt%2C%20realistic%20construction%20site%20photography%20showing%20modern%20infrastructure%20development%2C%20professional%20construction%20scene%20with%20workers%20and%20equipment%20in%20action&width=300&height=300&seq=machinery1&orientation=squarish"
                  alt="Construction Machinery"
                  className="w-full h-36 object-cover object-top rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=Concrete%20pouring%20operation%20at%20Bangladesh%20construction%20site%20with%20workers%20in%20safety%20gear%2C%20steam%20and%20dust%20in%20realistic%20construction%20environment%2C%20professional%20construction%20team%20working%20on%20infrastructure%20project%2C%20authentic%20documentary%20style%20photography%20showing%20construction%20progress%20and%20teamwork&width=300&height=300&seq=concrete1&orientation=squarish"
                  alt="Concrete Pouring"
                  className="w-full h-36 object-cover object-top rounded-lg"
                />
                <img 
                  src="https://readdy.ai/api/search-image?query=Construction%20workers%20team%20at%20Bangladesh%20road%20construction%20site%20wearing%20safety%20helmets%20and%20reflective%20vests%2C%20working%20together%20on%20infrastructure%20development%20project%2C%20realistic%20construction%20photography%20showing%20teamwork%20and%20professionalism%2C%20authentic%20construction%20scene%20with%20modern%20equipment&width=300&height=400&seq=team1&orientation=portrait"
                  alt="Construction Team"
                  className="w-full h-48 object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}