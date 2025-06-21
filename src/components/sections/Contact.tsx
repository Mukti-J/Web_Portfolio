import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Instagram } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Check for common email providers that work better with EmailJS
    const emailDomain = formData.email.split('@')[1]?.toLowerCase();
    const reliableProviders = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'student.uksw.edu'];
    const isReliableProvider = reliableProviders.includes(emailDomain);
    
    if (!isReliableProvider) {
      const proceed = confirm(
        `Your email provider (${emailDomain}) might have delivery restrictions. ` +
        'For better results, consider using Gmail, Outlook, or Yahoo. Continue anyway?'
      );
      if (!proceed) {
        setIsSubmitting(false);
        return;
      }
    }
    
      try {
      // Debug: Check environment variables
      console.log('Environment Variables Check:');
      console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID ? '✓ Set' : '✗ Missing');
      console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? '✓ Set' : '✗ Missing');
      console.log('Auto-reply Template ID:', import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID ? '✓ Set' : '✗ Missing');
      console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? '✓ Set' : '✗ Missing');

      // Check if email is likely to have delivery issues
      const isExternalEmail = !formData.email.includes('672023266@student.uksw.edu') && 
                              !formData.email.includes('muktij7vx@gmail.com'); // Your registered emails
      
      if (isExternalEmail) {
        console.log('⚠️ Sending to external email - may have delivery restrictions on free EmailJS plan');
      }

      // Template parameters for main email (to you)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: '672023266@student.uksw.edu' // Your email
      };

      console.log('Sending main email with params:', templateParams);

      // Send main email to you
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      console.log('Main email sent successfully');      // Send auto-reply to user
      const autoReplyParams = {
        from_name: formData.name,
        to_email: formData.email,
        subject: formData.subject,
        original_message: formData.message
      };

      console.log('Sending auto-reply with params:', autoReplyParams);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
        autoReplyParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      console.log('Auto-reply sent successfully');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);    } catch (error: unknown) {
      console.error('EmailJS Error Details:', error);
      
      // Better error handling for EmailJS
      if (error && typeof error === 'object' && 'status' in error) {
        const emailError = error as { status: number; text: string };
        console.error('Error status:', emailError.status);
        console.error('Error text:', emailError.text);
        
        // Specific error messages based on status
        let userMessage = 'Failed to send message. ';        switch (emailError.status) {
          case 400:
            if (emailError.text.includes('Public Key')) {
              userMessage += 'Configuration error: Invalid Public Key. Please check EmailJS setup.';
            } else if (emailError.text.includes('Template')) {
              userMessage += 'Template error: Please check EmailJS template configuration.';
            } else if (emailError.text.includes('blocked') || emailError.text.includes('rejected')) {
              userMessage += 'Email was rejected by the recipient\'s email provider. This often happens with free EmailJS plans when sending to external emails. Try using a different email address or upgrade your EmailJS plan.';
            } else {
              userMessage += 'Bad request: ' + emailError.text;
            }
            break;
          case 401:
            userMessage += 'Authentication failed. Please check your EmailJS credentials.';
            break;
          case 403:
            userMessage += 'Access forbidden. This might be due to EmailJS plan limitations or the recipient email being blocked.';
            break;
          case 404:
            userMessage += 'Service or template not found. Please check EmailJS configuration.';
            break;
          case 422:
            userMessage += 'Email validation failed. The recipient email might be invalid or blocked by EmailJS.';
            break;
          default:
            userMessage += emailError.text || 'Unknown error occurred.';
        }
        alert(userMessage);
      } else {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error message:', errorMessage);
        alert(`Failed to send message: ${errorMessage}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '672023266@student.uksw.edu',
      href: 'mailto:672023266@student.uksw.edu',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 857-3834-4756',
      href: 'https://wa.me/085738344756',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Universitas Kristen Satya Wacana, Salatiga, Indonesia',
      href: 'https://maps.google.com/?q=Universitas+Kristen+Satya+Wacana,+Salatiga,+Indonesia',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Mukti-J',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muktijaenal/',


      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/mukti.xj7/',
      color: 'hover:text-blue-400'
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
    <section className="py-20 px-4 bg-white dark:bg-gray-900" id="contact">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities, collaborations, and conversations about technology. 
            Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card glass className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200">
                    Thank you! Your message has been sent successfully.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type='submit'
                  size="lg"
                  icon={Send}
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card glass className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I typically respond within 24-48 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map(info => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} p-3 shadow-lg group-hover:shadow-xl transition-shadow`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <info.icon className="w-full h-full text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {info.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            <Card glass className="p-8 text-center">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Follow me on social media
              </h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </Card>

            <Card glass className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    Available for opportunities
                  </h5>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Available
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}