var express = require('express');
var router = express.Router();

/* GET 카카오 page. */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName : 'kakao/book.ejs' });
});

// 지역검색
router.get('/local', function(req, res) {
  res.render('index', { title: '지역검색', pageName : 'kakao/local.ejs' });
});

// 블로그검색
router.get('/blog', function(req, res) {
  res.render('index', { title: '블로그검색', pageName : 'kakao/blog.ejs' });
});

// 도서정보 페이지 이동
// <a href="/kakao/book/info?title={{title}}&thumbnail={{thumbnail}}&price={{price}}&authors={{authors}}&publisher={{publisher}}&isbn={{isbn}}&contents={{contents}}">
// home.ejs에서 링크 클릭시 정보를 받아서 던짐
// info.ejs에 info 변수로 정보를 전달 후 <%=info.price%> 로 사용
router.get('/book/info', function(req, res) {
  const title = req.query.title;
  const thumbnail = req.query.thumbnail;
  const price = req.query.price;
  const authors = req.query.authors;
  const publisher = req.query.publisher;
  const isbn = req.query.isbn;
  const contents = req.query.contents;

  // console.log("title", title);

  // console.log(req.query);  // 쿼리 파라미터 확인
  // console.log(info); 
  const info = {title, thumbnail, price, authors, publisher, isbn, contents};

  // object로 info에 대한 정보를 보내줌
  res.render('index', {title : '도서정보', pageName : 'kakao/info.ejs', info});
})


module.exports = router;
