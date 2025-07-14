
'use client';

export default function ProjectsHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.7)), url('https://readdy.ai/api/search-image?query=Panoramic%20view%20of%20multiple%20construction%20projects%20in%20Bangladesh%20showing%20elevated%20expressways%2C%20highway%20construction%2C%20and%20modern%20infrastructure%20development%20with%20construction%20cranes%20and%20heavy%20machinery%20across%20the%20landscape%2C%20professional%20construction%20photography%20documenting%20nation-wide%20infrastructure%20progress%2C%20realistic%20wide-angle%20documentation%20of%20major%20construction%20initiatives&width=1920&height=600&seq=projects-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Major Infrastructure Projects</h1>
        <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-4">
          Showcasing Bestech Group's transformative impact on Bangladesh's infrastructure through highways, government buildings, and airport terminals that define our nation's development
        </p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          From elevated expressways to modern terminals, explore our portfolio of completed and ongoing projects that build Bangladesh's future
        </p>
      </div>
    </section>
  );
}
