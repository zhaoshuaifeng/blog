	var lk=document.getElementsByClassName("lk")[0];
	var zhe=document.getElementById("zhe");
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	var btn=document.getElementsByClassName("btn")[0].children[0];
	var ys=document.getElementsByClassName("ys")[0];
	var ysChild=ys.children[1];
	var ysChild2=ys.children[0];
	var list=document.getElementsByClassName("list")[0];
	var listChild=list.children;
	var xk=1;			//字体的大小
	var x=canvas.width; //画布的宽
	var y=canvas.height;//画布的高
	var zhi={x:0,y:0};	//下笔的初始位置
	var isFal=false;	//检测是否落笔
	var color=null;		//画笔的颜色
	var c=0;			
	var shi=0;			
	var qi=null;		//手指滑动的初始位置
	window.ontouchstart=function(e){
		var touch=e.touches[0];
		qi=touch.screenX;
	}
	window.ontouchmove=function(e){
		var touche=e.touches[0];
		var width=parseInt(touche.screenX-qi);
		var w=parseInt(width/2);
		if(qi<touche.screenX){
			zhe.style.cssText="width:"+w+"px; left:0%; margin-left:"+-(w/2)+"px; border-radius:70%;";
		}
	}
	window.ontouchend=function(e){
		var touchs=e.touches[0];
		zhe.style.cssText="width:0px; transition: all 1s;"
	}
	function sjys(){
		var data=[];
		var a="123456789abcdef";
		for(var i=0;i<6;i++){
			var v=parseInt(Math.random()*a.length);
			data.push(a[v]);
		}
		return data.join("");
	}
	function dian(){
		ysChild.onclick=function(){
			shi++;
			if(shi>0){
				this.innerText="换一批"
			}
			list.innerHTML="";
			for(var i=0;i<4;i++){
				var li=document.createElement("li");
				li.className="LC";
				li.style.cssText="background-color:#"+sjys()+";"
				list.appendChild(li);
			}
			q();
		}
		ysChild2.onblur=function(){
			xk=this.value;
		}
	}
	dian();
	function q(){
		for(var i=0;i<listChild.length;i++){
			listChild[i].onclick=function(){
				var col=getComputedStyle(this,null).backgroundColor;
				color=col;
			}
		}
	}
	q();
	function windowc(x,y){
		var length=canvas.getBoundingClientRect();
		return {x:Math.round(x-length.left),y:Math.round(y-length.top)}
	}
	function move(pain){
		var xinzhi=windowc(pain.x,pain.y);
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle=color;
		ctx.lineWidth=xk;
		ctx.lineCap="round";
		ctx.textJoin="round";
		ctx.moveTo(zhi.x,zhi.y);
		ctx.lineTo(xinzhi.x,xinzhi.y);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
		zhi=xinzhi;
	}
	function jes(){
		isFal=false;
	}
	canvas.onmouseout=function(e){
		e.preventDefault();
		isFal=false;
	}
	canvas.onmousedown=function(e){
		e.preventDefault();
		zhi=windowc({x:e.clientX,y:e.clientY});
		isFal=true;
	}
	canvas.onmousemove=function(e){
		e.preventDefault();
		if(isFal){
			move({x:e.clientX,y:e.clientY});
		}
	}
	canvas.onmouseup=function(e){
		e.preventDefault();
		jes()
	}
	canvas.addEventListener("touchstart",function(e){
		e.preventDefault();
		touch=e.touches[0];
		zhi=windowc({x:touch.pageX,y:touch.pageY});
		isFal=true;
	})
	canvas.addEventListener("touchmove",function(e){
		e.preventDefault();
		touch=e.touches[0];
		if(isFal){
			move({x:touch.pageX,y:touch.pageY});
		}
	})
	canvas.addEventListener("touchend",function(e){
		e.preventDefault();
		 touch=e.touches[0];
		jes();
	})
	function hua(){
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle="red";
		ctx.moveTo(0,0);
		ctx.lineTo(x,y);
		
		ctx.moveTo(x,0);
		ctx.lineTo(0,y);	
		
		ctx.moveTo(0,y/2);
		ctx.lineTo(x,y/2);			
		
		ctx.moveTo(x/2,0);
		ctx.lineTo(y/2,y);
		
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
	}
	function clear(){
		btn.onclick=function(){
			ctx.clearRect(0,0,x,y);
			hua()
		}
	}
	hua();
	clear()