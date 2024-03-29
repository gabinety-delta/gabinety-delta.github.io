jQuery(document).ready(function () {
    $('#carouselHacked').carousel();

    //scrolling buttons
    $("#left-carousel-control").click(function () {
        $('#carouselHacked').carousel('prev');
    });

    $("#right-carousel-control").click(function () {
        $('#carouselHacked').carousel('next');
    });

    //this code is for smooth scroll and nav selector
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll, onScroll);
            });
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.navbar-default .navbar-nav>li>a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position()) {
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.navbar-default .navbar-nav>li>a').removeClass("active");
                    currLink.addClass("active");
                }
                else {
                    currLink.removeClass("active");
                }
            }
        });
    }


    //this code is for animation nav
    jQuery(window).scroll(function () {
        var windowScrollPosTop = jQuery(window).scrollTop();
        if (windowScrollPosTop >= 150) {
            jQuery(".top-header .container").css({ "height": "50px" });
            jQuery(".top-header img.logo").css({ "height": "48px", "margin-left": "36px" });
            jQuery(".nav-bar").css({ "margin-top": "0px", });
        }
        else {
            jQuery(".top-header .container").css({ "height": "108px" });
            jQuery(".top-header img.logo").css({ "height": "101px", "margin-left": "0px"  });
            jQuery(".nav-bar").css({ "margin-top": "31px", "margin-bottom": "0px" });
        }
    });

});


