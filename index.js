function getscreensize() {
    let screenwidth=window.innerWidth;
  document.getElementById("screenwidth").innerHTML = screenwidth;
  }
  getscreensize();
  window.addEventListener('resize', getscreensize);
  