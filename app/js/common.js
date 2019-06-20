$(function() {

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

	var activitiesQuantity = $(".activities__carousel").size;
	console.log(activitiesQuantity);

	$(".activities-controlls__btn--prev").click(function(){
		activitiesCarousel.trigger("prev.owl.carousel");
	});

	$(".activities-controlls__btn--next").click(function(){
		activitiesCarousel.trigger("next.owl.carousel");
	});

});
