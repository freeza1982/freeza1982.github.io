$("#stepOpr").live("click",function(){
	$("div.dealstep0").hide();
	$("div.dealstep1").show();
})
$("#stepOpr1").live("click",function(){
	$("div.dealstep1").hide();
	$("div.dealstep2").show();
})
$("#stepOpr2").live("click",function(){
	$("div.dealstep2").hide();
	$("div.dealstep3").show();
})
$("#stepOpr3").live("click",function(){
	$("div.dealstep3").hide();
	$("div.dealNotice").hide();
	$.cookie('hadView', 'false');
	
	
})
if($.cookie('hadView')==null){
	$("div.dealNotice").show();
	
}


