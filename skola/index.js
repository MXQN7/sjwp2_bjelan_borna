import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: "input",
      name: "ime",
      message: "Unesi ime ucenika:"
    }
  ])

  .then((answers) => {
  })

  .catch((error) => {

    if (error.isTtyError) {
    } else {
    }

  });