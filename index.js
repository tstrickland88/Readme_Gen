// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { Console } = require("console");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What Is your Projects Name?"
    }, 
    {
        type: "input",
        name: "description",
        message: "Enter decription of your Project."
    }, 
    {
        type: "input",
        name: "installation",
        message: "What Is The Installation of Your Project?"
    },   
    {
        type: "input",
        name: "usage",
        message: "is there something the user needs to know about your project?"
    },
    {
        type: "input",
        name: "credits",
        message: "Is anyone else working on the project?"
    },      
    {
        type: "list",
        name: "license",
        message: "what kind of license would you like your project to have?",
        choices:["MIT", "GPL", "Apache", "None"]
        
    }     
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(resp=>{
        console.log(resp) 
        console.log(resp.projectName)
        var mark=generateMarkdown(resp)
        fs.writeFileSync("GEN_ME.md",mark)
    })
 }

// Function call to initialize app
init();
