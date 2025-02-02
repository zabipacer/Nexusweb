import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaChartLine, FaUserClock, FaCogs } from 'react-icons/fa'; // Import icons from react-icons

const Feature = () => {
  // List of features
  const features = [
    {
      id: 1,
      icon: <FaChartLine className="w-6 h-6 text-cyan-500" />,
      text: 'Real-time user behavior tracking',
    },
    {
      id: 2,
      icon: <FaUserClock className="w-6 h-6 text-cyan-500" />,
      text: 'Personalized user journeys',
    },
    {
      id: 3,
      icon: <FaCogs className="w-6 h-6 text-cyan-500" />,
      text: 'AI-driven analytics and insights',
    },
    {
      id: 4,
      icon: <FaCheckCircle className="w-6 h-6 text-cyan-500" />,
      text: 'Conversion optimization strategies',
    },
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-zinc-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold leading-tight">
              Beyond Aesthetics:
              <span className="block text-cyan-400 mt-2">Smart Business Solutions</span>
            </h2>
            <p className="text-zinc-400 text-xl">
              We integrate AI-driven analytics, personalized user journeys, and conversion optimization
              directly into your website's DNA.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-zinc-300">{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>

            {/* Mockup Container */}
            <div className="relative bg-zinc-800 p-1 rounded-2xl transform perspective-1000">
              <div className="bg-zinc-900 rounded-xl p-8 transform rotate-y-6">
                {/* Placeholder for Code Editor or Dashboard Mockup */}
                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-zinc-700/50 rounded w-3/4"></div>
                    <div className="h-4 bg-zinc-700/50 rounded w-1/2"></div>
                    <div className="h-4 bg-zinc-700/50 rounded w-5/6"></div>
                    <div className="h-4 bg-zinc-700/50 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;