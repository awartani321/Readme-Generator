
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT"){
        return "*[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
   
        if (license === "ISC"){
            return "*[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        }
        if (license === "GPLv3"){
            return "*[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        }  
        if (license === "PERL"){
            return "*[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";


        }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
class generateMarkdown {
   static generateReadme(answers) {
       return `
# ${answers.title}
         
## Table of Content
-  [Project description](#description)
-  [Usage](#usage)
-  [Contributing](#contribution)
-  [Questions](#questions)
-  [License](#license)
        
## Description
${answers.description}
         
## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contributing}

## Questions
${answers.email}
${answers.github}

## License
${answers.license}


`;
  }
}

module.exports = generateMarkdown;
