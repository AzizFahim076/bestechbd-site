
'use client';

export default function WhyJoinUs() {
  const benefits = [
    {
      icon: "ri-trophy-line",
      title: "Real-Site Experience",
      description: "Work on major national projects including highways, airports, and government complexes with hands-on learning opportunities"
    },
    {
      icon: "ri-graduation-cap-line",
      title: "Technical Training",
      description: "Continuous skill development through in-house training protocols, safety briefings, and modern construction techniques"
    },
    {
      icon: "ri-rocket-line",
      title: "Career Advancement",
      description: "Structured growth paths from entry-level to leadership positions with performance-based promotions and recognition"
    },
    {
      icon: "ri-shield-check-line",
      title: "Safety-First Culture",
      description: "Zero-accident work environment with comprehensive PPE, safety training, and strict adherence to international safety standards"
    },
    {
      icon: "ri-flag-line",
      title: "Government Projects",
      description: "Exclusive opportunity to work on prestigious government contracts with PWD, RHD, LGED, and CAAB partnerships"
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "Competitive Benefits",
      description: "Industry-leading compensation, health insurance, performance bonuses, and comprehensive employee welfare programs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Bestech Group?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a company that values your growth, prioritizes your safety, and offers you the opportunity to contribute to Bangladesh's infrastructure development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-900 rounded-full mx-auto mb-4">
                <i className={`${benefit.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-900 to-slate-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Future?</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Take the next step in your career and become part of Bangladesh's infrastructure transformation. 
            We're looking for passionate professionals who want to make a difference.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap">
            Explore Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
