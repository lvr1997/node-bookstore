/**
 * 测试数据库操作方法
 */
var db = require('./db.js');
// 查询所有的
// db.query('select * from book', [],function(result,fields){
//     console.log('查询结果：');
//     console.log(result);
// });
//根据id查询
// var sql = 'select * from book where book_id = ?'
// var params = [1]
// db.query(sql, params, function(result, fields) {
//     console.log('查询结果：', result[0])
// })
//根据条件查询
// var sql = "select * from book where category = ? and book_name like concat('%',?,'%')"
// var params = ['儿童类','童话']
// db.query(sql, params, function(result, fields) {
//     console.log('查询结果：', result)
// })
//查询总条数
// var sql = 'select count(*) as total from book'
// var params = []
// db.query(sql, params, function(result, fields) {
//     console.log('查询到', result[0].total , "本书")
// })
//添加数据
// var  addSql = 'INSERT INTO book(book_name,author, publish, category, book_desc) VALUES(?,?,?,?,?)';
// var  addSqlParams =['童话故事', '安徒生', '人民教育出版社', '童话', '讲故事的'];
// db.query(addSql,addSqlParams,function(result,fields){
//     console.log('添加成功')
// })
//修改数据
// var sql = "update book set book_name = ? , author = ? , publish = ? , category = ? , book_desc = ? where book_id = ?"
// var params = ['丑小鸭', '安徒生', '人民大学出版社', '儿童类', '一个关于小鸭子的故事', 5]
// db.query(sql,params,function(result,fields){
//     console.log('修改成功')
// })
//删除数据
// var sql = "delete from book where book_id = ?"
// var params = [6]
// db.query(sql, params, function(result, fields) {
//     console.log("删除成功")
// })