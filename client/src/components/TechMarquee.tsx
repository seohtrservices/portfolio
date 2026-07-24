import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Tech Stack Marquee
 * Infinite scrolling tech stack logos
 */
export default function TechMarquee() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const techs = [
  "Google Business Profile",
  "Local SEO",
  "Google Maps",
  "Google Search Console",
  "Google Analytics",
  "Ahrefs",
  "SEMrush",
  "Google Keyword Planner",
  "Ubersuggest",
  "On-Page SEO",
  "Keyword Research",
  "Content Optimization",
  "Internal Linking",
  "Image SEO",
  "Review Management",
  "Technical SEO",
];

  // Duplicate for seamless loop
  const duplicatedTechs = [...techs, ...techs];

  return (
    <section
      id="tech-stack"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Tech <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Stack</span>
          </h2>
          <p className="text-center text-gray-400 mt-4">Professional tools and platforms I use to optimize Google Business Profiles, improve Local SEO, and increase organic search visibility.</p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Marquee */}
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'loop' as const,
              ease: 'linear',
            }}
          >
            {duplicatedTechs.map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-3 glass-card rounded-lg text-white font-medium whitespace-nowrap hover:border-cyan-500/50 transition-colors"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
