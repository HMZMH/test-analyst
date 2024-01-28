import './App.css';
import React, { useState } from 'react';
import ISTQBexam1 from './istqb/ISTQBexam1';
import ISTQBexam2 from './istqb/ISTQBexam2';
import ISTQBexam3 from './istqb/ISTQBexam3';
import AZ900exam1 from './az900/AZ900exam1';

function App() {
  const [currentContent, setCurrentContent] = useState(0);

  const handleMenuChange = (event) => {
    setCurrentContent(Number(event.target.value));
  };

  return (
    <div className='app'>
      <div style={{ width: '400px' }}>
        <h1>Test Analyst Mock Exams</h1>
      </div>

      <div className='dropdown-menu'>
        <select className='dropdown-button' onChange={handleMenuChange}>
          <option value={0} className='dropdown-option'>
            Exam 1
          </option>
          <option value={1} className='dropdown-option'>
            Exam 2
          </option>
          <option value={2} className='dropdown-option'>
            Exam 3
          </option>
          
          <option value={3} className='dropdown-option'>
            Exam 1
          </option>
        </select>
      </div>

      <div className='content-window'>
        {currentContent === 0 && <ISTQBexam1 />}
        {currentContent === 1 && <ISTQBexam2 />}
        {currentContent === 2 && <ISTQBexam3 />}
        {currentContent === 3 && <AZ900exam1 />}
      </div>
    </div>
  );
}

export default App;
