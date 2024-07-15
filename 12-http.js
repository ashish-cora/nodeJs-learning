const { log } = require("console");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("wecome to our home");
  } else if (req.url === "/about") {
    res.end("hereis our short hsitory");
  } else res.end(`<h1> OOOOps!!</h1> <a href="/">back</a>`);
});

server.listen(5000);
