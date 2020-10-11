$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 500,
		/* adaptiveHeight: true, */
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.png" alt="<" /></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-left.png" alt=">" /></button>'
	});
});