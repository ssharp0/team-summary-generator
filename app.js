// require classes
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// require inquirer
const { prompt } = require("inquirer");

// require path and file system write file
const { writeFile } = require("fs");

// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// require html renderer to render html with responses
const render = require("./lib/htmlRenderer.js");

const team = []

// function to build manager using class constructor
const buildManager = ({ name, id, email }) => {
 // inqurier prompt to ask for office number
 prompt({
  type: 'input',
  name: 'officeNumber',
  message: `What is the manager's office number?`,
   //  if answer is not blank then return the response
  validate: ans => {
    if (ans !== '') {
      return true
    } else {
      return 'Please enter a office number (cannot be blank)'
    }
  }
 })
 // then push new manager to the team org (name, id, email, response for officeNumber)
  .then(({ officeNumber }) => {
   team.push(new Manager(name, id, email, officeNumber))
   console.log('---------------');
   console.log('Manager built!');
   console.log('---------------');
   // return to main menu
   mainMenu()
  })
}

// function to build engineer using class constructor
const buildEngineer = ({ name, id, email }) => {
 // inqurier prompt to ask for githubUserName
 prompt({
  type: 'input',
  name: 'githubUserName',
  message: `What is the engineer's github user name?`,
   //  if answer is not blank then return the response
  validate: ans => {
    if (ans !== '') {
      return true
    } else {
      return 'Please enter a github user name (cannot be blank)'
    }
  }
 })
 // then push new engineer to the team org (name, id, email, response for githubUserName)
   .then(({ githubUserName }) => {
   team.push(new Engineer(name, id, email, githubUserName))
   console.log('---------------');
   console.log('Engineer built!');
   console.log('---------------');
   // return to main menu
   mainMenu()
  })
}

// function to build intern using class constructor
const buildIntern = ({ name, id, email }) => {
 // inqurier prompt to ask for school
 prompt({
  type: 'input',
  name: 'school',
  message: `What is the intern's school?`,
   //  if answer is not blank then return the response
  validate: ans => {
    if (ans !== '') {
      return true
    } else {
      return 'Please enter a name (cannot be blank)'
    }
  }
 })
 // then push new intern to the team org (name, id, email, response for school)
  .then(({ school }) => {
   team.push(new Intern(name, id, email, school))
   console.log('---------------');
   console.log('Intern built!');
   console.log('---------------');
   // return to main menu
   mainMenu()
  })
}

// function to build employee
const buildEmployee = () => {
 // inquirer prompt to ask series of questions to create employee
 prompt([
  // ask for employee type
  {
   type: 'list',
   name: 'employeeType',
   message: 'What type of employee would you like to add to the team?',
   choices: ['Manager', 'Engineer', 'Intern']
  },
  // ask for employee name
  {
   type: 'input',
   name: 'name',
   message: `What is the employee's name?`,
  //  if answer is not blank then return the response
   validate: ans => {
     if (ans !== '') {
       return true
     } else {
       return 'Please enter a name (cannot be blank)'
     }
   }
  },
  // ask for employee id
  {
   type: 'input',
   name: 'id',
   message: `What is the employee's id?`,
  //  if answer is not blank then return the response
   validate: ans => {
     if (ans !== '' ) {
       return true
     } else {
       return 'Please enter a ID number (cannot be blank)'
     }
   }
  },
  // ask for employee email
  {
   type: 'input',
   name: 'email',
   message: `What is the employee's email?`,
  //  if answer is not blank then return the response
   validate: ans => {
     if (ans !== '') {
       return true
     } else {
       return 'Please enter a email (cannot be blank)'
     }
   }
  },  
 ])

  // then on response for employee type switch (to include the details on the employee)...
  .then(({ employeeType, ...employee}) => {
   switch(employeeType) {
    // if 'Manager' was selected in prompt then call function to build manager with responses
    case 'Manager':
     console.log('--------------------');
     console.log(`Building Manager...`)
     console.log(`--------------------`)
     buildManager(employee)
     break

    // if 'Engineer' was selected in prompt then call function to build engineer with responses
    case 'Engineer':
     console.log('--------------------');
     console.log(`Building Engineer...`)
     console.log(`--------------------`)
     buildEngineer(employee)
     break

    // if 'Intern' was selected in prompt then call function to build intern with responses
    case 'Intern':
     console.log('--------------------');
     console.log(`Building Intern...`)
     console.log(`--------------------`)
     buildIntern(employee)
     break 
   }
  })
}

// function for the main menu using inquirer
const mainMenu = () => {
 // inqurier prompt to ask user what action to take (create employee or finish)
 prompt({
  type: 'list',
  name: 'userAction',
  message: 'What action would you like to take?',
  choices: ['Create a new employee', 'Finish and Exit']
 })

  // then on response for the user action switch
  .then(({ userAction }) => {
   switch (userAction) {
    // if 'Create a new employee' was chosen then call function to build employee
    case 'Create a new employee':
     console.log('------------------------');
     console.log('Building new employee...');
     console.log('------------------------');
     buildEmployee()
     break
    
     // if 'Finish and Exit' was chosen then write to the team.html file in output folder and render the employee team org
     case 'Finish and Exit':
      writeFile('./output/team.html', render(team), err => {
       if (err) { console.log(err)}
       // log team built after rendered
       console.log('-----------');
       console.log('Team built! team.html updated in output folder');
       console.log('-----------');
      })
      break
   }
  })
}

// call the main menu function to get started when in terminal node app.js is run
console.log('Welcome to the team summary generator. Please answer following prompts to render team information!');
mainMenu()
