function generateBadge(data) {
  license = data.license;
  //let license1 = data.license;
  switch(license) {
  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
    case `Apache License 2.0`:
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`;
    break;
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
    case `GNU General Public License (GPL)`:
      licenseBadge = `[![License](https://img.shields.io/badge/License-GNU_General_Public_2.0-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
    case `MIT license`:
      licenseBadge = `[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.mit.edu/~amini/LICENSE.md)`;
      break;
    case `Mozilla Public License 2.0`:
      licenseBadge = `[![License](https://img.shields.io/badge/License-Mozilla_Public_2.0-blue.svg)](https://www.mozilla.org/en-US/MPL/2.0/)`;
      break;
    case `The Unlicense`:
      licenseBadge = `[![License](https://img.shields.io/badge/License-The_Unlicense-blue.svg)](https://unlicense.org/)`;
      break;
    default:
      licenseBadge = "";
    }
}
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

    generateBadge(data);

  return `
  # ${data.title}    ${licenseBadge}
  # Description
  ${data.description}
  # Table of Contents
  - [Title](#${data.title})
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
  This project is covered under ${data.license}.
  # Contributing
  If you would like to contribute to this project and add ideas please reach out to ${data.contributing}
  # Tests
  ${data.tests}
  # Questions
      ## GitHub username
          ${data.username}
      ## GitHub Repository
          https://github.com/${data.username}
      ## Email address
          If you would like to contact me with additional questions I can be reached at ${data.email}.
  `;
}

module.exports = generateMarkdown;
