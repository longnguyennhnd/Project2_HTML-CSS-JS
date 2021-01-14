$(document).ready(function(){
	var owl = $('.owl-carousel');
		owl.owlCarousel({
		loop:true,
		autoplay: true,
		items: 1,
		dots: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		animateOut: 'fadeOut',
		nav: true
	});
		owl.trigger('refresh.owl.carousel')
});

/*Nút lên đầu trang*/
$(window).scroll(function(){
		if($(this).scrollTop()>40){
			$('#topBtn').fadein();
		}
		else{
			$('#topBtn').fadeout()
		}
	});
	$("#topBtn").click(function(){
		$('html,body').animate({scrollTop:0},800);
	});

  $(function(){
 	$('.play').on('click',function(){
 		owl.trigger('play.owl.autoplay',[2000])
 	})
 	$('.stop').on('click',function(){
 		owl.trigger('stop.owl.autoplay')
 	})
 	$(window).scroll(function(event) {
 		var vt = $('html,body').scrollTop();
 		if (vt >= 350) {
 			$('.header').addClass('fix');
 		}
 		else if(vt < 300)
 		{
 			$('.header').removeClass('fix');
 		}
 	});

 	// VIẾT JS CHO PHẦN NGÔN NGỮ
 	var ngonngu = document.getElementsByClassName('ngonngu')[0];
 	var vnd = document.getElementsByClassName('vnd')[0];
 	var en = document.getElementsByClassName('en')[0];
 	var usd = document.getElementsByClassName('usd')[0];
 	ngonngu.addEventListener('click', function() {
 		en.classList.toggle('hienrade');
 	})
 	vnd.addEventListener('click', function() {
 		usd.classList.toggle('hienrade');
 	})
 });