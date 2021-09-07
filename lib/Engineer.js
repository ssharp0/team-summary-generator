// require Employee parent class
const Employee = require('./Employee.js')

// Engineer class extends/inherit from Employee class
class Engineer extends Employee {

 // name, id, and email will apply to all classes that extend Employee, this will also have github user name
 constructor(name, id, email, githubUserName) {
  // call constructor of parent class Employee properties/methods
  super(name, id, email)
  // github user name for Engineer class extension
  this.empGithubUserName = githubUserName
 }

 // function to get github user name
 getGithub() {
  return this.empGithubUserName
 }

 // function to get role (set to Engineer from Employee)
 getRole() {
  return 'Engineer'
 }

}

// module export class Engineer constructor
module.exports = Engineer