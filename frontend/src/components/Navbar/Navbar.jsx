import { useState } from "react";

export default function Navbar({
  onLoginClick,
  isAuthenticated,
  user,
  onLogout,
}) {
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
            <img
              className="w-7 mb-2"
              src="/icons/brewease-icon.png"
              alt="BrewEase Icon"
            />
            <a href="/" className="solway text-2xl font-bold text-gray-200">
              BrewEase
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
              href="/"
              className="text-gray-200 hover:text-amber-600 font-medium"
            >
              Home
            </a>
            <a
              href="/menu"
              className="text-gray-200 hover:text-amber-600 font-medium"
            >
              Menu
            </a>
            <a
              href="/about"
              className="text-gray-200 hover:text-amber-600 font-medium"
            >
              About
            </a>
            <a
              href="/location"
              className="text-gray-200 hover:text-amber-600 font-medium"
            >
              Locations
            </a>

            {/* Authentication Section */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-200 font-medium">
                  Welcome, {user?.email}
                </span>
                <button
                  onClick={onLogout}
                  className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="text-gray-200 hover:text-amber-600 font-medium"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block text-gray-800 hover:text-amber-600 font-medium py-2"
            >
              Home
            </a>
            <a
              href="/menu"
              className="block text-gray-800 hover:text-amber-600 font-medium py-2"
            >
              Menu
            </a>
            <a
              href="/about"
              className="block text-gray-800 hover:text-amber-600 font-medium py-2"
            >
              About
            </a>
            <a
              href="/location"
              className="block text-gray-800 hover:text-amber-600 font-medium py-2"
            >
              Locations
            </a>

            {/* Mobile Authentication Section */}
            {isAuthenticated ? (
              <div className="pt-2 border-t border-gray-200">
                <div className="text-gray-800 font-medium py-2">
                  Welcome, {user?.email}
                </div>
                <button
                  onClick={onLogout}
                  className="w-full text-left bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="block text-gray-800 hover:text-amber-600 font-medium py-2"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
