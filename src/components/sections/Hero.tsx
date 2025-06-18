import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Sparkles, Instagram } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['CS Student', 'Machine Learning Enthusiast', 'Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Future Project Manager'];
  const fullText = titles[currentIndex % titles.length];

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, fullText]);

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

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side - Text content */}
        <motion.div variants={itemVariants} className="text-center lg:text-left">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="gradient-text">Mukti Jaenal</span>
          </h1>

          <div className="h-16 mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              {displayText}
              <motion.span
                className="inline-block w-1 h-8 bg-primary-500 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
            Passionate Computer Science student at UKSW Salatiga with expertise in machine learning, full-stack development, 
            and system design. I love building innovative solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              icon={Mail}
              size="lg"
              onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
              }}
            >
              Get In Touch
            </Button>
            <Button variant="outline" icon={Download} size="lg">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6">
            {[
              { icon: Github, href: 'https://github.com/Mukti-J', color: 'hover:text-gray-900' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/muktijaenal/', color: 'hover:text-blue-600' },
              { icon: Instagram, href: 'https://www.instagram.com/mukti.xj7/', color: 'hover:text-pink-500' },
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
              key={index}
              href={href}
              className={`text-gray-600 dark:text-gray-400 ${color} transition-colors`}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
              >
              <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right side - Profile card */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <Card glass hover className="max-w-sm w-full relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
                  'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(16,185,129,0.1))',
                  'linear-gradient(225deg, rgba(16,185,129,0.1), rgba(59,130,246,0.1))',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="relative z-10 text-center">
              <motion.div
                className="relative mx-auto w-32 h-32 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/Mukti.jpg"
                  alt="Mukti Jaenal"
                  className="w-full h-full rounded-full object-cover border-4 border-white/50 shadow-xl"
                />
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-20 blur-md"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Mukti Jaenal
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                CS Student & Developer
              </p>

              <div className="flex justify-center space-x-4 mb-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-600 dark:text-primary-400">15+</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary-600 dark:text-secondary-400">3.6</div>
                  <div className="text-xs text-gray-500">GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-accent-600 dark:text-accent-400">2+</div>
                  <div className="text-xs text-gray-500">Years</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {['Python', 'React', 'TypeScript', 'Laravel'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}