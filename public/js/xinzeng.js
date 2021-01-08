				var btn=document.getElementById("btn");
				var btn1=document.getElementById("btn1");
				var div2=document.getElementById("div2");
				var div3=document.getElementById("span");
				var mtt=document.getElementById("mtt");          //模态框
				var list=document.getElementById("list");
				var quequ=document.getElementsByClassName("quequ"); //模态框的确定按钮
				var quequ1=document.getElementsByClassName("quequ1");  //模态框的取消按钮
				var select=document.getElementById("select");		//查找下拉框
				var tong=document.getElementById("tong");  
				var select_LX=document.getElementById("select_LX");  ////查找类型的下拉框
				var listChild=list.children;
				var o=0;		//自行创建的id号
				var chu=1;		//下面的页码号
				var json=null;  //个人内容职称数据
				var data=null;  //个人内容数据
				var url="./json.json";  //数据的地址
				function chuan(){
						　　$.ajax({
					　　　　url:url,
					　　　　type:"get",
						    async:false,
						　　success:function(res){
							 	var text=res;
							 	data=text.data;json=text.json;				//给内容赋值
							 	var ul=document.createElement("ul");       
								var xin=function(){
										var li=document.createElement("li");
										li.innerHTML=chu;
										li.id="li";
										ul.appendChild(li);
										div3.appendChild(ul);
										li.onclick=function(){
											var index=this.innerHTML-1;
											var show=list.querySelector(".show");
											var red=ul.querySelector("#csb");
											red.setAttribute("id","li");
											this.setAttribute("id","csb");
											show.setAttribute("class","hide");
											listChild[index].setAttribute("class","show");
										}
										if(chu<=1){
											ul.children[0].setAttribute("id","csb");
										}
									btn1.onclick=function(){
										var que=confirm("确定要新建一页吗");
										if(que){
											chu++;
											if(chu==3){
												var li=document.createElement("li");
												var p=document.createElement("p");
												var iframe=document.createElement("iframe");
												iframe.className="iframe";
												p.innerHTML="第"+chu+"页";
												p.id="p1";
												li.className="hide";
												iframe.setAttribute("src","https://www.baidu.com/");
												li.appendChild(p);
												li.appendChild(iframe);
											}else if(chu==4){
												var li=document.createElement("li");
												var p=document.createElement("p");
												var iframe=document.createElement("iframe");
												iframe.className="iframe";
												p.innerHTML="第"+chu+"页";
												p.id="p1";
												li.className="hide";
												iframe.setAttribute("src","http://tf-zsf.zsbb0018.cn/");
												li.appendChild(p);
												li.appendChild(iframe);
											}else if(chu==5){
												var li=document.createElement("li");
												var p=document.createElement("p");
												var iframe=document.createElement("iframe");
												iframe.className="iframe";
												p.innerHTML="第"+chu+"页";
												p.id="p1";
												li.className="hide";
												iframe.setAttribute("src","mo/index-1.html");
												li.appendChild(p);
												li.appendChild(iframe);
											}else if(chu==6){
												var li=document.createElement("li");
												var p=document.createElement("p");
												var iframe=document.createElement("iframe");
												iframe.className="iframe";
												p.innerHTML="第"+chu+"页";
												p.id="p1";
												li.className="hide";
												iframe.setAttribute("src","mo/canvas写字/index.html");
												li.appendChild(p);
												li.appendChild(iframe);
											}else{
												var li=document.createElement("li");
												var textarea=document.createElement("textarea");
												var p=document.createElement("p");
												p.innerHTML="第"+chu+"页";
												p.id="p1"
												textarea.className="text";
												li.className="hide";
												li.appendChild(p);
												li.appendChild(textarea);
											}
											list.appendChild(li);
											xin();
										}	
									}
								}
								xin();
								var chuang=function(){						//新建方法
										var table=document.createElement("table");
										table.id="table_sec";
										var theader=document.createElement("theader");
										var tr=document.createElement("tr");
										for(var i in json){
											var td=document.createElement("td");
											var option=document.createElement("option");
											td.innerHTML=json[i];
											option.innerHTML=json[i];
											tr.appendChild(td);
											select_LX.appendChild(option);
										}
										var td=document.createElement("td");
										td.innerHTML="修改/删除";
										tr.appendChild(td);
										theader.appendChild(tr);
										table.appendChild(theader);
										var tbody=document.createElement("tbody");
										tbody.id="tbody";
										table.appendChild(tbody);
										for(var c=0;c<data.length;c++){
											var tr=document.createElement("tr");
											var td=document.createElement("td");
											td.innerHTML=o;
											o++;
											tr.appendChild(td);						
											var zu=data[c];
												for(var l in zu){
													var td=document.createElement("td");
														td.innerHTML=zu[l];
														if(zu[l]==""){
															td.innerHTML="— —";
														};
														if(!zu.电话==""){
															if(l=="电话"){
																td.innerHTML=zu[l].slice(0,3)+"*****"+zu[l].slice(8,11)
															}
														}
														tr.appendChild(td);
												}
												var td=document.createElement("td");
												var shan=document.createElement("button");
												shan.innerHTML="删除";
												shan.id="shan";
												shan.onclick=function(){
													var chu=this.parentNode.parentNode;
													var index=chu.children[1].innerHTML;
													if(tbody.children.length<=1){
														var s=confirm("姓名为"+index+"最后一个了，确定要删除吗");
														if(s){
															tbody.removeChild(chu);
														}
													}												
													var que=confirm("是否删除姓名为："+index);
													if(que){
														tbody.removeChild(chu);
														for(cha=0;cha<select.length;cha++){
															if(chu.children[1].innerHTML==select.children[cha].innerHTML){
															 	select.removeChild(select.children[cha]);
															}
														}
													}
												}
												var xiu=document.createElement("button");
												xiu.innerHTML="修改";
												xiu.id="xiu";
												xiu.onclick=function(){
													var gai=this.parentNode.parentNode.children;
													mtt.style.cssText=" top: 50%; opacity: 1; transition: all 1s;"
													mtt.getElementsByTagName("h1")[0].innerHTML="修改"
													var p=mtt.children[1].children;
													for(var i=1,v=0;i<gai.length-1,v<gai.length-2;v++,i++){
														p[v].children[1].value=gai[i].innerHTML;
													}
													quequ[0].onclick=function(){
														var thisp=this.parentNode.parentNode.children;
														for(var i=1,v=0;i<gai.length-1,v<gai.length-2;v++,i++){
															gai[i].innerHTML=p[v].children[1].value;	
															thisp[v].children[1].value="";
														}
														mtt.style.cssText="top: -50%;opacity: 0; transition: all 1s;"
														mtt.getElementsByTagName("h1")[0].innerHTML=""
													}
													quequ[1].onclick=function(){
														mtt.style.cssText="top: -50%; opacity: 0; transition: all 1s;"
														mtt.getElementsByTagName("h1")[0].innerHTML=""
														var thisp=this.parentNode.parentNode.children;
														for(var q=0;q<thisp.length-1;q++){
															thisp[q].children[1].value="";
														}
													}
												}
												td.appendChild(shan);
												td.appendChild(xiu);
												tr.appendChild(td);
												mtt.style.cssText=" top: -50%;opacity: 0; transition: all 1s;"
											tbody.appendChild(tr);
										}
										btn.onclick=function(){
											mtt.style.cssText=" top: 50%;opacity: 1; transition: all 1s;"
											mtt.getElementsByTagName("h1")[0].innerHTML="新增一行"
											var tr=document.createElement("tr");
											quequ[0].onclick=function(){
												var thisp=this.parentNode.parentNode.children;
												var shu=[];
												for(var q=0;q<thisp.length-1;q++){
													var val=thisp[q].children[1].value;
													shu.push(val);
													thisp[q].children[1].value="";
												}
												var option=document.createElement("option");
												option.innerHTML=shu[select_LX.selectedIndex-1];  
												select.appendChild(option);
												var tr=document.createElement("tr");
												var td=document.createElement("td");
												td.innerHTML=o;
												tr.appendChild(td);	
												for(var k in shu){
													var td=document.createElement("td");
													td.innerHTML=shu[k];
													if(shu[k]==""){
														td.innerHTML="— —";
													};
//													if(!shu[4]==""){
//														if(k=="4"){
//															td.innerHTML=zu[l].slice(0,3)+"*****"+zu[l].slice(8,11);
//														}
//													}
													tr.appendChild(td);
												}
												var td=document.createElement("td");
												var shan=document.createElement("button");
												shan.innerHTML="删除";
												shan.id="shan";
												shan.onclick=function(){
													var chu=this.parentNode.parentNode;
													var index=chu.children[0].innerHTML;												
													var que=confirm("是否删除序号为："+index);
													if(que){
														table.deleteRow(index);
														for(cha=0;cha<select.length;cha++){
															if(chu.children[1].innerHTML==select.children[cha].innerHTML){
															 	select.removeChild(select.children[cha]);
															}
														}
													}
												}
												var xiu=document.createElement("button");
												xiu.innerHTML="修改";
												xiu.id="xiu";
												xiu.onclick=function(){
													var gai=this.parentNode.parentNode.children;
													mtt.style.cssText=" top: 50%;opacity: 1; transition: all 1s;"
													mtt.getElementsByTagName("h1")[0].innerHTML="修改"
													var p=mtt.children[1].children;
													for(var i=1,v=0;i<gai.length-1,v<gai.length-2;v++,i++){
														p[v].children[1].value=gai[i].innerHTML;
													}
													quequ[0].onclick=function(){
														for(var i=1,v=0;i<gai.length-1,v<gai.length-2;v++,i++){
															gai[i].innerHTML=p[v].children[1].value;
														}
														mtt.style.cssText="top: -50%;opacity: 0; transition: all 1s;"
														mtt.getElementsByTagName("h1")[0].innerHTML=""
													}
													quequ[1].onclick=function(){
														mtt.style.cssText="top: -50%;opacity: 0; transition: all 1s;"
														mtt.getElementsByTagName("h1")[0].innerHTML=""
														var thisp=this.parentNode.parentNode.children;
														for(var q=0;q<thisp.length-1;q++){
															thisp[q].children[1].value="";
														}
													}
												}
												td.appendChild(shan);
												td.appendChild(xiu);
												tr.appendChild(td);
												mtt.style.cssText=" top: -50%;opacity: 0; transition: all 1s;"
												tbody.appendChild(tr);
												o++;
												ydbys()
											}
											quequ[1].onclick=function(){
												mtt.style.cssText=" top: -50%; opacity: 0;transition: all 1s;"
												mtt.getElementsByTagName("h1")[0].innerHTML=""
												var thisp=this.parentNode.parentNode.children;
												for(var q=0;q<thisp.length-1;q++){
													thisp[q].children[1].value="";
												}
											}
										}
										div2.appendChild(table);
								}
								chuang()
								var tbody=document.getElementById("tbody").children;
								var tbod=document.getElementById("tbody");
								function dian(){
									var thead=tbod.parentNode.children[0].children[0];
									var height=parseInt(getComputedStyle(thead,null).height);
									var span1=document.getElementById("span1");
									var em=span1.getElementsByTagName("em")[0];
									var cha_text=document.getElementsByClassName("cha_text")[0];
									var LX_qd=document.getElementById("LX_qd");
									var index=0,leixing=null;
									LX_qd.onclick=function(){
											index=select_LX.selectedIndex;
											leixing=select_LX.children[index].innerHTML;
											var selChild=select.children;
											for(var c=0;c<selChild.length;c++){
												select.innerHTML="";
											}
											create_cha(index);
											ChTetChild.value="";
											var text=select_LX.children[index].innerHTML;
											ChTetChild.placeholder="请输入"+text+"查询";
									}
									function create_cha(t){
										for(var i=0;i<tbody.length;i++){
											var option=document.createElement("option");
											var sele_zhi=tbody[i].children[t].innerHTML;
											option.innerHTML=sele_zhi;
											select.appendChild(option);
										}
									}
									var ChTetChild=cha_text.children[0];
									select_LX.removeChild(select_LX.children[0]);
									em.onmouseover=function(){
										em.style.cssText="background-color: #000000; border-radius: 20px;padding: 5px 10px;  text-shadow: 5px 5px 5px #02f7d2; color: #02f7d2; font-style: normal; font-size: 12px; transition: all 1s;"
									}
									em.onmouseout=function(){
										em.style.cssText="transition: all 1s; color: #000000;"
									}
									em.onclick=function(){
										_onChaXun(select,index,leixing);
									}
									function _onChaXun(select,index,leixing){ 		//点击查询方法
										var array=0;
										for(var i=0;i<tbody.length;i++){
											tbody[i].style.cssText="border: 1px solid #00ABE8;width:100%;"
												if(tbody[i].children[index].innerHTML==select.value){
														array+=1;
														tbod.style.cssText="margin-top: "+array*(height+5)+"px; display: block;"
													 	tbody[i].children[index].parentNode.style.cssText=" color:red; left:0px; position: absolute; top:"+array*(height+5)+"px;"
														tbody[i].children[index].style.cssText=" color:#f911f9; font-size: 20px;"	
												}else{
													
												}
										}
									}
									ChTetChild.onkeyup=function(event){
										var e=event||window.event||arguments.callee.caller.arguments[0];
										if(e&&e.keyCode==13){
											_onChaXun(ChTetChild,index,leixing);
										}
									}
								}
								var ydbys=function(){
									var tbody=document.getElementById("tbody");
									var bg_by=tbody.querySelectorAll("td");
									for(var i=0;i<bg_by.length;i++){
										bg_by[i].onmouseenter=function(){
											this.style.cssText=" background-color:#ECEEF0; transition:all 0.1s;"
										}							
										bg_by[i].onmouseleave=function(){
											this.style.cssText=" background-color:#ffffff; transition:all 0.2s;"
										}
									}
								}
								dian();
								ydbys()
								function tj(){				//统计数量发法
									tong.onclick=function(){
										var nan=[];
										var nv=[];
										var bd=0;
										var tbodyChild=tbod.children;
										for(var i=0;i<tbodyChild.length;i++){
											var ji=tbodyChild[i].children[2];
											if(ji.innerHTML=="男"){
												nan.push("1")
											}else if(ji.innerHTML=="女"){
												nv.push("2");
											}else{
												bd+=1;
											}
										}
										var nanz=parseInt(nan.length);
										var nvz=parseInt(nv.length);
										document.getElementById("span2").innerHTML=nanz==0?"无":nanz+"个人";
										document.getElementById("span3").innerHTML=nvz==0?"无":nvz+"个人";
										document.getElementById("span4").innerHTML=(nanz+nvz)==0?"无":(nanz+nvz)+"个人";
										alert("有"+bd+"个表格无法识别男女");
									}
								}
								tj();
						　　}
					  　});
				}
				chuan();
//				function xml(){
//					var xmlhttp;
//					if(window.XMLHttpRequest){
//						xmlhttp=new XMLHttpRequest();
//					}else{
//						xmlhttp=new ActiveXObject();
//					}
//					return xmlhttp;
//				}
//				var xmlhttp=new xml();
//				xmlhttp.open("get",url);
//				xmlhttp.send();
//				xmlhttp.onreadystatechange=function(){
//					if(xmlhttp.readyState==4){
//						if(xmlhttp.status==200){
//
//						}
//					}
//				}
var loadFile = document.getElementsByClassName("loadFile")[0];
var inpFile = document.getElementById("inpFile");
loadFile.onclick=function(){
	console.log(inpFile)
	localStorage.setItem("k",inpFile)
}