$(function () {
  //scroll to top
  $('.btn-gotop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });

  //show up-button
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.btn-gotop').removeClass('hidden');
    } else {
      $('.btn-gotop').addClass('hidden');
    }
  });
});

// Fix mobile header

$(document).scroll(function (e) {
  $(window).scrollTop() > 502
    ? $('.header').addClass('header-scroll')
    : $('.header').removeClass('header-scroll');
});
