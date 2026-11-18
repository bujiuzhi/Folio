const steps = [...document.querySelectorAll('.story-step h3')];
const cards = [...document.querySelectorAll('.deck-card')];
const deck = document.querySelector('.story-deck');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let current = 0;
let requested = 0;
let moving = false;
let frame;

const wrap = index => (index + cards.length) % cards.length;

function select(index, direction = Math.sign(index - current)) {
  requested = wrap(index);
  if (moving || requested === current) return;
  const next = requested;
  const outgoing = cards[current];
  const incoming = cards[next];
  const before = cards.map(card => getComputedStyle(card).transform);
  const sign = direction < 0 ? -1 : 1;
  current = next;
  cards.forEach((card, i) => {
    card.dataset.depth = wrap(i - current);
    card.setAttribute('aria-hidden', String(i !== current));
  });
  if (reducedMotion.matches || !outgoing.animate) return;
  moving = true;
  const timing = {duration: 560, easing: 'cubic-bezier(.2,.75,.25,1)'};
  const animations = cards.map((card, i) => {
    const end = getComputedStyle(card).transform;
    const keyframes = card === outgoing
      ? [{transform: before[i], zIndex: 9}, {transform: `translateX(${-sign * 31}%) rotateZ(${-sign * 9}deg) scale(.95)`, zIndex: 9, offset: .42}, {transform: end, zIndex: Number(getComputedStyle(card).zIndex)}]
      : [{transform: before[i]}, {transform: end}];
    if (card === incoming) keyframes[0].zIndex = 8;
    return card.animate(keyframes, timing);
  });
  Promise.allSettled(animations.map(animation => animation.finished)).then(() => {
    moving = false;
    if (requested !== current) select(requested);
  });
}

function sync() {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = undefined;
    const readingLine = innerWidth <= 640
      ? Math.min(innerHeight * .82, deck.getBoundingClientRect().bottom + 32)
      : innerHeight * .52;
    // 以实际标题为准，并留一点回差，避免在临界点来回换牌。
    let index = 0;
    steps.forEach((heading, i) => {
      const offset = i > requested ? -18 : 18;
      if (heading.getBoundingClientRect().top <= readingLine + offset) index = i;
    });
    select(index);
  });
}

addEventListener('scroll', sync, {passive: true});
addEventListener('resize', sync);
sync();
