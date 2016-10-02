

var header = $('header');

function fadeInUp() {
  var animated = $('.animated');
  var y = $(window).scrollTop() + $(window).height();

  animated.each(function(i) {
    x = $(this).offset().top + 40;
    if (x < y) $(this).addClass('fadeInUp');
  });
}

$(function(){

  FastClick.attach(document.body);

  fadeInUp();

  $(window).scroll(function () {
    fadeInUp();
  });

});


$(function(){
  'use strict';
  var options = {
    debug: true,
    prefetch: true,
    cacheLength: 2,
    onStart: { // The function to run once a page load has been activated. This is an ideal time to animate elements that exit the page and set up for a loading state.
      duration: 450, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        //$container.addClass('is-exiting');
        $container.addClass('animate-header-out animate-content-out');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: { // The function to run when the requested content is ready to be injected into the page. This is when the page's contents should be updated.
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        //$container.removeClass('is-exiting');
        $container.removeClass('animate-header-out animate-content-out').addClass('animate-header-in');

        // Inject the new content
        $container.html($newContent);

        $('html, body').animate({ scrollTop: 0 }, 0);

        fadeInUp();
      }
    },
    onAfter: function($container, $newContent) {

    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});
