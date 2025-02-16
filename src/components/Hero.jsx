import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import ShowreelModal from "../pages/ShowreelModal";


const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const [showModal, setShowModal] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const textArray = [
    "For Visionaries", 
    "For Innovators", 
    "For Game Changers"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    radius.set(Math.sqrt(e.currentTarget.offsetWidth ** 2 + e.currentTarget.offsetHeight ** 2) / 2.5);
  };

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, 
    rgba(34, 211, 238, 0.15) 0%, rgba(34, 211, 238, 0) 100%)`;

  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800" />
      <motion.div className="absolute inset-0 z-0 opacity-50" style={{ background }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.1 }} 
          className="max-w-4xl"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.5 }} 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.2]"
          >
            Digital Evolution
            <motion.span 
              key={textIndex}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              className="block overflow-visible min-h-[3rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent h-auto"
            >
              {textArray[textIndex]}
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }} 
            className="text-lg md:text-xl lg:text-2xl text-zinc-300 mb-8 max-w-3xl"
          >
            We craft web experiences that don't just look good — they create business revolutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }} 
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Fixed Button: Using onClick Instead of Link */}
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              onClick={() => window.location.href = '/#contact'}
              className="relative px-8 py-4 bg-cyan-500 rounded-full text-lg font-semibold overflow-hidden group cursor-pointer"
            >
              Start Your Journey
            </motion.button>

            {/* Fixed Showreel Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="relative px-8 py-4 border border-cyan-500/30 rounded-full text-lg bg-zinc-900/20 backdrop-blur-lg group cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <span className="relative z-10 px-4">Watch Showreel</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Showreel Modal */}
      <ShowreelModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Hero;
