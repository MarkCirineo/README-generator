// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "![MIT license badge](https://img.shields.io/badge/license-MIT-brightgreen)"
    } else if (license === "Apache") {
        return "![Apache license badge](https://img.shields.io/badge/license-Apache-brightgreen)"
    } else if (license === "ISC") {
        return "![ISC license badge](https://img.shields.io/badge/license-ISC-brightgreen)"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How To Contribute](#how-to-contibute)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
This project uses the ${data.license} license.

${renderLicenseBadge(data.license)}
## How to Contribute
${data.contributing}
## Tests
${data.tests}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
