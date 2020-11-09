$(".to-down").click(function() {
    $('html, body').animate({
          scrollTop: $("#target").offset().top
    }, 1000);
});