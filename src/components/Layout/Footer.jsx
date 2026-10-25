import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGooglePlus,
  FaLinkedin,
} from "react-icons/fa";
import logo1 from "../../assets/logo1.png";
import WEBSOFTlogo from "../../assets/WEBSOFTlogo.jpg";

const Footer = () => {
  // 1. ফাংশনটি এখানে বসাবেন (return এর ঠিক ওপরে)
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
          <div>
            <div>
              {/* আপনার পেজের অন্য কোড... */}

              {/* 2. আপনার <Link> কম্পোনেন্টটি এখানে থাকবে */}
              <Link
                to="/"
                onClick={handleScrollToTop}
                className="inline-block bg-white p-3 rounded-xl shadow-lg border border-gray-200 mb-4 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <img
                  src={logo1}
                  alt="Aesthetic International"
                  className="h-12 w-auto object-contain"
                />
              </Link>

              {/* আপনার পেজের অন্য কোড... */}
            </div>
            <p className="text-sm leading-relaxed">
              87, Kazi Nazrul Islam Avenue,
              <br />
              East Tejturi Bazar, Tejgaon PS; 
              <br />
              Dhaka-1215, Bangladesh.
            </p>

            <div className="text-sm mt-3 space-y-2 text-gray-300">
              {/* Phone Number */}
              <p>
                <strong className="text-white">Phone:</strong> +880 1746247050
              </p>

              {/* Email Section */}
              <div className="flex items-start gap-2">
                <strong className="text-white shrink-0">Email:</strong>
                <div className="flex flex-col">
                  <a
                    href="mailto:info@aestheticinternationalbd.net"
                    className="hover:text-white transition"
                  >
                    info@aestheticinternationalbd.net,
                  </a>
                  <a
                    href="mailto:akter.parul@yahoo.com"
                    className="hover:text-white transition"
                  >
                    akter.parul@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition flex items-center gap-2"
                >
                  <span className="text-blue-400">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition flex items-center gap-2"
                >
                  <span className="text-blue-400">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services/"
                  className="hover:text-blue-400 transition flex items-center gap-2"
                >
                  <span className="text-blue-400">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="hover:text-blue-400 transition flex items-center gap-2"
                >
                  <span className="text-blue-400">›</span> Area Of Work
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-blue-400 transition flex items-center gap-2"
                >
                  <span className="text-blue-400">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition flex items-center gap-2"
                >
                  <span className="text-blue-400">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Our Area of Works</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span> Climate change
                research
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span> Agriculture and
                food security
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span> Disaster risk
                reduction
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span> Green energy
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span> Climate and health
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span> Water resource
                management
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span> Server Solutions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span> Research &
                Development and Consultancy
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">
              Our Social Networks
            </h4>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaGooglePlus />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Aesthetic International. All rights
          reserved.
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> | </span>
          Powered by{" "}
          <a
            href="https://www.websoftbd.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition"
          >
            <img
              src={WEBSOFTlogo}
              alt="WebSoftBD"
              className="h-6 w-auto inline-block align-middle"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;