import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Divya Color Home</h3>
            <p className="text-gray-400">Premium Paints & Painting Services</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="tel:+919096457620" className="hover:text-indigo-300">+91 9096457620</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="mailto:nikampratik2989@gmail.com" className="hover:text-indigo-300">nikampratik2989@gmail.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-indigo-400" />
                <span>Yakatpur Road, Near Medical, Maharashtra</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-indigo-400 transition duration-200">About Us</a></li>
              <li><a href="/services" className="hover:text-indigo-400 transition duration-200">Our Services</a></li>
              <li><a href="/contact" className="hover:text-indigo-400 transition duration-200">Contact</a></li>
              <li><a href="https://wa.me/919096457620" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition duration-200">
                WhatsApp Inquiry
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="text-gray-400 space-y-2">
              <p className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-6 mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-indigo-400 transition duration-200"
              >
                <Facebook className="h-5 w-5 mr-2" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://instagram.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-indigo-400 transition duration-200"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Divya Color Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}