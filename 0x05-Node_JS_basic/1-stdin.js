console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  const name = data.toString().trim('\n');
  console.log(`Your name is: ${name}`);
  process.exit();
});
process.on('exit', (code) => {
  console.log('This important software is now closing');
  process.exit(code);
});
