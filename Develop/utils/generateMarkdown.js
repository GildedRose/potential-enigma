// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
            ${data.description}
          ## Table of Contents
            * [Installation](#installation)
            * [Usage](#usage)
            * [License](#license)
            * [Contribute](#contribute)
            * [Tests](#test)
            * [Questions](#questions)
            * [Credits](#credits)
          ## Installation 
            ${data.installation}
          ## Usage
            ${data.usage}

`;
}

module.exports = generateMarkdown;
