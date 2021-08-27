// here we require inquirer for prompts

const inquirer = require("inquirer");

// here we are making variables and requiring the files in Lib/

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");

// this function is using inquirer to ask a series of questions before the user selects
// the role

function runInquirer() {
  const promptArray = [
    {
      type: "input",
      message: "Please enter your name",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter your email",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter your ID number",
      name: "id",
    },
    // {
    //   type: "input",
    //   message: "What is your linkedin?",
    //   name: "",
    // },
    {
      type: "list",
      message: "What's your title",
      choices: ["Manager", "Engineer", "Intern"],
      name: "title",
    },
  ];

  return inquirer.prompt(promptArray);
}

// this function will ask the question depending on the user input and the next
// question will be according to that input

function runInquirerManager() {
  const promptArray = [
    {
      type: "input",
      message: "What's your office number?",
      name: "officeNumber",
    },
  ];

  return inquirer.prompt(promptArray);
}

function runInquirerEngineer() {
  const promptArray = [
    {
      type: "input",
      message: "What's your github?",
      name: "github",
    },
  ];

  return inquirer.prompt(promptArray);
}

function runInquirerIntern() {
  const promptArray = [
    {
      type: "input",
      message: "Which school do you attend?",
      name: "school",
    },
  ];

  return inquirer.prompt(promptArray);
}

// async function run() {
//   let teamArray = [];
//   const minTimes = o;
//   for (i = 0; i < maxTimes; i++) {
//     const promise = new Promise((res, rec) => {
//       runInquirer()

async function run() {
  let employeeArray = [];
  const maxTimes = 3;
  for (i = 0; i < maxTimes; i++) {
    const promise = new Promise((resolve, reject) => {
      runInquirer()
        .then(function ({ name, id, email, title }) {
          if (title === "Manager") {
            runInquirerManager().then(function ({ officeNumber }) {
              this.employee = new Manager(name, id, email, officeNumber, title);
              console.log(officeNumber);
              employeeArray.push(employee);
              resolve("done");
            });
          } else if (title === "Intern") {
            runInquirerIntern().then(function ({ school }) {
              this.employee = new Intern(name, id, email, school, title);
              console.log(school);
              employeeArray.push(employee);
              resolve("done");
            });
          } else if (title === "Engineer") {
            runInquirerEngineer().then(function ({ github }) {
              this.employee = new Engineer(name, id, email, github, title);
              console.log(github);
              employeeArray.push(employee);
              resolve("done");
            });
            // } else if (title === "Intern") {
            //   runInquirerIntern().then(function ({ school }) {
            //     this.employee = new Intern(name, id, email, school, title);
            //     console.log(school);
            //     employeeArray.push(employee);
            //     resolve("done");
            //   });
          }
        })
        .catch(function (err) {
          console.log("There was an error.");
          console.log(err);
        });
    });

    const result = await promise;
    console.log(result);
  }

  // this will console.log the employees array length

  function displayTitle(employee) {
    if (employee.title === "Manager") {
      console.log(employee.officeNumber);
      return `office number: ${employee.officeNumber}`;
    }

    if (employee.title === "Engineer") {
      return `gitHub: ${employee.github}`;
    }

    if (employee.title === "Intern") {
      return `school: ${employee.school}`;
    }
  }
  function getCardHtml() {
    let html = "";
    for (j = 0; j < maxTimes; j++) {
      console.log(employeeArray[j]);
      html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="col card-header">
                    <h4>${employeeArray[j].name}</h4>
                </div>
                <div class="col card-header">
                    <h4>${employeeArray[j].title}</h4 >
                </div >
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${employeeArray[j].id}</li>
                    <li class="list-group-item">Email: ${
                      employeeArray[j].email
                    }</li>
                    <li class="list-group-item"> ${displayTitle(
                      employeeArray[j]
                    )}</li>
                </ul>
            </div > `;
    }
    return html;
  }

  //here is the layout of the html pages on how the cards will look like.

  let html = `< !DOCTYPE html >
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                                        <title>Team-Document</title>
                                        <style>
                                            .row {
                                                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .card {
                                                padding: 15px;
                border-radius: 6px;
                background-color: white;
                color: white;
                margin: 25px;
            }
            .text {
                                                padding: 15px;
                border-radius: 6px;
                background-color: blue;
                color: grey;
                margin: 20px;
            }
            .col {
                                                flex: 1;
                text-align: center;
            }
        </style>
    </head>
                                    <body>
                                        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                                            <span class="navbar-brand mb-0 h1">
                                                <h1>Team Members</h1>
                                            </span>
                                        </nav>
                                        <div class="row">
                                            ${getCardHtml()}
                                        </div>
                                    </body>

    </html>
    `;

  console.log(html);
  const fs = require("fs");
  fs.writeFile("teamMembers.html", html, function (err) {
    if (err) throw err;
    console.log("The file has been created successfully");
  });
}
run();
