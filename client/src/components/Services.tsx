import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPinned,
  Search,
  Globe,
  FileText,
  BarChart3,
  Star,
} from "lucide-react";

/**
 * Services Section
 * Premium service offerings with animated cards
 */
export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      icon: MapPinned,
      title: "Google Business Profile Optimization",
      description:
        "Optimize your Google Business Profile to improve visibility, increase customer engagement, and rank higher on Google Maps.",
      color: "from-blue-500 to-cyan-500",
    },

    {
      icon: Search,
      title: "Local SEO",
      description:
        "Improve your local search rankings with proven Local SEO strategies designed to generate more calls, website visits, and qualified leads.",
      color: "from-green-500 to-emerald-500",
    },

    {
      icon: Globe,
      title: "On-Page SEO",
      description:
        "Optimize website structure, content, metadata, internal linking, and technical SEO to improve organic search performance.",
      color: "from-purple-500 to-indigo-500",
    },

    {
      icon: FileText,
      title: "Keyword Research & Content Optimization",
      description:
        "Discover high-converting keywords and optimize website content to attract targeted traffic and improve search engine rankings.",
      color: "from-orange-500 to-red-500",
    },

    {
      icon: Star,
      title: "Review & Reputation Management",
      description:
        "Build trust with customers by managing Google reviews, improving ratings, and strengthening your online reputation.",
      color: "from-yellow-500 to-amber-500",
    },

    {
      icon: BarChart3,
      title: "SEO Reporting & Performance Tracking",
      description:
        "Track keyword rankings, Google Business Profile insights, website performance, and Local SEO progress with actionable reports.",
      color: "from-cyan-500 to-blue-500",
    },
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
      id="services"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Local SEO{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-center text-gray-400 mt-4">
            Helping automotive businesses improve their visibility, rank higher
            on Google Maps, and generate more qualified local customers through
            proven Local SEO strategies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card p-8 rounded-xl hover:shadow-lg transition-all group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="text-center mt-16">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to Grow Your Business on Google?
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Whether you're an auto repair shop, car detailing studio, garage, or
          automotive business, I can help improve your Google Maps visibility,
          increase local rankings, and generate more qualified leads.
        </p>

        <a
          href="https://wa.me/923200141848"
          className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition"
        >
          Get a Free GBP Audit
        </a>
      </div>
    </section>
  );
}
