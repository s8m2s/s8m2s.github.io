// Set the height of an eliment to fill the viewport
$(document).ready(function() {
    var resizeContentWrapper = function () {

            var target = {
                content: $('.poster')
            };

            target.content.css('height', $(window).height());
        
        }
        
    resizeContentWrapper();
    $(window).bind('resize orientationchange', resizeContentWrapper);
});

// FlexSlider Slideshow
$(document).ready(function() {
  $('.slider').flexslider({
    animation: "slide",
    slideshowSpeed: 10000,
    controlNav: false,
    directionNav: false
  });
});

// Lettering.js adds spans around letters for letter selection
$(document).ready(function() {
    $(".nameplate").lettering();
});