document.addEventListener("includesLoaded", () => {

  const track = document.getElementById("certTrack");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  if (!track || !prev || !next) return;

  let position = 0;
  const step = 150;

  const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;

  next.addEventListener("click", () => {
    position = Math.max(position - step, -maxScroll);
    track.style.transform = `translateX(${position}px)`;
  });

  prev.addEventListener("click", () => {
    position = Math.min(position + step, 0);
    track.style.transform = `translateX(${position}px)`;
  });

});