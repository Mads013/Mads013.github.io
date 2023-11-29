$(document).ready(function(){
    // Initialize Slick Slider
    $('.slick-slider').slick({
        dots: false,
        infinite: true,
        cssEase: 'linear',
        swipe: false,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
    });
});

$(document).ready(function() {
    $(".full-landing-image").ripples({
        resolution: 256,
        perturbance: 0.01,
    });
});