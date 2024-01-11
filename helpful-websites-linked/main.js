
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