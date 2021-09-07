// require Employee parent class
const Employee = require('./Employee.js')

// Manager class extends/inherit from Employee class
class Manager extends Employee {

 // name, id, and email will apply to all classes that extend Employee, this will also have office number
 constructor(name, id, email, officeNumber) {
  // call constructor of parent class Employee properties/methods
  super(name, id, email)
  // office number for Manager class extension
  this.empOfficeNum = officeNumber
 }

 // function to get office number
 getOfficeNum() {
  return this.empOfficeNum
 }

 // function to get role (set to Manager from Employee)
 getRole() {
  return 'Manager'
 }

}

// module export class Manager constructor
module.exports = Manager