const mongoose = require("mongoose");
const config = require("config")

mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`,{useNewUrlParser:true}).then(res=>{
    console.log("连接成功")
}).catch(err=>{
    console.log("连接失败")
})