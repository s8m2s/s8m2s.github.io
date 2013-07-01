// Set the height of an eliment to fill the viewport
var resizePoster = function () {

    var posters = {
        content: $('.poster')
    };

    posters.content.css('height', $(window).height());

};
    
resizePoster();
$(window).bind('resize orientationchange', resizePoster);

// FlexSlider Slideshow
//   $('.slider').flexslider({
//    animation: "slide",
//     slideshowSpeed: 10000,
//     controlNav: false,
//     directionNav: false
//   });

// Lettering.js adds spans around letters for letter selection
// $(".nameplate").lettering();