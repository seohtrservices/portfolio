import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";

/**
 * Experience Section
 * Beautiful animated timeline of career history
 */
export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = [
    {
      company: "",
      position: "SEO Executive | Local SEO Specialist",
      period: "2024 – Present",
      description:
        "Managing complete SEO strategies for automotive businesses including Google Business Profile optimization, Local SEO campaigns, On-Page SEO, keyword research, competitor analysis, content optimization, and Google Maps ranking improvements. Responsible for increasing online visibility and generating qualified local leads.",
      highlights: [
        "Google Business Profile",
        "Local SEO",
        "Google Maps Ranking",
        "On-Page SEO",
      ],
    },

    {
      company: "KIA Motors Festival City",
      position: "Service Advisor",
      period: "May 2024 – November 2024",
      description:
        "Provided customer consultation, vehicle service coordination, and after-sales support while maintaining high customer satisfaction. Developed a strong understanding of automotive operations and customer requirements.",
      highlights: [
        "Customer Support",
        "Automotive",
        "CRM",
        "Service Management",
      ],
    },

    {
      company: "Suzuki Ravi Motors",
      position: "Service Advisor",
      period: "2023 – 2024",
      description:
        "Managed customer interactions, scheduled vehicle services, coordinated with technical teams, and ensured smooth service delivery. Strengthened communication and operational management skills.",
      highlights: [
        "Customer Relations",
        "Operations",
        "Service Advisor",
        "Automotive",
      ],
    },

    {
      company: "BMW – Dewan Motors",
      position: "Junior Technician Intern",
      period: "January 2023 – April 2023",
      description:
        "Worked with senior technicians on vehicle diagnostics, maintenance, and repair processes while gaining practical knowledge of premium automotive service standards.",
      highlights: [
        "BMW",
        "Vehicle Diagnostics",
        "Automotive",
        "Technical Skills",
      ],
    },

    {
      company: "Suntech Car Company Pvt. Ltd.",
      position: "Apprentice Technician",
      period: "2021 – 2022",
      description:
        "Started my automotive career by assisting technicians in vehicle inspection, maintenance, and repair while building a strong technical foundation in the automotive industry.",
      highlights: [
        "Vehicle Maintenance",
        "Automotive",
        "Workshop",
        "Technical Training",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="experience"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Professional{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Experience
            </span>
          </h2>
          <p className="text-center text-gray-400 mt-4">
            My journey from the automotive industry to becoming a Local SEO &
            Google Business Profile Specialist, helping automotive businesses
            grow through Google Search and Google Maps.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-blue-500 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform -translate-x-3.5 md:-translate-x-4 border-4 border-black/80 z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <motion.div
                    className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-sm text-purple-400">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{exp.period}</p>
                    <p className="text-gray-400 text-sm mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((tag, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
