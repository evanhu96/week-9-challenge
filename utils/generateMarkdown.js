function generateMark(data, information) {
  // Table of Contents
  let contents = `## Table of Contents`;

  if (data.installation !== "") {
    contents += `
  * [Installation](#installation)`;
  }

  if (data.usage !== "") {
    contents += `
  * [Usage](#usage)`;
  }

  if (data.contributing !== "") {
    contents += `
  * [Contributing](#contributing)`;
  }

  if (data.tests !== "") {
    contents += `
  * [Tests](#tests)`;
  }

  // Generate markdown
  let writeUp = `# ${data.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)
  
  
  
  ## Description 
  
  
  ${data.description}
  `;

  writeUp += contents;

  writeUp += `
  * [License](#license)`;

  if (data.installation !== "") {
    writeUp += `
  
  ## Installation
  
  
  ${data.installation}`;
  }

  if (data.usage !== "") {
    writeUp += `
  
  ## Usage 
  
  
  ${data.usage}`;
  }

  if (data.contributing !== "") {
    writeUp += `
  
  ## Contributing
  
  
  ${data.contributing}`;
  }


  if (data.tests !== "") {
    writeUp += `
  
  ## Tests
  
  
  ${data.tests}`;
  }


  writeUp += `
  
  ## License
  
  ${data.license}
  `;

  let next = `
  ---
  
  ## Questions?
  <img src="${information.avatar_url}" alt="${information.login}" width="40%" />
  
 
  GitHub: [@${information.login}](${information.url})
  `;

  // For null email
  if (information.email !== null) {
    next += `
  Email: ${information.email}
  `;
  }

  writeUp += next;

  return writeUp;
}

module.exports = generateMark;
