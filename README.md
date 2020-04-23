# 基于Nodejs整合图书管理系统

## 项目介绍
基于Nodejs + express + ejs 实现图书管理系统

## 功能模块

| 模块     |      |      |
| -------- | ---- | ---- |
| 图书查询 |      |      |
| 新增图书 |      |      |
| 修改图书 |      |      |
| 删除图书 |      |      |
| 用户登录 |      |      |



## 笔记
### express
express是nodejs的web框架
npm初始化项目
在当前项目中安装express依赖 

```
npm install express --save
```

配置`app.js`：

```js
const express = require('express') //引入express
const app = express() //使用express创建服务
const port = 3000  //定义端口号

//设置访问路径,并向浏览器响应内容
app.get('/', (req,resp) => resp.send('Hello World'))

//监听端口号
app.listen(port, ()=> console.log('Your app running at http://localhost:3000/'))
```

### Express应用程序生成器
通过应用生成器工具 express-generator 可以快速创建一个应用的骨架，就可以不用手动配置`app.js`了
npx express-generator  [介绍](https://www.expressjs.com.cn/starter/generator.html)

使用：

```
npx express-generator --view=ejs  （--view=ejs 选择要使用的模板引擎）
```

生成骨架之后，使用npm install 安装所需依赖
在 Windows 中，通过如下命令启动此应用：

生成骨架之后，使用npm install 安装所需依赖
在 Windows 中，通过如下命令启动此应用：

> npm start
使用 http://localhost:3000/访问应用

### 模板引擎
在使用npx express-generator --view=ejs 时使用模板引擎

## 时间轴

2020-03-27 项目初始化

2020-03-28 定义json数据文件，实现图书查询功能

2020-04-22 完成添加图书功能

2020-04-23 项目首次提交到github

## 项目截图

