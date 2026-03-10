import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
      e.target.reset();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">

      <div className="max-w-6xl w-full bg-white border border-gray-200 rounded-2xl shadow-lg p-10 grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Info</h2>

          <p className="text-gray-600 mb-8">
            Have a question or need support? We're here to help with your electronics journey.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <MapPin className="text-pink-500" size={20} />
              <span className="text-gray-700">
                Tokyo, Adachi-Ku, 1210823, Umejima station
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" size={20} />
              <span className="text-gray-700">
                support@MELA.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-red-500" size={20} />
              <span className="text-gray-700">
                (030) 4456-6745
              </span>
            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch with <span className="text-pink-500">MELA</span>
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none border border-gray-300 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none border border-gray-300 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 outline-none border border-gray-300 focus:border-pink-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition"
            >
              {sent ? "Thank you! We will reply promptly." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;