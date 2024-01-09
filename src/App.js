import './App.css';
import React, { useState } from 'react';
import Exam1 from './exams/Exam1';
import Exam2 from './exams/Exam2';
import Exam3 from './exams/Exam3';

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
        <li className='menu-item' onClick={() => handleMenuClick(0)}>Exam 1</li>
        <li className='menu-item' onClick={() => handleMenuClick(1)}>Exam 2</li>
        <li className='menu-item' onClick={() => handleMenuClick(2)}>Exam 3</li>
      </ul>

      <div className='content-window'>
          {currentContent === 0 && <Exam1/>}
          {currentContent === 1 && <Exam2/>}
          {currentContent === 2 && <Exam3/>}
      </div>      

    </div>
  );
}

export default App;
