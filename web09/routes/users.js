var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


// 로그인 router
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName : 'users/login.ejs' });
});

// 회원가입 router
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName : 'users/join.ejs' });
});

// 장바구니 router
router.get('/cart', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName : 'users/cart.ejs' });
});
