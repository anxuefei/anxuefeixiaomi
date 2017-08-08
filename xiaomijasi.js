window.onload = function() {
	//	轮播图开始
	//	抓取元素
	var box = document.getElementById("LunBo");
	var imgs = document.getElementsByClassName('LBT');
	var quan = document.getElementsByClassName('quan');
	var zuo = document.getElementById("left");
	var you = document.getElementById("right");
	//	生成一个总变量让其变化值都一样.
	var num = 0;
	//	创建一个调用函数
	function lb() {
		//		创建一个for循环让IMGS所有的图片都隐藏和圈的所有演示隐藏
		for(var a = 0; a < imgs.length; a++) {
			imgs[a].style.display = 'none';
			quan[a].style.background = 'rgba(0,0,0,0.3)';
			quan[a].style.border = 'none'
		};
		//		让IMGS对应下标的图片显示和圈的对应样式显示出来
		quan[num].style.background = 'rgba(255,255,255,0.3)';
		quan[num].style.border = '1px solid #A8A8A8';
		imgs[num].style.display = 'block';
	};
	//	生成一个定时器
	var timer = setInterval(function() {
		num++;
		//		判断num的值如果等等于imgs的长度就让值变为0完成循环效果
		if(num == imgs.length) {
			num = 0;
		};
		lb();
	}, 1000);
	//	清除定时器
	box.onmouseover = function() {
		clearInterval(timer);
	};
	//	恢复定时器
	box.onmouseout = function() {
		timer = setInterval(function() {
			num++;
			//		判断num的值如果等等于imgs的长度就让值变为0完成循环效果
			if(num == imgs.length) {
				num = 0;
			};
			lb();
		}, 1000);
	};
	//	给没个圈添加点击事件
	for(var b = 0; b < quan.length; b++) {
		//		给全添加标签属性并命名
		quan[b].xuhao = b;
		quan[b].onclick = function() {
			//			让num的指等于事件对象的序号
			num = this.xuhao;
			lb()
		};
	};
	//	给箭头添加点击事件
	zuo.onclick = function() {
		num--;
		//		判断num的值如果小于0就让其等于图片的长度-1;完成循环效果
		if(num < 0) {
			num = imgs.length - 1
		};
		lb();
	};
	//		判断num的值如果大于图片的长度-1就让num的值变成0;完成循环效果
	you.onclick = function() {
		num++;
		if(num > imgs.length - 1) {
			num = 0;
		};
		lb();
	};
	//	轮播图结束
	//轮播图二级菜单开始
	//抓取元素
//	var BT = document.getElementsByClassName('LunBoBT');
//	var BTnr = document.getElementsByClassName('LunBoErJi');
//	var BTk = document.getElementById("ErJiK")
	// 给每个标题添加移入事件
//	for(var z = 0; z < BT.length; z++) {
//		BT[z].xh = z;
//		BT[z].onmouseover = function() {
//			var l = this.xh
//			for(var c = 0; c < BT.length; c++) {
//				BT[c].style.background = 'none'
//				BTnr[c].style.display = 'none'
//			}
//			BT[l].style.background = '#FF6700';
//			BTnr[l].style.display = 'block';
//
//		}
//	}
	//	给每个标题加入移出事件来隐藏图片
//	for(var m = 0; m < BT.length; m++) {
//		BT[m].xh = m;
//		BT[m].onmouseout = function() {
//			var l = this.xh
//			BTnr[l].style.display = 'none';
//			BT[l].style.background = 'none'
//		}
//
//	}
	//	BTk.onmousemove=function(){
	//		for (var m=0;m<BT.length;m++) {
	//			BTnr[m].style.display='none';
	//		}
	//	}
	//		
	//轮播图二级菜单结束
	//小米单品区效果
	//生成一个变量来改变左右移动的值
	var DPnum = 0;
	//生成一个通用函数
	function XH() {
		//	让变量自增来改变图片框定位位置
		DPnum++;
		//	判断变量值等于二时让他变成0让移动循环
		if(DPnum == 2) {
			DPnum = 0
		};
		//	让图片框的left值对着DPnum变化
		$('.DanPinNRK').animate({ 'left': -1280 * DPnum + 'px' }, 600);
		$('.DPJianTou').eq(DPnum).addClass('shubiao').siblings('.DPJianTou').removeClass('shubiao');
	}
	//创建一个定时器来让边框移动
	var times = setInterval(XH, 3000)
	//给左边箭头添加点击事件
	$('#Zuo').click(function() {
		//	让变量自减
		DPnum--;
		//	判断变量值等于-1时让他变成0让移动停止
		if(DPnum == -1) {
			DPnum = 0;
		}
		//	让图片框的left值对着DPnum变化
		$('.DanPinNRK').stop().animate({ 'left': -1280 * DPnum + 'px' }, 600);
		$('#You').css({ 'color': 'black', 'cursor': 'pointer' })
		$('#Zuo').css({ 'color': '#A8A8A8', 'cursor': 'default' })
	})
	//给右边箭头添加点击事件
	$('#You').click(function() {
		DPnum++;
		//	判断变量值等于-1时让他变成0让移动停止
		if(DPnum == 2) {
			DPnum = 1;
		}
		//	让图片框的left值对着DPnum变化
		$('.DanPinNRK').stop().animate({ 'left': -1280 * DPnum + 'px' }, 500);
		$('#Zuo').css({ 'color': 'black', 'cursor': 'pointer' })
		$('#You').css({ 'color': '#A8A8A8', 'cursor': 'default' })
	})
	//给甜头框添加鼠标移入时间清除定时器
	$('.jiantou').mouseenter(function() {
		clearInterval(times);
	})
	//给甜头框添加鼠标移出时间恢复定时器
	$('.jiantou').mouseleave(function() {
		times = setInterval(XH, 3000);
	})
	//小米单品区结束
	//家电区样式
	$('.ShangPinBT').mouseenter(function() {
		var num = $(this).index()
		$('.NRqK').eq(num).show().siblings('.NRqK').hide()
		$(this).addClass('yangshi').siblings('.ShangPinBT').removeClass('yangshi')
	})

	//家电区样式结束
////	智能,配件,周边样式
	$('.XuanZeBiaoTi').each(function(){
		var dangqian=$(this)[0];
		$(dangqian).find('.BiaoTiZi').mouseenter(function(){
			var a=$(this).index()
			$(dangqian).find('.BiaoTiZi').eq(a).addClass('yangshi').siblings('.BiaoTiZi').removeClass('yangshi');
			$(dangqian).parent('.ZNBiaoTi').siblings('.ZNLiuLanQu').find('.ZNLiuLanNR').eq(a).show().siblings('.ZNLiuLanNR').hide();
		})
	})
//	智能,配件,周边样式结束
	//推荐去样式
	//生成一个变量让其变动包含图片的框的left值
	var TJnum = 0;
	//给左边按钮添加点击事件
	$('.left').click(function() {
		//	让变量自减来完成滑动
		TJnum--;
		//	判断当变量为-1时让其变为0达到停止效果
		if(TJnum == -1) {
			TJnum = 0;
			//		当变量为0时让左边按钮变成不能按的样式
			$('.left').css({ 'cursor': 'default', 'color': '#B9ADAF' })
		}
		//	让右边按钮变成能按的样式
		$('.right').css({ 'color': 'black', 'cursor': 'pointer' })
		//	变动框的left值达到滑动效果
		$('.TJNRk').stop().animate({ 'left': -1226 * TJnum + 'px' }, 600)
	})
	//给右边按钮添加点击事件
	$('.right').click(function() {
		//	让变量自增来完成滑动
		TJnum++;
		//	判断当变量为图片内容的长度时让其变为3达到停止效果
		if(TJnum == $('.TJNRTU').length) {
			TJnum = 3;
			//		当变量为3时让右边按钮变成不能按的样式		
			$('.right').css({ 'cursor': 'default', 'color': '#B9ADAF' })
		}
		//	让左边按钮变成能按的样式
		$('.left').css({ 'color': 'black', 'cursor': 'pointer' })
		//	变动框的left值达到滑动效果	
		$('.TJNRk').stop().animate({ 'left': -1226 * TJnum + 'px' }, 600)
	})
	//为左边按钮添加hover属性让其颜色变化
	$('.left').hover(function() {
		$('.left').css({ 'color': "#FF6700" })
	}, function() {
		$('.left').css({ 'color': "#A8A8A8" })
	})
	//为右边按钮添加hover属性让其颜色变化
	$('.right').hover(function() {
		$('.right').css({ 'color': "#FF6700" })
	}, function() {
		$('.right').css({ 'color': "#A8A8A8" })
	})
	//推荐区样式结束
	//内容区样式
	//循环每个轮播框
	$('.NRlunbo').each(function() {
		//		获得js的对象
		var jsthis = $(this)[0];
		//		给js对象添加一个赋值为0的属性
		jsthis.NRnum = 0;
		//			 给当前对象的子级元素为NRZJT添加hover属性让其背景颜色发生变化
		$(jsthis).find('.NRZJT').hover(function() {
			$(jsthis).find('.NRZJT').css({ 'background': 'rgba(0,0,0,0.3)' })
		}, function() {
			$(jsthis).find('.NRZJT').css({ 'background': 'rgba(0,0,0,0.2)' })
		});
		//		给当前对象的子级元素为NRYJT添加hover属性让其背景颜色发生变化
		$(jsthis).find('.NRYJT').hover(function() {
			$(jsthis).find('.NRYJT').css({ 'background': 'rgba(0,0,0,0.3)' })
		}, function() {
			$(jsthis).find('.NRYJT').css({ 'background': 'rgba(0,0,0,0.2)' })
		});
		//		给当前对象的子级元素为NRZJT添加点击事件
		$(jsthis).find('.NRZJT').click(function() {
			//			让属性值发生自减
			jsthis.NRnum--;
			//			判断属性值为-1时让他变为0达到轮播框的停止效果
			if(jsthis.NRnum == -1) {
				jsthis.NRnum = 0;
			};
			//			让当前对象的子级元素NRDianK的子级元素NRdian的下标值为jsthis.NRnum的添加属性dianyanse让其兄弟元素NRdian的属性删除dianyanse，来达到改变圆点样式的效果
			$(jsthis).find('.NRDianK .NRdian').eq(jsthis.NRnum).addClass('dianyanse').siblings('.NRdian').removeClass('dianyanse');
			//			让当前对象的子级元素NRLBK的子级元素NRLBDK的left值跟随jsthis.NRnum值的变化而达到移动效果
			$(jsthis).find('.NRLBK .NRLBDK').animate({ 'left': -296 * jsthis.NRnum + 'px' }, 200);
		});
		//		给当前对象的子级元素为NRYJT添加点击事件
		$(jsthis).find('.NRYJT').click(function() {
			//			让属性值发生自增
			jsthis.NRnum++;
			//			判断属性值等等于当前对象的子级元素NRLBK的子级元素li的长度时让他的属性值变为此子级元素的长度-1
			if(jsthis.NRnum == $(jsthis).find('.NRLBK li').length) {
				jsthis.NRnum = $(jsthis).find('.NRLBK li').length - 1;
			};
			//			让当前对象的子级元素NRLBK的子级元素NRLBDK的left值跟随jsthis.NRnum值的变化而达到移动效果
			$(jsthis).find('.NRLBK .NRLBDK').animate({ 'left': -296 * jsthis.NRnum + 'px' }, 200);
			//			让当前对象的子级元素NRDianK的子级元素NRdian的下标值为jsthis.NRnum的添加属性dianyanse让其兄弟元素NRdian的属性删除dianyanse，来达到改变圆点样式的效果
			$(jsthis).find('.NRDianK .NRdian').eq(jsthis.NRnum).addClass('dianyanse').siblings('.NRdian').removeClass('dianyanse')
		});
		//		为当前元素的子级元素NRDianK的子级元素NRdian添加点击事件
		$(jsthis).find('.NRDianK .NRdian').click(function() {
			//			让当前对象的属性值赋值为当前点击对象的下标值
			jsthis.NRnum = $(this).index()
			//			让当前对象的子级元素NRLBK的子级元素NRLBDK的left值跟随jsthis.NRnum值的变化而达到移动效果
			$(jsthis).find('.NRLBK .NRLBDK').animate({ 'left': -296 * jsthis.NRnum + 'px' }, 200)
			//			让当前对象的子级元素NRDianK的子级元素NRdian的下标值为jsthis.NRnum的添加属性dianyanse让其兄弟元素NRdian的属性删除dianyanse，来达到改变圆点样式的效果
			$(jsthis).find('.NRDianK .NRdian').eq(jsthis.NRnum).addClass('dianyanse').siblings('.NRdian').removeClass('dianyanse')
		})

	})
	//内容区样式结束
//小米二级菜单样式
//	获得页面可见宽度
	var seew=$(window).width();
//	抓取ErJiYcQ元素让宽度和页面宽度一样,让他的左边外边距减去可见宽度的一般达到对齐菜单框的效果
		$('.ErJiYcQ').css({'width':seew+'px','margin-left':-seew/2+'px'})
//		获得页面事件
		$(window).resize(function(){
//			获得每次变化的页面宽度
			var seeW = $(window).width();
//			让元素ErJiYcQ的宽度随着页面宽度的变化而变化
			$('.ErJiYcQ').css({'width':seeW+'px','margin-left':-seeW/2+'px'});
		})
//		抓取MenuBTZi的元素加入鼠标移入事件..
 	$('.MenuBTZi').mouseenter(function(){
// 		当时间发生时让当前元素对应的内容显示
 		$(this).find('.ErJiYcQ').show().stop().animate({'height':"230px"},200);
// 		当时间发生时让当前元素的兄弟元素的内容隐藏
 		$(this).siblings('.MenuBTZi').find('.ErJiYcQ').css({'height':"230px"}).hide();
 	})
// 	给元素MenuBT添加鼠标移出事件让ErJiYcQ元素消失
 	$('.MenuBT').mouseleave(function(){
 			$(this).find('.MenuBTZi .ErJiYcQ').stop().animate({'height':"0px"},200);
   			$(this).find('.ErJiYcQ').css({'height':"0px",'border':'none' });
 	})
// 	给元素添加获取焦点事件，让隐藏框显示
 	$('#ChaZhaoK').focus(function(){
 		$(this).parent('.BIAODAN').siblings('.SouSUYCQU').show();
 		$(this).parent('.BIAODAN').siblings('.a').hide();
 		$(this).parents('.MenuSs').css({'border':'1px solid #FF6700'});
 		$('#ChaZhaoK').css({'border-right':'1px solid #FF6700'});
 	})
// 	给元素添加失去焦点事件，让其隐藏框隐藏
 	$('#ChaZhaoK').blur(function(){
 		$(this).parent('.BIAODAN').siblings('.SouSUYCQU').hide()
 		$(this).parent('.BIAODAN').siblings('.a').show();
 		$(this).parents('.MenuSs').css({'border':'1px solid #EEEEEE'});
 		$('#ChaZhaoK').css({'border-right':'1px solid #EEEEEE'});
 	})
//小米二级菜单样式结束

	
	

}