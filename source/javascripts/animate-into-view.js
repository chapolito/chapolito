$(function(){ 

  var animated = $('.animated');

  $(window).scroll(function () {

    var y = $(window).scrollTop() + $(window).height();
    
    animated.each(function(i) {
      x = $(this).offset().top + 40;
      if (x < y) $(this).addClass('fadeInUp');
    });   
  });
});