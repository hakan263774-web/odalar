/* odalar — yavaş kayma, hover’da kaymış baskı. 3D yok. */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".room, .misreg, .seal").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.classList.add("glitch");
      window.setTimeout(() => el.classList.remove("glitch"), 320);
    });
  });

  if (reduce) return;

  const grain = document.querySelector(".grain");
  if (grain) {
    let t = 0;
    const tick = () => {
      t += 0.0022;
      grain.style.transform =
        "translate3d(" + Math.sin(t) * 12 + "px," + Math.cos(t * 0.7) * 8 + "px,0)";
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
})();
