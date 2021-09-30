const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World!</h1>");
  res.write("<p>Server Message sent.</p>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listeing for requests on port 3000");
});
