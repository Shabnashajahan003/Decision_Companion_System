## DECISION COMPANION SYSTEM

A web-based decision support system that helps users evaluate multiple options using structured criteria and weighted scoring.
The system provides a logical approach to decision-making and identifies the most suitable option based on calculated results.
#### PROJECT DEMO VIDEO

https://github.com/user-attachments/assets/5a23e76a-428c-493e-83cf-82dcbcfa5d45

 

#### UNDERSTANDING OF THE PROBLEM
Many people struggle to make decisions when multiple options and factors are involved. Decisions such as choosing a job, selecting a product, or planning a project often require evaluating several criteria like cost, time, quality, and risk.
The main problem is that people usually make decisions based on intuition rather than structured analysis. This can lead to confusion and poor decision outcomes.

The Decision Companion System solves this problem by providing a structured approach where it:
* Allowing users to define criteria
* Assigning importance (weights)
* Evaluating options
* Calculating a final decision score
* Suggesting the best option

#### ASSUMPTIONS
During development, the following assumptions were made:

 * Users provide numerical values for evaluation.
* Each decision includes at least two options.
* Criteria weights are provided correctly by the user.
* Total criteria weight must equal 1.
* Weights are normalized to sum to 1, and the scores for each option against each criterion are scaled appropriately to ensure fair comparison and accurate reflection of each criterion’s importance in the final decision
Each criterion follows a defined evaluation direction, where either higher values are better or lower values are better depending on the nature of the criterion
* Users may modify criteria or options after seeing results
* Decision history should be stored for later reference.

  ### WHY THE SOLUTION IS STRUCTURED THIS WAY

The system is structured using a weighted scoring approach because it provides a clear, transparent, and mathematically explainable method for multi-criteria decision-making. 
The formula
###### Total Score = ∑ (Normalized Score × Weight)
ensures that each criterion contributes proportionally to the final result based on its assigned importance.Although users typically assign weights as sum of 1.
The architecture is divided into core components to maintain separation of concerns:
##### Input Module provide interaction with the user .

##### Evaluation Engine handles all scoring, normalization, and ranking logic, ensuring the decision computation remains deterministic and testable.

##### Explanation Generator ensures transparency by clearly communicating how and why a particular ranking was produced.

##### Dynamic Update Handling guarantees that any change in inputs or weights immediately reflects in the results, satisfying the requirement that the system must not be static.

### DESIGN DECISIONS AND TRADE-OFFS

##### Decision Model Selection

I chose the Weighted Score Model because it provides a balanced way to compare options based on importance.

Trade-off:
It requires users to assign weights carefully.

##### Using MongoDB

MongoDB was selected because:

* It stores data in JSON format

* Flexible schema

* Easy integration with Node.js

Trade-off:
Requires validation to ensure structured data.

##### Dynamic Input Generation

Input fields are generated dynamically based on user input.

Benefit:
Flexible system for different decision types.

Trade-off:
Requires additional validation logic.

### EDGE CASES CONSIDERED

* Total weight not equal to 1
* Empty input fields
* Invalid numerical values
* Recalculation errors
* Missing criteria scores
* Database connection errors

### HOW TO RUN THE PROJECT

* Step 1: Clone the repository
 git clone https://github.com/Shabnashajahan003/Decision_Companion_System.git

* Step 2: Navigate to the project folder
 cd Decision_Companion_System

* Step 3: open the folder  "Decision_Companion_System" in the visual studio code
  
* Step 4:Open the terminal and navigate to backend folder
    type the following one by one:
    cd backend
    npm install
 
* Step 5:run the server 
  Type- node server.js
* Step 6: Open home.html in live server
* Step 7: Create an account and log in to access the dashboard and enter the decision details after submitting it will return the best option.
  ### WHAT IMPROVEMENT CAN BE GIVEN WHEN MORE TIME IS GIVEN
  * Add edit option in history
  * Piechart based score analysis
