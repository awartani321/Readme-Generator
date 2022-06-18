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
