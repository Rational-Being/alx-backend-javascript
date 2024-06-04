// //a program that takes stfin and is executed in the command

// // process.stdout.write('Welcome to Holberton School, what is your name?\n');
// console.log('Welcome to Holberton School, what is your name?\n');

// process.stdin.setEncoding('utf-8');

// process.stdin.on('data', (name) => {
//   process.stdout.write(`Your name is: ${name.toString().trim()}`);
//   process.exit();
// });
// process.on('exit', () => {
//   process.stdout.write('This important software is now closing\n');
// });
// // }


const in_put = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

in_put.question(`Welcome to Holbertin School, what is your name?\n`, data => {
  console.log(`Your name is: ${data}`);
  in_put.close();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
