import React, { Component } from 'react';
import './Exams.css';
import q25image from '../assets/q25image.png'
import q27image from '../assets/q27image.png'
import q28image from '../assets/q28image.png'
import q37image from '../assets/q37image.png'

class Exam1 extends Component {
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
        {//1
            question: "Which of the following statements about testing and quality management are correct?",
            options: [
              "a) Quality assurance cannot be applied to testing",
              "b) Testing is a form of quality control",
              "c) Testing ensures that quality-related processes in the organization are followed",
              "d) Quality assurance is a combination of quality management and testing"],
            correctAnswer: "b) Testing is a form of quality control",
          },
          {//2
            question: "Which of the following is an advantage of having the whole team responsible for quality?",
            options: [
              "a) Companies no longer need to recruit and train software testing specialists",
              "b) Test automation tasks are now the responsibility of the development team instead of the test team",
              "c) Role barriers are eliminated, and the team members contribute to project success based on their unique skills and perspectives",
              "d) Project costs are lower because the need for a separate test team is eliminated"],
            correctAnswer: "c) Role barriers are eliminated, and the team members contribute to project success based on their unique skills and perspectives",
          },
          {//3
            question: "Which of the following statements below describes the most common situation for a failure discovered during testing or in production?",
            options: [
              "a) The product crashed when the user selected an option in a dialog box",
              "b) The wrong version of a compiled source code file was included in the build",
              "c) The computation algorithm used the wrong input variables",
              "d) The developer misinterpreted the requirements for the algorithm"],
            correctAnswer: "a) The product crashed when the user selected an option in a dialog box",
          },
          {//4
            question: "A product owner says that your role as a tester on an Agile team is to catch all the bugs before the end of each iteration. Which of the following is a testing principle that could be used to respond to this (false) statement?",
            options: [
              "a) Defect clustering",
              "b) Testing shows the presence of defects",
              "c) Absence-of-error fallacy",
              "d) Root cause analysis"],
            correctAnswer: "b) Testing shows the presence of defects",
          },
          {//5
            question: "Consider the following 4 test activities: 1. Selecting regression tests 2. Evaluating completeness of test execution 3. Identifying which user stories have open defect reports 4. Evaluating whether the number of tests for each requirement is consistent with the level of product risk. Consider the following ways traceability can help testing: A. Improve understandability of test status reports to include status of test basis items B. Make testing auditable C. Provide information to assess process quality D. Analyse the impact of changes. Which of the following best matches the testing activity with how treability can assist that activity?",
            options: [
              "a) 1D, 2B, 3C, 4A",
              "b) 1B, 2D, 3A, 4C",
              "c) 1D, 2C, 3A, 4B",
              "d) 1D, 2B, 3A, 4C"],
            correctAnswer: "d) 1D, 2B, 3A, 4C",
          },
          {//6
            question: "Which of the following statements about test management roles are CORRECT?",
            options: [
              "a) The test management role must be fulfilled by individuals inside the agile development team",
              "b) The test management role takes overall responsibility for the engineering aspect of testing",
              "c) One person cannot take both the testing and test management roles at the same time",
              "d) Some of the test management tasks may be handled by the Agile teamrather than by an individual"],
            correctAnswer: "d) Some of the test management tasks may be handled by the Agile teamrather than by an individual",
          },
          {//7
            question: "Which of the following tasks occur during test completion? i. test basis is analysed to identify testable features ii. testware that is useful in the future is archived iii. take the actions necessary to meet the objectives of the test plan iv. analyse completed test activities to identify lessons learned v. report defects based on observed failures",
            options: [
              "a) i & iii",
              "b) ii & iii",
              "c) ii & iv",
              "d) ii & v"],
            correctAnswer: "c) ii & iv",
          },
          {//8
            question: "During a project following Agile methods, you find a discrepancy between the developer's interpretation of an acceptance criteria and the product owner's interpretation, which you bring up during a user story refinement session. Which of the following is a benefit of test independence exemplified by this situation?",
            options: [
              "a) Recognizing different kinds of failures",
              "b) Taking primary responsibility for quality",
              "c) Removing a defect early",
              "d) Challenging stakeholder assumptions"],
            correctAnswer: "d) Challenging stakeholder assumptions",
          },
          {//9
            question: " Which of the following statements about good testing practices is CORRECT?",
            options: [
              "a) Test anallysis and design for a given test level should begin after the corresponding development activity has been completed so that testing can adhere to the late testing principle",
              "b) Testers are involved in reviewing work products as soon as drafts are available so that the shift-right approach is followed",
              "c) For every test activity there is a corresponding software development activity so that quality characteristics are followed",
              "d) Each test level should have test objectives specific to the appropriate SDLC phase so that tesing can check the test object to the fullest extent possible"],
            correctAnswer: "d) Each test level should have test objectives specific to the appropriate SDLC phase so that tesing can check the test object to the fullest extent possible",
          },
          {//10
            question: "Which of the following statements BEST describes the BDD (Behaviour-Driven Development) approach?",
            options: [
              "a) In BDD the tests are written first, then the code is written to satisfy the tests",
              "b) Tests are derived from the acceptance criteria as part of the design process",
              "c) BDD is usually implemented to create unit test cases",
              "d) In BDD tests are typically created based on the given/when/then format"],
            correctAnswer: "d) In BDD tests are typically created based on the given/when/then format",
          },
          {//11
            question: "You are reviewing an application design using a checklist. One of your checkpoints says: 'Are data flowswithin the system implemented correctly?'. Which type of testing is being applied?",
            options: [
              "a) Functional testing",
              "b) Non-functional testing",
              "c) Structural testing",
              "d) Checklist-based testing"],
            correctAnswer: "c) Structural testing",
          },
          {//12
            question: "Which of the following should NOT be a trigger for maintenance testing?",
            options: [
              "a) Decision to test the maintainability of software",
              "b) Decision to test the system after migration to a new operating system",
              "c) Decision to test if archived data is possible to be retrieved",
              "d) Decision to test after 'hot fixes'"],
            correctAnswer: "a) Decision to test the maintainability of software",
          },
          {//13
            question: "Which of the following items should NOT be raised during a retrospective meeting?",
            options: [
              "a) There should be more emphasis on unit testing in the future, to improve overall quality",
              "b) The build process is manual and takes too long. Research and implementation of an automated build framework should be done",
              "c) Tester XYZ is struggling to find defects",
              "d) The new checklists helped to speed up the testing of the installation feature"],
            correctAnswer: "c) Tester XYZ is struggling to find defects",
          },
          {//14
            question: "Which of the following is a CORRECT example of the shift-left approach?",
            options: [
              "a) Writing a white-box test after the code has been written",
              "b) Reviewing a specification to identify defects that caused the observed test failures",
              "c) Executing a usability test for a screen during acceptance testing",
              "d) Performing automated static analysis of source code as part of the continuous integration process"],
            correctAnswer: "d) Performing automated static analysis of source code as part of the continuous integration process",
          },
          {//15
            question: "Which of the following statements about the benefits of early and frequent feedback are TRUE? 1. Early feedback gives the developers less time to respond to quality problems 2. Early feedback enables Agile teams to deliver features with the highest business value first 3. Early feedback reduces costs because it decreases the amount of the needed for regression testing 4. Early feedback makes it more likely that the system built is what the customer wanted",
            options: [
              "a) 1 and 4",
              "b) 2 and 3",
              "c) 2 and 4",
              "d) 1 and 3"],
            correctAnswer: "c) 2 and 4",
          },
          {//16
            question: "Which of the following options are roles in a formal review?",
            options: [
              "a) Developer, Moderator, Review leader, Reviewer, Tester",
              "b) Author, Facilitator, Manager, Reviewer, Developer",
              "c) Author, Manager, Review leader, Reviewer, Designer",
              "d) Author, Moderator, Review leader, Reviewer, Scribe"],
            correctAnswer: "d) Author, Moderator, Review leader, Reviewer, Scribe",
          },
          {//17
            question: "You are reading a user story in the product backlog to prepare for a meeting with the product owner and a developer, noting potential defects as you go. Which of the following statements is TRUE about this activity?",
            options: [
              "a) It is not a static test, because static testing involves execution of the test object",
              "b) It is not a static test, because static testing is always performed using a tool",
              "c) It is a static test, because any defects you find will be found cheaper during dynamic testing",
              "d) It is a static test, because static testing can be applied to non-executable work products"],
            correctAnswer: "d) It is a static test, because static testing can be applied to non-executable work products",
          },
          {//18
            question: "Which of the review types below is the BEST option to choose when the review must follow every stage in the formal process and collect metrics to improve the software development process?",
            options: [
              "a) Informal Review",
              "b) Technical Review",
              "c) Inspection",
              "d) Walkthrough"],
            correctAnswer: "c) Inspection",
          },
          {//19
            question: "Prior to an iteration planning session, you are studying a user story and its acceptance criteria, deriving test conditions and associated test cases from the user story as a way of applying the principle of early QA and test. What test technique are you applying?",
            options: [
              "a) White-box",
              "b) Black-box",
              "c) Experience-based",
              "d) Error guessing"],
            correctAnswer: "b) Black-box",
          },
          {//20
            question: "Which of the following descriptions of statement coverage is CORRECT?",
            options: [
              "a) Statement coverage is a measure of the number of lines of source code exercised by tests",
              "b) Statement coverage is a measure of the proportion of executable statements in the source code exercised by tests",
              "c) Statement coverage is a measure of the percentage of lines of source code (without comments) exercised by tests",
              "d) Statement coverage is a measure of the number of executable statements in the source code exercised by tests"],
            correctAnswer: "b) Statement coverage is a measure of the proportion of executable statements in the source code exercised by tests",
          },
          {//21
            question: "A batch application has been in production unchanged for over two years. It runs overnight once a month to produce statements that will be e-mailed to customers. For each customer, the application goes through every account and lists every transaction on that account in the last month. It uses a nested-loop structure to process customers (outer loop), each customer’s accounts (middle loop), and each account’s transactions (inner loop). One night, the batch application terminates prematurely, failing to e-mail statements to some customers, when it encounters a customer with one account for which no transactions occurred in the last month. This is a very unusual situation and has not occurred in the years since this application was placed in production. While fixing the defect, a programmer asks you to recommend test techniques that are effective against this kind of defect. Which of the following test techniques would most likely have been able to detect the underlying defect?",
            options: [
              "a) Branch testing",
              "b) Statement testing",
              "c) Checklist-based testing",
              "d) Error guessing"],
            correctAnswer: "a) Branch testing",
          },
          {//22
            question: "Which one of the following statements about error guessing is NOT correct?",
            options: [
              "a) Error guessing is used to design dynamic tests that will expose defects by causing failures to occur",
              "b) Error guessing is used to create a checklist of possible failures that can be used in static analysis",
              "c) Error guessing can be used to generate the ideas to be used in a fault attack",
              "d) Error guessing can be used to supplement formal test techniques"],
            correctAnswer: "b) Error guessing is used to create a checklist of possible failures that can be used in static analysis",
          },
          {//23
            question: "Which one of the following descriptions of checklist-based testing is CORRECT?",
            options: [
              "a) The tester creates a list of possible errors, defects and failures as the basis of the tests",
              "b) The tester creates a list of quality characteristics and graphical user interface properties",
              "c) The tester creates a list of high-level test conditions based on a test charter",
              "d) The tester creates a list of items that can be checked automatically"],
            correctAnswer: "b) The tester creates a list of quality characteristics and graphical user interface properties",
          },
          {//24
            question: "A stakeholder has sketched out an initial idea for a user story 'As a bank teller, I would like to be able to view all of my customer’s bank transactions on the screen'. Which of the following statements about collaborative user story writing is CORRECT?",
            options: [
              "a) The user story matches the common format for a user story",
              "b) The developer(s) will be able to identify what makes the story valuable",
              "c) The tester(s) must be involved in the team conversation using the INVEST checklist",
              "d) The story cannot be implemented until the team conversation has taken place and been formally documented"],
            correctAnswer: "c) The tester(s) must be involved in the team conversation using the INVEST checklist",
          },
          {//25
            question: "A daily radiation recorder for plants produces a sunshine score based on a combination of the number of hours a plant is exposed to the sun (below 3 hours, 3 to 6 hours or above 6 hours) and the average intensity of the sunshine (very low, low, medium, high). Given the following test cases: [INSERT IMAGE] What is the minimum number of additional test cases that are needed to ensure 100% Each Choice coverage of the VALID INPUT equivalence partitions?",
            options: [
              "a) 1",
              "b) 2",
              "c) 3",
              "d) 4"],
            correctAnswer: "b) 2",
          },
          {//26
            question: "You are testing an e-commerce system that sells cooking supplies such as spices, flour, and other items in bulk. The units in which the items are sold are either grams (for spices and other expensive items) or kilograms (for flour and other inexpensive items). Regardless of the units, the smallest valid order amount is 0.5 units (e.g., half a gram of cardamom pods) and the largest valid order amount is 25.0 units (e.g., 25 kilograms of sugar). The precision of the units field is 0.1 units. Which of the following is a set of input values that cover the boundary values with two-point boundary values for this field?",
            options: [
              "a) 0.3, 10.0, 28.0",
              "b) 0.4, 0.5, 0.6, 24.9, 25.0, 25.1",
              "c) 0.4, 0.5, 25.0 25.1",
              "d) 0.5, 0.6, 24.9, 25.0"],
            correctAnswer: "c) 0.4, 0.5, 25.0 25.1",
          },
          {//27
            question: "Consider the following decision table for the portion of an online airline reservation system that allows frequent flyers to redeem points for reward travel: [INSERT IMAGE] What is the minimum number of tests required to achieve 100% coverage of the decision table?",
            options: [
              "a) 2",
              "b) 4",
              "c) 5",
              "d) 8"],
            correctAnswer: "c) 5",
          },
          {//28
            question: "Consider the following state transition diagram for a credit-card only, unattended gasoline pump: [INSERT IMAGE] Assume that you want to develop the minimum number of tests to achieve all valid transitions coverage in the state transition diagram. Assume further that each test must start at the beginning state, waiting for customer, and each test ends when a transition arrives at the beginning state. How many tests do you need?",
            options: [
              "a) 4",
              "b) 7",
              "c) 1",
              "d) Infinite"],
            correctAnswer: "a) 4",
          },
          {//29
            question: "Given the following User Story:'As a bank teller, I would like to be able to view all of my customer’s bank transactions on the screen, so I can answer his/her questions' ⦁	AC1 only a bank teller will have access to a customer’s transaction history ⦁	AC2 A customers transaction history must be displayed on screen in no more than 3 seconds from the requestion being submitted. The following Acceptance Test-driven tests have been identified: ⦁	Login as a bank clerk, enter a customer account ID, attempt to get his transactions history on the screen ⦁	Login as a bank teller, enter a customer account ID to get his transactions history on the screen ⦁	Login as a bank teller, request customer account ID by using name abbreviations, and get his transaction history on the screen ⦁	Login as a Bank Teller, enter a customer Account ID, get the Transactions history in less than 3 seconds on screen. Which of the following is the CORRECT execution order for these tests?",
            options: [
              "a) i, ii, iii, iv",
              "b) ii, iv, iii, i",
              "c) ii, iii, i, iv",
              "d) iv, i, ii, iii"],
            correctAnswer: "c) ii, iii, i, iv",
          },
          {//30
            question: "Which of the following metrics are NOT used in testing?",
            options: [
              "a) Percentage of executed test cases",
              "b) Average number of testers involved in the test execution",
              "c) Average number of stories added to the product backlog",
              "d) Number of defects found/fixed"],
            correctAnswer: "c) Average number of stories added to the product backlog",
          },
          {//31
            question: "Given the following examples of entry and exit criteria for system testing: ⦁	The original testing budget of $30,000 plus contingency of $7,000 has been spent ⦁	96% of planned tests for the drawing package have been executed and the remaining tests are now out of scope ⦁	The trading performance test environment has been designed, set-up and verified ⦁	Current status is no outstanding critical defects and two high-priority ones ⦁	The autopilot design specifications have been reviewed and reworked ⦁	The tax rate calculation component has passed unit testing. Which of the following BEST categorizes them as entry and exit criteria:",
            options: [
              "a) Entry criteria – 5, 6; Exit criteria – 1, 2, 3, 4",
              "b) Entry criteria – 2, 3, 6; Exit criteria – 1, 4, 5",
              "c) Entry criteria – 1, 3; Exit criteria – 2, 4, 5, 6",
              "d) Entry criteria – 3, 5, 6; Exit criteria – 1, 2, 4"],
            correctAnswer: "d) Entry criteria – 3, 5, 6; Exit criteria – 1, 2, 4",
          },
          {//32
            question: "Given the following user stories: 'As a bank teller, I can easily navigate through the system menu and links, and find the information I am looking for', 'For all users, the system must display all queries in less than 2 seconds, 90% of the time' And the associated test cases: TC1: Login as bank teller. Enter customer ID. Verify that the customer transaction history is easy to find, and that navigating through the menus is intuitive TC2: Login as bank teller: Enter customer name. Verify that the customer accounts are easy to find and that navigating through the menus is intuitive TC3: Simulate expected traffic on system and validate the time for customer transaction history to display is less than 2 seconds. Which test quadrants would the above test cases be part of?",
            options: [
              "a) Q1 unit level, technology facing & Q2 system level, business facing",
              "b) Q2 system level, business facing & Q3 system or user acceptance level, business facing",
              "c) Q3 system or user acceptance level, business facing & Q4 system or operation acceptance level, technology facing",
              "d) Q2 system level, business facing & Q4 system or operation acceptance level, technology facing"],
            correctAnswer: "c) Q3 system or user acceptance level, business facing & Q4 system or operation acceptance level, technology facing",
          },
          {//33
            question: "During product risk analysis of a mobile app the following risk has been identified: Risk 21 Users find the soft keyboard too hard to use. The risk has been given a likelihood of low and an impact of low. The stakeholders have agreed not to test this risk. Which of the following CORRECTLY describes the product risk control action that has been taken?",
            options: [
              "a) Risk acceptance",
              "b) Risk transfer",
              "c) Contingency planning",
              "d) Risk mitigation by testing"],
            correctAnswer: "a) Risk acceptance",
          },
          {//34
            question: "Which of the following is best at showing the team’s progress against estimated productivity rates?",
            options: [
              "a) Burndown charts",
              "b) Automation logs",
              "c) The agile taskboard showing user story and task progress",
              "d) Defect tracking tools"],
            correctAnswer: "a) Burndown charts",
          },
          {//35
            question: "Which of the following is NOT implemented as part of an automated DevOps pipeline?",
            options: [
              "a) Cross-referencing of testware to software items",
              "b) Formal baselining of test environment configurations",
              "c) Full record of changes that led to the current version",
              "d) Version control of manual test cases"],
            correctAnswer: "d) Version control of manual test cases",
          },
          {//36
            question: "Your team is using the three-point estimation technique to estimate the testing effort for the next release. The consensus of the team is: ⦁	Most optimistic estimate 12 person days ⦁	Most likely estimate 18 person days ⦁	Most pessimistic estimate 36 person days What is the final estimate?",
            options: [
              "a) 20-24 person days",
              "b) 16-24 person days",
              "c) 18-22 person days",
              "d) 20 person days"],
            correctAnswer: "b) 16-24 person days",
          },
          {//37
            question: "Given the following priorities and dependencies for these test cases: [INSERT IMAGE] Which of the following test execution schedules BEST considers the priorities and technical and logical dependencies?",
            options: [
              "a) TC1 – TC3 – TC4 – TC6 – TC2 – TC5",
              "b) TC4 – TC3 – TC1 – TC2 – TC5 – TC6",
              "c) TC4 – TC1 – TC3 – TC5 – TC6 – TC2",
              "d) TC4 – TC2 – TC5 – TC1 – TC3 – TC6"],
            correctAnswer: "b) TC4 – TC3 – TC1 – TC2 – TC5 – TC6",
          },
          {//38
            question: "You are performing system testing of a train reservation system. You have run a set of test scenario where a number of trains have been scheduled, but the system occasionally reports that no trains are available. You have provided the developers with a summary of the defect and the version of the tested system. They recognize the urgency of the defect and are now waiting for you to provide further details. In addition to the information already provided, the following information is available: ⦁	Degree of impact (severity) of the defect ⦁	Identification of the test item ⦁	Details of the test environment ⦁	Urgency/priority to fix ⦁	Actual results ⦁	Reference to test case specification. Which of this information is MOST useful to include in your defect report?",
            options: [
                "a) 1, 2, 6",
                "b) 1, 4, 5, 6",
                "c) 2, 3, 4, 5",
                "d) 3, 5, 6"],
            correctAnswer: "d) 3, 5, 6",
          },
          {//39
            question: "Which test activity do DevOps tools support?",
            options: [
              "a) Test execution",
              "b) Build automation",
              "c) Test completion",
              "d) Test implementation"],
            correctAnswer: "a) Test execution",
          },
          {//40
            question: "Which of the following statements CORRECTLY identifies a potential benefit of test automation?",
            options: [
              "a) Increased execution times",
              "b) Unrealistic expectations",
              "c) Less objective assessment",
              "d) Increased time for manual testing"],
            correctAnswer: "d) Increased time for manual testing",
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
    const { questions, currentQuestion, quizStarted, quizCompleted, score, startTime, endTime, answers } = this.state;
    const currentQuestionObj = questions[currentQuestion];
  
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
            <br />
            <p>{currentQuestionObj.question}</p>
  
            {currentQuestion === 24 && <img src={q25image} alt="Question 25" />}
            {currentQuestion === 26 && <img src={q27image} alt="Question 27" />}
            {currentQuestion === 27 && <img src={q28image} alt="Question 28" />}
            {currentQuestion === 36 && <img src={q37image} alt="Question 37" />}
  
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

export default Exam1;