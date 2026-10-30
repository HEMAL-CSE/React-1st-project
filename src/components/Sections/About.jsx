import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-400">About Us</h2>
          <p className="text-gray-400 mt-2">Learn more about our vision and mission</p>
        </div>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed text-center">
          <p>
            We are dedicated to building high-quality, scalable web applications. 
            Our team focuses on delivering modern UI design, performant architectures, 
            and exceptional user experiences tailored to complex requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;