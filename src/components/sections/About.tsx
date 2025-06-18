import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Users, Target, Book, Coffee } from 'lucide-react';
import { Card } from '../ui/Card';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const interests = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Passionate about writing maintainable, scalable code that stands the test of time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Obsessed with optimizing applications for speed and efficiency.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Love working in teams and contributing to open-source projects.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Enjoy tackling complex challenges and finding elegant solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Book,
      title: 'Learning',
      description: 'Continuously expanding my knowledge in emerging technologies.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Coffee,
      title: 'Innovation',
      description: 'Always exploring new ways to improve user experiences.',
      color: 'from-amber-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900" id="about">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student with a passion for creating innovative digital solutions. 
            Currently pursuing my degree at UKSW Salatiga while building real-world applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                My fascination with technology began in junior high, 
                sparked by an interest in hardware. 
                I initially hoped to pursue vocational training in Computer and Network Engineering (TKJ) 
                to delve deeper into hardware, but circumstances led me to study Multimedia instead.
                It was there that my curiosity expanded beyond hardware into the realm of software.
                This shift in focus ultimately led me to discover and enroll in UKSW Salatiga,
                where I'm now in my second year.
              </p>
              <p>
                At UKSW, I've come to understand that IT isn't just about hardware or software in isolation;
                it's about how they collaborate seamlessly.
                This broader perspective has fueled my deep passion for full-stack development and system architecture.
                I've had the opportunity to work on diverse projects,
                ranging from machine learning applications to scalable web platforms,
                and I particularly enjoy the challenge of turning complex problems into elegant,
                user-friendly solutions.
              </p>
              <p>
               When I'm not coding, you can find me actively contributing to group projects with my peers,
               reflecting the collaborative nature of IT, or fulfilling my role as part of the Informatics Engineering 
               Student Association. I also enjoy exploring the latest tech innovations. 
               I believe in continuous learning and staying ahead of industry trends, 
               always seeking to understand how different technological components work together, much like hardware and software.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Location:</span>
                  <p className="font-medium text-gray-900 dark:text-white">Salatiga, Indonesia</p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Education:</span>
                  <p className="font-medium text-gray-900 dark:text-white">UKSW</p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Major:</span>
                  <p className="font-medium text-gray-900 dark:text-white">Computer Science</p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Year:</span>
                  <p className="font-medium text-gray-900 dark:text-white">Sophomore (2025)</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Focus</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Machine Learning & AI</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Full-Stack Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">System Design</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                custom={index}
              >
                <Card hover glass className="text-center h-full">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${interest.color} p-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <interest.icon className="w-full h-full text-white" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {interest.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}