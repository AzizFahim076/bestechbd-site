'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "Pacifico, serif" }}>
              Bestech Group
            </h3>
            <p className="text-gray-300 mb-4">
              Professional construction and supplier firm under Chowdhury Group, building Bangladesh's infrastructure for tomorrow.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white cursor-pointer">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white cursor-pointer">Projects</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white cursor-pointer">Careers</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white cursor-pointer">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Roads & Highways</li>
              <li className="text-gray-300">PWD Projects</li>
              <li className="text-gray-300">Terminal 3</li>
              <li className="text-gray-300">Elevated Expressway</li>
              <li className="text-gray-300">High-Rise Buildings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line text-yellow-400"></i>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Main Office:</p>
                  <p className="text-white">Karwan Bazar, Dhaka</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-building-line text-yellow-400"></i>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Head Office:</p>
                  <p className="text-white">Near Toll Plaza, Port Connecting Road, Opposite Karnaphuli EPZ, Chattogram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Bestech Group. Part of Chowdhury Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}