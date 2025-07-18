import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { AnimatedSection } from '../components/AnimatedSection';
import { GraduationCap, Calendar, Award, BookOpen, Trophy, Target } from 'lucide-react';

export const EducationPage: React.FC = () => {
  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintained consistent high performance throughout academic journey',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Technical Focus',
      description: 'Specialized in Computer Science with emphasis on AI/ML and Data Science',
      icon: BookOpen,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Practical Application',
      description: 'Applied theoretical knowledge through projects and internships',
      icon: Target,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const subjects = {
    'B.Tech CSE': [
      'Data Structures and Algorithms',
      'Machine Learning',
      'Database Management Systems',
      'Computer Networks',
      'Software Engineering',
      'Artificial Intelligence',
      'Cloud Computing',
      'Web Technologies',
      'Operating Systems',
      'Computer Graphics'
    ],
    'Intermediate': [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science Fundamentals'
    ]
  };

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
                Educational Journey
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A comprehensive overview of my academic achievements, coursework, and the foundation 
                that shaped my expertise in computer science and technology.
              </motion.p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Achievements Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Academic Achievements
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    y: -10
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold font-display text-gray-800 dark:text-white mb-4">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Academic Timeline
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-secondary-600 h-full"></div>

              {education.map((edu, index) => (
                <AnimatedSection key={index} delay={index * 0.3}>
                  <div className={`relative mb-16 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      className={`inline-block w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <motion.div
                            className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <GraduationCap className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-semibold font-display text-gray-800 dark:text-white">
                              {edu.degree}
                            </h3>
                            <p className="text-primary-600 dark:text-primary-400 font-medium">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                              {edu.period}
                            </span>
                          </div>
                          
                          <motion.div 
                            className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 px-4 py-2 rounded-full"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-center">
                              <Award className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
                              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                                {edu.score} {edu.type === 'cgpa' ? 'CGPA' : ''}
                              </span>
                            </div>
                          </motion.div>
                        </div>

                        {/* Subjects for this education level */}
                        {subjects[edu.degree.split(',')[0]] && (
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                              Key Subjects
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {subjects[edu.degree.split(',')[0]].slice(0, 6).map((subject, i) => (
                                <motion.div
                                  key={i}
                                  className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-lg"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {subject}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-gray-800 top-8 shadow-lg"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Academic Performance */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Academic Performance Details
            </h2>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Current Studies */}
              <AnimatedSection>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6">
                    Current Studies - B.Tech CSE
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Current CGPA</span>
                      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">9.2/10</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2022-2026</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Duration</div>
                      </div>
                      <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
                        <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">KLEF</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">University</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Previous Education */}
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-accent-50 to-warning-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-accent-100 dark:border-gray-600">
                    <h4 className="text-xl font-semibold font-display text-gray-800 dark:text-white mb-4">
                      Intermediate Education
                    </h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Percentage</span>
                      <span className="text-xl font-bold text-accent-600 dark:text-accent-400">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-accent-500 to-warning-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%' }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      Prathibha Junior College (2020-2022)
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-success-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-success-100 dark:border-gray-600">
                    <h4 className="text-xl font-semibold font-display text-gray-800 dark:text-white mb-4">
                      Secondary Education
                    </h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300">Percentage</span>
                      <span className="text-xl font-bold text-success-600 dark:text-success-400">89%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-success-500 to-teal-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      KKR Gowtham High School (2017-2020)
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};