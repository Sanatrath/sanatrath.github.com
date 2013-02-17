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
});

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash;
        $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 1000, function () {
        window.location.hash = target;
    });
});