const inPut = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

inPut.question('Welcome to Holbertin School, what is your name?\n', (data) => {
  console.log(`Your name is: ${data}`);
  inPut.close();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
