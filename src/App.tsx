import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Mohd Imtiyaz | MBA Portfolio";
    
    // Add dark mode class based on user preference or localStorage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Add the background grid pattern
    const style = document.createElement('style');
    style.textContent = `
      .bg-grid-pattern {
        background-image: radial-gradient(circle, #0A2463 1px, transparent 1px);
        background-size: 30px 30px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;