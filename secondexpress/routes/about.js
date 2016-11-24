module.exports = function (app) {//server.js에 한부분이다 명시
  app.get('/about', function (req, res) {
    res.render("about.ejs");//ejs연결
  });
};
