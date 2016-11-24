//모듈
var express = require('express');
var app = express();

//라우팅
var indexRouter = require("./routes/index")(app);
var aboutRouter = require("./routes/about")(app);
var usersRouter = require("./routes/users")(app);
var chatRouter = require("./routes/chat")(app);


app.set("port", process.env.PORT || 3030);

//views for rendering
app.set("views", __dirname + "/views");//views는 /views이부분이 views이다(그래서 이름도 통일)
app.set("view engine", "ejs");//ejs자동 렌더링
app.engine("html", require('ejs').renderFile);//html사용시

//public for express static files
app.use("/public", express.static(__dirname + "/public"));//사용한다 use //라우팅get//쓸때는 set


//Error(에러) 정의
//404
app.use(function (req, res) {
  res.type("text/plain");
  res.status("404");
  res.send("404 - Not Found");
});
//500
app.use(function (req, res) {
  res.type("text/plain");
  res.status("500");
  res.send("500 - Server Error");
});

app.listen(app.get("port"), function () {
  console.log("second Express Server is running at localhost" + app.get("port"));
});
