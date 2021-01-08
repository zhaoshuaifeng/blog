const mongoose = require("mongoose");
const course = new moongoose.Schema({
})

const Course =new mongoose.Schema({
    username:{
        type:String,
        required:[true,'用户名过长'],
        //保证名字不重复 unique
        unique:true,
        minlength:2,
        maxlength:5
    },
    phone:{
        type:String,
        required:[true,'请填写正确格式的手机号'],
        maxlength:11,
        minlength:8
    },
    role:{
        type:String,
        default:1
    },
    userpass:{
        type:String,
        required:[true,"密码长度只能是3到7"],
        minlength:3,
        maxlength:7
    }
})
//创建集合
const User = mongoose.model("User",Course);

const Character = mongoose.Schema({
    username:{
        type:String,
        required:[true,"请输入姓名"]
    },
    userGender:{
        type:String,
        required:[true,"请输入性别"]
    },
    userCategory:{
        type:String,
        required:[true,"请输入专业类别"]
    },
    userTitle:{
        type:String,
        required:[true,"请输入专业名称"]
    },
    userPhone:{
        type:String,
        minlength:8,
        maxlength:12,
        required:[true,"请输入电话和确认电话格式"]
    }
})

const Chara = mongoose.model("Chara",Character);
// let row = {
//     username:"小明",
//     userGender:"男",
//     userCategory:"计算机",
//     userTitle:"前端",
//     userPhone:"15131075078"
// }
// Chara.create(row).then(res=>{
//     console.log(res)
// })
// User.create({
//     username:"zsf",
//     phone:"15131075078",
//     role:"0",
//     userpass:"123456"
// }).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

module.exports = {
    User,Chara
};