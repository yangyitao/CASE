/*
	* 魅族官网首页myjs.js ===> jquery
	* 2015/02/07
*/
$(function(){

	var index = 0;
	var time;

//大背景切换
	$(".but li").click(function(){
		index = $(this).index();
		$(".bg").eq(index).stop(true).fadeIn(500).siblings(".bg").stop(true).fadeOut(500);
		$(this).addClass("active").siblings().removeClass("active");
		clearInterval(time);
		auto();
	});

	function auto(){
		time = setInterval(function(){
			(index<3)?(index++):(index=0);
			$(".bg").eq(index).stop(true).fadeIn(2000).siblings(".bg").stop(true).fadeOut(2000);
			$(".but li").eq(index).addClass("active").siblings().removeClass("active");
		},5000);
	};
	auto();

//"产品"导航事件
	$(".product").hover(function(){
		$(".hid").stop(true).slideDown(400).css("background-color","#fff");
		$(".nav").css("background-color","#fff");
		$(".nav .logo img").attr("src","img/top/logo2.png");
		$(".nav a").css("color","#000");
		$(".product .m-link").css("color","#31a5e7");
		$(".login").css("color","#000");
	},function(){
		$(".hid").stop(true).slideUp(400,function(){
			$(this).css("background-color","")
			$(".nav").css("background-color","");
			$(".nav .logo img").attr("src","img/top/logo.png");
			$(".nav a").css("color","");
			$(".product .m-link").css("color","");
			$(".login").css("color","");
		});
	});

	$(".hid-mid-li").hover(function(){
		$(this).stop(true).fadeTo(400,1).siblings().stop(true).fadeTo(400,0.5);
	},function(){
		$(".hid-mid-li").stop(true).fadeTo(400,1);
	});

//官方微信
	$(".wx-a").hover(function(){
		$(".weixin").show();	
	},function(){
		$(".weixin").hide();
	});
	$(".lang").hover(function(){
		$(".l-hid").show();	
	},function(){
		$(".l-hid").hide();
	});
});

