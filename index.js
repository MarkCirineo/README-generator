const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

const confirmLength = (value) => {
    if (value.length < 1) {
        return "Please enter at least one character";
    }
    return true;
}

const confirmEmail = (value) => {
    if (value.length < 1) {
        return "Please enter at least one character";
    } else if (!value.includes("@")) {
        return "Please enter a valid email address"
    }
    return true;
}

const questions = [
    {
        type: "input",
        message: "What is the title of your project:",
        name: "title",
        validate: confirmLength
    },
    {
        type: "input",
        message: "Enter a brief description of the project:",
        name: "description",
        validate: confirmLength
    },
    {
        type: "input",
        message: "Explain how users can install your project:",
        name: "installation",
        validate: confirmLength
    },
    {
        type: "input",
        message: "Explain how users can use your project:",
        name: "usage",
        validate: confirmLength
    },
    {
        type: "list",
        message: "Which license do you want for your project:",
        choices: ["MIT", "Apache", "ISC"],
        name: "license"
    },
    {
        type: "input",
        message: "Please enter the current year:",
        name: "year",
        validate: confirmLength
    },
    {
        type: "input",
        message: "Please enter your name for the license:",
        name: "fullName",
        validate: confirmLength
    },
    {
        type: "input",
        message: "Explain how users can contribute to your project:",
        name: "contributing",
        validate: confirmLength
    },
    {
        type: "input",
        message: "Explain the tests used when building this project:",
        name: "tests",
        validate: confirmLength
    },
    {
        type: "input",
        message: "Enter your github username:",
        name: "github",
        validate: confirmLength
    },
    {
        type: "input",
        message: "Enter the email address you would like users to use to contact you:",
        name: "email",
        validate: confirmEmail
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
