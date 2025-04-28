import React, { useState } from 'react';
import { skills } from '../../data/portfolioData';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <span className="text-navy-600 dark:text-navy-400 font-medium">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-navy-600 dark:bg-navy-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my professional skills across business management, marketing,
            technical capabilities, and interpersonal competencies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-navy-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {filteredSkills.map(skill => (
            <SkillBar key={skill.id} name={skill.name} level={skill.level} />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Additional Competencies</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {['Business Development', 'Competitive Analysis', 'Market Research', 'Customer Experience', 'Pricing Strategy', 'International Business', 'Cross-functional Leadership', 'Agile Methodologies'].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-navy-600 dark:text-navy-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;