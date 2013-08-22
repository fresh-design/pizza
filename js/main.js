var screen = $(window).height();

$(document).ready(function() {
	$(window).scroll(function() {

		$(window).resize(function() {
		    screen = $(window).height();
		});

		if ($(this).scrollTop() + 110 > screen) {
			$("header").addClass("yellow");
		} else{
			$("header").removeClass("yellow");
		}

		if ($(this).scrollTop() > screen*2) {
			$("header").addClass("stop");
		} else{
			$("header").removeClass("stop");
		};

		$(".screen1").css("margin-bottom", screen);
		console.log(screen);
		
	});
});