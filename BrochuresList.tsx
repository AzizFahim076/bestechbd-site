
'use client';
import { useState } from 'react';

export default function BrochuresList() {
  const [filter, setFilter] = useState('All');
  
  const brochures = [
    {
      title: "Banani Elevated Expressway Project Documentation",
      category: "Projects",
      description: "Comprehensive project documentation including technical specifications, construction timeline, progress reports, and environmental impact assessment for the flagship expressway project.",
      pages: 28,
      size: "4.2 MB", 
      lastUpdated: "December 2024",
      downloadCount: "1,250+",
      image: "https://readdy.ai/api/search-image?query=Professional%20project%20brochure%20cover%20design%20for%20Banani%20Elevated%20Expressway%20showing%20modern%20highway%20construction%20with%20corporate%20layout%2C%20technical%20drawings%20and%20construction%20photography%20combined%2C%20clean%20business%20brochure%20design%20with%20construction%20theme&width=300&height=400&seq=expressway-brochure&orientation=portrait"
    },
    {
      title: "Terminal 3 Construction Project Portfolio",
      category: "Projects", 
      description: "Detailed documentation of Hazrat Shahjalal Airport Terminal 3 construction including architectural plans, safety measures, completion milestones, and quality standards compliance.",
      pages: 35,
      size: "5.8 MB",
      lastUpdated: "November 2024", 
      downloadCount: "980+",
      image: "https://readdy.ai/api/search-image?query=Professional%20construction%20project%20brochure%20for%20Terminal%203%20airport%20construction%20showing%20modern%20terminal%20building%20design%20with%20technical%20specifications%2C%20corporate%20brochure%20layout%20with%20aviation%20construction%20theme%20and%20professional%20presentation&width=300&height=400&seq=terminal-brochure&orientation=portrait"
    },
    {
      title: "PWD Highway Development Program",
      category: "Projects",
      description: "Government highway development initiative documentation with project scope, construction methodology, quality standards, and progress tracking for multiple highway projects.",
      pages: 42,
      size: "6.1 MB",
      lastUpdated: "October 2024",
      downloadCount: "750+",
      image: "https://readdy.ai/api/search-image?query=Government%20highway%20project%20brochure%20design%20showing%20road%20construction%20and%20development%20with%20official%20documentation%20layout%2C%20professional%20brochure%20featuring%20highway%20construction%20imagery%20and%20technical%20specifications%20presentation&width=300&height=400&seq=highway-brochure&orientation=portrait"
    },
    {
      title: "Bestech Group - Complete Company Profile",
      category: "Company",
      description: "Comprehensive company overview featuring our history since 2003, organizational structure, completed projects portfolio, leadership team, and corporate capabilities.",
      pages: 32,
      size: "7.2 MB",
      lastUpdated: "December 2024",
      downloadCount: "2,100+",
      image: "https://readdy.ai/api/search-image?query=Corporate%20company%20profile%20brochure%20design%20for%20construction%20company%20showing%20professional%20business%20presentation%20with%20construction%20projects%20showcase%2C%20modern%20corporate%20brochure%20layout%20with%20company%20information%20and%20project%20portfolio&width=300&height=400&seq=company-profile&orientation=portrait"
    },
    {
      title: "Infrastructure Development Services & Capabilities",
      category: "Services",
      description: "Detailed overview of our construction services, technical capabilities, project management approach, equipment resources, and specialized construction solutions.",
      pages: 24,
      size: "3.9 MB", 
      lastUpdated: "November 2024",
      downloadCount: "650+",
      image: "https://readdy.ai/api/search-image?query=Construction%20services%20brochure%20showing%20infrastructure%20development%20capabilities%20with%20professional%20presentation%20of%20construction%20equipment%2C%20project%20types%2C%20and%20technical%20services%2C%20corporate%20brochure%20design%20with%20construction%20industry%20theme&width=300&height=400&seq=services-brochure&orientation=portrait"
    },
    {
      title: "Safety Standards & Construction Procedures",
      category: "Safety",
      description: "Comprehensive safety protocols, procedures, and standards implemented across all construction projects, including PPE requirements, training programs, and accident prevention measures.",
      pages: 20,
      size: "2.8 MB",
      lastUpdated: "September 2024", 
      downloadCount: "850+",
      image: "https://readdy.ai/api/search-image?query=Construction%20safety%20standards%20brochure%20design%20showing%20safety%20equipment%2C%20procedures%2C%20and%20construction%20site%20safety%20measures%2C%20professional%20safety%20documentation%20with%20construction%20workers%20in%20safety%20gear%20and%20safety%20protocols%20presentation&width=300&height=400&seq=safety-brochure&orientation=portrait"
    },
    {
      title: "Government Contracts & Partnership Portfolio",
      category: "Government",
      description: "Documentation of our government partnerships with PWD, RHD, LGED, and CAAB including contract details, project deliveries, and public sector collaboration achievements.",
      pages: 30,
      size: "4.5 MB",
      lastUpdated: "October 2024",
      downloadCount: "420+", 
      image: "https://readdy.ai/api/search-image?query=Government%20contracts%20and%20partnership%20brochure%20design%20showing%20official%20collaboration%20with%20government%20agencies%2C%20professional%20documentation%20of%20public%20sector%20projects%20and%20partnerships%20with%20formal%20business%20presentation%20layout&width=300&height=400&seq=government-brochure&orientation=portrait"
    },
    {
      title: "Technical Specifications & Quality Standards",
      category: "Technical",
      description: "Detailed technical documentation covering construction standards, material specifications, quality control processes, and engineering excellence protocols used in all projects.",
      pages: 26,
      size: "3.6 MB",
      lastUpdated: "November 2024",
      downloadCount: "380+",
      image: "https://readdy.ai/api/search-image?query=Technical%20specifications%20brochure%20design%20for%20construction%20standards%20showing%20engineering%20documentation%2C%20quality%20control%20processes%2C%20and%20technical%20construction%20details%20with%20professional%20engineering%20presentation%20layout&width=300&height=400&seq=technical-brochure&orientation=portrait"
    }
  ];

  const categories = ['All', 'Projects', 'Company', 'Services', 'Safety', 'Government', 'Technical'];
  
  const filteredBrochures = filter === 'All' 
    ? brochures 
    : brochures.filter(brochure => brochure.category === filter);

  const handleDownload = (brochure) => {
    alert(`Downloading ${brochure.title} brochure (${brochure.size})...`);
  };

  const handlePreview = (brochure) => {
    alert(`Opening preview for ${brochure.title}...`); 
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Download Project Brochures</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Access detailed project information, specifications, and documentation for our infrastructure development projects. 
            All brochures are organized by category with file sizes and update dates for your convenience.
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

        {/* Brochures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrochures.map((brochure, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={brochure.image}
                alt={brochure.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {brochure.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <i className="ri-file-text-line mr-1"></i>
                    {brochure.pages} pages
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{brochure.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{brochure.description}</p>
                
                {/* File Information */}
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <i className="ri-file-text-line mr-1 text-blue-900"></i>
                    <span className="font-medium">{brochure.size}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-calendar-line mr-1 text-blue-900"></i>
                    <span>{brochure.lastUpdated}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-download-line mr-1 text-blue-900"></i>
                    <span>{brochure.downloadCount}</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleDownload(brochure)}
                    className="flex-1 bg-blue-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center text-sm"
                  >
                    <i className="ri-download-line mr-2"></i>
                    Download PDF
                  </button>
                  <button 
                    onClick={() => handlePreview(brochure)}
                    className="flex-1 border border-blue-900 text-blue-900 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap text-sm"
                  >
                    <i className="ri-eye-line mr-2"></i>
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Statistics */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">8</div>
              <div className="text-gray-600">Available Brochures</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">200+</div>
              <div className="text-gray-600">Total Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">7,000+</div>
              <div className="text-gray-600">Total Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">40MB+</div>
              <div className="text-gray-600">Complete Package</div>
            </div>
          </div>
        </div>

        {/* Download All Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-900 to-slate-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Complete Documentation Package</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Download all project brochures, company information, and technical documentation in one comprehensive package. 
            Perfect for business partners, clients, and stakeholders.
          </p>
          <button 
            onClick={() => alert('Downloading complete brochure package (40+ MB)...')}
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-download-cloud-line mr-2"></i>
            Download Complete Package (40+ MB)
          </button>
        </div>
      </div>
    </section>
  );
}
