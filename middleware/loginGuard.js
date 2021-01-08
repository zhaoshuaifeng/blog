const guard = (req,res,next)=>{
    console.log(req.url)
    console.log(req.session.username)
    if(req.url != '/login' && req.url != '/regin' && !req.session.username){
        res.redirect("/admin/login")
    }else{
        next()
    }
}
module.exports = guard;