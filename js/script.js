$('#burger').on('click', function(){
  $('.topnav').toggleClass('responsive');
  $('.topnav__overlay').toggleClass('active_overlay');
  $('main').toggleClass('none');
  $('footer').toggleClass('none');
  $('body').toggleClass('stop-scrolling')
});
// $('body, html').ready(function () {
//   $(".video-gallery").magnificPopup({
//     delegate: "a",
//     type: "iframe",
//     gallery: {
//       enabled: true
//     }
//   });
// });
