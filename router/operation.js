const express = require("express")
const router = express.Router();
const {User} = require("../model/user");

router.get("/getJson",(req,res) => {
    let data = User.find();
    let result = {};
    result.msg="成功";
    result.list=data;
    console.log(data)
    res.status(200).render('')
})
module.exports = router;