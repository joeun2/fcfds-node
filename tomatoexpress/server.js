var express = require('express');
var app = express();

var request = require('request');
var cheerio = require('cheerio');

var boxOffice = [];

app.set("port", process.env.PORT || 9090);

app.get('/' , function(req,res){
// request사용 html코드 가져온다
  request({method:'GET',
          uri:'https://www.rottentomatoes.com/'},
          function (err, res, body) {
            if (err) throw err;
            var $ = cheerio.load(body);
            var movieInfo = $('table#Top-Box-Office.movie_list');
          // console.log(movieInfo);
          movieInfo.each(function () {//더깔끔하게 쓰는 방법 과제
            var movieName = $(this).find("td.middle_col").text();
            var meterScore = $(this).find("td.left_col").text();
            console.log(movieName);
            console.log(meterScore);
            boxOffice.push({movieName:movieName, meterScore:meterScore});
            // attr("src");
          });
        });
        res.send(JSON.stringify(boxOffice, null, 4));//json 보여지는 방식 정하는 코드
        // Json.stringify(value[,replace[, space]]);
});

// request({method:'GET',uri:''},function (err, res, body) {
//           if (err) throw err;
//           console.log(body);//페이지의 코드 전체를 긁어온다
//         });


// app.get('/',function (req,res) {
//   res.send("Hi tomato!");
// });

app.listen(app.get("port"),function () {
  console.log("Tomato Express server is running at localhost:" + app.get("port"));
});
