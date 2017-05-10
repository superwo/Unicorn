$(function() {

	$('.preloader').delay(1000).fadeOut();
	$(".anim").animated("bounceIn");

	$('.facts-nr').countimator({
		duration: 2000
	});

	$('#articles').owlCarousel({
		items: 3,
		navigation: true,
		navigationText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1]
	});

	$('.portfolio--wrap').owlCarousel({
		center: true,
		loop: true,
		responsiveClass:true,
		items: 4,
		margin: 0,
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1]
	});
	$('.brief-wrap').owlCarousel({
		items: 3,
		navigation: true,
		navigationText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2]
	});



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });



});
