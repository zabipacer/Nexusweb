import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from './BlogData'; // Import the actual blog posts data

// Helper function to parse a paragraph and replace markdown image syntax with <img> elements.
const renderParagraph = (paragraph, index) => {
  // Regular expression to match Markdown image syntax: ![Alt text](image-url)
  const regex = /!\[(.*?)\]\((.*?)\)/g;
  const elements = [];
  let lastIndex = 0;
  let match;
  
  // Loop through all markdown image matches in the paragraph.
  while ((match = regex.exec(paragraph)) !== null) {
    // Add any text that appears before the image.
    if (match.index > lastIndex) {
      elements.push(paragraph.slice(lastIndex, match.index));
    }
    
    // Add the <img> element.
    elements.push(
      <img
        key={`${index}-${match.index}`}
        src={match[2]}
        alt={match[1]}
        className="my-4 max-w-full rounded" // Tailwind CSS classes for styling
      />
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add any remaining text after the last image.
  if (lastIndex < paragraph.length) {
    elements.push(paragraph.slice(lastIndex));
  }
  
  // Return a paragraph element containing the processed parts.
  return (
    <p key={index} className="mb-6">
      {elements}
    </p>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);

  // Find the post with the matching id in your blogPosts array.
  const post = blogPosts.find((post) => post.id === postId);

  // Handle case when no post is found.
  if (!post) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-zinc-900 text-white py-24 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-block mb-8 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to Articles
          </Link>
          <p>Post not found.</p>
        </div>
      </motion.div>
    );
  }
useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when route changes
      }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-zinc-900 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-block mb-8 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          ← Back to Articles
        </Link>
        
        <motion.article>
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          
          <div className="flex justify-between items-center mb-6 text-zinc-400">
            <span className="text-sm bg-cyan-400/10 px-4 py-1 rounded-full text-cyan-400">
              {post.tags}
            </span>
            <time className="text-sm">{post.date}</time>
          </div>
          
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) =>
              renderParagraph(paragraph, index)
            )}
          </div>
          
          {post.readTime && (
            <div className="mt-8 text-zinc-400 text-sm">
              Estimated reading time: {post.readTime}
            </div>
          )}
        </motion.article>
      </div>
    </motion.div>
  );
};

export default BlogPost;
