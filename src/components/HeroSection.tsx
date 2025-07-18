import React from 'react';
import { Download, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-secondary-800 to-accent-600 dark:from-gray-900 dark:via-primary-900 dark:to-accent-800 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-secondary-500/30 to-success-500/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-warning-500/20 to-error-500/20 rounded-full mix-blend-multiply filter blur-2xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 p-1 animate-gradient"
          >
            <motion.div 
              className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="text-5xl font-bold font-display bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                DC
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-display mb-6 bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-white via-primary-200 via-secondary-200 to-accent-200 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              Desala Mourya Phani Chandra
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-6 text-primary-100 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              animate={{ color: ["#dbeafe", "#bfdbfe", "#93c5fd", "#dbeafe"] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Data Science Engineer
            </motion.span>
            {" | "}
            <motion.span
              animate={{ color: ["#bfdbfe", "#93c5fd", "#60a5fa", "#bfdbfe"] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              Cloud Certified Developer
            </motion.span>
            {" | "}
            <motion.span
              animate={{ color: ["#93c5fd", "#60a5fa", "#3b82f6", "#93c5fd"] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              Machine Learning Enthusiast
            </motion.span>
          </motion.p>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.p 
              className="text-lg font-mono text-accent-200 bg-gradient-to-r from-accent-200 to-warning-200 bg-clip-text text-transparent"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "Transforming Data into Actionable Insights"
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-full font-semibold shadow-2xl border border-white/20 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Hire Me
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-white/50 hover:bg-white hover:text-primary-600 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "#2563eb",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FileText className="inline-block w-5 h-5 mr-2" />
              View Resume
            </motion.button>
            
            <motion.button 
              className="bg-gradient-to-r from-accent-500 to-warning-500 hover:from-accent-600 hover:to-warning-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl border border-white/20 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 70, 239, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Download className="inline-block w-5 h-5 mr-2" />
              Download Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};