const http = require('http');
const { exec } = require('child_process');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Handle the root route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    // Handle the /students route
    const database = process.argv[2];

    if (!database) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Database file not provided');
      return;
    }

    // Use child process to execute 3-read_file_async.js
    const child = exec(`node 3-read_file_async.js ${database}`);

    let output = '';
    let errorOccurred = false;

    child.stdout.on('data', (data) => {
      output += data; // Accumulate output from stdout
    });

    child.stderr.on('data', (error) => {
      errorOccurred = true; // Mark that an error occurred
      output += error; // Accumulate error message
    });

    child.on('close', (code) => {
      if (errorOccurred || code !== 0) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error occurred while processing the database\n' + output);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${output}`);
      }
    });
  } else {
    // Handle unknown routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
