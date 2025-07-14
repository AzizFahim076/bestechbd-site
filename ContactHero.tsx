'use client';

export default function ContactHero() {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20construction%20company%20office%20building%20and%20contact%20center%20in%20Bangladesh%20showing%20modern%20corporate%20architecture%20with%20communication%20and%20business%20infrastructure%2C%20realistic%20photography%20of%20construction%20company%20headquarters%20with%20professional%20business%20environment&width=1920&height=600&seq=contact-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Get in touch with Bangladesh's leading construction company. We're here to discuss your infrastructure projects and career opportunities.
        </p>
      </div>
    </section>
  );
}