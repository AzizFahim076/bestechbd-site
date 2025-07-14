'use client';
import { useState } from 'react';

export default function PhotoGallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      category: "Construction Teams",
      title: "Engineers at Banani Expressway",
      image: "https://readdy.ai/api/search-image?query=Professional%20construction%20engineers%20team%20meeting%20at%20Banani%20Expressway%20construction%20site%20in%20Bangladesh%2C%20wearing%20safety%20helmets%20and%20high-visibility%20vests%2C%20discussing%20project%20blueprints%20with%20elevated%20expressway%20construction%20in%20background%2C%20realistic%20workplace%20documentation%20photography&width=600&height=400&seq=team-engineers&orientation=landscape"
    },
    {
      category: "Machinery",
      title: "Heavy Equipment Operations",
      image: "https://readdy.ai/api/search-image?query=Heavy%20construction%20machinery%20including%20excavators%2C%20cranes%2C%20and%20road%20construction%20equipment%20working%20at%20Bangladesh%20construction%20site%2C%20steam%20and%20dust%20from%20active%20construction%20operations%2C%20realistic%20industrial%20photography%20showing%20modern%20construction%20equipment%20in%20action&width=600&height=400&seq=heavy-machinery&orientation=landscape"
    },
    {
      category: "Steam & Operations",
      title: "Asphalt Steam Operations",
      image: "https://readdy.ai/api/search-image?query=Steam%20rising%20from%20hot%20asphalt%20laying%20operation%20in%20Bangladesh%20road%20construction%2C%20construction%20workers%20operating%20asphalt%20equipment%20with%20visible%20steam%20and%20heat%20waves%2C%20professional%20documentation%20of%20road%20construction%20process%20with%20safety%20measures%20in%20place&width=600&height=400&seq=asphalt-steam&orientation=landscape"
    },
    {
      category: "Construction Teams",
      title: "Site Supervision Team",
      image: "https://readdy.ai/api/search-image?query=Construction%20site%20supervisors%20and%20workers%20team%20at%20Bangladesh%20infrastructure%20project%2C%20diverse%20group%20of%20construction%20professionals%20in%20safety%20gear%20coordinating%20construction%20activities%2C%20realistic%20workplace%20photography%20showing%20teamwork%20and%20professional%20collaboration&width=600&height=400&seq=supervision-team&orientation=landscape"
    },
    {
      category: "Steam & Operations",
      title: "Concrete Pouring Operations",
      image: "https://readdy.ai/api/search-image?query=Concrete%20pouring%20operation%20at%20Bangladesh%20construction%20site%20with%20workers%20in%20safety%20gear%2C%20steam%20and%20dust%20from%20concrete%20mixing%20and%20pouring%20process%2C%20construction%20team%20working%20on%20bridge%20or%20building%20foundation%2C%20professional%20construction%20documentation%20photography&width=600&height=400&seq=concrete-steam&orientation=landscape"
    },
    {
      category: "Machinery",
      title: "Crane Operations",
      image: "https://readdy.ai/api/search-image?query=Large%20construction%20cranes%20working%20at%20Bangladesh%20infrastructure%20project%20site%2C%20multiple%20cranes%20lifting%20construction%20materials%20and%20structural%20components%2C%20professional%20construction%20photography%20showing%20modern%20crane%20operations%20against%20clear%20sky%20background&width=600&height=400&seq=crane-operations&orientation=landscape"
    },
    {
      category: "Construction Teams",
      title: "Field Workers Team",
      image: "https://readdy.ai/api/search-image?query=Construction%20field%20workers%20team%20in%20Bangladesh%20working%20on%20road%20construction%20project%2C%20workers%20wearing%20safety%20helmets%20and%20reflective%20vests%2C%20realistic%20documentation%20of%20construction%20workforce%20showing%20dedication%20and%20professionalism%20in%20infrastructure%20development&width=600&height=400&seq=field-workers&orientation=landscape"
    },
    {
      category: "Steam & Operations",
      title: "Road Construction Steam",
      image: "https://readdy.ai/api/search-image?query=Road%20construction%20in%20Bangladesh%20with%20steam%20rising%20from%20asphalt%20operations%2C%20road%20rollers%20and%20paving%20equipment%20creating%20steam%20clouds%2C%20construction%20workers%20managing%20road%20building%20process%2C%20authentic%20documentation%20of%20highway%20construction%20activities&width=600&height=400&seq=road-steam&orientation=landscape"
    },
    {
      category: "Machinery",
      title: "Excavation Equipment",
      image: "https://readdy.ai/api/search-image?query=Large%20excavators%20and%20earthmoving%20equipment%20working%20at%20Bangladesh%20construction%20site%2C%20dust%20and%20steam%20from%20excavation%20operations%2C%20heavy%20machinery%20preparing%20construction%20foundation%2C%20professional%20documentation%20of%20earthwork%20and%20excavation%20activities&width=600&height=400&seq=excavation-equipment&orientation=landscape"
    },
    {
      category: "Construction Teams",
      title: "Safety Inspection Team",
      image: "https://readdy.ai/api/search-image?query=Construction%20safety%20inspection%20team%20at%20Bangladesh%20infrastructure%20project%2C%20safety%20officers%20and%20engineers%20conducting%20site%20inspection%20wearing%20safety%20gear%2C%20professional%20documentation%20of%20construction%20safety%20protocols%20and%20quality%20control%20measures&width=600&height=400&seq=safety-inspection&orientation=landscape"
    },
    {
      category: "Steam & Operations",
      title: "Industrial Steam Operations",
      image: "https://readdy.ai/api/search-image?query=Industrial%20construction%20operations%20in%20Bangladesh%20with%20steam%20from%20concrete%20mixing%20and%20asphalt%20heating%2C%20construction%20workers%20operating%20industrial%20equipment%20with%20visible%20steam%20and%20heat%20effects%2C%20realistic%20construction%20site%20photography%20showing%20industrial%20processes&width=600&height=400&seq=industrial-steam&orientation=landscape"
    },
    {
      category: "Machinery",
      title: "Bridge Construction Equipment",
      image: "https://readdy.ai/api/search-image?query=Specialized%20bridge%20construction%20equipment%20and%20cranes%20working%20on%20bridge%20project%20in%20Bangladesh%2C%20construction%20machinery%20positioned%20for%20bridge%20deck%20installation%2C%20professional%20engineering%20photography%20showing%20bridge%20construction%20technology%20and%20equipment&width=600&height=400&seq=bridge-equipment&orientation=landscape"
    }
  ];

  const categories = ['All', 'Construction Teams', 'Machinery', 'Steam & Operations'];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                filter === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative">
                <img 
                  src={image.image}
                  alt={image.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="ri-eye-line text-gray-900 text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <span className="text-xs text-blue-600 font-medium">{image.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="max-w-4xl w-full">
              <div className="flex justify-between items-center mb-4">
                <div className="text-white">
                  <span className="text-sm text-gray-300">{selectedImage.category}</span>
                  <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
              <img 
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}