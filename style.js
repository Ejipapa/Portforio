$(function(){
	$(window).scroll(function (){
		$('.layout').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('fadein');
			}
		});
	});
});
$(function(){
	$(window).scroll(function (){
		$('.layout2').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('fadein');
			}
		});
	});
});
$(function(){
	$(window).scroll(function (){
		$('.layout3').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('fadein');
			}
		});
	});
});
$(function(){
	$(window).scroll(function (){
		$('.layout4').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('fadein');
			}
		});
	});
});
