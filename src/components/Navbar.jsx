import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll to section when path is `/`
  useEffect(() => {
    if (location.pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [location]);

  return (
    <nav className="fixed w-full z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-700 font-sans text-zinc-100 overflow-x-hidden">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          NexusWeb
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/#services" className="hover:text-cyan-400 transition-colors duration-300">
            Services
          </Link>
          <Link to="Work" className="hover:text-cyan-400 transition-colors duration-300">
            Work
          </Link>
          <Link to="Blog" className="hover:text-cyan-400 transition-colors duration-300">
            Blog
          </Link>
          <Link to="/#contact" className="px-4 py-2 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-cyan-500 focus:outline-none" aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-700">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link to="/#services" className="hover:text-cyan-400 transition-colors duration-300" onClick={toggleMobileMenu}>
              Services
            </Link>
            <Link to="Work" className="hover:text-cyan-400 transition-colors duration-300" onClick={toggleMobileMenu}>
              Work
            </Link>
            <Link to="Blog" className="hover:text-cyan-400 transition-colors duration-300" onClick={toggleMobileMenu}>
              Blog
            </Link>
            <Link to="/#contact" className="px-4 py-2 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors text-center" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
