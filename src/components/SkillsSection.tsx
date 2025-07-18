import React from 'react';
import { skills } from '../data/portfolio';
import { AnimatedSection } from './AnimatedSection';

export const SkillsSection: React.FC = () => {
  const categories = {
    programming: 'Programming Languages',
    ml: 'ML/DL Tools',
    database: 'Databases',
    web: 'Web Development',
    cloud: 'Cloud Platforms',
    tools: 'Development Tools'
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Skills & Technologies
          </h2>
        </AnimatedSection>

        {Object.entries(categories).map(([category, title]) => (
          <div key={category} className="mb-12">
            <AnimatedSection animation="slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300 font-mono">
                {title}
              </h3>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <AnimatedSection 
                    key={skill.name} 
                    animation="zoom"
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2 font-mono">
                        {skill.name}
                      </h4>
                      {skill.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};