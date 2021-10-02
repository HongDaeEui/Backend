const http = require("http");

const hostname = "127.0.0.1"; // local host
const port = 3000;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  // res.writeHead(200);
  res.end("Hello, World!\n");
});

server.listen(
  port,
  hostname,
  () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }
  // server.listen(port);
);
