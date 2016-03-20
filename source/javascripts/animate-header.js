
$(function() {

  FastClick.attach(document.body);

  var header = $('header'),
  internal_nav = $('header a, footer nav a');

  internal_nav.click(function() {
    header.addClass('animate-header-out');
  });

});

