const express = require("express");
const admin = express.Router();
const path = require("path")
const fs = require("fs");
const {User,Chara} = require("../model/user")
const {getLogs , addLogs} = require("./MethodSet")
const formidable = require("formidable");
admin.get("/login",(req,res)=>{
    let message = req.query.message;
    res.render("admin/dengl",{
        msg: message
    })
})
//用户登录
admin.post('/login',async (req,res)=>{
    const {username,phone,userpass} = req.body;
    if(userpass.trim().length == 0){
        return res.status(400).render("error",{
            msg:"请填写密码"
        })
    }
    //如何有则查询返回对象类型值，
    let user = await User.findOne({username});
    if(user){
        if(user.userpass == userpass){
            req.session.username = username;
            // res.status(200).render("error",{
            //     msg:"登录成功"
            // })
            //给app全局定义个属性名
            req.app.locals.userInfo = username;
            //重定向到用户列表页面
            //如何role角色为0，则为超级管理员，跳转到管理页面，如何不是，就跳到页面详情展示页
            if(user.role == "0"){
                res.redirect(`/home/user?message=${user._id}`)
            }else{
                res.redirect(`/home/xiangm?message=${user._id}`)
            }
            res.send("200")
        }else{
            res.redirect("/admin/login?message=密码错误")
            // res.status(400).render("error",{
            //     msg:"密码错误"
            // })
        }
    }else{
        res.redirect("/admin/login?message=当前没有用户")
        // res.status(400).render("error",{
        //     msg:"没有当前用户"
        // })
    }
})
admin.get("/regin",(req,res)=>{
    console.log(req.session.username)
    res.render("admin/zhuce",{
        msg:req.session.username
    })
})
//用户注册添加
admin.post('/regin',async (req,res)=>{
    let {username , phone , password} = req.body;
    let user = await User.find({username:username});
    if(user.length != 0){
        // res.redirect("/admin/zhuce")
        res.status(300).send("用户重复了，请重新添加");
    }
    if(username.trim().length == 0){
        res.status(500).send("当前名称为空")
    }
    
    await User.create(req.body).then(slue=>{
        let result = {};
        result.msg = "添加成功"
        result.list = slue;
        res.redirect("/admin/login")
        res.send('添加成功')
    }).catch(error=>{
       let url = path.join(__dirname,'../router/logs.txt');
        fs.readFile(url,"utf-8",(err,result)=>{
            console.log(result)
          addLogs("../router/logs.txt",`${logs}${JSON.stringify(error)}${new Date()}`);
        }) 
        res.redirect(`/admin/regin?message=查看输入信息格式`)
    })
})

admin.get("/logout",(req,res)=>{
    // 删除session
    req.session.destroy(function(){
        // 删除cookie
        res.clearCookie("connect.sid")
        //重定向到用户登录页面
        res.redirect("/admin/login")
    })

})
// 数据库添加方法
admin.post("/addChara",async (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    Chara.create(req.body).then(_res=>{
        console.log(`${_res},添加成功`)
        res.send("添加成功")
    }).catch(error=>{   
        addLogs("../router/logs.txt",`${JSON.stringify(error)}${new Date()}`);
        res.send("添加失败")
    })
})
//数据可修改方法
admin.post("/CharaModify",async (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    let _id = req.query.id;
    let modifyData = await Chara.findOne({_id:_id});
    await Chara.updateOne(modifyData,req.body).then(_res=>{
        console.log(_res)
        res.send("修改成功")
    }).catch(error=>{
        console.log(error)
        res.send("修改失败")
    })
})
// 数据库删除方法
admin.post("/CharaDelete",async (req,res)=>{
    let data = await Chara.find();
    res.setHeader("Access-Control-Allow-Origin","*");
    const id = req.body.id;
    await Chara.deleteOne({_id:id}).then(res=>{
        console.log(res)
        res.send("删除成功")
    }).catch(error=>{
        console.log(error)
        res.send("删除失败")
    })
})

admin.post("/loadFile",(req,res)=>{
    //创建表单对象
    const form1 = new formidable.IncomingForm();
    //2.配置上传文件的存放位置
    form1.uploadDir = path.join(__dirname,"../public/uploads")
    //保留上传文件的后追
    form1.keepExtensions = true;
    //解析表单
    console.log(req.body)
    // res.send(form)
    form1.parse(req,(err,fields,files) => {
        
        console.log(err)
        res.send(fields)
    })
    
})
module.exports = admin;