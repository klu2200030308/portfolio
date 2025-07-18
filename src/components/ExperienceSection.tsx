import React from 'react';
import { experience } from '../data/portfolio';
import { AnimatedSection } from './AnimatedSection';
import { Briefcase, MapPin, CheckCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Experience & Internships
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <AnimatedSection 
              key={index} 
              animation="slide-up"
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {exp.type}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 font-mono">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="ml-16">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};