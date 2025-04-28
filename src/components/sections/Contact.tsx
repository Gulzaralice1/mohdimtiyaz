import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or interested in collaboration? Feel free to reach out through the form below
            or connect with me directly via email or LinkedIn.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-navy-100 dark:bg-navy-900 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-navy-600 dark:text-navy-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                  <a href={`mailto:${personalInfo.contact.email}`} className="text-gray-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-400 transition-colors">
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-navy-100 dark:bg-navy-900 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-navy-600 dark:text-navy-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</h4>
                  <a href={`tel:${personalInfo.contact.phone}`} className="text-gray-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-400 transition-colors">
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-navy-100 dark:bg-navy-900 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-navy-600 dark:text-navy-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                  <p className="text-gray-900 dark:text-white">{personalInfo.contact.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-navy-100 dark:bg-navy-900 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-navy-600 dark:text-navy-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">LinkedIn</h4>
                  <a 
                    href={`https://${personalInfo.contact.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-400 transition-colors"
                  >
                    {personalInfo.contact.linkedin}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Available For</h4>
              <ul className="space-y-3">
                {['Business Strategy Projects', 'Marketing Consultations', 'Brand Development', 'Market Research', 'Data Analysis Projects'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-gold-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-navy-400 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-navy-400 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-navy-400 focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-navy-400 focus:border-transparent transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full px-6 py-3 flex items-center justify-center rounded-lg text-white font-medium transition-all ${
                  isSubmitting || isSubmitted
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'bg-navy-600 hover:bg-navy-700 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Message Sent!
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
              
              {isSubmitted && (
                <div className="text-green-600 dark:text-green-400 text-sm mt-2">
                  Thank you for your message! I'll get back to you as soon as possible.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;