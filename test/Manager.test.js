// require Employee class and Manager class
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

// jest tests below

// test to determine if a office number can be set using the Manager class constructor (name, id, email, officeNumber)
test('Can set a office number via constructor argument', () => {
  // variable for a test office number to set
  const testOfficeNum = 456;
  // create a new manager by passing through name, id, email and test office num
  const manager = new Manager('John Doe', 123, 'test@email.com', testOfficeNum);
  // expect office number to be 456
  expect(manager.empOfficeNum).toBe(testOfficeNum);
});

// test to determine if the function getRole can get the role ('Manager' set in constructor)
test('The function getRole() should return "Manager"', () => {
  // create new manager
  const manager = new Manager()
  // expect the function getRole to return 'Manager'
  expect(manager.getRole()).toBe('Manager');
});

// test to determine if the function getOfficeNum can get the office number
test('Can get a office number via function getOfficeNum() in class constructor', () => {
  // variable for test office num to set
  const testOfficeNum = 456;
  // create new manager by passing through name, id, email, office num
  const manager = new Manager('John Doe', 123, 'test@email.com', testOfficeNum);
  // expect the function getOfficeNum to return '456'
  expect(manager.getOfficeNum()).toBe(testOfficeNum);
});
