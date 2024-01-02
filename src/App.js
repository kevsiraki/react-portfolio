import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import styles from './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {
  // Retrieve dark mode preference from localStorage or default to false
  const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  // Update the document's background color and store dark mode preference in localStorage
  const toggleDarkMode = () => {
    console.log("Toggling dark mode");
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.style.backgroundColor = newDarkMode ? '#252525' : '#fff';
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  // Apply dark mode when component mounts
  useEffect(() => {
    document.documentElement.style.backgroundColor = darkMode ? '#252525' : '#fff';
  }, [darkMode]);

  return (

    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header />
      <Experience />
      <Education />
      <Skills />
      <Contact />

      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
