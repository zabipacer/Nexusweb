import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-100 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} NexusWeb. All rights reserved.</p>

        {/* Contact Info */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="tel:03288768783" className="flex items-center space-x-2 hover:text-cyan-400 transition">
            <FaPhone /> <span>0328-8768783</span>
          </a>
          <a href="mailto:zuhaib.zul@gmail.com" className="flex items-center space-x-2 hover:text-cyan-400 transition">
            <FaEnvelope /> <span>zuhaib.zul@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
