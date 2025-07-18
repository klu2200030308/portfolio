import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  FileText, 
  ArrowRight, 
  Code, 
  Award, 
  Briefcase,
  GraduationCap,
  User,
  FolderOpen
} from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export const HomePage: React.FC = () => {
  const quickLinks = [
    { to: '/about', icon: User, title: 'About Me', description: 'Learn about my background and journey' },
    { to: '/skills', icon: Code, title: 'Skills', description: 'Explore my technical expertise' },
    { to: '/experience', icon: Briefcase, title: 'Experience', description: 'View my professional experience' },
    { to: '/projects', icon: FolderOpen, title: 'Projects', description: 'Check out my latest work' },
    { to: '/certifications', icon: Award, title: 'Certifications', description: 'See my professional certifications' },
    { to: '/education', icon: GraduationCap, title: 'Education', description: 'My academic background' },
  ];

  const resume = "/resume.pdf"

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-secondary-800 to-accent-600 dark:from-gray-900 dark:via-primary-900 dark:to-accent-800 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full mix-blend-multiply filter blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-secondary-500/30 to-success-500/30 rounded-full mix-blend-multiply filter blur-xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 p-1"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-2xl">
                <span className="text-5xl font-bold font-display bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  DC
                </span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-display mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
                Desala Mourya Phani Chandra
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-6 text-primary-100 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Data Science Engineer | Cloud Certified Developer | Machine Learning Enthusiast
            </motion.p>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <p className="text-lg font-mono text-accent-200">
                "Transforming Data into Actionable Insights"
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Link to="/contact">
                <motion.button 
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-full font-semibold shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="inline-block w-5 h-5 mr-2" />
                  Hire Me
                </motion.button>
              </Link>
              
              <motion.button 
                className="bg-transparent border-2 border-white/50 hover:bg-white hover:text-primary-600 text-white px-8 py-4 rounded-full font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(resume, "_blank")}
              >
                <FileText className="inline-block w-5 h-5 mr-2" />
                View Resume
              </motion.button> 
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Explore My Portfolio
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => (
              <AnimatedSection key={link.to} delay={index * 0.1}>
                <Link to={link.to}>
                  <motion.div
                    className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 group"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <link.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary-500" />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-semibold font-display text-gray-800 dark:text-white mb-2">
                      {link.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      {link.description}
                    </p>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '9.2', label: 'CGPA', suffix: '/10' },
              { number: '5+', label: 'Certifications', suffix: '' },
              { number: '2+', label: 'Years Experience', suffix: '' },
              { number: '10+', label: 'Technologies', suffix: '' },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold font-display mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {stat.number}<span className="text-2xl">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-primary-100 font-medium">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};