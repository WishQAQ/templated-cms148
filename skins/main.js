// JavaScript Document

$(function(){

$(".txt_idea").html("请输入您的宝贵意见");
$(".txt_idea").focus(function() {
    $(this).html("");
});
$(".txt_idea").blur(function() {
    if ($(this).html() == "")
        $(this).html("请输入您的宝贵意见");
});
/*
$("#q_a_tijiao1").click(function() {
    $(".q_money_800").show();
    $(".q_zhezhao_01").show();
});

$("#q_a_tijiao2").click(function() {
    $(".q_money_1000").show();
    $(".q_zhezhao_01").show();
});
*/
$("#q_money1000").click(function() {
    $(".q_money_1000").hide();
    $(".q_zhezhao_01").hide();
	window.location.href='quiz.html';
});
$("#q_money800").click(function() {
    $(".q_money_800").hide();
    $(".q_zhezhao_01").hide();
	window.location.href='quiz.html';
});



$(".icon,.QQa,#wb a,#wx a,#mesbtna,#seeall,#prev,#next,#close,#llwz").css({"-moz-opacity":"0.0","opacity":"0.0"});

var $window = $(window);
var position = "top";
	/*********************************鼠标事件************************************************/
	$(".icon,#seeall,#wb a,#wx a,#mesbtna,#close,#danchuclose,#prev,#next,#llwz").hover(
		function(){
			$(this).stop(false,true).animate({"-moz-opacity":1.0,"opacity":1.0},{duration:200});
		},
		function(){
			$(this).stop(false,true).animate({"-moz-opacity":0.0,"opacity":0.0},{duration:200});
	});
	
	$(".QQ").hover(
		function(){
			$(this).find("a").css("color","#f01f21");
			$(this).find("a.QQa").stop(false,true).animate({"-moz-opacity":1.0,"opacity":1.0},{duration:200});
			
		},
		function(){
			$(this).find("a").css("color","#fff");
			$(this).find("a.QQa").stop(false,true).animate({"-moz-opacity":0.0,"opacity":0.0},{duration:200});
	});
	
	$("#QQ_s").hover(
		function(){
			$(".QQ_y").hide();
			$(".QQ_x").show();
		},
		function(){
		    $(".QQ_y").show();
			$(".QQ_x").hide();
		}
	)
	
	$(".youshi_index_item").hover(function(){
		$(this).find(".slight").stop(false,true).animate({"top":0},{duration:600,easing:"easeOutBounce"});
		},
			function(){
				$(this).find(".slight").stop(false,true).animate({"top":-200},{duration:600});
			});
			
	$("input[name='name']").focus(function(){
		if($(this).val()=="您的称呼")
		{$(this).val("");}
	});
	$("input[name='name']").blur(function(){
		if($(this).val()=="")
		{$(this).val("您的称呼");}
	});
	$("input[name='company']").focus(function(){
		if($(this).val()=="您所代表的公司")
		{$(this).val("");}
	});
	$("input[name='company']").blur(function(){
		if($(this).val()=="")
		{$(this).val("您所代表的公司");}
	});
	$("input[name='phone']").focus(function(){
		if($(this).val()=="您的联系电话，多个用，分隔")
		{$(this).val("");}
	});
	$("input[name='phone']").blur(function(){
		if($(this).val()=="")
		{$(this).val("您的联系电话，多个用，分隔");}
	});
	$("textarea[name='message']").focus(function(){
		if($(this).val()=="请输入您的详细需求描述，我们将在24小时内给出答复")
		{$(this).val("");}
	});
	$("textarea[name='message']").blur(function(){
		if($(this).val()=="")
		{$(this).val("请输入您的详细需求描述，我们将在24小时内给出答复");}
	});
	/*******************************点击事件************************************/	
	$(".icon,#wx a").click(function(){
		var rel = $(this).attr("rel");
		var $backgroundmark = $("#backgroundmark");
		if($backgroundmark.css("display") == "none")
		{
			$("#backgroundmark").show();
			
			$("#danchu").stop(false,true).animate({"top":180},{duration:1200, easing:"easeOutBounce",
				complete:function(){
					$("#" + rel).fadeIn();
				}
			});
		}
		else
		{
			$(".weibo,.400phone").hide();
			$("#" + rel).fadeIn();
		}
	});
	
	$("#danchuclose").click(function(){
		$("#danchu").stop(false,true).animate({"top":-400},{duration:800,
				complete:function(){
					$(".weibo,.400phone").hide();
					$("#backgroundmark").hide();
				}
			});
	});
	
	//留言提交
	$("#mesbtna").click(function(){
		if($("input[name='name']").val()==""||$("input[name='name']").val()=="您的称呼")
		{
			$.jBox.tip("请输入您的称呼。", 'error',{focusId:"mesname" });
			return;
		}
		if($("input[name='company']").val()=="您所代表的公司"||$("input[name='company']").val()=="")
		{
			$.jBox.tip("请输入您所在的公司。", 'error',{focusId:"mescompany" });
			return;
		}
		if($("textarea[name='message']").val()=="请输入您的详细需求描述，我们将在24小时内给出答复"||$("textarea[name='message']").val()=="")
		{
			$.jBox.tip("请输入留言内容。", 'error',{focusId:"mesmessage"});
			return;
		}
		
		$.ajax({url:"/plus/ajaxdiy.php",
			data:$('#form1').serialize(),
            type: "post",
            error: function() {
				$.jBox.tip("提交发生错误，请重新提交。", 'error');
               return false;
            },
            success: function(data) {
				if(data=="1")
				{
					$.jBox.tip("已成功提交，我们将在24小时内给出答复。"); 
				}
				else
				{
					$.jBox.tip("保存失败，请稍后再提交。", 'error'); 
				}
            }
		});
	});
	

	$("input[name='Ra_d']").blur(function(){
		if($(this).val()=="")
		{$(this).val("1");}
	});
	$("input[name='name1']").focus(function(){
		if($(this).val()=="您的姓名")
		{$(this).val("");}
	});
	$("input[name='name1']").blur(function(){
		if($(this).val()=="")
		{$(this).val("您的姓名");}
	});
	$("input[name='phone1']").focus(function(){
		if($(this).val()=="您的手机号码（用以收取抵用现金短信）")
		{$(this).val("");}
	});
	$("input[name='phone1']").blur(function(){
		if($(this).val()=="")
		{$(this).val("您的手机号码（用以收取抵用现金短信）");}
	});
	$("input[name='name2']").focus(function(){
		if($(this).val()=="您的姓名")
		{$(this).val("");}
	});
	$("input[name='name2']").blur(function(){
		if($(this).val()=="")
		{$(this).val("您的姓名");}
	});
	$("input[name='phone2']").focus(function(){
		if($(this).val()=="您的手机号码（用以收取抵用现金短信）")
		{$(this).val("");}
	});
	$("input[name='phone2']").blur(function(){
		if($(this).val()=="")
		{$(this).val("您的手机号码（用以收取抵用现金短信）");}
	});
	$("textarea[name='content']").focus(function(){
		if($(this).val()=="请输入您的宝贵看法")
		{$(this).val("");}
	});
	$("textarea[name='content']").blur(function(){
		if($(this).val()=="")
		{$(this).val("请输入您的宝贵看法");}
	});
	
	//有奖问答提交1
	$("#q_a_tijiao1").click(function(){
		
		//var radio = $(':radio');
		//alert(radio1.checked);return false;
		/*
		if(!(radio1.checked==true || radios2.checked==true)){

        alert($(radios[2*i]).parent().prev().text() + '未选择');

        return false;

        }
		*/
		var radios=0;
        for(i=0;i<$(":radio:checked").length;i++)
        if($(":radio:checked").get(0).checked=true){
            radios=1;
            break;
        }
        if(!radios){
            $.jBox.tip("请选择您了解到易点的渠道！", 'error',{focusId:"Radio1" });
            return false;
        }


	
		if($("input[name='name1']").val()=="您的姓名"||$("input[name='name1']").val()=="")
		{
			$.jBox.tip("请输入您的姓名。", 'error',{focusId:"Text1" });
			return;
		}
		if($("input[name='phone1']").val()=="手机号码（用以收取抵用现金短信）"||$("input[name='phone1']").val()=="")
		{
			$.jBox.tip("请输入您的手机号码（用以收取抵用现金短信）。", 'error',{focusId:"Text2" });
			return;
		}
		if(!checkPhone($("input[name='phone1']").val())){
			$.jBox.tip("请输入您有效的手机号码。", 'error',{focusId:"Text2" });
			return;
		}
		
		$.ajax({url:"ajax_quiz.php",
			data:$('#form_quiz1').serialize(),
            type: "post",
            error: function() {
				$.jBox.tip("提交发生错误，请重新提交。", 'error');
               return false;
            },
            success: function(data) {
				if(data=="1")
				{
					$(".q_money_800").show();
					$(".q_zhezhao_01").show();
				}
				else
				{
					$.jBox.tip("保存失败，请稍后再提交。", 'error'); 
				}
            }
		});
	});

	
	//有奖问答提交2
	$("#q_a_tijiao2").click(function(){
		
		if($("textarea[name='content']").val()==""||$("textarea[name='content']").val()=="请输入您的宝贵意见")
		{
			$.jBox.tip("请输入您的宝贵意见", 'error',{focusId:"content" });
			return;
		}
		if($("input[name='name2']").val()=="您的姓名"||$("input[name='name2']").val()=="")
		{
			$.jBox.tip("请输入您的姓名。", 'error',{focusId:"Text3" });
			return;
		}
		if($("input[name='phone2']").val()=="手机号码（用以收取抵用现金短信）"||$("input[name='phone2']").val()=="")
		{
			$.jBox.tip("请输入您的手机号码（用以收取抵用现金短信v）。", 'error',{focusId:"Text4" });
			return;
		}
		if(!checkPhone($("input[name='phone2']").val())){
			$.jBox.tip("请输入您有效的手机号码。", 'error',{focusId:"Text4" });
			return;
		}
		
		$.ajax({
			url:"ajax_quiz.php",
			data:$('#form_quiz2').serialize(),
            type: "post",
            error: function() {
				$.jBox.tip("提交发生错误，请重新提交。", 'error');
               return false;
            },
            success: function(data) {
				if(data=="1")
				{
					$(".q_money_1000").show();
					$(".q_zhezhao_01").show();
				}
				else
				{
					$.jBox.tip("保存失败，请稍后再提交。", 'error'); 
				}
            }
		});
	});	
	
	
	
	
	
	

	/*测试事件*/
	var $window = $(window);
    var position = "top";
    var posScroll = 0;
	var $design = $("#design");
	var $web = $("#web");
	var $mobile = $("#mobile");
	var indexshow = false;
	/************************************初始化**********************************************/
	var ww = $window.width();
	var wh = $window.height();
	
	posScroll = $window.scrollTop();
	//var rebondFleche = true;
	if(posScroll>20)
	{
		$(".bannerV").hide();
		//rebondFleche = false;
	}

	//jQuery("#clients").slide({mainCell:"#bd",effect:"leftLoop",vis:1,scroll:1,autoPlay:false,delayTime :2000});
	/************************************滚轮事件********************************************/
	$window.scroll(function() {
        posScroll = $window.scrollTop();				//获取当前滚动高度\
		if(posScroll>20)
		{
			if($(".bannerV").css("display") == "block")
			$(".bannerV").fadeOut();
		}
		else
		{
			if($(".bannerV").css("display") == "none")
			$(".bannerV").fadeIn();
		}

		
		if(posScroll>2160)
		{
			$("section#contact").css("background-position","0 " + (posScroll/3- 800) + "px");
			
			var iii = 0;
			$(".index_news_list .index_news").each(function(){
				//$(this).delay(iii*100).addClass("index_newss");
				var obj = $(this);
				obj.delay(iii*200).queue(function(){
					obj.addClass("index_newss");
				});
				iii++;
			});
			
		}
		
		if(posScroll>200)
		{
			$(".servies_index_itemb").addClass("servies_index_show");
			$(".ffonts").delay(400).animate({"padding-top":20,"-moz-opacity":1,"opacity":1},450);
		}
		
		var iii = 0;
		if(posScroll>1155)
		{
			$(".weixinitem").each(function(){
				$(this).delay(iii*100).animate({"margin-top":0},600,"easeOutBack");
				iii++;							
			});
		}
		
        //测试用显示数字
        $("#text").html(posScroll + "|" + indexshow);
	});
$("#text").html(posScroll);

/*底部友情链接*/
	var $link = $(".link_content");
	$('footer').hover(function(){
		$link.stop().animate({"bottom":25},1000,"easeOutExpo");	
	},
	function(){
		$link.stop().animate({"bottom":-60},1000,"easeInExpo");
	});

});
//滚动条方向（return top or down）
function scrollPosition(posScroll,initTop)
{
	var flag = "top";
	if(posScroll > initTop){
 		flag = "down";
 	}
	else{
  		flag = "top";
 	}
	return flag;
}
function getNum(str)
{
	str = str.replace("px","");
	return parseInt(str);
}

/*字体大小*/
function SetFont(size)
{
	var divBody = document.getElementById("detail");
	if(!divBody)
	{
		return;
	}
	divBody.style.fontSize = size + "px";
	var divChildBody = divBody.childNodes;
	for(var i = 0; i < divChildBody.length; i++)
	{
		if (divChildBody[i].nodeType==1)
		{
			divChildBody[i].style.fontSize = size + "px";
		}
	}
}

$(".zsjm_item").hover(function(){
	$(this).find(".hg").stop(false,true).animate({"top":0},{duration:400,easing:"easeOutQuad"});
	},
		function(){
			$(this).find(".hg").stop(false,true).animate({"top":-250},{duration:400});
		});

		
		
/*提交留言*/
function uzchk(){
  with(document.myform){
	if(name.value==""){
	  alert("请输您的姓名.");
	  name.focus();
	  return false;
	  }
	  if(sex.value==""){
	  alert("请输入您的性别！例如：‘男’或‘女’！");
	  sex.focus();
	  return false;
	  }
	  if(age.value==""){
	  alert("请输入您的年龄.");
	  age.focus();
	  return false;
	  }
	  if(phone.value==""){
	  alert("请输入您的联系电话.");
	  phone.focus();
	  return false;
	  }
	  if(weixin.value==""){
	  alert("请输入您的微信号.");
	  weixin.focus();
	  return false;
	  }
	  if(email.value==""){
	  alert("请输入您的邮箱.");
	  email.focus();
	  return false;
	  }
	  if(qq.value==""){
	  alert("请输入您的QQ号.");
	  qq.focus();
	  return false;
	  }
	  if(company_name.value==""){
	  alert("请输入您的公司名称.");
	  company_name.focus();
	  return false;
	  }
	  if(company_address.value==""){
	  alert("请输入您公司的地址.");
	  company_address.focus();
	  return false;
	  }
	  if(company_phone.value==""){
	  alert("请输入您公司的电话.");
	  company_phone.focus();
	  return false;
	  }
	  if(taobao_name.value==""){
	  alert("请输入您淘宝店的名称.");
	  taobao_name.focus();
	  return false;
	  }
	  if(taobao_grade.value==""){
	  alert("请输入您淘宝店的等级.");
	  taobao_grade.focus();
	  return false;
	  }
	  if(registered.value==""){
	  alert("请输入您淘宝店的注册时间.");
	  registered.focus();
	  return false;
	  }
	  if(category.value==""){
	  alert("请输入您主营产品类别.");
	  category.focus();
	  return false;
	  }
	  if(!checkPhone(phone.value)){
		alert("电话号码格式错误！请输入正确的电话或手机号码！.");
		phone.focus();
		return false;
	  }
	   if(!checkPhone(company_phone.value)){
		alert("电话号码格式错误！请输入正确的电话或手机号码！.");
		company_phone.focus();
		return false;
	  }
	  if(!checknumber(id_number.value)){
		alert("身份证号码格式错误！请输入有效的身份证号码！.");
		id_number.focus();
		return false;
	  }
	  if(!checkEmail(email.value)){
		alert("邮箱格式错误！请输入常用的邮箱！.");
		email.focus();
		return false;
	  }
	  if(!checknumber(qq.value)){
		alert("QQ号码错误！请输入常用的QQ号！.");
		qq.focus();
		return false;
	  }
	  
	}
}
function zbchk(){
  with(document.myform){
	if(name.value==""){
	  alert("请输您的姓名.");
	  name.focus();
	  return false;
	  }
	  if(sex.value==""){
	  alert("请输入您的性别！例如：‘男’或‘女’！");
	  sex.focus();
	  return false;
	  }
	  if(age.value==""){
	  alert("请输入您的年龄.");
	  age.focus();
	  return false;
	  }
	  if(phone.value==""){
	  alert("请输入您的联系电话.");
	  phone.focus();
	  return false;
	  }
	  if(weixin.value==""){
	  alert("请输入您的微信号.");
	  weixin.focus();
	  return false;
	  }
	  if(email.value==""){
	  alert("请输入您的邮箱.");
	  email.focus();
	  return false;
	  }
	  if(qq.value==""){
	  alert("请输入您的QQ号.");
	  qq.focus();
	  return false;
	  }
	  if(rec_address.value==""){
	  alert("请输入您的收件地址.");
	  rec_address.focus();
	  return false;
	  }
	  if(agent.value==""){
	  alert("请输入您的代理级别.");
	  agent.focus();
	  return false;
	  }
	  
	  if(!checkPhone(phone.value)){
		alert("电话号码格式错误！请输入正确的电话或手机号码！.");
		phone.focus();
		return false;
	  }
	   if(!checkPhone(fixed.value)){
		alert("电话号码格式错误！请输入正确的电话或手机号码！.");
		fixed.focus();
		return false;
	  }
	  if(!checknumber(id_number.value)){
		alert("身份证号码格式错误！请输入有效的身份证号码！.");
		id_number.focus();
		return false;
	  }
	  if(!checkEmail(email.value)){
		alert("邮箱格式错误！请输入常用的邮箱！.");
		email.focus();
		return false;
	  }
	  if(!checknumber(qq.value)){
		alert("QQ号码错误！请输入常用的QQ号！.");
		qq.focus();
		return false;
	  }
	  
	}
}
function eutochk(){
  with(document.myform){
	if(name.value==""){
	  alert("请输您的姓名.");
	  name.focus();
	  return false;
	  }
	  if(phone.value==""){
	  alert("请输入您的联系电话.");
	  phone.focus();
	  return false;
	  }
	  if(qq.value==""){
	  alert("请输入您的QQ号.");
	  qq.focus();
	  return false;
	  }
	  if(email.value==""){
	  alert("请输入您的邮箱.");
	  email.focus();
	  return false;
	  }
	  if(weixin.value==""){
	  alert("请输入您的微信号.");
	  weixin.focus();
	  return false;
	  }
	  
	  if(car_brand.value==""){
	  alert("请输入您的汽车品牌.");
	  car_brand.focus();
	  return false;
	  }
	  if(content.value==""){
	  alert("请输入您留言的内容.");
	  content.focus();
	  return false;
	  }
	  
	  if(!checkPhone(phone.value)){
		alert("电话号码格式错误！请输入正确的电话或手机号码！.");
		phone.focus();
		return false;
	  }
	   if(!checknumber(qq.value)){
		alert("QQ号码错误！请输入常用的QQ号！.");
		qq.focus();
		return false;
	  }
	  if(!checkEmail(email.value)){
		alert("邮箱格式错误！请输入常用的邮箱！.");
		email.focus();
		return false;
	  }
	  
	}
}




//检查邮箱格式
function checkEmail(email){
var re = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
return re.test(email);
}

//检查手机格式
function checkPhone(phone){
var re = /((15[89])\d{8})|((13)\d{9})|((18[38])\d{8})|(0[1-9]{2,3}\-?[1-9]{6,7})/i;
//var re = /^(13[0-9]{9})| (18[0-9]{9}) |(15[89][0-9]{8})$/;
return re.test(phone);
}

//检查身份证号
function checknumber(number){
var re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
return re.test(number);
}

//检查数字
function checknumber(number){
var re = /^[0-9]*$/;
return re.test(number);
}