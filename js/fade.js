$(document).ready(function () {
  $(".fade-in-content").animate({ opacity: 1 }, 1000);

  $(window).scroll(function () {
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();

    $(".fade-in-section").each(function () {
      var offsetTop = $(this).offset().top;

      if (scrollPos + windowHeight > offsetTop) {
        $(this).css("opacity", "1");
      }
    });
  });
});
