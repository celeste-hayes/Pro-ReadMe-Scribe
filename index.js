// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
    //Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of this project.',
    },
    
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions on how to install the software or commands for this project.',
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how others can use this project.',
    },
    //License
    {
        type: 'list',
        name: 'license',
        message: 'Please select the applicable license for this project.',
        choices: [
            'MIT',
            'GNU GPLv3.0',
            'Apache 2.0',
            'BSD 2-Clause',
            'ISC',
            'CC0',
        ],
    },
    //Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'How can users contribute to this project.',
    },
    //Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any testing instructions for this project.',
    },
    //Questions
        //GitHub Username
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        //Email Address
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address, for any user questions?',
        }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, ' '));
        writeToFile('./templateExample/README.md', data);
    });
}

// Function call to initialize app
init();
