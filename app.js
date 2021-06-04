const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan")
const config = require("config")
//数据库连接
require("./model/connect")
const bodyParser = require("body-parser");
const session = require("express-session");
const home = require("./router/home");
const admin = require("./router/admin");
const operation = require("./router/operation")
const Chara = require("./router/addChara")
const loginGuard = require("./middleware/loginGuard")
//配置session
app.use(session({
    secret:'secret key',
    saveUninitialized:false,
    cookie:{
        maxAge: 10 * 60 * 1000
    }
}))

app.use(bodyParser.urlencoded({extended:false}))

//获取系统环境变量
if(process.env.NODE_EVN == 'development'){
    console.log("当前为开发环境")
    //在开发环境中，将客户端发送到服务器端的请求信息打印到控制台中
    app.use(morgan("dev"))
}else{
    console.log("当前为生产环境")
}

//告诉express框架模板位置
app.set("views",path.join(__dirname,"views"))
//告诉express框架模板的默认后缀
app.set("view engine","art")
//当渲染后缀为art是，用什么模板引擎
app.engine("art",require("express-art-template"))
//开发资源文件
app.use(express.static(path.join(__dirname,"public")))

console.log(config.get('title'))
app.use("/home",loginGuard)
app.use("/admin",loginGuard)
app.use("/add",loginGuard)

//为路由匹配路径
app.use("/home",home);
app.use("/admin",admin);
app.use("/operat",operation)
// app.use("/add",Chara)

app.listen(80);
console.log("端口启动成功")