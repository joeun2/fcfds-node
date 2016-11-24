module.exports = function (app) {
  var users = [//객체방식
    {id:"1", name:"ji Eun", email:"joeun2@gmail.com"},//객체1
    {id:"2", name:"Kim", email:"Kim@gmail.com"},
    {id:"3", name:"Lee", email:"Lee@gmail.com"},
    {id:"4", name:"Park", email:"Park@gmail.com"},
    {id:"5", name:"Choi", email:"Choi@gmail.com"},
    {id:"6", name:"Joang", email:"Joang@gmail.com"},
    {id:"7", name:"Kwon", email:"Kwon@gmail.com"},
    {id:"8", name:"Ho", email:"Ho@gmail.com"},
    {id:"9", name:"Ahn", email:"Ahn@gmail.com"},
    {id:"10", name:"Jane", email:"Jane@gmail.com"}
  ];

  app.get('/users', function (req, res) {
    res.json(users);//json보내기
  });

  app.get('/users/random', function (req, res) {
    var n = Math.floor(Math.random()*users.length);//random으로 보여짐
    var u = users[n];
    res.json(u);
  });

  //내가원하는 특정한 한 객체 id번호로 불러오기
  app.get('/users/:id', function (req, res) {//:id  -json파일에 id 명으로 받겠다
    if (users.length < req.params.id || req.params.id <= 0) {//req안에있는(params) id 선택
        res.statusCode = 404;
        return res.send("404 - Not Found, Choose I to 10");
    }
    var u = users[req.params.id - 1];
    res.json(u);
  });
};
