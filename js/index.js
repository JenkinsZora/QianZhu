window.onload=function(){
	var bigbox=document.getElementById("bigbox");
	var innerbox=document.getElementsByClassName("innerbox")[0];
	var box=innerbox.children;
	var cw=document.documentElement.clientWidth;
	var ch=document.documentElement.clientHeight;
	var line=document.getElementsByClassName("line")[0];
	bigbox.style.width=cw;
	bigbox.style.height=ch+"px";
	var num=0;
	var list=document.getElementsByClassName("list");
	var nav=document.getElementsByTagName("nav")[0];
	list[num].style.color="#00DFB9";
	line.style.width=list[num].offsetWidth+"px";
	line.style.left=list[num].offsetLeft-12+"px";
	
	
	//全屏滚动动画执行完
	bigbox.addEventListener("webkitTransitionEnd",function(){
		moveListener();
	},false);
	//点击导航栏的全屏滚动
	function asdfw(){
		if (num!==0) {
			nav.setAttribute("id","nav");
		}else{
			nav.setAttribute("id","");
		}
		var navBtn=document.getElementsByClassName("navBtn")[0];
		list[num].classList.add('listSm');
		navBtn.addEventListener('click',function(e){
			
			list[num].classList.remove('listSm');
			num = [...list].indexOf(e.target)
			if (num!==0) {
				nav.setAttribute("id","nav");
			}else{
				nav.setAttribute("id","");
			}
			list[num].classList.add('listSm');
			bigbox.style.top=-ch*num+"px";
		},false)
	}
	asdfw();
	
	for (var i = 0; i < box.length; i++) {
		box[i].style.height=ch+"px";
	}


	//第一屏按钮点击
	var btnOne=document.getElementsByClassName("btnOne")[0];
	function clickBtnOne(){
		btnOne.addEventListener("click",function(){
			nav.setAttribute("id","nav");
			list[num].classList.remove('listSm')
			num = 1;
			line.style.width=list[num].offsetWidth+"px";
			line.style.left=list[num].offsetLeft-12+"px";
			list[num].classList.add('listSm')
			bigbox.style.top=-ch*num+"px";

		},false)
	}
	clickBtnOne();
	
	//导航栏上划线的效果
	function ifFor(){
		list[num].classList.remove('listSm')
		line.style.width=list[num].offsetWidth+"px";
		line.style.left=list[num].offsetLeft-12+"px";
		var navBtn=document.getElementsByClassName("navBtn")[0];
		navBtn.addEventListener('click',function(e){
			list[num].classList.remove('listSm')
			num = [...list].indexOf(e.target);
			line.style.width=list[num].offsetWidth+"px";
			list[num].classList.add('listSm')
			line.style.left=list[num].offsetLeft-12+"px";

		},false)
		Array.prototype.slice.call(list).forEach(function(value,index){
			value.onclick=function(){
				if (num!==0) {
					nav.setAttribute("id","nav");
				}else{
					nav.setAttribute("id","");
				}

				if (num>=box.length-1) {
					// alert(1);
					line.style.display="none";
				}else{
					line.style.display="block";
				}
				list[num].classList.add('listSm')
				line.style.width=list[num].offsetWidth+"px";
				line.style.left=list[num].offsetLeft+"px";
			}
			value.onmouseover=function(e){
				line.style.width=e.target.offsetWidth+"px";
				line.style.left=e.target.offsetLeft-12+"px";
			}
			var navBtn=document.getElementsByClassName("navBtn")[0];
			navBtn.onmouseleave=function(){
				line.style.width=list[num].offsetWidth+"px";
				line.style.left=list[num].offsetLeft-12+"px";
			}
		})
	}
	ifFor();

	// 全屏滚动
	function wheel(e){
			if (window.innerWidth>1080) {
				line.style.left=list[num].offsetLeft+"px";
				list[num].classList.remove('listSm');
				list[num].style.color="#ccc";

				//向下滚
				if (e.deltaY>0) {
					if (num < box.length-1) {
						num++;
						clearListener();
					}else{
						return ;
					}
				}else if(e.deltaY<0){//向上滚
					if (num> 0) {
						num--;
						clearListener();
					}else{
						num = 0;
					}
				}

				if (num==8) {
					list[num-1].style.color="#00DFB9";
				};

				if (num>=box.length-1) {
					line.style.display="none";
				}else{
					line.style.display="block";
				}


				if (num!==0) {
					nav.setAttribute("id","nav");
				}else{
					nav.setAttribute("id","");
				}
				bigbox.style.top=-ch*num+"px";
				list[num].classList.add('listSm');
				list[num].style.color="#00DFB9";
				line.style.width=list[num].offsetWidth+"px";
				line.style.left=list[num].offsetLeft-12+"px";
			}else{
				line.style.left=list[num].offsetLeft+"px";
				list[num].classList.remove('listSm');
				list[num].style.color="";
				//向下滚
				if (e.deltaY>0) {
					if (num < box.length-1) {
						num++;
						clearListener();
					}else{
						return ;
					}
				}else if(e.deltaY<0){//向上滚
					if (num> 0) {
						num--;
						clearListener();
					}else{
						num = 0;
					}
				}

				if (num>=box.length-1) {
					line.style.display="none";
				}else{
					line.style.display="block";
				}


				if (num!==0) {
					nav.setAttribute("id","nav");
				}else{
					nav.setAttribute("id","");
				}
				bigbox.style.top=-ch*num+"px";
				list[num].classList.add('listSm');
				line.style.display="none";
			}
		}
	function moveListener(){
		window.addEventListener("mousewheel",wheel,false);
	}
	function clearListener(){
		window.removeEventListener("mousewheel",wheel,false);
	}
	moveListener();


	
	

	// 第一屏新闻上下滚动
	var NewsAll=document.getElementsByClassName("NewsAll")[0];
	var index=0;
	function News(){
		NewsAll.style.marginTop="";
		if (index>=4) {
			index=0;
		}else{
			index++;
		}
		NewsAll.style.marginTop=-20*index+"px";
	}
	setInterval(News,1000);
	

	


	// 第一屏轮播
	var bgBox=document.getElementById("bgBox");
	var homepageLunbo=document.getElementsByClassName("homepageLunbo");
	bgBox.style.width=cw*(homepageLunbo.length)+"px";
	var LunBoNum=0;
	var indexNum=0;
	var furIndex=0;
	var time;
	var flag=true;
	var LunboBtn=document.getElementsByClassName("LunboBtn");
	// 获取第一个子元素
	function getFirstChild(obj){
		return obj.children[0];	
	}
	function getLastChild(obj){
		return obj.children[obj.children.length-1];	
	}
	for (var i = 0; i < homepageLunbo.length; i++) {
		homepageLunbo[i].style.width=cw+'px'  
	};
	
	function move(){
		LunBoNum++;
		if (LunBoNum>LunboBtn.length-1) {
			LunBoNum=0;
		};
		animate(bgBox,{left:-cw},function(){
			var fir=bgBox.children[0];
			bgBox.appendChild(fir);
			bgBox.style.left=0

			for(var j=0;j<LunboBtn.length;j++){
				LunboBtn[j].style.background=""
			}
			LunboBtn[LunBoNum].style.background="#00DFB9"
		})
	}
	function moveLunBo2(){
		time=setInterval(move,2000);
	}
	function clearLunBo2(){
		clearInterval(time);
	}
	moveLunBo2();


	var LunboBtn=document.getElementsByClassName("LunboBtn");
	
	function hoverBtn(){
		
		for(var i=0;i<LunboBtn.length;i++){
			LunboBtn[i].index=i;
			LunboBtn[i].onmouseover=function(){
				clearLunBo2();
				indexNum=LunBoNum;
				furIndex=this.index;
				LunBoNum=this.index;
				for(var j=0;j<LunboBtn.length;j++){
					LunboBtn[j].style.background=""
				}
				LunboBtn[LunBoNum].style.background="#00DFB9";

				var cha=furIndex-indexNum;
				if (cha>0) {
					animate(bgBox,{left:-cw},function(){
					var fir=bgBox.children[0];
					bgBox.appendChild(fir);
					bgBox.style.left=0;
					indexNum=furIndex;
				})
			}else{
					var abs=Math.abs(cha);
					bgBox.style.left=-cw*abs+"px";
					for(var i=0;i<LunboBtn.length;i++){
						// animate(bgBox,left:0,)
						var fir2=getFirstChild(bgBox);
						var last=getLastChild(bgBox);
						bgBox.insertBefore(last,fir2);
					}
					animate(bgBox,{left:0},function(){
						indexNum=furIndex;
					})
				}
				moveLunBo2()
			}
		}
	}
	hoverBtn();




	// 右边栏显示隐藏
	var RightIcons=document.getElementsByClassName("RightIcons")[0];
	var hiddenNow=document.getElementsByClassName("hiddenNow")[0];
	var flag=true;
	hiddenNow.addEventListener("click",function(e){
		if (flag) {
			flag=false;
			RightIcons.style.right="-50px";
			e.target.style.transform = 'rotate(45deg)'
		}else{
			RightIcons.style.right="";
			e.target.style.transform = 'rotate(0deg)'
			flag=true;
		}
		
	},false);
	// 右边栏点击
	var up=document.getElementsByClassName("up")[0];
	var down=document.getElementsByClassName("down")[0];
	function clickUp(){
		// wheel();
		up.addEventListener("click",function(){
			list[num].style.color="#ccc";
			if (num>0) {
				num--;
			}else{
				num=0;
			}
			if (num!==0) {
				nav.setAttribute("id","nav");
			}else{
				nav.setAttribute("id","");
			}

			if (num>=box.length-1) {
				line.style.display="none";
				list[num-1].style.color="#00DFB9";
			}else{
				line.style.display="block";
			}
			bigbox.style.top=-ch*num+"px";
			list[num].style.color="#00DFB9";
			line.style.width=list[num].offsetWidth+"px";
			line.style.left=list[num].offsetLeft-12+"px";
		},false);

		down.addEventListener("click",function(){
			list[num].style.color="#ccc";
			if (num<box.length-1) {
				num++;
			}else{
				num=box.length-1;
			}
			if (num!==0) {
				nav.setAttribute("id","nav");
			}else{
				nav.setAttribute("id","");
			}
			bigbox.style.top=-ch*num+"px";
			list[num].style.color="#00DFB9";
			line.style.width=list[num].offsetWidth+"px";
			line.style.left=list[num].offsetLeft-12+"px";
		},false)
	}
	clickUp();

	// 第四屏
	var listItems=document.getElementsByClassName("list-items")[0];
	var captionMask=document.getElementsByClassName("captionMask")[0];
	listItems.addEventListener("mouseover",function(e){
		captionMask.style.display="block";
		captionMask.style.left=e.target.offsetLeft+"px";
		captionMask.style.top=e.target.offsetTop+"px";
	},false)



	//第七章选项卡轮播
	var seamless =document.getElementsByClassName("seamless")[0];
	var choseBtn=document.getElementsByClassName("choseBtn");
	var menu=document.getElementsByClassName("menu")[0];
	var curryIndex=0;
	var t;
	function seamles(){
		seamless.style.marginLeft="";
		choseBtn[curryIndex].style.background="";
		choseBtn[curryIndex].style.color="";
		if (curryIndex>=2) {
			curryIndex=0;
		}else{
			curryIndex++;
		}
		seamless.style.marginLeft=-480*curryIndex+"px";
		choseBtn[curryIndex].style.background="rgba(47,208,181,0.5)";
		choseBtn[curryIndex].style.color="#fff";
	}
	function moveLunbo(){
		t=setInterval(seamles,1000);
	}
	function clearLunbo(){
		clearInterval(t);
	}

	[...choseBtn].forEach(function(value,index){
		value.addEventListener("mouseover",function(e){
			seamless.style.marginLeft="";
			choseBtn[curryIndex].style.background="";
			choseBtn[curryIndex].style.color="";
			curryIndex=[...choseBtn].indexOf(e.target);
			seamless.style.marginLeft=-480*curryIndex+"px";
			choseBtn[curryIndex].style.background="rgba(47,208,181,0.5)";
			choseBtn[curryIndex].style.color="#fff";
		},false);
	})
	menu.onmouseover=function(){
		clearLunbo();
	}
	menu.onmouseleave=function(){
		moveLunbo();
	}
	moveLunbo();


	// 响应式导航点击
	var fontIcon=document.getElementsByClassName("fontIcon")[0];
	var flag2=true;
	fontIcon.onclick=function(){
		let navBtn=document.getElementsByClassName("navBtn")[0];
		// console.log(navBtn);
		if(flag2){
			flag2=false;
			navBtn.style.right="0px";
		}else{
			navBtn.style.right="-73px";
			flag2=true;
		}
	}


	// 改变浏览器大小
	window.onresize=function(){
		var box1One=document.getElementsByClassName("box1One")[0];
		for(var i=0;i<homepageLunbo.length;i++){
			homepageLunbo[i].style.width=window.innerWidth+"px";

		}

		// if (window.innerWidth<=1080) {
		// 	line.style.display="none";
		// 	for (var i = 0; i < list.length; i++) {
		// 		list[i].onclick=function(){
		// 			line.style.display="none";
		// 		}
		// 	};
		// };

	}


	// 第四屏小屏轮播
	var BigModel=document.getElementsByClassName("BigModel")[0];
	var threeModels=BigModel.children;
	var modelWidth=threeModels[0].offsetWidth;
	var model=0;
	var modelTime;
	var Leftjiantou=document.getElementsByClassName("Leftjiantou")[0];
	var Rightjiantou=document.getElementsByClassName("Rightjiantou")[0];
	function modelMove(){
		BigModel.style.left="";
		if (model>=threeModels.length-1) {
			model=0;
		}else{
			model++;
		};

		BigModel.style.left=-modelWidth*model+"px";
	}
	function modelMove2(){
		modelTime=setInterval(modelMove,3000)
	}
	modelMove2();
	function clearmodelMove2(){
		clearInterval(modelTime)
	}
	Rightjiantou.addEventListener("click",function(){
		clearmodelMove2();
		modelMove();
		modelMove2();
	},false);
	Leftjiantou.addEventListener("click",function(){
		clearmodelMove2();
		BigModel.style.left="";
		if (model<=0) {
			model=threeModels.length-1;
		}else{
			model--;
		}
		BigModel.style.left=-modelWidth*model+"px";
		modelMove2();
	},false);


	// 第五屏轮播
	var jiantouFirst=document.getElementsByClassName("jiantouFirst")[0];
	var jiantouSecond=document.getElementsByClassName("jiantouSecond")[0];
	var swiperContainer=document.getElementsByClassName("swiperContainer")[0];
	var modelOne=document.getElementsByClassName("modelOne");
	var fiveNum=0;
	var fiveTive;
	function fiveLunbo(){
		swiperContainer.style.left="";
		if (fiveNum>=modelOne.length-1) {
			fiveNum=0;
		}else{
			fiveNum++;
		}
		swiperContainer.style.left=-240*fiveNum+"px";
	}

	function moveFive(){
		fiveTive=setInterval(fiveLunbo,3000);
	}
	function clearFive(){
		clearInterval(fiveTive)
	}
	jiantouSecond.onclick=function(){
		clearFive();
		fiveLunbo();
		moveFive();
	}
	jiantouFirst.addEventListener("click",function(){
		clearFive();
		swiperContainer.style.left="";
		if (fiveNum<=0) {
			fiveNum=modelOne.length-1;
		}else{
			fiveNum--;
		}
		swiperContainer.style.left=-240*fiveNum+"px";
		moveFive();
	},false)
	moveFive();
}	
