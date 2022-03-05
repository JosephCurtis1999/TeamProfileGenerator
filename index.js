const inquirer = require("inquirer");

// bringing in these variables from lib file paths
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');

// create the page link
const generateHTML = require('./src/generateHTML');
const teamArray = [];

// questions, prompts etc, similar to questions such in readmegenerator


