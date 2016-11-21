var fs = require('fs');//파일 시스템 파일 모듈
//파일 수정
//내부 모듈 fs ->그안에 기본적으로 있는readFile

function home(request, response) {//로그인이나 다른 인자가 들어갈수도 있다
  if (request.url === "/") {//request.url url확인 "/"인지
    //  response.write();
    fs.readFile("./layout/home.html", function (err, data) {//err에러처리 꼭 인자 적용 
      //readFile = html읽어서 function으로 처리가능
        response.write(data);
        response.end();
    });
  }
}

function about(request, response) {
  if (request.url === "/about") {
  fs.readFile("./layout/about.html", function (err, data) {
      response.write(data);
      response.end();
  });
  }
}
function facamp(request, response) {
  if (request.url === "/facamp") {
  fs.readFile("./layout/facamp.html", function (err, data) {
      response.write(data);
      response.end();
  });
  }
}



//app.js에 일부분이라는 것
//app.js에서 가져오는것(접근)
//expors
module.exports.home = home;
module.exports.about = about;
module.exports.facamp = facamp;
