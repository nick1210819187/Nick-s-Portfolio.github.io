(() => {
 const sheet=document.getElementById('templates');
 const frame=sheet.querySelector('#p4-native-frame'),stage=sheet.querySelector('.p4-native-stage');
 const paused=document.documentElement.dataset.demoMode==='paused',staticImage=sheet.querySelector('#p4-native-static');
 const buttons=[...sheet.querySelectorAll('[data-p4-mode]')];
 let started=false,ready=false,mode='specs',specRoute='spec-foundations';
 const sendRoute=()=>{if(ready)frame.contentWindow.postMessage({type:'portfolio-demokit-route',route:mode==='components'?'spec-components':specRoute},location.origin)};
 function resize(){if(paused)return;const w=stage.clientWidth,h=stage.clientHeight,nativeWidth=innerWidth<=650?w:Math.max(1280,w),scale=w/nativeWidth;frame.style.width=nativeWidth+'px';frame.style.height=(h/scale)+'px';frame.style.transform=`scale(${scale})`}
 function select(next,focus=false){mode=next;buttons.forEach(button=>{const selected=button.dataset.p4Mode===mode;button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;if(selected&&focus)button.focus()});stage.setAttribute('aria-labelledby','p4-tab-'+mode);if(paused){staticImage.src=staticImage.dataset[mode];staticImage.alt=mode==='components'?'真实 DemoKit 组件页面的静态预览':'真实 DemoKit 设计规范的静态预览';stage.scrollTop=0;return}start();sendRoute()}
 function start(){if(paused||started)return;started=true;frame.src=frame.dataset.src;resize()}
 buttons.forEach((button,i)=>{button.addEventListener('click',()=>select(button.dataset.p4Mode));button.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();select(buttons[event.key==='Home'?0:event.key==='End'?1:1-i].dataset.p4Mode,true)}})});
 if(!paused)new ResizeObserver(resize).observe(stage);
 window.addEventListener('message',event=>{if(paused)return;if(event.origin!==location.origin||event.source!==frame.contentWindow||event.data?.type!=='portfolio-demokit-state')return;const route=event.data.route;if(!route)return;if(!ready){ready=true;stage.setAttribute('aria-busy','false');sendRoute()}if(route!=='spec-components')specRoute=route;});
 // The native module is loaded only as the reader approaches this sheet.
 if(!paused){const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){start();observer.disconnect()}},{rootMargin:'300px'});observer.observe(sheet)}
 if(location.hash==='#templates'){const align=()=>sheet.scrollIntoView({behavior:'instant',block:'start'});document.fonts?.ready.then(align);window.addEventListener('load',align,{once:true})}
 const thumb=document.querySelectorAll('#thumbs .thumb')[3];if(thumb)thumb.innerHTML='<span class="p4-dock-preview" aria-hidden="true" style="display:grid;grid-template-columns:1fr 1fr 2fr;gap:3px;padding:5px;width:100%;height:100%;background:#faf9f6"><i style="border:1px solid #dadfdf;background:repeating-linear-gradient(#e6ebf1 0 3px,transparent 3px 8px)"></i><i style="border:1px solid #dadfdf;background:repeating-linear-gradient(#dae2ef 0 2px,transparent 2px 6px)"></i><i style="border:1px solid #dadfdf;background:linear-gradient(#e5eaf1 7px,transparent 7px),repeating-linear-gradient(#f0f2f5 0 3px,white 3px 8px)"></i></span>';
})();
