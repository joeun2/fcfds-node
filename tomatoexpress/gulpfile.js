var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
//명령어창에 gulp hello를 치면 명령어창에 gulp가나옴
//작업에 걸리는 시간 나옴
//그냥 gulp라고 해도 나온다
//gulp는 task 실행만 해준다 !
// gulp.task("hello", function () {//첫번째 실행
//   //task-작업하나하나를 task라함
//   return console.log("hello gulpworld");
// });
//
// gulp.task("gulpworld",["hello"],function functionName() {//두번째 실행
//   //["hello"]때문에 hello가 먼저 실행한다
//   return console.log("gulpwor");
// });

// gulp.task("compress",function (cb) {
//   pump([
//     gulp.src("/public/src/css/style.css"),
//     uglify(),
//     gulp.dest("/public/dest/")
//   ],cb);
// });

gulp.task('js', function () {
  gulp.src("./public/src/js/style.js")
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/'));
});
gulp.task('css', function () {
  gulp.src("./public/src/css/style.css")
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true}))
    .pipe(gulp.dest('./public/dist/css/'));
});

// gulp.task("uglify",["gulpworld"],function () {
//   return gulp.src("/public/src/css/style.css").pipe(uglify()).pipe(gulp.dest("/public/dest/"));
//   //pipe()중간 정착지 //.pipe(uglify())통해서 어글리 후 ->.pipe(gulp.dest("dest옴겨질 파일 경로"));
// });

gulp.task("default", ["css"]);//마지막 값
