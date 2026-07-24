import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Hero Section
 * Cinematic fullscreen hero with animated mesh gradient, particles, and 3D elements
 * Features: Typewriter animation, floating tech icons, CTA buttons
 */
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

const techIcons = [
  { name: 'Google Business Profile', delay: 0 },
  { name: 'Local SEO', delay: 0.1 },
  { name: 'Google Maps', delay: 0.2 },
  { name: 'On-Page SEO', delay: 0.3 },
  { name: 'Ahrefs', delay: 0.4 },
  { name: 'SEMrush', delay: 0.5 },
  { name: 'Google Search Console', delay: 0.6 },
  { name: 'Google Analytics', delay: 0.7 },
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/manus-storage/hero-mesh-gradient_666117bb.png"
          alt="Mesh Gradient"
          className="w-full h-full object-cover"
        />
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-5"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
        animate={{
          y: [0, -100, 0],
          x: [0, Math.sin(i) * 50, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.1,
          repeatType: 'loop' as const,
        }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-sm font-medium text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full inline-block">
            🚀 Helping Automotive Businesses Dominate Google Maps
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent"
        >
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Hafiz Tayyab Rafique
          </span>
        </motion.h1>

        {/* Typewriter Animation */}
        <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-8 h-12">
          <TypeAnimation
  sequence={[
    'Google Business Profile Specialist',
    2000,
    'Local SEO Expert',
    2000,
    'Google Maps Ranking Specialist',
    2000,
    'On-Page SEO Executive',
    2000,
    'Automotive SEO Specialist',
    2000,
  ]}
  wrapper="span"
  cursor={true}
  repeat={Infinity}
/>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
        >
          Helping Auto Repair Shops, Car Garages, Detailing Studios, and Automotive Businesses increase their visibility on Google Maps through Google Business Profile Optimization, Local SEO, and On-Page SEO.

I specialize in improving local rankings, generating qualified leads, and driving more customers from Google Search & Maps.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Case Studies
 <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="http://wa.me/923035385721"
            className="px-8 py-4 border border-blue-500/50 text-white font-semibold rounded-lg hover:bg-blue-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Free GBP Audit
          </motion.a>
          <motion.a
            href="../docs/Zaroon_CV.pdf"
            download            className="px-8 py-4 border border-purple-500/50 text-white font-semibold rounded-lg hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} /> Download Resume
          </motion.a>
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="px-4 py-2 glass-card text-sm font-medium text-gray-300"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: tech.delay,
                repeatType: 'loop' as const,
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
              }}
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' as const }}
      >
        <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-blue-500 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' as const }}
          />
        </div>
      </motion.div>
    </section>
  );
}
