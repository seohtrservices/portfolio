import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { projects } from "../data/projects";


export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const projectGroups = projects.reduce(
    (groups, project) => {
      const category = project.title;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(project);
      return groups;
    },
    {} as Record<string, typeof projects>,
  );

  const categories = Object.keys(projectGroups);

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
      id="projects"
      ref={ref}
      className="py-20 px-4 bg-linear-to-b from-transparent via-blue-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Featured SEO{" "}
            <span className="text-transparent bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Case Studies
            </span>
          </h2>
          <p className="text-center text-gray-400 mt-4">
            A selection of Local SEO, Google Business Profile, and website optimization projects completed for automotive businesses.
          </p>
        </motion.div>

        <Tabs defaultValue={categories[0]} className="space-y-6">
          <TabsList className="mx-auto w-full max-w-4xl gap-2">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {projectGroups[category].map((project, i) => (
                  <motion.div
                    key={project.project_name + i}
                    variants={itemVariants}
                    className="group glass-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div
                      className="w-full bg-liner-to-br relative overflow-hidden"
                      style={{ backgroundImage: project.image }}
                    >
                      <img
                        src={project.image}
                        alt={project.project_name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {project.project_name}
                      </h4>
                      <p className="text-sm text-gray-400 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, j) => (
                          <span
                            key={j}
                            className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {project.link && (
                          <motion.a
                            href={project.link}
                            className="flex-1 px-4 py-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} /> View Project
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded flex items-center justify-center gap-2 hover:border-cyan-500 hover:text-cyan-400 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={16} /> Case Study
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
