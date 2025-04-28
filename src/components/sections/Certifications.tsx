import React from 'react';
import { certifications } from '../../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
            in business management and marketing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map(cert => (
            <div
              key={cert.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 p-2 rounded-full">
                  <Award className="h-5 w-5 text-gold-500" />
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-navy-600 dark:text-navy-400 text-sm font-medium">{cert.issuer}</span>
                  <span className="text-gray-600 dark:text-gray-400 text-xs">{cert.date}</span>
                </div>
                
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-navy-600 dark:text-navy-400 hover:text-navy-700 dark:hover:text-navy-300 text-sm font-medium transition-colors mt-2"
                  >
                    View Certificate <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-navy-50 dark:bg-navy-900/30 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Continuous Learning</h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-5">
            I am committed to ongoing professional development and regularly participate in workshops,
            conferences, and courses to stay current with industry trends and best practices.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-navy-600 dark:text-navy-400 hover:text-navy-700 dark:hover:text-navy-300 font-medium transition-colors"
          >
            Contact me to learn more about my qualifications
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;