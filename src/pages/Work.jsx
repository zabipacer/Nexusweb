import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaExternalLinkAlt, FaCogs } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiShopify } from 'react-icons/si';
import { FiTrendingUp } from 'react-icons/fi';

// Updated projects with direct image links using Unsplash Source URLs
const projects = [
  {
    id: 1,
    title: "Momentum Fitness Lahore",
    description: "A dynamic fitness platform for Momentum Fitness in Lahore built using React and Tailwind CSS to provide an engaging user experience.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww", // Direct image link
    technologies: ["React", "Tailwind CSS"],
    link: "https://momentumfitnesslahore.com/",
  },
  {
    id: 2,
    title: "Specialized Timber Website",
    description: "A specialized timber website that makes widely available species usable to save endangered timber species, showcasing sustainable practices and innovative design.",
    image: "https://images.unsplash.com/photo-1583095117095-adaeabc401ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGltYmVyfGVufDB8fDB8fHww", // Direct image link
    technologies: ["React", "Tailwind CSS", "CMS"],
    link: "https://specialized-timber.vercel.app/",
  },
  {
    id: 3,
    title: "Fusion Journal Website & CMS",
    description: "Fusion is a comprehensive journal website and CMS where users can submit research journals for review, blending content management with academic collaboration.",
    image: "https://images.unsplash.com/photo-1501290741922-b56c0d0884af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzZWFyY2h8ZW58MHx8MHx8fDA%3D", // Direct image link
    technologies: ["React", "Tailwind CSS", "CMS"],
    link: "https://www.fusionesj.com/",
  },
  {
    id: 4,
    title: "Yasli Cosmetics Website",
    description: "A glamorous and user-friendly cosmetics website for Yasli Cosmetics, featuring a stunning design and smooth user experience tailored to beauty enthusiasts.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWNzfGVufDB8fDB8fHww", // Direct image link
    technologies: ["React", "Tailwind CSS"],
    link: "https://yaslicosmetics.com/",
  },
  {
    id: 5,
    title: "Gym Website React Tailwind",
    description: "A sleek gym website built using React and Tailwind CSS, offering seamless navigation and a responsive design for fitness enthusiasts.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D", // Already working
    technologies: ["React", "Tailwind CSS"],
    link: "https://example.com/gym-website",
  },
  {
    id: 6,
    title: "Landing Page & CMS (React, Tailwind, Firebase)",
    description: "A modern landing page paired with a CMS built in React, styled with Tailwind CSS, and integrated with Firebase for seamless content management.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D", // Direct image link
    technologies: ["React", "Tailwind CSS", "Firebase"],
    link: "https://example.com/cms-landing-page",
  },
  {
    id: 7,
    title: "Global Ecommerce Shopify Landing Page",
    description: "A digital marketing agency landing page designed for global ecommerce on Shopify, delivering a sleek and effective digital presence.",
    image: "https://images.unsplash.com/photo-1627634777217-c864268db30c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWdlbmN5fGVufDB8fDB8fHww", // Direct image link
    technologies: ["Shopify", "Digital Marketing"],
    link: "https://example.com/global-ecommerce",
  },
  {
    id: 8,
    title: "Red Onion Pizza Website",
    description: "A vibrant and appetizing website for Red Onion Pizza that offers menu details, online ordering options, and a modern design that captures the brand’s essence.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D", // Already working
    technologies: ["React", "Tailwind CSS"],
    link: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D", // If this link is for view project, consider using a proper live URL if available
  },
];

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
    window.scrollTo(0, 0);
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
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-cyan-400 font-medium">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="mr-2">
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
                  className={`inline-flex items-center px-4 py-2 ${
                    project.link.includes('example.com')
                      ? 'bg-zinc-600 cursor-not-allowed'
                      : 'bg-cyan-500 hover:bg-cyan-400'
                  } text-white rounded transition-colors`}
                >
                  {project.link.includes('example.com') ? 'Coming Soon' : 'View Project'}
                  {!project.link.includes('example.com') && <FaExternalLinkAlt className="ml-2" />}
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
