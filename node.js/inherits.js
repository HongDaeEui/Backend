var util = require("util");
var EventEmitter = require("events").EventEmitter;

var Calc = function () {
  var self = this;

  //함수의 제 정의 [super EventEmitter]
  this.on("stop", function () {
    console.log("Calc에 stop event 호출");
  });
};

// .inherits 상속
util.inherits(Calc, EventEmitter);

Calc.prototype.add = function (a, b) {
  console.log("add 실행");
  return a + b;
};

//객체생성을 해야 상속가능
var calc = new Calc();
calc.add(2, 3);
calc.emit("stop");

console.log(Calc);

//module.exports = Calc;
//module.exports.title = 'calculator';
