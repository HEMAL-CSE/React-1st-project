import React from 'react';
import WorkCard from './WorkCard';

const WorkAreas = () => {
  const works = [
    { title: 'Web Development', description: 'Modern, responsive, and scalable React applications.', icon: '💻' },
    { title: 'UI/UX Design', description: 'Clean, intuitive, and modern interface designs using Tailwind CSS.', icon: '🎨' },
    { title: 'API Integration', description: 'Seamless backend and third-party API integration.', icon: '⚡' },
  ];

  return (
    <section id="work" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-400">Our Work Areas</h2>
          <p className="text-gray-400 mt-2">Explore the expertise we bring to your projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorkCard key={index} title={work.title} description={work.description} icon={work.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkAreas;