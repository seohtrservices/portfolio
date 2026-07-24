import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from "../data/state";

/**
 * About Section
 * Split layout with professional image and animated statistics
 */
export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });


const skills = [
  'Google Business Profile Optimization',
  'Google Maps Ranking',
  'Local SEO Strategy',
  'On-Page SEO',
  'Keyword Research',
  'Competitor Analysis',
  'Review Management',
  'Content Optimization',
  'Google Search Console',
  'Ahrefs & SEMrush',
  'Technical SEO',
  'Automotive SEO',
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left: Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden glass-card p-2">
              <img
                src="../images/about_me_img.png"
                alt="Syed Zaroon Ali Chishti"
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
            </div>
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 glass-card px-6 py-3 rounded-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' as const }}
            >
              <p className="text-sm font-semibold text-cyan-400">GBP Specialist</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Me</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm Faizan Tayyab, a Local SEO Specialist and Google Business Profile (GBP) Manager with hands-on experience helping automotive businesses improve their visibility on Google Search and Google Maps.

I specialize in Google Business Profile Optimization, Local SEO, On-Page SEO, keyword research, and content optimization. My focus is helping auto repair shops, mechanics, car detailing studios, and automotive brands generate more local leads, phone calls, and customers through organic search.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="glass-card px-4 py-2 rounded-lg text-sm text-gray-300 hover:border-blue-500/50 transition-colors"
                >
                  ✓ {skill}
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-1">
                    {inView ? (
                      <>
                        <CountUp end={stat.value} duration={2} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                        {'+'}
                      </>
                    ) : (
                      '0'
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
