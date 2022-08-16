// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown.js");
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
        message: 'What does the user need to install in order to run your application?',
        name: 'Installation',
    },
        {
        type: 'input',
        message: 'What does the usage of this application consist in?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'License',
        choices: [
            "APACHE 2.0",
            "BSD 3",
            "MIT",
            "None",
        ], 
    },
    {
        type: 'input',
        message: 'Are there other developers who contributed in your application? If so, please state their name(s).',
        name: "Contributing",
    },
    {
        type: 'input',
        message: 'What are the commands needed to test your application?',
        name:'Tests',
    },
    {
        type: 'input',
        message: 'Include any screenshots of your application that you would like to share: (1/3)',
        name: 'Screenshot1'
    },
    {
        type: 'input',
        message: 'Include any screenshots of your application that you would like to share: (2/3)',
        name: 'Screenshot2'
    },
    {
        type: 'input',
        message: 'Include any screenshots of your application that you would like to share: (3/3)',
        name: 'Screenshot3',
    },
    {
        type: 'input',
        message: 'Would you like to include the link of a video to demonstrate the functionality of your application? If you do so, state it here:',
        name: 'Video'
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

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions)
    .then(function(data) {
        console.log(data)
        let readMe = generateMarkdown(data)
        console.log(readMe)
        fs.writeFile('README.md', readMe, function () {
            console.log("README file successfully created")
        })
    })
};


// Function call to initialize app
init();
