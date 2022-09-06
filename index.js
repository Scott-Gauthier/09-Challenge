// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your Project Description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your Project Table of Contents?',
        name: 'table_of_contents',
    },
    {
        type: 'input',
        message: 'What is your Project Installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is your Project Usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is your Project License?',
        name: 'license',
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
        message: 'What is your Project Questions?',
        name: 'questions',
    },
];
// TODO: Create a function to write README file
function writeToFile() {
inquirer
.prompt(questions)
.then((data) => {
    const filename = `./files_created/${data.title.toLowerCase().replace(' ', '_')}.md`;
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
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