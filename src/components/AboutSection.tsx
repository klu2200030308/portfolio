import React from 'react';
import { GraduationCap, Award, Code, Brain } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Computer Science Engineering student at KLEF University with a strong foundation in 
                data science, machine learning, and cloud technologies. Currently pursuing my B.Tech degree with a 
                CGPA of 8.5, I'm dedicated to transforming complex data into meaningful insights.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise spans across multiple programming languages, cloud platforms, and cutting-edge 
                technologies. I'm particularly enthusiastic about AI/ML applications and have gained practical 
                experience through internships and certifications from industry leaders.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">CGPA: 8.5/10</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">5+ Certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">ML Enthusiast</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Data Science</h3>
                    <p className="text-gray-600 dark:text-gray-300">Engineering Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};