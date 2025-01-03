const http = require("http");
const { exec } = require("child_process");

let info;
let status = 200
const ch = exec(`node 3-read_file_async.js ${process.argv[2]}`);

ch.stderr.on("data", (err) => {
  info = err.toString().split("\n")[4].split(": ")[1];
});
ch.stdout.on("data", (data) => {
  status = 404
  info = data.toString();
});

const app = http
  .createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
      case "/":
        res.write("Hello Holberton School!");
        break;
      case "/students":
        res.write("This is the list of our students\n");
        res.statusCode = status
        res.write(info);
        break;
      default:
        break;
    }

    res.end();
  })
  .listen(1245);

module.exports = app;
