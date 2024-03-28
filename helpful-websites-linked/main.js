
function openNav() {
    document.getElementById("overlay").style.width = "100%";
    document.querySelector(".overlay-content").style.display = "block";
}

function closeNav() {
    document.getElementById("overlay").style.width = "0";
    document.querySelector(".overlay-content").style.display = "none";
}
function toggleNav() {
    var overlay = document.getElementById('overlay');
    overlay.classList.toggle('open');
    var overlayContent = document.querySelector('.overlay-content');
    overlayContent.style.display = overlayContent.style.display === 'block' ? 'none' : 'block';
}

const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: {},
    effect: 'cube',
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Your page has loaded, hide the loading spinner
    var loadingSpinner = document.getElementById("loadingSpinner");
    loadingSpinner.style.display = "none";
});

window.addEventListener("load", function () {
    // The entire page has finished loading, hide the loading spinner
    var loadingSpinner = document.getElementById("loadingSpinner");
    loadingSpinner.style.display = "none";
});






