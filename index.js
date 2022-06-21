// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  
    // Title question
    {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  // Project desrciption question
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  //Instillation instructions question
  {
    type: "input",
    name: "installation",
    message: "Any installation instructions?",
  },
  //Project usage question
  {
    type: "input",
    name: "usage",
    message: "Project usage?",
  },
  //Contribution status question
  {
    type: "input",
    name: "contribution",
    message: "What is the contribution status?",
  },
  //Github username question
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username",
  },
  //Question for email input
  {
    type: "input",
    name: "email",
    message: "Enter an email",
  },
  //Question to pick a license
  {
    type: "list",
    name: "license",
    message: "What is the license?",
    choices: ["MIT", "ISC", "GPLv3"]
  },
];

// TODO: Create a function to initialize app

function getPrompt() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
    const mark = generateMarkdown.generateReadme(answers);
      
      // TODO: Create a function to write README file

      fs.writeFile("README.md", mark, function (err) {
        if (err) {
          console.log("Cannot save file", err);
        } else {
          console.log(
            "SUCCESSFUL: README.md file generated inside the current folder"
          );
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
// Function call to initialize app
getPrompt();
