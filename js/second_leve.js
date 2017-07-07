function dialogWidth(bg_box,content){
	var element_height=document.documentElement.clientHeight;//页面可见区域的高度
	var body_width=document.body.clientWidth;
	var body_height=document.body.clientHeight;
	var main_height=$(content).height();
	var main_width=$(content).width();
	var main_top=(element_height-main_height)/2;
	var main_left=(body_width-main_width)/2;
	$(content).css({"top":main_top,"left":main_left});    //主div的top,left
	if(body_height<element_height){
		$(bg_box).css({"min-height":element_height});    //背景div的高度
	}
}

$(function(){
	/*
	 * 您的domain已设置成功，去“成员管理”邀请成员和设置他们的权限吧！
	 */
	$("[name='submitSave']").bind(
		"click",
		function(){
			$("[name='secondBgDialog']").show();//显示弹出层的蒙版
			$("[name='secondBoxDialog']").show();//显示弹出层
			dialogWidth("","[name='secondBgDialog']");//控制弹出层上下左右居中
		}
	);
	
	
	//滚动条样式
	if($(".s_message_main").html()!=undefined){
		$(".s_message_main").mCustomScrollbar();
	}
	
	
	
	/*
	 * 等级题样
	 */
	$("[name='djty']").bind(
		"click",
		function(){
			$("#djty").show();//显示弹出层
			dialogWidth("[name='djtyBoxDialog']","[name='djtyBgDialog']");//控制弹出层上下左右居中
		}
	);
	$("[name='tyClose']").bind(
		"click",
		function(){
			$("#djty").hide();//关闭弹出层
		}
	);
	if($(".s_ty_source").html()!=undefined){
		$(".s_ty_source").mCustomScrollbar();
	}
	if($(".s_ty_transn").html()!=undefined){
		$(".s_ty_transn").mCustomScrollbar();
	}
	$("[name='seeTy']").bind(
		"click",
		function(){
			$("#tyMain").show();//显示弹出层
			dialogWidth("[name='tyBoxDialog']","[name='tyBgDialog']");//控制弹出层上下左右居中
		}
	);
	$("[name='messageOk']").bind(
		"click",
		function(){
			$("#tyMain").hide();//关闭弹出层
		}
	);
})
