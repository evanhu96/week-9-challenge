

// questions to build readme
exports.questions = [
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
      default:"username",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please answer");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is the name of your GitHub repo?",
      name: "repo",
      default:'repo',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please answer");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "What is the name of this project?",
      name: "name",
      default:"name",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please answer");
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Please write a description of your project.",
      name: "description",
      default:"description",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("A valid project description is required.");
        }
        return true;
      },
    },
    {
      type: "input",
      message:
        "Please what steps are required for installation?",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Please give examples and instructions",
      name: "usage",
    },
    {
      type: "list",
      message: "Please pick a license for your project.",
      choices: [
        "GNU AGPLv3",
        "MIT License",
        "Boost Software License 1.0"
  
      ],
      name: "license",
    },
    {
      type: "input",
      message:
        "Write any tests you've made",
      name: "tests",
    },
  ];

