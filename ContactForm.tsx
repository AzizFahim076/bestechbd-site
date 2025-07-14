'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for your message. We will get back to you within 24 hours.');
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
          <p className="text-xl text-gray-600">
            Have a project inquiry or want to join our team? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input 
                  type="text" 
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Inquiry Type *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Project Inquiry', 'Career Opportunity', 'Partnership', 'General Question'].map((type) => (
                  <label key={type} className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="inquiryType" 
                      value={type}
                      required
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type (if applicable)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Roads & Highways', 'Buildings', 'Bridges', 'Industrial', 'Government', 'Private'].map((type) => (
                  <label key={type} className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="projectType" 
                      value={type}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea 
                name="message"
                rows={6}
                maxLength={500}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Please provide details about your project or inquiry (max 500 characters)"
              ></textarea>
            </div>

            <div className="mt-6">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  name="newsletter"
                  className="mr-3"
                />
                <span className="text-sm text-gray-700">
                  I would like to receive updates about Bestech Group projects and opportunities
                </span>
              </label>
            </div>

            <div className="mt-8">
              <button 
                type="submit"
                className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                Send Message
              </button>
            </div>

            {formStatus && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                {formStatus}
              </div>
            )}
          </form>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-900 rounded-full mx-auto mb-4">
              <i className="ri-mail-line text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">info@bestechgroup.com</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
              <i className="ri-phone-line text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+880-2-9876543</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-full mx-auto mb-4">
              <i className="ri-map-pin-line text-black text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">Karwan Bazar, Dhaka</p>
          </div>
        </div>
      </div>
    </section>
  );
}