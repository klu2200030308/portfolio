import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { swotAnalysis } from '../data/portfolio';
import { AnimatedSection } from '../components/AnimatedSection';
import { TrendingUp, AlertTriangle, Target, Shield, BarChart3, Eye, ChevronDown, ChevronUp } from 'lucide-react';

export const SWOTPage: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const swotData = [
    {
      key: 'strengths',
      title: 'Strengths',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400',
      borderColor: 'border-green-200 dark:border-green-700',
      items: swotAnalysis.strengths,
      description: 'Internal positive factors that give me competitive advantages'
    },
    {
      key: 'weaknesses',
      title: 'Weaknesses',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      textColor: 'text-red-600 dark:text-red-400',
      borderColor: 'border-red-200 dark:border-red-700',
      items: swotAnalysis.weaknesses,
      description: 'Internal factors that need improvement and development'
    },
    {
      key: 'opportunities',
      title: 'Opportunities',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-200 dark:border-blue-700',
      items: swotAnalysis.opportunities,
      description: 'External factors that can be leveraged for growth'
    },
    {
      key: 'threats',
      title: 'Threats',
      icon: Target,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      borderColor: 'border-yellow-200 dark:border-yellow-700',
      items: swotAnalysis.threats,
      description: 'External challenges that require strategic planning'
    }
  ];

  const strategicInsights = [
    {
      title: 'Leverage Strengths for Opportunities',
      description: 'Use strong technical foundation and certifications to capitalize on growing AI/ML market demand',
      strategy: 'SO Strategy',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Address Weaknesses through Opportunities',
      description: 'Gain industry experience through remote work opportunities and expand project portfolio',
      strategy: 'WO Strategy',
      color: 'from-red-500 to-blue-500'
    },
    {
      title: 'Use Strengths to Counter Threats',
      description: 'Leverage comprehensive certifications and continuous learning to stay competitive',
      strategy: 'ST Strategy',
      color: 'from-green-500 to-yellow-500'
    },
    {
      title: 'Minimize Weaknesses and Threats',
      description: 'Focus on building enterprise experience while staying updated with technology trends',
      strategy: 'WT Strategy',
      color: 'from-red-500 to-yellow-500'
    }
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
                SWOT Analysis
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A comprehensive strategic analysis of my professional profile, identifying strengths, 
                weaknesses, opportunities, and threats to guide career development and decision-making.
              </motion.p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
                <BarChart3 className="w-5 h-5" />
                <span className="text-sm font-medium">Strategic Professional Assessment</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SWOT Matrix */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              SWOT Matrix Analysis
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {swotData.map((category, index) => (
              <AnimatedSection key={category.key} delay={index * 0.2}>
                <motion.div
                  className={`${category.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 ${category.borderColor} cursor-pointer`}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setExpandedCard(expandedCard === category.key ? null : category.key)}
                >
                  <div className="text-center mb-6">
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className={`text-2xl font-bold font-display ${category.textColor} mb-2`}>
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {category.items.slice(0, expandedCard === category.key ? undefined : 2).map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${category.color}`} />
                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="flex items-center justify-center mt-6 text-gray-500 dark:text-gray-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    {expandedCard === category.key ? (
                      <>
                        <ChevronUp className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Show Less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">
                          Show All ({category.items.length} items)
                        </span>
                      </>
                    )}
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Insights */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Strategic Insights & Action Plans
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {strategicInsights.map((insight, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${insight.color} text-white text-sm font-semibold`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {insight.strategy}
                    </motion.div>
                    <Eye className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold font-display text-gray-800 dark:text-white mb-4">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {insight.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Detailed Professional Analysis
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Internal Factors */}
              <AnimatedSection>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-primary-100 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary-600" />
                    Internal Factors
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                        Core Strengths
                      </h4>
                      <ul className="space-y-2">
                        {swotAnalysis.strengths.slice(0, 2).map((strength, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                        Areas for Improvement
                      </h4>
                      <ul className="space-y-2">
                        {swotAnalysis.weaknesses.slice(0, 2).map((weakness, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* External Factors */}
              <AnimatedSection delay={0.2}>
                <div className="bg-gradient-to-br from-accent-50 to-warning-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-accent-100 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-accent-600" />
                    External Factors
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        Market Opportunities
                      </h4>
                      <ul className="space-y-2">
                        {swotAnalysis.opportunities.slice(0, 2).map((opportunity, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-3">
                        Industry Challenges
                      </h4>
                      <ul className="space-y-2">
                        {swotAnalysis.threats.slice(0, 2).map((threat, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {threat}
                          </li>
                        ))}
                      </ul>
                    </div>
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