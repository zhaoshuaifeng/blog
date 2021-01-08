window.onreadystatechange=function(){
if(this.readyState=="complete"){
window.write("<style>*{ margin:0px; padding:0px;}.jz{ display: flex; line-height: 500px; justify-content: center;  position: fixed; width: 100%; height: 100%; background-color:rgba(0,0,0,0.3); font-size: 25px;}</style>")
window.write("<div class='jz'>加载中，请稍后...</div>")
console.log(this.readyState);
}
}