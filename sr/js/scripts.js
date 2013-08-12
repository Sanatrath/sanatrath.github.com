

$(function () {
    var jContent = $("#project_description .wrap");


    $("a.project-info, a.button_landing").click(

    function (objEvent) {
        var jLink = $(this);
        var nav_links = $(".nav a");
        $.ajax({
            url: jLink.attr("href"),
            type: "get",
            dataType: "html",
            error: function () {
                jContent.html("<p class='margin-bottom'>Didn't think this would happen. Same origin problem. Please send me a mail if this happens. I will edit the website.</p>");
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
                    }, 800);
                    $('body').animate({
                        scrollTop: $('#portfolio').position().top
                    }, 800);
                });

                $("#progressBar").fadeOut("slow");
               
			  
            }
        });

        return (false);
    });
});  

function rotate()  {
    var jContent = $("#project_description .wrap");
    $("a.change").click(

    function (objEvent) {
        var jLink = $(this);
        var nav_links = $(".nav a");
        $.ajax({
            url: jLink.attr("href"),
            type: "get",
            dataType: "html",
            error: function () {
                jContent.html("<p class='margin-bottom'>Didn't think this would happen. Same origin problem. Please send me a mail if this happens. I will edit the website.</p>");
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

}


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
            'scrollTop': '0px'
        }, 500);
    });
});


