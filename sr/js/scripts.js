

$(function () {
    var jContent = $("#project_description .wrap");


    $("a.project-info").click(

    function (objEvent) {
        var jLink = $(this);

        $.ajax({
            url: jLink.attr("href"),
            type: "get",
            dataType: "html",
            error: function () {
                jContent.html("<p>Page Not Found!!</p>");
            },
            beforeSend: function () {
                $('#project_description').css('height', 'auto');
                $("#progressBar").show();
                progress(100, $('#progressBar'));

            },
            complete: function () {
                $('.flexslider').flexslider();

            },


            success: function (strData) {

                jContent.html(strData);
                $('html, body').animate({
                    scrollTop: $('#project_description').offset().top
                }, 500);
                $(".close").click(function () {
                    $('#project_description').animate({
                        height: "0"
                    }, 500);
                    $('body').animate({
                        scrollTop: $('#portfolio').position().top
                    }, 500);
                });

                $("#progressBar").fadeOut("slow");
            }
        });

        return (false);
    });

});

$(function () {
    $('.nav ul a[href^="#"]').bind('click', function (event) {
    	event.preventDefault();
    	var target = this.hash;
        var anchor = $(this);

        $('html, body').stop().animate({
            'scrollTop' : $(anchor.attr('href')).offset().top
        }, 500, 'swing', function () {
        window.location.hash = target;
        });
    });

    $(".name a").bind('click', function (event) {
        $('html, body').stop().animate({
            'scrollTop': 0
        }, 500);
    });
});
$(function () {

    $(window).hashchange(function () {
        var hash = location.hash;
	    $('.nav a').each(function(){
	      var that = $(this);
	      that[ that.attr( 'href' ) === hash ? 'addClass' : 'removeClass' ]( 'active' );
	      });
	  })
	  
});

 