// here we are importing employee.js
const employee = require("./employee");

// this extends the employee's name, id, email from the file employee.js and then the constructor adds office number.
class manager extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // this gets the role of the user as Manager
  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = manager;
