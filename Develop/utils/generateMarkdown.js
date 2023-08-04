// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'AGPLv3') {
    return '![License: AGPL v3](https://img.shields.io/badge/License-AGPLv3-blue.svg)';
  } else if (license === 'Apache 2.0') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else {
    return '';
  }
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return '[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU GPLv3':
      return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Mozilla Public License 2.0':
      return '[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)';
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'MIT License':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Boost Software License 1.0':
      return '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';
    case 'The Unlicense':
      return '[The Unlicense](http://unlicense.org/)';
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    return `## License
${licenseBadge}

This project is licensed under the ${licenseLink} license.`;
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

## Description
${data.description}

## Table of Contents
${data["table of contents"]}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${licenseSection}

## Badges
${data.badges}

## Features
${data.features}

## How to Contribute
${data.contribute}

## Tests
${data.tests}`;
}

module.exports = generateMarkdown;
