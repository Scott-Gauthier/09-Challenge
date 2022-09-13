// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //create variables from users answers
    title = data.title;
    description = data.description;
    installation = data.installation;
    usage = data.usage;
    license = data.license;
    contributing = data.contributing;
    tests = data.tests;
    questions = data.questions;

    Table_of_Contents = `## **Table of Contents**
    /n [Description](#Description)

    `



  return `
  # Title
  ${data.title}
  # Description
  ${data.description}
  # Table of Contents
  - [Title](#Title)
  - [Description](#Description)
  - [Installation instructions](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  ${data.license}
  # Contributing
  ${data.contributing}
  # Tests
  ${data.tests}
  # Questions
      ## GitHub username
      ${data.username}
      ## Email address
      If you would like to contact me with additional questions I can be reached at ${data.email}.
  `;
}

module.exports = generateMarkdown;
