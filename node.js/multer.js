const multer = require("multer");
// 기타 express 코드
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
});
app.post("/up", upload.single("img"), (req, res) => {
  console.log(req.file);
});

app.post("/up", upload.array("img"), (req, res) => {
  console.log(req.files);
});

app.post(
  "/up",
  upload.fields([{ name: "img" }, { name: "photos" }]),
  (req, res) => {
    console.log(req.files);
  }
);

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

const path = require("path");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

const upload = multer({
  storage: multer.memoryStorage(),
});
