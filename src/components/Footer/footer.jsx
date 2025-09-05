import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer className="bg-blue-950 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 items-start">
        
        {/* Brand / Logo */}
        <div className="flex flex-col items-start">
          <img
            src="./logo.png" // <-- apna logo ka path yahan do
            alt="Company Logo"
            className="w-50"
          />
          <p className="text-gray-300 text-sm leading-relaxed mt-10">
            Building innovative digital solutions with modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Products / Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white transition">ERP</a></li>
            <li><a href="#" className="hover:text-white transition">HMS</a></li>
            <li><a href="#" className="hover:text-white transition">IMS</a></li>
            <li><a href="#" className="hover:text-white transition">REMS</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-blue-400"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-blue-400"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer
