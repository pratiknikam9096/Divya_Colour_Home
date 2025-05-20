import React from "react";
import { Brush, Droplet, Building2, Wrench, Trees } from "lucide-react";

export default function About() {
  const paintTypes = [
    {
      icon: Droplet,
      title: "Interior Paints",
      description:
        "Premium quality paints for your indoor spaces with excellent coverage and durability.",
    },
    {
      icon: Building2,
      title: "Exterior Paints",
      description:
        "Weather-resistant paints that protect and beautify your property exterior.",
    },
    {
      icon: Brush,
      title: "Texture Finishes",
      description:
        "Unique textural effects to add depth and character to your walls.",
    },
    {
      icon: Wrench,
      title: "Metal Coatings",
      description:
        "Specialized coatings for metal surfaces with superior rust protection.",
    },
    {
      icon: Trees,
      title: "Wood Finishes",
      description:
        "Beautiful wood stains and varnishes to enhance and protect wooden surfaces.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About ColorShop
            </h1>
            <p className="text-xl md:text-2xl">
              Transforming spaces with colors since 1995
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission & Vision
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional quality paints and superior customer
                  service, helping our customers transform their spaces with
                  confidence and creativity.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading innovator in the paint industry, setting new
                  standards for quality, sustainability, and customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paint Types */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
            <p className="mt-4 text-xl text-gray-600">
              Discover our comprehensive range of high-quality paints
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                >
                  <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Space?
          </h2>
          <a
            href="https://www.google.com/maps/place/Yakatpur+Road,+Namrata+KSK+AUSA/@18.2440751,76.5108643,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcf7e610000000b:0x5c512e82df4b872f!8m2!3d18.2440751!4d76.5108643!16s%2Fg%2F11v0v9z0y9?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100 transition duration-300 mb-8"
          >
            Visit Our Paint Shop
          </a>
        </div>
      </div>
    </div>
  );
}
