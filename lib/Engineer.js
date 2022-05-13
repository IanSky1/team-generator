const Employee = require('./Employee');

class Engineer extends Employee  {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }
    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }

engineerQuestionsArr = [
    {
        type: "input",
        name: "github",
        message: "What is the Github username for the engineer?",
        validate: github => {
            if (github) {
              return true;
            } else {
              console.log("You must enter a GitHub username before continuing");
              return false;
            }
          }
    }
] 
 
};

module.exports = [Engineer, engineerQuestionsArr];