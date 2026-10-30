import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import WorkAreas from '../components/Sections/WorkAreas';
import Contact from '../components/Sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <WorkAreas />
      <Contact />
    </main>
  );
};

export default Home;