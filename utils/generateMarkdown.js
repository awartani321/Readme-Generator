// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "*[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }

  if (license === "ISC") {
    return "*[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  if (license === "GPLv3") {
    return "*[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT license](https://opensource.org/licenses/MIT)";
  }
  if (license === "ISC") {
    return "[MIT license](https://choosealicense.com/licenses/isc/)";
  }
  if (license === "GPLv3") {
    return "[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else {
    return "NO LICENSE";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
class generateMarkdown {
  static generateReadme(answers) {
    return `
# ${answers.title}
${renderLicenseBadge(answers.license)}
         
## Table of Content
-  [Project description](#description)
-  [Usage](#usage)
-  [Contribution](#contribution)
-  [Questions](#questions)
-  [License](#license)
        
## Description
${answers.description}
         
## Usage
${answers.usage}

## Installation
${answers.installation}

## Contribution
${answers.contribution}

## Questions
${answers.email}
${answers.github}

## License
${answers.license}


`;
  }
}

module.exports = generateMarkdown;
