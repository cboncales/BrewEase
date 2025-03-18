import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-200">
              BrewEase ☕
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-gray-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="/about"
              className="text-gray-200 hover:text-amber-600 font-medium"
            >
              About
            </a>
            <a
              href="/locations"
              className="text-gray-200 hover:text-amber-600 font-medium"
            >
              Locations
            </a>
            <a
              href="/contact"
              className="text-gray-200 hover:text-amber-600 font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/about"
              className="block text-gray-800 hover:text-gray-600 font-medium"
            >
              About
            </a>
            <a
              href="/locations"
              className="block text-gray-800 hover:text-gray-600 font-medium"
            >
              Locations
            </a>
            <a
              href="/contact"
              className="block text-gray-800 hover:text-gray-600 font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
