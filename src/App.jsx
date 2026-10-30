import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
// Jodi onno kono page thake (jemon: About.jsx, Contact.jsx pages folder e), tabe ekhane import kore deben:
// import About from './pages/About'; 
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-slate-900 text-slate-100">
        {/* Navbar sobsomoy sob page e dekhabe */}
        <Navbar />

        {/* Dynamic Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> 
            */}
          </Routes>
        </div>

        {/* Footer sobsomoy sob page e dekhabe */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;