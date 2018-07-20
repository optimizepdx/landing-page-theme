// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        // Account for Sticky Header Offset
        if (window.innerWidth <= 767) {
            var scrollDistance = $($anchor.attr('href')).offset().top - $(".navbar-collapse").height() + $(".navbar-nav").height();
        } else {
            var scrollDistance = $($anchor.attr('href')).offset().top - $(".navbar-collapse").height();
        }
        // Animation Call
        $('html, body').stop().animate({
            scrollTop: scrollDistance
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});