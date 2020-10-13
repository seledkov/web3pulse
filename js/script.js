$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 500,
		/* adaptiveHeight: true, */
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.png" alt="<" /></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-left.png" alt=">" /></button>'
	});

	$('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__contents').removeClass('catalog__contents_active').eq($(this).index()).addClass('catalog__contents_active');
	});

	$
});