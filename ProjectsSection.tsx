'use client';
import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Banani Elevated Expressway",
      status: "Ongoing",
      description: "Modern elevated highway connecting key areas of Dhaka, reducing traffic congestion and improving urban mobility.",
      image: "https://readdy.ai/api/search-image?query=Elevated%20expressway%20construction%20in%20Dhaka%20Bangladesh%20showing%20concrete%20pillars%20and%20road%20deck%20construction%2C%20modern%20highway%20infrastructure%20project%20with%20construction%20cranes%20and%20workers%2C%20realistic%20construction%20photography%20documenting%20elevated%20roadway%20development%2C%20professional%20construction%20site%20with%20safety%20measures%20and%20modern%20equipment&width=600&height=400&seq=expressway1&orientation=landscape"
    },
    {
      title: "Terminal 3 Construction",
      status: "Completed",
      description: "State-of-the-art terminal facility designed to handle increased passenger capacity with modern amenities.",
      image: "https://readdy.ai/api/search-image?query=Modern%20airport%20terminal%20building%20construction%20in%20Bangladesh%20showing%20contemporary%20architecture%20with%20glass%20facade%20and%20steel%20structure%2C%20professional%20construction%20photography%20of%20Terminal%203%20project%2C%20workers%20and%20construction%20equipment%20visible%2C%20realistic%20infrastructure%20development%20scene%20with%20clear%20architectural%20details&width=600&height=400&seq=terminal3&orientation=landscape"
    },
    {
      title: "PWD Highway Project",
      status: "Ongoing",
      description: "Major highway development project improving connectivity between districts and facilitating economic growth.",
      image: "https://readdy.ai/api/search-image?query=Highway%20construction%20project%20in%20Bangladesh%20showing%20road%20building%20process%20with%20asphalt%20laying%20equipment%2C%20steam%20rising%20from%20hot%20asphalt%2C%20construction%20workers%20in%20safety%20gear%2C%20heavy%20machinery%20including%20road%20rollers%20and%20pavers%2C%20realistic%20documentation%20of%20infrastructure%20development%20work&width=600&height=400&seq=highway1&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">
            Showcasing our commitment to building Bangladesh's infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-blue-900 font-medium hover:text-blue-700 cursor-pointer whitespace-nowrap">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}