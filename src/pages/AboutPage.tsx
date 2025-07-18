import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Brain, Target, Users, Lightbulb, Zap } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export const AboutPage: React.FC = () => {
  const highlights = [
    { icon: GraduationCap, title: 'Academic Excellence', value: '8.5 CGPA', description: 'Consistent high performance in Computer Science Engineering' },
    { icon: Award, title: 'Certified Professional', value: '5+ Certifications', description: 'Industry-recognized certifications from AWS, Azure, Oracle, and more' },
    { icon: Code, title: 'Technical Expertise', value: '10+ Technologies', description: 'Proficient in multiple programming languages and frameworks' },
    { icon: Brain, title: 'AI/ML Focus', value: '2+ Years', description: 'Specialized experience in machine learning and data science' },
  ];

  const values = [
    { icon: Target, title: 'Innovation', description: 'Constantly exploring new technologies and methodologies to solve complex problems' },
    { icon: Users, title: 'Collaboration', description: 'Strong believer in teamwork and knowledge sharing for collective growth' },
    { icon: Lightbulb, title: 'Continuous Learning', description: 'Committed to staying updated with the latest industry trends and best practices' },
    { icon: Zap, title: 'Excellence', description: 'Dedicated to delivering high-quality solutions that exceed expectations' },
  ];

  const journey = [
    {
      year: '2022',
      title: 'Started B.Tech Journey',
      description: 'Began Computer Science Engineering at KLEF University with a passion for technology and innovation.'
    },
    {
      year: '2023',
      title: 'First Internship',
      description: 'Completed Data Engineering Internship at AICTE-Edu Skills, gaining hands-on experience with data pipelines.'
    },
    {
      year: '2024',
      title: 'Professional Growth',
      description: 'Joined Slash Mark IT Startup as Data Science Engineer, working on cutting-edge AI/ML projects.'
    },
    {
      year: 'Present',
      title: 'Continuous Innovation',
      description: 'Pursuing advanced certifications while contributing to innovative data science solutions.'
    },
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
                About Me
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm a passionate Computer Science Engineering student at KLEF University, dedicated to transforming 
                complex data into meaningful insights through innovative AI and machine learning solutions.
              </motion.p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Key Highlights
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl text-center border border-primary-100 dark:border-gray-600"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                    y: -10
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold font-display text-gray-800 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {highlight.value}
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
                My Story
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <AnimatedSection>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white">
                    The Journey Begins
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    My fascination with technology began early, but it was during my intermediate studies at 
                    Prathibha Junior College where I truly discovered my passion for computer science. 
                    Achieving 95% in my intermediate studies, I knew I wanted to pursue a career that 
                    would allow me to solve complex problems using technology.
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    At KLEF University, I've maintained a strong academic record with an 8.5 CGPA while 
                    actively engaging in practical projects and internships. My focus has always been on 
                    understanding not just the 'how' but the 'why' behind every technology I learn.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-80 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-2xl flex items-center justify-center">
                    <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl">
                      <div className="text-center">
                        <Code className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          Data Science
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">Engineering Excellence</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>

            <AnimatedSection>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6">
                  Current Focus & Future Goals
                </h3>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Currently, I'm working as a Data Science Engineer at Slash Mark IT Startup, where I'm 
                    developing machine learning models for predictive analytics and implementing data 
                    preprocessing pipelines. This role has given me invaluable experience in real-world 
                    applications of AI and ML technologies.
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    My expertise spans across multiple domains including cloud computing (AWS, Azure, Oracle Cloud), 
                    full-stack development (React.js, Spring Boot), and advanced data science tools 
                    (TensorFlow, Scikit-learn). I'm particularly passionate about the intersection of 
                    cloud technologies and machine learning.
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Looking ahead, I aim to contribute to innovative AI solutions that can make a meaningful 
                    impact on society while continuing to grow as a technology leader in the data science domain.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              My Core Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-primary-100 dark:border-gray-600"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
                    y: -5
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-xl font-semibold font-display text-gray-800 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              My Journey Timeline
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-secondary-600 h-full"></div>

              {journey.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <div className={`relative mb-12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      className={`inline-block w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold font-display text-gray-800 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 top-6"
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
    </div>
  );
};