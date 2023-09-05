$(document).ready(function () {
  var $smooth = $('a[href^="#"]');

  $smooth.on("click", function () {
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(
      href === "#top" || href === "#" || href === "" ? "html" : href
    );
    var position = target.offset().top;
    if (!$("body html").is(":animated")) {
      $("body,html").stop().animate({ scrollTop: position }, speed, "swing");
    }
    return false;
  });

  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    $(".header_menu li a").each(function (index, element) {
      let target = $(this).attr("href");
      let targetOffset = $(target).offset().top;
      if (scrollTop >= targetOffset) {
        $(".header_menu li a").each(function (index, element) {
          $(this).removeClass("active");
        });
        $(this).addClass("active");
      }
    });
  });

  new TypeIt("#text_typing", {
    speed: 120,
    loop: true,
  })
    .type("Frontend Developer.", { delay: 750 })
    .delete(null, { delay: 85 })
    .type("Freelance Developer.", { delay: 750 })
    .go();

  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all",
    },
  });
});
