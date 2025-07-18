import React, { useState } from 'react';
import { swotAnalysis } from '../data/portfolio';
import { AnimatedSection } from './AnimatedSection';
import { TrendingUp, AlertTriangle, Target, Shield } from 'lucide-react';

export const SWOTSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const swotData = [
    {
      key: 'strengths',
      title: 'Strengths',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400',
      items: swotAnalysis.strengths
    },
    {
      key: 'weaknesses',
      title: 'Weaknesses',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      textColor: 'text-red-600 dark:text-red-400',
      items: swotAnalysis.weaknesses
    },
    {
      key: 'opportunities',
      title: 'Opportunities',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400',
      items: swotAnalysis.opportunities
    },
    {
      key: 'threats',
      title: 'Threats',
      icon: Target,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      items: swotAnalysis.threats
    }
  ];

  return (
    <section id="swot" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            SWOT Analysis
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {swotData.map((category, index) => (
            <AnimatedSection 
              key={category.key} 
              animation="zoom"
              className="group"
            >
              <div 
                className={`${category.bgColor} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700`}
                onClick={() => setSelectedCategory(selectedCategory === category.key ? null : category.key)}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-xl font-semibold ${category.textColor} mb-4`}>
                    {category.title}
                  </h3>
                  
                  <div className={`transition-all duration-300 ${selectedCategory === category.key ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <ul className="space-y-2 text-left">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-current rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedCategory !== category.key && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Click to expand
                    </p>
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