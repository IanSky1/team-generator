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

// Classes and links for individual team member files
const { Manager, managerQuestionsArr } = require('./lib/Manager.js');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer.js');
const { Intern, internQuestionsArr } = require('./lib/Intern.js');




