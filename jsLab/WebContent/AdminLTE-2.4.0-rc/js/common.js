$(function() {

	/*로그인 버튼*/
	$(".login_wrap>a").on("click", function() {
		$("#login_f").animate({ top: "20px" }, 500);
		return false;
	});
	$(".login_close_btn").on("click", function() {
		$("#login_f").animate({ top: "-500px" }, 500);
		return false;
	});

	$("#user_id", "#user_pw").on("focus", function() {
		$(this).prev().css("left","-9999px");
		
	
	});

	$("#user_id", "#user_pw").on("blur", function() {
		if ($(this).val()=="")
			$(this).prev().css("left","2px");
		
		
	});


	/*zoom 버튼*/

	var base = 60s;
	var mybody = $("body");
	
	$("#zoom a").on("click",function(){
		var zNum = $("#zoom a").index(this);
		if(zNum ==0 ){ //확대
		base +=10;
		}else if(zNum == 1){ //100%
		base = 100;
		}else {//축소
		base -=10;
			}
			
			mybody.css("overflow-x","auto")
			.css("transform-origin","0 0")
			.css("transform", "scale("+base/100+")")
			.css("zoom", base+"%");
			
			
			return false;
			
			
			
	});

	/*프린트 버튼*/
	$(".print_btn").on("click",function(){
		window.print();
		return false;
	});
	
	
	/*검색 창 안내 가이드*/
	$("#keyword").on("focus",function(){
		$(this).css("background-position", "0 -500px");
		
	}).on("blur",function(){
		if($(this).val()=="")
		$(this).css("background-position", "0 0px");
	});

	/*GNB메뉴*/
	var beforeE1;
	$("#gnb>li>a").on("mouseover focus",function(){
		if(beforeE1)
		beforeE1.children("img").attr("src",
		beforeE1.children("img").attr("src").replace("over.gif", "out.gif"));
		
		$("#gnb ul:visible").slideUp("fast");
		
		$("img",this).attr("src",$("img",this).attr("src").replace("out.gif","over.gif"));
		//gnb_1_out.gif가 gnb_1_over,gif로 바뀐다
		
		$(this).next().stop().slideDown("normal");
		beforeE1 = $(this);
	});
	
	$("#gnb").on("mouseleave",function(){
		$("#gnb ul:visible").slideDown("fast");
		if(beforeE1)
		beforeE1.children("img").attr("src",
		beforeE1.children("img").attr("str").replace("over.gif","out.gif"));
		
	});
	
	
	

	/*전체메뉴*/
	$("#total_btn a").on("click",function(){
	$("#total_menu").slideDown("normal");
	
	$("img", this).attr("src",$("img",this).attr("src").replace("out.gif","over.gif"));
	return false;
	});
	

	/*전체 메뉴 닫기 버튼*/
	$("#total_close a").on("click",function(){
	$("#total_menu").slideDown("fast");
	
	$("total_btn a img").attr("src",$("img",this).attr("src").replace("over.gif","out.gif"));
	return false;
	});

	/*날짜 표기*/
	var t = new Date();
	var v = t.getFullYear();
	var m = t.getMonth();
	var d = t.getDate();
	
	$("#date_wrap .year").text(y);
	$("#date_wrap .month").text(m+1);
	$("#date_wrap .date").text(d);
	

	/*관련 사이트 이동*/
	$("form[name=rel_f]").on("submit",function(){
		var url=$("select",this).val;
		window.open(url);
		return false;
	});

	/*퀵메뉴*/
	var defaultTop = parseInt($("#quick_menu").css("top")); //"100px"->100
	$(window).on("scroll",function(){
		var scv = $(window).scrollTop();
		$("#quick_menu").stop().animate({top:scv+defaultTop+"px"},1000);
});