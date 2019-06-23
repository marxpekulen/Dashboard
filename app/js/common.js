$(function() {

	// Navigation
	$(".js-open-nav").click(function (e) {
		e.stopPropagation();
		$(this).toggleClass("main-header__bars--opened");
		$(".main-nav").toggleClass("main-nav--active");
	});

	$(".main-nav").click(function (e) {
		e.stopPropagation();
	});

	$(document).click(function () {
		$(".main-nav").removeClass("main-nav--active");
		$(".header-search-form").slideUp();
	});

	// Search

	$(".main-header__search").click(function (e) {
		e.stopPropagation();
	});

	$(".main-header__btn.main-header__btn--search, .header-search-form__close").click(function () {
		$(".header-search-form").slideToggle();
		$(".header-search-form__input").val("");
	});

	$(".main-header__btn.main-header__btn--search").click(function () {
		$(".header-search-form__input").focus();
	});

	// Chart
	$(".statistics-chart__bars span").each(function () {
		var dataVal = $(this).attr("data-value");
		$(this).css("transform", "scaleY(" + dataVal + ")");
	});

	// Activities Carousel
	var activitiesCarousel = $(".activities__carousel").owlCarousel({
		items: 4,
		margin: 30,
		nav: false,
		dots: false,
		responsive:{
	        0: {
	            items: 1
	        },
	        768: {
	            items: 2
	        },
	        1200: {
	            items: 4
	        }
	    }
	});

	$(".activities-controlls__btn--prev").click(function(){
		activitiesCarousel.trigger("prev.owl.carousel");
	});

	$(".activities-controlls__btn--next").click(function(){
		activitiesCarousel.trigger("next.owl.carousel");
	});

});
