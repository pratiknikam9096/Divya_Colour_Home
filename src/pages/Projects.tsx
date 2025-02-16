import React, { useState } from 'react';
import { Filter } from 'lucide-react';

export default function Projects() {
  const categories = ['All', 'Home Decor', 'Office Spaces', 'Industrial', 'Commercial'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Contemporary design with neutral tones'
    },
    {
      id: 2,
      title: 'Corporate Office',
      category: 'Office Spaces',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Professional workspace with modern aesthetics'
    },
    {
      id: 3,
      title: 'Industrial Warehouse',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1553502939-e946e11d3d4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Durable coating solutions for industrial spaces'
    },
    {
      id: 4,
      title: 'Retail Store',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Vibrant retail environment'
    },
    {
      id: 5,
      title: 'Minimalist Bedroom',
      category: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Peaceful bedroom with calming colors'
    },
    {
      id: 6,
      title: 'Meeting Room',
      category: 'Office Spaces',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Collaborative space with modern design'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600">
            Explore our portfolio of successful transformations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Filter className="h-5 w-5 text-indigo-600" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition duration-300 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}