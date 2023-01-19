import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import Homepage from './sections/Homepage.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Work from './sections/Work.jsx';
import Skills from './sections/Skills.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={styles.container}>
    <Homepage />
    <About />
    <Skills />
    <Work />
    <Contact />
  </div>
);
