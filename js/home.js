var homeSlide=setInterval("slideInterval()",5000);
var index=0;
function slideInterval(){//auto slide
	index++;
	if(index>=2) {
		index=0;
	}
	slideFun(index);
}
function slideFun(num){//hand slide
	if(num>=2) {
		num=0;
	}
	index=num;
	obj=$("div.banner_list div.banner_sub").eq(num);
	obj.addClass("flipInY").show();
	obj.find("div.banner_subTxt").addClass("fadeInUp");
	obj.siblings().find("div.banner_subTxt").removeClass("fadeInUp");
	obj.siblings().removeClass("flipInY").hide();
	
	$("div.banner_oprWap span").eq(num).addClass("cur").siblings().removeClass("cur")
	$("div.home_explainWap div.home_explainList").eq(num).show().siblings().hide();
	
}

$("div.banner_oprWap span").each(function(i){
	$(this).click(function(){	
		$(this).addClass("cur").siblings().removeClass("cur");
		index=i;
		slideFun(i);
	})
});
$("table.tableList tr").hover(function(){
	$(this).addClass("graBg2");
},function(){
	$(this).removeClass("graBg2");
})
//弹窗

$(".popwindowCancel").click(function(){
	$(this).parent().parent().hide();
});
$(".slect_opr").click(function(){
	$("#user_editorWind_js").show();
});
$(".editor_opr").click(function(){
	var userName=$(this).siblings().text();
	$("div.user_mark").find("#user_name").text(userName);
	$("#user_markWind_js").show();
	$("#user_markWind_js").find("input").focus();
});
$(".invitaUser").click(function(){
	$("#user_copy_js").show();
	$("#user_markWindSubmit_copy").zclip({//用到了jquery.zclip.js插件
		path: '../js/ZeroClipboard.swf',
		copy: function(){
			var transText=$('#dilaogzh').text()+$('#dilaogpasswrod').text()+$('#dilaoghttp').text();
			//transText表示复制到剪贴板的内容
			return transText;
		},
		afterCopy:function(){/* 复制成功后的操作 */
			$(".copy_success").html("复制成功");
		}
	});
	
});
$("#user_editorWindSubmit").click(function(){
	$(this).parent().parent().hide();
	user_editor();//数据处理预留方法
});
$("#user_markWindSubmit").click(function(){
	$(this).parent().parent().hide();
	user_mark();//数据处理预留方法
});
$("#user_openWindSubmit").click(function(){

	//$(this).parent().parent().hide();
	open_work();//数据处理预留方法
});


function user_editor(){
	
}
function user_mark(){
	
}
function open_work(){
	
}
//修改密码
$("#setPassword_js").click(function(){
	$("#setPasswordForm_js").show()
});
$("#setMail_js").click(function(){
	$("#setMailForm_js").show()
});
$("#setMobile_js").click(function(){
	$("#setMobileForm_js").show()
});

$("a.secury_cancel").click(function(){
	$(this).parent().parent().hide()
})

var publicApi={
	  /*
     * tabs功能
     * tabs功能需要按照demo中的html嵌套关系，详细参考demo
     * 调用方法：publicApi.tabs("tabsId"),tabsId是tabs最外层的id名称
     */
    tabs:function(idname){
        var id="#"+idname;
		$(id+" .tabs_content").hide();
        $(id+" .tabs_content:eq(0)").show();
        $(id+" li").removeClass("cur");
        $(id+" li:eq(0)").addClass("cur");
        $(id).on("click",".tablist li",function(){
            var index=$(this).index();
            $(this).addClass("cur");
            $(this).siblings().removeClass("cur");
            $(id+" .tabs_content:eq("+index+")").show().siblings().hide();
        });
    }
}