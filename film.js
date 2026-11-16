const trigger = document.querySelector('[data-open-film]');
const dialog = document.querySelector('.film-dialog');
const video = dialog.querySelector('video');

if (typeof dialog.showModal === 'function') {
  trigger.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dialog.showModal();
    video.play().catch(() => {});
  });

  dialog.addEventListener('close', () => {
    video.pause();
    trigger.focus({preventScroll: true});
  });
}
