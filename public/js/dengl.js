	window.onload=function(){
		var form=document.getElementById("form");
		var span1=document.getElementsByClassName("span_1")[0];
		var btn=document.getElementById("btn");
		var init=document.getElementById("init");
		var formChild=form.children;
		var json=JSON.parse(localStorage.getItem("json"));
		function deng(){
			span1.onclick=function(){
				var shu=[];
				for(var i=0;i<4;i++){
					var ind=parseInt(Math.random()*10);
					shu.push(ind);
				}
				span1.innerHTML=shu.join("");
			}
			console.log(formChild[0].children[1]);
			formChild[3].children[1].onblur=function(){
				var htm=span1.innerHTML;
				if(htm==formChild[3].children[1].value){
					document.getElementById("btn").disabled="";
				}else{
					alert("验证码不正确")
				}
			}
			btn.onclick=function(){
				jiant()
			}
			init.onclick=function(){
				jiant()
			}
		}
		deng()
		function jiant(){

			let row = {};
			row['username'] = formChild[0].children[1].value;
			row['phone'] = formChild[1].children[1].value;
			row['password'] = formChild[2].children[1].value;
			console.log(row)
			// if(formChild[0].children[1].value!=json[0]){
			// 	formChild[0].children[1].value="请输入正确的用户名";
			// }else if(!formChild[1].children[1].value==json[1]){
			// 	formChild[1].children[1].value="请输入正确的手机号"
			// }else if(!formChild[2].children[1].value==json[2]){
			// 	formChild[2].children[1].value="请输入正确的密码11"
			// }else{

				// window.location.href="xiang/xiangm.html"
			// }
		}
	}