
'use client';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Bestech Group</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Under the umbrella of Chowdhury Group, we are committed to building Bangladesh's infrastructure 
            with excellence, integrity, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              Bestech Group stands as a pillar of Bangladesh's infrastructure development, specializing in 
              construction and supply services for major public projects. As part of the renowned Chowdhury Group, 
              we bring decades of experience and unwavering commitment to nation-building.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our expertise spans across critical infrastructure projects including roads, highways, terminals, 
              elevated expressways, and high-rise buildings, making us a trusted partner for government and 
              private sector development initiatives.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-900 rounded-full">
                <i className="ri-award-line text-white text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Excellence in Construction</h4>
                <p className="text-gray-600">Delivering quality infrastructure projects across Bangladesh</p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20construction%20company%20office%20building%20in%20Bangladesh%20with%20professional%20corporate%20architecture%2C%20clean%20lines%20and%20contemporary%20design%2C%20showing%20Bestech%20Group%20headquarters%20with%20glass%20facade%20and%20corporate%20signage%2C%20professional%20business%20environment%20with%20clear%20blue%20sky%20background%2C%20realistic%20architectural%20photography&width=600&height=400&seq=office-building&orientation=landscape"
              alt="Bestech Group Office"
              className="w-full h-80 object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Starting Journey Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Starting Journey</h3>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg p-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-900 leading-relaxed font-medium">
                Bestech began with a small LGED-issued access road in Agrabad, Chattogram. What started with basic brick 
                soling and drainage soon became a PWD-registered contractor undertaking projects worth millions in government 
                contracts. From our humble start to present-day mega-scale execution, we remain proud of our journey — built 
                on grit, discipline, and strategic vision.
              </p>
            </div>
          </div>
        </div>

        {/* Company History Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Company History</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Bestech Group started in 2003 as a small subcontractor handling access road and soling works in Chattogram. 
                By 2009, the company had secured PWD enlistment and took on mid-sized administrative building projects in the 
                Dhaka North zone. Our major breakthrough came in 2015 with participation in Dhaka's elevated highway development 
                programs, and since then we've expanded into multiple national-level contracts including Terminal 3 (Hazrat 
                Shahjalal Airport), expressway expansions, and multi-storied government complexes.
              </p>
            </div>
          </div>
        </div>

        {/* Company Overview Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Company Overview</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Company Details</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="ri-building-line text-blue-900 text-lg mr-3"></i>
                    <span className="text-gray-700"><strong>Sister Concern:</strong> Chowdhury Group</span>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-tools-line text-blue-900 text-lg mr-3 mt-1"></i>
                    <div>
                      <span className="text-gray-700"><strong>Specialties:</strong></span>
                      <p className="text-gray-600">Roads, Expressways, Airports, Buildings, Government Projects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-map-pin-line text-blue-900 text-lg mr-3 mt-1"></i>
                    <div>
                      <span className="text-gray-700"><strong>Regions Served:</strong></span>
                      <p className="text-gray-600">Dhaka, Chattogram, Rajshahi, Khulna, Barisal</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Signature Projects</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                    Dhaka Airport Terminal 3
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                    Banani Elevated Expressway
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                    Multiple PWD Complexes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                    National Highway Expansion (RHD)
                  </li>
                </ul>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4 mt-6">Clients & Partners</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">PWD</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">RHD</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">LGED</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">CAAB</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Private Developers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership History Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership History</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bestech Group was founded under the strategic leadership of Mr. Habibur Rahman Chowdhury, visionary entrepreneur 
                and Director of Chowdhury Group. His industrial foresight laid the foundation for an engineering-first construction 
                company. In 2016, Engineer Md. Nurul Amin (BUET alumnus and former PWD Project Director) took over as Managing Director. 
                His leadership introduced automation in project monitoring, risk control systems, and third-party material verification — 
                setting new benchmarks for public works in Bangladesh.
              </p>
            </div>
          </div>
          
          {/* Company Hero Section */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-700 rounded-lg shadow-lg p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Company Hero</h4>
              <p className="text-lg text-blue-100 leading-relaxed">
                Among our most respected engineers is Engr. Shamim Uddin, the lead on the Banani Elevated Expressway Phase 2 project. 
                With zero site accidents and multiple schedule accelerations, his contributions showcased true professionalism and site 
                discipline. His methods are now part of Bestech's in-house training protocols and safety briefings.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-900 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Integrity in Execution</h4>
              <p className="text-gray-600 text-center">Delivering projects with precision, honesty, and legal compliance</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
                <i className="ri-flag-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Nation-Building First</h4>
              <p className="text-gray-600 text-center">Contributing to long-term national growth through infrastructure</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-4">
                <i className="ri-team-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Workforce Empowerment</h4>
              <p className="text-gray-600 text-center">Prioritizing safety, training, and the welfare of our workers</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-slate-600 rounded-full mx-auto mb-4">
                <i className="ri-leaf-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Sustainability & Innovation</h4>
              <p className="text-gray-600 text-center">Introducing modern techniques, energy awareness, and environmental protection</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                <i className="ri-file-check-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Accountability</h4>
              <p className="text-gray-600 text-center">Reporting transparently to clients, auditors, and project partners</p>
            </div>
          </div>
        </div>

        {/* Corporate Social Responsibility Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Corporate Social Responsibility (CSR)</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bestech believes development is meaningful only when communities benefit. Our CSR initiatives include:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-graduation-cap-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Educational Support</h4>
              <p className="text-gray-600 text-center">Merit-based scholarships for BUET and CUET engineering students</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
                <i className="ri-tools-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Skills Development</h4>
              <p className="text-gray-600 text-center">Technical training programs for rural diploma holders through LGED</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full mx-auto mb-4">
                <i className="ri-shield-user-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Worker Safety</h4>
              <p className="text-gray-600 text-center">Free PPE distribution to site laborers and helpers across active zones</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full mx-auto mb-4">
                <i className="ri-plant-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Environmental Care</h4>
              <p className="text-gray-600 text-center">Tree planting and environment rehabilitation near highways and government project areas</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2 lg:col-span-2">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-4">
                <i className="ri-school-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Community Development</h4>
              <p className="text-gray-600 text-center">Community education support, with donations of construction supplies for school repair and classroom development</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-4">
              <i className="ri-road-map-line text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Roads & Highways</h4>
            <p className="text-gray-600">Building the arterial network that connects Bangladesh</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-900 rounded-full mx-auto mb-4">
              <i className="ri-government-line text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">PWD Projects</h4>
            <p className="text-gray-600">Government infrastructure development initiatives</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-600 rounded-full mx-auto mb-4">
              <i className="ri-building-line text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Terminal 3</h4>
            <p className="text-gray-600">Modern transportation hub construction</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
              <i className="ri-bridge-line text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Elevated Expressway</h4>
            <p className="text-gray-600">Advanced urban transportation solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
