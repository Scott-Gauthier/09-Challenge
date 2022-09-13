// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'title',
        default: "Missing Project Title",
    },
    {
        type: 'input',
        message: 'What is your Project Description?',
        name: 'description',
        default: "Project Description",
    },
    // {
    //     type: 'input',
    //     message: 'What is your Project Table of Contents?',
    //     name: 'table_of_contents',
    // },
    {
        type: 'input',
        message: 'What is your Project Installation?',
        name: 'installation',
        default: "Project Installation",
    },
    {
        type: 'input',
        message: 'What is your Project Usage?',
        name: 'usage',
        default: "Project Usage",
    },
    {
        type: 'list',
        message: 'What is your Project License?',
        name: 'license',
        default: "Project License",
        choices: [
            'Apache License 2.0',
            'GNU General Public License (GPL)',
            'MIT license',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        message: 'What is your Project Contributing?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What is your Project Tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
    },
];
// TODO: Create a function to write README file
function writeToFile() {
inquirer.prompt(questions)
.then((data) => {
    const filename = `./files_created/${data.title.toLowerCase().replace(' ', '_')}.md`;
    fs.writeFile(filename, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });
};
// TODO: Create a function to initialize app
function init() {
    writeToFile();
};

// Function call to initialize app
init();