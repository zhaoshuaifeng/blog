window.onload=function(){
	var head=document.getElementsByTagName("head")[0];
	var body=document.getElementsByTagName("body")[0];
	var link=document.createElement("link"),scr1=document.createElement("script"),scr2=document.createElement("script");
	link.href="/css/xinzeng.css";
	link.setAttribute("rel","stylesheet")
	scr1.setAttribute("src","/js/xinzeng.js");
	scr2.setAttribute("src","/js/watermark.js");
	head.appendChild(link);
	body.appendChild(scr1)
	body.appendChild(scr2)
}