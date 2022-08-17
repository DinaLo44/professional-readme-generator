// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "APACHE 2.0") {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }else if(license === "BSD 3") {
    return'![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  }else if(license === "MIT") {
    return'![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }else{
    return " ";
  };
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === "APACHE 2.0") {
  return "https://opensource.org/licenses/Apache-2.0"
}else if (license === "BSD 3"){
  return "https://opensource.org/licenses/BSD-3-Clause"
}else if (license === "MIT"){
  return "https://opensource.org/licenses/MIT"
}else{
  return " ";
};
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  
  ${renderLicenseBadge(data.License)} 

  http://github.com/${data.Username}/${data.Title}

  # Description
  ${data.Description}
  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Screenshots](#screenshots)
  - [Video](#video)
  - [Questions](#questions)
  # Installation
  In order to run this application the user needs to install ${data.Installation}
  # Usage
  The usage of this application consists in ${data.Usage}
  # License 
  The license used for this application is ${data.License}
  ${renderLicenseLink(data.License)}
  # Contributing
  Additional contributors involved in this application:  ${data.Contributing}
  # Tests
  The following commands are needed in order to test this application: ${data.Tests}
  # Screenshots
  ![screenshot1](${data.Screenshot1})
  ![screenshot2](${data.Screenshot2})
  ![screenshot3](${data.Screenshot3})
  # Video 
  Here is a demo video of the application: ${data.Video}
  # Questions
  If you desire to address any inquiries, suggestions or repository related matters, feel free to contact me through my GitHub username: ${data.Username} or through my email address: ${data.Email}
  `;
}

module.exports = generateMarkdown;
