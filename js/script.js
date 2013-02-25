
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

var Application = {
  init: function() {
    var touch = Modernizr.touch,
        clickEvent = (touch) ? "touchend" : "click";
   
  }
};

$(function(){
  Application.init();
});


$(function(){
 
    $('a[href*=#]').click(function() {
 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
 
            var $target = $(this.hash);
 
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
 
            if ($target.length) {
 
                var targetOffset = $target.offset().top;
 
                $('html,body').animate({scrollTop: targetOffset}, 1000);
 
                return false;
 
            }
 
        }
 
    });
 
});
/*/
$('head').append('<!--<script type="text/javascript" src="http://api.dribbble.com/players/simplebits/shots?callback=displayShots" async charset="utf-8"><\/script>-->');


function displayShots(data) {

    shots = data.shots;
    
    // create block div and hide it
    for (var i in shots) {
        var shot = shots[i];
        var id = shot.id;
        $('.item').append('<div class="dribbble" id="' + id + '"><img src="' + shot.image_url + '"><h4>' + shot.title + '</div>');
        $('#' + id).hide();
    }
    
    // display the first block div by default
    $('#' + shots[0].id).show().addClass('active');
    
}*/