const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: ADD CHECKS TO MAKE SURE AT LEAST ONE CHARACTER WAS SUBMITTED TO NOT ALLOW EMPTY SUBMITS
const questions = [
    {
        type: "input",
        message: "What is the title of your project:",
        name: "title"
    },
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log("README was generated successfully!")
    )
}

function init() {
    inquirer
        .prompt(questions)
            .then((data) => writeToFile("./dist/README.md", data))
}

// Function call to initialize app
init();
