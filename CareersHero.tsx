
'use client';

export default function CareersHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20construction%20team%20meeting%20at%20Bangladesh%20construction%20site%2C%20engineers%20and%20workers%20in%20safety%20gear%20discussing%20project%20plans%20with%20blueprints%2C%20diverse%20group%20of%20construction%20professionals%20collaborating%20on%20infrastructure%20development%2C%20realistic%20workplace%20photography%20showing%20teamwork%20and%20career%20opportunities%20in%20construction%20industry&width=1920&height=600&seq=careers-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Join Bestech Group</h1>
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Build Your Career While Building Bangladesh</h2>
        <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-6">
          Be part of Bangladesh's leading construction company and contribute to transformative national infrastructure projects. 
          We offer exceptional career opportunities, growth potential, and the chance to work on meaningful projects that shape our nation's future.
        </p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          From highways and airports to government complexes - join our team of engineers, skilled workers, and construction professionals making a real impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-user-add-line mr-2"></i>
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-briefcase-line mr-2"></i>
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
