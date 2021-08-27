//// here we are importing employee.js
const employee = require("./employee");

//// this extends the employee name, id, email from the file employee.js and then the constructor adds github profile.
class engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = engineer;
