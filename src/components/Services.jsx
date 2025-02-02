import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaRocket, FaPaintBrush, FaMobileAlt, FaChartLine, FaCode, FaUsers } from 'react-icons/fa'; // Import icons from react-icons

// Define the services data with unique copy
const services = [
  {
    id: 1,
    title: 'High-Performance Websites',
    description: 'Create a strong online presence with fast, optimized websites built for performance and user engagement. Speed, security, and SEO best practices come as standard.',
    icon: <FaRocket className="w-8 h-8 text-cyan-500" />,
  },
  {
    id: 2,
    title: 'Custom Web Design',
    description: 'Design that tells your brand’s story. We craft visually stunning websites tailored to match your business identity and captivate your audience.',
    icon: <FaPaintBrush className="w-8 h-8 text-cyan-500" />,
  },
  {
    id: 3,
    title: 'Responsive Development',
    description: 'Ensure your website works flawlessly on all devices. Our responsive design ensures users have a seamless experience whether on mobile, tablet, or desktop.',
    icon: <FaMobileAlt className="w-8 h-8 text-cyan-500" />,
  },
  {
    id: 4,
    title: 'Data-Driven Strategies',
    description: 'Use data to drive decisions. We help you leverage analytics to create strategies that enhance user experience and lead to increased conversions and higher ROI.',
    icon: <FaChartLine className="w-8 h-8 text-cyan-500" />,
  },
  {
    id: 5,
    title: 'Scalable Web Solutions',
    description: 'Build for growth. We provide scalable web solutions that grow with your business, adapting seamlessly as your needs evolve and expand.',
    icon: <FaCode className="w-8 h-8 text-cyan-500" />,
  },
  {
    id: 6,
    title: 'User-Centric Experiences',
    description: 'Put your users first. We design intuitive, user-friendly interfaces that improve usability, increase user engagement, and boost conversions.',
    icon: <FaUsers className="w-8 h-8 text-cyan-500" />,
  },
];

const ServiceCard = ({ service }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateZ: 1 }}
    className="p-8 bg-zinc-800/50 backdrop-blur-lg rounded-3xl border border-zinc-700 hover:border-cyan-500 transition-all duration-300"
  >
    <div className="w-16 h-16 mb-6 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
      {service.icon}
    </div>
    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
    <p className="text-zinc-400">{service.description}</p>
  </motion.div>
);

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
};

const Services = () => (
  <section id="services" className="py-24 px-6 bg-zinc-800/30">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
