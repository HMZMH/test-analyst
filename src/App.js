import './App.css';
import React, { useState } from 'react';
import Exam1 from './exams/Exam1';
import Exam2 from './exams/Exam2';
import Exam3 from './exams/Exam3';

function App() {

  const [currentContent, setCurrentContent] = useState(0);

  const handleMenuClick = (contentIndex) => {
    setCurrentContent(contentIndex);
  };

  return (
    <div className='app'>

      <div style={{width:'400px'}}>
      <h1>ISTQB Mock Exams</h1>
      </div>
      

      <div style={{textAlign:'end'}}>
        <ul className='navigation-menu'>
          <li className='menu-item' onClick={() => handleMenuClick(0)}>Exam 1</li>
          <li className='menu-item' onClick={() => handleMenuClick(1)}>Exam 2</li>
          <li className='menu-item' onClick={() => handleMenuClick(2)}>Exam 3</li>
        </ul>
      </div>

      <div className='content-window'>
          {currentContent === 0 && <Exam1/>}
          {currentContent === 1 && <Exam2/>}
          {currentContent === 2 && <Exam3/>}
      </div>   

    </div>
  );
}

export default App;
