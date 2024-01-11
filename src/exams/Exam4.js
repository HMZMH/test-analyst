import React, { Component } from 'react';
import './Exams.css';

class Exam4 extends Component {
    constructor(props) {
      super(props);
  
    this.state = {
      quizStarted: false,
      quizCompleted: false,
      score: 0,
      currentQuestion: 0,
      startTime: null,
      endTime: null,
      answers: [],
      questions: [
        {//P4Q1
            question: "Which of the following is an example of why testing is necessary?",
            options: [
              "a) Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users",
              "b) Static testing is used by developers to identify failures in their program code earlier than can be achieved through dynamic testing",
              "c) Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release",
              "d) Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"
            ],
            correctAnswer: "d) Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products",
        },
        //P4Q4
        {
            question: "Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?",
            options: [
            "a) Test design",
            "b) Test execution",
            "c) Test analysis",
            "d) Test implementation"
            ],
            correctAnswer: "a) Test design",
        },
        
        //P4Q7
        {
            question: "Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
            options: [
            "a) The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming",
            "b) The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system",
            "c) The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts",
            "d) The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"
            ],
            correctAnswer: "b) The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system",
        },
        
        //P4Q13
        {
            question: "Which of the following is MOST likely to be performed as part of system testing?",
            options: [
            "a) Security testing of a credit management system by an independent test team",
            "b) Testing the interface of a currency exchange system with an external banking system",
            "c) Beta testing of a remote learning system by courseware developers",
            "d) Testing the interactions between the components of a system, such as the UI and the database"
            ],
            correctAnswer: "a) Security testing of a credit management system by an independent test team",
        },
        
        //P4Q19
        {
            question: "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
            options: [
            "a) In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object.",
            "b) In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.",
            "c) In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.",
            "d) In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code."
            ],
            correctAnswer: "d) In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code.",
        },
        
        //P4Q20
        {
            question: "Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far...",
            options: [
            "a) 19, 20, 30",
            "b) 11, 12, 20",
            "c) 1, 10, 50",
            "d) 10, 29, 30, 31"
            ],
            correctAnswer: "a) 19, 20, 30",
        },
        
        //P4Q24
        {
            question: "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage. Which of the following sentences must be necessarily true?",
            options: [
            "a) The test suite composed with tests T1 and T2 achieves 105% statement coverage",
            "b) There exists at least one statement that must have been executed by both T1 and T2",
            "c) At least 5% of the statements in the code under test are non-executable",
            "d) The test suite composed of tests T1 and T2 achieves full branch coverage"
            ],
            correctAnswer: "b) There exists at least one statement that must have been executed by both T1 and T2",
        },
        
        //P4Q26
        {
            question: "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
            options: [
            "a) Testers have not been allocated enough time for test design and test execution",
            "b) The existing test strategy requires that testers use formal, black-box test techniques",
            "c) The specification is written in a formal language that can be processed by a tool",
            "d) Testers are the members of an agile team and have good programming skills",
            "e) Testers are experienced in the business domain and have good analytical"
            ],
            correctAnswer: "a) Testers have not been allocated enough time for test design and test execution",
        },
        
        //P4Q31
        {
            question: "You want to estimate the test effort for the new project using estimation based on ratios...",
            options: [
            "a) $40,000",
            "b) $80,000",
            "c) $81,250",
            "d) $82,500"
            ],
            correctAnswer: "b) $80,000",
        },
        
        //P4Q33
        {
            question: "According to the testing quadrants model, which of the following falls into quadrant Q1...",
            options: [
            "a) Usability testing",
            "b) Functional testing",
            "c) User acceptance testing",
            "d) Component integration testing"
            ],
            correctAnswer: "d) Component integration testing",
        },
        
        //P4Q34
        {
            question: "Given the following risks...",
            options: [
            "a) 1C, 2D, 3A, 4B",
            "b) 1B, 2D, 3A, 4C",
            "c) 1B, 2A, 3D, 4C",
            "d) 1C, 2A, 3D, 4B"
            ],
            correctAnswer: "c) 1B, 2A, 3D, 4C",
        },
        
        // P4Q35
        {
            question: "Which of the following is a product quality metric?",
            options: [
            "a) Mean time to failure",
            "b) Number of defects found",
            "c) Requirements coverage",
            "d) Defect detection percentage"
            ],
            correctAnswer: "a) Mean time to failure",
        },                                    
      ],
    };
  }
  

  startQuiz = () => {
    this.setState({ quizStarted: true, startTime: new Date() });
  };

  handleAnswerClick = (selectedOption) => {
    const { currentQuestion, questions, score, answers } = this.state;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    answers.push({
      question: questions[currentQuestion].question,
      selected: selectedOption,
      correct: selectedOption === correctAnswer,
    });

    if (selectedOption === correctAnswer) {
      this.setState({
        score: score + 1,
      });
    }

    if (currentQuestion < questions.length - 1) {
      this.setState({
        currentQuestion: currentQuestion + 1,
      });
    } else {
      this.setState({ quizCompleted: true, endTime: new Date() });
    }
  };

  restartQuiz = () => {
    this.setState({
      quizStarted: false,
      quizCompleted: false,
      score: 0,
      currentQuestion: 0,
      startTime: null,
      endTime: null,
      answers: [],
    });
  };

  render() {
    const { questions, currentQuestion, quizStarted, quizCompleted, score, startTime, endTime, answers } = this.state;
    const currentQuestionObj = questions[currentQuestion];
  
    return (
      <div className='container'>
        {!quizStarted ? (
          <div className='quiz-start'>
            <h3>Foundational ISTQB Custom Exam</h3>
            <button className="start-button" onClick={this.startQuiz}>
              Start Quiz
            </button>
          </div>
        ) : !quizCompleted ? (
          <div>
            <p className="question">Question {currentQuestion + 1} of {questions.length}:</p>
            <br />
            <p>{currentQuestionObj.question}</p>
  
            <ul className="options">
              {currentQuestionObj.options.map((option, index) => (
                <li className='quiz-item' key={index} onClick={() => this.handleAnswerClick(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h4>Performance Report</h4>
            <p className="score">Your Score: {score} out of {questions.length}</p>
            {startTime && endTime && (
              <p className="time-taken">
                Time Taken: {((endTime - startTime) / 1000 / 60).toFixed(0)} minutes and {((endTime - startTime) / 1000 % 60).toFixed(2)} seconds
              </p>
            )}
            <table className="answers">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Your Answer</th>
                  <th>Correct Answer</th>
                </tr>
              </thead>
              <tbody>
                {answers.map((answer, index) => (
                  <tr key={index} className={answer.correct ? 'correct-answer' : 'wrong-answer'}>
                    <td>{answer.question}</td>
                    <td>{answer.selected}</td>
                    <td>{questions[index].correctAnswer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="start-button" onClick={this.restartQuiz}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    );
  }  
}

export default Exam4;