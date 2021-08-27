// here we are importing employee.js
const employee = require("./employee");

// this extends the employee name, id, email from the file employee.js and then the constructor adds school name.
class intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // this gets the role of the user
  getRole() {
    return "Intern";
  }
  // this returns the school name
  getSchool() {
    return this.school;
  }
}

module.exports = intern;
