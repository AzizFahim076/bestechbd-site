
'use client';

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Bestech Group</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for project inquiries, career opportunities, or business partnerships. 
            We're here to help with all your construction and infrastructure needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Official Contact Details</h3>
            
            <div className="space-y-8">
              {/* Main Office */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-900 rounded-full flex-shrink-0">
                  <i className="ri-building-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Main Office - Dhaka</h4>
                  <p className="text-gray-600">
                    Karwan Bazar, Dhaka-1215<br/>
                    Bangladesh
                  </p>
                  <div className="mt-3 space-y-1">
                    <p className="text-gray-700 flex items-center">
                      <i className="ri-phone-line mr-2 text-blue-900"></i>
                      <strong>Phone:</strong> +880-2-9876543
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <i className="ri-mail-line mr-2 text-blue-900"></i>
                      <strong>Email:</strong> info@bestechgroup.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Head Office */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-600 rounded-full flex-shrink-0">
                  <i className="ri-home-office-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Head Office - Chattogram</h4>
                  <p className="text-gray-600">
                    Near Toll Plaza, Port Connecting Road<br/>
                    Opposite Karnaphuli EPZ<br/>
                    Chattogram-4000, Bangladesh
                  </p>
                  <div className="mt-3 space-y-1">
                    <p className="text-gray-700 flex items-center">
                      <i className="ri-phone-line mr-2 text-slate-600"></i>
                      <strong>Phone:</strong> +880-31-2345678
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <i className="ri-mail-line mr-2 text-slate-600"></i>
                      <strong>Email:</strong> headoffice@bestechgroup.com
                    </p>
                  </div>
                </div>
              </div>

              {/* HR Contact */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-full flex-shrink-0">
                  <i className="ri-user-line text-black text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Human Resources</h4>
                  <p className="text-gray-600">
                    For career inquiries and job applications
                  </p>
                  <div className="mt-3 space-y-1">
                    <p className="text-gray-700 flex items-center">
                      <i className="ri-phone-line mr-2 text-yellow-600"></i>
                      <strong>Phone:</strong> +880-2-9876544
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <i className="ri-mail-line mr-2 text-yellow-600"></i>
                      <strong>Email:</strong> careers@bestechgroup.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full flex-shrink-0">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                    <p className="text-sm text-gray-500">* Site operations may vary by project location</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full flex-shrink-0">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Emergency & Project Support</h4>
                  <p className="text-gray-600 mb-2">
                    For urgent project matters and emergency support
                  </p>
                  <div className="space-y-1">
                    <p className="text-gray-700 flex items-center">
                      <i className="ri-phone-line mr-2 text-red-600"></i>
                      <strong>24/7 Hotline:</strong> +880-1700-123456
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <i className="ri-mail-line mr-2 text-red-600"></i>
                      <strong>Email:</strong> emergency@bestechgroup.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Find Our Offices</h3>
            
            {/* Main Office Map */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <i className="ri-map-pin-line mr-2 text-blue-900"></i>
                Main Office - Karwan Bazar, Dhaka
              </h4>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8977!2d90.3926!3d23.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sKarwan%20Bazar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1635000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Head Office Map */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <i className="ri-map-pin-line mr-2 text-slate-600"></i>
                Head Office - Chattogram
              </h4>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8977!2d91.8226!3d22.3569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64d4fbf31%3A0x5fcb5c7a8fd4a5e9!2sKarnaphuli%20EPZ%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1635000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
