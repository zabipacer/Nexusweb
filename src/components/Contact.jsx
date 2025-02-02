import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons

const Contact = () => {
  // Contact methods data
  const contactMethods = [
    {
      id: 1,
      icon: <FaPhone className="w-6 h-6 text-cyan-500" />,
      label: 'Call Us',
      value: '+1 (555) 123-4567',
    },
    {
      id: 2,
      icon: <FaEnvelope className="w-6 h-6 text-cyan-500" />,
      label: 'Email Us',
      value: 'hello@yourcompany.com',
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="w-6 h-6 text-cyan-500" />,
      label: 'Visit Us',
      value: '123 Innovation Blvd, Tech City, USA',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-cyan-900/20 opacity-50"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              Ready to Redefine
              <span className="block text-cyan-400 mt-2">Your Digital Presence?</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Let's create something that doesn't just exist online - but dominates its space.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <div key={method.id} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-zinc-400">{method.label}</p>
                    <p className="font-semibold">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-zinc-800/50 backdrop-blur-lg p-8 rounded-3xl space-y-6"
          >
            {/* Name Field */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Your Email</label>
              <input
                type="email"
                className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Your Message</label>
              <textarea
                className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-500 py-4 rounded-xl font-semibold hover:bg-cyan-600 transition-colors"
            >
              Launch Your Revolution
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;