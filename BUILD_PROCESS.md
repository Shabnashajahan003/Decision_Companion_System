## BUILD PROCESS

### How I Started
* The project started with the goal of building a simple web-based system that helps users make better decisions by comparing multiple options using structured criteria.

  My first steps were:
* Researching how decision-making models work.
* Learning about the weighted scoring method.
* Planning a simple web application structure.
* Deciding to use HTML, CSS, and JavaScript for the frontend.
* Choosing Node.js and Express.js for the backend.
* Selecting MongoDB as the database.
  
  The focus at this stage was functionality first, then improvement later.
  
### How My Thinking Evolved
Initially, the system only compared options using simple values.
However, this approach was not accurate for real-world decision making.
Then my thinking evolved in the following way:
* Start with a simple decision comparison.
* Add criteria and weights.
* Implement weighted score calculation.
* Normalize the scores to make fair comparisons.
* Store decisions in the database.
* Create a dashboard to manage decisions.
* Improve UI design and user experience.
* Add edit option for update decisions.
  
 Gradually, the project changed from a simple idea to a complete decision companion system.

 ### Alternative Approaches Considered
 While designing the system, I evaluated multiple possible methods.
#### Method 1: Simple Score Comparison
* Users assign scores and the highest total wins.
* Problem:This method ignores the importance of criteria.
* Decision:Not suitable for real decision making.

#### Method 2: Average Score Model
* Each option gets an average score.
* Problem:Important criteria and less important criteria are treated equally.
* Decision:Rejected because it reduces accuracy.

#### Method 3: Weighted Decision Model (Selected Approach)
* Each criterion has:Importance weight and Score per option
* Final score calculation:
* Weighted Score = Score × Weight
* Reason for choosing this method:
 Widely used in decision systems,
 Produces better results
### Refactoring Decisions
While developing the project, I made several improvements to the code structure.
Refactoring steps included:
* Simplifying the calculation logic.
* Organizing backend routes properly.
* Separating frontend and backend folders.
* Cleaning unnecessary code.
* Improving input handling.
  
 ### Mistakes and Corrections
During development, some issues occurred which helped improve the system.

#### Issue 1: Incorrect Weight Distribution
* Problem:Weights sometimes exceeded 1.
* Solution:Added validation to ensure:
   Total Weight = 1

#### Issue 2: Incorrect Score Comparison
* Problem:Scores were not normalized properly.
* Solution:Implemented normalization formula

#### Issue 3: Recalculation Errors
* Problem:Results did not update correctly when inputs changed.
* Solution:Rebuilt the recalculation logic.

#### Issue 4: Data Storage Issues
* Problem:Data was not saving correctly in MongoDB.
* Solution:Fixed schema and API integration.
### What Changed During Development and Why
* Several improvements were made to improve the quality of the system.
  
  Major changes:
* Added authentication system
* Added decision history
* Added edit option for update decisions
* Improved UI layout
* Added icons and design improvements
* Implemented dynamic input generation
* Improved error handling
* Added input validation
