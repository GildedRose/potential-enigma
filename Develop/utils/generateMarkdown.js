const license = {'GNU AGPLv3':'[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', 
'GNU GPLv3':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 
'GNU LGPLv3': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
'Apache License 2.0':'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
'Boost Software License 1.0':'[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 
'The Unlicense':'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'};

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 

  ${license[data.license]}
  ${data.description}
  
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Tests](#test)
  * [Questions](#questions)

## Installation 
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${license[data.license]} 
  Click badge for license information.

## Contribute
  ${data.contribute}

## Tests
  ${data.test}

## Questions
  [${data.questionsGitHub}](http://github.com/${data.questionsGitHub})
  [${data.questionsEmail}](mailto:${data.questionsEmail})

`;
}

module.exports = generateMarkdown;
