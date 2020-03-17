$(document).ready(function(){
  $('.slider').slick({
  arrows : false,
    	dots : true,
    	dotsClass : 'dots'
  });
});


 $(window).scroll(function(){

	var fix = $('.top')

	if($(this).scrollTop() > 400){
		fix.addClass('new')
	}
	else{
		fix.removeClass('new')
	}
})

   $('.gallery').magnificPopup({
  		delegate: 'a', 
  		type: 'image'
});

   $('.btn').click(function(){
	$('.menu').toggleClass('drop-down')
})

