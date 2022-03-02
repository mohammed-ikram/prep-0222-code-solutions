var steve = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing'
};

console.log(steve);

var fullName = steve.firstName + ' ' + steve.lastName;

console.log("The person's name is: ", fullName + '.');

steve.job = 'Jerk';

console.log("The person's current job is: " + steve.job + '.');

steve.previousJob = 'amigo';

console.log("The person's previous job is: " + steve.previousJob + '.');

console.log('The complete person object: ', steve);
