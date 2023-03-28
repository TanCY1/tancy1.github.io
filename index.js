function getscreensize() {
    document.getElementById("screenwidth").innerHTML = window.innerWidth;
}
document.getElementById("screenwidth").innerHTML = window.innerWidth;
window.addEventListener('resize', getscreensize);