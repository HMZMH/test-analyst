import './App.css';
import React, { useState } from 'react';
import Section0 from './sections/Section0';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';

function App() {

  const [currentContent, setCurrentContent] = useState(1);

  const handleMenuClick = (contentIndex) => {
    setCurrentContent(contentIndex);
  };

  return (
    <div className='app'>

      <br/>
      <h1>The Software Testing Process</h1>
      <br/>

      <ul className='navigation-menu'>
        <li className='menu-item' onClick={() => handleMenuClick(0)}>Home</li>
        <li className='menu-item' onClick={() => handleMenuClick(1)}>1. Planning</li>
        <li className='menu-item' onClick={() => handleMenuClick(2)}>2. Designing</li>
        <li className='menu-item' onClick={() => handleMenuClick(3)}>3. Executing</li>
        <li className='menu-item' onClick={() => handleMenuClick(4)}>4. Reporting</li>
        <li className='menu-item' onClick={() => handleMenuClick(5)}>5. Closing</li>
        <li className='menu-item' onClick={() => handleMenuClick(6)}>Quiz</li>
      </ul>

      <div className='content-window'>
          {currentContent === 0 && <Section0 />}
          {currentContent === 1 && <Section1 />}
          {currentContent === 2 && <Section2 />}
          {currentContent === 3 && <Section3 />}
          {currentContent === 4 && <Section4 />}
          {currentContent === 5 && <Section5 />}
          {currentContent === 6 && <Section6/>}
      </div>      

    </div>
  );
}

export default App;
