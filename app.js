// require classes
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// require inquirer npm
const { prompt } = require("inquirer");

// require path and file system write file
const { writeFile } = require("fs");

// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// require html renderer to render html with responses
const render = require("./lib/htmlRenderer.js");

const team = []

