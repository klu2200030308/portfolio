import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Desala Mourya Phani Chandra
            </h3>
            <p className="text-gray-400 mb-4">
              Data Science Engineer passionate about transforming data into actionable insights through innovative AI and ML solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:mourya.phani@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2">
              <Mail className="inline-block w-4 h-4 mr-2" />
              mourya.phani@gmail.com
            </p>
            <p className="text-gray-400 mb-4">
              📱 +91-9121037480
            </p>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Desala Mourya Phani Chandra. All rights reserved. | Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};