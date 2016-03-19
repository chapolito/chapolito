$(function(){

  var header = $('header'),
  internal_nav = $('header a, footer nav a');

  internal_nav.click(function(e) {
    header.addClass('animate-header-out');
  });

});

