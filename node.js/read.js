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

fs.readFile("message.txt", "utf8", (err, buffer) => {
  if (err) throw err;
  console.log(buffer);
});
//읽은 내용을 buffer 변수에 담아뒀다가 출력

server.listen(
  port,
  hostname,
  () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }
  // server.listen(port);
);
