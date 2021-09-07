// require Employee parent class
const Employee = require('./Employee.js')

// Intern class extends/inherit from Employee class
class Intern extends Employee {

 // name, id, and email will apply to all classes that extend Employee, this will also have school
 constructor(name, id, email, school) {
  // call constructor of parent class Employee properties/methods
  super(name, id, email)
  // school for Intern class extension
  this.empSchool = school
 }

 // function to get school
 getSchool() {
  return this.empSchool
 }

 // function to get role (set to Intern from Employee)
 getRole() {
  return 'Intern'
 }

}

// module export class Intern constructor
module.exports = Intern