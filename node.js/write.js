const http = require("http");
const fs = require("fs");
// fs는 File System의 약자

const hostname = "127.0.0.1"; // local host
const port = 3000;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  //res.writeHead(200);
  res.end("Hello, World!\n");
});

var data = "I create file and wrie!";
fs.writeFile("message.txt", data, "utf8", (err) => {
  console.log("The file has been saved!");
});
//fs.writeFile() 메서드를 이용하여 message.txt 파일에 data를 utf8 형식으로 쓴다.
server.listen(
  port,
  hostname,
  () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }
  // server.listen(port);
);
