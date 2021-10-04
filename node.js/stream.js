var fs = require("fs");

var inF = fs.createReadStream("./study/day_05/aaa.txt", { flags: "r" });
var outF = fs.createWriteStream("./study/day_05/bbb.txt", { flags: "w" });

inF.on("data", function (fileData) {
  console.log("읽기 :" + fileData); //""+ 문자열인지 인지를 하지 않으면 출력 안나옴
  outF.write(fileData);
});

inF.on("end", function () {
  console.log("읽기 종료");
  outF.end(function () {
    console.log("쓰기 종료");
  });
});

/* var fs = require('fs');
 
var inF = fs.createReadStream('./study/day_05/aaa.txt',{flags:'r'});
var outF = fs.createWriteStream('./study/day_05/bbb.txt',{flags:'w'});
 
//여기것을 (여기에 쓰다)
inF.pipe(outF); //읽는것과 다는것까지 다 처리한다.
 */
