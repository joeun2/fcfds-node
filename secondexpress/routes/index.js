module.exports = function (app) {//server.js에 한부분이다 명시
  app.get('/', function (req, res) {
    res.render("index.ejs");//ejs연결
  });
};
