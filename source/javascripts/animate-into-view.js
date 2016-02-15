$(function(){ 

  var animated = $('.animated');

  $(window).scroll(function () {

    var y = $(window).scrollTop() + $(window).height();
    
    animated.each(function(i) {
      x = $(this).offset().top + 40;
      console.log(x);
      if (x < y) $(this).addClass('fadeInUp');
    });   
  });
});