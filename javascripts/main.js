if (Modernizr.flexbox) {

	// Set the height of an eliment to fill the height of the viewport
	var resizePoster = function () {

	    var posters = {
	        content: $('.poster')
	    };

	    posters.content.css('height', $(window).height());

	};

	// Set height on load
	resizePoster();

	// changes the height when the window is resized or when orientation changes
	$(window).bind('resize orientationchange', resizePoster);

};

// Smooth scroll to any anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// FlexSlider Slideshow
//   $('.slider').flexslider({
//    animation: "slide",
//     slideshowSpeed: 10000,
//     controlNav: false,
//     directionNav: false
//   });

// Lettering.js adds spans around letters for letter selection
// $(".nameplate").lettering();