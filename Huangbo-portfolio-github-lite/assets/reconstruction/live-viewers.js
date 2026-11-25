(() => {
  const origin = location.origin;
  const saveData = navigator.connection?.saveData;
  const manual = saveData || matchMedia('(max-width: 700px)').matches;

  function viewer(stage, options) {
    const poster = stage.querySelector('img');
    const status = document.createElement('span');
    status.className = 'native-status';
    status.setAttribute('role', 'status');
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'native-retry';
    retry.textContent = '重新加载';
    retry.hidden = true;
    stage.append(status, retry);
    let frame, timer, ready = false, visible = false, near = false;
    let route = options.route || '';
    let label = options.label;

    function resize() {
      if (!frame) return;
      const width = stage.clientWidth;
      const nativeWidth = options.nativeWidth || width;
      const scale = width / nativeWidth;
      frame.style.width = nativeWidth + 'px';
      frame.style.height = stage.clientHeight / scale + 'px';
      frame.style.transform = `scale(${scale})`;
    }
    function activity() {
      frame?.contentWindow?.postMessage({type: 'portfolio-visibility', active: visible && !document.hidden}, origin);
    }
    function loaded() {
      clearTimeout(timer);
      ready = true;
      stage.dataset.nativeReady = 'true';
      stage.setAttribute('aria-busy', 'false');
      poster?.setAttribute('aria-hidden', 'true');
      status.textContent = '';
      retry.hidden = true;
      activity();
    }
    function waiting() {
      ready = false;
      stage.dataset.nativeReady = 'false';
      stage.setAttribute('aria-busy', 'true');
      poster?.removeAttribute('aria-hidden');
      status.textContent = options.kind === 'scene' ? '正在载入 3D 交互…' : '正在载入真实页面…';
      retry.hidden = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (ready) return;
        status.textContent = '加载较慢，可继续浏览或重试';
        retry.hidden = false;
      }, 20000);
    }
    function start() {
      if (frame) return;
      waiting();
      frame = document.createElement('iframe');
      frame.className = 'native-frame';
      frame.title = label;
      frame.setAttribute('data-liquid-ignore', '');
      frame.setAttribute('allow', 'fullscreen');
      frame.addEventListener('load', activity);
      stage.append(frame);
      resize();
      frame.src = options.url + (route ? '#kit/' + route : '');
    }
    retry.addEventListener('click', () => {
      frame?.remove(); frame = null;
      start();
    });
    const loadObserver = new IntersectionObserver(entries => {
      near = entries[0].isIntersecting;
      if (!near || frame) return;
      if (manual) {
        status.textContent = '';
        retry.textContent = options.kind === 'scene' ? '点击体验 3D' : '点击体验真实页面';
        retry.hidden = false;
      } else start();
    }, {rootMargin: '160px 0px'});
    loadObserver.observe(stage);
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      activity();
    }).observe(stage);
    new ResizeObserver(resize).observe(stage);
    document.addEventListener('visibilitychange', activity);
    window.addEventListener('message', event => {
      if (!frame || event.origin !== origin || event.source !== frame.contentWindow) return;
      if (event.data?.type === 'portfolio-demo-error') {
        clearTimeout(timer);
        ready = false;
        stage.dataset.nativeReady = 'false';
        poster?.removeAttribute('aria-hidden');
        status.textContent = '交互暂未载入，已保留页面预览';
        stage.setAttribute('aria-busy', 'false');
        retry.hidden = false;
      } else if (options.kind === 'scene' && event.data?.type === 'portfolio-scene-ready') {
        loaded();
      } else if (options.kind === 'demokit' && event.data?.type === 'portfolio-demokit-state' && event.data.route === route) {
        loaded();
      }
    });
    const api = {
      navigate(next, nextLabel) {
        if (next === route) return;
        route = next; label = nextLabel;
        if (frame) {
          waiting(); frame.title = label;
          frame.contentWindow.postMessage({type: 'portfolio-demokit-route', route}, origin);
        } else if (near && !manual) start();
      }
    };
    return api;
  }

  const scene = document.querySelector('.live-home-view');
  if (scene) viewer(scene, {kind: 'scene', url: 'assets/reconstruction/scene/index.html', label: 'FusionOne Center 真实 3D 首页，点击服务器展开硬件'});
  const templates = document.querySelector('.framework-page-canvas');
  if (templates) {
    const library = viewer(templates, {kind: 'demokit', nativeWidth: 1640, url: 'assets/reconstruction/demokit/index.html?v=3', route: document.querySelector('[data-library-template][aria-selected="true"]').dataset.libraryTemplate, label: 'FusionOne Center 真实页面模板'});
    document.addEventListener('portfolio-template-change', event => library.navigate(event.detail.route, event.detail.label));
  }
  const specs = document.getElementById('p4-native-stage');
  if (specs) {
    const nativeSpecs = viewer(specs, {kind: 'demokit', nativeWidth: 1280, url: 'assets/reconstruction/demokit/index.html?v=3', route: 'spec-foundations', label: '真实 DemoKit 组件与规范'});
    const image = document.getElementById('p4-native-static');
    const buttons = [...document.querySelectorAll('[data-p4-mode]')];
    function select(button, focus = false) {
      const mode = button.dataset.p4Mode;
      buttons.forEach(item => {
        const selected = item === button;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      specs.setAttribute('aria-labelledby', button.id);
      image.src = image.dataset[mode];
      nativeSpecs.navigate(mode === 'components' ? 'spec-components' : 'spec-foundations', '真实 DemoKit · ' + button.textContent.trim());
      if (focus) button.focus();
    }
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => select(button));
      button.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        select(buttons[event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1 - index], true);
      });
    });
  }
})();
