// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
    //Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your program?',
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of this program.',
    },
    
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions on how to install the software or commands for this program.',
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how others can use this program.',
    },
    //License
    {
        type: 'list',
        name: 'license',
        message: 'Please select the applicable license for this program.',
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
        message: 'How can users contribute to this program.',
    },
    //Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any testing instructions you would like to for this program.',
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
            message: 'What is your email address, that users may contact, for any questions?',
        }
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README');
        writeToFile('README.md', generateMarkdown({ inquirerResponses }));
    });
}

// Function call to initialize app
init();
