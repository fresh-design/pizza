var screen = $(window).height();

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() + 110 > screen) {
			$("header").addClass("yellow");
		} else{
			$("header").removeClass("yellow");
		}
	})
});
