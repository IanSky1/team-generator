const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber

    }
    getRole() {
        return 'Manager'
    }

managerQuestionsArr = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: officeNumber => {
            if (officeNumber) {
              return true;
            } else {
              console.log("You must enter an office number");
              return false;
            }
          }
    }
]
}

module.exports = { Manager, managerQuestionsArr };