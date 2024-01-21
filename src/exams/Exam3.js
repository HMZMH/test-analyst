import React, { Component } from 'react';
import './Exams.css';

class Exam3 extends Component {
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
  question: (
            <div>
              Which of the following options shows an example of test activities that contribute to success?
            </div>
            ),
            options: [
              "a) Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products",
              "b) Testers try not to disturb the developers while coding, so that the developers write better code",
              "c) Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing",
              "d) Certified testers will design much better test cases than non-certified testers"
            ],
            correctAnswer: "c) Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing",
          },
          {//2
            question: (
              <div>
                Which of the following statements describe a valid test objective?
              </div>
            ),
            options: [
              "a) To prove that there are no unfixed defects in the system under test",
              "b) To prove that there will be no failures after the implementation of the system into production",
              "c) To reduce the risk level of the test object and to build confidence in the quality level",
              "d) To verify that there are no untested combinations of inputs"
            ],
            correctAnswer: "c) To reduce the risk level of the test object and to build confidence in the quality level",
          },
          {//3
            question: (
              <div>
                You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?
              </div>
            ),
            options: [
              "a) Tests wear out",
              "b) Absence-of-errors fallacy",
              "c) Defects cluster together",
              "d) Exhaustive testing is impossible"
            ],
            correctAnswer: "a) Tests wear out",
          },
          {//4
            question: (
              <div>
                You work in a team that develops a mobile application for food ordering. In the current iteration, the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?
              </div>
            ),
            options: [
              "a) Estimating that testing the integration with the payment service will take 8 person-days",
              "b) Deciding that the team should test if it is possible to properly share payment between many users",
              "c) Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid",
              "d) Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
            ],
            correctAnswer: "b) Deciding that the team should test if it is possible to properly share payment between many users",
          },
          {//5
            question: (
              <div>
                Which of the following factors (i-v) have SIGNIFICANT influence on the test process? i) The SDLC, ii) The number of defects detected in previous projects, iii) The identified product risks, iv) New regulatory requirements forcing, v) The number of certified testers in the organization
              </div>
            ),
            options: [
              "a) i, ii have significant influence; iii, iv, v have not",
              "b) i, iii, iv have significant influence; ii, v have not",
              "c) ii, iv, v have significant influence; i, iii have not",
              "d) iii, v have significant influence; i, ii, iv have not ",
            ],
            correctAnswer: "b) i, iii, iv have significant influence; ii, v have not",
          },


                  {//6
            question: (
              <div>
                Which TWO of the following tasks belong MAINLY to a testing role?
              </div>
            ),
            options: [
              "a) Configure test environments",
              "b) Maintain the product backlog",
              "c) Design solutions to new requirements",
              "d) Create the test plan",
              "e) Report on achieved coverage"
            ],
            correctAnswer: "a) Configure test environments",
          },

          {//7
            question: (
              <div>
                Which of the following skills (i-v) are the MOST important skills of a tester? i) Having domain knowledge, ii) Creating a product vision, iii) Being a good team player, iv) Planning and organizing the work of the team, v) Critical thinking
              </div>
            ),
            options: [
              "a) ii and iv are important; i, iii and v are not",
              "b) i, iii and v are important; ii and iv are not",
              "c) i, ii and v are important; iii and iv are not",
              "d) iii and iv are important; i, ii and v are not ",
            ],
            correctAnswer: "b) i, iii and v are important; ii and iv are not",
          },

          {//8
            question: (
              <div>
                How is the whole team approach present in the interactions between testers and business representatives?
              </div>
            ),
            options: [
              "a) Business representatives decide on test automation approaches",
              "b) Testers help business representatives to define test strategy",
              "c) Business representatives are not part of the whole team approach",
              "d) Testers help business representatives to create suitable acceptance tests"
            ],
            correctAnswer: "d) Testers help business representatives to create suitable acceptance tests",
          },

          {//9
            question: (
              <div>
                Consider the following rule: 'for every SDLC activity there is a corresponding test activity'. In which SDLC models does this rule hold?
              </div>
            ),
            options: [
              "a) Only in sequential SDLC models",
              "b) Only in iterative SDLC models",
              "c) Only in iterative and incremental SDLC models",
              "d) In sequential, incremental, and iterative SDLC models"
            ],
            correctAnswer: "d) In sequential, incremental, and iterative SDLC models",
          },

          {//10
            question: (
              <div>
                Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?
              </div>
            ),
            options: [
              "a) In ATDD, acceptance criteria are typically created based on the given/when/then format",
              "b) In ATDD, test cases are mainly created at component testing and are code-oriented",
              "c) In ATDD, tests are created, based on acceptance criteria to drive the development of the related software",
              "d) In ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
            ],
            correctAnswer: "c) In ATDD, tests are created, based on acceptance criteria to drive the development of the related software",
          },


                  {//11
            question: (
              <div>
                Which of the following is NOT an example of the shift left approach?
              </div>
            ),
            options: [
              "a) Reviewing the user requirements before they are formally accepted by the stakeholders",
              "b) Writing a component test before the corresponding code is written",
              "c) Executing a performance efficiency test for a component during component testing",
              "d) Writing a test script before setting up the configuration management process"
            ],
            correctAnswer: "d) Writing a test script before setting up the configuration management process",
          },

          {//12
            question: (
              <div>
                Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?
              </div>
            ),
            options: [
              "a) Retrospectives are very popular these days and clients would appreciate it if we added them to our processes",
              "b) Organizing retrospectives will save the organization money because end-user representatives do not provide immediate feedback about the product",
              "c) Process weaknesses identified during the retrospective can be analyzed and serve as a to-do list for the organization’s continuous process improvement program",
              "d) Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
            ],
            correctAnswer: "c) Process weaknesses identified during the retrospective can be analyzed and serve as a to-do list for the organization’s continuous process improvement program",
          },

          {//13
            question: (
              <div>
                Which types of failures (1-4) fit which test levels (A-D) BEST? A) Failures in system behavior as it deviates from the user’s business needs, B) Failures in communication between components, C) Failures in logic in a module, D) Failures in not correctly implemented business rules
              </div>
            ),
            options: [
              "a) 1D, 2B, 3A, 4C",
              "b) 1D, 2B, 3C, 4A",
              "c) 1B, 2A, 3D, 4C",
              "d) 1C, 2B, 3A, 4D"
            ],
            correctAnswer: "a) 1D, 2B, 3A, 4C",
          },

          {//14
            question: (
              <div>
                You are testing a user story with three acceptance criteria: AC1, AC2, and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows:
                <br />
                Execution 1 Execution 2 Execution 3
                <br />
                TC1 (1) Failed (4) Passed (7) Passed
                <br />
                TC2 (2) Passed (5) Failed (8) Passed
                <br />
                TC3 (3) Failed (6) Failed (9) Passed
                <br />
                Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available.
                <br />
                Which of the above tests are executed as regression tests?
              </div>
            ),
            options: [
              "a) Only 4, 7, 8, 9",
              "b) Only 5, 7",
              "c) Only 4, 6, 8, 9",
              "d) Only 5, 6"
            ],
            correctAnswer: "b) Only 5, 7",
          },

          {//15
            question: (
              <div>
                Which of the following is NOT a benefit of static testing?
              </div>
            ),
            options: [
              "a) Having less expensive defect management due to the ease of detecting defects later in the SDLC",
              "b) Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
              "c) Finding coding defects that might not have been found by only performing dynamic testing",
              "d) Detecting gaps and inconsistencies in requirements"
            ],
            correctAnswer: "a) Having less expensive defect management due to the ease of detecting defects later in the SDLC",
          },


                    {//16
            question: (
              <div>
                Which of the following is a benefit of early and frequent feedback?
              </div>
            ),
            options: [
              "a) It improves the test process for future projects",
              "b) It forces customers to prioritize their requirements based on agreed risks",
              "c) It is the only way to measure the quality of changes",
              "d) It helps avoid requirements misunderstandings"
            ],
            correctAnswer: "d) It helps avoid requirements misunderstandings",
          },

          {//17
            question: (
              <div>
                The reviews being used in your organization have the following attributes:
                <br />
                ⦁ There is the role of a scribe
                <br />
                ⦁ The main purpose is to evaluate quality
                <br />
                ⦁ The meeting is led by the author of the work product
                <br />
                ⦁ There is individual preparation
                <br />
                ⦁ A review report is produced
                <br />
                Which of the following review types is MOST likely being used?
              </div>
            ),
            options: [
              "a) Informal review",
              "b) Walkthrough",
              "c) Technical review",
              "d) Inspection"
            ],
            correctAnswer: "b) Walkthrough",
          },

          {//18
            question: (
              <div>
                Which of these statements is NOT a factor that contributes to successful reviews?
              </div>
            ),
            options: [
              "a) Participants should dedicate adequate time for the review",
              "b) Splitting large work products into small parts to make the required effort less intense",
              "c) Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants",
              "d) Failures found should be acknowledged, appreciated, and handled objectively"
            ],
            correctAnswer: "d) Failures found should be acknowledged, appreciated, and handled objectively",
          },

          {//19
            question: (
              <div>
                Which of the following is a characteristic of experience-based test techniques?
              </div>
            ),
            options: [
              "a) Test cases are created based on detailed design information",
              "b) Items tested within the interface code section are used to measure coverage",
              "c) The techniques heavily rely on the tester’s knowledge of the software and the business domain",
              "d) The test cases are used to identify deviations from the requirements"
            ],
            correctAnswer: "c) The techniques heavily rely on the tester’s knowledge of the software and the business domain",
          },

          {//20
            question: (
              <div>
                You are testing a simplified apartment search form which has only two search criteria:
                <br />
                ⦁ floor (with three possible options: ground floor; first floor; second or higher floor)
                <br />
                ⦁ garden type (with three possible options: no garden; small garden; large garden)
                <br />
                Only apartments on the ground floor may have gardens. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule.
                <br />
                Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests.
                <br />
                What is the minimal number of test cases to achieve 100% EP coverage?
              </div>
            ),
            options: [
              "a) 3",
              "b) 4",
              "c) 5",
              "d) 6"
            ],
            correctAnswer: "b) 4",
          },  
            {//21
            question: (
              <div>
                You are testing a system that calculates the final course grade for a given student. The final grade is assigned based on the final result, according to the following rules:
                <br />
                ⦁ 0 – 50 points: failed
                <br />
                ⦁ 51 – 60 points: fair
                <br />
                ⦁ 61 – 70 points: satisfactory
                <br />
                ⦁ 71 – 80 points: good
                <br />
                ⦁ 81 – 90 points: very good
                <br />
                ⦁ 91 – 100 points: excellent
                <br />
                You have prepared the following set of test cases:
                <br />
                Final result Final grade
                <br />
                TC1 91 excellent
                <br />
                TC2 50 failed
                <br />
                TC3 81 very good
                <br />
                TC4 60 fair
                <br />
                TC5 70 satisfactory
                <br />
                TC6 80 good
                <br />
                What is the 2-value Boundary Value Analysis (BVA) coverage for the final result that is achieved with the existing test cases?
              </div>
            ),
            options: [
              "a) 50%",
              "b) 60%",
              "c) 33.3%",
              "d) 100%"
            ],
            correctAnswer: "a) 50%",
          },

          {//22
            question: (
              <div>
                Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it.
                <br />
                The implemented features are as follows:
                <br />
                ⦁ Anyone can rent a bicycle, but members receive a 20% discount
                <br />
                ⦁ However, if the return deadline is missed, the discount is no longer available
                <br />
                ⦁ After 15 rentals, members get a gift: a T-Shirt
                <br />
                Decision table describing the implemented features looks as follows:
                <br />
                Conditions R1 R2 R3 R4 R5 R6 R7 R8
                <br />
                Being a member T T T T F F F F
                <br />
                Missed deadline T F T F T F F T
                <br />
                15th rental F F T T F F T T
                <br />
                Actions
                <br />
                20% discount X X
                <br />
                Gift T-Shirt X X X
                <br />
                Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?
              </div>
            ),
            options: [
              "a) R4",
              "b) R2",
              "c) R6",
              "d) R8"
            ],
            correctAnswer: "d) R8",
          },

          {//23
            question: (
              <div>
                You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state.
                <br />
                What is the MINIMAL number of test cases to achieve valid transitions coverage?
              </div>
            ),
            options: [
              "a) 4",
              "b) 2",
              "c) 7",
              "d) 3"
            ],
            correctAnswer: "d) 3",
          },

          {//24
            question: (
              <div>
                Your test suite achieved 100% statement coverage. What is the consequence of this fact?
              </div>
            ),
            options: [
              "a) Each instruction in the code that contains a defect has been executed at least once",
              "b) Any test suite containing more test cases than your test suite will also achieve 100% statement coverage",
              "c) Each path in the code has been executed at least once",
              "d) Every combination of input values has been tested at least once"
            ],
            correctAnswer: "a) Each instruction in the code that contains a defect has been executed at least once",
          },

          {//25
            question: (
              <div>
                Which of the following is NOT true for white-box testing?
              </div>
            ),
            options: [
              "a) During white-box testing the entire software implementation is considered",
              "b) White-box coverage metrics can help identify additional tests to increase code coverage",
              "c) White-box test techniques can be used in static testing",
              "d) White-box testing can help identify gaps in requirements implementation"
            ],
            correctAnswer: "d) White-box testing can help identify gaps in requirements implementation",
          },


                    {//26
            question: "Which of the following BEST describes the concept behind error guessing?",
            options: [
              "a) Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
              "b) Error guessing involves using your personal experience of development and the errors you made as a developer",
              "c) Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it",
              "d) Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
            ],
            correctAnswer: "a) Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
          },

          {//27
            question: "In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented. Which test technique fits BEST in this situation?",
            options: [
              "a) Checklist-based testing",
              "b) Error guessing",
              "c) Exploratory testing",
              "d) Branch testing"
            ],
            correctAnswer: "c) Exploratory testing",
          },

          {//28
            question: "Which of the following BEST describes the way acceptance criteria can be documented?",
            options: [
              "a) Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story",
              "b) Using the given/when/then format to describe an example test condition related to a given user story",
              "c) Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others",
              "d) Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
            ],
            correctAnswer: "b) Using the given/when/then format to describe an example test condition related to a given user story",
          },

          {//29
            question: (
              <div>
                Consider the following user story:
                <br/><br/>
                As an Editor I want to review content before it is published so that I can assure the grammar is correct and its acceptance criteria:
                <br />
                ⦁ The user can log in to the content management system with "Editor" role
                <br />
                ⦁ The editor can view existing content pages
                <br />
                ⦁ The editor can edit the page content
                <br />
                ⦁ The editor can add markup comments
                <br />
                ⦁ The editor can save changes
                <br />
                ⦁ The editor can reassign to the "content owner" role to make updates
                <br /><br/>
                Which of the following is the BEST example of an ATDD test for this user story?
              </div>
            ),
            options: [
              "a) Test if the editor can save the document after deleting the page content",
              "b) Test if the content owner can log in and make updates to the content",
              "c) Test if the editor can schedule the edited content for publication",
              "d) Test if the editor can reassign to another editor to make updates"
            ],
            correctAnswer: "a) Test if the editor can save the document after deleting the page content",
          },

          {//30
            question: "How do testers add value to iteration and release planning?",
            options: [
              "a) Testers determine the priority of the user stories to be developed",
              "b) Testers focus only on the functional aspects of the system to be tested",
              "c) Testers participate in the detailed risk identification and risk assessment of user stories",
              "d) Testers guarantee the release of high-quality software through early test design during the release planning"
            ],
            correctAnswer: "c) Testers participate in the detailed risk identification and risk assessment of user stories",
          },

                    
                    {//31
            question: (
              <div>
                Which TWO of the following options are the exit criteria for testing a system?
              </div>
            ),
            options: [
              "a) Test environment readiness",
              "b) The ability to log in to the test object by the tester",
              "c) Estimated defect density is reached",
              "d) Requirements are translated into given/when/then format",
              "e) Regression tests are automated",
            ],
            correctAnswer: "c) Estimated defect density is reached",
          },

          {//32
            question: (
              <div>
                Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made:
                <br />
                ⦁ most optimistic estimation: 2 person-hours
                <br />
                ⦁ most likely estimation: 11 person-hours
                <br />
                ⦁ most pessimistic estimation: 14 person-hours
                <br />
                What is the final estimate?
              </div>
            ),
            options: [
              "a) 9 person-hours",
              "b) 14 person-hours",
              "c) 11 person-hours",
              "d) 10 person-hours",
            ],
            correctAnswer: "d) 10 person-hours",
          },

          {//33
            question: (
              <div>
                You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies:
                <br />
                Test case number Test condition covered Priority Logical dependency
                <br />
                TC 001 Select type of food 3 none
                <br />
                TC 002 Select restaurant 2 TC 001
                <br />
                TC 003 Get direction 1 TC 002
                <br />
                TC 004 Call restaurant 2 TC 002
                <br />
                TC 005 Make reservation 3 TC 002
                <br />
                Which of the following test cases should be executed as the third one?
              </div>
            ),
            options: [
              "a) TC 003",
              "b) TC 005",
              "c) TC 002",
              "d) TC 001",
            ],
            correctAnswer: "a) TC 003",
          },

          {//34
            question: (
              <div>
                Consider the following test categories (1-4) and agile testing quadrants (A-D):
                <br />
                ⦁ Usability testing
                <br />
                ⦁ Component testing
                <br />
                ⦁ Functional testing
                <br />
                ⦁ Reliability testing
                <br />
                ⦁ Agile testing quadrant Q1: technology facing, supporting the development team
                <br />
                ⦁ Agile testing quadrant Q2: business facing, supporting the development team
                <br />
                ⦁ Agile testing quadrant Q3: business facing, critique the product
                <br />
                ⦁ Agile testing quadrant Q4: technology facing, critique the product
                <br />
                How do the following test categories map onto the agile testing quadrants?
              </div>
            ),
            options: [
              "a) 1C, 2A, 3B, 4D",
              "b) 1D, 2A, 3C, 4B",
              "c) 1C, 2B, 3D, 4A",
              "d) 1D, 2B, 3C, 4A",
            ],
            correctAnswer: "a) 1C, 2A, 3B, 4D",
          },

          {//35
            question: (
              <div>
                During a risk analysis the following risk was identified and assessed:
                <br />
                ⦁ Risk: Response time is too long to generate a report
                <br />
                ⦁ Risk likelihood: medium; risk impact: high
                <br />
                ⦁ Response to risk:
                <br />
                ⦁ an independent test team performs performance testing during system testing
                <br />
                ⦁ a selected sample of end users performs alpha and beta acceptance testing before the release
                <br />
                What measure is proposed to be taken in response to this analyzed risk?
              </div>
            ),
            options: [
              "a) Risk acceptance",
              "b) Contingency plan",
              "c) Risk mitigation",
              "d) Risk transfer",
            ],
            correctAnswer: "c) Risk mitigation",
          },
                    
            {//36
            question: (
              <div>
                Which tool can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?
              </div>
            ),
            options: [
              "a) Acceptance criteria",
              "b) Defect report",
              "c) Test completion report",
              "d) Burndown chart",
            ],
            correctAnswer: "d) Burndown chart",
          },

          {//37
            question: (
              <div>
                You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?
              </div>
            ),
            options: [
              "a) Traceability management",
              "b) Maintenance testing",
              "c) Configuration management",
              "d) Requirements engineering",
            ],
            correctAnswer: "c) Configuration management",
          },

          {//38
            question: (
              <div>
                You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible.
                <br />
                Application hangs up
                <br />
                2022-May-03 – John Doe – Rejected
                <br />
                The application hangs up after entering “Test input: $ä” in the Name field on the new user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried with other test admin accounts, same issue. No error message received; log (see attached) contains fatal error notification. Based on the test case TC-1305, the application should accept the provided input and create the user. Please fix with high priority, this feature is related to REQ-0012, which is a critical new business requirement.
                <br />
                What critical information is MISSING from this test report that would have been useful for the developers?
              </div>
            ),
            options: [
              "a) Expected result and actual result",
              "b) References and defect status",
              "c) Test environment and test item",
              "d) Priority and severity",
            ],
            correctAnswer: "c) Test environment and test item",
          },

          {//39
            question: (
              <div>
                Which test activity does a data preparation tool support?
              </div>
            ),
            options: [
              "a) Test monitoring and control",
              "b) Test analysis and design",
              "c) Test implementation and execution",
              "d) Test completion",
            ],
            correctAnswer: "c) Test implementation and execution",
          },

          {//40
            question: (
              <div>
                Which item correctly identifies a potential risk of performing test automation?
              </div>
            ),
            options: [
              "a) It may introduce unknown regressions in production",
              "b) Sufficient efforts to maintain testware may not be properly allocated",
              "c) Testing tools and associated testware may not be sufficiently relied upon",
              "d) It may reduce the time allocated for manual testing",
            ],
            correctAnswer: "b) Sufficient efforts to maintain testware may not be properly allocated",
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
            <h3>Foundational ISTQB Sample Exam 3</h3>
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

export default Exam3;