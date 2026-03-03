import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'number',
      message: 'Unesi stranicu a (cm):',
      name: 'a',
    },
    {
      type: 'number',
      message: 'Unesite stranicu b (cm):',
      name: 'b',

    }
    ])

  .then((answers) => {

    povrsina = answers.a * answers.b;
    console.log(`Površina pravokutnika iznosi: ${povrsina} cm2`);

    fs.appendFileSync('povrsina.txt', povrsina);
    console.log("Podatci su spremljeni u datoteku");

  })

  .catch((error) => {
    if (error.isTtyError) {
    } else {

    }
  });