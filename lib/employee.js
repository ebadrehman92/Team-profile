// here inquirer will prompt questions related defined in a function in app.js

const inquirer = require("inquirer");

// here we are making a class employee and the contructor with employee's name, id , email.
class employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = employee;
