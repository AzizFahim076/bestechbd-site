
'use client';
import { useState } from 'react';

export default function ProjectsList() {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: "Banani Elevated Expressway Phase 2",
      category: "Highways",
      status: "Ongoing", 
      location: "Dhaka",
      description: "Modern elevated highway connecting key areas of Dhaka, reducing traffic congestion and improving urban mobility. Features advanced engineering solutions for urban transportation with zero-accident safety record.",
      image: "https://readdy.ai/api/search-image?query=Elevated%20expressway%20construction%20showing%20concrete%20pillars%20and%20bridge%20deck%20work%20in%20Dhaka%20Bangladesh%2C%20modern%20highway%20infrastructure%20with%20construction%20cranes%20and%20workers%2C%20professional%20documentation%20of%20elevated%20roadway%20development%20with%20safety%20measures%20and%20modern%20construction%20equipment%20visible&width=600&height=400&seq=banani-expressway&orientation=landscape",
      completion: "75%",
      duration: "2022-2025",
      client: "Roads and Highways Department",
      value: "৳450 Crore"
    },
    {
      title: "Hazrat Shahjalal Airport Terminal 3",
      category: "Buildings",
      status: "Completed",
      location: "Dhaka Airport",
      description: "State-of-the-art terminal facility designed to handle increased passenger capacity with modern amenities, advanced architectural design, and international aviation standards compliance.",
      image: "https://readdy.ai/api/search-image?query=Completed%20modern%20airport%20terminal%20building%20in%20Bangladesh%20with%20contemporary%20glass%20and%20steel%20architecture%2C%20Terminal%203%20showing%20professional%20construction%20quality%20with%20clear%20architectural%20lines%2C%20realistic%20photography%20of%20finished%20aviation%20infrastructure%20project&width=600&height=400&seq=terminal-completed&orientation=landscape",
      completion: "100%",
      duration: "2019-2023",
      client: "Civil Aviation Authority of Bangladesh",
      value: "৳680 Crore"
    },
    {
      title: "PWD Highway Chittagong-Dhaka Expansion",
      category: "Highways",
      status: "Ongoing",
      location: "Chittagong-Dhaka Corridor",
      description: "Major highway development project improving connectivity between districts and facilitating economic growth through enhanced transportation infrastructure with modern safety features.",
      image: "https://readdy.ai/api/search-image?query=Highway%20construction%20between%20Chittagong%20and%20Dhaka%20showing%20road%20building%20with%20asphalt%20laying%20equipment%2C%20steam%20rising%20from%20hot%20asphalt%20work%2C%20construction%20workers%20in%20safety%20gear%20operating%20heavy%20road%20construction%20machinery%20including%20pavers%20and%20rollers&width=600&height=400&seq=pwd-highway&orientation=landscape",
      completion: "60%",
      duration: "2021-2025",
      client: "Public Works Department",
      value: "৳320 Crore"
    },
    {
      title: "Karnaphuli Bridge Approach Road",
      category: "Bridges",
      status: "Completed",
      location: "Chittagong",
      description: "Critical bridge approach construction facilitating connectivity to Karnaphuli EPZ and enhancing regional transportation infrastructure with advanced drainage systems.",
      image: "https://readdy.ai/api/search-image?query=Bridge%20approach%20construction%20in%20Chittagong%20Bangladesh%20showing%20concrete%20work%20and%20structural%20engineering%2C%20professional%20construction%20photography%20of%20bridge%20infrastructure%20with%20construction%20equipment%20and%20workers%2C%20realistic%20documentation%20of%20completed%20bridge%20project&width=600&height=400&seq=karnaphuli-bridge&orientation=landscape",
      completion: "100%",
      duration: "2018-2021",
      client: "Local Government Engineering Department",
      value: "৳125 Crore"
    },
    {
      title: "EPZ Industrial Complex Road Network",
      category: "Roads",
      status: "Ongoing",
      location: "Export Processing Zone",
      description: "Comprehensive road network development within industrial zones to support manufacturing and export activities with proper utility infrastructure integration.",
      image: "https://readdy.ai/api/search-image?query=Industrial%20road%20construction%20in%20EPZ%20area%20Bangladesh%20showing%20wide%20roads%20with%20proper%20drainage%20systems%2C%20construction%20workers%20laying%20asphalt%20and%20concrete%2C%20heavy%20machinery%20including%20road%20rollers%20and%20construction%20equipment%20working%20on%20industrial%20infrastructure%20development&width=600&height=400&seq=industrial-roads&orientation=landscape",
      completion: "40%",
      duration: "2023-2026",
      client: "Bangladesh Export Processing Zones Authority",
      value: "৳180 Crore"
    },
    {
      title: "Government Administrative Complex",
      category: "Buildings",
      status: "Planning",
      location: "Dhaka",
      description: "Large-scale government administrative complex featuring modern office facilities, sustainable construction practices, and advanced security systems for government operations.",
      image: "https://readdy.ai/api/search-image?query=Government%20administrative%20building%20construction%20site%20in%20Dhaka%20Bangladesh%20showing%20modern%20office%20complex%20foundation%20work%20and%20structural%20development%2C%20construction%20cranes%20and%20workers%20building%20contemporary%20government%20facility%2C%20professional%20construction%20photography&width=600&height=400&seq=admin-complex&orientation=landscape",
      completion: "15%",
      duration: "2024-2027",
      client: "Public Works Department",
      value: "৳520 Crore"
    }
  ];

  const categories = ['All', 'Highways', 'Buildings', 'Bridges', 'Roads'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleViewDetails = (project) => {
    alert(`Viewing detailed information for ${project.title}`);
  };

  const handleDownloadPDF = (project) => {
    alert(`Downloading project brochure for ${project.title}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Project Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of infrastructure projects that showcase our expertise in highways, buildings, bridges, and specialized construction
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                filter === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === 'Ongoing'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-1 flex items-center">
                  <i className="ri-map-pin-line mr-1"></i>
                  {project.location}
                </p>
                <p className="text-sm text-gray-500 mb-3 flex items-center">
                  <i className="ri-calendar-line mr-1"></i>
                  {project.duration}
                </p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Project Details */}
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Client:</span>
                    <span className="font-medium text-gray-900">{project.client}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Value:</span>
                    <span className="font-bold text-blue-900">{project.value}</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{project.completion}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: project.completion }}
                    ></div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleViewDetails(project)}
                    className="flex-1 bg-blue-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap text-sm"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleDownloadPDF(project)}
                    className="flex-1 border border-blue-900 text-blue-900 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap text-sm"
                  >
                    PDF Brochure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-white rounded-lg p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">৳2,500+</div>
              <div className="text-gray-600">Crore Total Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Ongoing Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
