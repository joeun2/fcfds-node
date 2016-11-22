var express = require('express');//express 가져온다
var app = express();//express를 app로 지정

app.set("port", process.env.PORT || 8080);

app.get('/', function (req, res) {
  res.type("text/plain");
  res.send("Hello Express");
});

//Error(에러) 정의
//404 (파일명 404.html 적절)
app.use(function (req, res) {//사용한다 use
  res.type("text/plain");
  res.status("404");
  res.send("404 - Not Found");//링크에러
});
//500
app.use(function (req, res) {
  res.type("text/plain");
  res.status("500");
  res.send("500 - Server Error");
});


app.listen(app.get("port"), function () {
  console.log("First express Server is running at localhost: "+ app.get("port"));
});
