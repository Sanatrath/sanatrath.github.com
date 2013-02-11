$(window).load(function() {
	$('.flexslider').flexslider({ 
		animation: "slide", 
		easing: "swing",       
		slideshow: false,              
		prevText: "",           
		nextText: "",               
		keyboard: true,                
		animationLoop: false,
		});
		
	

 
$('article').hover(
      function() {
        $(this).addClass('focused');  
      },
      function() {
        $(this).removeClass('focused');
      }
    );
});