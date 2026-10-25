import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo1 from "../../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileSubmenu = () => setMobileSubmenuOpen(!mobileSubmenuOpen);

  // Close all menus when navigating
  const closeAllMenus = () => {
    setIsOpen(false);
    setMobileSubmenuOpen(false);
  };


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Our Services',
      type: 'dropdown',
      subItems: [
        { name: 'Import', path: '/services/import' },
        { name: 'Export', path: '/services/export' },
        { name: 'Supply', path: '/services/supply' },
        { name: 'Construction', path: '/services/construction' },
        { name: 'Research & Consultancy', path: '/services/research-consultancy' },
        { name: 'Interior Solution', path: '/services/interior-solution' },
        { name: 'Exterior Solution', path: '/services/exterior-solution' },
        { name: 'Server Solution', path: '/services/server-solution' },
        { name: 'Event Management', path: '/event' },
        { name: 'Leather Export', path: '/leather' },
      ],
    },
    { name: 'Area Of Work', path: '/work' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const getDotColor = (linkName) => {
    const colors = {
      'Home': 'bg-blue-400',
      'About Us': 'bg-emerald-400',
      'Area Of Work': 'bg-amber-400',
      'Event Management': 'bg-purple-400',
      'Leather Export': 'bg-rose-400',
      'Contact': 'bg-cyan-400',
      'Import': 'bg-indigo-400',
      'Export': 'bg-green-400',
      'Supply': 'bg-yellow-400',
      'Research & Training': 'bg-pink-400',
      'Construction': 'bg-orange-400',
      'Server Solution': 'bg-sky-400',
      'Gallery': 'bg-fuchsia-400',
    };
    return colors[linkName] || 'bg-gray-400';
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-b border-white/20'
          : 'bg-white/90 backdrop-blur-md shadow-md border-b border-blue-100/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* Brand Logo */}
          <NavLink
            to="/"
            className="flex items-center group relative shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -inset-2"></div>
              <img
                src={logo1}
                alt="Aesthetic International"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain relative z-10 drop-shadow-md hover:drop-shadow-xl transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </NavLink>

          {/* Desktop Navigation – bold links */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              if (link.type === 'dropdown') {
                return (
                  <div key={link.name} className="relative group">
                    <button
                      onClick={toggleDropdown}
                      className="relative px-3 xl:px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out flex items-center gap-1 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                    >
                      {link.name}
                      <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 mt-1 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100/50 py-2 z-50">
                        {link.subItems.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setDropdownOpen(false)}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                                isActive
                                  ? 'text-blue-600 bg-blue-50/80'
                                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                              }`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3 xl:px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/80 shadow-sm'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            {isOpen ? (
              <FaTimes className="text-gray-700 text-xl transition-transform duration-300 rotate-90" />
            ) : (
              <FaBars className="text-gray-700 text-xl transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100/50 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((link, index) => {
              if (link.type === 'dropdown') {
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={toggleMobileSubmenu}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSubmenuOpen && (
                      <div className="ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                        {link.subItems.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            onClick={closeAllMenus}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                              ${
                                isActive
                                  ? 'text-blue-600 bg-blue-50/80'
                                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                              }`
                            }
                          >
                            <span className="flex items-center gap-3">
                              <span className={`w-1.5 h-1.5 rounded-full ${getDotColor(sub.name)} opacity-70`}></span>
                              {sub.name}
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeAllMenus}
                  className={({ isActive }) =>
                    `block px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-300
                    ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/80 shadow-sm'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`
                  }
                  style={{
                    animation: isOpen
                      ? `slideIn 0.3s ease-out ${index * 0.04}s both`
                      : 'none',
                  }}
                >
                  {({ isActive }) => (
                    <span className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${getDotColor(link.name)} ${isActive ? 'opacity-100' : 'opacity-30'}`}></span>
                      {link.name}
                    </span>
                  )}
                </NavLink>
              );
            })}

            {/* Footer */}
            <div className="pt-4 mt-4 border-t border-gray-100/80">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs text-gray-400 font-medium tracking-wider">
                  © 2024 Aesthetic Intl.
                </span>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">
                    We're Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;