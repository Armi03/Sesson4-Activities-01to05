// src/App.jsx
import React from 'react';
import Header from './Header';
import Section from './Section';
import Article from './Article';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './styles.css';

// Dynamic content using JavaScript variables
const appTitle = 'React Project';
const section1Content = 'Main Section 1.';
const article1Title = 'This is the Blog Article';
const article1Text = 'Content of Blog Article.';
const sidebarContent = 'Blog content will goes here.';
const section2Content = 'This is the content of Related Blog.';
const footerText = 'Copyright © 2024 React Props App';

function App() {
  return (
    <div>
      <Header title={appTitle} />
      <Section heading="Section 1" content={section1Content} />
      <Article title={article1Title} text={article1Text} />
      <Sidebar content={sidebarContent} />
      <Section heading="Section 2" content={section2Content} />
      <Footer text={footerText} />
    </div>
  );
}

export default App;