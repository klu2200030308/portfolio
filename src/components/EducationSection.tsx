import React from 'react';
import { education } from '../data/portfolio';
import { AnimatedSection } from './AnimatedSection';
import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Education Timeline
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-blue-600 h-full"></div>

            {education.map((edu, index) => (
              <AnimatedSection 
                key={index} 
                animation="slide-up"
                className="relative mb-12"
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {edu.degree}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {edu.institution}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {edu.period}
                          </span>
                        </div>
                        
                        <div className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {edu.score} {edu.type === 'cgpa' ? 'CGPA' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 top-6"></div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};