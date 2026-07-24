import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { stats } from "../data/state";

/**
 * Stats Section
 * Animated statistics and achievements
 */
export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });


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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="stats"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            SEO Journey in  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Numbers</span>
          </h2>
          <p className="text-center text-gray-400 mt-4">Hands-on experience helping automotive businesses improve their online visibility through Local SEO, Google Business Profile optimization, and website SEO.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                {inView ? (
                  <>
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                    />
                    +
                  </>
                ) : (
                  '0'
                )}
              </div>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
