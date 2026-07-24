import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

/**
 * Education Section
 * Academic background and certifications
 */
export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

const education = [
  {
    degree: "Diploma of Associate Engineer (DAE) – Auto & Diesel Technology",
    institution: "Government College of Technology (GCT), Lahore",
    year: "2021 – 2023",
    description:
      "Completed a Diploma in Auto & Diesel Technology, gaining practical knowledge of vehicle diagnostics, maintenance, repair systems, and automotive engineering. This technical background enables me to better understand the needs of automotive businesses and deliver industry-focused Local SEO solutions.",
    icon: GraduationCap,
  },

  {
    degree: "Matriculation (Computer Science)",
    institution: "Government Comprehensive Higher Secondary School",
    year: "2017 – 2019",
    description:
      "Built a strong foundation in computer science, digital technologies, and problem-solving, which later supported my transition into SEO, website optimization, and Google Business Profile management.",
    icon: GraduationCap,
  },
];

  const certifications = [
    'Shopify Theme Development',
    'Advanced React Patterns',
    'Headless Commerce Architecture',
    'Performance Optimization',
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Education & <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">Certifications</span>
          </h2>
          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
My educational background combines technical automotive knowledge with practical SEO experience, allowing me to understand both the industry and the digital strategies needed to help automotive businesses grow online.
</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Education */}
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card p-8 rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-green-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.year}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Certifications */}
          {/* <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-4">Professional Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-4 rounded-lg text-center hover:border-green-500/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-sm font-medium text-gray-300">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
