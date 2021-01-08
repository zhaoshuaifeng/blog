const fs = require("fs");
const path = require("path");

function getLogs(FilePath){
    if(!FilePath){
        return;
    }
    let url = path.join(__dirname,FilePath);
    console.log(url)
    fs.readFile(url,"utf-8",(err,result)=>{
        console.log(err)
        console.log(result)
        if(err){
            return 400;
        }else{
            return result;
        }
    })
}

function addLogs(file,data=""){
    let url = path.join(__dirname,file);
    let params = JSON.stringify(data);
    fs.writeFile(url,params,(err)=>{
        if(err){
            return false;
        }else{
            return 200;
        }
    })
}

module.exports = {
    getLogs , addLogs
}