const operation = require('./operation.js');
const readline = require('readline');

// Use readline to create command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`
Addition.js

Welcome to the Node.js Addition app! 
Version: 1.0.0.

Usage: The user will be prompted for two numbers to be summed.
`);

rl.question('Enter the first number: ', (a) => {
    rl.question('Enter the second number: ', (b) => {
        if (!operation.validateNumbers(a, b)) {
            console.log('Only numbers are allowed! Please restart the program.');
        }
        else {
            console.log(`The sum of ${a} and ${b} is ${operation.add(a, b)}.`);
        }
        rl.close();
    });
});