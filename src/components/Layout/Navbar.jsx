import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-indigo-500">MyBrand</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#hero" className="hover:text-indigo-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#work" className="hover:text-indigo-400 transition-colors">Work Areas</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;