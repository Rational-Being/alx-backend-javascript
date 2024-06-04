process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (name) => {
    console.log(`Your name is: ${name.toString}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (name) => {
    console.log(`Your name is: ${name.toString}`);
    process.exit();
  });
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}
