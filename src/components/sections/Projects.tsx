import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Play, Star, GitFork } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Face Recognition',
      description: 'A comprehensive real-time face recognition and object detection application with a modern GUI interface. This system combines YOLO object detection with face recognition capabilities for security, surveillance, and identification purposes.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OpenCV', 'Yolo', 'Pickle', 'NumPy' , 'CustomTkinter', 'PIL (Pillow)'],
      liveUrl: 'https://github.com/Mukti-J/Face_Recognition',
      githubUrl: 'https://github.com/Mukti-J/Face_Recognition',
      stats: { stars: 1, forks: 0 }
    },
    {
      id: 2,
      title: 'Coming Soon',
      description: 'Stay tuned! Exciting projects will be showcased here soon.',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: [],
      liveUrl: '#',
      githubUrl: '#',
      stats: { stars: 0, forks: 0 }
    },
    {
      id: 3,
      title: 'Coming Soon',
      description: 'Stay tuned! Exciting projects will be showcased here soon.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: [],
      liveUrl: '#',
      githubUrl: '#',
      stats: { stars: 0, forks: 0 }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20" id="projects">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="gradient-text">Projects Essentials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, from web applications to machine learning projects. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card hover glass className="overflow-hidden h-full group">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center space-x-4 text-white text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-4 h-4" />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button size="sm" icon={ExternalLink} href={project.liveUrl}>
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" icon={Github} href={project.githubUrl}>
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Button icon={Github} size="lg" href="https://github.com/Mukti-J">
            View All Projects on GitHub
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}