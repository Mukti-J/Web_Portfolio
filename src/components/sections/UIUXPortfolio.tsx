import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Figma, 
  Palette, 
  Target, 
  Layers, 
  Eye,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function UIUXPortfolio() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'web', label: 'Web Design', icon: Monitor },
    { id: 'mobile', label: 'Mobile App', icon: Smartphone },
    { id: 'prototype', label: 'Prototypes', icon: Target },
  ];

const designProjects = [
    {
        id: 1,
        title: 'Wuangi Mobile App UI/UX',
        category: 'mobile',
        description: 'Premium Cologne and perfume discounter platform store. A mobile app designed for users to browse, purchase, and discover premium fragrances at discounted prices, with a focus on elegant UI and seamless shopping experience.',
        image: '/Opening.png',
        tags: ['Mobile UI', 'E-commerce', 'Product Discovery', 'User Experience'],
        tools: ['Figma'],
        duration: '1 weeks',
        role: 'UI/UX Designer | Solo Project',
        challenge: 'Creating a luxurious yet accessible shopping experience for fragrance enthusiasts on mobile devices',
        solution: 'Designed a visually appealing interface with intuitive navigation, easy product comparison, and streamlined checkout flow',
        figmaUrl: 'https://www.figma.com/design/zEI8jn7bj3PStoV03DUTnf/Mukti-Jaenal_672023266_T2_IMK-B?node-id=0-1&t=X6DViOYh7lo6Reph-1',
        prototypeUrl: 'https://www.figma.com/proto/zEI8jn7bj3PStoV03DUTnf/Mukti-Jaenal_672023266_T2_IMK-B?node-id=0-1&t=X6DViOYh7lo6Reph-1',
        caseStudyUrl: '#',
        devices: ['mobile']
    },
    {
        id: 2,
        title: 'Car Rental Website UI/UX',
        category: 'web',
        description: 'A modern, responsive website for a car rental service, focusing on seamless booking, vehicle browsing, and user-friendly management for both customers and administrators.',
        image: '/Tentang - Profile.png',
        tags: ['UI Design', 'UX Research', 'Booking Flow', 'Accessibility'],
        tools: ['Figma'],
        duration: '2 weeks',
        role: 'UI/UX Designer | Group Project',
        challenge: 'Designing an intuitive booking process and clear vehicle information for diverse users',
        solution: 'Developed a step-by-step booking flow, prominent vehicle details, and accessible navigation',
        figmaUrl: 'https://www.figma.com/design/U3lIMl9Hmn1NuqYTtaK9YH/TR_Kelompok-8?node-id=3-63&t=LsjGDt6RKrLiCZ2A-1',
        prototypeUrl: 'https://www.figma.com/proto/U3lIMl9Hmn1NuqYTtaK9YH/TR_Kelompok-8?node-id=3-63&t=LsjGDt6RKrLiCZ2A-1',
        caseStudyUrl: '#',
        devices: ['desktop', 'tablet', 'mobile']
    },
    {
        id: 3,
        title: 'Coming Soon',
        category: 'web',
        description: 'This project is coming soon. Stay tuned for updates!',
        image: 'https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg',
        tags: [],
        tools: [],
        duration: '',
        role: '',
        challenge: '',
        solution: '',
        // figmaUrl: '#', wiil add later if theres new project added
        // prototypeUrl: '#', 
        // caseStudyUrl: '#',
        devices: []
    },
    {
        id: 4,
        title: 'Coming Soon',
        category: 'mobile',
        description: 'This project is coming soon. Stay tuned for updates!',
        image: 'https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg',
        tags: [],
        tools: [],
        duration: '',
        role: '',
        challenge: '',
        solution: '',
        // figmaUrl: '#', wiil add later if theres new project added
        // prototypeUrl: '#',
        // caseStudyUrl: '#',
        devices: []
    }
];

  const filteredProjects = activeCategory === 'all' 
    ? designProjects 
    : designProjects.filter(project => project.category === activeCategory);

  const designProcess = [
    {
      step: '01',
      title: 'Research & Discovery',
      description: 'User interviews, competitive analysis, and market research to understand the problem space.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Ideation & Wireframing',
      description: 'Sketching ideas, creating user flows, and developing low-fidelity wireframes.',
      icon: Layers,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Visual Design',
      description: 'Creating high-fidelity mockups, establishing design systems, and visual identity.',
      icon: Palette,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '04',
      title: 'Prototyping & Testing',
      description: 'Building interactive prototypes and conducting usability testing with real users.',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
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

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'desktop': return Monitor;
      case 'tablet': return Tablet;
      case 'mobile': return Smartphone;
      default: return Monitor;
    }
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900" id="uiux-portfolio">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            UI/UX <span className="gradient-text">Design Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting intuitive and beautiful digital experiences through user-centered design, 
            from research and wireframing to high-fidelity prototypes and testing.
          </p>
        </motion.div>

        {/* Design Process */}
        <motion.div variants={itemVariants} className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            My Design Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcess.map((process, index) => (
              <motion.div
                key={process.step}
                variants={itemVariants}
                custom={index}
              >
                <Card glass className="text-center p-6 h-full">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${process.color} mx-auto mb-4 flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <process.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold gradient-text mb-2">{process.step}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants}>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                layout
              >
                <Card hover glass className="overflow-hidden h-full">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" href={project.figmaUrl}>
                          <Figma className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" href={project.prototypeUrl}>
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h4>
                      <div className="flex space-x-1">
                        {project.devices.map((device) => {
                          const DeviceIcon = getDeviceIcon(device);
                          return (
                            <DeviceIcon key={device} className="w-4 h-4 text-gray-500" />
                          );
                        })}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                        <p className="font-medium text-gray-900 dark:text-white">{project.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                        <p className="font-medium text-gray-900 dark:text-white">{project.role}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Challenge</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{project.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Solution</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button size="sm" icon={Figma} href={project.figmaUrl}>
                        Figma File
                      </Button>
                      <Button size="sm" variant="outline" icon={ExternalLink} href={project.prototypeUrl}>
                        Prototype
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Skills */}
        <motion.div variants={itemVariants} className="mt-20">
          <Card glass className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Design Tools & Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Design Tools</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Figma', 'Illustrator', 'Photoshop', 'Adobe XD'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Research Methods</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['User Interviews', 'Usability Testing', 'A/B Testing', 'Card Sorting', 'Surveys'].map((method) => (
                    <span key={method} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Specializations</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Mobile Design', 'Web Design', 'Design Systems', 'Accessibility', 'Prototyping'].map((spec) => (
                    <span key={spec} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in working together?
          </h3>          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss your next design project and create something amazing together.
          </p>
          <Button 
            size="lg" 
            icon={ArrowRight}
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
