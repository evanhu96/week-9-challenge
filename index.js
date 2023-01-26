const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const api = require("./utils/api.js");
let questions = require('./utils/questions');
questions = questions.questions


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! ");
  });
}

const writeFileAsync = util.promisify(writeToFile);

// Main function
async function write() {
  try {
    const userData = await inquirer.prompt(questions);
    const info = await api.getUser(userData);
    console.log("Generating README...");
    const markdown = generateMarkdown(userData, info);
    await writeFileAsync("projectREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

write();
