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
    let licenseExplaination;
    switch(license){
      case 'MIT':
        licenseExplaination = 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.'
        break;
      case 'Apache':
        licenseExplaination = 'The Apache License is a permissive free software license written by the Apache Software Foundation (ASF). It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties. The ASF and its projects release their software products under the Apache License. The license is also used by many non-ASF projects.'
        break;
      case 'GPL':
        licenseExplaination ='The GNU General Public License (GNU GPL or simply GPL) is a series of widely used free software licenses that guarantee end users the four freedoms to run, study, share, and modify the software. The license was the first copyleft for general use and were originally written by the founder of the Free Software Foundation (FSF), Richard Stallman, for the GNU Project. The license grants the recipients of a computer program the rights of the Free Software Definition.'
        break;
      case 'BSD':
        licenseExplaination = 'BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software. This is in contrast to copyleft licenses, which have share-alike requirements. The original BSD license was used for its namesake, the Berkeley Software Distribution (BSD), a Unix-like operating system. The original version has since been revised, and its descendants are referred to as modified BSD licenses.'
        break;
      default:
        licenseExplaination = '';
    }
    let licenseBadge = renderLicenseBadge(license);
    let licenseLink = renderLicenseLink(license);
    return`* ${license}  
  * ${licenseExplaination} [click here to know more](${licenseLink})`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, license, contribution, test, github, email }) {
  let licenseContent = renderLicenseSection(license);
  let licenseBadge = renderLicenseBadge(license);
  return ` # Project: ${title}
  <img src='${licenseBadge}'> 
  
  ## Description
  *${description}*
  
  ## Content
  | Navigation  | 
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
  * git hub: [https://github.com/${github}](https://github.com/${github})
  * email: ${email}
  
  ---
  
  © professional readme file generator
  `
}

module.exports = generateMarkdown;
