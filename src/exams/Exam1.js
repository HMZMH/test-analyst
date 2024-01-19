import React, { Component } from 'react';
import './Exams.css';
import q25image from '../assets/exam1images/q25image.png'
import q27image from '../assets/exam1images/q27image.png'
import q28image from '../assets/exam1images/q28image.png'
import q37image from '../assets/exam1images/q37image.png'

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
            question: "Which of the following statements is a valid objective for testing?",
            options: [
              "a) The test should start as late as possible so that the development had enough time to create a good product",
              "b) To validate whether the test object works as expected by the users and other stakeholders",
              "c) To prove that all possible defects are identified",
              "d) To prove that any remaining defects will not cause any failures"],
            correctAnswer: "b) To validate whether the test object works as expected by the users and other stakeholders",
          },
          {//2
            question: "Which of the following best represent advantages of the Whole Team approach? There are TWO correct options.",
            options: [
              "a) Office costs are minimised as the testers do not need to be co-located with the developers and can have their own workspace",
              "b) Business representatives can select the tools the team will use during the project",
              "c) Testers can work with customer representatives to create acceptance tests",
              "d) The whole team, not just testers, has responsibility for the quality of the product",
              "e) Developers can focus on the testing on non-functional requirements (performance, usability, security, etc.)"
            ],
            correctAnswer: ["c) Testers can work with customer representatives to create acceptance tests", "d) The whole team, not just testers, has responsibility for the quality of the product" ],
          },
          {//3
            question: "Which of the following statements correctly describes the difference between testing and debugging?",
            options: [
              "a) Testing identifies the cause of defects; debugging analyses the defects and proposes prevention activities",
              "b) Dynamic testing shows failures caused by defects; debugging eliminates the defects, which are the source of failures",
              "c) Testing does not remove faults; but debugging removes defects that cause the faults",
              "d) Dynamic testing prevents the causes of failures; debugging removes the failures"],
            correctAnswer: "b) Dynamic testing shows failures caused by defects; debugging eliminates the defects, which are the source of failures",
          },
          {//4
              question: "As a result of risk analysis, more testing is being directed to those areas of the system under test where initial testing found more defects than average. Which of the following testing principles is being applied?",
              options: [
                  "a) Tests wear out",
                  "b) Testing is context dependent",
                  "c) Absence-of-errors is a fallacy",
                  "d) Defects cluster together"],
              correctAnswer: "d) Defects cluster together",
          },
          {//5
            question: (
              <div>
                Which of the following tasks occur during test implementation?<br /><br />
                i. elaborate test conditions into test cases<br /><br />
                ii. create automated test scripts<br /><br />
                iii. take the actions necessary to meet the objectives of the test plan<br /><br />
                iv. create a test execution schedule<br /><br />
                v. report defects based on observed failures
              </div>
            ),
            options: [
                "a) i & iii",
                "b) ii & iii",
                "c) ii & iv",
                "d) ii & v"],
            correctAnswer: "c) ii & iv",
        },
        {//6
            question: "Which of the following is most likely to require the test process to change? There are TWO correct options.",
            options: [
                "a) A new set of user stories are added to the backlog of an ongoing project",
                "b) A new 3rd party company is appointed which uses a different test management tool set",
                "c) A new tester joins an established agile team to provide short-term cover",
                "d) A new technology is to be adopted for a new project",
                "e) A one-off bank holiday is announced by the government"],
            correctAnswer: "b) A new 3rd party company is appointed which uses a different test management tool set",
        },
        {//7
            question: (
              <div>
                Match following test outputs (1-4) with the right test activity (A-D).<br /><br />
                1. Exit criteria<br />
                2. Test log<br />
                3. Test progress report<br />
                4. Test completion report<br /><br />
                A. Test Planning<br />
                B. Test Monitoring and Control<br />
                C. Test Execution<br />
                D. Test Completion
              </div>
            ),
            options: [
                "a) 1A, 2C, 3B, D4",
                "b) 1D, 2B, 3A, 4C",
                "c) 1A, 2C, 3D, 4B",
                "d) 1D, 2C, 3B, 4A"],
            correctAnswer: "a) 1A, 2C, 3B, D4",
        },
        {//8
            question: (
              <div>
                A developer and tester have agreed to work together to develop high-level test scenarios which the developer will later implement as automated component tests.<br /><br />
                Which of the following skills will be most important to the tester in performing this test:<br />
                i. technical knowledge of the programming language used by the developers<br />
                ii. analytical/critical thinking<br />
                iii. good communication<br />
                iv. team organization and delegation<br />
                v. risk management
              </div>
            ),
            options: [
                "a) i & v",
                "b) ii & iv",
                "c) iv & v",
                "d) ii & iii"],
            correctAnswer: "d) ii & iii",
        },
        {//9
          question: (
            <div>
              Given the following statements about the relationship between software development activities and test activities in the software development lifecycle:<br /><br />
              1. Each development activity should have a corresponding testing activity<br />
              2. Reviewing should start as soon as final versions of documents become available<br />
              3. The design and implementation of tests should start during the corresponding development activity<br />
              4. Each test level should have test objectives specific to the appropriate SDLC phase<br /><br />
              Which of the following CORRECTLY shows which are true and false?
            </div>
          ),
            options: [
                "a) True - 1, 2; False - 3, 4",
                "b) True - 2, 3; False - 1, 4",
                "c) True - 1, 2, 4; False - 3",
                "d) True - 1, 4; False - 2, 3"],
            correctAnswer: "d) True - 1, 4; False - 2, 3",
        },
        {//10
            question: "Which of the following statements BEST describes the TDD (Test-Driven Development) approach?",
            options: [
                "a) In TDD the code is written first, then the tests are written to verify that the code is correct",
                "b) Tests are written first, then code is written to satisfy the tests",
                "c) In TDD extensive software design directs the coding",
                "d) In TDD the tests remain unchanged, but the code is refactored regularly"],
            correctAnswer: "b) Tests are written first, then code is written to satisfy the tests",
        },
        {//11
            question: "Which of the following statements about test levels is CORRECT?",
            options: [
                "a) Component integration testing focuses on testing the interfaces and interactions between integrated systems and is usually peformed by developers",
                "b) System testing is normally performed by the end users in a representative test environment and relies heavily on specifications",
                "c) Component testing often requires specific support such as test harnesses and unit testing frameworks in the development environments",
                "d) Acceptance testing focuses on verification and the test environment to be used is heavily dependent on the integration strategy"],
            correctAnswer: "c) Component testing often requires specific support such as test harnesses and unit testing frameworks in the development environments",
        },
        {//12
          question: "Which one of the following is TRUE?",
          options: [
              "a) The purpose of regression testing is to check if the correction has been successfully implemented, while the purpose of confirmation testing is to confirm that the correction has no side effects",
              "b) The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check if the system is still working in a new environment",
              "c) The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check if the original defect has been fixed",
              "d) The purpose of regression testing is to check if the new functionality is working, while the purpose of confirmation testing is to check if the original defect has been fixed"],
          correctAnswer: "c) The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check if the original defect has been fixed",
      },
      {//13
        question: (
          <div>
            The stakeholders for a new project have decided that the development will follow a sequential development model.<br /><br />
            Which of the following CORRECTLY describe how testing will be integrated into this development approach:<br />
            i. Testing will be able to verify a working product in each iteration<br />
            ii. Dynamic tests cannot be performed early in the lifecycle<br />
            iii. Testers will participate in requirement reviews<br />
            iv. Lightweight test work product documentation will be produced<br />
            v. Extensive automated regression tests can mitigate the high rate of change
          </div>
        ),
        options: [
            "a) i & v",
            "b) ii & iv",
            "c) iv & v",
            "d) ii & iii"],
        correctAnswer: "d) ii & iii",
      },
      {//14
        question: "Which of the following statements about the impact of DevOps on testing is CORRECT?",
        options: [
            "a) Testing will need additional resources to support test automation maintenance",
            "b) Automation through the delivery pipeline will free up the testers to do the manual regression testing",
            "c) Test automation frameworks can be maintained independently from the CI tools",
            "d) Testers will not be aware if changes will adversely affect existing code"],
        correctAnswer: "a) Testing will need additional resources to support test automation maintenance",
      },
      {//15
        question: "Which of the following work products is a suitable subject for static analysis?",
        options: [
            "a) Test plan for the next release",
            "b) Source code written by the developers",
            "c) Executable code supplied by a 3rd party",
            "d) Requirement specification for the next project"],
        correctAnswer: "b) Source code written by the developers",
      },
      {//16
        question: "During a period of intensive project overtime, a system architecture document is sent to various project participants, announcing a previously-unplanned technical review to occur in one week. No adjustments are made to the participants' list of assigned tasks. Based on this information alone, which of the following is a factor for review success that is MISSING?",
        options: [
            "a) Appropriate review type",
            "b) Adequate time to prepare",
            "c) Sufficient metrics to evaluate the author",
            "d) Well-managed review meeting"],
        correctAnswer: "b) Adequate time to prepare",
      },
      {//17
        question: "Which of the following statements about static testing is MOST true?",
        options: [
            "a) Static testing is a cheap way to detect and remove defects",
            "b) Static testing makes dynamic testing less relevant",
            "c) Static testing makes it impossible to trigger run-time problems early in the lifecycle",
            "d) Any work product is appropriate for static testing"],
        correctAnswer: "a) Static testing is a cheap way to detect and remove defects",
      },
      {//18
        question: "Which of the following statements on review process activities is CORRECT?",
        options: [
            "a) As part of review planning, the review leader completes a defect log so that anomalies can be recorded",
            "b) As part of communication and analysis, the reviewers use checklists to identify anomalies in the work product under review",
            "c) As part of the review meeting, the reviewers create defect reports based on the checklists provided for the review",
            "d) As part of the review initiation, the reviewers receive the checklists needed for the review"],
        correctAnswer: "d) As part of the review initiation, the reviewers receive the checklists needed for the review",
      },
      {//19
        question: (
          <div>
            Which of the following BEST matches the descriptions (1 - 5) with the different categories of test techniques?<br />
            1. Coverage is measured based on a selected structure of the test object<br />
            2. The processing within the test object is checked<br />
            3. Tests are based on defects' likelihood and their distribution<br />
            4. Deviations from the requirements are checked<br />
            5. User stories are used as the test basis<br /><br />
            Using notation for the following 3 options:<br />
            Black - Black-box test techniques<br />
            White - White-box test techniques<br />
            Experience - Experience-based test techniques
          </div>
        ),
        options: [
            "a) Black - 4, 5 White - 1, 2; Experience - 3",
            "b) Black - 3 White - 1, 2; Experience - 4, 5",
            "c) Black - 4 White - 1, 2; Experience - 3, 5",
            "d) Black - 1, 3, 5 White - 2; Experience - 4"],
        correctAnswer: "a) Black - 4, 5 White - 1, 2; Experience - 3",
      },
      {//20
        question: "Which of the following descriptions of statement coverage is CORRECT?",
        options: [
            "a) It is a metric, which is the percentage of test cases that have been executed",
            "b) 100% statement coverage ensures that all executable statements in the source code have been exercised at least once",
            "c) 100% statement coverage will detect all defects that are data dependent",
            "d) It is a metric, which is the number of executable statements that have been executed"],
        correctAnswer: "b) 100% statement coverage ensures that all executable statements in the source code have been exercised at least once",
      },
      {//21
        question: "Which statement about the strengths of white-box testing is NOT true?",
        options: [
            "a) White-box testing will help to find defects in code that does not relate to the requirements",
            "b) White-box testing will always find defects of omission",
            "c) White-box testing can be used in static testing",
            "d) White-box testing provides an objective measure of coverage"],
        correctAnswer: "b) White-box testing will always find defects of omission",
      },
      {//22
        question: "Which of the following descriptions of error guessing is CORRECT?",
        options: [
            "a) Fault attacks are an ad goc approach to error guessing",
            "b) Error guessing cannot be used to find computational failures",
            "c) Error guessing can be based on defect and failure data",
            "d) Error guessing can be used to varify software"],
        correctAnswer: "c) Error guessing can be based on defect and failure data",
      },
      {//23
        question: "Which of the following is a true statement about exploratory testing?",
        options: [
            "a) Experienced testers are likely to do better if they have curiosity and analytical skills",
            "b) Exploratory testing does not identify any additional tests beyond those that would result from formal test techniques",
            "c) The time required to complete an exploratory testing session cannot be predicted in advance",
            "d) Exploratory testing can involve the use of black-box techniques but not white-box techniques"],
        correctAnswer: "a) Experienced testers are likely to do better if they have curiosity and analytical skills",
      },
      {//24
        question: "Which of the following statements about acceptance criteria is CORRECT?",
        options: [
            "a) Scenario=oriented acceptance criteria are usually written as a bullet-point verification list",
            "b) Acceptance critieria must match the exit critieria for an iteration",
            "c) Rule-oriented acceptance criteria can be written in a table",
            "d) Rule-oriented acceptance criteria use BDD format"],
        correctAnswer: "c) Rule-oriented acceptance criteria can be written in a table",
      },
      {//25
        question: (
          <div>
            A fitness app measures the number of steps that are walked each day and provides feedback to encourage the user to keep fit.<br />
            The following set of test inputs has been created with the intention to cover all the VALID input and output partitions:<br />
            TC1 666, TC2 999, TC3 2222, TC4 5555, TC5 6666<br />
            What is the equivalence partition coverage achieved by this set of tests?
          </div>
        ),
        options: [
            "a) 100%",
            "b) 50%",
            "c) 80%",
            "d) 75%"],
        correctAnswer: "c) 80%",
      },
      {//26
        question: (
          <div>
            A smart home thermostat measures the difference between the set temperatures and the actual temperature in a room and sends out the appropriate instruction to the boiler.<br />
            - The thermostat accepts a temperature difference (in 1-degree increments) between -4 and +4 inclusive; any value outside this range and the thermostat sends the message 'error'<br />
            - If the temperature difference is between -4 and -1 degrees (inclusive), the thermostat sends the instruction 'heat up'<br />
            - If the temperature difference is 0 degrees, the thermostat sends the instruction 'do nothing'<br />
            - If the temperature difference is between +1 and +4 degrees (inclusive), the thermostat sends the instruction 'cool down'<br /><br />
            What is the minimum number of test cases needed to achieve 100% BVA coverage using the 3-value approach?
          </div>
        ),
        options: [
            "a) 7 tests",
            "b) 21 tests",
            "c) 5 tests",
            "d) 13 tests"],
        correctAnswer: "d) 13 tests",
      },
      {//27
        question: "A company's employees are paid bonuses if they work more than a yeaar in the company and achieve a target which is individually agreed beforehand. These facts can be shown in thr decision table below. Which of the following test cases represents a situation that can happen in real life, and is missing in the decision table?",
        options: [
            "a) Condition1 = YES, Condition2 = NO, Condition3 = YES, Action = NO",
            "b) Condition1 = YES, Condition2 = YES, Condition3 = NO, Action = YES",
            "c) Condition1 = NO, Condition2 = NO, Condition3 = YES, Action = NO",
            "d) Condition1 = NO, Condition2 = YES, Condition3 = NO, Action = NO"],
        correctAnswer: "d) Condition1 = NO, Condition2 = YES, Condition3 = NO, Action = NO",
      },
      {//28
        question: "Which of the following statements about the given state transition diagram and table of test cases is TRUE?",
        options: [
            "a) The given test cases achieve 100% all transitions coverage",
            "b) The given test cases represent 100% valid transitions coverage",
            "c) The given test cases represent 50% all states coverage",
            "d) The given test cases represent the minimum number of test cases needed to achieve 100% valid transitions coverage"],
        correctAnswer: "b) The given test cases represent 100% valid transitions coverage",
      },
      {//29
        question: (
          <div>
            Given the following User Story: 'As a bank teller, I would like to be able to view all of my customer's bank transactions on the screen, so I can answer his/her questions'.<br />
            Which of the following can be considered as relevant acceptance test cases when following the acceptance test-driven development approach?<br />
            i. Login as a bank teller, get the customer's account balance for all open accounts<br />
            ii. Login as a bank teller, enter a customer account ID, get his transactions history on the screen<br />
            iii. Login as a bank teller, request customer account ID by using name abbreviations, and get his transaction history on screen<br />
            iv. Login as a bank teller, enter a customer IBAN (international bank account number), get his transaction history on screen<br />
            v. Login as a bank teller, enter a customer account ID, get the transaction history in less than 3 seconds on the screen
          </div>
        ),
        options: [
            "a) i, ii, iv",
            "b) i, iii, iv",
            "c) ii, iv, v",
            "d) ii, iii, iv"],
        correctAnswer: "d) ii, iii, iv",
      },
      {//30
        question: "Which of the following activities would a tester do during release planning?",
        options: [
            "a) Participate in the detailed risk analysis of the user stories",
            "b) Help break down user stories into smaller and more detailed tasks",
            "c) Estimate testing efforts for all testing tasks",
            "d) Participate in project and quality risk analyses"],
        correctAnswer: "d) Participate in project and quality risk analyses",
      },
      {//31
        question: "Which of the following CORRECTLY describes a key purpose of a test plan?",
        options: [
            "a) To list the stakeholders associates with a test project",
            "b) To outline the product and project risks identified with the test object",
            "c) To anticipate the approach needed to achieve the test objectives",
            "d) To document the detailed test execution schedule"],
        correctAnswer: "c) To anticipate the approach needed to achieve the test objectives",
      },
      {//32
        question: "Which of the following demonstrates effective use of the testing quadrants?",
        options: [
            "a) When communicating test ideas, the tester can refer to the matching test quadrant, so that the rest of the team will better understand the purpose of the test",
            "b) The tester can use the types of tests descirbed in the testing quadrants as a coverage metric; the more tests covered from each quadrant, the higher the test coverage",
            "c) The team should pick a number of tests expected from each quadrant, and the tester should design and execute those tests to ensure all levels and types of tests have been executed",
            "d) The tester can use the testing quadrants during risk analysis with the lower-level quadrants representing lower risk to customer"],
        correctAnswer: "a) When communicating test ideas, the tester can refer to the matching test quadrant, so that the rest of the team will better understand the purpose of the test",
      },
      {//33
        question: "Which of the following lists contains only typical exit criteria from testing?",
        options: [
            "a) Reliability measures, test coverage, planned tests executed, number of unresolved defects, outstanding risks",
            "b) Reliability measures, test coverage, degree of tester's independence, estimated defect density",
            "c) Reliability measures, test coverage, test budget, availability of test environment, time to market, regression tests automated",
            "d) Time to market, remaining defects, tester qualification, availability of testable use cases, test coverage, smoke tests have passed"],
        correctAnswer: "a) Reliability measures, test coverage, planned tests executed, number of unresolved defects, outstanding risks",
      },
      {//34
        question: "Which of the following is NOT included in a test progress report?",
        options: [
            "a) Definition of pass/fail criteria and ojbectives of testing",
            "b) Deviations from the test approach",
            "c) Measurements of actual progress against schedule",
            "d) New and changed risks"],
        correctAnswer: "a) Definition of pass/fail criteria and ojbectives of testing",
      },
      {//35
        question: "Which of the following statements about how configuration management supports testing is CORRECT?",
        options: [
            "a) A test plan is not a configurable item",
            "b) A configuration item is only baselined on projects that follow a sequential development lifecycle",
            "c) Baselined configurations that are approved for testing can only be changed through formal change control",
            "d) All identified docuements and software items are referenced ambiguously in test documentation"],
        correctAnswer: "c) Baselined configurations that are approved for testing can only be changed through formal change control",
      },
      {//36
        question: (
          <div>
            Given the following user story: 'As the president, any data I upload should not be viewable by any other users of the system'.<br />
            During the first poker planning sessions, the following story points were given based on risk, effort, complexity, and proper extent of testing:<br />
            Customers: 5<br />
            Developers: 5<br />
            Testers: 20<br />
            What is the best outcome following this planning round?
          </div>
        ),
        options: [
            "a) The estimate is 5 points. Becuase the customers' and developers' size estimates match, the team can be confident that this estimate is good and should move onto the next user story",
            "b) The team should hold a conversation to understand why the testers felt this user story was significantly more work. Another round of the planning poker session should occur following the discussion",
            "c) The estimate is 5 points. Because the customer owns the system in the end, the customers' estimates should be taken as correct when there is a difference in opinion",
            "d) The poker planning session should continue until all estimated story points are an exact match between customers, developers, and testers"],
        correctAnswer: "b) The team should hold a conversation to understand why the testers felt this user story was significantly more work. Another round of the planning poker session should occur following the discussion",
      },
      {//37
        question: "The following table shows the test cases with their business priority (smaller number indicates a higher priority), requirement coverage and the requirement's associated risk level. The test approach is to prioritise the test cases using coverage-based prioritisation. Which of the following test execution sequences CORRECTLY represents the prioritisation approach?",
        options: [
            "a) TC1-TC2-TC3-TC4-TC5-TC6",
            "b) TC1-TC4-TC2-TC3-TC5-TC6",
            "c) TC5-TC3-TC6-TC1-TC2-TC4",
            "d) TC6-TC5-TC3-TC2-TC4-TC1"],
        correctAnswer: "c) TC5-TC3-TC6-TC1-TC2-TC4",
      },
      {//38
        question: (
          <div>
            You are testing a new version of software for a coffee machine. The machine can prepare different types of coffee based on four categories. i.e., coffee size, sugar, milk, and syrup.<br />
            The criteria are as follows:<br />
            - Coffee size (small, medium, large)<br />
            - Sugar (none, 1 unit, 2 units, 3 units, 4 units)<br />
            - Milk (yes or no)<br />
            - Coffee flavour syrup (no syrup, caramel, hazelnut, vanilla)<br />
            Now you are writing a new defect report with the following information:<br />
            - Title: Low coffee temperature.<br />
            - Short summary: When you select coffee with milk, the temperature for preparing coffee is too long and the temperature of the beverage is too low (less than 40 degrees Celsius).<br />
            - Expected result: The temperature of coffee should be standard (about 75 degrees Celsius).<br />
            - Degree of risk: Medium<br />
            - Priority: Normal<br />
            - Status: New<br />
            What information valuable to developers was omitted in the above defect report?
          </div>
        ),
        options: [
            "a) The actual test results",
            "b) Identification of the tested software version",
            "c) Potentional impact of the fix on other features",
            "d) Ideas for improving the test case"],
        correctAnswer: "b) Identification of the tested software version",
      },
      {//39
        question: "Which test activity do static analysis tools support?",
        options: [
            "a) Test management",
            "b) Test analysis",
            "c) Static testing",
            "d) Performance testing"],
        correctAnswer: "c) Static testing",
      },
      {//40
        question: "Which of the following statements CORRECTLY identifies a potential risk of test automation?",
        options: [
            "a) Increased time is available for manual test design",
            "b) Using manual testing when a tool is more appropriate",
            "c) Regulatory requirements may prohibit the use of tools",
            "d) Platform and the tool are compatible"],
        correctAnswer: "c) Regulatory requirements may prohibit the use of tools",
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
            <h3>Foundational ISTQB Sample Exam 1</h3>
            <button className="start-button" onClick={this.startQuiz}>
              Start
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

            <button className="restart-button" onClick={this.restartQuiz}>
              Restart
            </button>
            <br/>

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
          </div>
        )}
      </div>
    );
  }  
}

export default Exam1;