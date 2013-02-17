


var Application = {
  init: function() {
    var touch = Modernizr.touch,
        clickEvent = (touch) ? "touchend" : "click";
    
    
    $('.scroll').on(clickEvent, Application.scrollTo);
    
    if (touch) $('.totop').on("click", function(e){ e.preventDefault(); });
  },
  
  
  scrollTo: function(e) {
    e.preventDefault();
    $("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 1000,
			easing: "swing"
		});
		return false;
  }
};

$(function(){
  Application.init();
});


$(window).load(function() {
	$('.flexslider').flexslider({ 
		animation: "slide", 
		easing: "swing",       
		slideshow: false,              
		prevText: "",           
		nextText: "",               
		keyboard: true,                
		animationLoop: false,
		mousewheel:true,
		});
 
$('article').hover(
      function() {
        $(this).addClass('focused');  
      },
      function() {
        $(this).removeClass('focused');
      }
    );
	$.backstretch("img/bg_blur.jpg");
});