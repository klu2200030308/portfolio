import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolio';
import { AnimatedSection } from '../components/AnimatedSection';
import { Code, Database, Cloud, Globe, Wrench, Brain, Filter, Star } from 'lucide-react';

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = {
    all: { name: 'All Skills', icon: Star, color: 'from-gray-500 to-gray-600' },
    programming: { name: 'Programming', icon: Code, color: 'from-blue-500 to-blue-600' },
    ml: { name: 'ML/AI', icon: Brain, color: 'from-purple-500 to-purple-600' },
    database: { name: 'Databases', icon: Database, color: 'from-green-500 to-green-600' },
    web: { name: 'Web Dev', icon: Globe, color: 'from-orange-500 to-orange-600' },
    cloud: { name: 'Cloud', icon: Cloud, color: 'from-cyan-500 to-cyan-600' },
    tools: { name: 'Tools', icon: Wrench, color: 'from-red-500 to-red-600' }
  };

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const skillLevels = {
    'Python': 90,
    'Java': 85,
    'C': 80,
    'TensorFlow': 85,
    'Scikit-learn': 88,
    'MySQL': 82,
    'PostgreSQL': 78,
    'React.js': 85,
    'Spring Boot': 80,
    'AWS': 88,
    'Azure': 85,
    'Oracle Cloud': 75,
    'Git': 90,
    'GitHub': 88,
    'VS Code': 95
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
                Skills & Technologies
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A comprehensive overview of my technical expertise across various domains of software development, 
                data science, and cloud technologies.
              </motion.p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center justify-center mb-8">
              <Filter className="w-6 h-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold font-display text-gray-800 dark:text-white">
                Filter by Category
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categories).map(([key, category], index) => (
              <AnimatedSection key={key} delay={index * 0.1}>
                <motion.button
                  onClick={() => setSelectedCategory(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {key === 'all' ? skills.length : skills.filter(s => s.category === key).length}
                  </span>
                </motion.button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      
                      <h3 className="text-xl font-semibold font-mono text-gray-800 dark:text-white mb-2">
                        {skill.name}
                      </h3>
                      
                      {skill.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {skill.description}
                        </p>
                      )}

                      {/* Skill Level Bar */}
                      {skillLevels[skill.name] && (
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                              Proficiency
                            </span>
                            <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
                              {skillLevels[skill.name]}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ 
                                width: hoveredSkill === skill.name ? `${skillLevels[skill.name]}%` : '0%'
                              }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Category Badge */}
                      <motion.div
                        className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categories[skill.category].color} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {categories[skill.category].name}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Technical Proficiency Overview
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6">
                    Core Strengths
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Full-stack web development with modern frameworks',
                      'Machine learning and deep learning implementations',
                      'Cloud architecture and deployment strategies',
                      'Database design and optimization',
                      'Version control and collaborative development'
                    ].map((strength, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-gradient-to-br from-accent-50 to-warning-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-accent-100 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6">
                    Learning Focus
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Advanced AI/ML algorithms and techniques',
                      'Microservices architecture patterns',
                      'DevOps and CI/CD pipeline optimization',
                      'Big data processing and analytics',
                      'Emerging cloud-native technologies'
                    ].map((focus, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{focus}</span>
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