import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { DarkModeToggle } from './components/DarkModeToggle';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { EducationPage } from './pages/EducationPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SWOTPage } from './pages/SWOTPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <DarkModeToggle />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/swot" element={<SWOTPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;