import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Feature from './Feature';
import Testimonials from './Testimonials';
import Contact from './Contact';
import ShowreelModal from '../pages/Showreel';

const ModernWebsite = () => {
  return (
    <div className="font-sans bg-zinc-900 text-zinc-100 overflow-x-hidden">
  
  

      {/* Hero Section with Gradient Morph */}
  <Hero/> 
        
        {/* Animated Background Elements */}
      
      {/* Services Grid with Hover 3D Effect */}
    <Services/>
      {/* Parallax Feature Section */}
     
<Feature/>
      {/* Interactive Testimonials */}
      <Testimonials/>
      {/* Fluid Contact Section */}
       <Contact/>
       </div>
  );
};

export default ModernWebsite;