import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked (for mobile)
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
          <Link to="/" onClick={handleLinkClick}>
          <span className="text-2xl font-bold text-blue-600">SimVersity</span>
          </Link>
            
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            
            <Link to="/programs" onClick={handleLinkClick} className="text-gray-600 hover:text-blue-600">Programs</Link>
            <Link to="/curriculum" onClick={handleLinkClick} className="text-gray-600 hover:text-blue-600">Curriculum</Link>
            <Link to="/campuses" onClick={handleLinkClick} className="text-gray-600 hover:text-blue-600">Global Campuses</Link>
            <Link to="/technology" onClick={handleLinkClick} className="text-gray-600 hover:text-blue-600">Technology</Link>
            <Link to="/pricing" onClick={handleLinkClick} className="text-gray-600 hover:text-blue-600">Pricing</Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" onClick={handleLinkClick} className="block text-gray-600">Programs</Link>
            <Link to="/#curriculum" onClick={handleLinkClick} className="block text-gray-600">Curriculum</Link>
            <Link to="/campuses" onClick={handleLinkClick} className="block text-gray-600">Global Campuses</Link>
            <Link to="/technology" onClick={handleLinkClick} className="block text-gray-600">Technology</Link>
            <Link to="/pricing" onClick={handleLinkClick} className="block text-gray-600">Pricing</Link>
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
