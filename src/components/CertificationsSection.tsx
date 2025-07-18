import React from 'react';
import { certifications } from '../data/portfolio';
import { AnimatedSection } from './AnimatedSection';
import { Award, ExternalLink } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Certifications
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedSection 
              key={index} 
              animation="zoom"
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-200 dark:border-gray-600">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-2xl">{cert.badge}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Certified Professional
                    </span>
                  </div>
                  
                  {cert.verificationUrl && (
                    <button className="mt-4 flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Verify</span>
                    </button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};