// Work.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaExternalLinkAlt, FaCogs } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiShopify } from 'react-icons/si';
import { FiTrendingUp } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "Momentum Fitness Lahore",
    description:
      "A dynamic fitness platform for Momentum Fitness in Lahore built using React and Tailwind CSS to provide an engaging user experience.",
    image: "https://source.unsplash.com/random/800x600?fitness",
    technologies: ["React", "Tailwind CSS"],
    link: "https://example.com/momentum-fitness",
  },
  {
    id: 2,
    title: "Gym Website React Tailwind",
    description:
      "A sleek gym website built using React and Tailwind CSS, offering seamless navigation and a responsive design for fitness enthusiasts.",
    image: "https://source.unsplash.com/random/800x600?gym",
    technologies: ["React", "Tailwind CSS"],
    link: "https://example.com/gym-website",
  },
  {
    id: 3,
    title: "Specialized Timber Website",
    description:
      "A specialized timber website that makes widely available species usable to save endangered timber species, showcasing sustainable practices and innovative design.",
    image: "https://source.unsplash.com/random/800x600?timber",
    technologies: ["React", "Tailwind CSS", "CMS"],
    link: "https://example.com/specialized-timber",
  },
  {
    id: 4,
    title: "Landing Page & CMS (React, Tailwind, Firebase)",
    description:
      "A modern landing page paired with a CMS built in React, styled with Tailwind CSS, and integrated with Firebase for seamless content management.",
    image: "https://source.unsplash.com/random/800x600?landing-page",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    link: "https://example.com/cms-landing-page",
  },
  {
    id: 5,
    title: "Global Ecommerce Shopify Landing Page",
    description:
      "A digital marketing agency landing page designed for global ecommerce on Shopify, delivering a sleek and effective digital presence.",
    image: "https://source.unsplash.com/random/800x600?ecommerce",
    technologies: ["Shopify", "Digital Marketing"],
    link: "https://example.com/global-ecommerce",
  },
  {
    id: 6,
    title: "Fusion Journal Website & CMS",
    description:
      "Fusion is a comprehensive journal website and CMS where users can submit research journals for review, blending content management with academic collaboration.",
    image: "https://source.unsplash.com/random/800x600?journal",
    technologies: ["React", "Tailwind CSS", "CMS"],
    link: "https://example.com/fusion-journal",
  },
  {
    id: 7,
    title: "Red Onion Pizza Website",
    description:
      "A vibrant and appetizing website for Red Onion Pizza that offers menu details, online ordering options, and a modern design that captures the brand’s essence.",
    image: "https://source.unsplash.com/random/800x600?pizza",
    technologies: ["React", "Tailwind CSS"],
    link: "https://example.com/red-onion-pizza",
  },
  {
    id: 8,
    title: "Yasli Cosmetics Website",
    description:
      "A glamorous and user-friendly cosmetics website for Yasli Cosmetics, featuring a stunning design and smooth user experience tailored to beauty enthusiasts.",
    image: "https://source.unsplash.com/random/800x600?cosmetics",
    technologies: ["React", "Tailwind CSS"],
    link: "https://example.com/yasli-cosmetics",
  },
  // You can add more projects here if needed.
];

// Mapping technology names to corresponding icons
const techIcons = {
  React: <FaReact className="inline-block mr-1 text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="inline-block mr-1 text-sky-400" />,
  Firebase: <SiFirebase className="inline-block mr-1 text-yellow-500" />,
  CMS: <FaCogs className="inline-block mr-1 text-purple-500" />,
  Shopify: <SiShopify className="inline-block mr-1 text-green-500" />,
  "Digital Marketing": <FiTrendingUp className="inline-block mr-1 text-red-500" />,
};

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when route changes
      }, []); 
    return (
    <section className="min-h-screen bg-zinc-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-cyan-400 font-medium">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="mr-2">
                        {/* Render icon if available, then the technology name */}
                        {techIcons[tech] || null}
                        {tech}
                      </span>
                    ))}
                  </span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded transition-colors"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
