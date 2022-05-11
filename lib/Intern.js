const Employee = require('./Employee')

const internQuestionsArr = [
    { 
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },

    {
        type: 'input',
        name: 'id',
        message: "What is the intern's Id?"
    },

    {
        type: 'input',
        name: 'email',
        message: "What is the intern's Email?"
    },


]

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school
    }
}