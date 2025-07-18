import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { AnimatedSection } from '../components/AnimatedSection';
import { Briefcase, MapPin, CheckCircle, Calendar, Building, Users, Target, TrendingUp } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const skills_gained = {
    'Data Science Engineer': [
      'Machine Learning Model Development',
      'Data Preprocessing Pipelines',
      'Predictive Analytics',
      'Cross-functional Collaboration',
      'AI-driven Solutions',
      'Python Programming',
      'Statistical Analysis',
      'Data Visualization'
    ],
    'Data Engineering Intern': [
      'ETL Pipeline Development',
      'Database Query Optimization',
      'Cloud Data Platforms',
      'Large-scale Data Processing',
      'Data Architecture',
      'Performance Tuning',
      'Data Quality Assurance',
      'Technical Documentation'
    ]
  };

  const impact_metrics = [
    { label: 'Projects Completed', value: '15+', icon: Target },
    { label: 'Team Collaborations', value: '5+', icon: Users },
    { label: 'Technologies Mastered', value: '8+', icon: TrendingUp },
    { label: 'Months of Experience', value: '18+', icon: Calendar }
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
                Professional Experience
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A detailed overview of my professional journey, internships, and the valuable experience 
                gained in data science, engineering, and technology innovation.
              </motion.p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Professional Impact
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impact_metrics.map((metric, index) => (
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
                    <metric.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {metric.value}
                  </motion.div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Detailed Experience
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-12">
            {experience.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.3}>
                <motion.div
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div className="flex items-center mb-4 md:mb-0">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-6"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Briefcase className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                            <Building className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center mb-2">
                          <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300 font-mono">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold font-display text-gray-800 dark:text-white mb-4">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Gained */}
                    {skills_gained[exp.title] && (
                      <div>
                        <h4 className="text-lg font-semibold font-display text-gray-800 dark:text-white mb-4">
                          Skills & Technologies
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {skills_gained[exp.title].map((skill, i) => (
                            <motion.div
                              key={i}
                              className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-primary-700 dark:text-primary-300 text-center border border-primary-100 dark:border-gray-600"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Career Growth & Learning
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6">
                    Professional Growth
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Evolved from intern to full-time data science engineer',
                      'Gained expertise in machine learning and AI applications',
                      'Developed strong collaboration and communication skills',
                      'Built proficiency in cloud platforms and modern tools'
                    ].map((growth, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{growth}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-gradient-to-br from-accent-50 to-warning-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-accent-100 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6">
                    Future Aspirations
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Lead innovative AI/ML projects with global impact',
                      'Mentor junior developers and data scientists',
                      'Contribute to open-source machine learning projects',
                      'Pursue advanced certifications in emerging technologies'
                    ].map((aspiration, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{aspiration}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};