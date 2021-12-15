$(document).ready(function() {
	$(":file").on("change",function(){
		var temp = $(this).val();
		var ext = temp.substring(temp.lastIndexOf(".")).toLowerCase();
		var exts = [','];
		if (temp.indexOf(exts) != -1) {
			alert("파일명에 쉼표("+exts+")가 포함되어 있습니다. 쉼표를 없애고 다시 시도하여 주십시오.");
			$(this).val("");
			return false;
		}
	});

	$("nav > ul > li a").bind("mouseover focus click", function(e){
		if($(window).width() >= "1200" && (e.type == "mouseover" || e.type == "focus")) {
			var height_sub = $('.height ').outerHeight(true);
			$('.menu_bg, nav > ul > li > ul').outerHeight(height_sub);
			$('nav > ul > li > ul, .menu_bg').stop().slideDown(100);
			$('header').addClass("bron");
				$('nav').on('mouseleave',function(){
					$('nav > ul > li > ul, .menu_bg').stop().slideUp(100);
					$('header').removeClass("bron");
				
				});

		} else if($(window).width() < "1200" && e.type == "click") {
			var clickElement = $(this).next();
			
			$('nav ul li').removeClass('active');
			$(this).closest('li').addClass('active');
			
			if((clickElement.is('ul')) && (clickElement.is(':visible'))) {
				$(this).closest('li').removeClass('active');
				clickElement.slideUp(100);
			  }
			
			if((clickElement.is('ul')) && (!clickElement.is(':visible'))) {
				$(this).closest("ul").find("ul").slideUp(100);
				clickElement.slideDown(100);
			}
			if($(this).closest('li').find('ul').children().length == 0) {
				return true;
			} else {
				return false;	
			}
		}
	});
	$('.end_menu').on('focusout',function(){
		$('nav > ul > li > ul, .menu_bg').slideUp(100);
		$('header').addClass("bron");
	});
	
	var height_sub = $('.schadule_service .schadule_wrap').outerHeight(true);
		$('.schadule_service .service_wrap').outerHeight(height_sub);
	
	
	// 모바일 메뉴
	$('.m_menu').click(function() {
		$(this).toggleClass('off');
		$('nav').slideToggle();
		$('nav > ul > li > ul').removeAttr("style");
	});
	
	// 사이즈 초기화
	$(window).resize(function() {
		$('nav').removeAttr("style"); 
		$('nav > ul > li > ul').removeAttr("style");
		$('.menu_bg').removeAttr("style");
		$('.m_menu').removeClass("off");
		$('nav > ul > li').removeClass("active");
		$('nav > ul > li > ul > li > ul').removeAttr("style");
	});
	
	//사이트맵
	var _focus = $(this);
	
	$("[data-rel=pop]").click(function() {

		$this = $(this);
		$(".pop-wrap").hide();
		$("#dimmed").show();
		
		pop_w = $($(this).attr("href")).outerWidth();
		pop_h = $($(this).attr("href")).outerHeight();

		win_h = $(window).height();
		win_t = $(window).scrollTop();

		left_p = (pop_w)/2;
		if(pop_h>=win_h) top_p = 0;
		else {
			top_p = 118;
		}
		
		$($(this).attr("href")).fadeIn().css({"margin-left":-(left_p),"top":top_p});
		
		// 팝업창을 띄운 후 포커스 이동
		$($(this).attr("href")).attr("tabindex", 0).fadeIn().focus();
		return false;
	});
	$(".pop-close, #dimmed").click(function() {
		$("#dimmed, .pop-wrap").hide();
				
		// 팝업창을 닫은 후 포커스 이동
		$(".bxslider_main li:first-child a").focus()
		return false;
	});
	
	//테이블 스크롤
	$('.table_type01.scroll, .scroll_img').on('click',function(){
		$('.scroll_img').css('display','none');
	});
	
	//파일첨부디자인
	var upload = $("html");
	upload.on("change",".file_btn", function(){
		if(window.FileReader){
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).siblings('.fileName').val(filename);
	});
	
	//서브 메뉴
	$(".sub_nav_wrap > div > ul > li > a").on("click",function() {
		$(this).parent().toggleClass("on");
		if($(this).parent().hasClass("on")){
			$(this).next().slideDown(100);
			$(this).attr("aria-label","메뉴 닫기");
			
		}else{
			$(this).next().slideUp(100);
			$(this).attr("aria-label","메뉴 열기");
		}
		 return false;
	});
	$(".sub_nav_wrap > div > ul > li > ul").on("mouseleave",function() {
		$(this).slideUp(100);
		$(this).prev().attr("aria-label","메뉴 열기");
		$(this).parent().removeClass("on");
	});
	
	
	$(".sub_nav_wrap > div > ul > li > ul > li:last-child a").blur(function() {
		$(this).parent().parent().slideUp(100);
		$('.sub_nav_wrap > div > ul > li').removeClass();
		$('.sub_nav_wrap > div > ul > li > a').attr("aria-label","메뉴 열기");
		
	});
	$(".last_menu > a").blur(function() {
		$(this).parent().parent().slideUp(100);
		$('.menu_bg').slideUp(100);
		$('nav > ul > li > ul').slideUp(100);
	});
	
	//상단 이동 스크립트
	$(".top").click(function(){
		$('body, html').animate({scrollTop:0}, 500);
		return false;
	});

	//서브 텝효과
	$('.contents h3.tab_title a').click(function() {
		$(this).parent().next().toggle();
		$(this).parent().toggleClass('on');
	});
	$(window).resize(function() {
		$('.tab_menu ul').removeAttr("style"); 
	});

	//관련사이트
	$('.family_close').click(function () {
		$('.Family_site ul').hide();
	});
	$('.Family_site h3 a').click(function () {
		$('.Family_site ul').show();
	});
	
	//서브 비주얼 영역 텍스트 애니메이션
	$('.sub_title').addClass('animated');

	//상단 메뉴
	$(window).scroll(function(){
		var gnb = $(this).scrollTop();
		var $header = $('#header');
		var menuHeight = $('#header').outerHeight();
		if(gnb > menuHeight){
			$header.addClass('action');
		}else{
			$header.removeClass('action');
		}
	});
	
	//서브메뉴
	$(window).scroll(function(){
		var lnb = $(this).scrollTop();
		var $sub_menu = $('.sub_nav');
		var menuHeight = $('.sub_visual').outerHeight();
		if(lnb > menuHeight - 120){
			$sub_menu.addClass('action');
		}else{
			$sub_menu.removeClass('action');
		}
	});
});

// 메인 및 서브 애니메이션 부분
(function () {
    var elemSections = document.querySelectorAll('.ani_layer');
    var scrollHandler;
    scrollHandler = function () {
        for (var i = 0; i < elemSections.length; i++) {
            var yVal;
            if (elemSections[i].classList.contains('action')) {
                yVal = elemSections[i].getBoundingClientRect().top + 300;
            } else {
                yVal = elemSections[i].getBoundingClientRect().top;
            }
            if (-100 < yVal && yVal < window.innerHeight - 300) {
                elemSections[i].classList.add('action');
            } 
			
        }
    };

    window.addEventListener('scroll', function () {
        requestAnimationFrame(scrollHandler);
    });

})();