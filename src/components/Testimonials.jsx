import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechNova',
      comment: '"Our revenue increased by 300% within 3 months of the new website launch."',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg', // Placeholder image URL
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Smith',
      role: 'Founder, InnovateX',
      comment: '"The team delivered a seamless user experience that exceeded our expectations."',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg', // Placeholder image URL
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Marketing Director, BrightFuture',
      comment: '"Their data-driven approach helped us achieve record-breaking conversion rates."',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg', // Placeholder image URL
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Trailblazers Trust Us</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -10 }}
              className="p-8 bg-zinc-800 rounded-3xl border border-zinc-700 hover:border-cyan-500 transition-all"
            >
              {/* Testimonial Header */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-zinc-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Comment */}
              <p className="text-zinc-400 mb-6">{testimonial.comment}</p>

              {/* Testimonial Rating */}
              <div className="flex space-x-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-cyan-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;