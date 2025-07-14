'use client';

export default function GalleryHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.7)), url('https://readdy.ai/api/search-image?query=Construction%20site%20gallery%20view%20in%20Bangladesh%20showing%20multiple%20construction%20activities%20simultaneously%2C%20steam%20rising%20from%20asphalt%20work%2C%20heavy%20machinery%20operations%2C%20workers%20in%20safety%20gear%2C%20concrete%20pouring%2C%20and%20crane%20operations%2C%20professional%20construction%20photography%20documenting%20various%20construction%20processes&width=1920&height=600&seq=gallery-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Project Gallery</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Explore our construction projects through authentic documentation of Bangladesh's infrastructure development
        </p>
      </div>
    </section>
  );
}