(() => {
  window.__xdPortfolioActive = true;
  const origin = location.origin;
  addEventListener('message', event => {
    if (event.source !== parent || event.origin !== origin || event.data?.type !== 'portfolio-visibility') return;
    window.__xdPortfolioActive = event.data.active === true;
    dispatchEvent(new Event('portfolio-visibility'));
  });
  let sent = false;
  const ready = () => {
    if (sent || !document.querySelector('#loading.done')) return;
    sent = true;
    watcher.disconnect();
    parent.postMessage({type: 'portfolio-scene-ready'}, origin);
  };
  const watcher = new MutationObserver(ready);
  watcher.observe(document.body, {subtree: true, attributes: true, attributeFilter: ['class']});
  ready();
})();
