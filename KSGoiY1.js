// $(document).ready(function(){
// 	var owl = $('.owl-carousel');
// 		owl.owlCarousel({
// 		loop:true,
// 		autoplay: true,
// 		items: 2,
// 		dots: false,
// 		autoplaySpeed: 1000,
// 		autoplayTimeout: 5000,
// 		animateOut: 'fadeOut',
// 		nav: true
// 	});
// 		owl.trigger('refresh.owl.carousel')
// });


  $(function(){
 	var owl = $('.owl-carousel');
 	owl.owlCarousel({
 		items:2,
 		loop:true,
 		margin:10,
 		autoplay:true,
 		autoplayTimeout:2000,
 		autoplayHoverPause:false,
 		nav: true
 	});
 	$('.play').on('click',function(){
 		owl.trigger('play.owl.autoplay',[2000])
 	});
 	$('.stop').on('click',function(){
 		owl.trigger('stop.owl.autoplay')
 	});
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
 	$(window).scroll(function(event) {
 		var vt = $('html,body').scrollTop();
 		if (vt >= 450 && vt <= 3300) {
 			$('.colRight').addClass('dungyen');
 		}
 		else
 		{
 			$('.colRight').removeClass('dungyen');
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

 $(function(){
 	var owl = $('.owl-carousel2');
 	owl2.owlCarousel({
 		items:4,
 		loop:true,
 		margin:10,
 		autoplay:true,
 		autoplayTimeout:2000,
 	});
 	
 	$(window).scroll(function(event) {
 		var vt = $('html,body').scrollTop();
 		if (vt >= 400) {
 			$('.row.home-search').addClass('fix');
 		}
 		else if(vt < 300)
 		{
 			$('.row.home-search').removeClass('fix');
 		}
 	});
 });