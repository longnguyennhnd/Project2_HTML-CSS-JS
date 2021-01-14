 $(function(){
 	var owl = $('.owl-carousel');
 	owl.owlCarousel({
 		items:5,
 		loop:true,
 		margin:10,
 		autoplay:true,
 		autoplayTimeout:2000,
 		autoplayHoverPause:true
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

 
//  function smoothScroll(target,duration){
//  	var target = document.querySelector(target);
//  	var targetPosition = target.getBoundingClientRect().top;
//  	var startPosition = window.pageYoffset;
//  	var distance = targetPosition - startPosition;
//  	var startTime = null;
//  	function animation(currentTime){
//  		if(startTime===null) startTime= currentTime;
//  		var timeElapsed = currentTime - startTime;
//  		var run = ease(timeElapsed,startPosition,distance,duration);
//  		window.scrollTo(0,run);
//  		if(timeElapsed<duration) requestAnimationFrame(animation);
//  		console.log('timeElapsed: '+ timeElapsed + 'duration' +duration);
//  	}
//  	function ease(t,b,c,d){
//  		t /= d/2;
//  		if(t<1) return c/2*t*t+b;
//  		t--;
//  		return -c/2*(t*(t-2)-1)+b;s
//  	}
//  	requestAnimationFrame(animation);
//  }

// var section1=document.querySelector('.header');
// var section2=document.querySelector('.cha,.title, .top-destination,.testimonials,.Discover');
// section1.addEventListener('click',function(){
// 	smoothScroll('.cha',3000)
// });

// section2.addEventListener('click',function(){
// 	smoothScroll('.header',3000)
// });
$(document).ready(function(){
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
document.addEventListener('DOMContentLoaded', function() {
	var nuttimkiem = document.getElementById('nuttimkiem');
	var otimkiem = document.getElementById('otimkiem');
	var nhieuks = document.getElementsByClassName('khachsan');
	nuttimkiem.addEventListener('click', function() {
		var strTimkiem = otimkiem.value;
		for(var i = 0; i < nhieuks.length; i++) {
			var tenks = nhieuks[i].getElementsByClassName('tenks')[0];
			if(tenks.innerText.localeCompare(strTimkiem) == 0) {
				nuttimkiem.attributes[0].value = "KSGoiY" + i + ".html";
			}
			if(tenks.innerText.indexOf(strTimkiem) < 0) {
				nhieuks[i].style.display = 'none';
			}
		}
	})
	
})



// function myFunction() {
//     // Declare variables 
//     var input = document.getElementById('btnSearch');
//     var filter = input.value.toUpperCase();
//     var item = document.getElementsByClassName('suggest-Box');
//     var name = document.getElementsByClassName('name');
//     var txtValue;
//     for (var i = 0; i < item.length; i++) {
//         name = item[i].getElementsByClassName('name')[0];
//         if (name) {
//             txtValue = name.textContent || name.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 item[i].style.display = "";
//             } else {
//                 item[i].style.display = "none";
//             }
//         }

//     }
// }


