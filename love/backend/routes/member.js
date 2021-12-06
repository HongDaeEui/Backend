const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

// 멤버 정보 조회 라우터
router.get("/search", async (req, res) => {
  // localhost:3001/members 접속 시 실행
  const members = await mysql.query("memberList"); //sql.js 파일에 작성된 memberList 쿼리를 실행
  console.log(members);
  res.send(members); // 결과를 클라이언트로 보냄
});

// 멤버 정보 추가 라우터
router.post("/insert", async (req, res) => {
  console.log(req.body);
  const result = await mysql.query("memberInsert", req.body.param);
  res.send(result); // 결과를 클라이언트로 보냄
});

// 멤버 정보 수정 라우터
router.put("/id", async (req, res) => {
  console.log(req.body);
  const result = await mysql.query("memberUpdate", req.body.param);
  res.send(result); // 결과를 클라이언트로 보냄
});

// 멤버 정보 삭제 라우터
router.delete("/id", async (req, res) => {
  const { id } = req.params; // 라우트 경로의 :id 에 맵핑되는 값
  const result = await mysql.query("memberDelete", id);
  res.send(result); // 결과를 클라이언트로 보냄
});

module.exports = router;
