jQuery("#profile").fitText((Math.sqrt(5) + 1) / 2);
function format() {
  if (window.innerHeight / window.innerWidth >= 1) {
    document.getElementById("backg").style.flexDirection = "column";
    document.getElementById("img").style.maxWidth = "50vw";
    document.getElementbyId("profile").style.height="75vh";
  }
  else {
    document.getElementById("backg").style.flexDirection = "row";
    document.getElementById("img").style.maxWidth = "25vw";
    document.getElementbyId("profile").style.height="0";
  }
}
window.addEventListener("resize", format);

