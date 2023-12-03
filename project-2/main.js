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
        resolution: 300,
        perturbance: 0.01,
    });
















    // NOTE: The following code is for hover effects, but it is currently commented out.
    // Uncomment and modify as needed if you want to use it.
    /*
    $("figure").on("mouseleave", function () {
        $(this).removeClass("hover");
    });

    $("figure").on("mouseenter", function () {
        $(this).addClass("hover");
    });
    */
});