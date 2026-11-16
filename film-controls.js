const player = document.querySelector('.hero-screen video');
const playButton = document.querySelector('.hero-play');

playButton.addEventListener('click', () => {
  player.play().catch(syncPlayButton);
});
player.addEventListener('play', () => {
  if (document.activeElement === playButton) player.focus({preventScroll: true});
  syncPlayButton();
});
player.addEventListener('pause', syncPlayButton);
player.addEventListener('ended', syncPlayButton);

function syncPlayButton() {
  playButton.hidden = !player.paused && !player.ended;
}

syncPlayButton();
