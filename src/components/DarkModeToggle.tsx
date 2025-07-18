import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';

export const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
  onClick={toggleDarkMode}
  className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-accent-500 dark:to-primary-500 rounded-full shadow-xl border-2 border-white/20 backdrop-blur-sm"
  aria-label="Toggle dark mode"
  whileHover={{ scale: 1.1, rotate: 180 }}
  whileTap={{ scale: 0.9 }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <motion.div
    initial={false}
    animate={{ rotate: isDarkMode ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    {isDarkMode ? (
      <Sun className="w-6 h-6 text-yellow-300" />
    ) : (
      <Moon className="w-6 h-6 text-white" />
    )}
  </motion.div>
</motion.button>

  );
};