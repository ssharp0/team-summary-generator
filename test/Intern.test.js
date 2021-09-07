// require Employee class and Engineer class
const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

// jest tests below

// test to determine if a school can be set using the Intern class constructor (name, id, email, school)
test('Can set a school via constructor', () => {
  // variable for test school to set
  const testSchool = 'SomeSchool';
  // create new intern by passing through name, id, email and test school
  const intern = new Intern('John Doe', 123, 'test@email.com', testSchool);
  // expect school to be 'SomeSchool'
  expect(intern.empSchool).toBe(testSchool);
});

// test to determine if the function getRole can get the role ('Intern' set in constructor)
test('The function getRole() should return "Intern"', () => {
  // create new intern
  const intern = new Intern()
  // expect the function getRole to return 'Intern'
  expect(intern.getRole()).toBe('Intern');
});

// test to determine if the function getSchool can get the school
test('Can get a school via function getSchool() in class construction', () => {
  // variable for test school to set
  const testSchool = 'someSchool';
  // create new intern by passing through name, id, email, school
  const intern = new Intern('John Doe', 123, 'test@email.com', testSchool);
  // expect the function getSchool to return 'someSchool'
  expect(intern.getSchool()).toBe(testSchool);
});
