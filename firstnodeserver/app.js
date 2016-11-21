var http = require('http');
//http모듈을 가져옴 변수로

//서버
http.createServer(function(request, response){
	// response.writeHead(200,{'Content-Type':'text/plain'});//값에메타정보 //생략가능
	// response.write('Hello FDS!!!!!');//원하는것을 작성
	// response.end();//응답멈춰줌

	if (request.url === "/") {
		console.log(request.url);//request해서 url을 받음
		response.write('This is HOME!!!!');//plain text로 사용하는것이 좋음(<p></p>태그쓰는것은 안좋음)
		response.end();
	}
}).listen(process.env.PORT || 3030);
//server을 만듬//listen은 포트번호를 가지고 있다 그것을3030으로 바꿔줌


console.log("first Node server is running at localhoost");
