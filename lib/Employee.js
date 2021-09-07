// class constructor Employee parent class to extend for use
class Employee {

 // name, id, and email will apply to all classes that extend Employee
 constructor (name, id, email) {
  this.empName = name
  this.empId = id
  this.empEmail = email
 }

 // function to get name
 getName () {
  return this.empName
 }

 // function to get id
 getId () {
  return this.empId
 }

 // function to get email
 getEmail () {
  return this.empEmail
 }

 // function to get role (set to Employee)
 getRole () {
  return 'Employee'
 }

}

// module export class Employee constructor so it can be used to extend
module.exports = Employee