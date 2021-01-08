				var ul2=document.getElementsByClassName("ul_2")[0];
				var ul3=document.getElementsByClassName("ul_3")[0];
				var ul2Child=ul2.children;
				var ul3Child=ul3.children;
				var tim;
				var xin=0;
				function lbt(){
					var yidong;
					var left=parseInt(getComputedStyle(ul2,null).left);
					if(left<="-1600"){
						yidong=1600;
					}else{
						yidong=-800;
					}
					ul2.style.left=left+yidong+"px";
					if(xin<ul3Child.length){
							var red=ul3.querySelector(".red");
							red.setAttribute("class","lan");
							ul3Child[xin].setAttribute("class","red");
						xin++;
					}else{
						xin=0;
							var red=ul3.querySelector(".red");
							red.setAttribute("class","lan");
							ul3Child[xin].setAttribute("class","red");
					}
					for(var i=0;i<ul3Child.length;i++){
						var a=ul3Child[i];
						a.index=i;
						ul3Child[i].onclick=function(){
							var offset=ul2Child[this.index].offsetLeft;
							var red=ul3.querySelector(".red");
							red.setAttribute("class","lan")
							this.setAttribute("class","red")
							ul2.style.left=-offset+"px";
							clearInterval(tim);
							setTimeout(function(){
								tim=setInterval(lbt,3000);
							},1000)
						}
					}
				}
				tim=setInterval(lbt,3000);