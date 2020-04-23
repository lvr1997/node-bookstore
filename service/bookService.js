/**
 * 业务模块
 */
const data = require('./books_data.json')
const path = require('path')
const fs = require('fs')

//自动生成图书编号
let maxBookCode = () => {
	let arr = []
	data.forEach((item)=> {
		arr.push(item.id) 
	})
	return Math.max.apply(null, arr)
}

//渲染主页面
exports.queryBooks = (req, res) => {
	res.render('index', {title:'图书管理系统', list:data})
}

//渲染添加图书页面
exports.toAddBook = (req, res) => {
	res.render('addBook', {title: '添加图书'})
}

//添加图书的逻辑
exports.addBook = (req, res) => {
	let bookInfo = req.body;
	let book = {};
	for(let key in bookInfo) {
		book[key] = bookInfo[key]
	}
	book.id = maxBookCode() + 1;
	data.push(book)
	//把内存中的数据写入文件
	fs.writeFile(path.join(__dirname, 'books_data.json'), JSON.stringify(data), (err)=>{
		if(err) {
			res.send('server error')
		}
		
		//文件写入成功后回到首页
		res.redirect('/')
	});
}
