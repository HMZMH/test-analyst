import './Sections.css'; // Import the stylesheet

function Section0 () {
    return(
        <div className='section'>

            <h1>Fundamentals of Testing</h1>

            <h2>1.1 What is Testing?</h2>

            <p>Malfunctioning software causes:</p>
            <ul>
            <li>loss of money</li>
            <li>loss of time</li>
            <li>damaged business reputation</li>
            <li>injury or death</li>
            </ul>

            <p>Software testing helps:</p>
            <ul>
            <li>assess software quality</li>
            <li>reduce the risk of software failure</li>
            </ul>

            <p>Software testing is a set of activities to:</p>
            <ul>
            <li>discover defects</li>
            <li>evaluate the quality of software artifacts (test objects)</li>
            </ul>

            <p>Categories of software testing include:</p>
            <ul>
            <li>Dynamic testing:
                <ul>
                <li>Software is executed</li>
                </ul>
            </li>
            <li>Functional testing</li>
            <li>Non-functional testing</li>
            <li>Static testing:
                <ul>
                <li>Reviews</li>
                <li>Walkthroughs</li>
                <li>Inspections</li>
                <li>Analysis tools</li>
                </ul>
            </li>
            </ul>

            <h2>1.1.1 Test Objectives</h2>

            <p>The typical test objectives are:</p>
            <ul>
            <li>Evaluating work products (such as requirements, user stories, designs, and code)</li>
            <li>Triggering failures to find defects</li>
            <li>Ensuring required coverage of a test object</li>
            <li>Reducing the level of risk of inadequate software quality</li>
            <li>Verifying whether specified requirements have been fulfilled</li>
            <li>Verifying that a test object complies with contractual, legal, and regulatory requirements</li>
            <li>Providing information to stakeholders for making informed decisions</li>
            <li>Building confidence in the quality of the test object</li>
            <li>Validating whether the test object is complete and works as expected by the stakeholders</li>
            </ul>

            <p>Objectives of testing can vary, depending upon the context, with factors including:</p>
            <ul>
            <li>the work product being tested</li>
            <li>the test level</li>
            <li>risks</li>
            <li>the SDLC</li>
            <li>factors related to the business context:
                <ul>
                <li>corporate structure</li>
                <li>competitive considerations</li>
                <li>time to market</li>
                </ul>
            </li>
            </ul>

            <h2>1.1.2 Testing and Debugging</h2>

            <p>Testing differs from debugging.</p>
            <p>Debugging is concerned with:</p>
            <ul>
            <li>finding causes of the failure</li>
            <li>analyzing the causes</li>
            <li>eliminating the causes</li>
            </ul>

            <p>The typical debugging process involves:</p>
            <ol>
            <li>Reproduction of a failure</li>
            <li>Diagnosis (finding the root cause)</li>
            <li>Fixing the cause</li>
            </ol>

            <p>After debugging:</p>
            <ul>
            <li>confirmation tests check that the fixes have resolved the problem</li>
            <li>regression testing checks that the fixes are not causing failures elsewhere</li>
            </ul>

            <h2>1.2 Why is Testing Necessary?</h2>

            <h3>1.2.1 Testing’s Contributions to Success</h3>

            <p>Testing provides:</p>
            <ul>
            <li>a cost-effective way of detecting defects</li>
            <li>a means of directly evaluating the quality of a test object at various SDLC stages</li>
            <li>users with indirect representation on the development project</li>
            </ul>

            <p>Testing contributes to:</p>
            <ul>
            <li>meeting contractual or legal requirements</li>
            <li>complying with regulatory standards</li>
            <li>producing higher quality test objects</li>
            <li>decision-making for moving to the next stage of the SDLC</li>
            <li>ensuring users’ needs are considered throughout the development lifecycle</li>
            </ul>

            <h3>1.2.2 Testing and Quality Assurance (QA)</h3>

            <p>Testing differs from quality assurance (QA). Testing is a form of quality control (QC).</p>
            <p>QC is:</p>
            <ul>
            <li>product-oriented</li>
            <li>a corrective approach</li>
            </ul>

            <p>QC consists of formal methods, such as:</p>
            <ul>
            <li>testing</li>
            <li>model checking</li>
            <li>proof of correctness</li>
            <li>simulating</li>
            <li>prototyping</li>
            </ul>

            <p>QA is:</p>
            <ul>
            <li>process-oriented</li>
            <li>a preventive approach</li>
            <li>focused on the implementation and improvement of processes</li>
            <li>built on the basis that a good process, when followed correctly, generates a good product</li>
            <li>applicable to both the development and testing processes</li>
            <li>the responsibility of everyone on a project</li>
            </ul>

            <p>Test results are used by:</p>
            <ul>
            <li>QC to fix defects</li>
            <li>QA to provide feedback on how well development and test processes are performing</li>
            </ul>

            <h3>1.2.3 Errors, Defects and Failures and Root Causes</h3>

            <p>Humans make errors (mistakes).</p>
            <p>Errors cause defects (faults or bugs).</p>
            <p>Defects cause failures.</p>

            <p>Other causes of failures can be environmental:</p>
            <ul>
            <li>radiation</li>
            <li>electromagnetic fields disrupting firmware</li>
            </ul>

            <p>Humans make errors due to:</p>
            <ul>
            <li>time pressure</li>
            <li>complexity of work products</li>
            <li>processes</li>
            <li>infrastructure</li>
            <li>interactions</li>
            <li>tiredness</li>
            <li>inadequate training</li>
            </ul>

            <p>Defects can be found in:</p>
            <ul>
            <li>Documentation:
                <ul>
                <li>requirements specification</li>
                <li>test scripts</li>
                <li>source code</li>
                </ul>
            </li>
            <li>Supporting artefacts:
                <ul>
                <li>build files</li>
                </ul>
            </li>
            </ul>

            <p>Some defects will always result in a failure if executed, while others will only result in a failure in specific circumstances, and some may never result in a failure.</p>

            <p>A root cause analysis is typically performed when:</p>
            <ul>
            <li>a failure occurs</li>
            <li>a defect is identified</li>
            </ul>

            <h2>1.3 Testing Principles</h2>

            <p>Seven testing principles offering general guidelines applicable to all testing:</p>
            <ol>
            <li>Testing shows the presence, not the absence of defects.</li>
            <li>Exhaustive testing is impossible.</li>
            <li>Early testing saves time and money.</li>
            <li>Defects cluster together.</li>
            <li>Tests wear out.</li>
            <li>Testing is context-dependent.</li>
            <li>Absence-of-defects fallacy.</li>
            </ol>

            <h2>1.4 Test Activities, Testware and Test Roles</h2>

            <p>A test process:</p>
            <ul>
            <li>is a common set of test activities that help to achieve test objectives</li>
            <li>can be tailored to a given situation based on various factors</li>
            <li>activities are decided on during test planning</li>
            <li>activities are not implemented in a strict order</li>
            <li>activities can run parallel to one another or iteratively</li>
            </ul>

            <h3>1.4.1 Test Activities and Tasks</h3>

            <p>A test process typically consists of:</p>
            <ol>
            <li>Test planning:
                <ul>
                <li>defining the test objectives</li>
                <li>selecting an approach that best achieves the objectives within any constraints</li>
                </ul>
            </li>
            <li>Test monitoring and control:
                <ul>
                <li>an ongoing checking of all test activities</li>
                <li>a comparison of actual progress against the plan</li>
                <li>taking the actions necessary to meet the objectives of testing</li>
                </ul>
            </li>
            <li>Test analysis:
                <ul>
                <li>analysing the test basis to identify testable features</li>
                <li>defining and prioritising associated test conditions, with the related risks and risk levels</li>
                <li>evaluating the test basis and the test objects to:
                    <ul>
                    <li>identify defects they may contain</li>
                    <li>assess their testability</li>
                    <li>answering the question “what to test?”, in terms of measurable coverage criteria</li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>Test design:
                <ul>
                <li>elaborating the test conditions into test cases and other testware (e.g., test charters)</li>
                <li>identifying coverage items, which serve as a guide to specify test case inputs</li>
                <li>defining the test data requirements</li>
                <li>designing the test environment</li>
                <li>identifying any other required infrastructure and tools</li>
                <li>answering the question “how to test?”</li>
                </ul>
            </li>
            <li>Test implementation:
                <ul>
                <li>creating or acquiring the testware necessary for test execution (e.g., test data)</li>
                <li>organising test cases into test procedures and assembling them into test suites</li>
                <li>creating manual and automated test scripts</li>
                <li>prioritising and arranging test procedures within a test execution schedule</li>
                <li>building the test environment and verifying that it is set up correctly</li>
                </ul>
            </li>
            <li>Test execution:
                <ul>
                <li>running tests in accordance with the test execution schedule (test runs)</li>
                <li>comparing actual test results with expected results</li>
                <li>logging test results</li>
                <li>analysing anomalies to identify their likely causes</li>
                <li>reporting the anomalies based on the failures observed</li>
                </ul>
            </li>
            <li>Test completion:
                <ul>
                <li>occurring at project milestones (e.g., release, end of iteration, test level completion)</li>
                <li>creating change requests or product backlog items for unresolved defects</li>
                <li>identifying any testware that may be useful in the future:
                    <ul>
                    <li>archiving it</li>
                    <li>handing it over to the appropriate teams</li>
                    </ul>
                </li>
                <li>shutting down the test environment to an agreed state</li>
                <li>analysing test activities to identify:
                    <ul>
                    <li>lessons learned</li>
                    <li>improvements for future iterations, releases, or projects</li>
                    </ul>
                </li>
                <li>Creating a test report to communicate to the stakeholders</li>
                </ul>
            </li>
            </ol>

            <h3>1.4.2 Test Process in Context</h3>

            <p>Contextual factors affecting how testing is undertaken:</p>
            <ul>
            <li>Stakeholder:
                <ul>
                <li>Needs</li>
                <li>Expectations</li>
                <li>Requirements</li>
                <li>Willingness to cooperate</li>
                </ul>
            </li>
            <li>Team members:
                <ul>
                <li>Skills</li>
                <li>Knowledge</li>
                <li>Level of experience</li>
                <li>Availability</li>
                <li>Training needs</li>
                </ul>
            </li>
            <li>Business domain:
                <ul>
                <li>Criticality of the test object</li>
                <li>Identified risks</li>
                <li>Market needs</li>
                <li>Specific legal regulations</li>
                </ul>
            </li>
            <li>Technical factors:
                <ul>
                <li>Type of software</li>
                <li>Product architecture</li>
                <li>Technology used</li>
                </ul>
            </li>
            <li>Project constraints:
                <ul>
                <li>Scope</li>
                <li>Time</li>
                <li>Budget</li>
                <li>Resources</li>
                </ul>
            </li>
            <li>Organisational factors:
                <ul>
                <li>Organisational structure</li>
                <li>Existing policies</li>
                <li>Practices used</li>
                </ul>
            </li>
            <li>Software development lifecycle:
                <ul>
                <li>Engineering practices</li>
                <li>Development methods</li>
                </ul>
            </li>
            <li>Tools:
                <ul>
                <li>Availability</li>
                <li>Usability</li>
                <li>Compliance</li>
                </ul>
            </li>
            </ul>

            <h3>1.4.3 Testware</h3>

            <p>Testware are work products:</p>
            <ul>
            <li>Created as output from the test activities</li>
            <li>Which can significantly vary between organisations</li>
            <li>Reliant upon proper configuration management to ensure their consistency and integrity</li>
            </ul>

            <p>Test planning work products include:</p>
            <ul>
            <li>Test plan</li>
            <li>Test schedule</li>
            <li>Risk register</li>
            <li>Entry criteria</li>
            <li>Exit criteria</li>
            </ul>

            <p>Test monitoring and control work products include:</p>
            <ul>
            <li>Test progress reports</li>
            <li>Documentation of control directives</li>
            <li>Risk information</li>
            </ul>

            <p>Test analysis work products include:</p>
            <ul>
            <li>(Prioritised) test conditions (e.g., acceptance criteria)</li>
            <li>Defect reports regarding defects in the test basis (if not fixed directly)</li>
            </ul>

            <p>Test design work products include:</p>
            <ul>
            <li>(Prioritised) test cases</li>
            <li>Test charters</li>
            <li>Coverage items</li>
            <li>Test data requirements</li>
            <li>Test environment requirements</li>
            </ul>

            <p>Test implementation work products include:</p>
            <ul>
            <li>Test procedures</li>
            <li>Automated test scripts</li>
            <li>Test suites</li>
            <li>Test data</li>
            <li>Test execution schedule</li>
            <li>Test environment elements:
                <ul>
                <li>Stubs</li>
                <li>Drivers</li>
                <li>Simulators</li>
                <li>Service virtualizations</li>
                </ul>
            </li>
            </ul>

            <p>Test execution work products include:</p>
            <ul>
            <li>Test logs</li>
            <li>Defect reports</li>
            </ul>

            <p>Test completion work products include:</p>
            <ul>
            <li>Test completion report</li>
            <li>Action items for improvement of subsequent projects or iterations</li>
            <li>Documented lessons learned</li>
            <li>Change requests (e.g., as product backlog items)</li>
            </ul>

            <h3>1.4.4 Traceability between the Test Basis and Testware</h3>

            <p>For effective monitoring and control, it is important to establish and maintain traceability throughout:</p>
            <ul>
            <li>The test process</li>
            <li>Between the test basis elements</li>
            <li>Testware associated with these elements:
                <ul>
                <li>Test conditions</li>
                <li>Risks</li>
                <li>Test cases</li>
                <li>Test results</li>
                <li>Detected defects</li>
                </ul>
            </li>
            </ul>

            <p>Accurate traceability:</p>
            <ul>
            <li>Supports coverage evaluation</li>
            <li>Allows coverage criteria to function as key performance indicators</li>
            <li>Helps drive the activities that can show the extent to which test objectives have been achieved</li>
            </ul>

            <p>Traceability of:</p>
            <ul>
            <li>Test cases, to requirements, can verify that the requirements are covered by test cases</li>
            <li>Test results, to risks, can be used to evaluate the level of residual risk in a test object</li>
            </ul>

            <p>In addition to evaluating coverage, good traceability:</p>
            <ul>
            <li>Makes it possible to determine the impact of changes</li>
            <li>Facilitates test audits</li>
            <li>Helps meet IT governance criteria</li>
            <li>Makes test progress and completion reports more easily understandable</li>
            <li>Assists in communicating the technical aspects of testing to stakeholders</li>
            <li>Provides information to assess product quality, process capability, and project progress against business goals</li>
            </ul>

            <h3>1.4.5 Roles in Testing</h3>

            <p>In this syllabus, two principal roles in testing are covered:</p>
            <ul>
            <li>A test management role</li>
            <li>A testing role</li>
            </ul>

            <p>The activities and tasks assigned to these two roles depend on factors such as:</p>
            <ul>
            <li>Project context</li>
            <li>Product context</li>
            <li>Personnel’s skills</li>
            <li>The organization</li>
            </ul>

            <p>The test management role takes overall responsibility for:</p>
            <ul>
            <li>The test process</li>
            <li>Test team</li>
            <li>Leadership of the test activities</li>
            </ul>

            <p>The test management role is mainly focused on the activities of:</p>
            <ul>
            <li>Test planning</li>
            <li>Test monitoring</li>
            <li>Test control</li>
            <li>Test completion</li>
            </ul>

            <p>In Agile software development:</p>
            <ul>
            <li>Some test management tasks may be handled by the Agile team</li>
            <li>Tasks that span multiple teams may be performed by outside test managers</li>
            <li>The testing role takes overall responsibility for the engineering (technical) aspect of testing</li>
            </ul>

            <p>The testing role is mainly focused on the activities of:</p>
            <ul>
            <li>Test analysis</li>
            <li>Test design</li>
            <li>Test implementation</li>
            <li>Test execution</li>
            </ul>

            <p>Different people may take on these roles at different times. The test management role can be performed by a:</p>
            <ul>
            <li>Team leader</li>
            <li>Test manager</li>
            <li>Development manager</li>
            <li>Tester who simultaneously remains a tester</li>
            <li>And others</li>
            </ul>

            <h3>1.5 Essential Skills and Good Practices</h3>

            <p>Good testers should be:</p>
            <ul>
            <li>Effective team players</li>
            <li>Able to perform testing on different levels of test independence</li>
            </ul>

            <h4>1.5.1 Generic Skills Required for Testing</h4>

            <p>The following generic skills are relevant for testers:</p>
            <ul>
            <li>Testing knowledge</li>
            <li>Thoroughness</li>
            <li>Carefulness</li>
            <li>Curiosity</li>
            <li>Attention to details</li>
            <li>Being methodical</li>
            <li>Good communication skills</li>
            <li>Active listening</li>
            <li>Being a team player</li>
            <li>Analytical thinking</li>
            <li>Critical thinking</li>
            <li>Creativity</li>
            <li>Technical knowledge</li>
            <li>Domain knowledge</li>
            </ul>

            <h4>1.5.2 Whole Team Approach</h4>

            <p>The ‘whole team’ comes from Extreme Programming and in it:</p>
            <ul>
            <li>Appropriately-skilled team members can perform any task</li>
            <li>Everyone is responsible for quality</li>
            <li>Team members share the same workspace (physical or virtual)</li>
            <li>Team dynamics are improved</li>
            <li>Communication and collaboration are enhanced</li>
            <li>Synergy is created</li>
            <li>Various skill-sets within the team are leveraged</li>
            </ul>

            <p>Testers work closely with:</p>
            <ul>
            <li>Business representatives to:
                <ul>
                <li>Create suitable acceptance tests</li>
                </ul>
            </li>
            <li>Developers to:
                <ul>
                <li>Agree on the test strategy</li>
                <li>Decide on test automation approaches</li>
                </ul>
            </li>
            </ul>

            <p>In safety-critical situations:</p>
            <ul>
            <li>The ‘whole team’ approach may be unsuitable</li>
            <li>A high level of test independence may be needed</li>
            </ul>

            <h4>1.5.3 Independence of Testing</h4>

            <p>Work products can be tested by:</p>
            <ul>
            <li>Their author (no independence)</li>
            <li>The author's peers from the same team (some independence)</li>
            <li>Testers from outside the author's team but within the organisation (high independence)</li>
            <li>Testers from outside the organisation (very high independence)</li>
            </ul>

            <p>An example of a project with multiple levels of independence:</p>
            <ul>
            <li>Developers performing component and component integration testing</li>
            <li>Test team performing system and system integration testing</li>
            <li>Business representatives performing acceptance testing</li>
            </ul>

            <p>Benefits of independence of testing include:</p>
            <ul>
            <li>Testers being more likely to identify different failures to developers, due to differing:
                <ul>
                <li>Backgrounds</li>
                <li>Technical perspectives</li>
                <li>Cognitive biases</li>
                </ul>
            </li>
            <li>Independent testers being able to verify, challenge, or disprove assumptions made by stakeholders</li>
            </ul>

            <p>Drawbacks of independence of testing may include:</p>
            <ul>
            <li>Independent testers being isolated from the development team, which may lead to:
                <ul>
                <li>A lack of collaboration</li>
                <li>Communication problems</li>
                <li>An adversarial relationship</li>
                </ul>
            </li>
            <li>Developers losing a sense of responsibility for quality</li>
            <li>Independent testers being seen as a bottleneck or being blamed for delays in release</li>
            </ul>

        </div>
    );
}

export default Section0;