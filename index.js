const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter a brief description of the project:",
        name: "description"
    },
    {
        type: "input",
        message: "Explain how users can install your project:",
        name: "installation"
    },
    {
        type: "input",
        message: "Explain how users can use your project:",
        name: "usage"
    },
    {
        type: "list",
        message: "Which license do you want for your project:",
        choices: ["MIT", "Apache", "ISC"],
        name: "license"
    },
    {
        type: "input",
        message: "Explain how users can contribute to your project:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Explain the tests used when building this project:",
        name: "tests"
    },
    {
        type: "input",
        message: "Explain how users ask you questions about the project:",
        name: "questions"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
