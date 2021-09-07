// require Employee class and Engineer class
const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

// jest tests below

// test to determine if a github user name can be set using the Engineer class constructor (name, id, email, githubUserName)
test('Can set a Github usern name via constructor argument', () => {
  // variable for test github user name to set
  const testGithubName = 'GitHubNameTest';
  // create a new engineer by passing through name, id, email and test github user name
  const engineer = new Engineer('John Doe', 123, 'test@email.com', testGithubName);
  // expect github user name to be 'GithubNameTest
  expect(engineer.empGithubUserName).toBe(testGithubName);
});

// test to determine if the function getRole can get the role ('Engineer' set in constructor)
test('The function getRole() should return "Engineer"', () => {
  // create new engineer
  const engineer = new Engineer()
  // expect the function getRole to return 'Engineer
  expect(engineer.getRole()).toBe('Engineer');
});

// test to determine if the function getGithub can get the github user name
test('Can get a GitHub username via function getGithub() in class constructor', () => {
  // variable for test gihub user name to set
  const testGithubName = 'GitHubNameTest';
  // create new engineer by passing through name, id, email, github user name
  const engineer = new Engineer('John Doe', 123, 'test@email.com', testGithubName);
  // expect the function getGithub to return 'GitHubNameTest'
  expect(engineer.getGithub()).toBe(testGithubName);
});
