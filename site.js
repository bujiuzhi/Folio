const tabList = document.querySelector('#workflow-tabs');
const panel = document.querySelector('#workflow-panel');
const video = document.querySelector('#film');
const links = document.querySelector('#chapter-links');

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function playAt(player, time) {
  const seek = () => { player.currentTime = time; };
  if (player.readyState) seek();
  else player.addEventListener('loadedmetadata', seek, {once: true});
  player.play().catch(() => {});
}

function renderPanel(chapter) {
  const screenshot = element('div', '', 'screenshot');
  const clip = element('video');
  clip.src = chapter.video;
  clip.poster = chapter.id + '-poster.jpg';
  clip.controls = true;
  clip.playsInline = true;
  clip.preload = 'metadata';
  clip.setAttribute('aria-label', chapter.title + '操作录屏');
  screenshot.append(clip);
  const steps = element('ol', '', 'steps');
  for (const [title, explanation, time] of chapter.steps) {
    const button = element('button', title);
    button.type = 'button';
    button.append(element('span', explanation));
    button.addEventListener('click', () => {
      playAt(clip, time);
    });
    const item = element('li');
    item.append(button);
    steps.append(item);
  }
  const copy = element('div');
  copy.append(element('h3', chapter.title), element('p', chapter.description), steps);
  panel.replaceChildren(screenshot, copy);
  panel.setAttribute('aria-labelledby', 'tab-' + chapter.id);
}

function initialize(chapters) {
  const buttons = [];
  let start = 4;
  for (const [index, chapter] of chapters.entries()) {
    const button = element('button', chapter.label);
    button.type = 'button';
    button.id = 'tab-' + chapter.id;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', panel.id);
    button.addEventListener('click', () => selectTab(index));
    buttons.push(button);
    tabList.append(button);

    const time = start;
    start += chapter.seconds;
    const label = Math.floor(time / 60) + ':' + String(time % 60).padStart(2, '0');
    const link = element('a', label + ' ' + chapter.label);
    link.href = 'folio.mp4#t=' + time;
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      playAt(video, time);
    });
    links.append(link);
  }

  function selectTab(index) {
    buttons.forEach((button, i) => {
      button.setAttribute('aria-selected', String(i === index));
      button.tabIndex = i === index ? 0 : -1;
    });
    renderPanel(chapters[index]);
  }

  tabList.addEventListener('keydown', (event) => {
    const current = buttons.indexOf(event.target);
    if (current === -1) return;
    let next;
    switch (event.key) {
      case 'ArrowLeft': next = (current + buttons.length - 1) % buttons.length; break;
      case 'ArrowRight': next = (current + 1) % buttons.length; break;
      case 'Home': next = 0; break;
      case 'End': next = buttons.length - 1; break;
      default: return;
    }
    event.preventDefault();
    selectTab(next);
    buttons[next].focus();
  });
  selectTab(0);
}

fetch('chapters.json')
  .then((response) => {
    if (!response.ok) throw new Error('章节加载失败');
    return response.json();
  })
  .then(initialize)
  .catch(() => panel.replaceChildren(element('p', '交互导览暂时无法加载，可以观看上方视频。')));
