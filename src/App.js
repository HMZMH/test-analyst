import './App.css';
import React, { useState } from 'react';
import Exam1 from './exams/Exam1';
import Exam2 from './exams/Exam2';

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
        <li className='menu-item' onClick={() => handleMenuClick(6)}>Exam 1</li>
        <li className='menu-item' onClick={() => handleMenuClick(7)}>Exam 2</li>
      </ul>

      <div className='content-window'>
          {currentContent === 6 && <Exam1/>}
          {currentContent === 7 && <Exam2/>}
      </div>      

    </div>
  );
}

export default App;
