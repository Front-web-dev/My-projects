$(document).ready(function(){
	$('.slider').slick();
});

$('.slider').slick({
	infinite: true,
	dots: true,
	arrows: false,
	variableWidth: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
});

$('#work-slider').slick({
	dots: false,  
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			arrows: true,
		}
	},
	]
});