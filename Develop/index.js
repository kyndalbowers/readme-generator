// TODO: Include packages needed for this application
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "table of contents",
        message: "(optional) If your README is long, add a table of contents to make it easy for users to find what they need.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
        type: "input",
        name: "credits",
        message: "List any collaborators, third party assets, tutorials, source code, etc.",
    },
    {
        type: "input",
        name: "license",
        message: "Select the appropriate license for your application:",
        choices: ['AGPLv3', 'Apache 2.0'],
    },
    {
        type: "input",
        name: "badges",
        message: "(optional) Enter any badges that you would like to include."
    },
    {
        type: "input",
        name: "features",
        message: "(optional) If your project has a lot of features, list them here."
    },
    {
        type: "input",
        name: "contribute",
        message: "(optional) Specify guidelines for how others can contribute to your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "(optional) If you have tests for your application, provide examples on how to run them here.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
