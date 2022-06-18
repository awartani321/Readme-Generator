const inquirer = require("inquirer");
// Questions//
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type:'input',
    name:'description',
    message:'What is the description of your project?'
},
{
    type:'input',
    name:'Installation',
    message:'Any installation instructions?'
},{
    type:'input',
    name:'usage',
    message:'Project usage?'
},{
    type:'input',
    name:'contribution',
    message:'What is the contribution status?'
},
{
    type:'input',
    name:'email',
    message:'Enter an email'
},
{
    type:'input',
    name:'github',
    message:'Enter your GitHub username'
},
{
    type:'list',
    name:'license',
    message:'What is the license?',
    choices:['MIT','ISC','GNUPLv3'],
    filter(val) {
        return val.toLowerCase();
    }
},
];

// run fetch function
async function runFetch () {
    return inquirer.prompt(questions)
    .then((answers)=>{
      console.log(answers)
        return answers  
})
    .catch((error)=>{
    console.log(error)
})
}
runFetch()