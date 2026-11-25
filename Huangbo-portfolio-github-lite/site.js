const coverPages = {training: 3, service: 41, buddy: 22, mis: 53};
const imagePath = (page, folder = 'assets') => folder + '/hb-' + String(page).padStart(2, '0') + '.webp';
const caseLink = project => project.href || 'case.html?id=' + project.id;
const emptySlide = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080"/%3E';
const workImageSizes = '(max-width: 700px) calc(100vw - 36px), (max-width: 1160px) calc(100vw - 80px), 1080px';
const caseContent = document.querySelector('#case-content');
const anchor = id => (caseContent ? 'index.html#' : '#') + id;
const sections = [
  ['home', '首页'],
  ['experience', '经历'],
  ['work', '作品'],
  ['notes', 'AI 实践'],
  ['about', '联系']
];

const header = document.querySelector('#site-header');
if (!header.querySelector('.dock')) header.innerHTML = `
  <nav class="dock" aria-label="页面导航">
    <span class="dock-selection" aria-hidden="true"></span>
    ${sections.map(([id, label]) => `<a href="${anchor(id)}" data-section="${id}">${label}</a>`).join('')}
  </nav>`;

function slideImage(page, caption, loading = 'lazy', sizes = 'calc(100vw - 20px)') {
  const variants = [640, 960, 1280, 1600].map(width => `assets/responsive/hb-${String(page).padStart(2, '0')}-${width}.webp ${width}w`).join(', ');
  const preview = sizes !== 'calc(100vw - 20px)';
  const srcset = preview ? variants : `${variants}, ${imagePath(page)} ${[3, 4, 5, 8, 10, 11, 12, 13, 14, 17, 20, 32, 33, 34, 35, 36, 37, 38, 47, 50].includes(Number(page)) ? 1920 : 2400}w`;
  const source = loading === 'eager'
    ? `src="${imagePath(page)}" srcset="${srcset}" fetchpriority="high"`
    : `src='${emptySlide}' data-src="${imagePath(page)}" data-srcset="${srcset}"`;
  return `<img ${source} sizes="${sizes}" alt="${caption}" width="1920" height="1080" decoding="async">`;
}

function imageButton(page, caption) {
  return `<button type="button" class="image-button" data-sheet="${page}" aria-label="放大图片：${caption}">
    ${slideImage(page, caption, 'lazy', '(max-width: 700px) calc(100vw - 36px), (max-width: 1160px) calc(50vw - 50px), 530px')}
  </button>`;
}

function projectLabels({year, audience}) {
  return `<div class="project-labels"><span>${year}</span><span>${audience}</span></div>`;
}

function renderCaseSlide(page, caption, motion, loading) {
  const artwork = slideImage(page, caption, loading);
  if (!motion) return artwork;
  const [slideWidth, slideHeight] = motion.size;
  const percent = (value, total) => (value / total * 100).toFixed(4) + '%';
  return `<figure class="case-slide-motion">
    ${artwork}
    ${motion.screens.map(({video, rect: [x, y, width, height], radius}) => `
      <span class="case-phone" aria-hidden="true"
        style="left:${percent(x, slideWidth)};top:${percent(y, slideHeight)};width:${percent(width, slideWidth)};height:${percent(height, slideHeight)};border-radius:${percent(radius, width)} / ${percent(radius, height)}">
        <video src="assets/training-demos/${video}.mp4" muted loop playsinline preload="none"></video>
      </span>`).join('')}
  </figure>`;
}

if (caseContent) {
  const project = projects.find(item => item.id === (caseContent.dataset.project || new URLSearchParams(location.search).get('id')));
  if (project) {
    document.title = project.title + ' — 黄博 NICK';
    const next = projects[(projects.indexOf(project) + 1) % projects.length];
    if (!caseContent.hasAttribute('data-static-case')) {
    const slides = [[coverPages[project.id], project.title], ...project.slides];
    caseContent.innerHTML = `
      <div class="case-reader case-intro">
        <a class="case-back" href="index.html#${project.id}">← 返回作品</a>
        <h1>${project.title}</h1>
        ${projectLabels(project)}
      </div>
      <div class="case-slides">
        ${slides.map(([page, caption], index) => renderCaseSlide(page, caption, project.phoneMotion?.[page], index === 0 ? 'eager' : 'lazy')).join('')}
      </div>
      <div class="wrap next-case"><a href="${caseLink(next)}"><span>下一个作品</span><strong>${next.title} <span aria-hidden="true">↗</span></strong></a></div>
      <nav class="case-progress" aria-label="作品页码导航" data-visible="false" aria-hidden="true" inert>
        <span class="case-count"></span>
        <div class="case-thumbnails">
          ${slides.map(([page, caption], index) => `<button type="button" aria-label="第 ${index + 1} 页：${caption}">
            <img src="${imagePath(page, 'assets/slide-thumbs')}" width="224" height="126" alt="" loading="lazy" decoding="async">
          </button>`).join('')}
        </div>
      </nav>`;
    }

    const intro = caseContent.querySelector('.case-intro');
    const deck = caseContent.querySelector('.case-slides');
    const pages = [...deck.children];
    const track = caseContent.querySelector('.case-thumbnails');
    const thumbnails = [...track.children];
    const counter = caseContent.querySelector('.case-count');
    const progress = caseContent.querySelector('.case-progress');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const readingLine = () => Math.min(innerHeight * .5, deck.offsetTop + pages[0].offsetHeight / 2);
    let currentPage = -1;
    let progressFrame = 0;

    function syncProgress() {
      progressFrame = 0;
      const introBottom = intro.getBoundingClientRect().bottom;
      header.classList.toggle('over-hero', introBottom >= 45);
      const visible = scrollY > 80;
      if (progress.dataset.visible !== String(visible)) {
        progress.dataset.visible = String(visible);
        progress.inert = !visible;
        progress.setAttribute('aria-hidden', String(!visible));
      }
      const line = readingLine();
      const firstBelow = pages.findIndex(page => page.getBoundingClientRect().bottom >= line);
      const index = firstBelow === -1 ? pages.length - 1 : firstBelow;
      if (index === currentPage) return;
      thumbnails[currentPage]?.removeAttribute('aria-current');
      const button = thumbnails[index];
      button.setAttribute('aria-current', 'step');
      counter.textContent = (index + 1) + ' / ' + pages.length;
      track.scrollTo({
        left: button.offsetLeft - (track.clientWidth - button.offsetWidth) / 2,
        behavior: reducedMotion.matches ? 'instant' : 'smooth'
      });
      currentPage = index;
    }

    thumbnails.forEach((button, index) => button.addEventListener('click', () => {
      const page = pages[index];
      const topOffset = (caseContent.hasAttribute('data-static-case') || page.classList.contains('case-slide-motion')) ? header.getBoundingClientRect().bottom + 12 : deck.offsetTop;
      window.scrollTo({
        top: scrollY + page.getBoundingClientRect().top - topOffset,
        behavior: reducedMotion.matches ? 'instant' : 'smooth'
      });
    }));
    function scheduleProgress() {
      if (!progressFrame) progressFrame = requestAnimationFrame(syncProgress);
    }
    window.addEventListener('scroll', scheduleProgress, {passive: true});
    window.addEventListener('resize', scheduleProgress);
    syncProgress();

    const phones = deck.querySelectorAll('.case-phone video');
    if (phones.length) {
      const visibleFraction = .25;
      const visiblePhones = new Set();
      let mediaReady = false;
      const playVisiblePhones = () => {
        if (!mediaReady || reducedMotion.matches || navigator.connection?.saveData) return;
        visiblePhones.forEach(video => video.play().catch(() => {}));
      };
      // Phone demos wait until the initial page assets have finished loading.
      const enablePhoneDemos = () => setTimeout(() => {
        mediaReady = true;
        playVisiblePhones();
      }, 1200);
      if (document.readyState === 'complete') enablePhoneDemos();
      else window.addEventListener('load', enablePhoneDemos, {once: true});
      const playback = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= visibleFraction) {
            visiblePhones.add(entry.target);
          } else {
            visiblePhones.delete(entry.target);
            entry.target.pause();
          }
        }
        playVisiblePhones();
      }, {threshold: visibleFraction});
      phones.forEach(video => {
        video.addEventListener('playing', () => video.classList.add('is-playing'), {once: true});
        playback.observe(video);
      });
      reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) phones.forEach(video => video.pause());
      });
    }
  } else {
    caseContent.innerHTML = '<div class="wrap case-reader"><h1>没有找到这个项目</h1><a class="case-back" href="index.html#work">← 回到精选作品</a></div>';
  }
} else {
  document.querySelector('#works-list').innerHTML = projects.map(project => `
    <div class="case-anchor" id="${project.id}"></div>
    <article class="work-card">
      <div class="work-card-inner">
        <div class="work-head">
          <div>
            <h3>${project.title}</h3>
            ${projectLabels(project)}
            <p class="work-description">${project.summary}</p>
          </div>
          <a class="pill primary case-button" href="${caseLink(project)}" aria-label="查看案例：${project.title}">查看作品 <span aria-hidden="true">↗</span></a>
        </div>
        <a class="work-cover" href="${caseLink(project)}" aria-label="进入${project.title}案例">
          ${project.cover ? `<img src="${project.cover}" srcset="${project.coverSrcset}" sizes="${workImageSizes}" width="1600" height="900" alt="${project.title}的作品集封面" loading="lazy" decoding="async">` : slideImage(coverPages[project.id], project.title + '的作品集封面', 'lazy', workImageSizes)}
        </a>
      </div>
    </article>`).join('');
  const initialSection = document.getElementById(location.hash.slice(1));
  if (initialSection) requestAnimationFrame(() => initialSection.scrollIntoView());
  document.querySelector('#practice-list').innerHTML = practice.map(item => `
    <article><figure>${imageButton(item.page, item.title)}<figcaption>${item.title}</figcaption></figure><p>${item.desc}</p></article>`).join('');
  const contactStatus = document.querySelector('#contact-status');
  document.querySelectorAll('[data-copy]').forEach(button => {
    const link = button.closest('.contact-method').querySelector('a');
    const value = link.getAttribute('href').split(':')[1];
    let resetFeedback;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(value);
        contactStatus.removeAttribute('data-error');
        contactStatus.textContent = '已' + button.getAttribute('aria-label');
        button.classList.add('is-copied');
        clearTimeout(resetFeedback);
        resetFeedback = setTimeout(() => button.classList.remove('is-copied'), 1800);
      } catch {
        button.classList.remove('is-copied');
        contactStatus.setAttribute('data-error', '');
        contactStatus.textContent = '可以选中联系方式手动复制';
      }
    });
  });
}

// A short preload margin keeps the next image ready without downloading the whole portfolio.
function loadDeferredImage(image) {
  if (image.dataset.srcset) image.srcset = image.dataset.srcset;
  image.src = image.dataset.src;
  delete image.dataset.src;
  delete image.dataset.srcset;
}
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      loadDeferredImage(entry.target);
      imageObserver.unobserve(entry.target);
    }
  }, {rootMargin: '600px 0px'});
  document.querySelectorAll('img[data-src]').forEach(image => imageObserver.observe(image));
} else {
  document.querySelectorAll('img[data-src]').forEach(loadDeferredImage);
}

const dock = header.querySelector('.dock');
const dockSelection = dock.querySelector('.dock-selection');
const navLinks = [...header.querySelectorAll('[data-section]')];
function positionSelection(active = dock.querySelector('[aria-current="location"]')) {
  if (!active) return;
  dockSelection.style.width = active.offsetWidth + 'px';
  dockSelection.style.transform = `translateX(${active.offsetLeft}px)`;
  requestAnimationFrame(() => dock.classList.add('is-ready'));
}
new ResizeObserver(() => positionSelection()).observe(dock);
dock.addEventListener('pointerover', event => {
  const link = event.target.closest('[data-section]');
  if (link && event.pointerType === 'mouse') positionSelection(link);
});
dock.addEventListener('pointerleave', () => positionSelection());
dock.addEventListener('focusin', event => {
  if (event.target.matches('[data-section]')) positionSelection(event.target);
});
dock.addEventListener('focusout', () => positionSelection());
dock.addEventListener('pointermove', event => {
  if (event.pointerType === 'mouse') {
    dock.style.setProperty('--glass-x', (event.clientX - dock.getBoundingClientRect().left) + 'px');
  }
});
function selectSection(id) {
  for (const link of navLinks) {
    if (link.dataset.section === id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  positionSelection();
}
if (caseContent) {
  selectSection('work');
} else {
  const sectionElements = sections.map(([id]) => document.getElementById(id));
  const hero = document.querySelector('.hero');
  const cards = [...document.querySelectorAll('.work-card')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const stacked = matchMedia('(min-width: 900px) and (min-height: 680px)');
  if (!motion.matches && 'IntersectionObserver' in window) {
    const intro = hero.querySelector('.hero-content');
    const revealThreshold = .24;
    intro.classList.add('is-pending');
    const reveal = new IntersectionObserver(([entry], observer) => {
      if (entry.intersectionRatio < revealThreshold) return;
      intro.classList.replace('is-pending', 'is-revealed');
      observer.disconnect();
    }, {threshold: revealThreshold});
    reveal.observe(hero);
  }
  let frame = 0;
  function syncCardExits() {
    const bounds = motion.matches ? [] : cards.map(card => card.getBoundingClientRect());
    cards.forEach((card, index) => {
      const box = bounds[index];
      const next = bounds[index + 1];
      let progress = 0;
      if (box && box.bottom > 0 && box.top < innerHeight) {
        const leavingViewport = (-box.top - 54) / Math.min(box.height * .52, 340);
        const overlapStart = Math.min(box.bottom, innerHeight) - 32;
        const coveredByNext = stacked.matches && next
          ? (overlapStart - next.top) / Math.max(180, overlapStart - Math.max(box.top, 70))
          : 0;
        progress = Math.min(1, Math.max(0, leavingViewport, coveredByNext));
      }
      card.classList.toggle('is-exiting', progress > 0);
      if (progress > 0) {
        card.style.setProperty('--exit-blur', (progress * 11).toFixed(2) + 'px');
        card.style.setProperty('--exit-opacity', (1 - progress * .82).toFixed(3));
        card.style.setProperty('--exit-scale', (1 - progress * .09).toFixed(4));
      }
    });
  }
  function syncNavigation() {
    let current = 'home';
    for (const section of sectionElements) {
      if (section.getBoundingClientRect().top <= 120) current = section.id;
    }
    const hashTarget = sectionElements.find(section => '#' + section.id === location.hash);
    if (hashTarget && hashTarget.getBoundingClientRect().top <= innerHeight - 32 && hashTarget.getBoundingClientRect().bottom > 80) {
      const atBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = hashTarget.id;
    }
    selectSection(current);
    header.classList.toggle('over-hero', hero.getBoundingClientRect().bottom > 50);
    syncCardExits();
    frame = 0;
  }
  function scheduleNavigation() {
    if (!frame) frame = requestAnimationFrame(syncNavigation);
  }
  window.addEventListener('scroll', scheduleNavigation, {passive: true});
  window.addEventListener('resize', scheduleNavigation);
  window.addEventListener('hashchange', scheduleNavigation);
  motion.addEventListener('change', scheduleNavigation);
  syncNavigation();

  const photoWall = document.querySelector('.photo-wall');
  const stage = photoWall.querySelector('.photo-stage');
  const photos = [...stage.querySelectorAll('.life-photo')];
  const photoButtons = [...photoWall.querySelectorAll('.photo-picker button')];
  const playButton = photoWall.querySelector('.photo-play');
  let currentPhoto = 0;
  let timer;
  let inView = false;
  let hovering = false;
  let paused = motion.matches;

  function showPhoto(index) {
    currentPhoto = index;
    photos.forEach((photo, i) => {
      const current = i === index;
      photo.classList.toggle('is-current', current);
      photo.setAttribute('aria-hidden', String(!current));
      photoButtons[i].setAttribute('aria-pressed', String(current));
    });
  }

  function schedulePhoto() {
    clearTimeout(timer);
    if (paused || hovering || !inView || document.hidden) return;
    timer = setTimeout(() => {
      showPhoto((currentPhoto + 1) % photos.length);
      schedulePhoto();
    }, 6000);
  }

  function updatePlayButton() {
    playButton.setAttribute('aria-label', paused ? '开始自动切换' : '暂停自动切换');
    playButton.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
    schedulePhoto();
  }

  photoButtons.forEach((button, index) => button.addEventListener('click', () => {
    showPhoto(index);
    schedulePhoto();
  }));
  playButton.addEventListener('click', () => {
    paused = !paused;
    updatePlayButton();
  });
  photoWall.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse') return;
    hovering = true;
    schedulePhoto();
  });
  photoWall.addEventListener('pointerleave', () => {
    hovering = false;
    schedulePhoto();
  });
  new IntersectionObserver(([entry]) => {
    inView = entry.intersectionRatio >= .25;
    schedulePhoto();
  }, {threshold: .25}).observe(stage);
  document.addEventListener('visibilitychange', schedulePhoto);
  motion.addEventListener('change', () => {
    paused = motion.matches;
    updatePlayButton();
  });
  updatePlayButton();
}

const lightbox = document.querySelector('#lightbox');
if (lightbox) {
  const lightboxImage = document.querySelector('#lightbox-image');
  let imageTrigger;
  document.addEventListener('click', event => {
    const button = event.target.closest('button[data-sheet]');
    if (!button) return;
    const caption = button.dataset.caption || button.querySelector('img').alt;
    imageTrigger = button;
    lightbox.dataset.openSheet = button.dataset.sheet;
    document.querySelector('#lightbox-title').textContent = caption;
    lightboxImage.alt = caption;
    lightboxImage.src = imagePath(button.dataset.sheet);
    lightbox.showModal();
  });
  lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => imageTrigger?.focus({preventScroll: true}));
}

const awards = document.querySelector('#award-dialog');
if (awards) {
  const trigger = document.querySelector('[aria-controls="award-dialog"]');
  const choices = [...awards.querySelectorAll('[data-award]')];
  trigger.addEventListener('click', () => awards.showModal());
  choices.forEach(choice => choice.addEventListener('click', () => {
    for (const button of choices) {
      const active = button === choice;
      button.setAttribute('aria-pressed', String(active));
      document.getElementById(button.getAttribute('aria-controls')).hidden = !active;
    }
  }));
  awards.querySelector('.award-close').addEventListener('click', () => awards.close());
  awards.addEventListener('click', event => {
    if (event.target === awards) awards.close();
  });
  awards.addEventListener('close', () => trigger.focus({preventScroll: true}));
}
