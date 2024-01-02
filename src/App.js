import './App.css';
import React, { useState } from 'react';
import Section0 from './sections/Section0';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Exam1 from './sections/Exam1';
import Exam2 from './sections/Exam2';
import Exam3 from './sections/Exam3';

function App() {

  const [currentContent, setCurrentContent] = useState(1);

  const handleMenuClick = (contentIndex) => {
    setCurrentContent(contentIndex);
  };

  return (
    <div className='app'>

      <br/>
      <h1>Software Testing</h1>

      <ul className='navigation-menu'>
        <li className='menu-item' onClick={() => handleMenuClick(0)}>Fundamentals of Testing</li>
        <li className='menu-item' onClick={() => handleMenuClick(1)}>Testing Throughout the Software Development Lifecycles</li>
        <li className='menu-item' onClick={() => handleMenuClick(2)}>Static Testing</li>
        <li className='menu-item' onClick={() => handleMenuClick(3)}>Test Analysis and Design</li>
        <li className='menu-item' onClick={() => handleMenuClick(4)}>Managing the Test Activities</li>
        <li className='menu-item' onClick={() => handleMenuClick(5)}>Test Tools</li>
        <li className='menu-item' onClick={() => handleMenuClick(6)}>Exam 1</li>
        <li className='menu-item' onClick={() => handleMenuClick(7)}>Exam 2</li>
        <li className='menu-item' onClick={() => handleMenuClick(8)}>Exam 3</li>
      </ul>

      <div className='content-window'>
          {currentContent === 0 && <Section0 />}
          {currentContent === 1 && <Section1 />}
          {currentContent === 2 && <Section2 />}
          {currentContent === 3 && <Section3 />}
          {currentContent === 4 && <Section4 />}
          {currentContent === 5 && <Section5 />}
          {currentContent === 6 && <Exam1/>}
          {currentContent === 7 && <Exam2/>}
          {currentContent === 8 && <Exam3/>}
      </div>      

    </div>
  );
}

export default App;
