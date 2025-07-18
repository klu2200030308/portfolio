import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { AnimatedSection } from '../components/AnimatedSection';
import { Github, ExternalLink, Code, Calendar, Users, Star, Filter } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('all');

  // Extended project data with more details
  const extendedProjects = [
    {
      ...projects[0],
      duration: '3 months',
      teamSize: '4 members',
      status: 'Completed',
      features: [
        'User Authentication & Authorization',
        'Food Distribution Management',
        'Real-time Inventory Tracking',
        'Admin Dashboard',
        'Responsive Design',
        'RESTful API Integration'
      ],
      challenges: [
        'Implementing secure authentication system',
        'Optimizing database queries for large datasets',
        'Creating responsive UI for multiple devices',
        'Integrating real-time updates'
      ],
      learnings: [
        'Advanced Spring Boot concepts',
        'React state management',
        'Database optimization techniques',
        'Full-stack application architecture'
      ]
    },
    // Additional projects can be added here
    {
      title: 'Machine Learning Price Predictor',
      description: 'A comprehensive ML model for predicting product prices using various algorithms and data preprocessing techniques.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
      githubUrl: 'https://github.com/mourya-phani/ml-price-predictor',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2 months',
      teamSize: '2 members',
      status: 'In Progress',
      features: [
        'Data preprocessing pipeline',
        'Multiple ML algorithms comparison',
        'Feature engineering',
        'Model evaluation metrics',
        'Interactive visualization',
        'API endpoint for predictions'
      ],
      challenges: [
        'Handling missing and inconsistent data',
        'Feature selection and engineering',
        'Model hyperparameter tuning',
        'Deployment optimization'
      ],
      learnings: [
        'Advanced machine learning techniques',
        'Data preprocessing best practices',
        'Model evaluation and validation',
        'MLOps fundamentals'
      ]
    },
    {
      title: 'Cloud Data Pipeline',
      description: 'Scalable data processing pipeline built on AWS for handling large-scale data analytics and reporting.',
      technologies: ['AWS', 'Python', 'Apache Airflow', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/mourya-phani/cloud-data-pipeline',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4 months',
      teamSize: '3 members',
      status: 'Completed',
      features: [
        'Automated data ingestion',
        'ETL pipeline orchestration',
        'Data quality monitoring',
        'Scalable cloud architecture',
        'Real-time processing',
        'Comprehensive logging'
      ],
      challenges: [
        'Designing scalable architecture',
        'Implementing error handling',
        'Optimizing cloud costs',
        'Ensuring data quality'
      ],
      learnings: [
        'Cloud architecture patterns',
        'Data pipeline orchestration',
        'AWS services integration',
        'DevOps practices'
      ]
    }
  ];

  const allTechnologies = Array.from(
    new Set(extendedProjects.flatMap(project => project.technologies))
  );

  const filteredProjects = selectedTech === 'all' 
    ? extendedProjects 
    : extendedProjects.filter(project => project.technologies.includes(selectedTech));

  const stats = [
    { label: 'Total Projects', value: extendedProjects.length, icon: Code },
    { label: 'Technologies Used', value: allTechnologies.length, icon: Star },
    { label: 'Completed Projects', value: extendedProjects.filter(p => p.status === 'Completed').length, icon: Users },
    { label: 'GitHub Repositories', value: extendedProjects.length, icon: Github }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-primary-900/20 dark:to-accent-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Project Portfolio
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A showcase of my technical projects demonstrating expertise in full-stack development, 
                machine learning, and cloud technologies with real-world applications.
              </motion.p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-primary-100 dark:border-gray-600"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                    y: -10
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center justify-center mb-8">
              <Filter className="w-6 h-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold font-display text-gray-800 dark:text-white">
                Filter by Technology
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3">
            <AnimatedSection>
              <motion.button
                onClick={() => setSelectedTech('all')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedTech === 'all'
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Projects
              </motion.button>
            </AnimatedSection>
            
            {allTechnologies.map((tech, index) => (
              <AnimatedSection key={tech} delay={index * 0.05}>
                <motion.button
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedTech === tech
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12 max-w-6xl mx-auto"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group"
                >
                  <motion.div
                    className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-600 overflow-hidden"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                      {/* Project Image */}
                      <div className="relative overflow-hidden rounded-xl">
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          whileHover={{ scale: 1.1 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Status Badge */}
                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-success-500 text-white' 
                            : 'bg-warning-500 text-white'
                        }`}>
                          {project.status}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold font-display text-gray-800 dark:text-white mb-3">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Project Meta */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            {project.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Users className="w-4 h-4 mr-2" />
                            {project.teamSize}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <motion.span 
                                key={i} 
                                className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        {project.features && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">
                              Key Features
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {project.features.slice(0, 4).map((feature, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                                  {feature}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex space-x-4 pt-4">
                          <motion.a 
                            href={project.githubUrl}
                            className="flex items-center space-x-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4" />
                            <span>View Code</span>
                          </motion.a>
                          
                          {project.liveUrl && (
                            <motion.a 
                              href={project.liveUrl}
                              className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Live Demo</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <motion.div
                      className="border-t border-gray-200 dark:border-gray-600 p-8 bg-white dark:bg-gray-800"
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Challenges */}
                        {project.challenges && (
                          <div>
                            <h4 className="text-lg font-semibold font-display text-gray-800 dark:text-white mb-4">
                              Technical Challenges
                            </h4>
                            <ul className="space-y-2">
                              {project.challenges.map((challenge, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <div className="w-2 h-2 bg-warning-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                                  {challenge}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Learnings */}
                        {project.learnings && (
                          <div>
                            <h4 className="text-lg font-semibold font-display text-gray-800 dark:text-white mb-4">
                              Key Learnings
                            </h4>
                            <ul className="space-y-2">
                              {project.learnings.map((learning, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                >
                                  <div className="w-2 h-2 bg-success-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                                  {learning}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};