$(document).ready(function() {
    

    $(window).scroll(function() {
        if (scrollY > 140) {
            $("header").css("background-color", "white");
            $("header").css("boxShadow","10px 20px 30px lightgray");
            $(".navbar-brand img").attr("src","img/logo_black.png");
            // $(".navbar-nav .nav-link ").attr("style", "color: black !important");
        } else {
            $("header").css("background-color", "white");
            $(".navbar-brand img").attr("src", "img/logo_black.png");
            // $(".navbar-nav .nav-link ").attr("style", "color: black !important");
            $("header").css("boxShadow","0px 0px 0px lightgray");
        }
    })
})