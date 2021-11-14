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
	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроллинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

    // Hamburger
	$('.menu-open').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.main-menu__list').toggleClass('menu-opened');
	})

	$('.menu-opened li a').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '0');
		$('.main-menu__list').toggleClass('menu-opened');
	})

});