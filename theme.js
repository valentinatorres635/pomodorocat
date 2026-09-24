/* Shared scene for all widgets: background image + fireflies.
   To use a different background on one page, set window.BACKGROUND = "file.gif" before this script. */
(function () {
  const bg = window.BACKGROUND ?? "background.gif";
  if (bg) {
    const img = new Image();
    img.onload = () => document.body.style.setProperty("--bg-image", `url("${bg}")`);
    img.src = bg;
  }
  const count = window.FIREFLIES ?? 10;
  for (let i = 0; i < count; i++) {
    const f = document.createElement("span");
    f.className = "firefly";
    f.style.left = Math.random() * 100 + "%";
    f.style.top = 20 + Math.random() * 80 + "%";
    f.style.setProperty("--dx", Math.random() * 60 - 30 + "px");
    f.style.setProperty("--dy", -(10 + Math.random() * 50) + "px");
    f.style.animationDuration = `${4 + Math.random() * 5}s, ${1.8 + Math.random() * 2.5}s`;
    f.style.animationDelay = `${-Math.random() * 5}s, ${-Math.random() * 3}s`;
    document.body.appendChild(f);
  }
})();
