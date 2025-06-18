import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Play, Star, GitFork } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'EcoTracker',
      description: 'A comprehensive sustainability tracking platform that helps users monitor their carbon footprint and environmental impact through gamification.',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      category: 'web',
      featured: true,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      stats: { stars: 45, forks: 12 }
    },
    {
      id: 2,
      title: 'AI Study Buddy',
      description: 'Machine learning-powered study assistant that creates personalized learning paths and provides intelligent tutoring for students.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      category: 'ai',
      featured: true,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      stats: { stars: 89, forks: 23 }
    },
    {
      id: 3,
      title: 'Campus Connect',
      description: 'Social platform for college students to find study groups, share resources, and connect with peers in their academic journey.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
      category: 'mobile',
      featured: false,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      stats: { stars: 67, forks: 18 }
    },
    {
      id: 4,
      title: 'CodeSnippet Manager',
      description: 'Developer tool for organizing, sharing, and searching code snippets with syntax highlighting and collaborative features.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
      category: 'web',
      featured: false,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      stats: { stars: 34, forks: 8 }
    },
    {
      id: 5,
      title: 'Smart Home Dashboard',
      description: 'IoT dashboard for monitoring and controlling smart home devices with real-time analytics and automation features.',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Python', 'MQTT', 'InfluxDB'],
      category: 'iot',
      featured: false,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      stats: { stars: 52, forks: 15 }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'iot', label: 'IoT' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, from web applications to machine learning projects. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🌟 Featured Work
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
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

        {/* Filter Tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
                layout
              >
                <Card hover glass className="overflow-hidden h-full group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2">
                      {project.featured && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description.substring(0, 100)}...
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-3 h-3" />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Button icon={Github} size="lg" href="https://github.com">
            View All Projects on GitHub
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}