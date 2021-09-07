// require Employee (parent class)
const Employee = require('../lib/Employee.js');

// jest - tests below

// test to determine if Employee class constructor can be created
test('Can instantiate Employee instance (test type for object)', () => {
  // create new Employee object
  const employee = new Employee();
  // expect the type of a new employee from class Employee to be an object
  expect(typeof (employee)).toBe('object');
});

// test to determine if a name can be set using the Employee class constructor arguments (name, id, email)
test('Can set a name via constructor arguments', () => {
  // variable for a test name to set
  const testName = 'John Doe';
  // create a new employee by passing through test name
  const employee = new Employee(testName);
  // expect the employee name to be 'John Doe'
  expect(employee.empName).toBe(testName);
});

// test to determine if a id can be set using the Employee class constructor arguments (name, id, email)
test('Can set a id via constructor argument', () => {
  // variable for test id to set
  const testId = 123;
  // create new employee by passing through a name, test id
  const employee = new Employee('John Doe', testId);
  // expect the employee id to be '123'
  expect(employee.empId).toBe(testId);
});

// test to determine if a email can be set using the Employee class constructor arguments (name, id, email)
test('Can set a email via constructor argument', () => {
  // variable for test email to set
  const testEmail = 'test@email.com';
  // create new employee by passing through a name, id, and test email
  const employee = new Employee('John Doe', 123, testEmail);
  // expect employee email to be 'test@email.com'
  expect(employee.empEmail).toBe(testEmail);
});

// test to determine if the function getName can get the name
test('Can get a ame via function getName() in class constructor', () => {
  // variable for test name to set
  const testName = 'John Doe';
  // create a new employee by passing through test name
  const employee = new Employee(testName);
  // expect the function getName to return 'John Doe'
  expect(employee.getName()).toBe(testName);
});

// test to determine if the function getId can get the id
test('Can get a id via function getId() in class constructor', () => {
  // variable for test id to set
  const testId = 123;
  // create new employee by passing through a name, test id
  const employee = new Employee('John Doe', testId);
  //  expect the function getId to return '123'
  expect(employee.getId()).toBe(testId);
});

// test to determine if the function getEmail can get the email
test('Can get a email via function getEmail() in class constructor', () => {
  // variable for test email to set
  const testEmail = 'test@email.com';
  // create new employee by passing through a name, id, and test email
  const employee = new Employee('John Doe', 123, testEmail);
  // expect the function getEmail to return 'test@email.com'
  expect(employee.getEmail()).toBe(testEmail);
});

// test to determine if the function getRole can get the role ('Employee' set in constructor)
test('The function getRole() in class constructor should return "Employee"', () => {
  // create new employee
  const employee = new Employee()
  // expect the function getRole to return 'Employee'
  expect(employee.getRole()).toBe('Employee');
});
