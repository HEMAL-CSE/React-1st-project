import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import researchImg from '../../assets/Research.jpg'; // 👈 Use your local research image

const About = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80">
      {/* Decorative background – subtle research theme */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* ====== Section Title (Compact, Top Center) ====== */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></span>
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">About Us</span>
            <span className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Aesthetic International
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
            Empowering communities through research, innovation, and sustainable development
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* ====== Main Content: Image + Text ====== */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left – Research Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={researchImg}
                alt="Research & Development – Aesthetic International"
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
              {/* Floating badge */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-semibold text-gray-700">Est. 2018</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Right – Content */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 leading-tight">
              Innovating For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Sustainable</span> Development
            </h3>

            <div className="space-y-3 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                <span className="font-bold text-blue-700">Aesthetic International</span> is an independent,
                non‑governmental research, development, and implementation organization dedicated to
                sustainable development at local, regional, and national levels.
              </p>
              <p>
                Established in <span className="font-semibold">2018</span>, we work across climate change,
                agriculture, disaster risk reduction, green energy, and water management – blending
                research with on‑ground action.
              </p>
              <p className="hidden md:block">
                Our team of seasoned professionals collaborates with governments, NGOs, and communities
                to turn insights into impact.
              </p>
            </div>

            {/* Stats – quick facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm border border-white/50">
                <div className="text-xl font-black text-blue-600">15+</div>
                <div className="text-[10px] text-gray-500 font-medium">Research Projects</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm border border-white/50">
                <div className="text-xl font-black text-emerald-600">50+</div>
                <div className="text-[10px] text-gray-500 font-medium">Expert Staff</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm border border-white/50 col-span-2 sm:col-span-1">
                <div className="text-xl font-black text-amber-600">20+</div>
                <div className="text-[10px] text-gray-500 font-medium">Communities</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-1">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Discover Our Story
                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;