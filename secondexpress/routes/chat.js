module.exports=function (app) {
  var http = require('http').Server(app);
  var io = require('socket.io')(http);

  app.get('/chat',function (req, res) {
    res.render("chat.ejs");
  });
  io.on("connection", function (socket) {//3000으로 들어와야 connection이 가능하다
    console.log("new user is connected!");
  });
  //메세지를 3000에서 받는다 
  http.listen(3000, function () {//서버 분리 socket통신 express (새서버를 열어줘야함)
    console.log("Chat server is listen on 3000");
  });

  // app.get('/chat',function (req,res) {
  //   res.render("chat.ejs");
  // });
};
