$(document).ready(function () {
    // Initialize Slick Slider
    $('.slick-slider').slick({
        dots: false,
        infinite: true,
        cssEase: 'linear',
        swipe: false,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
    });

    // Initialize Ripples
    $(".full-landing-image").ripples({
        resolution: 100,
        perturbance: 0.003,
    });

    // Hover effect for figures
    $("figure").on("mouseleave", function () {
        $(this).removeClass("hover");
    });

    $("figure").on("mouseenter", function () {
        $(this).addClass("hover");
    });
});