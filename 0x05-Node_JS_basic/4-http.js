const app = require('http');

app
  .createServer((req, res) => {
    res.write('Hello ALX!');

    res.end();
  })
  .listen(1245);

module.exports = app;
