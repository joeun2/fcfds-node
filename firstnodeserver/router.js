var fs = require('fs');//파일 시스템 파일 모듈
//파일 수정
//내부 모듈 fs ->그안에 기본적으로 있는readFile
var renderer = require('./renderer');

function home(request, response) {//로그인이나 다른 인자가 들어갈수도 있다
  //router.js에서 렌더링
  if (request.url === "/") {
    return renderer(request, response, "home");//"home" 이 renderer페이지에서 layoutName 이다!
  }
}

function about(request, response) {
  if (request.url === "/about") {
    return renderer(request, response, "about");
  }
}
function facamp(request, response) {
  if (request.url === "/facamp") {
    return renderer(request, response, "facamp");
  }
}



//app.js에 일부분이라는 것
//app.js에서 가져오는것(접근)
//expors
module.exports.home = home;
module.exports.about = about;
module.exports.facamp = facamp;
