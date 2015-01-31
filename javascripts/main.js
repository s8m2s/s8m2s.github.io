(function() {

// if (Modernizr.flexbox) {

  // changes the height when the window is resized or when orientation changes
  $(window).on('load resize orientationchange', function(){
    $('.poster').css('height', $(window).height());
  });

// };

  // Smooth scroll to any anchor
  $('a[href*=#]:not([href=#])').click(function(e) {
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        e.preventDefault();
      }
    }
  });

})();


// $(function() {

// });



// FlexSlider Slideshow
//   $('.slider').flexslider({
//    animation: "slide",
//     slideshowSpeed: 10000,
//     controlNav: false,
//     directionNav: false
//   });

// Lettering.js adds spans around letters for letter selection
// $(".nameplate").lettering();