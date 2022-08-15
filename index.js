// TODO: Include packages needed for this application
const utils = require('utils');
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project. What is it about?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'Table of Contents',
    },
    {
        type: 'input',
        message: 'What does the user need to install in order to run your application?',
        name: 'Installation',
    },
        {
        type: 'input',
        message: 'What is the usage of your application?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'License',
        choices: [
            "APAHE 2.0",
            "BSD 3",
            "MIT",
            "None",
        ], 
    },
    {
        type: 'input',
        message: 'Are there other develpers who contributed in your application? If so, please state their name(s).',
        name: "Contributing",
    },
    {
        type: 'input',
        message: 'How can a user test your application?',
        name:'Tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}


// TODO: Create a function to initialize app
function init() {
    
    // inquirer.prompt(questions)
    // .then(function(data) {
    //     writeToFile('README.md', generateMarkdown(data));
    //     console.log(data)
};


// Function call to initialize app
init();
