const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeFile } = require('./utils/generate-site.js');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project? (Required)',
            validate: titleInput => {
                if (titleInput){
                    return true;
                } else {
                    console.log('You need to enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need installation instructions!');
                    return false;
                }
            }
        },
        {   
            type: 'input',
            name:  'usage',
            message: 'Please provide usage instructions. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to provide usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How would you like others to contribute? (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('You must provide contribution instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Explain your testing process. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('You must provide testing instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questionsGitHub',
            message: 'Please enter your GitHub Username (Required)',
            validate: questionsGitHubInput => {
                if (questionsGitHubInput) {
                    return true;
                } else {
                    console.log('You must provide a username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'Please enter your e-mail address. (Required)',
            validate: questionsEmailInput => {
                if (questionsEmailInput) {
                    return true;
                } else {
                    console.log('You must provide an e-mail address.');
                    return false;
                }
            }
        },
        {   
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license. (Check all that apply)',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },
    ])};

questions()
    .then(portfolioData => {
        return generateMarkdown(portfolioData);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
