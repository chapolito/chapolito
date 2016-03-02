$(function(){

  var animated = $('.animated');

  function fadeInUp() {
    var y = $(window).scrollTop() + $(window).height();
      
    animated.each(function(i) {
      x = $(this).offset().top + 40;
      if (x < y) $(this).addClass('fadeInUp');
    });
  }

  fadeInUp();

  $(window).scroll(function () {
    fadeInUp();
  });
  
});

