import React from 'react';

const WorkCard = ({ work }) => {
  const IconComponent = work.icon;
  return (
    <div className={`group relative p-6 rounded-2xl ${work.bgColor} border border-transparent hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1`}>
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${work.color} text-white shadow-lg shadow-blue-200/50 mb-4`}>
        <IconComponent className="text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
        {work.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {work.description}
      </p>
    </div>
  );
};

export default WorkCard;