$(function() {
	/*터치 슬라이드 비쥬얼 영역*/
	window.mySwipe = $('#mySwipe').Swipe({
		startSlode: 0,
		auto: 3000,
		continuous: true,
		callback: function(index, element) {
			//클래스 "active"를 포함하는 불릿 버튼을 비활성화 버튼으로 만들고,
			//"active"클래스를 삭제한다
			$(".touch_bullet .active").attr("src",
				$(".touch_bullet .active").attr("src").replace("on.png", "off.png"))
				.removeClass("active");
				
				$(" .touch_bullet img").eq(index).attr("src",
				$(" .touch_bullet img").eq(index).attr("src").replace("off.png", "on.png"))
				.addClass("active");
				
		}
	}).data('Swipe');

	$(".touch_left_btn a").on("click", function() {
		mtSwipe.prev();
		return false;
	});
	$(".touch_right_btn a").on("click", function() {
		mtSwipe.next();
		return false;
	});

/*}



}, //이벤트가 완료되면 콜백함수를 실행함.
	//transitionEnd : function(index, element) {

	} //화면이 전환되면 익명함수를 실행함.
	
}).data('swipe');
$(".prevBtn").on("click", function() { //이전 버튼을 클릭했을 때 
	myWsipe.prev(); //이전 배너로 이동합니다.
});
$(".nextBtn").on("click", function() { //다음 버튼을 클릭했을 때 
	myWsipe.next(); //다음 배너로 이동합니다.
});
*/

  /*비쥬얼 이전, 다음 버튼*/



  /*롤링 버튼 배너*/


  /*탭메뉴*/

  /* 베스트북 슬라이더 */


   /*팝업 연동*/
  

});