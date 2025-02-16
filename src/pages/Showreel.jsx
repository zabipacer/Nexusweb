import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { ImSpinner2 } from 'react-icons/im';

const ShowreelModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

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

            {/* Video Embed with Loading Animation */}
            <div className="relative w-full aspect-w-16 aspect-h-9">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                  <ImSpinner2 className="w-10 h-10 text-cyan-400 animate-spin" />
                </div>
              )}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/DJnaLXs8mQk"
                title="Showreel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShowreelModal;
