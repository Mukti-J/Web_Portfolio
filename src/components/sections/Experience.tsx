import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Award } from 'lucide-react';
import { Card } from '../ui/Card';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: 'Member of Internal & External Division',
      company: 'Himpunan Mahasiswa Teknik Informatika (HMPTI)',
      location: 'Salatiga, Indonesia',
      duration: 'Jan 2025 - Present',
      type: 'Organizational',
      description: 'Actively involved in fostering relationships between students, faculty, and external parties. Responsible for managing communications and organizing events to enhance the student community experience.',
      achievements: [
        'Acted as a primary liaison between the student body and the faculty.',
        'Organized and promoted internal workshops and social events to boost member engagement.',
        'Managed official social media channels, increasing student reach by 30%.',
        'Established partnerships with other student organizations for collaborative events.'
      ],
      technologies: ['Communication', 'Social Media Management', 'Public Relations', 'Event Planning', 'Teamwork'],
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      title: 'Event Coordinator & ML Workshop Lead',
      company: 'Himpunan Mahasiswa Teknik Informatika (HMPTI)',
      location: 'Salatiga, Indonesia',
      duration: 'Apr 2025 - Jul 2025',
      type: 'Organizational',
      description: 'Co-led the planning and execution of a university-wide tech bootcamp focused on Machine Learning and Cyber Security, designed to bridge the gap between academic theory and practical industry skills for over 150 students.',
      achievements: [
        'Designed and delivered a comprehensive 4-hour Machine Learning workshop curriculum.',
        'Facilitated hands-on coding sessions on Python, Pandas, and Scikit-learn.',
        'Managed event logistics, including speaker coordination and participant registration.',
        'Collaborated with the Cyber Security division to ensure a seamless event experience.'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Event Management', 'Public Speaking', 'Team Leadership'],
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'Satya Wacana Christian University, Salatiga',
      location: 'Salatiga, Indonesia',
      duration: '2023 - 2025',
      gpa: '3.6/4.0',
      coursework: [
        'Data Structures & Algorithms',
        'Computer Systems',
        'Web Development',
        'Artificial Intelligence',
        'Machine Learning',
        'Database Systems',
        'Software Engineering',
        'Computer Networks',
        'Human-Computer Interaction',
        'Object-Oriented Programming'
      ],
      activities: [
        'Teaching Assistant for CS 61A',
        'Member of Computer Science Honor Society',
        'Volunteer tutor for underclassmen'
      ]
    }
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
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20" id="experience">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My journey through internships, projects, and academic achievements that have shaped my technical expertise.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Professional Experience
          </motion.h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  custom={index}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card glass hover className="relative">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-2">
                            <span className="font-medium text-primary-600 dark:text-primary-400">
                              {exp.company}
                            </span>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            exp.type === 'Internship' 
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                              : exp.type === 'Part-time'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : exp.type === 'Organizational'
                              ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h3>
          
          {education.map((edu) => (
            <Card key={edu.id} glass className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium text-primary-600 dark:text-primary-400">
                      {edu.school}
                    </span>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Relevant Coursework
                  </h5>
                  <ul className="space-y-2">
                    {edu.coursework.map((course, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Activities & Leadership
                  </h5>
                  <ul className="space-y-2">
                    {edu.activities.map((activity, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}