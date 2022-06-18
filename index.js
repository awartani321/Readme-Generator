//Packages//
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// Questions for user//
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "Any installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Project usage?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What is the contribution status?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter an email",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license?",
    choices: ["MIT", "ISC", "GNUPLv3"],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

// Initialize program function//

function getPrompt() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
    const mark = generateMarkdown.generateReadme(answers);
      
      // Function to wrtie README file//

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
// Initialize program call//
getPrompt();
