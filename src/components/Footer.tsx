import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-gold-500 mr-2">Jordan Smith</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              MBA Candidate specializing in Business Management and Marketing.
              Let's collaborate to create impactful business strategies and marketing campaigns.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://${personalInfo.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Certifications', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic">
              <p className="text-gray-400 mb-2 flex items-start">
                <MessageCircle className="mr-2 h-5 w-5 text-gray-500 flex-shrink-0" />
                <span>{personalInfo.contact.email}</span>
              </p>
              <p className="text-gray-400 mb-2 flex items-start">
                <svg className="mr-2 h-5 w-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>{personalInfo.contact.phone}</span>
              </p>
              <p className="text-gray-400 flex items-start">
                <svg className="mr-2 h-5 w-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{personalInfo.contact.location}</span>
              </p>
            </address>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Jordan Smith. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-navy-700 rounded-full text-white hover:bg-navy-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;