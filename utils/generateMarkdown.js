// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "APACHE 2.0") {
    return('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)')
  }else if(license === "BSD 3") {
    return('[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]')
  }else if(license === "MIT") {
    return('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]')
  }else{
    return (" ");
  };
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === "APACHE 2.0") {
  return ("https://opensource.org/licenses/Apache-2.0")
}else if (license === "BSD 3"){
  return ("https://opensource.org/licenses/BSD-3-Clause")
}else if (license === "MIT"){
  return ("https://opensource.org/licenses/MIT")
}else{
  return (" ");
};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == `${data.License}`) {
  return (`${data.License}`)
  }else{
    return(" ");
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  http://github.com/${data.Github}/${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Contact Information](#contact)
  # Installation
  In order to run this application you will need the following dependencies to be installed: ${data.Installation}
  # Usage
  In order tu use this application, you will need the following: ${data.Usage}
  # License 
  The license used for this application is: ${data.License}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  # Contributing
  Addtional contributors involved in this application:  ${data.Contributing}
  # Tests
  The following commands are needed in order to test this application: ${data.Tests}
  # Questions
  If you desire to address any inquiries, suggestions or repository related matters, feel free to contact me through my GitHub account username: ${data.Username} or at
  ${data.Email}
`;
}

module.exports = generateMarkdown;
