import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../UI/SectionTitle';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      // ⚠️ Replace 'your_form_id' with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/your_form_id', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        console.error('Formspree error:', await response.json());
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="Contact Us" 
          subtitle="We'd love to hear from you. Reach out to us through any of the channels below." 
        />

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-blue-50/80 backdrop-blur-sm p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200 group">
            <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-full text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaMapMarkerAlt />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Address</h4>
            <p className="text-gray-600 mt-2 leading-relaxed">
              87, Kazi Nazrul Islam Avenue,<br />
              East Tejturi Bazar;<br />
              Tejgaon PS, Dhaka-1215, Bangladesh.
            </p>
          </div>

          <div className="bg-blue-50/80 backdrop-blur-sm p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200 group">
            <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-full text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaPhoneAlt />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Phone Number</h4>
            <p className="text-gray-600 mt-2">
              <a href="tel:+8801716983511" className="hover:text-blue-600 transition block text-lg">
                +880 1746247050
              </a>
            </p>
          </div>

          <div className="bg-blue-50/80 backdrop-blur-sm p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200 group">
            <div className="inline-flex p-4 bg-blue-100 text-blue-600 rounded-full text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600 mt-2">
              <a href="mailto:fakrulebt@yahoo.com" className="hover:text-blue-600 transition block">
                info@aestheticinternationalbd.net
              </a>
              <a href="mailto:fakrul1976@gmail.com" className="hover:text-blue-600 transition block">
                akter.parul@yahoo.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form + Location Section – swapped order: location left, form right */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Location / Map – LEFT */}
          <div className="bg-gradient-to-br from-blue-50/50 to-white rounded-2xl p-8 md:p-10 shadow-xl border border-white/50 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                Our Location
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 text-xl" />
                  <div>
                    <p className="font-medium text-gray-800">Aesthetic International</p>
                    <p>87, Kazi Nazrul Islam Avenue, East Tejturi Bazar; </p>
                    <p>Tejgaon PS; Dhaka-1215; Bangladesh.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-600 text-xl" />
                  <div>
                    <p className="font-medium text-gray-800">Working Hours</p>
                    <p>Saturday – Thursday: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-lg border border-gray-200 h-48 md:h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8375!2d90.3575!3d23.7775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c0c0c0c0c0%3A0x0!2zMjPCsDQ2JzM5LjAiTiA5MMKwMjEnMjcuMCJF!5e0!3m2!1sen!2sbd!4v1620000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Aesthetic International Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form – RIGHT */}
          <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 md:p-10 shadow-xl border border-white/50 order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
              Send Us a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New message from Aesthetic International website" />
              <input type="hidden" name="_cc" value="hemal.websoftbd@gmail.com" />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white/70 backdrop-blur-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white/70 backdrop-blur-sm"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white/70 backdrop-blur-sm"
                required
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none bg-white/70 backdrop-blur-sm"
                required
              ></textarea>

              {formStatus === 'sending' && (
                <p className="text-blue-600 text-center font-medium">Sending...</p>
              )}
              {formStatus === 'success' && (
                <p className="text-green-600 text-center font-medium">✅ Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center font-medium">❌ Failed to send. Please try again.</p>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Optional: "Get In Touch" button – still there but might be redundant now, keep for consistency */}
        <div className="text-center mt-10">
          <Link to="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-200 transition-all duration-200">
            Get In Touch
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;