//-----------------------------------------------------------------
// renderer.js 렌더링 파일은 router파일과 분리하여 관리하는것이 좋다.!
var fs = require('fs');



module.exports = function (request, response, layoutName) {
  var baseResource = fs.readFileSync("./layout/layout.html", "utf8");
  var headerResource = fs.readFileSync("./layout/partials/header.html", "utf8");
  var footerResource = fs.readFileSync("./layout/partials/footer.html", "utf8");
  var contentResource = fs.readFileSync("./layout/" + layoutName + ".html", "utf8");
  //layoutName은 좀더 자유롭게 name이 들어갈 수 있다

  baseResource = baseResource.replace("{% header %}", headerResource);
  baseResource = baseResource.replace("{% footer %}", footerResource);
  baseResource = baseResource.replace("{% content %}", contentResource);

  response.write(baseResource);
  response.end();
}
