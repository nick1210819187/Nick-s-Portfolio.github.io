(() => {
  const routes = new Set(['kit-overview','filter-card','current-alarm','hardware-resource','card-choice','graphic-table','text-model','tree-table','complex-table','virtual-machine-detail','secondary-page','anchor-page','advanced-config','spec-components','spec-foundations','spec-overview','spec-navigation','spec-breadcrumb','spec-pagination','spec-form-layout','spec-empty-state','spec-buttons','spec-modal-position','spec-feedback','spec-page-layout','spec-data-visualization']);
  const origin = location.origin;
  let queued = false, revision = 0;
  const currentRoute = () => location.hash.split('/').at(-1)?.split('?')[0];
  function visible(element) {
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 && rect.top < innerHeight && rect.left < innerWidth;
  }
  function decodeImage(src) {
    const image = new Image();
    image.src = src;
    return image.decode();
  }
  function failed() {
    revision++;
    parent.postMessage({type: 'portfolio-demo-error', kind: 'demokit'}, origin);
  }
  async function notify() {
    queued = false;
    const route = currentRoute();
    const content = document.querySelector('.xd-spec-host.is-open') || document.querySelector('.workspace');
    if (!routes.has(route) || !content?.textContent.trim()) return;
    const current = ++revision;
    // Wait for the current view's artwork, including CSS backgrounds, before replacing its complete poster.
    const images = new Set();
    content.querySelectorAll('*').forEach(element => {
      if (!visible(element)) return;
      if (element instanceof HTMLImageElement && (element.currentSrc || element.src)) images.add(element.currentSrc || element.src);
      for (const match of getComputedStyle(element).backgroundImage.matchAll(/url\(["']?([^"')]+)["']?\)/g)) images.add(match[1]);
    });
    try {
      await Promise.all([...images].map(decodeImage));
      if (current !== revision || route !== currentRoute()) return;
      parent.postMessage({type: 'portfolio-demokit-state', route}, origin);
      watcher.disconnect();
    } catch {
      if (current === revision) failed();
    }
  }
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => requestAnimationFrame(notify));
  }
  const watcher = new MutationObserver(schedule);
  watcher.observe(document.body, {childList: true, subtree: true});
  addEventListener('hashchange', schedule);
  addEventListener('load', schedule);
  addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement && visible(event.target)) failed();
  }, true);
  addEventListener('message', event => {
    if (event.origin !== origin || event.source !== parent) return;
    if (event.data?.type === 'portfolio-demokit-route' && routes.has(event.data.route)) {
      location.hash = '#kit/' + event.data.route;
      schedule();
    }
  });
  schedule();
})();
