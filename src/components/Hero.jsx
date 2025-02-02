import React from 'react';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const [showModal, setShowModal] = React.useState(false);
  
  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    radius.set(Math.sqrt(e.currentTarget.offsetWidth ** 2 + e.currentTarget.offsetHeight ** 2) / 2.5);
  };

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, 
    rgba(34, 211, 238, 0.15) 0%, rgba(34, 211, 238, 0) 100%)`;

  const handleShowReel = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800" />
      
      {/* Dynamic gradient layer */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-50"
        style={{ background }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl top-1/4 left-1/4"
        />
        <motion.div
          initial={{ y: 100, rotate: 45 }}
          animate={{ y: -50, rotate: 90 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute w-[800px] h-[800px] bg-gradient-to-br from-purple-500/15 to-pink-500/15 blur-3xl right-0 bottom-0"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Digital Evolution
            <motion.span 
              initial={{ backgroundPosition: '100% 50%' }}
              animate={{ backgroundPosition: '0% 50%' }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="block bg-[length:300%_300%] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
            >
              For Visionaries
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-cyan-500 rounded-full text-lg font-semibold overflow-hidden group"
            >
              <Link to="?#contact" className="relative z-10">Start Your Journey</Link>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 border border-cyan-500/30 rounded-full text-lg bg-zinc-900/20 backdrop-blur-lg group"
              onClick={handleShowReel}
            >
              <span className="relative z-10 px-4">Watch Showreel</span>
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
        <span className="text-sm text-zinc-400">Explore More</span>
      </motion.div>

      {/* Showreel Modal */}
      {showModal && (
        <ShowreelModal isOpen={showModal} onClose={handleCloseModal} />
      )}
    </section>
  );
};

const ShowreelModal = ({ isOpen, onClose }) => {
  return (
<AnimatePresence>
    {isOpen && (
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-zinc-900 p-8 rounded-2xl w-full max-w-2xl relative border border-zinc-700"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-cyan-500 transition-colors"
              aria-label="Close modal"
            >
              <IoClose className="w-6 h-6" />
            </button>

            {/* Modal Title */}
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Watch Our Showreel</h3>

            {/* Video Embed */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Showreel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hero;
