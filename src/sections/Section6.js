import React, { Component } from 'react';
import './Section6.css'; // Import the stylesheet

class Section6 extends Component {
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
        {
            question: "Which of the following statements is a valid objective for testing?",
            options: [
              "a) The test should start as late as possible so that the development had enough time to create a good product",
              "b) To validate whether the test object works as expected by the users and other stakeholders",
              "c) To prove that all possible defects are identified",
              "d) To prove that any remaining defects will not cause any failures"],
            correctAnswer: "b) To validate whether the test object works as expected by the users and other stakeholders",
          },
          {
            question: "Which of the following best represent advantages of the Whole Team approach? There are TWO correct options.",
            options: [
              "a) Office costs are minimised as the testers do not need to be co-located with the developers and can have their own workspace",
              "b) Business representatives can select the tools the team will use during the project",
              "c) Testers can work with customer representatives to create acceptance tests",
              "d) The whole team, not just testers, has responsibility for the quality of the product",
              "e) Developers can focus on the testing on non-functional requirements (performance, usability, security, etc.)"
            ],
            correctAnswer: "c) Testers can work with customer representatives to create acceptance tests",
          },
          {
            question: "Which of the following statements correctly describes the difference between testing and debugging?",
            options: [
              "a) Testing identifies the cause of defects; debugging analyses the defects and proposes prevention activities",
              "b) Dynamic testing shows failures caused by defects; debugging eliminates the defects, which are the source of failures",
              "c) Testing does not remove faults; but debugging removes defects that cause the faults",
              "d) Dynamic testing prevents the causes of failures; debugging removes the failures"],
            correctAnswer: "b) Dynamic testing shows failures caused by defects; debugging eliminates the defects, which are the source of failures",
          },
          {
              question: "As a result of risk analysis, more testing is being directed to those areas of the system under test where initial testing found more defects than average. Which of the following testing principles is being applied?",
              options: [
                  "a) Tests wear out",
                  "b) Testing is context dependent",
                  "c) Absence-of-errors is a fallacy",
                  "d) Defects cluster together"],
              correctAnswer: "d) Defects cluster together",
          },
          {
            question: "Which of the following tasks occur during test implementation? i. elaborate test conditions into test cases ii. create automated test scripts iii. take the actions necessary to meet the objectives of the test plan iv. create a test execution schedule v. report defects based on observed failures",
            options: [
                "a) i & iii",
                "b) ii & iii",
                "c) ii & iv",
                "d) ii & v"],
            correctAnswer: "c) ii & iv",
        },
        {
            question: "Which of the following is most likely to require the test process to change? There are TWO correct options.",
            options: [
                "a) A new set of user stories are added to the backlog of an ongoing project",
                "b) A new 3rd party company is appointed which uses a different test management tool set",
                "c) A new tester joins an established agile team to provide short-term cover",
                "d) A new technology is to be adopted for a new project",
                "e) A one-off bank holiday is announced by the government"],
            correctAnswer: "b) A new 3rd party company is appointed which uses a different test management tool set",
        },
        {
            question: "Match following test outputs (1-4) with the right test activity (A-D). 1. Exit criteria 2. Test log 3. Test progress report 4. Test completion report A. Test Planning B. Test Monitoring and Control C. Test Execution D. Test Completion",
            options: [
                "a) 1A, 2C, 3B, D4",
                "b) 1D, 2B, 3A, 4C",
                "c) 1A, 2C, 3D, 4B",
                "d) 1D, 2C, 3B, 4A"],
            correctAnswer: "a) 1A, 2C, 3B, D4",
        },
        {
            question: "A developer and tester have agreed to work together to develop high-level test scenarios which the developer will later implement as automated component tests. Which of the following skills will be most important to the tester in performing this test: i. technical knowledge of the programming language used by the developers ii. analytical/critical thinking iii. good communication iv. team organisation and delegation v. risk management",
            options: [
                "a) i & v",
                "b) ii & iv",
                "c) iv & v",
                "d) ii & iii"],
            correctAnswer: "d) ii & iii",
        },
        {
            question: "Given the following statements about the relationship between software development activities and test activities in the software development lifecycle: 1. Each development activitiy should have a corresponding testing activitiy 2. Reviewing should start as soon as final versions of documents become available 3. The design and implementation of tests should start during the corresponding development activity 4. Each test level should have test objectives specific to the appropriate SDLC phase  Which of the following CORRECTLY shows which are true and false?",
            options: [
                "a) True - 1, 2; False - 3, 4",
                "b) True - 2, 3; False - 1, 4",
                "c) True - 1, 2, 4; False - 3",
                "d) True - 1, 4; False - 2, 3"],
            correctAnswer: "d) True - 1, 4; False - 2, 3",
        },
        {
            question: "Which of the following statements BEST describes the TDD (Test-Driven Development) approach?",
            options: [
                "a) In TDD the code is written first, then the tests are written to verify that the code is correct",
                "b) Tests are written first, then code is written to satisfy the tests",
                "c) In TDD extensive software design directs the coding",
                "d) In TDD the tests remain unchanged, but the code is refactored regularly"],
            correctAnswer: "b) Tests are written first, then code is written to satisfy the tests",
        },
        {
            question: "Which of the following statements about test levels is CORRECT?",
            options: [
                "a) Component integration testing focuses on testing the interfaces and interactions between integrated systems and is usually peformed by developers",
                "b) System testing is normally performed by the end users in a representative test environment and relies heavily on specifications",
                "c) Component testing often requires specific support such as test harnesses and unit testing frameworks in the development environments",
                "d) Acceptance testing focuses on verification and the test environment to be used is heavily dependent on the integration strategy"],
            correctAnswer: "c) Component testing often requires specific support such as test harnesses and unit testing frameworks in the development environments",
        },
        {
          question: "Which one of the following is TRUE?",
          options: [
              "a) The purpose of regression testing is to check if the correction has been successfully implemented, while the purpose of confirmation testing is to confirm that the correction has no side effects",
              "b) The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check if the system is still working in a new environment",
              "c) The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check if the original defect has been fixed",
              "d) The purpose of regression testing is to check if the new functionality is working, while the purpose of confirmation testing is to check if the original defect has been fixed"],
          correctAnswer: "c) The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check if the original defect has been fixed",
      },
      {
        question: "The stakeholders for a new project have decided that the development will follow a sequential development model. Which of the following CORRECTLY describe how testing will be integrated into this development approach: i. Testing will be able to verify a working product in each iteration ii. Dynamic test cannot be performed early in the lifecycle iii. Testers will participate in requirement reviews iv. Lightweight test work product documentation will be produced v. Extensive automated regression tests can mitigate the high rate of change",
        options: [
            "a) i & v",
            "b) ii & iv",
            "c) iv & v",
            "d) ii & iii"],
        correctAnswer: "d) ii & iii",
      },
      {
        question: "Which of the following statements about the impact of DevOps on testing is CORRECT?",
        options: [
            "a) Testing will need additional resources to support test automation maintenance",
            "b) Automation through the delivery pipeline will free up the testers to do the manual regression testing",
            "c) Test automation frameworks can be maintained independently from the CI tools",
            "d) Testers will not be aware if changes will adversely affect existing code"],
        correctAnswer: "a) Testing will need additional resources to support test automation maintenance",
      },
      {
        question: "Which of the following work products is a suitable subject for static analysis?",
        options: [
            "a) Test plan for the next release",
            "b) Source code written by the developers",
            "c) Executable code supplied by a 3rd party",
            "d) Requirement specification for the next project"],
        correctAnswer: "b) Source code written by the developers",
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
      // Quiz completed, record end time
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
    const { quizStarted, quizCompleted, currentQuestion, questions, score, answers, startTime, endTime } = this.state;

    return (
      <div className='container'>
        {!quizStarted ? (
          <div className='quiz-start'>
            <h3>Foundational ISTQB Sample Questions</h3>
            <button className="start-button" onClick={this.startQuiz}>
              Start Quiz
            </button>
          </div>
        ) : !quizCompleted ? (
          <div>
            <p className="question">Question {currentQuestion + 1} of {questions.length}:</p>
            <br/>
            <p>{questions[currentQuestion].question}</p>
            <ul className="options">
              {questions[currentQuestion].options.map((option, index) => (
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
                Time Taken: {((endTime - startTime) / 1000).toFixed(2)} seconds
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

export default Section6;