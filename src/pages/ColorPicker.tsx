import React, { useState } from 'react';
import { Droplet, Building2, Brush, Wrench } from 'lucide-react';

export default function ColorPicker() {
  const [activeSection, setActiveSection] = useState('interior');
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');

  const sections = [
    {
      id: 'interior',
      name: 'Interior Colors',
      icon: Droplet,
      rooms: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom'],
      colors: [
        { name: 'Warm White', hex: '#F5F5F0' },
        { name: 'Soft Gray', hex: '#E0E0E0' },
        { name: 'Sage Green', hex: '#B2BEB5' },
        { name: 'Pale Blue', hex: '#B8D8E8' }
      ]
    },
    {
      id: 'exterior',
      name: 'Exterior Colors',
      icon: Building2,
      rooms: ['Walls', 'Fences', 'Roof', 'Trim'],
      colors: [
        { name: 'Classic White', hex: '#FFFFFF' },
        { name: 'Charcoal Gray', hex: '#36454F' },
        { name: 'Earth Brown', hex: '#8B7355' },
        { name: 'Forest Green', hex: '#228B22' }
      ]
    },
    {
      id: 'texture',
      name: 'Texture Finishes',
      icon: Brush,
      rooms: ['Accent Walls', 'Feature Walls', 'Ceilings'],
      colors: [
        { name: 'Sandy Beige', hex: '#F5DEB3' },
        { name: 'Stone Gray', hex: '#928E85' },
        { name: 'Rustic Brown', hex: '#8B4513' },
        { name: 'Slate Blue', hex: '#6A5ACD' }
      ]
    },
    {
      id: 'metal',
      name: 'Metal & Wood',
      icon: Wrench,
      rooms: ['Metal Surfaces', 'Wood Furniture', 'Doors', 'Frames'],
      colors: [
        { name: 'Metallic Silver', hex: '#C0C0C0' },
        { name: 'Bronze', hex: '#CD7F32' },
        { name: 'Rich Mahogany', hex: '#8B4513' },
        { name: 'Golden Oak', hex: '#DAA520' }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Color Picker Tool</h1>
          <p className="text-xl text-gray-600">
            Preview and select the perfect colors for your space
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition duration-300 ${
                  activeSection === section.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {section.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Color Selection */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Select Area</h2>
              <div className="space-y-2">
                {sections.find(s => s.id === activeSection)?.rooms.map((room) => (
                  <button
                    key={room}
                    className="w-full text-left px-4 py-2 rounded-md hover:bg-indigo-50 transition duration-300"
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
              <div className="grid grid-cols-2 gap-4">
                {sections.find(s => s.id === activeSection)?.colors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setSelectedColor(color.hex)}
                    className="text-center space-y-2"
                  >
                    <div
                      className="w-full h-20 rounded-lg border-2 border-gray-200 transition duration-300 hover:shadow-lg"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-sm text-gray-600">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Color Preview</h2>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Room Preview"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 transition duration-300"
                  style={{ backgroundColor: selectedColor, opacity: 0.3 }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium">Selected Color</p>
                  <p className="text-gray-600">{sections.find(s => s.id === activeSection)?.colors.find(c => c.hex === selectedColor)?.name}</p>
                </div>
                <div
                  className="w-16 h-16 rounded-lg border-2 border-gray-200"
                  style={{ backgroundColor: selectedColor }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}