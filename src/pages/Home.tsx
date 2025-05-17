import React from 'react';
import { ArrowRight, Droplet, Building2, Brush, Star } from 'lucide-react';

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const testimonials = [
    {
      name: "Ganesh Kakde",
      role: "Homeowner, Pune",
      quote: "The paint quality is excellent and lasted through three monsoons without fading. Highly recommended!"
    },
    {
      name: "Priya Sharma",
      role: "Interior Designer, Mumbai",
      quote: "ColorShop's texture finishes have transformed my projects. Their team understands creative requirements perfectly."
    },
    {
      name: "Rajesh Patil",
      role: "Business Owner, Nagpur",
      quote: "Professional service from start to finish. Our office building looks brand new after their exterior painting."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bringing Colors to Life
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Premium paints with weather-resistant technology for Indian homes and businesses
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 hover:scale-105 transform"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Professional painting solutions tailored for Indian homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Droplet className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interior Painting</h3>
              <p className="text-gray-600">
                Premium paints with low VOC for healthier Indian homes
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center">✓ Moisture resistant</li>
                <li className="flex items-center">✓ Stain protection</li>
                <li className="flex items-center">✓ 5-year warranty</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exterior Painting</h3>
              <p className="text-gray-600">
                Weatherproof solutions for India's diverse climate
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center">✓ Heat reflective</li>
                <li className="flex items-center">✓ Monsoon proof</li>
                <li className="flex items-center">✓ 7-year warranty</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Brush className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Texture Finishes</h3>
              <p className="text-gray-600">
                Modern textures popular in Indian interior design
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center">✓ 50+ patterns</li>
                <li className="flex items-center">✓ Easy maintenance</li>
                <li className="flex items-center">✓ Custom designs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-xl text-gray-600">
              Trusted by homeowners across Maharashtra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt={testimonial.name}
                    className="rounded-full h-12 w-12"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact-section" className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Get a free consultation with our paint experts today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919096457620"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
            >
              Call Now: 9096457620
            </a>
            <a
              href="https://wa.me/919096457620"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-700 text-white rounded-md font-semibold hover:bg-indigo-800 transition duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}