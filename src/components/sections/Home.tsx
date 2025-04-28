import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern dark:opacity-5"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1">
          <span className="inline-block py-1 px-3 rounded-full bg-gold-100 dark:bg-gold-900 text-gold-800 dark:text-gold-200 text-xs font-medium mb-4 transform transition-transform hover:scale-105">
            MBA Candidate
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {personalInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light">
            {personalInfo.title}
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            {personalInfo.bio.split(' ').slice(0, 25).join(' ')}...
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              <Mail size={18} className="mr-2" />
              Get in Touch
            </a>
            
            <a
              href={`https://${personalInfo.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-navy-600 dark:hover:border-navy-400 text-gray-800 dark:text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transform transition-transform hover:scale-105">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500 dark:bg-gold-600 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-lg">
              MBA 2024
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-navy-600 dark:hover:text-navy-300 transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Home;