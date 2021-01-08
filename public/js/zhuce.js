			window.onload=function(){
				var json=[];
				var form=document.getElementById("form");
				var btn=document.getElementById("btn");
				var formChild=form.children;
				formChild[0].children[1].onblur=function(){
					var tag=/^(\s*)$/;
					if(tag.test(formChild[0].children[1].value)){
						this.style.cssText=" border:2px solid red;"
					}else{
						this.style.cssText="border:1px solid #FABC0F;";
					}
				}
				formChild[1].children[1].onblur=function(){
					var tag=/^([1]{1}\w{10})$/;
					if(tag.test(formChild[1].children[1].value)){
						this.style.cssText="border:1px solid #FABC0F;";
					}else{
						this.style.cssText=" border:2px solid red;"
					}
				}
				formChild[2].children[1].onblur=function(){
					var tag=/^([a-z]{3}\d{4})$/
					if(tag.test(formChild[2].children[1].value)){
						this.style.cssText="border:1px solid #FABC0F;";
						document.getElementsByClassName("span_1")[0].innerHTML=""
					}else{
						this.style.cssText=" border:2px solid red;"
						document.getElementsByClassName("span_1")[0].innerHTML="请输入前两位3个字母和4位数字"
					}
				}
				formChild[3].children[1].onblur=function(){
					if(this.value==formChild[2].children[1].value){
						this.style.cssText="border:1px solid #FABC0F;";
						document.getElementsByClassName("span_1")[1].innerHTML=""
					}else{
						this.style.cssText=" border:2px solid red;"
						document.getElementsByClassName("span_1")[1].innerHTML="密码错误，请您再好好想想"
					}
				}
				btn.onclick=function(){
					var tag=/^(\s*)$/;
					var tags=/^([1]{1}\w{10})$/;
					var tages=/^([a-z]{3}\d{4})$/;
					if(tag.test(formChild[0].children[1].value)){
						formChild[0].children[1].onblur()
					}else if(!tags.test(formChild[1].children[1].value)){
						formChild[1].children[1].onblur();
					}else if(!tages.test(formChild[2].children[1].value)){
						formChild[2].children[1].onblur()
					}else if(tag.test(formChild[3].children[1].value)){
						formChild[3].children[1].value="请确认密码"
					}else{
						json.push(formChild[0].children[1].value,formChild[1].children[1].value,formChild[2].children[1].value);
						localStorage.setItem("json",JSON.stringify(json));
						window.location.href="dengl.html"
					}
				}
			}