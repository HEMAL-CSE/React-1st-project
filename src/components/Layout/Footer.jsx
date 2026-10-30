import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

