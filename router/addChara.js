const express = require("express");
const Chara = express.Router();
const path = require("path")

Chara.post("/AChara",(req,res)=>{
    res.send("sd")
})

module.exports = {
    Chara
}