import React from 'react';

const WorkCard = ({ title, description, icon }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all shadow-lg">
      <div className="text-3xl mb-4 text-indigo-400">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default WorkCard;