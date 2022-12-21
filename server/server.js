// const express = require("express");
// const cors = require("cors");
// const session = require("express-session");
// // ================== DB연결 수행 전 라이브러리 호출 ========================
// const mysql = require("mysql2");
//
// // ================== DB연결 수행 전 라이브러리 호출 ========================
// const app = express();
// const port = 4000;

const express = require("express");
const cors = require("cors");

const session = require("express-session");
const mysql = require("mysql2");
const db = mysql.createPoolCluster();

const app = express();
const port = 4000;
app.use(express.json());

app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

db.add("project01", {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "project01",
  port: 3306,
});

function 디비실행(query) {
  return new Promise(function (resolve, reject) {
    db.getConnection("project01", function (error, connection) {
      if (error) {
        console.log("DB연결 오류", error);
        reject(true);
      }
      connection.query(query, function (error, data) {
        if (error) {
          console.log("쿼리 오류", error);
          reject(true);
        }
        resolve(data);
      });
      connection.release();
    });
  });
}

app.get("/", async (req, res) => {
  const 데이터 = await 디비실행("SELECT * FROM USER");
  console.log(데이터);

  res.send("여기로옵니다");
});

app.post("/autoLogin", (req, res) => {
  res.send(req.session.loginUser);
});

app.post("/article", async (req, res) => {
  const { loginUser } = req.session;

  const { title, content, category, startDate, endDate } = req.body;

  const result = {
    code: "success",
    message: "작성완료",
  };

  const query = `INSERT INTO article(title,content,category,start_date,end_date) VALUES("${title}","${content}","${category}","${startDate}","${endDate}")`;

  await 디비실행(query);

  res.send(result);
});

app.post("/join", async (req, res) => {
  const { id, pw } = req.body;
  const result = {
    code: "success",
    message: "회원가입되었습니다.",
  };
  const query = `INSERT INTO user(id, password) VALUES("${id}","${pw}")`;
  await 디비실행(query);

  res.send(result);
});

app.post("/login", async (req, res) => {
  const { id, pw } = req.body;
  const result = {
    code: "success",
    message: "로그인되었습니다",
  };

  const 회원 = await 디비실행(
    `SELECT * FROM user WHERE id = "${id}" AND password = "${pw}"`
  );

  if (회원.length === 0) {
    result.code = "error";
    result.message = "회원정보가 존재하지 않습니다.";
    res.send(result);
    return;
  }

  req.session.loginUser = 회원[0];
  req.session.save();

  res.send(result);
});

app.listen(port, () => {
  console.log("서버가 실행되었습니다.");
});
