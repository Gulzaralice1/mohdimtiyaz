import React from 'react';
import { experiences } from '../../data/portfolioData';
import { Briefcase, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey, highlighting key roles and achievements
            that have shaped my expertise in business and marketing.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-navy-200 dark:bg-navy-800"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`mb-12 md:mb-0 relative flex md:items-center ${
                index % 2 === 0 
                  ? 'md:flex-row' 
                  : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-navy-600 dark:bg-navy-500 border-4 border-white dark:border-gray-800 z-10"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div 
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-3 gap-2 flex-wrap justify-end">
                    <span 
                      className={`text-sm font-medium py-1 px-3 rounded-full bg-navy-100 dark:bg-navy-900 text-navy-700 dark:text-navy-300 ${
                        index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                      }`}
                    >
                      {exp.duration}
                    </span>
                  </div>
                  
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Briefcase className="h-5 w-5 text-navy-600 dark:text-navy-400 mr-2 md:order-first" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  </div>
                  
                  <h4 className={`text-navy-600 dark:text-navy-400 font-medium mb-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {exp.company}
                  </h4>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <ul className={`space-y-2 text-sm`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-gold-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;