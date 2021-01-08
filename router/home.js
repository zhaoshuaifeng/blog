const express = require("express");
const {User,Chara} = require("../model/user")
const home = express.Router();

home.get("/home",(req,res)=>{
    console.log(req.session.username)
    res.render("home/xiangm",{
        msg:req.session.username
    })
})
home.post("/getUser",async (req,res)=>{
    let user = await Chara.find();
    res.setHeader("Access-Control-Allow-Origin","*");
    let result = {};
    let d = [];
    for(k in user){
        let row = {};
        row['id'] = user[k]._id;
        row['姓名'] = user[k].username;
        row['性别'] = user[k].userGender;
        row['专业类别'] = user[k].userCategory;
        row['专业名称'] = user[k].userTitle;
        row['电话'] = user[k].userPhone;
        d.push(row)
    }
    result['data'] = d;
    result['json'] = ["id号","姓名","性别","专业类别","专业名称","电话"];
    res.send(result)
})
//分页接口
home.post("/pageSize",async (req,res)=>{
    let pageSize = 6;
    let current = (req.body.current - 1) * pageSize;
    let len = await await Chara.find();
    let user = await Chara.find().skip(current).limit(pageSize);
    res.setHeader("Access-Control-Allow-Origin","*")
    let result = {};
    let d = [];
    for(k in user){
        let row = {};
        row['id'] = user[k]._id;
        row['姓名'] = user[k].username;
        row['性别'] = user[k].userGender;
        row['专业类别'] = user[k].userCategory;
        row['专业名称'] = user[k].userTitle;
        row['电话'] = user[k].userPhone;
        d.push(row)
    }
    result['data'] = d;
    result['json'] = ["id号","姓名","性别","专业类别","专业名称","电话"];
    result['total'] = len.length;
    res.send(result)
})
home.get("/user",async (req,res)=>{
    let user = await User.find();
    console.log(user)
    //使用模板引擎
    res.render("home/user",{
        msg:'123',
        user:user
    })
})
home.get("/xiangm",async (req,res)=>{
    let mes = req.query.message;
    let { username } = await User.findOne({_id:mes});
    res.render("home/xiangm",{
        msg : username
    })
})

module.exports = home;
