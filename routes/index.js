var express = require('express');
var router = express.Router();
const bookService = require('../service/bookService.js')

/* GET home page. */
router.get('/', bookService.queryBooks);

//跳转到添加图书页面
router.get('/toAddBook', bookService.toAddBook)

router.post('/addBook', bookService.addBook)

module.exports = router;
