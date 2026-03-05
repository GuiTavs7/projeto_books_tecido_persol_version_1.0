const video = document.querySelector('video');
video.addEventListener('ended', () => {
  video.currentTime = 0;
  video.play();
});