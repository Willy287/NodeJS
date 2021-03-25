/**
 * Utilizando el modulo readline para hacer que un programa CLI de NodeJS
 * sea interactivo. Esto permite crear programas que interactuen con el ususario,
 * por ejemplo pidiendo datos de entrada y mostrando cierta información.
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  });

/**
 * 
 */
const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
});
