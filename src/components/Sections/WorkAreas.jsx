import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../UI/SectionTitle';
import { workData } from '../../data/workData';

const WorkAreas = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getIconColor = (color) => {
    const colorMap = {
      'from-blue-500': 'text-blue-600',
      'from-green-500': 'text-green-600',
      'from-amber-500': 'text-amber-600',
      'from-yellow-500': 'text-yellow-600',
      'from-cyan-500': 'text-cyan-600',
      'from-purple-500': 'text-purple-600',
      'from-indigo-500': 'text-indigo-600',
      'from-pink-500': 'text-pink-600',
    };
    const key = color.split(' ')[0];
    return colorMap[key] || 'text-blue-600';
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-blue-600/5 via-white to-cyan-400/10">
      {/* Decorative background */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Areas Of Our Work" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-10">
          {workData.map((work) => {
            const isExpanded = expandedId === work.id;
            return (
              <div
                key={work.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/30 hover:border-blue-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${work.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <work.icon className={`text-xl ${getIconColor(work.color)}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Title – full display, no truncation */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 break-words leading-tight">
                    {work.title}
                  </h3>

                  {/* Description with HTML rendering */}
                  <div
                    className={`text-gray-600 text-sm leading-relaxed text-justify mt-2 ${
                      !isExpanded ? 'line-clamp-3' : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: work.description }}
                  />

                  {/* Expand/Collapse */}
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(work.id)}
                      className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors duration-200 flex items-center gap-1 group/btn"
                    >
                      {isExpanded ? 'Show Less' : 'Explore More'}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <span className="text-xs text-gray-400">click to collapse</span>
                    )}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${work.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            View All Areas
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkAreas;
