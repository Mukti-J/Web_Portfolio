import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Cloud, Smartphone, Brain } from 'lucide-react';
import { Card } from '../ui/Card';
import { SkillBar } from '../ui/SkillBar';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 75 },
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 92 },
        { name: 'Java', level: 80 },
        { name: 'Go', level: 70 },
      ]
    },
    {
      icon: Database,
      title: 'Database & Storage',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 78 },
        { name: 'Firebase', level: 88 },
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 82 },
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'React Native', level: 83 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS (Swift)', level: 68 },
        { name: 'Android', level: 72 },
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'TensorFlow', level: 78 },
        { name: 'PyTorch', level: 75 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'OpenAI API', level: 88 },
      ]
    },
  ];

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
    <section className="py-20 px-4 bg-white dark:bg-gray-900" id="skills">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across different domains of software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              custom={index}
            >
              <Card glass className="h-full">
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} p-3 mr-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-full h-full text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      delay={index * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div variants={itemVariants} className="mt-16">
          <Card glass className="text-center p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'GraphQL', 'WebSockets', 'Microservices', 'REST APIs', 
                'Git/GitHub', 'Agile/Scrum', 'Testing (Jest)', 'Webpack',
                'Linux/Unix', 'Nginx', 'Authentication', 'WebRTC'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}