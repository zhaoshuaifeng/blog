			window.onload=function(){
				var nav=document.getElementsByClassName("nav")[0];
				var zzc=document.getElementById("zzc");
				var nav_1=document.getElementsByClassName("nav_1")[0];
				var miao=document.getElementsByClassName("miao");
				var list1=document.getElementsByClassName("list-1")[0];
				var sec_31=document.getElementsByClassName("sec_31")[0];
				var sec41=document.getElementsByClassName("sec-41");
				var secChild=sec_31.children;
				var listChild=list1.children;
				var navChild=nav_1.children;
				var time;
				var itme;
				var chu=0;
				var lbian=0;
				var T=0.4;
				var form=document.getElementById("form");
				var sub=document.getElementById("sub");
				var foot1=document.getElementsByClassName("foot_1")[0];
				var footChild=foot1.children[1];
				var formChild=form.children;
				function jianting(){
					sub.onclick=function(){
						var tag=/^(\s*)$/;
						if(tag.test(formChild[0].children[0].value)){
							formChild[0].children[0].style.cssText=" border: 2px solid red;"
							formChild[0].children[0].value="请填写此处字段"
						}else if(tag.test(formChild[1].children[0].value)){
							formChild[1].children[0].style.cssText="border: 2px solid red;"
							formChild[1].children[0].value="请填写此处字段"
						}else if(tag.test(formChild[2].children[0].value)){
							formChild[2].children[0].style.cssText=" border: 2px solid red;"
							formChild[2].children[0].value="请填写此处字段"
						}
					}
				}
				function suo(){
					footChild.onmousemove=function(){
						footChild.children[0].children[0].style.cssText=" border: 1px solid #FCAC14; transition: all 1s;"
						footChild.children[0].children[1].style.cssText=" border: 1px solid #F6CC4C; transition: all 1s;"
					}					
					footChild.onmouseout=function(){
						footChild.children[0].children[0].style.cssText=" border: 1px solid #fff; transition: all 1s;"
						footChild.children[0].children[1].style.cssText=" border: 1px solid #fff; transition: all 1s;"
					}
					
				}
				jianting();
				suo();
				function xuanzhuan(){
					for(var j=0;j<sec41.length;j++){
						var sec41Child=sec41[j].children;
						for(var i=0;i<sec41Child.length;i++){
							sec41Child[i].onmouseover=function(){
								this.children[0].style.cssText=" transform:rotate(-30deg) scale(1.4,1.4); margin-left: -20px; margin-top: -60px;  transition: all 1s;"
								this.children[1].style.cssText=" bottom: 0px; transition: all 1s;"
							}
							sec41Child[i].onmouseout=function(){
								this.children[0].style.cssText=" transform:rotate(0deg) scale(1,1);  transition: all 1s;  margin-left:0px; margin-top:0px;"
								this.children[1].style.cssText=" bottom: -30px; transition: all 1s;"
							}
						}
					}
				}
				xuanzhuan();
				function texiao(){
					for(var i=0;i<secChild.length;i++){
						secChild[i].onmouseover=function(){
							var span=this.children[0].children[1];
							span.style.cssText=" width: 100%; height: 100%; left: 0px; top: 0px; background-color: rgba(230,191,85,0.7); transition: all 1s;"
							
						}
						secChild[i].onmouseout=function(){
							var span=this.children[0].children[1];
							span.style.cssText=" width: 0px; height: 0px; left: 50%; top: 50%; background-color: rgba(230,191,85,0.7); transition: all 1s;"
						}
					}
				}
				texiao();
				function jia(l){
					var op=getComputedStyle(l,null).opacity;
					var op=parseInt(op)+T;
					return op;
				}
				function lunbo(){
					if(lbian<listChild.length){
						var dis=getComputedStyle(listChild[lbian],null).display;
							listChild[lbian].style.cssText=" display: none; opacity: 0;"
							if(lbian==listChild.length-1){
								setInterval(jia(listChild[0]),50);
								listChild[0].style.cssText="display:block; opacity: op; transition:all 1s;";
							}else{
								setInterval(jia(listChild[lbian+1]),50)
								listChild[lbian+1].style.cssText=" display: block;  opacity: op; transition:all 1s;";
							}
						lbian++;
					}else{
						lbian=0;
					}
				
				}
				itme=setInterval(lunbo,2000)
				function yidong(e){
					for(var i=0;i<navChild.length;i++){
						var a=navChild[i];
						a.index=i;
						navChild[i].onclick=function(){
							var hei=document.documentElement.scrollTop||document.body.scrollTop;
							var offset=miao[this.index].offsetTop;
							document.documentElement.scrollTop=offset;
						}
					}
				}
				yidong();
				function mouse(){
					for(var w=0;w<navChild.length;w++){
						navChild[w].onmouseover=function(){
							this.children[0].style.cssText=" width: 80px; transition: all 0.5s;"
						}
						navChild[w].onmouseout=function(){
							this.children[0].style.cssText=" width: 0px; transition: all 0.5s;"
						}
					}
				}
				mouse();
				function move(){
					if(chu<navChild.length){
						var height=parseInt(getComputedStyle(navChild[chu],null).height);
						if(height==0){
							navChild[chu].style.cssText=" height: 100%; transition: all 0.6s;"
							chu++;
						}else{
							navChild[chu].style.cssText=" height: 0%; transition: all 0.6s;"
						}	
					}else{
						clearInterval(time);
						chu=0;
					}
				}
				nav.onclick=function(){
					var height=parseInt(getComputedStyle(zzc,null).height);
					if(height==0){
						zzc.style.cssText=" height: 100%; transition: all 0.6s;"
						setTimeout(function(){
							time=setInterval(move,100)
						},500)
					}else{
						time=setInterval(move,100)
						setTimeout(function(){
							zzc.style.cssText=" height: 0%; transition: all 0.6s;"
						},100)
					}
				}
				
			}