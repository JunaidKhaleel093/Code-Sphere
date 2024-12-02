import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full shadow-xl z-50 py-2 px-4 sm:px-8 backdrop-blur-lg bg-gradient-to-r from-green-100 to-blue-200 bg-opacity-30 dark:bg-opacity-40 rounded-md transition-all duration-200 backdrop-filter">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Title */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold text-[#105a63] sm:justify-start justify-center w-full sm:w-auto"
          >
            <img
              src="https://res.cloudinary.com/dsgwuim2d/image/upload/v1733075152/Code1_Logo_jqky2r.png"
              alt="Logo"
              className="w-12 h-14 sm:w-16 sm:h-18"
            />
            <span>CodeSphere</span>
          </Link>

          {/* Hamburger Menu for Small Devices */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                isMenuOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 my-1 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden sm:flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Home
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              About
            </Link>
          </div>
        </div>

        {/* Dropdown Menu for Small Devices */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-gray-900 px-3 py-2">
              Home
            </Link>
            <Link to="/blog" className="block text-gray-700 hover:text-gray-900 px-3 py-2">
              Blog
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-gray-900 px-3 py-2">
              About
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
