import React from 'react';
import { motion } from 'framer-motion';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiShopify,
  SiWordpress,
} from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';

const techs = [
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="w-12 h-12 text-gray-300" /> },
  { name: 'React', icon: <SiReact className="w-12 h-12 text-cyan-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12 text-green-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="w-12 h-12 text-yellow-500" /> },
  { name: 'Shopify', icon: <SiShopify className="w-12 h-12 text-green-700" /> },
  { name: 'WordPress', icon: <SiWordpress className="w-12 h-12 text-blue-500" /> },
  { name: 'SEO', icon: <FaSearch className="w-12 h-12 text-orange-500" /> },
];

const TechMarquee = () => {
  // Create multiple duplicates for seamless looping
  const techList = [...techs, ...techs, ...techs, ...techs];

  // Calculate dynamic duration based on number of items
  const duration = techList.length * 0.25;

  return (
    <div className="overflow-hidden w-full bg-zinc-900 py-8" role="marquee" aria-label="Technologies we use">
      <motion.div
        className="flex items-center will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {techList.map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`} 
            className="inline-block mx-8 transition-transform hover:scale-110"
          >
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {tech.icon}
              <span className="mt-2 text-sm font-medium text-zinc-200 tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;