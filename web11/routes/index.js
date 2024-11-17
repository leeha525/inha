var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // '/' 일때 index.ejs 파일을 출력해라
  // * index 빈칸
  res.render('index', { title: '홈페이지', pageName : 'home.ejs' });
});



module.exports = router;
