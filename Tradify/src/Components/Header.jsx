import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import MenuDropdown from './MenuDropdown';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 bg-white relative z-[51]">

        <div className="flex items-center space-x-2">
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-2">
            <Logo className="h-8 w-auto text-blue-600" />
            <span className="font-semibold text-lg text-gray-800 tracking-tight">TRADIFY</span>
          </Link>
        </div>

        {/* Nav links */}
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-10 text-sm text-[#666] font-medium">
            <Link to="/signup" className="hover:text-blue-600 transition">Signup</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
            <Link to="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
            <Link to="/support" className="hover:text-blue-600 transition">Support</Link>
          </nav>

          {/* Mobile menu icon (Hamburger) */}
          <button
            className="text-xl ml-8 md:ml-10 text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
            <span className="md:hidden ml-2">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 left-0">
          <div className="max-w-7xl mx-auto px-6 relative">
            <MenuDropdown onClose={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
}
