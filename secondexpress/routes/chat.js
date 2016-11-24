module.exports=function (app) {
  var http = require('http').Server(app);
  var io = require('socket.io')(http);//socket.io가져옴

  app.get('/chat',function (req, res) {
    res.render("chat.ejs");
  });
  io.on("connection", function (socket) {//3000으로 들어와야 connection이 가능하다
    //connection : 유저가 들어왔을때 행동 제어
    console.log("new user is connected!");//유저가 들어왔을때 처리
    socket.on("chat message", function (msg) {//메세지 작성시 행동 제어
        console.log("message:",  msg);//내가볼때
        io.emit("chat message",  msg);//사용자가 볼때
    });
    socket.on("disconnect",function () {
      //disconnect : 유저가 나갔을때 행동 제어
      console.log("User discommected!");
    });
  });
  //메세지를 3000에서 받는다
  http.listen(process.env.PORT || 8080, function () {//서버 분리 socket통신 express (새서버를 열어줘야함)
    console.log("Chat server is running 8080...");
  });

  // app.get('/chat',function (req,res) {
  //   res.render("chat.ejs");
  // });
};
