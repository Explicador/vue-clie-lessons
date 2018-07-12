//"js/scripts.js""js/scripts.js"// JavaScript Document
				
$('#s-inicio').css("background","url(ajax-loader1.gif) no-repeat");
				
 window.onload = function(){

	$('#s-inicio').css("background","url(img/law-bg01.jpg) no-repeat");

	 function goTo(element, speed){
		var href = element.attr('href');
		var top = $(href).offset().top;
		$('html, body').animate({scrollTop: top},speed);

	}

	$(function(){
		$('.descer-subir a').click(function(e){
			e.preventDefault;
			goTo($(this), 2000);
		});	
		$('#resumo a').click(function(e){
			e.preventDefault;
			goTo($(this), 1000);
		});						
	});	
			
	$('.aside-menu').hover(function(){
			
		$('.aside-menu').css("background","#FFF");
		$('.icon-bar').css("background","#D86A39");
					
	});
			
	$('.aside-menu').mouseout(function(){
				
		$('.aside-menu').css("background","#D86A39");
		$('.icon-bar').css("background","#FFF");
					
	});
			
	$("button[class*='menu'").click(function () {
        $(".menu").toggle(1000);
    });
	 $(window).resize(function () {
		 
        if($(window).width() > 991){
			$(".menu").show(1000);
		} 
    });
	
	$(".contact-close").click(function(){
		$(".contactos-form").hide(800);
	});	
	$("button[class*='aside']").click(function(){
		$(".contactos-form").show(800);
	});
	$(".contactos-principal > section >span").click(function(){
		$(".contactos-form").toggle(1000);
	});
			
}
	