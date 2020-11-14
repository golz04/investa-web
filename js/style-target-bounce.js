$(".to-down").click(function() {
    $('html, body').animate({
          scrollTop: $("#target").offset().top - 215
    }, 1000);
});