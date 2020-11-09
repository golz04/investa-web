$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= 200){
            $(".navbar").css({
                "background-color" : "white",
                "box-shadow" : "0 3px rgba(156, 156, 156, 0.5)",
                "transition" : ".5s"
            });
            $(".navbar a").css("color", "black");
            $(".nav-dropdown .btn-dropdown").css("color", "black");
        } else {
            $(".navbar").css({
                "background-color" : "transparent",
                "box-shadow" : "0 3px rgba(156, 156, 156, 0)",
                "transition" : ".5s"
            });
            $(".navbar a").css("color", "white");
            $(".nav-dropdown .btn-dropdown").css("color", "white");
            $(".content-dropdown a").css("color", "black")
        }
    });
});