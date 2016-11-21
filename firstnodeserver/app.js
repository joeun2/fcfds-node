var http = require('http');
//http모듈을 가져옴 변수로
//내부 모듈 http

var router = require('./router');//router.js 연결


//서버
http.createServer(function(request, response){
	// response.writeHead(200,{'Content-Type':'text/plain'});//값에메타정보 //생략가능
	// response.write('Hello FDS!!!!!');//원하는것을 작성
	// response.end();//응답멈춰줌
	console.log(request.url);//request해서 url을 받음

	// if (request.url === "/") {
	// 	response.write('This is HOME!!!!');//plain text로 사용하는것이 좋음(<p></p>태그쓰는것은 안좋음)
	// 	response.end();
	// }
	// var detailId = request.url.replace("/", "");//urn
	// // 루트 /(("/", "")슬래시를 지운다)
	// if (detailId.length > 0) {
	// 	//조건 이유: 루트값 3030 = / replace("/", "")지우면 값이 0이거나 없거나
	// 	//length
	// 	response.write(detailId);
	// 	response.end();
	// }

	//함수 실행
	//router에서 그대로 사용하기 위해서 home(request, response)적어준다(인자를 받아와서 router에서씀)
	router.home(request, response);
	router.about(request, response);
	router.facamp(request, response);
	//router.js에서 동작


}).listen(process.env.PORT || 3030);
//server을 만듬//listen은 포트번호를 가지고 있다 그것을3030으로 바꿔줌


console.log("first Node server is running at localhoost");
