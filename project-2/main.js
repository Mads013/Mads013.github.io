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