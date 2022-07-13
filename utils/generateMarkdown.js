// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `https://img.shields.io/badge/license-%7B${license}%7D-blue.svg`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://en.wikipedia.org/wiki/${license}_License`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    let licenseBadge = renderLicenseBadge(license);
    let licenseLink = renderLicenseLink(license);
    return`
    * ${license} <img src=${licenseBadge}>
    * [click here to know more](#${licenseLink})`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, license, contribution, test, github, email }) {
  let licenseContent = renderLicenseSection(license);
  return `# Project: ${title}

  ## Description
  *${description}*
  
  ## Content
  | Project Content  | 
  | ---------------- |
  | [1. Installation Instruction](#Installation-Instrucrion) | 
  | [2. Usage](#Usage)                           | 
  | [3. License](#License)                       | 
  | [4. Contribution](#Contribution)             | 
  | [5. Test Instruction](#Test-Instruction)     | 
  | [6. Question](#Question)                     | 
  
  ## Installation Instrucrion
  * ${installation}
  
  ## Usage
  * ${usage}
  
  ## License
  ${licenseContent}

  ## Contribution
  * ${contribution}
  
  ## Test Instruction
  * ${test}
  
  ## Question
  ### contact
  * git hub: [https://github.com/+${github}]('https://github.com/+${github}')
  * email: ${email}
  
  ---
  
  © Chujun Liu
  `
}

module.exports = generateMarkdown;
