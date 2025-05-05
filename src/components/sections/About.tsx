import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            
          This portfolio showcases business and finance projects that reflect my strategic thinking, analytical skills, and focus on delivering results. From brand building to financial analysis and technical trading, each initiative highlights measurable impact and performance enhancement.
            
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Professional Profile</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-4">
              <MapPin size={20} className="mr-3 text-navy-600 dark:text-navy-400" />
              <span>Based in {personalInfo.contact.location}</span>
            </div>
            
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Calendar size={20} className="mr-3 text-navy-600 dark:text-navy-400" />
              <span>Available from {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
            
            <div className="space-y-8">
              {personalInfo.education.map((edu, index) => (
                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <GraduationCap size={24} className="text-navy-600 dark:text-navy-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                      <p className="text-navy-600 dark:text-navy-400 font-medium mb-1">{edu.school}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.duration}</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center text-navy-600 dark:text-navy-400 font-medium hover:text-navy-700 dark:hover:text-navy-300 transition-colors"
              >
                <span>Let's work together</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;