const { time } = require("console");
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Ya Yeet!\n");
});
server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/\n`);
});

const chalk = require("chalk");
const log = console.log;
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What color do you want\n", (usercolor) => {
  readline.question("What's your name\n", (name) => {
    log(chalk.keyword(usercolor)(`hi ${name}!`));
    readline.close();
  });
});
