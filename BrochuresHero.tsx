'use client';

export default function BrochuresHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20construction%20documentation%20and%20project%20blueprints%20at%20Bangladesh%20construction%20site%2C%20engineers%20reviewing%20technical%20drawings%20and%20project%20brochures%2C%20construction%20plans%20and%20specifications%20with%20construction%20equipment%20in%20background%2C%20realistic%20workplace%20photography%20showing%20project%20documentation%20process&width=1920&height=600&seq=brochures-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Project Brochures</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Download detailed project information, specifications, and documentation for our infrastructure development projects
        </p>
      </div>
    </section>
  );
}