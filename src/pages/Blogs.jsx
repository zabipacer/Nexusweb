import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
  useVelocity
} from 'framer-motion';
import { blogPosts } from './BlogData';
import { Parallax } from 'react-scroll-parallax';
import { Link, useLocation } from 'react-router-dom';
// -----------------------
// Header Component
// -----------------------
const Header = () => {
  return (
    <motion.header
      className="mb-24 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.h2
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ letterSpacing: '1rem' }}
        animate={{ letterSpacing: '0.2rem' }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Digital
        </span>
        <br />
        <motion.span
          className="inline-block mt-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Chronicles
        </motion.span>
      </motion.h2>

      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-xl text-zinc-400">
          Impact-Site-Verification: dc07cafe-c57d-4eed-b28b-97398ba53aba
          
          Dive into our curated collection of insights shaping tomorrow's digital landscape
         
        </p>
      </motion.div>
    </motion.header>
  );
};

// -----------------------
// Featured Post Component
// -----------------------
const FeaturedPost = ({ post }) => {
  if (!post) return null; // If no post is found, return nothing

  return (
    <Parallax speed={5} className="mb-32">
      <motion.article
        className="relative group h-[600px] rounded-[4rem] overflow-hidden border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-xl"
        whileHover="hover"
        initial="rest"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-20"
            initial={{ scale: 1 }}
            variants={{ hover: { scale: 1.05 } }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-16 h-full flex flex-col justify-end">
          <motion.span
            className="text-cyan-400 mb-4 inline-block"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Featured Post
          </motion.span>
          <h3 className="text-4xl font-bold mb-6">{post.title}</h3>
          <p className="text-lg text-zinc-400 mb-4">{post.excerpt}</p>
          <div className="flex gap-4">
            <Link to={`/post/${post.id}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-cyan-500 rounded-full flex items-center gap-2"
              >
                Read Article <span className="animate-pulse">→</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.article>
    </Parallax>
  );
};

// -----------------------
// Blog Card Component with Improved Hover Effects
// -----------------------
const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      className="relative group bg-zinc-900/50 backdrop-blur-lg rounded-3xl p-8 border border-zinc-800/50 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'
      }}
    >
      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0) 100%)'
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Featured Image */}
        <motion.div
          className="h-64 rounded-2xl mb-6 overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-cyan-400 text-sm">{post.tags}</span>
          <span className="text-zinc-500 text-sm">{post.date}</span>
        </div>

        <motion.h3
          className="text-2xl font-semibold mb-3"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {post.title}
        </motion.h3>
        <p className="text-zinc-400 flex-grow">{post.excerpt}</p>

        <motion.div
          className="flex justify-between items-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
         
<motion.button
  whileHover={{ x: 5 }}
  transition={{ duration: 0.3 }}
  className="text-cyan-400 flex items-center gap-2 group"
>
  <Link 
    to={`/post/${post.id}`}
    className="hover:text-cyan-300 transition-colors"
  >
    Continue Reading
    <motion.span
      className="transition-transform"
      whileHover={{ translateX: 4 }}
      transition={{ duration: 0.3 }}
    >
      ↠
    </motion.span>
  </Link>
</motion.button>
<div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-zinc-800" />
        <span className="text-sm text-zinc-500">{post.readTime}</span>
      </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

// -----------------------
// Floating Navigation Component
// -----------------------
const FloatingNavigation = () => {
  return (
    <motion.nav
      className="fixed bottom-8 right-8 z-50 flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 rounded-full bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 flex items-center justify-center"
      >
        ↑
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 rounded-full bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 flex items-center justify-center"
      >
        ↓
      </motion.button>
    </motion.nav>
  );
};

// -----------------------
// Main Blogs Component
// -----------------------
const Blogs = () => {
    const { pathname } = useLocation();
  
    const containerRef = useRef(null);
  // Reset scroll when returning to blog list
  React.useEffect(() => {
    if (pathname === '/') {
      containerRef.current?.scrollTo(0, 0);
    }
  }, [pathname]);
 
  const { scrollYProgress } = useScroll({ container: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { damping: 20 });
  const scrollVelocity = useVelocity(smoothProgress);
  const skew = useTransform(scrollVelocity, [-1, 1], [-10, 10]);

  // Motion values for the interactive background and cursor follower
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);

  // Update mouse position and calculate the radius based on container dimensions
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    radius.set(Math.sqrt(width ** 2 + height ** 2) / 3);
  };

  // Define a reusable radial gradient background using Framer Motion's template
  const radialBackground = useMotionTemplate`
    radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, 
    rgba(34, 211, 238, 0.15) 0%, rgba(34, 211, 238, 0) 100%)
  `;

  // Dummy dynamic blog data with featured image URLs from Unsplash

  const featuredPost = blogPosts.find(post => post.isFeatured) || blogPosts[0]; // Use first post if none is featured
useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when route changes
      }, []);
  return (
    <section
      className="min-h-screen relative overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Parallax background layer */}
      <Parallax speed={-20} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800" />
      </Parallax>

      {/* Interactive background with skew transformation */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50"
        style={{ background: radialBackground, skew }}
      />

      {/* Floating gradient elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-64">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <Header />

          <FeaturedPost post={featuredPost} />

          {/* Blog Grid */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
          {/* Infinite scroll loader */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 text-zinc-400">
              <motion.div
                className="w-8 h-8 border-2 border-cyan-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              />
              Loading More Articles...
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Navigation */}
      <FloatingNavigation />

      {/* Interactive Cursor Follower */}
      <motion.div
        className="fixed w-96 h-96 pointer-events-none"
        style={{
          background: useMotionTemplate`
            radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, 
            rgba(34, 211, 238, 0.05) 0%, rgba(34, 211, 238, 0) 100%)
          `,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </section>
  );
};

export default Blogs;
