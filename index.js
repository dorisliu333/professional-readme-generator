const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions=[
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this prject?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please wirte a description of this project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the installation instruction?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information of this project?',
        },
        {
            type: 'list',
            message: 'What is the license of this project?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'BSD']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What is the contributing of this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What is the test instruction of this project?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email Address',
        },
    ]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created readme file!')
    );
}

function init() { 
    inquirer
    .prompt(questions)
    .then((answers) => {
        const content = generateMarkdown(answers);
        writeToFile('test.md',content)
    });
}

init();
