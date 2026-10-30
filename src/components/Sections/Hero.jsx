import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-slate-800 text-white min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-indigo-500">Our Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          We deliver modern software solutions tailored to your business needs with maximum efficiency.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;