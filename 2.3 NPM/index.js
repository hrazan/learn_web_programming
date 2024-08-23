// var generateName = require("sillyname");

import generateName from "sillyname"
var sillyName = generateName()

console.log(`My name is ${sillyName}`);

import {randomSuperhero} from "superheroes";
var heroName = randomSuperhero()

console.log(`I am ${heroName}`)

import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "what do you want to make as QR code?",
        name: "URL"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.URL) 
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('answer.png'));

    
    fs.writeFile("answer.txt", answers.URL, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });