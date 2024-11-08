import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">SimVersity</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-gray-600 hover:text-blue-600">Programs</a>
            <a href="#curriculum" className="text-gray-600 hover:text-blue-600">Curriculum</a>
            <a href="#campuses" className="text-gray-600 hover:text-blue-600">Global Campuses</a>
            <a href="#technology" className="text-gray-600 hover:text-blue-600">Technology</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#partners" className="text-gray-600 hover:text-blue-600">Partners</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#programs" className="block text-gray-600">Programs</a>
            <a href="#curriculum" className="block text-gray-600">Curriculum</a>
            <a href="#campuses" className="block text-gray-600">Global Campuses</a>
            <a href="#technology" className="block text-gray-600">Technology</a>
            <a href="#pricing" className="block text-gray-600">Pricing</a>
            <a href="#partners" className="block text-gray-600">Partners</a>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;