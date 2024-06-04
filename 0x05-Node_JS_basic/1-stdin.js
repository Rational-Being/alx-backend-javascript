//a program that takes stfin and is executed in the command line

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// if (process.stdin.isTTY) {
//   process.stdin.on('data', (name) => {
//     process.stdout.write(`Your name is: ${name.toString}`);
//     process.exit();
//   });
// } else {
process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name.toString().trim()}`);
  process.exit();
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing');
});
// }
