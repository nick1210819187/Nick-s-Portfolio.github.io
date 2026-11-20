// Local preview: vendored liquidGL v3, with the original navigation as fallback.
(async () => {
  const header = document.querySelector('#site-header');
  const dock = header.querySelector('.dock');
  header.setAttribute('data-liquid-ignore', '');
  const progress = document.querySelector('.case-progress');
  if (progress) header.append(progress);
  await document.fonts.ready;
  const firstImage = document.querySelector('.hero-portrait, .case-slides img');
  if (firstImage) await firstImage.decode().catch(() => {});
  if (!window.liquidGL) return;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const mounted = liquidGL({
    target: '.dock, .case-progress',
    snapshot: 'body',
    content: false,
    resolution: 1.5,
    zIndex: 3,
    refraction: .19,
    aberration: .035,
    bevelDepth: .09,
    bevelWidth: .38,
    frost: 0,
    magnify: 1.06,
    shadow: true,
    specular: true,
    reveal: 'none',
    tilt: false,
    interaction: reducedMotion.matches ? 'none' : 'fluid',
    interactionStrength: .1,
    interactionRadius: .8,
    interactionViscosity: .6,
    tint: 'rgba(242, 246, 252, 0.025)',
    on: { init(instance) {
      document.documentElement.classList.add('has-liquidgl');
      instance.el.style.pointerEvents = 'auto';
      requestAnimationFrame(syncExitMaterial);
    } }
  });
  const lenses = (Array.isArray(mounted) ? mounted : [mounted]).filter(Boolean);
  const lens = lenses[0];
  if (!lens) return;
  const updateTint = () => lens.setTint(header.classList.contains('over-hero')
    ? 'rgba(18, 26, 43, 0.04)'
    : 'rgba(242, 246, 252, 0.025)');
  updateTint();
  new MutationObserver(updateTint).observe(header, {attributes: true, attributeFilter: ['class']});
  const photoStage = document.querySelector('.photo-stage');
  if (photoStage) liquidGL.registerDynamic('.photo-stage');
  const links = [...dock.querySelectorAll('a'), ...header.querySelectorAll('.case-count')];
  const sampler = document.createElement('canvas');
  sampler.width = links.length * 3;
  sampler.height = 3;
  const sampling = sampler.getContext('2d', {willReadFrequently: true});
  function syncLabelContrast() {
    const renderer = lens.renderer;
    const canvas = renderer?.staticSnapshotCanvas;
    if (!canvas) return;
    const scale = renderer.scaleFactor;
    const origin = renderer.snapshotTarget.getBoundingClientRect();
    links.forEach((link, i) => {
      const rect = link.getBoundingClientRect();
      const x = Math.max(0, (rect.left + 8 - origin.left) * scale);
      const y = Math.max(0, (rect.top + 8 - origin.top) * scale);
      sampling.drawImage(canvas, x, y, Math.max(1, (rect.width - 16) * scale),
        Math.max(1, (rect.height - 16) * scale), i * 3, 0, 3, 3);
    });
    const pixels = sampling.getImageData(0, 0, sampler.width, 3).data;
    links.forEach((link, i) => {
      let brightness = 0;
      for (let y = 0; y < 3; y++) for (let x = 0; x < 3; x++) {
        const at = (y * sampler.width + i * 3 + x) * 4;
        brightness += pixels[at] * .2126 + pixels[at + 1] * .7152 + pixels[at + 2] * .0722;
      }
      const dark = brightness / 9 < 145;
      link.style.setProperty('--glass-ink', dark ? '#ffffff' : '#0f1b2b');
      link.style.setProperty('--glass-text-shadow', dark
        ? '0 1px 3px #000000cc, 0 0 1px #00000099'
        : '0 1px 2px #ffffffcc, 0 0 1px #ffffff99');
    });
  }
  const queueMaterial = () => {
    if (!materialFrame) materialFrame = requestAnimationFrame(syncExitMaterial);
  };
  if (photoStage) new MutationObserver(queueMaterial).observe(photoStage,
    {subtree: true, attributes: true, attributeFilter: ['class']});
  window.addEventListener('resize', queueMaterial);
  let materialFrame = 0;
  function syncExitMaterial() {
    materialFrame = 0;
    const nav = dock.getBoundingClientRect();
    let blur = 0;
    document.querySelectorAll('.work-card.is-exiting').forEach(card => {
      const rect = card.querySelector('.work-card-inner').getBoundingClientRect();
      if (rect.top < nav.bottom && rect.bottom > nav.top) {
        blur = Math.max(blur, parseFloat(card.style.getPropertyValue('--exit-blur')) || 0);
      }
    });
    // Match retreating artwork, so the glass does not reveal a sharp cached image.
    lens.options.frost = Math.min(2, blur * .3);
    syncLabelContrast();
  }
  window.addEventListener('scroll', () => {
    if (!materialFrame) materialFrame = requestAnimationFrame(syncExitMaterial);
  }, {passive: true});
  syncExitMaterial();
  reducedMotion.addEventListener('change', () => {
    lenses.forEach(item => {
      item.options.interaction = reducedMotion.matches ? 'none' : 'fluid';
    });
  });
  window.addEventListener('pagehide', event => {
    if (!event.persisted) lenses.forEach(item => item.destroy());
  });
})();
