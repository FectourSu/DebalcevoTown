$('#burger').on('click', function(){
  $('.topnav').toggleClass('responsive');
  $('.topnav__overlay').toggleClass('active_overlay');
  $('main').toggleClass('none');
  $('footer').toggleClass('none');
  $('body').toggleClass('stop-scrolling')
});
