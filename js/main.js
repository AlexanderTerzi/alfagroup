$(function () {


	// ArcticModal
	$('.popup').click(function(e) {
  		e.preventDefault();
  		$('#exampleModal').arcticmodal();
  	});

    // Slick slider
  	$('.gallery__slider').slick({
   		dots: true,
   		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
   		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
  	});

  	$('.review__list').slick({
   		dots: true,
   		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
   		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
  	});

  	// Плавный скроллинг
	$('.go_to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });

    // Hamburger
	$('.menu-open').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.main-menu').toggleClass('menu-opened');
	})

	$('.menu-opened li a').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '0');
		$('.main-menu__list').toggleClass('menu-opened');
	})

  // Плавающая шапка
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700){  
            $('.header-top').addClass("sticky");
        }
        else{
            $('.header-top').removeClass("sticky");
        }
    });

});