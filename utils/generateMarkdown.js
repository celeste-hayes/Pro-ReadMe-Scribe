// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU GPLv3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD 2-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (license === 'CC0') { 
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)';
  } else {
    return ""; // If there is no license, return an empty string
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'none') {
    return '\n* [License](#license)\n';
  }
  return ""; // If there is no license, return an empty string
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
  This project is licensed under the ${license} license.`;
    }
    return ""; // If there is no license, return an empty string
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  

  return ` # ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact Information](#contact-information)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Contact Information
  * GitHub: ${data.username}
  * If you have any questions, contact me at ${data.email}.

`;
}

module.exports = generateMarkdown;
