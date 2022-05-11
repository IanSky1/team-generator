// This is the link for the HTML generator
const generateHTML = require('./src/generateHTML');
const writeFile = require('./src/write-file')
const inquirer = require('inquirer')

// Links to files of the profiles for different team members
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer.js');
const { Intern, internQuestionsArr } = require('./lib/Intern.js');
const { Manager, managerQuestionsArr } = require('./lib/Manager.js');

// Array for team members
let employeesArr = [];

const validateInput = (userInput) => {
    if(userInput === '') {
        return ('You must answer before continuing')
    } else {
        return true;
    }
};

// Array that holds the general questions for each employee
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the Id for this employee?"
    },

    {
        type: "input",
        name: "email",
        message: "What is the email for this employee?"
    },

    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern", "Manager"]
    }
]

init();




