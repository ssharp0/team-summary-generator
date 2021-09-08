// require path and file system
const path = require('path')
const fs = require('fs')

// path for html templates
const templatesDir = path.resolve(__dirname, '../templates')

// render employees
const render = employees => {
  const html = []

  // html push the employee role (manager, engineer, or intern) and render manager, engineer, intern
  html.push(employees
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => renderManager(manager))
  )
  html.push(employees
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => renderEngineer(engineer))
  )
  html.push(employees
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => renderIntern(intern))
  )

  return renderMain(html.join(''))
}

// function to render manager by replacing the template placeholders with data from class constructors from user input
const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'manager.html'), 'utf8')
  template = replacePlaceholders(template, 'name', manager.getName())
  template = replacePlaceholders(template, 'role', manager.getRole())
  template = replacePlaceholders(template, 'email', manager.getEmail())
  template = replacePlaceholders(template, 'id', manager.getId())
  template = replacePlaceholders(template, 'officeNumber', manager.getOfficeNum())
  return template
}

// function to render engineer by replacing the template placeholders with data from class constructors from user input
const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'engineer.html'), 'utf8')
  template = replacePlaceholders(template, 'name', engineer.getName())
  template = replacePlaceholders(template, 'role', engineer.getRole())
  template = replacePlaceholders(template, 'email', engineer.getEmail())
  template = replacePlaceholders(template, 'id', engineer.getId())
  template = replacePlaceholders(template, 'github', engineer.getGithub())
  return template
}

// function to render intern by replacing the template placeholders with data from class constructors from user input
const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'intern.html'), 'utf8')
  template = replacePlaceholders(template, 'name', intern.getName())
  template = replacePlaceholders(template, 'role', intern.getRole())
  template = replacePlaceholders(template, 'email', intern.getEmail())
  template = replacePlaceholders(template, 'id', intern.getId())
  template = replacePlaceholders(template, 'school', intern.getSchool())
  return template
}

// render the main team page html
const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, 'main.html'), 'utf8')
  return replacePlaceholders(template, 'team', html)
}

// function to replace template placeholders
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp('{{ ' + placeholder + ' }}', 'gm')
  return template.replace(pattern, value)
}

// export render
module.exports = render
