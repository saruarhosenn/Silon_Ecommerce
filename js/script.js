$(document).ready(function () {
			
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 5000);


    $(".js-sticky_menu").waypoint(function (direction) {
        if (direction == "down") {
            $(".sticky_div").addClass("sticky_menu");
        } else {
            $(".sticky_div").removeClass("sticky_menu");
        }
    });

    
    $(".collapse_menu_click").click(function(){
        $(".collapse_menu_show").slideToggle(400);
    })
    
    $(".search_click").click(function(){
        $(".search_box").slideToggle(300);
    })
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("a.scroll_up_btn").fadeIn();
        } else {
            $("a.scroll_up_btn").fadeOut();
        }
    });


    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });


    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
        });

});
