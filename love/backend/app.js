const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const corsOptions = {
  origin: "http://localhost:3000", // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

require("dotenv").config({ path: "mysql/.env" }); // mysql 폴더에 있는 .env 파일을 찾아서 환경변수를 설정
const mysql = require("./mysql"); // mysql 폴더의 index.js

require("dotenv").config({ path: "nodemailer/.env" }); // nodemailer 폴더에 있는 .env 파일을 찾아서 환경변수를 설정
const nodemailer = require("./nodemailer"); // nodemailer 폴더의 index.js

const app = express();

const memberRoute = require("./routes/member");

app.use(
  express.json({
    limit: "50mb", // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.use(cors(corsOptions)); // cors를 모든 라우터에 적용

app.listen(3001, () => {
  // 3001번 포트로 웹 서버 실행
  console.log("Server started. port 3001.");
});

app.use("/member", memberRoute); // member 라우트를 추가하고 기본 경로로 /member 사용

const storage = multer.diskStorage({
  // 디스크 저장소 정의
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    cb(null, new Date().valueOf() + path.extname(file.originalname)); //시스템시간으로 파일 이름 설정
  },
});
const upload = multer({ storage: storage }); // multer 객체 생성

app.post(
  "/file/upload",
  upload.single("attachment"),
  function (req, res, next) {
    console.log(req.file); // attachment 이름의 싱글 파일
    console.log(req.body); // 일반적인 폼 데이터
    res.send(req.file);
  }
);

app.post(
  "/file/uploads",
  upload.array("attachments", 12),
  function (req, res, next) {
    console.log(req.files); // attachments 이름의 멀티 파일
    console.log(req.body); // 일반적인 폼 데이터
    res.send(req.files);
  }
);

app.post("/email/send", async (req, res) => {
  const r = await nodemailer.send(req.body.param);
  res.send(r); // 결과를 클라이언트로 보냄
});
