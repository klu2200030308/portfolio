import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { AnimatedSection } from '../components/AnimatedSection';
import { Award, ExternalLink, Calendar, CheckCircle, Star, Filter } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>('all');

  const providers = ['all', 'AWS', 'Microsoft', 'Oracle', 'Red Hat', 'Salesforce'];

  const certificationDetails = {
    'AWS Certified Cloud Practitioner': {
      date: '2024',
      level: 'Foundational',
      skills: ['Cloud Computing Basics', 'AWS Services', 'Security', 'Pricing'],
      description: 'Validates overall understanding of AWS Cloud, services, and terminology.',
      color: 'from-orange-500 to-yellow-500',
      issuer: 'AWS',
      badge: '☁️',
      verificationUrl: 'https://aws.amazon.com/certification/'
    },
    'Oracle Certified Professional Cloud Infrastructure Generative AI': {
      date: '2024',
      level: 'Professional',
      skills: ['Generative AI', 'Oracle Cloud', 'Machine Learning', 'AI Services'],
      description: 'Demonstrates expertise in Oracle Cloud AI and generative AI technologies.',
      color: 'from-red-500 to-pink-500',
      issuer: 'Oracle',
      badge: '🤖',
      verificationUrl: 'https://education.oracle.com/'
    },
    'Red Hat Certified Enterprise Application Developer': {
      date: '2024',
      level: 'Professional',
      skills: ['Java EE', 'Enterprise Development', 'Red Hat JBoss', 'Application Architecture'],
      description: 'Validates skills in developing enterprise applications using Red Hat technologies.',
      color: 'from-red-600 to-red-700',
      issuer: 'Red Hat',
      badge: '🧢',
      verificationUrl: 'https://www.redhat.com/en/services/certification'
    },
    'Salesforce Certified AI Associate': {
      date: '2024',
      level: 'Associate',
      skills: ['Salesforce AI', 'Einstein Analytics', 'CRM AI', 'Data Analysis'],
      description: 'Demonstrates understanding of AI capabilities within the Salesforce platform.',
      color: 'from-blue-500 to-cyan-500',
      issuer: 'Salesforce',
      badge: '💼',
      verificationUrl: 'https://trailhead.salesforce.com/'
    },
    'Microsoft Certified Azure Data Fundamentals': {
      date: '2025',
      level: 'Fundamentals',
      skills: ['Azure Data Services', 'Data Analytics', 'Data Storage', 'Data Processing'],
      description: 'Validates foundational knowledge of core data concepts and Azure data services.',
      color: 'from-blue-600 to-indigo-600',
      issuer: 'Microsoft',
      badge: '🔷',
      verificationUrl: 'https://learn.microsoft.com/en-us/certifications/'
    }
  };
  
  // 🔧 Now generate a consistent `certifications` array
  const certifications = Object.entries(certificationDetails).map(([name, details]) => ({
    name,
    issuer: details.issuer,
    badge: details.badge,
    verificationUrl: details.verificationUrl
  }));
  
  // 🧠 Filter by selected provider
  const filteredCertifications = selectedProvider === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.issuer === selectedProvider);
  
  // 📊 Stats
  const stats = [
    { label: 'Total Certifications', value: certifications.length, icon: Award },
    { label: 'Cloud Platforms', value: '3', icon: CheckCircle },
    { label: 'Professional Level', value: '2', icon: Star },
    { label: 'Latest Year', value: '2025', icon: Calendar }
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
                Professional Certifications
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Industry-recognized certifications that validate my expertise in cloud computing, 
                artificial intelligence, and enterprise application development.
              </motion.p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-primary-100 dark:border-gray-600"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                    y: -10
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center justify-center mb-8">
              <Filter className="w-6 h-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-semibold font-display text-gray-800 dark:text-white">
                Filter by Provider
              </h2>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4">
            {providers.map((provider, index) => (
              <AnimatedSection key={provider} delay={index * 0.1}>
                <motion.button
                  onClick={() => setSelectedProvider(provider)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedProvider === provider
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {provider === 'all' ? 'All Providers' : provider}
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                    {provider === 'all' 
                      ? certifications.length 
                      : certifications.filter(c => c.issuer.includes(provider)).length
                    }
                  </span>
                </motion.button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProvider}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {filteredCertifications.map((cert, index) => {
                const details = certificationDetails[cert.name];
                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <motion.div
                      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-600 h-full"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Header */}
                      <div className="text-center mb-6">
                        <motion.div
                          className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${details?.color || 'from-primary-500 to-secondary-500'} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-3xl">{cert.badge}</span>
                        </motion.div>
                        
                        <h3 className="text-lg font-semibold font-display text-gray-800 dark:text-white mb-2 leading-tight">
                          {cert.name}
                        </h3>
                        
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {cert.issuer}
                        </p>

                        {details && (
                          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {details.date}
                            </span>
                            <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full text-xs">
                              {details.level}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      {details?.description && (
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          {details.description}
                        </p>
                      )}

                      {/* Skills */}
                      {details?.skills && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">
                            Key Skills
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {details.skills.map((skill, i) => (
                              <motion.div
                                key={i}
                                className="bg-white dark:bg-gray-800 px-2 py-1 rounded-lg text-xs text-gray-600 dark:text-gray-300 text-center border border-gray-200 dark:border-gray-600"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {skill}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success-500" />
                          <span className="text-sm text-success-600 dark:text-success-400 font-medium">
                            Verified
                          </span>
                        </div>
                        
                        {cert.verificationUrl && (
                          <motion.button
                            className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Verify</span>
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Certification Journey */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Certification Journey
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6">
                    Why Certifications Matter
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Validate technical expertise with industry standards',
                      'Stay updated with latest technologies and best practices',
                      'Demonstrate commitment to professional development',
                      'Enhance credibility with employers and clients'
                    ].map((reason, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{reason}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-6">
                    Future Certifications
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'AWS Solutions Architect Professional',
                      'Google Cloud Professional Data Engineer',
                      'Microsoft Azure AI Engineer Associate',
                      'Kubernetes Certified Application Developer'
                    ].map((future, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{future}</span>
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