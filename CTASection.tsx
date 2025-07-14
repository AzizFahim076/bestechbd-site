'use client';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Construction%20site%20at%20golden%20hour%20in%20Bangladesh%20with%20workers%20silhouettes%20against%20sunset%20sky%2C%20construction%20cranes%20and%20machinery%20creating%20dramatic%20industrial%20landscape%2C%20steam%20and%20dust%20particles%20visible%20in%20warm%20lighting%2C%20professional%20construction%20photography%20showing%20infrastructure%20development%20progress%2C%20inspiring%20scene%20of%20nation%20building%20work&width=1920&height=600&seq=cta-sunset&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Join the Team Building Bangladesh's Future
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Be part of transformative infrastructure projects that shape our nation. 
          We're looking for skilled engineers, construction professionals, and dedicated workers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-4">
              <i className="ri-team-line text-black text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Career Growth</h3>
            <p className="text-gray-200">Advance your career with Bangladesh's leading construction firm</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-4">
              <i className="ri-shield-check-line text-black text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Job Security</h3>
            <p className="text-gray-200">Stable employment with major government and private projects</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-4">
              <i className="ri-flag-line text-black text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Nation Building</h3>
            <p className="text-gray-200">Contribute to Bangladesh's infrastructure development</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/careers" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap">
            Apply for Jobs
          </Link>
          <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors cursor-pointer whitespace-nowrap">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}