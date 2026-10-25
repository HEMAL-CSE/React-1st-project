import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // 8 Slides – each representing a service with relevant image
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop&crop=center',
      badge: 'Import Services',
      title: 'Import Services',
      description: 'Reliable procurement of quality goods and materials from trusted global suppliers with end‑to‑end logistics support.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=600&fit=crop&crop=center', // High-res export image
      badge: 'Export Services',
      title: 'Export Services',
      description: 'Connecting Bangladeshi products to global markets with market intelligence, quality certification, and seamless logistics.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop&crop=center',
      badge: 'Construction',
      title: '1st Class Construction',
      description: 'Quality infrastructure and building solutions for residential, commercial, and industrial projects with modern engineering.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop&crop=center',
      badge: 'Research & Consultancy',
      title: 'Research & Consultancy',
      description: 'Data‑driven insights for sustainable development in climate change, agriculture, water resources, and policy analysis.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&h=600&fit=crop&crop=center',
      badge: 'Interior Solution',
      title: 'Interior Solution',
      description: 'Transforming spaces with creativity and precision – residential, commercial, and corporate interior design solutions.',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=600&fit=crop&crop=center',
      badge: 'Exterior Solution',
      title: 'Exterior Solution',
      description: 'Creating stunning outdoor spaces with durability and style – facade design, landscaping, cladding, and more.',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&crop=center',
      badge: 'Server Solution',
      title: 'Server Solution',
      description: 'Reliable, secure, and scalable IT infrastructure – from hardware procurement and cloud migration to 24/7 monitoring.',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=600&fit=crop&crop=center',
      badge: 'Event Management',
      title: 'Event Management',
      description: 'Professional event planning and management – from corporate conferences to cultural events, executed with precision.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20 pt-4 sm:pt-6 md:pt-8">
      <div className="relative w-full overflow-hidden px-2 sm:px-0">
        {/* Carousel Slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative px-1 sm:px-0">
              <div className="relative w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-7xl">
                {/* Image Container */}
                <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Enhanced Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Subtle overlay pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

                  {/* Slide Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
                      <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="inline-block bg-blue-500/40 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-3 border border-white/30 shadow-lg">
                          {slide.badge}
                        </div>

                        {/* Title - responsive with break-words to prevent overflow */}
                        <h1
                          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-white mb-2 sm:mb-3 transition-all duration-700 break-words ${
                            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                        >
                          {slide.title}
                        </h1>

                        {/* Description - responsive with break-words */}
                        <p
                          className={`text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-xl mb-3 sm:mb-5 transition-all duration-700 delay-150 break-words ${
                            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                        >
                          {slide.description}
                        </p>

                        {/* Buttons */}
                        <div className={`flex flex-wrap gap-2 sm:gap-3 transition-all duration-700 delay-300 ${
                          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                          <Link
                            to="/work"
                            className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-all duration-200 text-xs sm:text-sm md:text-base"
                          >
                            Explore Our Work
                            <FaArrowRight className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform text-xs sm:text-sm" />
                          </Link>
                          <Link
                            to="/about"
                            className="inline-flex items-center justify-center bg-white/15 backdrop-blur-md hover:bg-white/25 text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-full font-semibold border border-white/30 transition-all duration-200 text-xs sm:text-sm md:text-base"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/45 backdrop-blur-md text-white p-1.5 sm:p-2.5 md:p-3 rounded-full transition-all duration-200 hover:scale-110 z-20 border border-white/30 shadow-xl"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xs sm:text-sm md:text-base" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/45 backdrop-blur-md text-white p-1.5 sm:p-2.5 md:p-3 rounded-full transition-all duration-200 hover:scale-110 z-20 border border-white/30 shadow-xl"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xs sm:text-sm md:text-base" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'w-5 sm:w-7 md:w-9 h-1.5 sm:h-2 bg-white shadow-lg shadow-white/30'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 text-white/70 text-[10px] sm:text-xs font-medium z-20 bg-black/30 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/10">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
};

export default Hero;