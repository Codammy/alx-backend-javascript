const express = require('express');
const { exec } = require('node:child_process');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  exec(`node 3-read_file_async ${process.argv[2]}`, (err, stdout) => {
    if (err) {
      return console.log(err);
    }
    return res.send(`This is the list of our students\n ${stdout}`);
  });
});

app.listen(1245);
