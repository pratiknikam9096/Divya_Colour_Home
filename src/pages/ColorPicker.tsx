import React, { useState, useRef } from 'react';
import { 
  Droplet, Building2, Brush, Wrench, 
  Upload, Image, Download, Pipette, // Using Pipette instead of EyeDropper
  Palette, Save, Layers, ZoomIn, ZoomOut 
} from 'lucide-react';

export default function BuildingColorVisualizer() {
  // State management
  const [activeSection, setActiveSection] = useState('facade');
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPickerActive, setColorPickerActive] = useState(false);
  const [pickedColors, setPickedColors] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeLayer, setActiveLayer] = useState('walls');
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [paletteName, setPaletteName] = useState('');
  
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  // Building color system
  const buildingSections = {
    facade: {
      name: 'Building Facade',
      icon: Building2,
      layers: {
        walls: { name: 'Main Walls', defaultColor: '#F5F5F0' },
        trim: { name: 'Trim & Moldings', defaultColor: '#FFFFFF' },
        doors: { name: 'Doors', defaultColor: '#8B4513' },
        roof: { name: 'Roof', defaultColor: '#36454F' }
      }
    },
    interior: {
      name: 'Interior Spaces',
      icon: Droplet,
      layers: {
        walls: { name: 'Walls', defaultColor: '#F5F5F0' },
        ceiling: { name: 'Ceiling', defaultColor: '#FFFFFF' },
        flooring: { name: 'Flooring', defaultColor: '#8B7355' },
        accents: { name: 'Accent Walls', defaultColor: '#B8D8E8' }
      }
    },
    materials: {
      name: 'Material Finishes',
      icon: Brush,
      layers: {
        brick: { name: 'Brick', defaultColor: '#B22222' },
        wood: { name: 'Wood', defaultColor: '#D2B48C' },
        concrete: { name: 'Concrete', defaultColor: '#D3D3D3' },
        metal: { name: 'Metal', defaultColor: '#A9A9A9' }
      }
    }
  };

  // Professional architectural color palettes
  const architecturalPalettes = [
    {
      name: 'Modern Minimalist',
      colors: ['#FFFFFF', '#F5F5F5', '#E0E0E0', '#616161']
    },
    {
      name: 'Earth Tones',
      colors: ['#8B7355', '#A67C52', '#C19A6B', '#6B4423']
    },
    {
      name: 'Coastal',
      colors: ['#B8D8E8', '#7A9CC6', '#F5F5F0', '#3A5A78']
    },
    {
      name: 'Urban Contemporary',
      colors: ['#36454F', '#708090', '#C0C0C0', '#F5F5F5']
    }
  ];

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setPickedColors([]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Color picking from image
  const handleImageClick = (e) => {
    if (!colorPickerActive || !uploadedImage) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    const x = (e.clientX - rect.left) / zoomLevel;
    const y = (e.clientY - rect.top) / zoomLevel;
    
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);
    
    setSelectedColor(hex);
    addPickedColor(hex);
  };

  // Helper functions
  const rgbToHex = (r, g, b) => {
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  };

  const addPickedColor = (color) => {
    if (!pickedColors.includes(color)) {
      setPickedColors(prev => [...prev, color].slice(-8));
    }
  };

  const savePalette = () => {
    if (!paletteName.trim()) return;
    
    const newPalette = {
      name: paletteName,
      colors: [...pickedColors],
      date: new Date().toLocaleDateString()
    };
    
    setSavedPalettes(prev => [...prev, newPalette]);
    setShowSaveModal(false);
    setPaletteName('');
  };

  // Apply color to the active layer
  const applyColor = () => {
    buildingSections[activeSection].layers[activeLayer].defaultColor = selectedColor;
  };

  // Zoom functionality
  const handleZoom = (direction) => {
    setZoomLevel(prev => {
      const newZoom = direction === 'in' ? prev * 1.2 : prev / 1.2;
      return Math.min(Math.max(newZoom, 0.5), 3);
    });
  };

  // Download image function
  const downloadImage = () => {
    if (!uploadedImage) return;
    
    const link = document.createElement('a');
    link.href = uploadedImage;
    link.download = 'building-visualization.jpg';
    link.click();
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Architectural Color Visualizer</h1>
          <p className="text-xl text-gray-600">
            Design and visualize color schemes for your building projects
          </p>
        </div>

        {/* Main workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Building layers panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Building Layers
              </h2>
              
              {/* Section tabs */}
              <div className="flex flex-col gap-2 mb-6">
                {Object.entries(buildingSections).map(([id, section]) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={`flex items-center px-4 py-3 rounded-lg transition ${
                      activeSection === id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <section.icon className="h-5 w-5 mr-2" />
                    {section.name}
                  </button>
                ))}
              </div>
              
              {/* Layer controls */}
              <div className="space-y-3">
                {Object.entries(buildingSections[activeSection].layers).map(([id, layer]) => (
                  <div 
                    key={id}
                    className={`p-3 rounded-lg border cursor-pointer transition ${
                      activeLayer === id 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveLayer(id)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{layer.name}</span>
                      <div 
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: layer.defaultColor }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={applyColor}
                className="w-full mt-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                <Brush className="h-4 w-4" />
                Apply Selected Color
              </button>
            </div>

            {/* Architectural palettes */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Design Palettes
              </h2>
              
              <div className="space-y-4">
                {architecturalPalettes.map((palette, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-sm font-medium">{palette.name}</p>
                    <div className="flex gap-1">
                      {palette.colors.map((color, i) => (
                        <div
                          key={i}
                          className="h-8 flex-1 rounded cursor-pointer hover:opacity-90 transition"
                          style={{ backgroundColor: color }}
                          onClick={() => setSelectedColor(color)}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Color tools panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Color picker controls */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Color Tools</h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Selected Color</span>
                    <div 
                      className="w-8 h-8 rounded border border-gray-300"
                      style={{ backgroundColor: selectedColor }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{selectedColor}</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(selectedColor)}
                      className="text-xs px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => setColorPickerActive(!colorPickerActive)}
                  className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 ${
                    colorPickerActive
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Pipette className="h-4 w-4" /> {/* Changed to Pipette */}
                  {colorPickerActive ? 'Color Picker Active' : 'Activate Color Picker'}
                </button>
                
                <div className="grid grid-cols-4 gap-2">
                  {pickedColors.map((color, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded cursor-pointer hover:opacity-90 transition"
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Image upload panel */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Project Image</h2>
              
              {!uploadedImage ? (
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition"
                  onClick={() => fileInputRef.current.click()}
                >
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600">Upload building photo</p>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 10MB</p>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative group">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded building" 
                      className="rounded-lg w-full h-32 object-cover"
                      ref={imageRef}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button 
                        onClick={() => fileInputRef.current.click()}
                        className="bg-white rounded-full p-2 shadow-lg"
                      >
                        <Image className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={downloadImage}
                      className="flex-1 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Save
                    </button>
                    <button 
                      onClick={() => setUploadedImage(null)}
                      className="flex-1 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Saved palettes */}
            {savedPalettes.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Save className="h-5 w-5" />
                  Saved Palettes
                </h2>
                
                <div className="space-y-3">
                  {savedPalettes.map((palette, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{palette.name}</span>
                        <span className="text-xs text-gray-500">{palette.date}</span>
                      </div>
                      <div className="flex gap-1 h-6">
                        {palette.colors.map((color, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main visualization area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Color Visualization</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleZoom('out')}
                    disabled={zoomLevel <= 0.5}
                    className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                  >
                    <ZoomOut className="h-5 w-5" />
                  </button>
                  <span className="text-sm">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    onClick={() => handleZoom('in')}
                    disabled={zoomLevel >= 3}
                    className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                  >
                    <ZoomIn className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {uploadedImage ? (
                <div className="relative h-[500px] rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ display: 'none' }}
                  />
                  <div className="overflow-auto h-full">
                    <div 
                      className="origin-top-left" 
                      style={{ transform: `scale(${zoomLevel})`, width: `${100/zoomLevel}%`, height: `${100/zoomLevel}%` }}
                    >
                      <img
                        src={uploadedImage}
                        alt="Building visualization"
                        className="w-full h-full object-contain cursor-crosshair"
                        onClick={handleImageClick}
                        onLoad={(e) => {
                          const canvas = canvasRef.current;
                          const img = e.target;
                          canvas.width = img.naturalWidth;
                          canvas.height = img.naturalHeight;
                          const ctx = canvas.getContext('2d');
                          ctx.drawImage(img, 0, 0);
                        }}
                        style={{ cursor: colorPickerActive ? 'crosshair' : 'default' }}
                      />
                      <div
                        className="absolute inset-0 transition duration-300 pointer-events-none"
                        style={{ 
                          backgroundColor: selectedColor, 
                          opacity: 0.4,
                          mixBlendMode: 'multiply'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-[500px] rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Image className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500 mb-4">Upload a building image to begin visualization</p>
                    <button
                      onClick={() => fileInputRef.current.click()}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 mx-auto"
                    >
                      <Upload className="h-4 w-4" />
                      Upload Building Photo
                    </button>
                  </div>
                </div>
              )}

              {pickedColors.length > 0 && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Color Palette from Image</h3>
                    <button
                      onClick={() => setShowSaveModal(true)}
                      className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                    >
                      <Save className="h-4 w-4" />
                      Save Palette
                    </button>
                  </div>
                  <div className="flex gap-2 h-10">
                    {pickedColors.map((color, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded shadow-sm hover:shadow-md transition cursor-pointer"
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Save palette modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Save Color Palette</h3>
            <input
              type="text"
              value={paletteName}
              onChange={(e) => setPaletteName(e.target.value)}
              placeholder="Enter palette name"
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <div className="flex gap-2 h-8 mb-4">
              {pickedColors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1 rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowSaveModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={savePalette}
                disabled={!paletteName.trim()}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}