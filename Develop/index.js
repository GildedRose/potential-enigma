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
    
        {   type: 'confirm',
            name: 'confirmCredits',
            message: 'Did any one contribute?',
                default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List third-party assets and other contributors:',
            when: ({ confirmCredits}) => confirmCredits
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
            name: 'questions',
            message: 'Where can people reach you with additional questions? (Required)',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('You must provide contact');
                    return false;
                }
            }
        },
        {   
            type: 'input',
            name: 'license',
            message: 'Please choose a license. (Required)',
            validate: licenseInput => {
                if (licenseInput){
                    return true;
                } else {
                    console.log('You need to choose a license!');
                    return false;
                }
            }
        },
    ])};

// TO-DO: function to write README file


// function to initialize program
function init() {

}

// function call to initialize program
init();

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
