// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license!="None"){
    return `![license](https://img.shields.io/badge/license-${license}-green.svg)`  
  }
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license!="None"){
  return "* [license](#license)"
}
  return `` 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!="None"){
  return `## License

  This project uses the ${license} license.`
  }
  return ""
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  return `# ${data.projectName}


## Description 

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(data.license)}


## Installation

${data.installation}

## Usage 

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
