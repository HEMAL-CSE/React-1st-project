import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import EventPage from './pages/EventPage';
import LeatherPage from './pages/LeatherPage';
import ContactPage from './pages/ContactPage';




function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/leather" element={<LeatherPage />} />
            <Route path="/contact" element={<ContactPage />} />

            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;