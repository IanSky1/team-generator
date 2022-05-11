// This is the link for the HTML generator
const generateHTML = require('./src/generateHTML');

// profiles for different team members
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// link for importing node modules for DTS
const inquirer = require("inquirer");

// Array for team members
const team = [];

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee",
    },
]




