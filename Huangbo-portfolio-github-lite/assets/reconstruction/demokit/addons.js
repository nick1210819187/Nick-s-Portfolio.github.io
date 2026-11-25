
(()=>{const route='#kit/card-choice-four';const images=['media/a331b04a3d947dcc96.webp','media/f6531a5560fea8dd11.webp','media/033426535e0b630196.webp','media/4e8dcbe59415819aea.webp'];const cards=[['导入虚拟机模板','从本地文件或共享目录导入模板'],['虚拟机克隆为模板','克隆已有虚拟机并保存为模板'],['克隆虚拟机模板','从已有模板创建模板副本'],['虚拟机转换模板','将已停止的虚拟机转换为模板']];function page(){return `<section class="xd-four-card-page"><header class="xd-four-head"><button class="xd-four-back">‹</button><span>创建虚拟机模板</span></header><div class="xd-four-steps">${['选择创建方式','基本配置','模板配置','确认信息'].map((x,i)=>`<div class="xd-four-step ${i===0?'active':''}"><i>${i+1}</i><span>${x}</span></div>`).join('')}</div><main class="xd-four-grid">${cards.map((c,i)=>`<article class="xd-four-card ${i===1?'selected':''}" data-index="${i}"><span class="xd-four-radio"></span><div class="xd-four-image-wrap"><img class="xd-four-image" src="${images[i]}" alt=""></div><h2>${c[0]}</h2><p>${c[1]}</p></article>`).join('')}</main><footer class="xd-four-footer"><button class="xd-four-btn">取消</button><button class="xd-four-btn primary">下一步</button></footer></section>`}function addNav(){const nav=document.querySelector('.secondary-nav');if(!nav||nav.querySelector('.xd-four-nav'))return;const two=[...nav.querySelectorAll('button')].find(e=>e.textContent.trim()==='卡片选择（两卡）');if(!two)return;const item=two.cloneNode(true);item.classList.remove('active');item.classList.add('xd-four-nav');item.textContent='卡片选择（四卡）';item.onclick=()=>location.hash=route;two.after(item)}function render(){addNav();if(location.hash!==route)return;const inner=document.querySelector('.workspace-inner');if(!inner)return;inner.innerHTML=page();inner.querySelectorAll('.xd-four-card').forEach(card=>card.onclick=()=>{inner.querySelectorAll('.xd-four-card').forEach(x=>x.classList.remove('selected'));card.classList.add('selected')});inner.querySelector('.xd-four-back').onclick=()=>location.hash='#kit/card-choice-two'}new MutationObserver(()=>{addNav();if(location.hash===route&&!document.querySelector('.xd-four-card-page'))render()}).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(render));setTimeout(render)})();

;

(()=>{let host;window.__xdResponsiveHost=()=>{if(!host){host=document.createElement('div');host.id='xd-responsive-island';Object.assign(host.style,{position:'fixed',zIndex:'20',overflow:'auto',background:'#f5f7fa'});document.body.append(host)}return host};
function sync(){const active=location.hash==='#kit/responsive-home-demo';const el=window.__xdResponsiveHost();el.hidden=!active;if(active){const box=document.querySelector('.workspace')?.getBoundingClientRect();if(box)Object.assign(el.style,{left:box.left+'px',top:box.top+'px',width:box.width+'px',height:box.height+'px'})}}
addEventListener('hashchange',()=>requestAnimationFrame(sync));addEventListener('resize',sync);new MutationObserver(()=>requestAnimationFrame(sync)).observe(document.body,{childList:true,subtree:true});sync()})();

;

(()=>{const route='#kit/responsive-home-demo';const chart=fill=>`<div class="xd-chart"><svg viewBox="0 0 600 180" preserveAspectRatio="none">${fill?'<path class="fill" d="M0 145 C80 120 110 140 170 90 C230 45 270 120 330 78 C390 38 430 92 490 52 C540 20 570 34 600 18 L600 180 L0 180Z"/>':''}<path d="M0 145 C80 120 110 140 170 90 C230 45 270 120 330 78 C390 38 430 92 490 52 C540 20 570 34 600 18"/></svg></div>`;const page=`<section class="xd-responsive-page"><main class="xd-three-row-grid">
<div class="xd-home-row"><article class="xd-module xd-span3"><div class="xd-module-head">系统健康评分<em class="xd-height-tag">0.5 高度</em></div><div class="xd-mini"><strong>95%</strong><span>运行正常</span></div></article><article class="xd-module xd-span3"><div class="xd-module-head">资产概览<em class="xd-height-tag">0.5 高度</em></div><div class="xd-mini"><strong>2,018</strong><span>模型与数据资产</span></div></article><article class="xd-module xd-span3"><div class="xd-module-head">角色配额概览<em class="xd-height-tag">0.5 高度</em></div><div class="xd-mini"><strong>72%</strong><span>剩余 28%</span></div></article><article class="xd-module xd-span3"><div class="xd-module-head">今日调用量<em class="xd-height-tag">0.5 高度</em></div><div class="xd-mini"><strong>68.4K</strong><span>成功率 99.87%</span></div></article></div>
<div class="xd-home-row"><article class="xd-module xd-span8"><div class="xd-module-head">资源使用率趋势<em class="xd-height-tag">1 高度 · 弹性</em></div>${chart(true)}</article><article class="xd-module xd-span4"><div class="xd-module-head">GPU 告警概览<em class="xd-height-tag">1 高度</em></div><div class="xd-stat-grid"><div class="xd-stat"><b>2</b><span>紧急</span></div><div class="xd-stat"><b>4</b><span>警告</span></div><div class="xd-stat"><b>7</b><span>提示</span></div></div></article></div>
<div class="xd-home-row"><article class="xd-module xd-span8"><div class="xd-module-head">推理性能趋势<em class="xd-height-tag">1 高度 · 弹性</em></div>${chart(false)}</article><article class="xd-module xd-span4"><div class="xd-module-head">我的待办<em class="xd-height-tag">1 高度</em></div><div class="xd-list"><div class="xd-row"><span>模型服务发布审批</span><span>今天 10:30</span></div><div class="xd-row"><span>资源扩容申请</span><span>今天 14:00</span></div><div class="xd-row"><span>异常实例处理</span><span>明天 09:00</span></div><div class="xd-row"><span>安全策略确认</span><span>明天 16:30</span></div></div></article></div>
</main></section>`;function addNav(){const nav=document.querySelector('.secondary-nav');if(!nav||nav.querySelector('.xd-demo-nav-item'))return;const custom=[...nav.querySelectorAll('button')].find(e=>e.textContent.trim()==='自定义首页');if(!custom)return;const item=custom.cloneNode(true);item.classList.remove('active');item.classList.add('xd-demo-nav-item');item.textContent='响应式首页 Demo';item.onclick=()=>location.hash=route;custom.after(item)}function render(){addNav();const shell=document.querySelector('.app-shell'),workspace=document.querySelector('.workspace');if(!shell||!workspace)return;const active=location.hash===route;document.querySelectorAll('.xd-demo-nav-item').forEach(e=>e.classList.toggle('active',active));if(!active)return;const inner=window.__xdResponsiveHost();if(!inner.querySelector('.xd-responsive-page'))inner.innerHTML=page}new MutationObserver(()=>{addNav();if(location.hash===route&&!document.querySelector('.xd-responsive-page'))render()}).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(render));setTimeout(render)})();

;

(()=>{const route='#kit/card-choice-four';function sync(){const item=document.querySelector('.xd-four-nav');if(!item)return;item.className='subnav-child xd-four-nav'+(location.hash===route?' active':'')}new MutationObserver(sync).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(sync,0));setTimeout(sync,0)})();

;
setTimeout(function(){window.dispatchEvent(new HashChangeEvent("hashchange"))},600)
;

(()=>{const home='#kit/responsive-home-demo';const gallery='#model/model-gallery';const empty=t=>`<div class="xd-real-empty">${t}</div>`;const groups=['GPU算力','GPU显存','NPU算力','NPU显存'];const tenants=[['local','data1','research','prod-a','dev'],['local','train-a','train-b'],['local','npu-prod','inference'],['local','npu-prod']];function ranks(i){return tenants[i].slice(0,5).map((x,n)=>`<div class="xd-quota-rank"><span class="rank">${n+1}</span><span class="tenant">${x}</span><span class="usage">${Math.max(0,128-n*21)}</span><span class="rate">${Math.max(0,26-n*4)}%</span></div>`).join('')}function homePage(){return `<section class="xd-responsive-page xd-real-home xd-equal-rows xd-reference-home xd-reference-home-v2 xd-reference-home-v3"><main class="xd-reference-grid">
<div class="xd-reference-row"><article class="xd-real-card xd-ref-span9"><header class="xd-real-head"><span>配额使用率TOP5</span><div class="xd-real-actions"><button class="xd-real-select">组织⌄</button><button class="xd-real-select">按使用量⌄</button></div></header><div class="xd-real-body xd-quota-grid">${groups.map((x,i)=>`<div class="xd-quota-item"><b>${x}</b>${ranks(i)}</div>`).join('')}</div></article><div class="xd-reference-side"><article class="xd-real-card"><header class="xd-real-head"><span>个人信息</span></header><div class="xd-real-body xd-real-profile"><div class="xd-real-avatar">U</div><div><b>slq001</b><span>组织：data1</span><span>上次登录：2026-10-15 20:26</span></div></div></article><article class="xd-real-card"><header class="xd-real-head"><span>最近访问</span></header><div class="xd-real-body">${empty('暂无访问')}</div></article></div></div>
<div class="xd-reference-row"><article class="xd-real-card xd-ref-span6"><header class="xd-real-head"><span>流程审批</span><span class="xd-real-actions">查看更多 ›</span></header><div class="xd-real-tabs"><span>待我审批</span><span>我的申请</span></div><div class="xd-real-body">${empty('暂无数据')}</div></article><article class="xd-real-card xd-ref-span3"><header class="xd-real-head"><span>当前告警</span><span class="xd-real-actions">查看全部 ›</span></header><div class="xd-alarm-tabs"><span>全部（0）</span><span>紧急（0）</span><span>警告（0）</span><span>提示（0）</span></div><div class="xd-real-body">${empty('暂无数据')}</div></article><div class="xd-reference-side"><article class="xd-real-card"><header class="xd-real-head"><span>我的收藏</span></header><div class="xd-real-body">${empty('暂无收藏')}</div></article><article class="xd-real-card"><header class="xd-real-head"><span>组织资源</span></header><div class="xd-real-body xd-real-metrics"><div class="xd-real-metric"><span>组织</span><b>0</b></div><div class="xd-real-metric"><span>用户</span><b>6</b></div></div></article></div></div>
<div class="xd-reference-row"><article class="xd-real-card xd-reference-trend"><header class="xd-real-head"><span>资源使用趋势</span><div class="xd-real-actions"><button class="xd-real-select">近 7 天⌄</button></div></header><div class="xd-real-body xd-trend-wrap"><div class="xd-trend-chart"><svg viewBox="0 0 800 160" preserveAspectRatio="none"><path d="M0 125 C90 118 120 72 205 88 S350 132 430 78 S570 43 650 66 S745 34 800 50" fill="none" stroke="#155EEF" stroke-width="3"/><path d="M0 142 C95 135 165 110 245 116 S390 92 465 105 S610 77 690 93 S760 69 800 74" fill="none" stroke="#15B79E" stroke-width="3"/></svg></div><div class="xd-trend-legend"><div><i class="xd-trend-dot" style="background:#155EEF"></i><span>算力使用率</span><b>26%</b></div><div><i class="xd-trend-dot" style="background:#15B79E"></i><span>显存使用率</span><b>18%</b></div></div></div></article><article class="xd-real-card xd-reference-overview"><header class="xd-real-head"><span>资源概览</span></header><div class="xd-real-tabs"><span>全部</span><span>人工智能</span><span>计算</span><span>网络</span><span>存储</span></div><div class="xd-real-body xd-real-metrics"><div class="xd-real-metric"><span>物理机</span><b>0</b></div><div class="xd-real-metric"><span>工作流</span><b>0</b></div><div class="xd-real-metric"><span>虚拟机</span><b>0</b></div><div class="xd-real-metric"><span>容器集群</span><b>1</b></div><div class="xd-real-metric"><span>虚拟私有云</span><b>0</b></div><div class="xd-real-metric"><span>磁盘</span><b>0</b></div></div></article></div>
</main></section>`}function renderHome(){if(location.hash!==home)return;const inner=window.__xdResponsiveHost();if(!inner)return;const old=inner.querySelector('.xd-reference-home');if(!old||!old.classList.contains('xd-reference-home-v3'))inner.innerHTML=homePage()}function enhanceIcons(){if(location.hash!==gallery)return;document.querySelectorAll('*').forEach(el=>{const t=(el.textContent||'').trim();if(/^[DQKM]$/.test(t)&&el.children.length===0){const r=el.getBoundingClientRect();if(r.width>=24&&r.width<=70&&r.height>=24&&r.height<=70){el.classList.add('xd-model-letter-art');el.dataset.letter=t}}})}function run(){renderHome();enhanceIcons()}new MutationObserver(()=>setTimeout(run,0)).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(run,60));setTimeout(run,80)})();

;

(()=>{const route='#model/model-gallery';function apply(){if(location.hash!==route)return;document.querySelectorAll('.xd-model-letter-art[data-letter]').forEach(el=>el.classList.add('xd-model-letter-image'))}new MutationObserver(()=>setTimeout(apply,0)).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(apply,80));setTimeout(apply,80)})();

;

(()=>{const gallery='#model/model-gallery';const defs=[['DeepSeek','D','avatar-d'],['Qwen','Q','avatar-q'],['Kimi','K','avatar-k'],['MiniMax','M','avatar-m']];const exact=(root,text)=>[...root.querySelectorAll('*')].find(el=>el.children.length===0&&(el.textContent||'').trim()===text);function cards(){if(location.hash!==gallery)return;defs.forEach(([name,letter,cls])=>{document.querySelectorAll('*').forEach(title=>{if(title.children.length||!(title.textContent||'').trim().startsWith(name))return;let card=title;for(let i=0;i<6&&card;i++,card=card.parentElement){if((card.textContent||'').includes('更新时间')||(card.textContent||'').includes('版本数量'))break}if(!card)return;const avatar=[...card.querySelectorAll('*')].find(el=>el.children.length===0&&(el.textContent||'').trim()===letter&&el.getBoundingClientRect().width<=80);if(avatar){avatar.classList.remove('xd-model-letter-art','xd-model-letter-image');avatar.classList.add('xd-final-model-avatar',cls);avatar.dataset.letter=letter}})})}function nav(){if(document.querySelector('.xd-example-model-gallery-entry'))return;const seed=exact(document,'组件 DemoKit')||exact(document,'弹窗与抽屉');if(!seed)return;const item=seed.closest('a,button,[role="menuitem"]')||seed.parentElement;if(!item||!item.parentElement)return;const clone=item.cloneNode(true);clone.classList.add('xd-example-model-gallery-entry');const leaf=[...clone.querySelectorAll('*')].find(el=>el.children.length===0&&(el.textContent||'').trim());if(leaf)leaf.textContent='模型广场';else clone.textContent='模型广场';clone.removeAttribute('id');clone.onclick=e=>{e.preventDefault();e.stopPropagation();location.hash=gallery};item.parentElement.appendChild(clone)}function run(){cards()}new MutationObserver(()=>setTimeout(run,0)).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(run,80));setTimeout(run,100)})();

;

(()=>{const gallery='#model/model-gallery';const classes=['avatar-d','avatar-q','avatar-k','avatar-m'];const exact=t=>[...document.querySelectorAll('*')].find(el=>el.children.length===0&&(el.textContent||'').trim()===t);function fill(){if(location.hash!==gallery)return;document.querySelectorAll('.model-card.xd-final-avatar-host').forEach(host=>{host.classList.remove('xd-final-avatar-host',...classes);delete host.dataset.letter});document.querySelectorAll('.xd-final-model-avatar').forEach(avatar=>{const cls=classes.find(c=>avatar.classList.contains(c));const host=avatar.closest('.ant-avatar');if(host&&cls){host.classList.add('xd-final-avatar-host',cls);host.dataset.letter=avatar.dataset.letter||''}})}function nav(){const entry=document.querySelector('.xd-example-model-gallery-entry');const seed=exact('文本模型');if(!entry||!seed)return;const target=seed.closest('a,button,[role="menuitem"]')||seed.parentElement;if(!target||!target.parentElement)return;if(entry.parentElement!==target.parentElement)target.parentElement.insertBefore(entry,target.nextSibling);const leaves=[...entry.querySelectorAll('*')].filter(el=>el.children.length===0&&(el.textContent||'').trim());(leaves[0]||entry).textContent='模型广场';entry.onclick=e=>{e.preventDefault();e.stopPropagation();location.hash=gallery;/* route transition is handled by the in-page router */}}function run(){fill()}new MutationObserver(()=>setTimeout(run,0)).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(run,100));setTimeout(run,120)})();

;

(()=>{const labels={
'secondary-page':'二级页面','anchor-page':'锚点页面','custom-home':'自定义首页','responsive-home-demo':'响应式首页 Demo','current-alarm':'当前告警','kit-overview':'概览','card-choice':'卡片选择','card-choice-plain':'卡片选择（无切图）','card-choice-two':'卡片选择（两卡）','card-choice-four':'卡片选择（四卡）','advanced-config':'高级配置','text-model':'文本模型','filter-card':'左筛右卡','fke-complex-page':'FKE复杂页面','hardware-resource':'硬件资源','component-library':'组件 DemoKit','modal-drawer':'弹窗与抽屉','exception-status':'异常状态','data-visualization':'数据可视化','model-gallery':'模型广场'};
let syncing=false;function sync(){if(syncing)return;const nav=document.querySelector('.secondary-nav');if(!nav)return;syncing=true;const parts=location.hash.replace(/^#\/?/,'').split('/');const key=(parts[1]||'').split('?')[0];const wanted=labels[key];if(!wanted){syncing=false;return}const buttons=[...nav.querySelectorAll('button,[role="menuitem"]')];const matches=buttons.filter(button=>(button.textContent||'').replace(/更新/g,'').trim()===wanted);const target=matches.at(-1)||null;buttons.forEach(button=>{const match=button===target;button.classList.toggle('active',match);button.classList.toggle('selected',match);button.classList.toggle('ant-menu-item-selected',match);if(match)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current')});syncing=false}
function repairGalleryEntry(){const entry=document.querySelector('.xd-example-model-gallery-entry');if(!entry)return;entry.classList.remove('active','selected','ant-menu-item-selected');entry.removeAttribute('aria-current');entry.onclick=e=>{e.preventDefault();e.stopPropagation();location.hash='#model/model-gallery'}}
function run(){repairGalleryEntry();sync()}new MutationObserver(()=>setTimeout(run,0)).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(run,40));setTimeout(run,120)})();

;

(()=>{const routes=['#model/model-gallery','#kit/filter-card'];const defs=[['DeepSeek','D','avatar-d'],['Qwen','Q','avatar-q'],['Kimi','K','avatar-k'],['MiniMax','M','avatar-m']];function active(){return routes.includes(location.hash.split('?')[0])}function apply(){if(!active())return;defs.forEach(([name,letter,cls])=>{document.querySelectorAll('*').forEach(title=>{if(title.children.length||!(title.textContent||'').trim().startsWith(name))return;let card=title;for(let i=0;i<6&&card;i++,card=card.parentElement){if((card.textContent||'').includes('更新时间')||(card.textContent||'').includes('版本数量'))break}if(!card)return;const avatar=[...card.querySelectorAll('*')].find(el=>el.children.length===0&&(el.textContent||'').trim()===letter&&el.getBoundingClientRect().width<=80);if(!avatar)return;avatar.classList.remove('xd-model-letter-art','xd-model-letter-image');avatar.classList.add('xd-final-model-avatar',cls);avatar.dataset.letter=letter;let host=avatar,p=avatar.parentElement;while(p){const r=p.getBoundingClientRect();if(r.width>72||r.height>72)break;host=p;p=p.parentElement}if(host!==avatar){host.classList.add('xd-final-avatar-host',cls);host.dataset.letter=letter}})})}new MutationObserver(()=>setTimeout(apply,0)).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(apply,80));setTimeout(apply,100)})();

;

(()=>{let overlay=null;function sync(){const active=document.body.classList.contains('xd-empty-native'),box=document.querySelector('.ant-table-container');if(!active||!box){if(overlay){overlay.remove();overlay=null}return}if(!overlay){overlay=document.createElement('div');overlay.className='xd-native-table-empty';overlay.innerHTML='<img src="media/517e7b0f588ff84e9e.webp" alt="暂无数据"><strong>暂无数据</strong><span>当前条件下暂无匹配记录</span>';document.body.appendChild(overlay)}const r=box.getBoundingClientRect(),head=box.querySelector('.ant-table-thead')?.getBoundingClientRect(),top=head?.bottom||r.top;overlay.style.left=r.left+'px';overlay.style.top=top+'px';overlay.style.width=r.width+'px';overlay.style.height=Math.max(240,r.bottom-top)+'px'}new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']});addEventListener('resize',sync);addEventListener('scroll',sync,true);setInterval(sync,160);sync()})();

;

(()=>{let last=location.hash;setInterval(()=>{if(location.hash===last)return;last=location.hash;dispatchEvent(new Event('hashchange'))},80)})();

;

(()=>{const empty=(t,d)=>`<div class="xd-native-empty-box"><img src="media/517e7b0f588ff84e9e.webp" alt="${t}"><strong>${t}</strong><span>${d}</span></div>`;const close=()=>document.querySelectorAll('.xd-native-mask,.xd-native-drawer,.xd-native-detail').forEach(e=>e.remove());function drawer(){close();window.__openXdExceptionDrawer?.()}function detail(){close();document.body.insertAdjacentHTML('beforeend',`<section class="xd-native-detail"><header class="xd-native-detail-head"><button class="xd-native-back" aria-label="返回">←</button><span>任务执行详情</span></header><main class="xd-native-detail-main">${empty('暂无执行数据','任务开始后，运行数据将在这里展示')}</main></section>`)}document.addEventListener('click',e=>{const hit=e.target.closest('.xd-label-record,.xd-label-detail,.xd-native-mask,.xd-native-close,.xd-native-back');if(!hit)return;e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();if(hit.matches('.xd-label-record'))drawer();else if(hit.matches('.xd-label-detail'))detail();else close()},true)})();

;

(()=>{function sync(){const head=document.querySelector('.xd-native-detail-head');if(!head||head.classList.contains('service-page-heading'))return;head.classList.add('service-page-heading');head.innerHTML='<div class="ant-space ant-space-horizontal ant-space-align-center"><div class="ant-space-item"><button aria-label="返回" type="button" class="xd-native-back ant-btn ant-btn-text ant-btn-color-default ant-btn-variant-text ant-btn-icon-only"><span class="ant-btn-icon"><span role="img" aria-label="arrow-left" class="anticon anticon-arrow-left"><svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.4L532.9 864c2.9 2.5 6.6 3.9 10.5 3.9h88.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span></span></button></div><div class="ant-space-item"><h3 class="ant-typography">任务执行详情</h3></div></div>'}new MutationObserver(sync).observe(document.body,{childList:true,subtree:true});sync()})();

;

(()=>{const route='#kit/modal-drawer';const rows=[['new-mentiered-test-23','i-00000082','1','mscna01'],['new-mentiered-test-24','i-00000084','1','mscna01'],['new-mentiered-test-20','i-00000080','1','mscna01'],['new-mentiered-test-21','i-00000081','1','mscna01'],['new-mentiered-test-12','i-00000092','1','mscna01'],['new-mentiered-test-11','i-00000095','1','mscna01'],['new-mentiered-test-12','i-00000097','1','mscna01']];
const close=()=>document.querySelector('.xd-table-dialog-mask')?.remove();
function body(q=''){const list=rows.filter(r=>r[0].toLowerCase().includes(q.toLowerCase()));if(!list.length)return `<div class="xd-table-dialog-empty"><img src="media/813c3b41d89c8390b1.webp" alt="无搜索结果"><strong>无搜索结果</strong></div>`;return `<div class="ant-table"><div class="ant-table-container"><div class="ant-table-content"><table><thead class="ant-table-thead"><tr><th></th><th>虚拟机名称</th><th>虚拟机ID</th><th>网卡数量</th><th>所属主机</th></tr></thead><tbody class="ant-table-tbody">${list.map((r,i)=>`<tr><td><button class="xd-table-expand ant-table-row-expand-icon" aria-label="展开${r[0]}" aria-expanded="false" data-row="${i}">›</button></td><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr><tr class="xd-table-expanded-row" data-child="${i}" hidden><td colspan="5">网卡：eth0　IP 地址：192.168.${i+10}.12　分布式交换机：dvs-prod-01</td></tr>`).join('')}</tbody></table></div></div></div>`}
function open(){close();document.body.insertAdjacentHTML('beforeend',`<div class="xd-table-dialog-mask"><section class="xd-table-dialog" role="dialog" aria-modal="true" aria-label="镜像源"><header class="xd-table-dialog-head"><div class="xd-table-dialog-title"><strong>镜像源</strong><span class="xd-table-dialog-subtitle">请选择虚拟机网卡（最多5个且属于同一分布式交换机）</span></div><button class="xd-table-dialog-close" aria-label="关闭">×</button></header><main class="xd-table-dialog-body"><div class="xd-table-dialog-toolbar"><div class="xd-table-dialog-actions" aria-label="表格操作区"></div><div class="xd-table-dialog-tools"><div class="ant-space-compact ant-input-search table-toolbar-search"><span class="ant-input-affix-wrapper ant-input-outlined ant-input-compact-item ant-input-compact-first-item"><input class="xd-table-search ant-input" type="search" placeholder="请输入虚拟机名称" aria-label="搜索虚拟机名称"></span><button type="button" class="ant-btn ant-btn-default ant-btn-icon-only ant-btn-compact-item ant-btn-compact-last-item ant-input-search-btn" aria-label="搜索"><span class="ant-btn-icon"><span role="img" aria-label="search" class="anticon anticon-search"><svg viewBox="64 64 896 896" focusable="false" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9S256.5 143.2 199.9 199.9C143.2 256.5 112 331.8 112 412s31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></span></span></button></div><button class="xd-table-refresh ant-btn ant-btn-default ant-btn-icon-only" title="刷新" aria-label="刷新"><span role="img" aria-label="reload" class="anticon anticon-reload"><svg viewBox="64 64 896 896" focusable="false" aria-hidden="true"><path d="M909.1 209.3l-58.8 58.8C797.8 169.5 694.8 102.4 576 96.2V160c101.7 6.5 188.4 68.5 230.3 156.3l-95.2-9.3 6.2 63.7 170.6 16.6 16.6-170.6-63.7-6.2-9.3 95.2A351.7 351.7 0 00576 96.2V160c154.6 8.8 280 136.4 280 294 0 164.9-133.1 298-298 298S260 618.9 260 454c0-91.2 41-172.8 105.6-227.5l-41.4-48.8C246.2 243.7 196 342.4 196 454c0 200.2 161.8 362 362 362s362-161.8 362-362c0-91.4-33.9-174.9-89.9-238.6l20.2-20.2 58.8 58.8V209.3z"></path></svg></span></button></div></div><div class="xd-table-dialog-table ant-table-wrapper">${body()}</div></main><footer class="xd-table-dialog-foot"><button class="xd-table-dialog-cancel ant-btn ant-btn-default">取消</button><button class="primary ant-btn ant-btn-primary">确定</button></footer></section></div>`)}
function install(){if(location.hash.split('?')[0]!==route)return;document.querySelector('.xd-table-modal-tab')?.remove();document.querySelector('.xd-table-modal-panel')?.remove();const grid=document.querySelector('#rc-tabs-0-panel-modal .overlay-demo-grid');if(!grid||grid.querySelector('.xd-table-modal-card'))return;const card=document.createElement('article');card.className='overlay-demo-item xd-table-modal-card';card.innerHTML='<div class="overlay-demo-copy"><div class="ant-space ant-space-horizontal ant-space-align-center" style="flex-wrap:wrap;gap:8px"><div class="ant-space-item"><span class="ant-typography"><strong>表格弹窗</strong></span></div><div class="ant-space-item"><span class="ant-tag">列表选择</span></div></div><div class="ant-typography">用于在有限范围内搜索并选择单条数据，提示信息保留在左侧，搜索固定在表格工具栏右侧。</div></div><button type="button" class="xd-table-modal-open ant-btn ant-btn-default"><span>打开示例</span></button>';grid.appendChild(card)}
document.addEventListener('click',e=>{const nativeTab=e.target.closest('[role="tab"]:not(.xd-table-modal-tab)');if(nativeTab){const host=nativeTab.closest('.ant-tabs');host?.querySelector('.xd-table-modal-panel')?.setAttribute('hidden','');host?.querySelector('.xd-table-modal-tab')?.setAttribute('aria-selected','false')}const expand=e.target.closest('.xd-table-expand');if(expand){const child=document.querySelector(`.xd-table-expanded-row[data-child="${expand.dataset.row}"]`),on=expand.getAttribute('aria-expanded')==='true';expand.setAttribute('aria-expanded',String(!on));if(child)child.hidden=on}if(e.target.closest('.xd-table-modal-open'))open();if(e.target.closest('.xd-table-dialog-close,.xd-table-dialog-cancel'))close();if(e.target.classList.contains('xd-table-dialog-mask'))close();if(e.target.closest('.xd-table-refresh')){const i=document.querySelector('.xd-table-search');if(i){i.value='';document.querySelector('.xd-table-dialog-table').innerHTML=body()}}});document.addEventListener('input',e=>{if(e.target.matches('.xd-table-search'))document.querySelector('.xd-table-dialog-table').innerHTML=body(e.target.value)});new MutationObserver(install).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(install,80));setTimeout(install,120)})();

;

(()=>{const assets=[[/无搜索|未找到|搜索结果/,'02-no-search-results.png'],[/无权限|暂无权限|禁止访问/,'03-no-permission.png'],[/网络|连接异常/,'04-network-error.png'],[/加载失败/,'05-load-failed.png'],[/操作失败|执行失败/,'06-operation-failed.png'],[/操作成功|执行成功/,'07-operation-success.png'],[/维护/,'08-system-maintenance.png']];function normalize(root=document){const nodes=[...(root.matches?.('.ant-empty')?[root]:[]),...(root.querySelectorAll?.('.ant-empty')||[])];nodes.forEach(empty=>{const text=(empty.textContent||'').replace(/\s+/g,' ').trim(),file=(assets.find(([re])=>re.test(text))||[])[1]||'01-empty-data.png',image=empty.querySelector('.ant-empty-image');if(image&&!image.querySelector(`img[src="${window.__xdAsset('empty-state-assets/'+file)}"]`))image.innerHTML=`<img src="${window.__xdAsset('empty-state-assets/'+file)}" alt="${file==='01-empty-data.png'?'暂无数据':'异常状态'}">`;const desc=empty.querySelector('.ant-empty-description'),heading=desc?.querySelector('h1,h2,h3,h4,h5');if(heading&&/页面预留/.test(heading.textContent||''))heading.textContent='暂无数据';else if(desc&&/页面预留/.test(desc.textContent||'')&&!desc.querySelector('button,a'))desc.textContent='暂无数据';const pageHeading=empty.closest('.empty-page')?.querySelector(':scope > h4.ant-typography');if(pageHeading&&/页面预留/.test(pageHeading.textContent||''))pageHeading.textContent='暂无数据';empty.classList.add('xd-standard-empty');empty.dataset.xdEmptyStandard='1'})}new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)normalize(n)}))).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(()=>normalize(),60));setInterval(()=>normalize(),300);normalize()})();

;

(()=>{const labels=[['.xd-label-select','打开空状态弹窗'],['.xd-label-record','查看记录'],['.xd-label-detail','进入二级页']];function sync(){labels.forEach(([selector,label])=>{const button=document.querySelector(selector);if(!button)return;button.querySelector('.ant-btn-icon')?.remove();let text=[...button.children].find(el=>!el.classList.contains('ant-btn-icon'));if(!text){text=document.createElement('span');button.appendChild(text)}if(text.textContent!==label)text.textContent=label})}new MutationObserver(sync).observe(document.body,{childList:true,subtree:true});setInterval(sync,300);sync()})();

;

(()=>{function sync(root=document){const elements=[...(root.nodeType===1?[root]:[]),...(root.querySelectorAll?.('*')||[])];elements.forEach(el=>['title','aria-label','data-title'].forEach(name=>{const value=el.getAttribute?.(name);if(value?.includes('Fusion Xplay'))el.setAttribute(name,value.replaceAll('Fusion Xplay','FusionXplay'))}));const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode())if(node.nodeValue?.includes('Fusion Xplay'))node.nodeValue=node.nodeValue.replaceAll('Fusion Xplay','FusionXplay')}new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)sync(n);else if(n.nodeType===3&&n.nodeValue?.includes('Fusion Xplay'))n.nodeValue=n.nodeValue.replaceAll('Fusion Xplay','FusionXplay')}))).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['title','aria-label','data-title']});setInterval(()=>sync(),500);sync()})();

;

(()=>{function ensure(){if(location.hash.split('?')[0]!=='#kit/modal-drawer')return;const grid=document.querySelector('#rc-tabs-0-panel-modal .overlay-demo-grid');if(!grid||grid.querySelector('.xd-table-modal-card'))return;const card=document.createElement('article');card.className='overlay-demo-item xd-table-modal-card';card.innerHTML='<div class="overlay-demo-copy"><div class="ant-space ant-space-horizontal ant-space-align-center" style="flex-wrap:wrap;gap:8px"><div class="ant-space-item"><span class="ant-typography"><strong>表格弹窗</strong></span></div><div class="ant-space-item"><span class="ant-tag">列表选择</span></div></div><div class="ant-typography">用于在有限范围内搜索并选择单条数据，提示信息保留在左侧，搜索固定在表格工具栏右侧。</div></div><button type="button" class="xd-table-modal-open ant-btn ant-btn-default"><span>打开示例</span></button>';grid.appendChild(card)}addEventListener('hashchange',()=>setTimeout(ensure,0));new MutationObserver(ensure).observe(document.body,{childList:true,subtree:true});setInterval(ensure,250);ensure()})();

;

(()=>{const route='#kit/component-library';function sync(root=document){if(location.hash.split('?')[0]!==route)return;const results=[...(root.matches?.('.ant-result')?[root]:[]),...(root.querySelectorAll?.('.ant-result')||[])];results.forEach(result=>{const icon=result.querySelector('.ant-result-icon');if(!icon)return;result.classList.add('xd-component-library-success');if(!icon.querySelector('img[data-xd-success-art]'))icon.innerHTML='<img data-xd-success-art src="media/b58f5023a68bac714a.webp" alt="操作成功">'})}new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{if(node.nodeType===1)sync(node)}))).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(()=>sync(),50));setInterval(()=>sync(),300);sync()})();

;

(()=>{const labels={'app-management':'应用管理','app-market':'应用广场','model-store':'模型仓','detail-page':'详情页','exception-status':'异常状态'};function routeKey(){return location.hash.split('?')[0].split('/').filter(Boolean).at(-1)||''}function pageTitle(){const key=routeKey();if(labels[key])return labels[key];const active=document.querySelector('.secondary-nav [aria-current="page"],.secondary-nav .active,.secondary-nav .ant-menu-item-selected');if(active){const clone=active.cloneNode(true);clone.querySelectorAll('.ant-tag,.ant-badge,.anticon,svg').forEach(node=>node.remove());const text=(clone.textContent||'').replace(/更新/g,'').replace(/\s+/g,' ').trim();if(text)return text}const primary=document.querySelector('.primary-nav [aria-current="page"],.primary-nav .active,.primary-nav .ant-menu-item-selected');if(primary){const text=(primary.textContent||'').replace(/更新/g,'').replace(/\s+/g,' ').trim();if(text)return text}return key.replace(/[-_]+/g,' ').replace(/\b\w/g,char=>char.toUpperCase())}function sync(){const workspace=document.querySelector('.workspace-inner');if(!workspace)return;const page=workspace.querySelector(':scope > .empty-page,:scope > .workspace-page > .empty-page');const hasHeading=!!workspace.querySelector(':scope > .page-heading,:scope > h1,:scope > h2,:scope > h3,:scope > .workspace-page > .page-heading,:scope > .workspace-page > h1,:scope > .workspace-page > h2,:scope > .workspace-page > h3');if(!page||hasHeading){workspace.classList.remove('xd-has-empty-page-title');workspace.removeAttribute('data-xd-page-title');return}workspace.dataset.xdPageTitle=pageTitle();workspace.classList.add('xd-has-empty-page-title')}new MutationObserver(()=>setTimeout(sync,0)).observe(document.body,{childList:true,subtree:true});addEventListener('hashchange',()=>setTimeout(sync,60));setInterval(sync,250);sync()})();

;
(()=>{function sync(){document.querySelectorAll(".audit-page").forEach(el=>el.classList.toggle("xd-exception-status-page",location.hash.split("?")[0].endsWith("/exception-status")))}new MutationObserver(sync).observe(document.body,{childList:true,subtree:true});addEventListener("hashchange",sync);sync()})();
;

(()=>{
  const route='#kit/exception-status';
  const states={
    '暂无数据':['暂无数据','01-empty-data.png'],
    '无搜索结果':['无搜索结果','02-no-search-results.png'],
    '无访问权限':['无访问权限','03-no-permission.png'],
    '网络异常':['网络异常','04-network-error.png'],
    '加载失败':['加载失败','05-load-failed.png'],
    '操作失败':['操作失败','06-operation-failed.png'],
    '操作成功':['操作成功','07-operation-success.png'],
    '系统维护':['系统维护','08-system-maintenance.png']
  };
  const current=()=>{
    const page=document.querySelector('.xd-exception-status-page');
    const label=(page?.querySelector('.ant-tabs-tab-active [role="tab"]')?.textContent||'暂无数据').trim();
    return states[label]||states['暂无数据'];
  };
  const empty=()=>{const [label,image]=current();return `<div class="xd-native-empty-box"><img src="${window.__xdAsset('empty-state-assets/'+image)}" alt="${label}"><strong>${label}</strong></div>`};
  window.__openXdExceptionDrawer=()=>{
    const React=window.__xdReact,jsx=window.__xdJsx;
    if(!React||!jsx||!window.__xdDrawer||!window.__xdCreateRoot)return;
    const hostId="xd-exception-antd-drawer-root";
    let host=document.getElementById(hostId);
    if(!host){host=document.createElement("div");host.id=hostId;document.body.append(host)}
    const [label,image]=current();
    const content=jsx.jsxs("div",{className:"xd-exception-drawer-empty",children:[jsx.jsx("img",{src:`${window.__xdAsset('empty-state-assets/'+image)}`,alt:label}),jsx.jsx("strong",{children:label})]});
    const render=open=>window.__xdCreateRoot(jsx.jsx(window.__xdProvider,{locale:window.__xdLocale,children:jsx.jsx(window.__xdDrawer,{title:"任务执行记录",size:"default",open,zIndex:1400,onClose:()=>render(false),children:content})}),host);
    render(true);
  };
  const clear=()=>document.querySelectorAll('.xd-exception-context-mask,.xd-native-mask,.xd-native-drawer,.xd-native-detail').forEach(node=>node.remove());
  function openModal(){clear();const [label]=current();document.body.insertAdjacentHTML('beforeend',`<div class="xd-exception-context-mask"><section class="xd-exception-context-dialog" role="dialog" aria-modal="true" aria-label="弹窗异常状态"><header class="xd-exception-context-head"><span>异常状态 · ${label}</span><button class="xd-exception-context-close" aria-label="关闭">×</button></header><main class="xd-exception-context-body">${empty()}</main></section></div>`)}
  function openDrawer(){clear();window.__openXdExceptionDrawer?.()}
  function openDetail(){clear();document.body.insertAdjacentHTML('beforeend',`<section class="xd-native-detail" role="region" aria-label="二级页面异常状态"><header class="xd-native-detail-head"><button class="xd-native-back" aria-label="返回">←</button><span>任务执行详情</span></header><main class="xd-native-detail-main">${empty()}</main></section>`)}
  function ensure(){
    if(location.hash.split('?')[0]!==route){document.querySelector('.xd-exception-context-actions')?.remove();clear();return}
    const page=document.querySelector('.xd-exception-status-page');
    const toolbar=page?.querySelector('.table-toolbar');
    if(!toolbar||page.querySelector('.xd-exception-context-actions'))return;
    const actions=document.createElement('div');actions.className='xd-exception-context-actions';
    actions.innerHTML='<button type="button" data-context="modal">弹窗状态</button><button type="button" data-context="drawer">抽屉状态</button><button type="button" data-context="detail">二级页面状态</button>';actions.querySelector('[data-context="drawer"]')?.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();window.__openXdExceptionDrawer?.()});
    const leftSlot=toolbar.querySelector('.table-toolbar-main');
    if(leftSlot)leftSlot.append(actions);else toolbar.prepend(actions);
  }
  document.addEventListener('click',event=>{
    const action=event.target.closest('[data-context]');
    if(action){event.preventDefault();event.stopPropagation();const type=action.dataset.context;if(type==='modal')openModal();if(type==='drawer')openDrawer();if(type==='detail')openDetail();return}
    if(event.target.closest('.xd-exception-context-close,.xd-native-close,.xd-native-back')||event.target.matches('.xd-exception-context-mask,.xd-native-mask'))clear();
  },true);
  new MutationObserver(ensure).observe(document.body,{childList:true,subtree:true});
  addEventListener('hashchange',()=>setTimeout(ensure,50));
  setInterval(ensure,300);ensure();
})();

;

(()=>{
  const routes=new Set(['#model/model-gallery','#kit/filter-card']);
  const selected=new Map();
  const selectedTypes=new Set();
  const advanced={category:new Set(),input:new Set(),output:new Set(),capability:new Set(),ability:new Set(),context:[0,1000]};
  const filterGroups=[
    ['模型分类','category',['语言模型','视觉模型','图像生成','视频生成','语音模型','向量模型','重排序模型']],
    ['输入','input',['文本','图像','音频','视频']],
    ['输出','output',['文本','图像','音频','视频']],
    ['模型能力','capability',['Function call','think','Tools','MoE','多模态','推理模型','量化','结构化输出','联网搜索','前缀续写','上下文缓存','批量推理','模型微调']],
    ['能力类型','ability',['全模态','视觉理解','文本生成','深度思考','图片生成','视频生成','3D生成','世界模型','语音识别','语音合成','多模态向量','文本向量','实时全模态','实时语音合成','实时语音识别','实时语音翻译','实时语音对话']]
  ];
  const abilityFamilies=[['多模态',['全模态']],['文本',['视觉理解','文本生成','深度思考']],['视觉',['图片生成','视频生成','3D生成','世界模型']],['语音',['语音识别','语音合成']],['向量',['多模态向量','文本向量']],['Realtime',['实时全模态','实时语音合成','实时语音识别','实时语音翻译','实时语音对话']]];
  const sourceIcons={
    category:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="M17.723 7.41a8 8 0 0 0-3.74-2.162m-3.971 0a8 8 0 0 0-3.789 2.216m-1.881 3.215A8 8 0 0 0 4 12.999c0 .738.1 1.453.287 2.132m1.96 3.428a8 8 0 0 0 3.759 2.19m4 0a8 8 0 0 0 3.747-2.186m1.962-3.43a8 8 0 0 0 .287-2.131c0-.764-.107-1.503-.307-2.203M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"></path></svg>',
    input:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="M12 11v8m-3-3 3 3 3-3M9 7h1m4 0h1m4 0h1M4 7h1"></path></svg>',
    output:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="M12 13V5m3 3-3-3-3 3m0 9h1m4 0h1m4 0h1M4 17h1"></path></svg>',
    context:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="M3 10h2m-2 4h2m5-11v2m4-2v2m7 5h-2m2 4h-2m-5 7v-2m-4 2v-2M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm4 3h6v6H9z"></path></svg>',
    capability:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="M6 12h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3m0 0a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h9M7 8v.01M7 16v.01M20 15l-2 3h3l-2 3"></path></svg>',
    ability:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="M6 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 0h4m4 0a2 2 0 0 0-4 0m4 0a2 2 0 0 1-4 0m4 0h4m0 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-3-5-2 3M9 7l2 3m0 4-2 3m4-3 2 3m-5 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8-14a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0"></path></svg>',
    text:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="M3 7V5h13v2m-6-2v14m2 0H8m7-6v-1h6v1m-3-1v7m-1-1h2"></path></svg>',
    image:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="M15 8h.01M3 16l5-5c.928-.893 2.072-.893 3 0l5 5m-2-2 1-1c.928-.893 2.072-.893 3 0l3 3M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></path></svg>',
    audio:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="M2 12h4m12 0h4m-4-7v14M14 9v6M10 5v14M6 9v6"></path></svg>',
    video:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="m15 10 4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14zM3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>',
    chevron:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.65" d="m6 9 6 6 6-6"></path></svg>'
  };
  const chipIcons={文本:'text',图像:'image',音频:'audio',视频:'video'};
  const contextMarks=[0,32,128,256,1000];
  const contextLabel=value=>value===1000?'1M':value===0?'0':`${value}K`;
  const contextIndex=value=>contextMarks.indexOf(value)<0?contextMarks.reduce((best,mark,index)=>Math.abs(mark-value)<Math.abs(contextMarks[best]-value)?index:best,0):contextMarks.indexOf(value);
  const taskTypes=['文本生成','深度推理','视觉理解','图片生成','视频生成','3D生成','语音识别','语音合成','向量表示','重排序','实时多模态'];
  let dock,mask,filterMask;
  const esc=value=>String(value||'').replace(/[&<>\"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[char]));
  const cards=()=>[...document.querySelectorAll('.model-gallery-page .model-card-grid .model-card')];
  const routeActive=()=>routes.has(location.hash.split('?')[0]);
  function categories(card){
    const name=card.querySelector('.model-name')?.textContent||'';
    const description=card.querySelector('.model-desc')?.textContent||'';
    const tags=[...card.querySelectorAll('.model-tag-row .ant-tag')].map(tag=>tag.textContent||'').join(' ');
    const text=`${name} ${description} ${tags}`.toLowerCase();
    const result=new Set();
    if(/reason|推理|think|深度思考/.test(text))result.add('深度推理');
    if(/embedding|向量|vector/.test(text))result.add('向量表示');
    if(/rerank|重排序/.test(text))result.add('重排序');
    if(/\b3d\b|世界模型/.test(text))result.add('3D生成');
    if(/text.?to.?video|文生视频|视频生成/.test(text))result.add('视频生成');
    if(/qwen-image|image generation|图像生成|图片生成|文生图/.test(text))result.add('图片生成');
    if(/vision|视觉|图像理解|图文理解|ocr|目标检测|图像分类/.test(text))result.add('视觉理解');
    if(/speech|audio|语音|音频/.test(text)){
      if(/合成|生成|synthesis|generation|tts/.test(text))result.add('语音合成');
      if(/识别|理解|recognition|asr/.test(text)||!result.has('语音合成'))result.add('语音识别');
    }
    if(/realtime|real-time|实时/.test(text))result.add('实时多模态');
    if(/通用大语言|语言模型|文本生成|代码专用|coder|chat|问答|文本大模型/.test(text)||!result.size)result.add('文本生成');
    return [...result];
  }
  function normalizeTypeFilter(){
    const panel=[...document.querySelectorAll('.model-filter-panel .ant-collapse-item')].find(item=>item.querySelector('.ant-collapse-title')?.textContent.trim()==='模型类型');
    if(!panel)return;
    const title=panel.querySelector('.ant-collapse-title');if(title)title.textContent='模型能力';
    const body=panel.querySelector('.ant-collapse-body');if(!body)return;
    const existing=body.querySelector('.xd-model-type-grid');
    if(existing){existing.querySelectorAll('input').forEach(input=>input.checked=selectedTypes.has(input.value));return}
    body.innerHTML=`<div class="xd-model-type-grid">${taskTypes.map(type=>`<label class="xd-model-type-option"><input type="checkbox" value="${type}" ${selectedTypes.has(type)?'checked':''}><span>${type}</span></label>`).join('')}</div>`;
  }
  function applyTypeFilter(){
    const grid=document.querySelector('.model-gallery-page .model-card-grid');if(!grid)return;
    let visible=0;
    cards().forEach(card=>{const item=info(card);const matches=(!selectedTypes.size||categories(card).some(type=>selectedTypes.has(type)))&&advancedMatch(item);card.hidden=!matches;if(matches)visible++});
    const clear=document.querySelector('.model-filter-head button');
    if(clear){const advancedActive=filterGroups.some(([,key])=>advanced[key].size)||advanced.context[0]!==0||advanced.context[1]!==1000;clear.disabled=!selectedTypes.size&&!advancedActive}
    let empty=grid.querySelector('.xd-model-filter-empty');
    const advancedActive=filterGroups.some(([,key])=>advanced[key].size)||advanced.context[0]!==0||advanced.context[1]!==1000;
    if((selectedTypes.size||advancedActive)&&!visible){if(!empty){empty=document.createElement('div');empty.className='xd-model-filter-empty';empty.textContent='没有符合条件的模型';grid.appendChild(empty)}}else empty?.remove();
    const panel=document.querySelector('.model-gallery-page .model-filter-panel');
    if(panel){ensureFilterDrawer();if(filterMask&&!filterMask.childElementCount)renderFilterDrawer()}
  }
  function info(card){
    const name=card.querySelector('.model-name')?.textContent.trim()||'模型';
    const text=card.innerText||'';
    const tags=[...card.querySelectorAll('.model-tag-row .ant-tag')].map(tag=>tag.textContent.trim()).filter(Boolean);
    const description=card.querySelector('.model-desc')?.textContent.trim()||'—';
    const provider=card.querySelector('.model-provider')?.textContent.trim()||'—';
    const context=text.match(/(?:上下文|context)[^\d]{0,12}(\d+(?:\.\d+)?\s?(?:K|M|B|T))/i)||text.match(/(\d+(?:\.\d+)?\s?(?:K|M|B|T))\s*(?:上下文|context)/i)||text.match(/(百万)\s*token/i);
    const scale=(name+' '+description).match(/(\d+(?:\.\d+)?\s?(?:B|T))(?:\s*(?:参数|parameters?))?/i);
    const type=categories(card).join('、');
    const updated=text.match(/(?:更新时间：?|Updated:?\s*)(\d{4}-\d{2}-\d{2})/i)?.[1]||'—';
    const modalities=new Set();
    if(!/embedding|向量|rerank|重排序/i.test(text))modalities.add('文本');
    if(/vision|视觉|image|图像|图片|多模态|vl-|ocr/i.test(text))modalities.add('图像');
    if(/audio|speech|语音|音频|omni/i.test(text))modalities.add('音频');
    if(/video|视频/i.test(text))modalities.add('视频');
    const output=new Set(['文本']);
    if(/image generation|图像生成|图片生成|文生图|qwen-image/i.test(text))output.add('图像');
    if(/语音合成|tts|音频生成/i.test(text))output.add('音频');
    if(/视频生成|文生视频/i.test(text))output.add('视频');
    const tokenText=context?.[1]||context?.[0]||'';
    const tokenValue=/百万/.test(tokenText)?1000000:(tokenText.match(/[\d.]+/) ? Number(tokenText.match(/[\d.]+/)[0])*({K:1000,M:1000000}[tokenText.match(/[KM]/i)?.[0]?.toUpperCase()]||1):0);
    const category=/embedding|向量|vector/i.test(text)?'向量模型':/rerank|重排序/i.test(text)?'重排序模型':/video|视频/i.test(text)?'视频生成':/qwen-image|文生图|图像生成|图片生成/i.test(text)?'图像生成':/vision|视觉|图文|ocr|vl-/i.test(text)?'视觉模型':/audio|speech|语音|音频/i.test(text)?'语音模型':'语言模型';
    const capabilities=new Set(tags.map(tag=>tag.toLowerCase()));
    const knownFeatures=[];
    if(/function.?call|function calling|工具调用/i.test(text))knownFeatures.push('Function Calling');
    if(/structured output|结构化输出|json mode/i.test(text))knownFeatures.push('结构化输出');
    if(/web search|联网搜索/i.test(text))knownFeatures.push('联网搜索');
    if(/prefix completion|前缀续写/i.test(text))knownFeatures.push('前缀续写');
    if(/cache|缓存/i.test(text))knownFeatures.push('上下文缓存');
    if(/batch|批量/i.test(text))knownFeatures.push('批量推理');
    if(/fine.?tun|微调/i.test(text))knownFeatures.push('模型微调');
    return {key:name,name,provider,tags,description,context:tokenText||'—',contextValue:tokenValue,scale:scale?.[1]||'—',type,updated,author:provider.replace(/\s*\/.*$/,''),category,input:[...modalities],output:[...output],capabilities:[...capabilities,...knownFeatures],service:['在线体验','API调用'],serviceProvider:[provider.split('/')[0]||provider],ability:categories(card)};
  }
  function advancedMatch(item){
    const dimensions=['category','input','output','capability','ability'];
    if(dimensions.some(key=>advanced[key].size&&!([...advanced[key]].some(value=>key==='category'?item.category===value:key==='ability'?abilityMatches(item,value):(key==='capability'?item.capabilities:item[key]).some(entry=>entry.toLowerCase()===value.toLowerCase())))))return false;
    const [min,max]=advanced.context;
    return (min===0&&max===1000)||item.contextValue>=min*1000&&item.contextValue<=max*1000;
  }
  function abilityMatches(item,value){
    const text=`${item.name} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
    const patterns={
      '全模态':/全模态|omni|统一理解与生成|多模态上下文/,
      '视觉理解':/视觉|vision|ocr|vl-/,
      '文本生成':/文本生成|语言模型|大语言|coder|chat/,
      '深度思考':/深度推理|推理模型|reason|think/,
      '图片生成':/图片生成|图像生成|文生图|qwen-image/,
      '视频生成':/视频生成|文生视频|text.?to.?video/,
      '3D生成':/3d生成|3d模型|三维生成/,
      '世界模型':/世界模型|world model/,
      '语音识别':/语音识别|asr|speech recognition/,
      '语音合成':/语音合成|tts|speech synthesis/,
      '多模态向量':/多模态向量|multimodal embedding/,
      '文本向量':/文本向量|embedding|向量表示/,
      '实时全模态':/实时全模态|realtime.*(全模态|多模态)/,
      '实时语音合成':/实时语音合成|realtime.*tts/,
      '实时语音识别':/实时语音识别|realtime.*asr/,
      '实时语音翻译':/实时语音翻译|realtime.*translation/,
      '实时语音对话':/实时语音对话|realtime.*speech.*dialog/
    };
    return patterns[value]?.test(text)||item.ability.includes(value)||value==='深度思考'&&item.ability.includes('深度推理')||value==='文本向量'&&item.ability.includes('向量表示');
  }
  function ensureFilterDrawer(){
    const panel=document.querySelector('.model-gallery-page .model-filter-panel');
    if(!panel){filterMask=null;return;}
    // The gallery is remounted after navigation, so discard a detached filter node.
    if(filterMask&&(!filterMask.isConnected||!panel.contains(filterMask)))filterMask=null;
    if(filterMask)return;
    filterMask=panel.querySelector('.xd-model-inline-filters');
    if(!filterMask){filterMask=document.createElement('div');filterMask.className='xd-model-inline-filters';panel.appendChild(filterMask)}
    filterMask.onclick=event=>{
      const row=event.target.closest('[data-filter-group]');
      if(row&&filterMask.contains(row)){
        const group=row.dataset.filterGroup,body=filterMask.querySelector(`[data-filter-body="${group}"]`);
        if(!body)return;
        event.preventDefault();event.stopPropagation();
        body.hidden=!body.hidden;row.setAttribute('aria-expanded',String(!body.hidden));
        return;
      }
      const chip=event.target.closest('[data-filter-key]');
      if(chip&&filterMask.contains(chip)){const set=advanced[chip.dataset.filterKey],value=chip.dataset.value;set.has(value)?set.delete(value):set.add(value);chip.setAttribute('aria-pressed',String(set.has(value)));applyTypeFilter()}
    };
    filterMask.oninput=event=>{
      if(!event.target.matches('[data-context-range]'))return;
      const index=Number(event.target.dataset.contextRange),next=[...advanced.context];next[index]=contextMarks[Number(event.target.value)];
      if(next[0]>next[1]){next[1-index]=next[index];filterMask.querySelector(`[data-context-range="${1-index}"]`).value=event.target.value}
      advanced.context=next;
      const control=filterMask.querySelector('.xd-model-range-control'),low=contextIndex(next[0]),high=contextIndex(next[1]),last=contextMarks.length-1;control.style.setProperty('--range-left',`${low/last*100}%`);control.style.setProperty('--range-width',`${(high-low)/last*100}%`);
      const labels=filterMask.querySelectorAll('.xd-model-filter-range-values span');labels[0].textContent=contextLabel(next[0]);labels[1].textContent=contextLabel(next[1]);
      applyTypeFilter();
    };
  }
  function renderFilterDrawer(){
    ensureFilterDrawer();
    if(!filterMask)return;
    const body=filterMask;
    const groups=filterGroups.filter(([,key])=>key!=='ability').map(([label,key,values])=>`<section class="xd-model-filter-group"><button type="button" class="xd-model-filter-row" data-filter-group="${key}" aria-expanded="${key==='category'}"><span class="xd-model-filter-row-title">${sourceIcons[key]||''}${label}</span>${sourceIcons.chevron}</button><div class="xd-model-filter-options" data-filter-body="${key}" ${key==='category'?'':'hidden'}>${values.map(value=>`<button type="button" class="xd-model-filter-chip" data-filter-key="${key}" data-value="${esc(value)}" aria-pressed="${advanced[key].has(value)}">${chipIcons[value]?`<span class="xd-model-chip-icon">${sourceIcons[chipIcons[value]]}</span>`:''}<span>${esc(value)}</span></button>`).join('')}</div></section>`).join('');
    const ability=`<section class="xd-model-filter-group"><button type="button" class="xd-model-filter-row" data-filter-group="ability" aria-expanded="false"><span class="xd-model-filter-row-title">${sourceIcons.ability}能力类型</span>${sourceIcons.chevron}</button><div class="xd-model-filter-options" data-filter-body="ability" hidden>${abilityFamilies.map(([label,values])=>`<div class="xd-model-ability-family"><div class="xd-model-ability-family-title">${label}</div><div class="xd-model-ability-options">${values.map(value=>`<button type="button" class="xd-model-filter-chip" data-filter-key="ability" data-value="${esc(value)}" aria-pressed="${advanced.ability.has(value)}">${esc(value)}</button>`).join('')}</div></div>`).join('')}</div></section>`;
    advanced.context=advanced.context.map(value=>contextMarks[contextIndex(value)]);
    if(advanced.context[0]>advanced.context[1])advanced.context[0]=advanced.context[1];
    const [min,max]=advanced.context,minIndex=contextIndex(min),maxIndex=contextIndex(max),last=contextMarks.length-1;
    body.innerHTML=`${groups}<section class="xd-model-filter-group"><button type="button" class="xd-model-filter-row" data-filter-group="context" aria-expanded="false"><span class="xd-model-filter-row-title">${sourceIcons.context}上下文长度</span>${sourceIcons.chevron}</button><div class="xd-model-filter-range" data-filter-body="context" hidden><div class="xd-model-filter-range-values"><span>${contextLabel(min)}</span><span>${contextLabel(max)}</span></div><div class="xd-model-range-control" style="--range-left:${minIndex/last*100}%;--range-width:${(maxIndex-minIndex)/last*100}%"><div class="xd-model-range-track"><i></i></div><div class="xd-model-range-ticks">${contextMarks.map(()=>'<i></i>').join('')}</div><input aria-label="最小上下文长度" type="range" min="0" max="${last}" step="1" value="${minIndex}" data-context-range="0"><input aria-label="最大上下文长度" type="range" min="0" max="${last}" step="1" value="${maxIndex}" data-context-range="1"></div><div class="xd-model-filter-range-labels"><span>0</span><span>1M</span></div></div></section>${ability}`;
  }
  function openFilterDrawer(){renderFilterDrawer()}
  function closeFilterDrawer(){}
  function ensureDock(){
    if(dock)return;
    dock=document.createElement('div');dock.className='xd-model-compare-dock';dock.hidden=true;document.body.appendChild(dock);
    dock.addEventListener('click',event=>{
      const action=event.target.closest('[data-action]')?.dataset.action;
      const key=event.target.closest('[data-key]')?.dataset.key;
      if(action==='clear'){selected.clear();sync();renderDock()}
      if(action==='compare'&&selected.size>=2)showCompare();
      if(action==='remove'&&key){selected.delete(key);sync();renderDock()}
    });
  }
  function renderDock(){
    ensureDock();dock.hidden=!routeActive()||selected.size===0;
    if(dock.hidden){dock.replaceChildren();return}
    const items=[...selected.values()];
    dock.innerHTML=`<div class="xd-model-compare-count">已选 ${items.length}/4</div><div class="xd-model-compare-chips">${items.map(item=>`<div class="xd-model-compare-chip" data-key="${esc(item.key)}"><span title="${esc(item.name)}">${esc(item.name)}</span><button type="button" data-action="remove" data-key="${esc(item.key)}" aria-label="移除 ${esc(item.name)}">×</button></div>`).join('')}</div><div class="xd-model-compare-actions"><button type="button" data-action="clear">清空对比</button><button type="button" class="primary" data-action="compare" ${items.length<2?'disabled':''}>对比模型</button></div>`;
  }
  function sync(){
    normalizeTypeFilter();
    cards().forEach(card=>{
      const item=info(card);let button=card.querySelector(':scope > .model-compare-toggle');
      if(!button){button=document.createElement('button');button.type='button';button.className='model-compare-toggle';button.setAttribute('aria-label','加入模型对比');button.setAttribute('aria-pressed','false');button.addEventListener('click',event=>{
        event.preventDefault();event.stopPropagation();const current=info(card);
        if(selected.has(current.key)){selected.delete(current.key)}else if(selected.size<4){selected.set(current.key,current)}else{notice('最多选择 4 个模型进行对比');return}
        sync();renderDock();
      });card.appendChild(button)}
      const active=selected.has(item.key);button.setAttribute('aria-pressed',String(active));button.setAttribute('aria-label',active?'取消模型对比':'加入模型对比');card.classList.toggle('is-compare-selected',active);
    });
    applyTypeFilter();
    if(dock)dock.hidden=!routeActive()||selected.size===0;
    if(mask&&!routeActive())closeCompare();
  }
  function notice(message){
    let node=document.querySelector('.xd-model-compare-notice');if(!node){node=document.createElement('div');node.className='xd-model-compare-notice';node.style.cssText='position:fixed;z-index:1400;top:72px;left:50%;transform:translateX(-50%);padding:9px 16px;border-radius:4px;background:#172b4d;color:#fff;font-size:13px;box-shadow:0 4px 12px rgba(0,0,0,.16)';document.body.appendChild(node)}node.textContent=message;node.hidden=false;clearTimeout(node._timer);node._timer=setTimeout(()=>node.hidden=true,1800);
  }
  function showCompare(){
    closeCompare();const items=[...selected.values()];if(items.length<2)return;
    const supported=(item,name)=>item.capabilities.some(value=>value.toLowerCase()===name.toLowerCase());
    const sections=[
      ['基本信息', [['模型作者',item=>item.author||'—','text'],['模型分类',item=>item.category,'text'],['参数规模',item=>item.scale,'value'],['模型来源',item=>item.tags.includes('自定义')?'自定义':'预置','text'],['更新时间',item=>item.updated,'text']]],
      ['模态', [['输入模态',item=>item.input,'tags'],['输出模态',item=>item.output,'tags']]],
      ['性能', [['最大输入长度',item=>item.context,'value'],['上下文长度',item=>item.context,'value'],['最大输出长度',()=>'—','value']]],
      ['能力', [['模型体验',()=>true,'status'],['Function Calling',item=>supported(item,'function call')||supported(item,'Function Calling'),'status'],['结构化输出',item=>supported(item,'结构化输出'),'status'],['联网搜索',item=>supported(item,'联网搜索'),'status'],['前缀续写',item=>supported(item,'前缀续写'),'status'],['上下文缓存',item=>supported(item,'上下文缓存'),'status'],['批量推理',item=>supported(item,'批量推理'),'status'],['模型微调',item=>supported(item,'模型微调'),'status']]],
      ['模型简介', [['简介',item=>item.description,'description']]]
    ];
    const renderValue=(value,kind)=>{
      if(kind==='status')return `<span class="xd-model-compare-status ${value?'is-yes':'is-no'}">${value?'是':'否'}</span>`;
      if(kind==='tags')return value.length?`<div class="xd-model-compare-tags">${value.map(tag=>`<span>${esc(tag)}</span>`).join('')}</div>`:'—';
      if(kind==='value')return `<span class="xd-model-compare-value">${esc(value)}</span>`;
      return esc(value);
    };
    mask=document.createElement('div');mask.className='xd-model-compare-mask';mask.setAttribute('role','presentation');
    mask.innerHTML=`<section class="xd-model-compare-dialog" role="dialog" aria-modal="true" aria-labelledby="xd-model-compare-title"><header class="xd-model-compare-head"><strong id="xd-model-compare-title">模型对比 <span>${items.length} 个模型</span></strong><button type="button" data-close aria-label="关闭">×</button></header><div class="xd-model-compare-body"><table class="xd-model-compare-table"><thead><tr><th>对比维度</th>${items.map(item=>`<th>${esc(item.name)}<div style="margin-top:4px;color:#778399;font-size:12px;font-weight:400">${esc(item.provider)}</div></th>`).join('')}</tr></thead><tbody>${sections.map(([title,rows])=>`<tr class="xd-model-compare-section"><th colspan="${items.length+1}">${title}</th></tr>${rows.map(([label,get,kind])=>`<tr><td>${label}</td>${items.map(item=>`<td class="${kind==='description'?'xd-model-compare-desc':''}">${renderValue(get(item),kind)}</td>`).join('')}</tr>`).join('')}`).join('')}</tbody></table></div></section>`;
    mask.addEventListener('click',event=>{if(event.target===mask||event.target.closest('[data-close]'))closeCompare()});document.addEventListener('keydown',onKey);document.body.appendChild(mask);
  }
  function onKey(event){if(event.key==='Escape')closeCompare()}
  function closeCompare(){if(mask){mask.remove();mask=null;document.removeEventListener('keydown',onKey)}}
  document.addEventListener('change',event=>{
    const input=event.target.closest('.xd-model-type-option input');if(!input)return;
    if(input.checked)selectedTypes.add(input.value);else selectedTypes.delete(input.value);
    applyTypeFilter();
  });
  document.addEventListener('click',event=>{
    if(!event.target.closest('.model-filter-head button'))return;
    selectedTypes.clear();filterGroups.forEach(([,key])=>advanced[key].clear());advanced.context=[0,1000];renderFilterDrawer();setTimeout(()=>{normalizeTypeFilter();document.querySelectorAll('.xd-model-type-option input').forEach(input=>input.checked=false);applyTypeFilter()},60);
  },true);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeFilterDrawer();closeCompare()}});
  document.addEventListener('click',event=>{
    const tag=event.target.closest('.model-gallery-page .model-tag-row .ant-tag');if(!tag)return;
    const value=tag.textContent.trim();event.preventDefault();event.stopPropagation();
    if(value==='大模型')advanced.category.add('语言模型');else if(filterGroups.find(([,key])=>key==='capability')[2].includes(value))advanced.capability.add(value);
    else return;
    renderFilterDrawer();applyTypeFilter();
  },true);
  document.addEventListener('click',event=>{
    const chip=event.target.closest('[data-clear-filter]');if(!chip)return;
    const key=chip.dataset.clearFilter;if(key==='context')advanced.context=[0,1000];else advanced[key].delete(chip.dataset.value);
    applyTypeFilter();
  });
  ensureDock();sync();renderDock();renderFilterDrawer();
  new MutationObserver(()=>sync()).observe(document.body,{childList:true,subtree:true});
  addEventListener('hashchange',()=>{
    filterMask=null;
    requestAnimationFrame(()=>{sync();renderFilterDrawer();renderDock()});
  });
})();

;

(() => {
  const wrapRows = () => document.querySelectorAll('.disk-capacity-list').forEach(list => {
    if (list.querySelector('.disk-capacity-list-body')) return;
    const rows = [...list.querySelectorAll(':scope > .disk-capacity-list-row')];
    if (!rows.length) return;
    const body = document.createElement('div');
    body.className = 'disk-capacity-list-body';
    rows[0].before(body);
    rows.forEach(row => body.append(row));
  });
  wrapRows();
  new MutationObserver(wrapRows).observe(document.body, { childList: true, subtree: true });
})();

;

(() => {
  const embedParams = new URLSearchParams(location.hash.split('?')[1] || '');
  if (embedParams.get('specEmbed') === '1') {
    const scene = embedParams.get('scene');
    if (scene) {
      let switched = false;
      const openScene = () => {
        const card = [...document.querySelectorAll('.overlay-demo-item')].find(item => item.querySelector('strong')?.textContent === scene);
        const button = card?.querySelector('.overlay-demo-action button');
        if (button) { watcher.disconnect(); clearTimeout(timeout); button.click(); return; }
        if (!switched) {
          const tabName = scene.includes('抽屉') ? '抽屉 Drawer' : scene === '删除组件' ? '轻量确认 Popconfirm' : '弹窗 Modal';
          const tab = [...document.querySelectorAll('[role="tab"]')].find(item => item.textContent.trim() === tabName);
          if (tab) { switched = true; tab.click(); }
        }
      };
      const watcher = new MutationObserver(openScene);
      watcher.observe(document.body, { childList: true, subtree: true });
      const timeout = setTimeout(() => watcher.disconnect(), 15000);
      openScene();
    }
    return;
  }
  const routes = {
    'spec-components': 'components',
    'spec-data-visualization': 'visualization',
    'spec-foundations': 'foundations',
    'spec-overview': 'foundations', 'spec-navigation': 'navigation', 'spec-breadcrumb': 'navigation',
    'spec-pagination': 'pagination', 'spec-form-layout': 'form', 'spec-empty-state': 'empty', 'spec-buttons': 'buttons',
    'spec-modal-position': 'modalPosition', 'spec-feedback': 'feedback', 'spec-page-layout': 'pageLayout'
  };
  const retired = new Set(['spec-alarm-detail', 'spec-visualization', 'spec-responsive-home', 'spec-delivery']);
  const assets = [
    ['暂无数据', '01-empty-data.png'], ['无搜索结果', '02-no-search-results.png'],
    ['无访问权限', '03-no-permission.png'], ['网络异常', '04-network-error.png'],
    ['加载失败', '05-load-failed.png'], ['操作失败', '06-operation-failed.png'],
    ['操作成功', '07-operation-success.png'], ['系统维护', '08-system-maintenance.png']
  ];
  const demoLink = (route, label) => `<a class="sp-demo-link" href="#${route}">${label} →</a>`;
  const table = (headers, rows, mergeFirst = false) => `<div class="sp-table-wrap"><table><thead><tr>${headers.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${rows.map((row, i) => `<tr>${row.map((x, col) => { if (!mergeFirst || col) return `<td>${x}</td>`; if (i && rows[i - 1][0] === x) return ''; let span = 1; while (rows[i + span]?.[0] === x) span++; return `<th scope="rowgroup" rowspan="${span}">${x}</th>`; }).join('')}</tr>`).join('')}</tbody></table></div>`;
  const yes = '<span class="sp-yes" aria-label="显示">✓</span>';
  const no = '<span class="sp-no" aria-label="隐藏">—</span>';
  const shot = (file, title, description, region) => `<figure class="sp-scene"><figcaption><h3>${title}</h3><p>${description}</p></figcaption><button type="button" class="sp-shot ${region || ''}" data-zoom="${window.__xdAsset('xdesign-spec/assets/'+file)}" data-caption="${title}" aria-label="放大${title}"><img src="${window.__xdAsset('xdesign-spec/assets/'+file)}" alt="${title}实际页面截图"><span class="sp-boundary" aria-hidden="true"></span><span class="sp-zoom-hint">放大查看</span></button></figure>`;
  const topicLabels = {
    'spec-foundations': '色彩 / 字体 / 间距',
    'spec-page-layout': '二级页面布局', 'spec-navigation': '返回按钮 / 面包屑',
    'spec-data-visualization': '数据可视化', 'spec-empty-state': '异常状态', 'spec-feedback': '全局提示',
    'spec-modal-position': '弹窗与抽屉', 'spec-form-layout': '表单',
    'spec-pagination': '分页器', 'spec-buttons': '按钮与图标'
  };
  const topicGroups = [
    ['全局基础', ['spec-foundations']],
    ['页面与导航', ['spec-page-layout', 'spec-navigation']],
    ['内容与反馈', ['spec-data-visualization', 'spec-empty-state', 'spec-feedback']],
    ['操作与控件', ['spec-modal-position', 'spec-form-layout', 'spec-pagination', 'spec-buttons']]
  ];
  const scenario = (title, copy, visual) => `<section class="sp-scenario"><div class="sp-explanation"><h2>${title}</h2>${copy}</div><div class="sp-example">${visual}</div></section>`;
  const chartFamilies = [
    { key: 'overview', title: '指标概览', question: '现在是多少，是否达到目标？', types: [['metric','指标卡'],['score','评分卡'],['health','健康评分']], copy: '<p>用于首页核心指标、业务规模与服务健康概览。指标卡回答“多少”，评分回答“是否健康”。</p><p>必须同时给出指标名、数值、单位、统计周期；同比或环比说明比较对象和时间窗。评分需有满分、权重与计算口径。</p><p>涨跌不等于好坏：告警数量下降可以是改善，调用量下降不一定是异常。颜色由业务含义决定。</p>', rule: '不把多个口径不同的数值相加；不把无比较基准的百分比写成增长率。' },
    { key: 'trend', title: '趋势变化', question: '随时间如何变化？', types: [['line','折线图'],['area','面积图'],['cluster','多序列趋势'],['temperature','温度监控']], copy: '<p>用于调用量、资源使用率、温度、费用等时间序列。折线看变化，面积强调变化中的量级，多序列用于同一时间轴上的对照。</p><p>时间从左到右，采样粒度一致；标注时区、单位和统计周期。缺失值保留断点，不自动补成 0。</p><p>监控温度可不从 0 起，但必须明确纵轴范围。同一组小图共用量程；多曲线过密时保留重点或拆图。</p>', rule: '避免堆叠不具备可加性的指标；不同单位优先拆图，谨慎使用双轴。' },
    { key: 'comparison', title: '对比与排名', question: '谁多谁少，差距多大？', types: [['column','堆叠柱图'],['cost','柱状图'],['ranking','横向排名'],['radar','雷达图']], copy: '<p>柱图对比离散类别；堆叠柱同时看总量与可相加的构成。对象名长或需要排序时使用横向排名。</p><p>柱图数量轴从 0 开始；比较对象使用相同单位与统计周期。Top N 标清排名范围、排序字段和未展示对象。</p><p>雷达仅用于量纲一致或已标准化的多维能力对照。本项目建议 3–6 个维度、最多 2 组对象，维度顺序固定。</p>', rule: '雷达不用于精确排名；不同单位的原始值不能直接画在同一雷达上。' },
    { key: 'composition', title: '占比与结构', question: '一个整体由什么组成？', types: [['donut','环形占比'],['legendPie','图例联动环图']], copy: '<p>用于任务状态占比、资源构成等同一个整体的拆分。环图中心可显示总量，图例联动用于定位某一部分。</p><p>所有部分必须互斥、非负、分母一致。显示类别、数值与百分比；舍入后允许小误差，不修改原始值凑数。</p><p>本项目建议最多 5 个分区；更多类别合并“其他”并提供明细。接近的比例需要精确比较时改用横向条形图。</p>', rule: '合计为 0 时展示暂无数据，不画满环；不是同一分母的数据不用占比图。' },
    { key: 'capacity', title: '容量与水位', question: '用了多少，还剩多少？', types: [['gauge','使用率仪表盘'],['progress','环形进度'],['disk','逻辑盘容量']], copy: '<p>用于 CPU、GPU、存储、队列等具有明确总量或目标的指标。单个仪表盘强调一项，多资源用进度组，磁盘容量结合用量明细。</p><p>同时显示已用、总量和单位，比例 = 已用 ÷ 总量。正常阈值、预警阈值由业务或运维确认，不按图形好看程度设定。</p><p>多个环的半径不同，不用弧长直接比较绝对数量；需要对比时使用条形进度。总量未知或为 0 时不计算使用率。</p>', rule: '百分比不是总容量；告警数量没有明确上限时，不使用“已完成百分比”的语义。' },
    { key: 'conversion', title: '流程与转化', question: '哪些阶段发生流失？', types: [['funnel','转化漏斗']], copy: '<p>用于提交训练、训练成功、评测通过、上线服务等同一批对象的连续过程。</p><p>按真实阶段顺序排列，标明各阶段数量。整体转化率以入口为分母；阶段转化率以上一步为分母，二者需明确区分。</p><p>观察窗口和对象集合一致；可回流、可重复计数或并行阶段需要先定义去重口径。</p>', rule: '无顺序的状态分布不是漏斗；各阶段来自不同批次的数据不能直接算转化。' },
    { key: 'relationship', title: '关系与密度', question: '指标之间是否有关联，哪里最集中？', types: [['scatter','散点图'],['heatmap','热力图']], copy: '<p>散点用于观察调用量与响应质量等两个数值指标的关系；热力图用于时段 × 日期等二维交叉下的调用密度。</p><p>散点的一点代表一个对象，坐标标注指标与单位；气泡大小若承载第三个变量，要说明大小含义。</p><p>热力图同一组使用固定色域与数值图例；无数据单独表示，不能与数值 0 混同。异常单元格提供精确值。</p>', rule: '相关不等于因果；热力图颜色深浅只表达同一度量的大小，不兼作无关分类。' },
    { key: 'detail', title: '明细与文本', question: '精确数据是什么，文本里有哪些热点？', types: [['table','明细表格'],['wordcloud','标签词云']], copy: '<p>表格用于精确数值、对象查找、状态与操作；与图表的筛选口径和总数保持一致，可作为图表的文本替代。</p><p>词云只用于标签或文本热点浏览。字号对应词频或已定义权重，过滤停用词；需要精确比较时改用排名或表格。</p><p>词云不能代替告警优先级、精确统计或关键业务结论。长名称与明细保持可查。</p>', rule: '不要把词云的排版位置当成数据含义；图表与明细不能使用不同过滤条件。' }
  ];
  const chartNotes = {
    metric: ['首页核心数量、规模概览', '数值与环比一眼可见', '必须明确单位和比较周期'],
    score: ['由多项指标汇总的服务评分', '便于对照目标分数', '说明满分与评分权重'],
    health: ['快速判断平台整体健康', '突出单一健康结论', '细查原因仍需指标明细'],
    line: ['调用量、延迟等单指标走势', '变化和拐点清晰', '缺失点不自动补为 0'],
    area: ['同时关注趋势与数量规模', '量级感更强', '重叠区域易遮挡，勿堆太多序列'],
    cluster: ['GPU、内存等同周期对照', '同时发现多指标波动', '不同单位不要直接共用量程'],
    temperature: ['多个传感器的连续监控', '曲线与平均值共同排查异常', '同组传感器保持单位与量程一致'],
    column: ['比较总量及其可相加的构成', '一图同时看整体与分项', '中间分项不易精确比较'],
    cost: ['月份费用、类别数量比较', '高度直接表达差距', '数量轴必须从 0 开始'],
    ranking: ['Top N 模型、资源对象排序', '长名称和名次更易读', '标清排序字段和 Top N 范围'],
    radar: ['少量对象的标准化多维能力', '能力轮廓一眼可见', '维度量纲统一，不用于精确排名'],
    donut: ['同一整体中少量类别的占比', '兼顾总量与构成', '比例接近时不易比较，建议不超过 5 类'],
    legendPie: ['从类别图例定位对应分区', '分区与图例可关联高亮', '类别过多改用条形图或表格'],
    gauge: ['单项资源的使用率与阈值', '水位状态突出', '需要明确总量或目标上限'],
    progress: ['并列查看几种资源的利用率', '多个比例可集中展示', '不同半径的弧长不能比绝对量'],
    disk: ['磁盘总容量与挂载点占用', '总体水位和具体用量可核对', '统一容量单位，保留路径和数值'],
    funnel: ['同一批对象的连续阶段转化', '阶段流失易定位', '无顺序或不同批次不能算转化'],
    scatter: ['两个数值指标间的关系', '关联、聚类和离群点直观', '相关不等于因果'],
    heatmap: ['日期 × 时段等二维调用密度', '高密度与热点易识别', '无数据和 0 必须区分'],
    table: ['查找对象、核对精确数据', '口径和数值可追溯', '宏观趋势不如图形直观'],
    wordcloud: ['标签热词与文本主题概览', '高频词更醒目', '不能替代精确排名或告警优先级']
  };
  function visualizationBody() {
    return `<section><h2>先按问题选择图表</h2><p>分类按分析任务划分，同一种图可以服务不同任务。先确定指标、维度、统计周期和数据口径，再选择图形。</p>${table(['大类','要回答的问题','包含的现有组件'],chartFamilies.map(family=>[family.title,family.question,family.types.map(([,name])=>name).join('、')]))}</section>` + chartFamilies.map(family=>`<section class="sp-chart-family"><header class="sp-chart-family-heading"><h2>${family.title}</h2><p>${family.question}</p></header><div data-native="chart-${family.key}"></div><details class="sp-chart-guidance"><summary>本类通用规则</summary>${family.copy}<p><strong>边界：</strong>${family.rule}</p></details></section>`).join('') + `<section><h2>统一的图表规范</h2>${table(['要素','固定规则'],[
      ['标题与口径','标题说明指标和对象；同时明确单位、统计周期、聚合方式。必要时提供口径说明。'],
      ['坐标与精度','时间递增；类别顺序稳定；同量纲对比共用刻度；柱图数量轴从 0 起。精度按业务定义，同图保持一致。'],
      ['类别配色','第一序列用内容主蓝 #124DEE，其他类别沿用现有辅助色。同一对象跨图保持同色，图例顺序与序列一致。'],
      ['状态与数值配色','成功、警告、错误遵循状态语义；连续数值使用由浅到深的顺序色；正负偏离使用有明确中点的双色。'],
      ['文字与布局','标题 16px，正文和操作 14px，辅助坐标与单位 12px。图表容器尺寸稳定，不让长图例挤压绘图区；窄屏优先换行或改用表格。'],
      ['图例','类别较少时直接标注；多序列使用图例。点击图例切换显隐时保留状态反馈，不改变统计口径。'],
      ['提示与键盘','提示展示对象、时间、原值和单位，不只显示颜色或四舍五入百分比。关键数据提供可读明细，不能仅靠鼠标悬停获取。'],
      ['阈值与注释','阈值显示数值、单位和含义；异常点补充事件说明。阈值、评分权重与统计口径由业务确认。']
    ])}</section><section><h2>加载、空数据与联动</h2>${table(['状态 / 操作','行为'],[
      ['加载中','保留图表区域尺寸，展示加载状态；避免先画成 0 再跳到实际数值。'],
      ['无记录','使用项目的暂无数据切图；筛选未命中使用无搜索结果。空图不伪造折线、满环或随机占位数据。'],
      ['数据为 0','0 是有效数值：折线和柱图保留 0；占比合计为 0 时不计算百分比。与缺失值区分。'],
      ['失败 / 无权限','使用对应状态、保留必要上下文，并按任务提供重试或权限说明。'],
      ['筛选与时间切换','图表、指标、明细同时更新；提示当前筛选范围；更新时间窗后不能沿用旧的对比周期。'],
      ['图例与钻取','图例用于显隐或高亮；钻取用于进入下一层明细，两者入口和反馈清晰区分。只有真实有目标时才提供点击。'],
      ['导出与分享','导出标题、单位、时间窗和筛选条件；显示精度与底层明细可追溯。']
    ])}${demoLink('kit/data-visualization','打开数据可视化完整示例')}</section>`;
  }

  const foundationSection = (number, title, intro, content) => `<section><header class="sp-foundation-section-head"><span>${number}</span><div><h2>${title}</h2><p>${intro}</p></div></header>${content}</section>`;
  const colorChip = color => `<span class="sp-swatch" style="background:${color}"></span><code>${color}</code>`;
  const foundationRamp = (name, colors, roles) => `<div class="sp-palette"><h3>${name}</h3><div class="sp-foundation-ramp">${colors.map((color, i) => `<div ${i === 5 ? 'class="is-primary"' : ''}><span style="background:${color}"></span><b>${i + 1}${i === 5 ? ' · 主色' : ''}</b><code>${color}</code><small>${roles[i] || '辅助色阶'}</small></div>`).join('')}</div></div>`;
  const redScale = ['#FFEAE6','#FFAFA3','#FF887A','#FF5D52','#FF3029','#F70000','#D10007','#AB000B','#84000D','#5E000D'];
  const blueScale = ['#E6F1FF','#B8D4FF','#8FB8FF','#6699FF','#3C75FA','#124DEE','#0633C7','#0020A1','#00147A','#000B54'];
  function contrastRatio(foreground, background) {
    const luminance = hex => {
      const channels = hex.match(/[a-f\d]{2}/gi).map(value => parseInt(value, 16) / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
      return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
    };
    const a = luminance(foreground), b = luminance(background);
    return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
  }
  const darkColorMapping = [
  [
    "Text",
    "color/text/primary",
    "rgba(0,11,35,.85)",
    "rgba(255,255,255,.85)",
    "浅色保持 XDesign #000B23 85%；深色套用 AntD dark 主文字白色 85%。"
  ],
  [
    "Text",
    "color/text/secondary",
    "rgba(0,11,35,.65)",
    "rgba(255,255,255,.65)",
    "浅色保持 XDesign #000B23 65%；深色套用 AntD dark 次级文字白色 65%。"
  ],
  [
    "Text",
    "color/text/tertiary",
    "rgba(0,11,35,.45)",
    "rgba(255,255,255,.45)",
    "浅色保持 XDesign #000B23 45%；深色套用 AntD dark 辅助文字白色 45%。"
  ],
  [
    "Text",
    "color/text/disabled",
    "rgba(0,11,35,.25)",
    "rgba(255,255,255,.25)",
    "浅色保持 XDesign #000B23 25%；深色套用 AntD dark 禁用文字白色 25%。"
  ],
  [
    "Icon",
    "color/icon/primary",
    "rgba(0,11,35,.85)",
    "rgba(255,255,255,.85)",
    "图标跟随文字层级：深色主图标套用白色 85%。"
  ],
  [
    "Icon",
    "color/icon/secondary",
    "rgba(0,11,35,.65)",
    "rgba(255,255,255,.65)",
    "图标跟随文字层级：深色次级图标套用白色 65%。"
  ],
  [
    "Border",
    "color/border/default",
    "rgba(0,11,35,.15)",
    "rgba(255,255,255,.16)",
    "深色默认边框使用白色 16% 透明度，匹配输入框、卡片和表格边界。"
  ],
  [
    "Border",
    "color/border/divider",
    "rgba(0,11,35,.10)",
    "rgba(255,255,255,.10)",
    "深色分割线套用 AntD dark 弱分割，使用白色 10% 透明度。"
  ],
  [
    "Border",
    "color/border/strong",
    "rgba(0,11,35,.25)",
    "rgba(255,255,255,.25)",
    "深色强边框使用白色 25%，不跟随浅色 #000B23。"
  ],
  [
    "Surface",
    "color/surface/page",
    "#FFFFFF",
    "#050505",
    "root：深色页面根背景、工作区最底层。"
  ],
  [
    "Surface",
    "color/surface/panel",
    "#FFFFFF",
    "#141414",
    "panel：卡片、筛选区、表单块、表格主体。"
  ],
  [
    "Surface",
    "color/surface/elevated",
    "#FFFFFF",
    "#1F1F1F",
    "elevated：Modal、Drawer、Dropdown、Popover 等浮层。"
  ],
  [
    "Surface",
    "color/surface/subtle",
    "#F7FAFE",
    "#101010",
    "base：顶栏、页面内容底、表格行底、输入框底。"
  ],
  [
    "Surface",
    "color/surface/hover",
    "#F7FAFE",
    "#262626",
    "state：Hover、Pressed、菜单项 Hover、表格行 Hover。"
  ],
  [
    "Surface",
    "color/surface/selected",
    "#E6F1FF",
    "#262626",
    "state：表格选中行、分段控件选中、菜单选中底。"
  ],
  [
    "Primary",
    "color/content/primary/default",
    "#124DEE",
    "#6699FF",
    "链接、焦点、选中图标、主按钮；不得作为大面积背景。"
  ],
  [
    "Primary",
    "color/content/primary/hover",
    "#0633C7",
    "#8FB8FF",
    "链接 Hover、文字按钮 Hover"
  ],
  [
    "Primary",
    "color/content/primary/active",
    "#0020A1",
    "#3C75FA",
    "Pressed / Active；深色中避免过暗"
  ],
  [
    "Primary",
    "color/content/primary/subtle",
    "#E6F1FF",
    "#262626",
    "深色大面积选中底归到 state；蓝色只用于文字、图标、边框或小面积状态。"
  ],
  [
    "Primary",
    "color/content/primary/subtle-hover",
    "#B8D4FF",
    "#262626",
    "深色浅底 Hover 归到 state，不新增蓝色透明底。"
  ],
  [
    "Primary",
    "color/content/primary/border",
    "#8FB8FF",
    "rgba(18,77,238,.45)",
    "焦点、信息边框、轻量控件边框；只用于边框不铺大面积背景。"
  ],
  [
    "Action",
    "button/primary/bg/default",
    "#124DEE",
    "#124DEE",
    "深色实心主按钮默认背景，白字对比更稳"
  ],
  [
    "Action",
    "button/primary/bg/hover",
    "#0633C7",
    "#3C75FA",
    "深色中 Hover 稍亮，避免暗底上反馈不明显"
  ],
  [
    "Action",
    "button/primary/bg/active",
    "#0020A1",
    "#0633C7",
    "深色中 Pressed 回到更深蓝"
  ],
  [
    "Brand",
    "color/shell/brand/default",
    "#F70000",
    "#F70000",
    "Logo、导航激活、品牌红按钮默认"
  ],
  [
    "Brand",
    "color/shell/brand/hover",
    "#FF3029",
    "#FF3029",
    "品牌 Hover"
  ],
  [
    "Brand",
    "color/shell/brand/active",
    "#D10007",
    "#D10007",
    "品牌 Pressed / Active"
  ],
  [
    "Brand",
    "color/shell/brand/subtle",
    "rgba(247,0,0,.08)",
    "rgba(247,0,0,.18)",
    "导航/品牌轻量选中背景"
  ],
  [
    "Status Info",
    "color/status/info/bg",
    "#E6F1FF",
    "rgba(102,153,255,.16)",
    "Info 背景"
  ],
  [
    "Status Info",
    "color/status/info/border",
    "#8FB8FF",
    "rgba(102,153,255,.45)",
    "Info 边框"
  ],
  [
    "Status Info",
    "color/status/info/icon",
    "#124DEE",
    "#6699FF",
    "Info 图标 / 状态点"
  ],
  [
    "Status Info",
    "color/status/info/text",
    "#0633C7",
    "#8FB8FF",
    "Info 文本 / 标签文字"
  ],
  [
    "Status Success",
    "color/status/success/bg",
    "#E7F1E2",
    "rgba(85,177,68,.16)",
    "Success 背景"
  ],
  [
    "Status Success",
    "color/status/success/border",
    "#C1D7BA",
    "rgba(120,190,103,.45)",
    "Success 边框"
  ],
  [
    "Status Success",
    "color/status/success/icon",
    "#55B144",
    "#78BE67",
    "Success 图标 / 状态点"
  ],
  [
    "Status Success",
    "color/status/success/text",
    "#3A8B2E",
    "#9CCA8F",
    "Success 文本 / 标签文字"
  ],
  [
    "Status Warning",
    "color/status/warning/bg",
    "#FFF5E8",
    "rgba(236,111,26,.16)",
    "Warning 背景"
  ],
  [
    "Status Warning",
    "color/status/warning/border",
    "#FFCB96",
    "rgba(249,147,67,.45)",
    "Warning 边框"
  ],
  [
    "Status Warning",
    "color/status/warning/icon",
    "#EC6F1A",
    "#F99343",
    "Warning 图标 / 状态点"
  ],
  [
    "Status Warning",
    "color/status/warning/text",
    "#C6510C",
    "#FFB26E",
    "Warning 文本 / 标签文字"
  ],
  [
    "Status Error",
    "color/status/error/bg",
    "#FFEAE6",
    "rgba(247,0,0,.16)",
    "Error 背景"
  ],
  [
    "Status Error",
    "color/status/error/border",
    "#FF887A",
    "rgba(255,93,82,.45)",
    "Error 边框"
  ],
  [
    "Status Error",
    "color/status/error/icon",
    "#F70000",
    "#FF3029",
    "Error 图标 / 状态点"
  ],
  [
    "Status Error",
    "color/status/error/text",
    "#D10007",
    "#FF887A",
    "Error 文本 / 标签文字"
  ],
  [
    "Shell",
    "color/shell/topbar",
    "#FFFFFF",
    "#1E1E1E",
    "页面内容区"
  ],
  [
    "Shell",
    "color/shell/subnav",
    "#F7FAFE",
    "#2C2C2C",
    "导航栏背景"
  ],
  [
    "Shell",
    "color/shell/subnav/hover",
    "rgba(0,11,35,.6)",
    "rgba(255,255,255,.20)",
    "导航菜单项hover背景"
  ],
  [
    "Shell",
    "color/shell/subnav/click",
    "rgba(0,11,35,.6)",
    "rgba(255,255,255,.20)",
    "导航栏菜单项click背景"
  ],
  [
    "Shell",
    "color/shell/divider",
    "rgba(0,0,0,.10)",
    "rgba(255,255,255,.10)",
    "Shell 分割线"
  ],
  [
    "Mask",
    "color/mask",
    "rgba(0,11,35,.45)",
    "rgba(0,0,0,.65)",
    "Modal / Drawer 遮罩，单独作为功能值；不属于黑灰表面色阶。"
  ]
];
  function darkMappingTable() {
    const categories = { Text: '文字', Icon: '图标', Border: '边框', Surface: '表面', Primary: '内容主色', Action: '实心按钮', Brand: '品牌', 'Status Info': '信息', 'Status Success': '成功', 'Status Warning': '警告', 'Status Error': '错误', Shell: '外壳', Mask: '遮罩' };
    const valueCell = (color, dark) => `<span class="sp-map-color ${dark ? 'on-dark' : ''}"><i style="background:${color}"></i></span><code>${color}</code>`;
    return `<div class="sp-dark-map">${table(['类别', '语义 Token', '浅色模式', '深色模式', '用途'], darkColorMapping.map(([category, token, light, dark, usage]) => [categories[category], `<code>${token}</code>`, valueCell(light, false), valueCell(dark, true), usage]), true)}</div>`;
  }
  function foundationsBody() {
    const typography = [
      ['核心主指标',36,48,700,'1,280','仪表盘单一主指标'], ['卡片统计值',32,40,700,'1,280','独立统计数值'],
      ['低频总览 / 结果标题',24,32,600,'操作结果','总览、重要结果页'], ['大型浮层标题',20,28,600,'资源配置','大型 Modal / Drawer、表单组标题'],
      ['页面标题',18,26,600,'任务详情','标准业务页面默认最高标题'], ['区块 / 卡片标题',16,24,600,'基本信息','详情分组、内容区块'],
      ['正文 / 表单 / 按钮',14,22,400,'服务名称','默认界面文本'], ['紧凑表格 / 导航',14,20,400,'Server-01','密集数据、导航标签'], ['辅助信息',12,20,400,'更新时间','时间、单位、标签补充']
    ];
    const states = [['默认','#124DEE','color/content/primary/default','普通主操作'],['悬停','#0633C7','color/content/primary/hover','鼠标悬停'],['按下','#0020A1','color/content/primary/active','按压期间'],['焦点','#124DEE','color/content/focus-ring','2px #0633C7 焦点环，外移 2px'],['禁用','#F1F5F9','中性背景 / 边框 / 文字','不可操作，不使用整体 opacity'],['加载','#124DEE','保持主色与按钮宽度','显示加载图标，防止重复提交']];
    return [
      foundationSection('01','品牌色与内容主色','双主轴各自负责一层：品牌外壳保留红色，业务内容交互使用蓝色。', `<div class="sp-primary-colors"><div><span class="sp-primary-block" style="background:#F70000"></span><h3>品牌主色 · Shell Brand Red</h3><strong>#F70000 · red/6</strong><p>Logo、一级导航激活、二三级导航选中、顶部栏品牌反馈。</p></div><div><span class="sp-primary-block" style="background:#124DEE"></span><h3>内容主色 · Content Primary Blue</h3><strong>#124DEE · blue/6</strong><p>主按钮、链接、Tabs、分页、输入焦点、Checkbox / Radio / Switch。</p></div></div><p>外壳品牌颜色与内容 ConfigProvider 分开配置；内容蓝不作为大面积页面底色。状态同时配合文案或图标。</p>`),
      foundationSection('02','品牌红与内容蓝色阶','第 6 级为主色；浅阶负责背景与边框，深阶负责文字及交互状态。', foundationRamp('品牌红 · brand/red/1–10',redScale,['浅背景','浅底悬停','错误边框','辅助强调','外壳悬停','品牌默认','外壳按下 / 错误正文','高对比红','深色强调','最深背景']) + foundationRamp('内容蓝 · primary/blue/1–10',blueScale,['选中浅底','浅底悬停','信息边框','辅助蓝 / 边框悬停','图标辅助','业务默认','悬停 / 信息正文','按下','深色强调','最深背景'])),
      foundationSection('03','组件状态与颜色语义','主按钮使用固定色阶，文字或图标透明度不能代替按钮的状态颜色。', `<div class="sp-state-examples">${states.map(([name,color,token,usage],i)=>`<div><span class="sp-button-sample ${i===3?'is-focus':''} ${i===4?'is-disabled':''}" style="background:${color}">${i===5?'<i class="sp-loading-symbol" aria-hidden="true"></i>':''}${i===5?'加载中':'主要操作'}</span><h3>${name}</h3><code>${token}</code><p>${usage}</p></div>`).join('')}</div>${table(['语义 Token','值','使用范围'],[['color/shell/brand/default',colorChip('#F70000'),'品牌导航、Logo'],['color/shell/brand/hover',colorChip('#FF3029'),'深色外壳悬停强调'],['color/shell/brand/active',colorChip('#D10007'),'外壳按下'],['color/content/primary/default',colorChip('#124DEE'),'主操作、链接、分页当前页'],['color/content/primary/hover',colorChip('#0633C7'),'内容交互悬停'],['color/content/primary/active',colorChip('#0020A1'),'内容按下'],['color/content/primary/subtle',colorChip('#E6F1FF'),'表格选中行、轻量提示背景']])}`),
      foundationSection('04','信息、成功、警告与错误','浅背景用 1 阶、边框用 3 阶、图标用 6 阶、正文用 7 阶。', `<div class="sp-semantic-examples">${[['信息','任务正在执行','#E6F1FF','#8FB8FF','#124DEE','#0633C7'],['成功','任务已完成','#E7F1E2','#C1D7BA','#55B144','#3A8B2E'],['警告','请检查资源容量','#FFF5E8','#FFCB96','#EC6F1A','#C6510C'],['错误','配置保存失败','#FFEAE6','#FF887A','#F70000','#D10007']].map(([name,copy,bg,border,icon,text],index)=>`<div><h3>${name}</h3><div data-native="semantic-${['info','success','warning','error'][index]}"></div><dl><dt>背景 / 边框</dt><dd>${bg} / ${border}</dd><dt>图标 / 正文</dt><dd>${icon} / ${text}</dd></dl></div>`).join('')}</div><p>信息色复用内容蓝。品牌红表达品牌识别，错误红表达失败与阻断，二者语义不能混淆。</p>`),
      foundationSection('05','中性色与透明度','实色色阶定义表面材料；预定义透明度定义文字、图标和边界层级。', `<div class="sp-neutral-ramp">${['#FFFFFF','#F7FAFE','#F1F5F9','#E2E8F0','#CBD5E1','#94A3B8','#64748B','#475569','#334155','#1E293B','#000B23','#080D18','#000000'].map(color=>`<div><span style="background:${color}"></span><code>${color}</code></div>`).join('')}</div>${table(['语义','浅色值','用途 / 实际示例'],[['主要文字','rgba(0,11,35,.85)','<span style="color:rgba(0,11,35,.85)">页面标题、主字段</span>'],['次要文字','rgba(0,11,35,.65)','<span style="color:rgba(0,11,35,.65)">说明文字、元数据</span>'],['辅助文字','rgba(0,11,35,.45)','<span style="color:rgba(0,11,35,.45)">弱提示、时间戳</span>'],['禁用文字','rgba(0,11,35,.25)','<span style="color:rgba(0,11,35,.25)">不可操作状态</span>'],['普通边框','rgba(0,11,35,.15)','输入框、卡片、表格边界'],['分割线 · Figma 基础值','rgba(0,11,35,.10)','基础画板中的弱分割'],['强边框','rgba(0,11,35,.25)','需要更强的对象边界']])}<p>遮罩、阴影与导航叠层可使用预定义透明度；完整控件不使用 opacity 来制造悬停、按下或禁用。</p>`),
      foundationSection('06','明暗模式映射','浅色以 #000B23 为文字基色；深色以白色透明度建立文字层级，并使用五阶黑灰表面。', `<div class="sp-theme-comparison">${[false,true].map(dark=>`<div class="sp-theme-sample ${dark?'is-dark':''}"><h3>${dark?'深色模式':'浅色模式'}</h3><strong>资源配置</strong><p style="opacity:.85">主要文字 · 85%</p><p style="opacity:.65">次要信息 · 65%</p><p style="opacity:.45">辅助说明 · 45%</p><p style="opacity:.25">禁用状态 · 25%</p><span class="sp-button-sample" style="background:#124DEE">保存配置</span></div>`).join('')}</div>${darkMappingTable()}<p>完整映射按 Figma 逐项列出。深色链接、焦点与选中图标使用 #6699FF；实心主按钮背景默认仍为 #124DEE，两者不能混用。表格中外壳颜色独立于业务内容表面；状态浅底仅用于小面积语义提示。</p>`),
      foundationSection('07','明暗对比与可读性','以下对比度按实际前景 / 背景计算；普通文字参考 4.5:1，大字参考 3:1。', table(['前景 / 背景','对比度','普通文字判断'],[['#FFFFFF','#124DEE'],['#FFFFFF','#3C75FA'],['#FFFFFF','#F70000'],['#FFFFFF','#D10007'],['#FFFFFF','#141414']].map(([fg,bg])=>{const ratio=contrastRatio(fg,bg);return [`<span class="sp-contrast-sample" style="color:${fg};background:${bg}">文字 Aa</span><code>${fg} / ${bg}</code>`,ratio.toFixed(2)+':1',ratio>=4.5?'通过 4.5:1':'低于 4.5:1，不承载普通小字'];})) + '<p>白字业务主按钮使用 blue/6 → blue/7 → blue/8；blue/5 不作为白字按钮悬停色。品牌红 #F70000 用于识别，高对比白字红按钮从 #D10007 起。辅助灰字不承担关键操作或重要错误说明。</p>'),
      foundationSection('08','字体、字号与行高','中文首选 PingFang SC，Windows 使用 Microsoft YaHei；英文与数字使用系统字体后备。', table(['层级','字号 / 行高','字重','示例','使用场景'],typography.map(([name,size,line,weight,sample,usage])=>[name,`${size} / ${line}`,weight,`<span style="font-size:${size}px;line-height:${line}px;font-weight:${weight}">${sample}</span>`,usage])) + table(['规则','口径'],[['字体栈','PingFang SC / Microsoft YaHei / Helvetica / Arial / sans-serif'],['Figma 预览','缺少产品系统字体时可使用 Noto Sans SC 预览，不更改产品字体'],['字距与数字','中文字距 0；表格、IP、时间、版本号启用 tabular-nums'],['字重','正文 400；操作 / 强调 500；标题 / 选中 600；核心数字 700'],['展示扩展','40/48、48/56、56/64、64/72，仅用于官网、大屏、展示页'],['文案','中英文、数字间留半角空格；菜单、按钮、标签末尾不加句号']])) ,
      foundationSection('09','间距系统与圆角','以 4px 为基础；后台默认、内部微距、补充档、展示扩展各有用途。', table(['分类','间距','场景与限制'],[['内部微距','2px','控件内部微调，不用于页面与模块布局'],['后台默认','4px','图标、Tag 内部等极紧密关系'],['后台默认','8px','按钮图文、输入内边距、面包屑间隔'],['后台默认','12px','按钮组、紧凑筛选项'],['后台默认','16px','模块内部、组件间、标题到内容、表格到分页'],['表单项固定间距','20px','完整表单项（含报错 / 说明）之后到下一项标签顶部；新增文字撑高当前项，后续项整体下移'],['补充档','20px','中等 padding、特定组件对齐，不作为页面主节奏'],['后台默认','24px','页面 padding、工具栏外间距'],['补充档','28px','有明确原因的特殊布局'],['结构分隔','32px','弹窗 / 抽屉内边距、表单分组'],['低频留白','40 / 48px','明显分区、结果页、空状态'],['补充档','56px','壳层固定尺寸或特殊留白'],['后台上限','64px','重要结构分区'],['展示扩展','80 / 96 / 240px','官网、大屏、品牌展示，普通后台不默认使用']]) + '<div class="sp-spacing-examples">'+[4,8,12,16,24,32].map(value=>`<div><span>${value}px</span><i style="width:${value}px"></i></div>`).join('')+'</div><p>普通业务控件、重复卡片的圆角沿用现有组件 Token，通常不超过 8px。两个 Figma 画板没有另行定义圆角体系。</p>'),
      foundationSection('10','来源与项目约定','基础规范来自两个 Figma 画板；已确认的具体业务例外单独标明。', table(['项目例外','当前 DemoKit 口径'],[['危险操作','Figma 基础为错误色阶 #D10007 → #AB000B → #84000D；当前已确认删除入口中性、确认主按钮蓝色。'],['表单节奏','独立表单项固定 20px；报错、帮助文字属于当前项，出现后撑高当前项，后续项自然下移，项间仍保持 20px。分区间距 24px。'],['普通弹窗标题','大型浮层按画板 20/28；当前普通弹窗标题沿用已确认的 16px。'],['结构分割线','基础画板弱分割为 10%；当前 DemoKit 普通结构分割线已确认统一 15%。']]) + '<p class="sp-reference">Figma 来源：<a href="https://www.figma.com/design/wwmuZDnWcZ3GNL7HssXogZ?node-id=1966-7038" target="_blank" rel="noopener">色彩语义与组件状态</a> · <a href="https://www.figma.com/design/wwmuZDnWcZ3GNL7HssXogZ?node-id=1966-5077" target="_blank" rel="noopener">间距与排版字号</a></p>')
    ].join('');
  }

  const docs = {
    foundations: {
      title: '色彩 / 字体 / 间距', summary: 'XDesign 2.1 基础规范：品牌与内容双主轴、组件状态、明暗模式、文字层级和间距系统。',
      anchors: ['品牌与内容主色', '红蓝色阶', '组件状态', '语义状态色', '中性色与透明度', '明暗模式', '对比度', '字体与字号', '间距与圆角', '来源与项目约定'],
      body: foundationsBody()
    },
    visualization: {
      title: '数据可视化', summary: '按分析任务分类，对照每种图表的适用场景、优势与限制。',
      anchors: ['分类与选型', ...chartFamilies.map(family => family.title), '统一规范', '状态与联动'],
      body: visualizationBody()
    },
    components: { title: '组件体验', summary: '', body: '' },
    navigation: {
      title: '返回按钮 / 面包屑', summary: '返回按钮回到来源页；面包屑进入指定层级。按场景选择对应入口。',
      anchors: ['返回按钮', '面包屑'],
      body: `${scenario('返回按钮：从哪里进入，就回到哪里', '<p>二级页面的返回按钮位于内容区左上角、页面标题左侧。返回目标是本次进入的来源页，不固定为某个列表。</p><p>来源可能是列表、详情或首页。返回时应恢复来源页的筛选、分页等上下文。</p><p>直接通过链接进入、没有来源记录时，使用业务明确指定的上级页面；不要退到未知的外部页面。</p>', '<div data-native="return-demo"></div>')}
      ${scenario('面包屑：按信息层级进入上级', '<p>需要说明当前位置、允许跨层级访问时，在内容区左上角显示面包屑。</p><p>面包屑按固定的信息层级导航，不等同于返回来源。上级可点击，当前页只展示。</p><p>一级页面无需凭空增加返回按钮；有清晰返回任务时才提供返回入口。</p>', '<div data-native="breadcrumb-demo"></div>')}`
    },
    pagination: {
      title: '分页器', summary: '先看表格承担什么任务，再根据数据条数和页数显示操作。',
      anchors: ['组件构成', '主表格', '精简表格', '显示规则'],
      body: `<section><h2>组件构成</h2><p>从左到右依次为总条数、翻页、每页条数、快速跳页。</p><div data-native="pagination-parts"></div></section>
        <section><h2>场景一：主表格</h2><p>表格是页面的主要任务，用户持续在此查找、筛选和处理数据，例如当前告警列表。</p><p>空数据不显示；单页保留总条数、翻页和每页条数；多页增加快速跳页。</p><div data-native="pagination-main"></div></section>
        <section><h2>场景二：精简表格</h2><p>表格是辅助信息，例如详情页中的网卡列表、弹窗或抽屉中的关联记录。</p><p>采用 Ant Design 简洁分页：保留总条数，多页时显示“上一页 / 当前页 / 总页数 / 下一页”，当前页可直接输入；不展开完整页码，不提供每页条数选择或独立跳转按钮。单页仅显示总条数，空数据不显示。</p><div data-native="pagination-compact"></div></section>
        <section><h2>显示规则</h2>${table(['类型', '数据状态', '总条数', '翻页', '每页条数', '快速跳页'], [
          ['主表格', '空数据', no, no, no, no], ['主表格', '单页有数据', yes, yes, yes, no],
          ['主表格', '多页', yes, yes, yes, yes],
          ['精简表格', '空数据', no, no, no, no], ['精简表格', '单页有数据', yes, no, no, no],
          ['精简表格', '多页', yes, yes, no, no]
        ], true)}<p class="sp-note">页数按当前每页条数计算。单页的前后翻页不可用；切换每页条数后，按新页数更新显示。以上为本项目约定。</p></section>`
    },
    form: {
      title: '表单', summary: '先理清业务关系，再选择布局。字段并排与标题左右排，是两个不同的决定。',
      anchors: ['默认上下排', '分组与字段并排', '可选左右排', '职责分工'],
      body: `${scenario('场景一：简单任务，默认上下排', '<p><strong>什么时候用</strong><br>创建、编辑或配置任务。页面、弹窗、抽屉均采用这一默认方式。</p><p><strong>怎么排</strong><br>标题在上、输入框在下；从上到下阅读。输入框左对齐，保留合适宽度。</p><p><strong>固定 20px 项间距</strong><br>从完整表单项底部到下一项标签顶部始终为 20px。当前项包含输入框、校验报错和说明文字；报错或说明新增一行、多行时，当前项自然撑高，后续内容整体下移，不能占用这 20px，也不能覆盖下一项。</p><p>横向筛选行中，查询、重置等按钮与输入框、选择器、日期框的控件底边对齐。行间距由外层布局统一控制，不叠加单个字段的 20px 下边距；空间不足时整组按钮换行。普通纵向表单仍保留完整表单项之间 20px 的间距。</p><p>清空右侧“名称”并移出焦点，可触发多行报错；重新填写后恢复。</p>', '<div class="sp-example-caption">标题在上 · 控件在下</div><div data-native="form-vertical"></div>')}
        ${scenario('场景二：字段较多，按业务关系分组', '<p><strong>先确定什么</strong><br>业务方提供字段依赖、分组和填写顺序，例如“基本信息”和“网络设置”。</p><p><strong>怎么排</strong><br>用组标题划清层级。相关且简短的字段可并排，标题仍在输入框上方。</p><p class="sp-note">分组帮助理解；只有合理并排才会减少高度。长内容仍单列展示。</p>', '<div class="sp-example-caption">按业务分组 · 相关短字段并排</div><div data-native="form-grouped"></div>')}
        ${scenario('场景三：高度受限，评估标题左右排', '<p><strong>什么时候考虑</strong><br>表单仍较长、垂直空间受限，且标签简短、输入区能保留足够宽度。</p><p><strong>谁来决定</strong><br>设计师根据标签长度和输入区宽度确定统一标签列。沿用 Ant Design 原生左对齐：星号与文字作为标签整体排列，输入框统一起点。必填星号在上下排、左右排中都放在标签前，长标签由组件换行。</p><p class="sp-note">长内容使用多行输入，解释性文案放在控件下方；下一项从完整内容下方间隔 20px。若标签频繁换行、输入区拥挤，整张表单采用上下排。<br>参考 <a href="https://ant.design/components/form/#form-demo-layout-can-wrap" target="_blank" rel="noopener">Ant Design「标签换行」示例</a>，其中同时包含必填和非必填的长标签。</p>', '<div class="sp-example-caption">Ant Design 原生标签 · 长短与必填混排</div><div data-native="form-horizontal"></div>')}
        <section><h2>谁来决定</h2>${table(['业务方', '设计师', '开发 / AI'], [['给出字段含义、依赖关系、分组要求和填写顺序。', '据此确定分组层级、列数和标题位置。', '按明确的布局和组件实现。']])}<p class="sp-reference">参考 <a href="https://ant.design/docs/spec/research-form-cn/" target="_blank" rel="noopener">Ant Design 表单页</a>；以上默认布局为本项目约定。</p>${demoLink('kit/modal-drawer', '打开弹窗与抽屉 Demo')}</section>`
    },
    empty: {
      title: '异常状态', summary: '先区分当前状态，再选尺寸和居中区域。切图与文字始终作为一个整体。',
      anchors: ['状态判断', '切图资源', '尺寸与间距', '下拉菜单', '页面级表格', '弹窗 / 抽屉', '二级页面'],
      body: `${scenario('先判断：是没有数据，还是出现异常？', '<p>确实没有记录，用“暂无数据”；筛选未命中，用“无搜索结果”。</p><p>权限、网络或加载问题，使用对应状态。操作成功属于结果反馈，不用“暂无数据”代替。</p>', '<div class="sp-state-pair"><div><img src="media/517e7b0f588ff84e9e.webp" alt="暂无数据"><b>暂无数据</b><span>当前没有记录</span></div><div><img src="media/813c3b41d89c8390b1.webp" alt="无搜索结果"><b>无搜索结果</b><span>条件没有匹配到记录</span></div></div>')}
        <section><div class="sp-section-head"><h2>选择对应切图</h2><div class="sp-size-switch" role="group" aria-label="切图尺寸"><button type="button" data-size="160" aria-pressed="true">常规 160px</button><button type="button" data-size="112" aria-pressed="false">紧凑 112px</button></div></div><div class="sp-assets">${assets.map(([name, file]) => `<button type="button" class="sp-asset" data-zoom="${window.__xdAsset('empty-state-assets/'+file)}" data-caption="${name} · 原始切图 480 × 320" aria-label="放大${name}切图"><img src="${window.__xdAsset('empty-state-assets/'+file)}" alt="${name}切图"><strong>${name}</strong></button>`).join('')}</div></section>
        <section><h2>尺寸和间距</h2>${table(['场景', '切图高度', '位置'], [
          ['页面级表格、弹窗、抽屉、二级页面', '160px', '切图 + 文字整体居中。'],
          ['列表、卡片、响应式首页模块', '112px', '切图 + 文字整体居中。']
        ])}<p>切图与文字间距 <strong>8px</strong>。原始切图 <strong>480 × 320px</strong>，保持比例缩放；160px、112px 均指切图高度。</p>
        </section>
        ${scenario('下拉菜单：暂无可选项', '<p>没有可选项时，使用本规范的“暂无数据”切图与文字。切图按紧凑尺寸 112px 宽等比缩放，沿用现有图文间距与文字样式。</p><p>图文整体在弹层内居中；下拉宽度跟随输入框。点击右侧下拉查看。</p>', '<div data-native="select-empty"></div>')}
        ${scenario('页面级表格', '<p>独立列表页建议填满剩余内容区；空数据时保留表头，隐藏分页器。顶部没有筛选区时，表格自然获得更多高度。</p><p>下方预览提供无筛选区的完整页面，可对比自适应高度与固定 240px 的空数据区。240px 仅为本次对比值。</p>' + demoLink('kit/empty-table-preview', '查看无筛选空表格高度预览'), shot('empty-state-table.png', '页面级表格', '', 'sp-table-shot'))}
        ${scenario('弹窗 / 抽屉', '<p>内容区不包含标题栏；若有固定的底部操作区，也不包含底部操作区。右侧为实际弹窗。</p>', shot('empty-state-modal.png', '弹窗 / 抽屉', '', 'sp-modal-shot'))}
        ${scenario('二级页面', '<p>内容区从页面标题栏下方开始，到页面正文底部；顶部返回入口保留。</p>' + demoLink('kit/exception-status', '打开异常状态 Demo'), shot('empty-state-secondary-page.png', '二级页面', '', 'sp-page-shot'))}`
    },
    modalPosition: {
      title: '弹窗与抽屉', summary: '按任务选择容器：少量填写用普通弹窗，复杂编辑用抽屉，重要操作先确认。',
      anchors: ['普通表单','复杂表单','二次确认','抽屉','轻量确认','居中与滚动','提交反馈'],
      body: `${scenario('普通表单：完成一件小事', '<p><strong>什么时候用</strong><br>编辑名称、描述、端口等少量字段，不需要离开当前页面。</p><p>默认 520px 宽；字段沿用原组件宽度。填写完成后保存，取消则放弃本次操作。</p>', '<div data-native="scene-form"></div>')}
      ${scenario('复杂表单：明确分组与校验', '<p>以“创建用户”为例，将账号信息和权限配置分组，展示必填项、密码强度和校验提示。</p><p>该场景沿用 680px 宽度。字段不是全部拉满；如果出现大量分区或长流程，应改用抽屉或独立页面。</p>', '<div data-native="scene-complex"></div>')}
      ${scenario('二次确认：先讲清楚后果', '<p>发布、删除或提交前，需要用户作出明确决定时使用。</p><p>标题说明动作，正文说明对象和影响；按钮写“确认提交”“删除”等明确动作，而不是含糊的“确定”。</p>', '<div data-native="scene-confirm"></div>')}
      ${scenario('抽屉：保留原页面上下文', '<p>查看对象详情、分区编辑时，从右侧展开。关闭后继续停留在原列表。</p><p>可以切换详情、编辑和多级抽屉，查看现有场景的不同尺寸。底部操作固定，长正文在内部滚动。</p>', '<div data-native="scene-drawer"></div>')}
      ${scenario('轻量确认：在操作旁边确认', '<p>后果简单、说明简短时，使用紧邻操作点的 Popconfirm。</p><p>取消后不改变数据；确认后反馈结果。不可逆且影响范围大的操作，改用二次确认弹窗。</p>', '<div data-native="scene-popconfirm"></div>')}
      ${scenario('统一居中，长内容只滚动正文', '<p>所有弹窗上下左右居中；短内容自然撑高，上下至少各留 48px。</p><p>最大整体高度 = 视口高度 − 96px。达到上限后只滚动正文，标题和底部按钮保持可见。</p><p>切换屏幕高度观察位置，再滚动长内容查看操作区。</p>', '<div data-native="modal-metrics"></div>')}
      ${scenario('提交反馈：等待期间不重复提交', '<p>点击“开始部署”后显示加载状态；完成后关闭弹窗并反馈结果。</p><p>校验失败时保留输入，并指出需要修正的位置。可在上方“创建用户”示例中直接尝试。</p>', '<div data-native="scene-feedback"></div>')}`
    },
    feedback: {
      title: '全局提示', summary: '短反馈用 Message；复杂通知用 Notification；需要持续阅读的信息用 Alert。尺寸为本项目约定。',
      anchors: ['如何选择', 'Message', 'Notification', 'Alert', '数量与关闭'],
      body: `<section><h2>先按用途选择，不按底色选择</h2>${table(['遇到的情况', '使用组件 / 位置', '退出方式'], [['用户刚完成保存、复制等操作，只需一句反馈', 'Message · 页面顶部居中浮层，不占布局', '默认 3 秒消失'], ['后台任务、系统事件；需要说明原因或提供后续操作', 'Notification · 右上角浮层，不占布局', '普通通知 4.5 秒；需处理时手动关闭'], ['当前页面有持续影响操作的条件，如维护、权限限制', 'Alert · 内容区顶部或对应分区内，占据布局', '不自动消失；条件解除后移除'], ['某个字段填错 / 危险操作待确认 / 完整流程结束', '分别用字段校验 / Modal 或 Popconfirm / Result', '不使用全局提示替代']])}<p>Message、Notification 统一白色浮层；Alert 用语义浅底。不是“临时白底、常驻蓝底”：蓝底只表示信息，持续的错误仍用红色。以下尺寸、时长、数量为本项目约定；组件能力参考 <a href="https://ant.design/components/message-cn/" target="_blank" rel="noopener">Ant Design</a>。</p></section>
      ${scenario('Message：一句话结果，顶部居中', '<p>用户刚完成保存、复制等操作，只需一句结果时使用。统一 3 秒自动消失，不带关闭叉号，不提供手动保留。</p><p>宽度随内容变化，80–560px，窄屏最多为视口减 32px。最多两行；需要解释原因或后续处理时改用右上角 Notification。</p><p>唯一例外是加载中：等待任务结束后，同一条更新为成功或失败，再于 3 秒后消失。</p>', '<div data-native="feedback-message"></div>')}
      ${scenario('Notification：原因、影响与下一步', '<p>默认 384px；紧凑 320px、详细 480px，窄屏最多为视口减 32px。标题概括事件，正文解释原因和下一步。</p><p>默认显示叉号、4.5 秒自动关闭，悬停暂停计时。需要处理、重试或阅读较长内容时不自动关闭，必须保留叉号。</p><p>关闭不等于问题已解决；关键失败同时保留任务记录或页面内状态，不把通知当唯一记录。</p>', '<div data-native="feedback-notification"></div>')}
      <section><h2>Alert：当前页面持续有效的条件</h2><p>放在受影响页面或分区的内容顶部，不悬浮；宽度随容器，文字区最大 960px。简短型只写一句，详细型使用标题 + 原因 / 影响 / 下一步；不另造固定大中小高度。</p><div data-native="feedback-alert"></div><p>维护、权限不足、无法继续操作等必要信息不允许关闭，条件解除后移除；非阻断的帮助说明可关闭。普通保存成功使用 Message，不长期挂绿色条。相同条件只展示一条，同一区域最多同时两条，错误优先、一般说明合并。</p></section>
      <section><h2>多条、重复、关闭：统一处理规则</h2>${table(['情况', '本项目规则'], [['多条浮层', 'Message、Notification 各最多 3 条；第 4 条替换最早一条。示例连续发 5 条，只留下最后 3 条。'], ['同一任务持续更新', '沿用相同 key：加载 → 成功 / 失败，不能重复新增。重新触发单条示例会更新原条。'], ['同类高频事件 / 批量任务', '合并为“5 项完成，2 项失败”，进入详情查看，不逐条轰炸；大量事件进入通知中心或任务列表。'], ['自动关闭', 'Message 3 秒；普通 Notification 4.5 秒。不展示数字倒计时。'], ['必须手动关闭', '需处理的通知保留叉号；加载由任务结果替换。关闭提示不取消任务，也不标记故障已恢复。'], ['页面离开 / 内容较长', '页面级提示随页面清理；全局后台任务由应用级通知承载。长内容换行，不挤出屏幕，不以省略号隐藏关键原因。']])}<p class="sp-note">失败应包含可执行的下一步；重试必须真正连接原操作。此处“清空演示”仅清理示例，不执行任何业务请求。</p></section>`
    },
    pageLayout: {
      title: '二级页面布局', summary: '先看任务需要多大空间，再选择居中、锚点或全宽布局。',
      anchors: ['标准居中型','锚点页面','全宽型','屏幕适配'],
      body: `${scenario('标准居中型：集中完成普通任务', '<p>适用于基础信息、普通表单和确认信息。内容集中在页面中部，避免字段横跨整个屏幕。</p><p>右侧工作区不包含左侧导航。容器最大 1240px，外侧至少各留 24px，容器内左右各 24px。</p>', '<div data-native="page-standard"></div>')}
      ${scenario('锚点页面：快速到达指定分区', '<p>信息较长且存在明确分组时使用。目录对应本页分区，不跳到其他业务页面。</p><p>点击预览中的锚点，查看正文滚动与当前位置的关系。</p>', '<div data-native="page-anchor"></div>')}
      ${scenario('全宽型：给密集内容足够空间', '<p>以创建在线服务的“参数配置”步骤为例：左侧选择资源规格，右侧展示并编辑该规格的运行参数。左右各留 24px，不设 1240px 上限。</p><p>这是二级页面内的全宽布局，不是一级列表。点击左侧规格卡片，右侧参数随选择联动；可切换配置与自定义参数。</p>', '<div data-native="page-wide"></div>')}
      <section><h2>切换屏幕宽度，对照真实页面</h2><div data-native="page-metrics"></div><p>以导航总宽 280px 为例，1920px 屏幕对应 1640px 工作区；居中容器为 1240px，两侧各留 200px。</p><p class="sp-note">工作区宽度不超过 1288px 时，居中容器随之缩小并保持两侧 24px。导航收起后按实际工作区重新计算。</p></section>`
    },
    buttons: {
      title: '按钮与图标', summary: '以文字说明操作，图标帮助识别或节省空间。同一组保持一致，不把图标当装饰。',
      anchors: ['使用规则', '主操作与弹窗', '工具栏与行操作', '文案旁操作', '图标加文字', '更多操作', '高风险操作', '颜色与一致性'],
      body: `<section><h2>哪些按钮需要图标？</h2>${table(['按钮类型', '图标规则', '例子'], [
        ['主操作、确认与取消', '通常不加，直接用文字说明。', '创建、保存、提交；取消、确认'],
        ['工具栏操作', '纯图标默认深灰、悬停变蓝，提供操作提示。', '刷新、下载、设置、全屏'],
        ['表格行操作', '纯图标默认深灰、悬停变蓝；高风险操作优先保留文字。', '编辑、复制、查看'],
        ['文案旁操作', '使用无底无框的纯图标，默认深灰，悬停变蓝。', '编辑描述、复制调用地址'],
        ['导入、导出、搜索与筛选', '图标 + 文字；搜索框可配搜索图标。', '上传、导出、下载模板、筛选'],
        ['下拉菜单、更多操作', '文字 + 下拉箭头，或带提示的更多图标。', '更多、导出格式'],
        ['高风险操作', '文字优先，不仅靠图标表达。', '删除、重置、停用']
      ])}<p>字段标题、描述文案和表格状态旁的帮助入口统一使用 Ant Design 描边问号，悬停查看说明。页面提示、消息、通知、弹窗、轻量确认和校验反馈中的状态图标使用 Ant Design 实心有底版本。</p></section>
      ${scenario('主操作与弹窗：使用纯文字', '<p>页面核心操作用明确的动词，例如创建、保存、提交。主操作用蓝色，次要操作用默认按钮。</p><p>弹窗底部的取消、确认默认不加图标；同一操作区只突出一个主操作。</p>', '<div data-native="buttons-primary"></div>')}
      ${scenario('工具栏与表格行：用图标节省空间', '<p>刷新、设置、重试等纯图标统一默认深灰，悬停时只将图标变为内容蓝 #124DEE，底色和边框保持原样。文案旁的图标保持无底无框。</p><p>每个纯图标按钮都提供 Tooltip，并有可访问的操作名称。键盘聚焦保留焦点框；带文字的链接、主操作、状态图标不套用此规则。</p><p>表格操作列中的文字操作统一间距 <strong>12px</strong>，主表、展开子表、弹窗和抽屉表格保持一致。链接按钮不额外增加左右内边距；“更多”文字与箭头的内部间距沿用组件设置。</p>', '<div data-native="buttons-tools"></div>')}
      ${scenario('文案旁操作：图标跟随内容', '<p>编辑、复制图标紧跟对应文案，始终可见。同组默认用深灰 rgba(0, 11, 35, 0.65)，无底无框；悬停用内容蓝 #124DEE，键盘聚焦显示焦点框。</p><p>粘贴仅在可编辑状态下使用，不在只读文案旁展示粘贴入口。操作是当前任务的关键步骤时，放到区块标题旁或操作区，用明确的文字强调。</p>', '<div data-native="buttons-inline"></div>')}
      ${scenario('导入导出、搜索筛选：图标辅助文字', '<p>导入、导出、上传和下载模板，使用图标加文字，减少对图标含义的猜测。</p><p>搜索图标用于触发查询；筛选、排序等操作保留名称。同类图标使用同一套图标库与尺寸。</p>', '<div data-native="buttons-text-icons"></div>')}
      ${scenario('更多操作：明确表示还有菜单', '<p>有空间时使用“更多”加下拉箭头；紧凑工具栏可用纯图标，并提供“更多操作”的提示。</p><p>下拉箭头表达展开行为，放在文字右侧。</p>', '<div data-native="buttons-more"></div>')}
      ${scenario('高风险操作：保留文字，说明后果', '<p>删除、重置、停用等操作优先显示文字，避免只靠图标识别。</p><p>按本项目约定，入口使用常规文字颜色，不默认使用红色。确认时说明操作对象和后果。</p>', '<div data-native="buttons-risk"></div>')}
      ${scenario('颜色与同组一致性', '<p>蓝色主按钮用于核心操作；默认按钮用于次要操作和工具操作。</p><p>同一功能组的同类按钮统一带图标或统一不带；图标库、尺寸、颜色和线条风格保持一致。</p><p class="sp-note">文字操作与独立工具栏分组摆放；下拉箭头属于功能提示，不作为装饰图标处理。</p>', '<div data-native="buttons-consistency"></div>')}`
    }
  };

  let host, observedWorkspace, dialog;
  let mountedRoots = [];
  const modeMemory = { specRoute: 'spec-foundations', scroll: {} };
  let restoreComponentScroll = false;
  let scheduled = false;
  const pageState = { main: { total: 80, size: 20 }, compact: { total: 80, size: 20 } };
  let openedDetailHash = '';

  function getHost() {
    if (!host) {
      host = document.createElement('div');
      host.className = 'xd-spec-host';
      host.setAttribute('aria-label', '设计规范');
      host.addEventListener('click', handleClick);
      host.addEventListener('scroll', updateAnchor, { passive: true });
      document.body.append(host);
    }
    return host;
  }

  function syncBounds() {
    const workspace = document.querySelector('.workspace');
    if (!workspace || !host) return;
    if (workspace !== observedWorkspace && 'ResizeObserver' in window) {
      observedWorkspace = workspace;
      new ResizeObserver(syncBounds).observe(workspace);
    }
    const r = workspace.getBoundingClientRect();
    Object.assign(host.style, { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` });
  }

  function unmountWidgets() {
    mountedRoots.forEach(root => root.unmount());
    mountedRoots = [];
  }

  function mountWidgets() {
    const ui = window.__xdSpecComponents;
    if (!ui || !host?.classList.contains('is-open')) return;
    const { React: R, ConfigProvider, Pagination, Select, Input, Button, Form, Breadcrumb } = ui;
    const h = R.createElement;
    const select = (value, onChange, options, width = 140) => h(Select, { value, onChange, options, style: { width, maxWidth: '100%' } });
    const sizeOptions = [10, 20, 50, 100].map(value => ({ value, label: `${value} 条/页` }));

    function QuickJump({ pages, current, onChange }) {
      const [value, setValue] = R.useState('');
      const valid = /^\d+$/.test(value) && Number(value) >= 1 && Number(value) <= pages;
      R.useEffect(() => setValue(''), [pages, current]);
      const jump = () => { if (valid) { onChange(Number(value)); setValue(''); } };
      return h('span', { className: 'sp-quick-jump' }, '至', h(Input, { value, 'aria-label': '跳转页码', inputMode: 'numeric', style: { width: 50 }, onChange: event => setValue(event.target.value), onPressEnter: jump }), '页', h(Button, { type: 'text', disabled: !valid, className: 'sp-jump-action', onClick: jump }, '跳转'));
    }

    function Parts() {
      const [size, setSize] = R.useState(20);
      const [current, setCurrent] = R.useState(1);
      const parts = [
        ['1', '总条数', h('span', null, '共 200 条'), '说明当前一共有多少条数据。'],
        ['2', '翻页', h(Pagination, { current, onChange: setCurrent, total: 200, pageSize: size, showSizeChanger: false, showLessItems: true, size: 'small' }), '查看指定页'],
        ['3', '每页条数', select(size, value => { setSize(value); setCurrent(1); }, sizeOptions, 112), '调整每页数量'],
        ['4', '快速跳页', h(QuickJump, { pages: Math.ceil(200 / size), current, onChange: setCurrent }), '直接前往目标页']
      ];
      return h('div', { className: 'sp-anatomy-scroll' }, h('div', { className: 'sp-pagination-anatomy' }, ...parts.map(([n, title, control]) => h('div', { className: 'sp-anatomy-part', key: n }, h('div', { className: 'sp-anatomy-control' }, control), h('div', { className: 'sp-anatomy-label' }, h('span', { className: 'sp-number' }, n), title)))));
    }

    function PagingDemo({ mode }) {
      const [total, setTotal] = R.useState(pageState[mode].total);
      const [size, setSize] = R.useState(pageState[mode].size);
      const [current, setCurrent] = R.useState(1);
      const pages = Math.ceil(total / size);
      const updateTotal = value => { pageState[mode].total = value; setTotal(value); setCurrent(1); };
      const updateSize = value => { pageState[mode].size = value; setSize(value); setCurrent(1); };
      let footer;
      if (!total) footer = h('span', { className: 'sp-muted' }, '空数据：不显示分页器');
      else if (mode === 'compact') footer = pages === 1 ? h('span', null, `共 ${total} 条`) : h(Pagination, { simple: true, current, total, pageSize: size, showSizeChanger: false, showQuickJumper: false, showTotal: value => `共 ${value} 条`, onChange: setCurrent });
      else footer = h('div', { className: 'sp-main-paging' }, h(Pagination, { current, total, pageSize: size, hideOnSinglePage: false, showSizeChanger: true, pageSizeOptions: [10, 20, 50, 100], showTotal: value => `共 ${value} 条`, showQuickJumper: false, onChange: (page, nextSize) => { if (size !== nextSize) updateSize(nextSize); else setCurrent(page); } }), pages > 1 && h(QuickJump, { pages, current, onChange: setCurrent }));
      const state = !total ? '空数据' : total < size ? '不足一页' : pages === 1 ? '正好一页' : '多页';
      return h('div', { className: 'sp-live-example' }, h('div', { className: 'sp-controls' }, h('label', null, h('span', null, '示例数据'), select(total, updateTotal, [0, 8, 20, 80, 200].map(value => ({ value, label: `${value} 条` })), 110)), h('span', { className: 'sp-demo-state' }, `${state} · 每页 ${size} 条 · 共 ${pages} 页`)), h('div', { className: 'sp-live-footer' }, footer));
    }

    function ReturnDemo() {
      const [source, setSource] = R.useState('任务列表');
      const [detail, setDetail] = R.useState(true);
      return h('div', { className: 'sp-navigation-demo' },
        h('div', { className: 'sp-controls' }, h('span', null, '进入来源'), select(source, value => { setSource(value); setDetail(true); }, ['任务列表','资源详情','首页'].map(value => ({ value, label: value })))),
        h('div', { className: 'sp-demo-page' },
          h('header', { className: 'sp-page-nav-highlight' }, detail && h(Button, { type: 'text', icon: h(ui.LeftIcon), 'aria-label': '返回' + source, onClick: () => setDetail(false) }), h('strong', null, detail ? '任务执行详情' : source)),
          h('div', { className: 'sp-demo-page-body' }, detail ? h('div', null, h('p', null, '任务名称：资源配置任务'), h('p', null, '执行状态：已完成'), h('p', null, '所属资源：Server-01')) : h(Button, { onClick: () => setDetail(true) }, '进入任务详情'))),
        h('p', { className: 'sp-note', 'aria-live': 'polite' }, detail ? '左上角返回入口 · 本次返回目标：' + source : '已返回：' + source));
    }

    function BreadcrumbDemo() {
      const [target, setTarget] = R.useState('任务执行详情');
      const labels = ['任务中心', '任务列表', '任务执行详情'];
      return h('div', { className: 'sp-native-breadcrumb sp-demo-page' }, h('div', { className: 'sp-page-nav-highlight' }, h(Breadcrumb, { items: labels.map((title, index) => index === labels.length - 1 ? { title } : { title, href: '#', onClick: event => { event.preventDefault(); setTarget(title); } }) })), h('div', { className: 'sp-breadcrumb-destination', 'aria-live': 'polite' }, `示例目标：${target}`));
    }

    function NativeForm({ type }) {
      const [nameError, setNameError] = R.useState(false);
      const field = (label, value) => h(Form.Item, { label, key: label, ...(label === '名称' ? { required: true, validateStatus: nameError ? 'error' : undefined, help: nameError ? '请输入名称。名称用于识别资源，不能为空；请填写后再继续。' : undefined } : {}) }, h(Input, { defaultValue: value, style: { width: '100%', maxWidth: 320 }, ...(label === '名称' ? { onBlur: event => setNameError(!event.target.value.trim()), onChange: event => { if (event.target.value.trim()) setNameError(false); } } : {}) }));
      if (type === 'grouped') return h('div', { className: 'sp-form-scene' }, h('div', { className: 'sp-form-group-title' }, '基本信息'), h(Form, { layout: 'vertical', colon: false, style: { maxWidth: 680 } }, field('名称', '示例资源'), h('div', { className: 'sp-form-row' }, field('数量', '2'), field('规格', '标准'))), h('div', { className: 'sp-form-group-title' }, '网络设置'), h(Form, { layout: 'vertical', colon: false, style: { maxWidth: 320 } }, field('网络', '默认网络')));
      if (type === 'horizontal') {
        return h('div', { className: 'sp-form-scene' }, h(Form, {
          className: 'sp-horizontal-form', layout: 'horizontal', colon: false,
          labelAlign: 'left', labelWrap: true,
          labelCol: { flex: '136px' }, wrapperCol: { flex: 1 }
        },
          field('名称', '示例资源'),
          field('故障恢复后的告警通知方式', '站内消息和邮件'),
          h(Form.Item, { label: '允许同时处理的最大请求数量', required: true },
            h(Input, { defaultValue: '32', 'aria-required': true })),
          h(Form.Item, { label: '描述' }, h(Input.TextArea, {
            defaultValue: '用于承载在线推理服务，统一管理模型调用与资源分配。服务故障恢复后通知维护人员，描述内容可以继续填写，输入区随内容增长。',
            autoSize: { minRows: 3, maxRows: 6 }
          }))));
      }
      return h('div', { className: 'sp-form-scene' }, h(Form, { layout: type, colon: false, labelAlign: 'left', style: { maxWidth: 320 } }, field('名称', '示例资源'), field('描述', '资源描述')));
    }

    function ButtonExamples({ kind }) {
      const [query, setQuery] = R.useState('');
      const [description, setDescription] = R.useState('用于推理服务联调');
      const { Tooltip, Dropdown, Popconfirm, icons } = ui;
      const icon = name => h(icons[name], { style: { fontSize: 16 } });
      const textButton = (label, props = {}) => h(Button, { key: label, ...props }, label);
      const iconButton = (name, label) => h(Tooltip, { title: label, key: label }, h(Button, { icon: icon(name), 'aria-label': label }));
      const row = (...children) => h('div', { className: 'sp-button-row' }, ...children);
      const group = (title, content) => h('div', { className: 'sp-button-group', key: title }, h('div', { className: 'sp-example-caption' }, title), content);
      const menu = { items: [{ key: '导出', label: '导出' }, { key: '设置', label: '设置' }] };
      const more = () => h(Dropdown, { menu, trigger: ['click'] }, h(Button, { icon: icon('down'), iconPosition: 'end' }, '更多'));
      let content;
      if (kind === 'primary') content = [
        group('页面主操作', row(textButton('创建', { type: 'primary' }), textButton('保存'), textButton('提交'))),
        group('弹窗底部操作', row(textButton('取消'), textButton('确认', { type: 'primary' })))
      ];
      if (kind === 'tools') content = [
        group('工具栏', row(iconButton('reload', '刷新'), iconButton('download', '下载'), iconButton('setting', '设置'), iconButton('fullscreen', '全屏'))),
        group('表格行操作', row(iconButton('edit', '编辑'), iconButton('copy', '复制'), iconButton('eye', '查看')))
      ];
      if (kind === 'inline') content = [
        group('描述', h(ui.Typography.Text, { editable: { tooltip: '编辑描述', onChange: setDescription }, copyable: { tooltips: ['复制描述', '已复制'] } }, description)),
        group('调用地址', h(ui.Typography.Text, { copyable: { tooltips: ['复制调用地址', '已复制'] } }, '/v1/chat/completions'))
      ];
      if (kind === 'text-icons') content = [
        group('图标 + 文字', row(textButton('导入', { icon: icon('upload') }), textButton('导出', { icon: icon('download') }), textButton('下载模板', { icon: icon('download') }))),
        group('搜索与筛选', h('div', { className: 'sp-button-search' }, h(Input.Search, { value: query, onChange: event => setQuery(event.target.value), placeholder: '请输入关键词', 'aria-label': '搜索关键词' }), row(h(Dropdown, { trigger: ['click'], menu: { items: [{ key: '全部', label: '全部' }, { key: '运行中', label: '运行中' }] } }, h(Button, null, '筛选', icon('down'))))))
      ];
      if (kind === 'more') content = group('两种入口形式', row(more(), h(Dropdown, { menu, trigger: ['click'] }, h(Tooltip, { title: '更多操作' }, h(Button, { icon: icon('more'), 'aria-label': '更多操作' })))));
      if (kind === 'risk') content = group('入口保留文字', row(...['删除', '重置', '停用'].map(label => h(Popconfirm, { key: label, title: `${label}示例资源？`, description: label === '删除' ? '确认后将移除这条示例记录。' : label === '重置' ? '确认后将恢复这条示例记录的默认配置。' : '确认后这条示例记录将停止使用。', okText: '确认', cancelText: '取消' }, h(Button, null, label)))));
      if (kind === 'consistency') content = [
        group('推荐：同一组统一用纯文字', row(textButton('创建', { type: 'primary' }), textButton('保存'), textButton('取消'))),
        group('推荐：同一组统一带图标', row(textButton('编辑', { icon: icon('edit') }), textButton('复制', { icon: icon('copy') }), textButton('查看', { icon: icon('eye') }))),
        group('不推荐：同类操作只有部分带图标', row(textButton('编辑', { icon: icon('edit') }), textButton('复制'), textButton('查看')))
      ];
      return h('div', { className: 'sp-button-example' }, content);
    }

    function ScaledPage({ width, height, children }) {
      let observer;
      const ref = node => {
        if (!node) { observer?.disconnect(); return; }
        const resize = () => node.style.setProperty('--sp-preview-scale', String(node.clientWidth / width));
        resize();
        observer = new ResizeObserver(resize);
        observer.observe(node);
      };
      return h('div', { className: 'sp-scaled-page', ref, style: { aspectRatio: `${width} / ${height}` } }, h('div', { className: 'sp-scaled-canvas', style: { width, height } }, children));
    }

    function DemoFrame({ screen, height, route, scene, revision }) {
      const src = (location.href || '').split('#')[0] + '#kit/' + (route === 'secondary-wide' ? 'secondary-page' : route) + '?specEmbed=1' + (route === 'secondary-wide' ? '&step=2' : '') + (scene ? '&scene=' + encodeURIComponent(scene) : '');
      return h(ScaledPage, { width: screen, height }, h('iframe', { key: src + revision, title: scene || '真实页面预览', loading: 'lazy', src, style: { width: screen, height, border: 0, display: 'block' } }));
    }

    function ModalMetrics({ initial = '长内容弹窗', choices } = {}) {
      const [height, setHeight] = R.useState(768);
      const [scene, setScene] = R.useState(initial);
      const [revision, setRevision] = R.useState(0);
      const screen = height === 768 ? 1366 : height === 1080 ? 1920 : 2560;
      const scenes = choices || ['表单弹窗','创建用户','标准确认','高风险确认','异步提交','长内容弹窗','详情抽屉','编辑抽屉','参考抽屉','多级抽屉','删除组件'];
      return h('div', { className: 'sp-metrics' }, h('div', { className: 'sp-controls' }, select(height, setHeight, [768,1080,1440].map(value => ({ value, label: value + 'px 高' }))), scenes.length > 1 ? select(scene, setScene, scenes.map(value => ({ value, label: value })), 180) : null, h(Button, { onClick: () => setRevision(revision + 1) }, '重新演示')), h(DemoFrame, { screen, height, route: 'modal-drawer', scene, revision }), h('p', { className: 'sp-note' }, screen + ' × ' + height + 'px · 弹窗最大高度 ' + (height - 96) + 'px · 上下至少各 48px'));
    }

    function PageMetrics({ initial = 'secondary-page', fixed = false } = {}) {
      const [screen, setScreen] = R.useState(1920);
      const [route, setRoute] = R.useState(initial);
      const scenes = [{ value: 'secondary-page', label: '普通二级页面' }, { value: 'anchor-page', label: '锚点页面' }, { value: 'secondary-wide', label: '二级页 · 参数配置' }];
      return h('div', { className: 'sp-metrics' }, h('div', { className: 'sp-controls' }, select(screen, setScreen, [1280,1440,1600,1920].map(value => ({ value, label: value + 'px 屏幕' }))), fixed ? null : select(route, setRoute, scenes, 180)), h(DemoFrame, { screen, height: Math.round(screen * 9 / 16), route }), h('p', { className: 'sp-note' }, '原始 Demo 页面 · ' + screen + 'px 宽 · 可滚动、切换锚点及操作页面'));
    }

    function FeedbackExample({ kind }) {
      const api = ui.App.useApp();
      const [status, setStatus] = R.useState('success');
      const [size, setSize] = R.useState(kind === 'message' ? '简短' : 384);
      const [manual, setManual] = R.useState(false);
      const [sequence, setSequence] = R.useState(0);
      const channel = api[kind];
      R.useEffect(() => () => channel.destroy(), [channel]);
      const labels = { success: '成功', error: '失败', warning: '警告', info: '信息', loading: '加载' };
      const short = { success: '配置已保存', error: '保存失败', warning: '容量不足', info: '配置已更新', loading: '正在保存…' };
      const detail = { success: '配置已保存并生效，可继续下一步。', error: '保存失败，请检查网络连接后重试；已填写的内容仍保留。', warning: '剩余容量不足，请释放空间或扩容后继续。', info: '维护期间暂停创建服务，已有服务不受影响。', loading: '正在保存配置，请勿重复提交。' };
      const show = (type = status, key = 'spec-' + kind, batch = false, index = '') => {
        const persistent = type === 'loading' || (kind === 'notification' && (batch || manual));
        if (kind === 'message') channel.open({ key, type, duration: persistent ? 0 : 3,
          content: h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, minWidth: 32, maxWidth: 'min(496px, calc(100vw - 96px))', textAlign: 'left' } },
            h('span', null, index + (size === '简短' ? short[type] : detail[type]))) });
        else channel.open({ key, type, title: index + short[type], description: detail[type], duration: persistent ? 0 : 4.5, closable: true, pauseOnHover: true, showProgress: false, className: 'sp-spec-notification', style: { width: size, maxWidth: 'calc(100vw - 32px)', marginLeft: 'auto' } });
      };
      const control = (label, options, value, onChange) => h('div', { className: 'sp-feedback-control' }, h('span', null, label), h(ui.Segmented, { options, value, onChange, 'aria-label': label }));
      return h('div', { className: 'sp-feedback-example' },
        control('状态', Object.keys(labels).filter(key => kind === 'message' || key !== 'loading').map(value => ({ value, label: labels[value] })), status, setStatus),
        control(kind === 'message' ? '文案长度' : '宽度', kind === 'message' ? ['简短','较长'] : [320,384,480].map(value => ({ value, label: value + 'px' })), size, setSize),
        kind === 'notification' ? control('通知用途', [{ value: 'auto', label: '普通告知 · 自动关闭' },{ value: 'manual', label: '需处理 · 手动关闭' }], manual ? 'manual' : 'auto', value => setManual(value === 'manual')) : null,
        h('div', { className: 'sp-button-row' }, h(Button, { type: 'primary', onClick: () => show() }, '显示提示'),
          ...(status === 'loading' ? [h(Button, { key: 'finish', onClick: () => { api.message.open({ key: 'spec-message', type: 'success', content: short.success, duration: 3 }); } }, '完成'), h(Button, { key: 'fail', onClick: () => { api.message.open({ key: 'spec-message', type: 'error', content: detail.error, duration: 3 }); } }, '失败')] : []),
          h(Button, { disabled: status === 'loading', onClick: () => { channel.destroy(); for (let i = 1; i <= 5; i++) show(status, `spec-${kind}-${sequence}-${i}`, true, `第 ${i} 条 · `); setSequence(sequence + 1); } }, '连续触发 5 条'),
          h(Button, { onClick: () => channel.destroy() }, '清空演示')),
        h('p', { className: 'sp-note' }, kind === 'message' ? '顶部居中 · 不带叉号 · 结果 3 秒消失 · 最多 3 条' : `右上角 · 始终带叉号 · ${size}px · 最多 3 条 · 连续演示手动清空`));
    }

    function AlertExample() {
      const [type, setType] = R.useState('info');
      const [detailed, setDetailed] = R.useState(false);
      const [closable, setClosable] = R.useState(false);
      const [visible, setVisible] = R.useState(true);
      const examples = { info: ['系统维护通知', '维护期间暂停创建服务，已有服务不受影响，请在维护结束后继续。'], success: ['数据迁移已完成', '迁移结果已生效，请核对新环境中的数据。核对完成后可关闭此说明。'], warning: ['存储容量即将耗尽', '当前容量使用率超过 90%，请释放空间或申请扩容。'], error: ['服务连接失败', '暂时无法读取服务数据，请检查网络和服务状态后重新加载。'] };
      return h('div', { className: 'sp-feedback-example' },
        h('div', { className: 'sp-feedback-control' }, h('span', null, '状态'), h(ui.Segmented, { value: type, options: [{value:'info',label:'信息'},{value:'success',label:'成功'},{value:'warning',label:'警告'},{value:'error',label:'失败'}], onChange: value => { setType(value); setVisible(true); } })),
        h('div', { className: 'sp-feedback-control' }, h('span', null, '内容密度'), h(ui.Segmented, { value: detailed ? 'detail' : 'compact', options: [{value:'compact',label:'简短型'},{value:'detail',label:'详细型'}], onChange: value => setDetailed(value === 'detail') })),
        h('label', { className: 'sp-feedback-control' }, h('span', null, '允许关闭'), h(ui.Switch, { size: 'small', checked: closable, onChange: setClosable, 'aria-label': '允许关闭' })),
        visible ? h(ui.Alert, { key: type + '-' + detailed + '-' + closable, type, showIcon: true, closable, title: examples[type][detailed ? 0 : 1], description: detailed ? examples[type][1] : undefined, afterClose: () => setVisible(false), style: { marginTop: 16 } }) : h(Button, { onClick: () => setVisible(true) }, '恢复提示'),
        h('p', { className: 'sp-note' }, '此开关仅用于对照可关闭样式；业务中阻断性条件未解除时不可隐藏。'));
    }

    function NativeChartFit({ minWidth, children }) {
      let observer;
      const fit = node => {
        observer?.disconnect();
        if (!node) return;
        const panel = node.firstElementChild;
        const resize = () => {
          const available = node.clientWidth;
          if (!available) return;
          const width = Math.max(minWidth, available);
          const scale = Math.min(1, available / minWidth);
          panel.style.width = width + 'px';
          panel.style.transform = `scale(${scale})`;
          node.style.height = panel.scrollHeight * scale + 'px';
        };
        observer = new ResizeObserver(resize);
        observer.observe(node);
        observer.observe(panel);
        resize();
      };
      return h('div', { className: 'sp-native-chart-fit', ref: fit }, h('div', { className: 'sp-native-chart-panel' }, children));
    }

    function ChartExample({ family, kind }) {
      const [period, setPeriod] = R.useState('本月');
      const visualization = ui.Visualization;
      if (!visualization) return h('p', { className: 'sp-note' }, '图表示例尚未就绪');
      let content;
      if (kind === 'metric') content = h('div', { className: 'sp-chart-metric' }, h('span', null, '模型调用量'), h('div', null, h('strong', null, '222'), h('span', null, '万次')), h('p', null, '本月 · 较上月 +23%'), h(visualization.Sparkline, { values: [22,36,52,44,38,62,76], tone: 'blue' }));
      else if (kind === 'gauge') content = h(visualization.Gauge, { value: 85, label: 'CPU 使用率', rows: [['已使用','85 GHz'],['未使用','15 GHz'],['总量','100 GHz']] });
      else if (kind === 'table') content = h('div', { className: 'sp-chart-detail-table' }, h('table', null, h('thead', null, h('tr', null, ...['对象','负责人','状态','数值'].map(text => h('th', { key: text, scope: 'col' }, text)))), h('tbody', null, ...visualization.rows.map(row => h('tr', { key: row.name }, ...[row.name,row.owner,row.status,row.value].map((value,index)=>h('td',{key:index},value)))))));
      else if (visualization.components[kind]) content = ['disk','temperature'].includes(kind) ? h(NativeChartFit, { minWidth: kind === 'disk' ? 980 : 760 }, h(visualization.components[kind])) : h(visualization.components[kind]);
      else {
        const factory = visualization.specs[kind === 'line' ? 'area' : kind];
        let spec = factory(period);
        if (kind === 'line') { spec = { ...spec, type: 'line' }; delete spec.area; }
        content = h(visualization.Chart, { key: kind, spec });
      }
      const label = family.types.find(([key])=>key===kind)[1];
      const [use, benefit, limitation] = chartNotes[kind];
      const legends = { column: [['模型调用','#2F6BFF'],['推理服务','#F3C338']], radar: [['当前平台','#2F6BFF'],['目标水位','#F3C338']], cluster: [['GPU','#2F6BFF'],['内存','#5BBF3A']] };
      return h('div', { className: `sp-chart-example sp-chart-card ${['disk','temperature'].includes(kind) ? 'is-wide' : ''}`, 'data-chart-kind': kind },
        h('header', { className: 'sp-chart-card-heading' }, h('h3', null, label), h('p', null, '适用：' + use)),
        legends[kind] ? h('div', { className: 'base-chart-title-legend sp-native-chart-legend' }, ...legends[kind].map(([label,color]) => h('span', { key: label }, h('i', { style: { background: color } }), label))) : null,
        ['column','area','line','ranking'].includes(kind) ? h('div', { className: 'sp-chart-period' }, h(ui.Segmented, { size: 'small', value: period, onChange: setPeriod, options: ['本月','近90天','全年'], 'aria-label': label + '统计周期' })) : null,
        h('div', { className: `sp-chart-preview is-${kind}`, role: 'group', 'aria-label': label + '示例' }, content),
        h('dl', { className: 'sp-chart-choice-notes' }, h('div', null, h('dt', null, '优势'), h('dd', null, benefit)), h('div', null, h('dt', null, '注意'), h('dd', null, limitation))));
    }

    function UploadExample({ mode }) {
      const [files, setFiles] = R.useState([]);
      const [error, setError] = R.useState('');
      const images = mode !== 'file';
      const limit = mode === 'picture' ? 8 : 5;
      const megabytes = mode === 'file' ? 10 : mode === 'picture' ? 2 : 5;
      const beforeUpload = file => {
        if (images && (!/\.(png|jpe?g|webp|gif)$/i.test(file.name) || (file.type && !['image/png','image/jpeg','image/webp','image/gif'].includes(file.type)))) {
          setError('仅支持 PNG、JPG、WEBP、GIF 图片。');
          return ui.Upload.LIST_IGNORE;
        }
        if (file.size > megabytes * 1024 * 1024) {
          setError(`单个${images ? '图片' : '文件'}不能超过 ${megabytes} MB。`);
          return ui.Upload.LIST_IGNORE;
        }
        setError('');
        return false;
      };
      const preview = file => {
        if (file.url || file.thumbUrl) { showImage(file.url || file.thumbUrl, file.name); return; }
        const reader = new FileReader();
        reader.onload = () => showImage(String(reader.result), file.name);
        reader.onerror = () => setError('图片读取失败，请重新选择。');
        reader.readAsDataURL(file.originFileObj || file);
      };
      const props = {
        multiple: true, maxCount: limit, fileList: files, beforeUpload,
        ...(images ? { accept: '.png,.jpg,.jpeg,.webp,.gif', onPreview: preview } : {}),
        onChange: info => setFiles(info.fileList.slice(-limit)),
        onRemove: () => { setError(''); return true; },
        showUploadList: { showRemoveIcon: true, showPreviewIcon: images }
      };
      const control = mode === 'drag' ? h(ui.Upload.Dragger, props,
        h('p', { className: 'ant-upload-drag-icon' }, h(ui.icons.upload)),
        h('p', { className: 'ant-upload-text' }, '点击或拖拽图片到此区域'),
        h('p', { className: 'ant-upload-hint' }, `PNG / JPG / WEBP / GIF · 单张不超过 ${megabytes} MB · 最多 ${limit} 张`))
        : h(ui.Upload, { ...props, listType: mode === 'picture' ? 'picture-card' : 'text' }, mode === 'picture'
          ? files.length < limit ? h('div', { className: 'sp-picture-upload-trigger' }, h(ui.icons.upload), h('span', null, '添加图片')) : null
          : h(Button, { icon: h(ui.icons.upload) }, '选择文件'));
      return h('div', { className: `sp-upload-example is-${mode}` },
        h('h3', null, { file: '文件上传', picture: '图片上传与预览', drag: '拖拽上传图片' }[mode]),
        mode !== 'drag' ? h('p', { className: 'sp-upload-limits' }, `${images ? 'PNG / JPG / WEBP / GIF · ' : ''}单个不超过 ${megabytes} MB · 最多 ${limit} ${images ? '张' : '个'}`) : null,
        control, error ? h('p', { className: 'sp-upload-error', role: 'alert' }, error) : null);
    }

    function UploadSection() {
      return h('section', { className: 'surface kit-section sp-upload-section' },
        h('div', { className: 'section-head' }, h('h4', null, '上传'), h('span', { className: 'sp-upload-component-name' }, 'Upload / Upload.Dragger')),
        h('p', { className: 'sp-note' }, '本地演示：文件仅保留在当前页面，不发送至服务器。'),
        h('div', { className: 'sp-upload-grid' }, ...['file','picture','drag'].map(mode => h(UploadExample, { key: mode, mode }))));
    }

    const components = {
      'component-hub': () => h(R.Fragment, null, h(ui.ComponentLibrary), h('div', { className: 'component-library sp-upload-library' }, h(UploadSection))),
      'return-demo': () => h(ReturnDemo),
      'scene-form': () => h(ModalMetrics, { initial: '表单弹窗', choices: ['表单弹窗'] }),
      'scene-complex': () => h(ModalMetrics, { initial: '创建用户', choices: ['创建用户'] }),
      'scene-confirm': () => h(ModalMetrics, { initial: '标准确认', choices: ['标准确认','高风险确认'] }),
      'scene-drawer': () => h(ModalMetrics, { initial: '详情抽屉', choices: ['详情抽屉','编辑抽屉','多级抽屉'] }),
      'scene-popconfirm': () => h(ModalMetrics, { initial: '删除组件', choices: ['删除组件'] }),
      'scene-feedback': () => h(ModalMetrics, { initial: '异步提交', choices: ['异步提交'] }),
      'page-standard': () => h(PageMetrics, { fixed: true }),
      'page-anchor': () => h(PageMetrics, { initial: 'anchor-page', fixed: true }),
      'page-wide': () => h(PageMetrics, { initial: 'secondary-wide', fixed: true }),
      'modal-metrics': () => h(ModalMetrics),
      'page-metrics': () => h(PageMetrics),
      'feedback-message': () => h(ui.App, { message: { top: 72, maxCount: 3 } }, h(FeedbackExample, { kind: 'message' })),
      'feedback-notification': () => h(ui.App, { notification: { top: 72, stack: false, maxCount: 3 } }, h(FeedbackExample, { kind: 'notification' })),
      'feedback-alert': () => h(AlertExample),
      'pagination-parts': () => h(Parts), 'pagination-main': () => h(PagingDemo, { mode: 'main' }),
      'pagination-compact': () => h(PagingDemo, { mode: 'compact' }),
      'breadcrumb-demo': () => h(BreadcrumbDemo),
      'select-empty': () => h(Form, { layout: 'vertical', colon: false, style: { maxWidth: 280 } },
        h(Form.Item, { label: '资源' }, h(Select, {
          'aria-label': '空数据下拉示例', placeholder: '请选择资源', options: [],
          classNames: { popup: { root: 'sp-select-empty-popup' } },
          notFoundContent: h(ui.Empty, {
            image: window.__xdAsset('empty-state-assets/01-empty-data.png'),
            description: '暂无数据', className: 'sp-select-empty-state',
            styles: { root: { margin: '8px 0', minHeight: 112 } }
          }),
          popupMatchSelectWidth: true, style: { width: '100%' }
        }))),
      'form-vertical': () => h(NativeForm, { type: 'vertical' }),
      'form-grouped': () => h(NativeForm, { type: 'grouped' }),
      'form-horizontal': () => h(NativeForm, { type: 'horizontal' })
    };
    for (const kind of ['primary', 'tools', 'inline', 'text-icons', 'more', 'risk', 'consistency']) components[`buttons-${kind}`] = () => h(ButtonExamples, { kind });
    for (const [type, title] of [['info','任务正在执行'],['success','任务已完成'],['warning','请检查资源容量'],['error','配置保存失败']]) components[`semantic-${type}`] = () => h(ui.Alert, { type, title, showIcon: true });
    for (const family of chartFamilies) components[`chart-${family.key}`] = () => h('div', { className: 'sp-chart-family-grid' }, ...family.types.map(([kind]) => h(ChartExample, { key: kind, family, kind })));
    host.querySelectorAll('[data-native]:not([data-mounted])').forEach(element => {
      const component = components[element.dataset.native];
      if (!component) return;
      element.dataset.mounted = 'true';
      const root = ui.createRoot(element);
      mountedRoots.push(root);
      root.render(h(ConfigProvider, { locale: ui.locale, theme: ui.theme }, component()));
    });
  }

  function showImage(src, caption) {
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'sp-image-dialog';
      dialog.innerHTML = '<header><strong></strong><button type="button" aria-label="关闭">×</button></header><img alt="">';
      dialog.querySelector('button').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
      document.body.append(dialog);
    }
    dialog.querySelector('strong').textContent = caption;
    const image = dialog.querySelector('img');
    image.src = src;
    image.alt = caption;
    dialog.showModal();
  }

  function handleClick(event) {
    const anchor = event.target.closest('[data-scroll]');
    if (anchor) {
      event.preventDefault();
      const section = host.querySelector(`#${anchor.dataset.scroll}`);
      if (section) host.scrollTo({ top: host.scrollTop + section.getBoundingClientRect().top - host.getBoundingClientRect().top - 24, behavior: 'smooth' });
      return;
    }
    const zoom = event.target.closest('[data-zoom]');
    if (zoom) { showImage(zoom.dataset.zoom, zoom.dataset.caption); return; }
    const size = event.target.closest('[data-size]');
    if (size) {
      host.style.setProperty('--sp-art-height', `${size.dataset.size}px`);
      host.querySelectorAll('[data-size]').forEach(button => button.setAttribute('aria-pressed', String(button === size)));
      return;
    }
    const crumb = event.target.closest('[data-crumb]');
    if (crumb) host.querySelector('[data-crumb-result]').textContent = `点击“${crumb.dataset.crumb}” → 进入${crumb.dataset.crumb}。`;
  }

  function updateAnchor() {
    if (!host?.classList.contains('is-open')) return;
    const sections = [...host.querySelectorAll('[data-doc-section]')];
    if (!sections.length) return;
    const threshold = host.getBoundingClientRect().top + 90;
    let active = sections[0].id;
    for (const section of sections) if (section.getBoundingClientRect().top <= threshold) active = section.id;
    if (host.scrollTop + host.clientHeight >= host.scrollHeight - 2) active = sections.at(-1).id;
    host.querySelectorAll('[data-scroll]').forEach(button => {
      button.setAttribute('aria-current', button.dataset.scroll === active ? 'location' : 'false');
    });
  }

  function documentLayout(doc, route) {
    const isComponents = route === 'spec-components';
    const banner = `<header class="sp-banner ${isComponents ? 'sp-banner-components' : ''}"><nav class="sp-mode-switch" aria-label="组件与规范"><a href="#kit/${modeMemory.specRoute}" ${!isComponents ? 'aria-current="page"' : ''}><strong>设计规范</strong><span>什么时候用，怎么选</span></a><a href="#kit/spec-components" ${isComponents ? 'aria-current="page"' : ''}><strong>组件体验</strong><span>查看样式，体验交互</span></a></nav></header>`;
    if (isComponents) return `${banner}<div class="sp-doc-layout sp-component-layout"><article class="sp-component-content"><div data-native="component-hub"></div></article><nav class="sp-anchor-nav sp-component-anchors" aria-label="本页目录"></nav></div>`;
    let index = 0;
    const body = doc.body.replace(/<section\b([^>]*)>/g, (_, attributes) => `<section${attributes} id="sp-section-${index++}" data-doc-section>`);
    const headings = [...doc.body.matchAll(/<h2>([\s\S]*?)<\/h2>/g)].map(match => match[1].replace(/<[^>]*>/g, ''));
    const navigation = topicGroups.map(([label, keys]) => `<div class="sp-topic-group"><h3>${label}</h3>${keys.map(key => `<a href="#kit/${key}" ${routes[route] === routes[key] ? 'aria-current="page"' : ''}>${topicLabels[key]}</a>`).join('')}</div>`).join('');
    const anchors = headings.map((label, i) => `<button type="button" data-scroll="sp-section-${i}" aria-current="${i === 0 ? 'location' : 'false'}">${doc.anchors?.[i] || label}</button>`).join('');
    return `${banner}
      <div class="sp-doc-layout"><aside class="sp-topic-column"><nav class="sp-topic-nav" aria-label="规范分类">${navigation}</nav></aside>
      <article class="sp-document ${routes[route] === 'foundations' ? 'sp-foundations' : ''}"><header class="sp-heading"><h1>${doc.title}</h1><p>${doc.summary}</p></header>${body}</article>
      <nav class="sp-anchor-nav" aria-label="本页目录">${anchors}</nav></div>`;
  }

  function render() {
    const route = location.hash.split('/').at(-1)?.split('?')[0];
    if (route === 'component-library') { location.replace('#kit/spec-components'); return; }
    if (retired.has(route)) { location.replace('#kit/spec-overview'); return; }
    const key = routes[route];
    const target = getHost();
    syncBounds();
    if (!key) {
      if (target.dataset.route) modeMemory.scroll[target.dataset.route] = target.scrollTop;
      if (target.classList.contains('is-open')) unmountWidgets();
      target.classList.remove('is-open');
      delete target.dataset.route;
      if (dialog?.open) dialog.close();
      const wantsDetail = route === 'exception-status' && new URLSearchParams(location.hash.split('?')[1] || '').get('specDetail') === '1';
      if (!wantsDetail) openedDetailHash = '';
      else if (openedDetailHash !== location.hash) {
        const detailButton = document.querySelector('.xd-exception-context-actions [data-context="detail"]');
        if (detailButton) { openedDetailHash = location.hash; detailButton.click(); }
      }
      return;
    }
    openedDetailHash = '';
    target.classList.add('is-open');
    if (target.dataset.route !== key) {
      if (target.dataset.route) modeMemory.scroll[target.dataset.route] = target.scrollTop;
      if (key !== 'components') modeMemory.specRoute = route;
      unmountWidgets();
      const doc = docs[key];
      target.dataset.route = key;
      target.style.removeProperty('--sp-art-height');
      target.innerHTML = documentLayout(doc, route);
      restoreComponentScroll = key === 'components';
      target.scrollTop = modeMemory.scroll[key] || 0;
    }
    mountWidgets();
    if (key === 'components') {
      const sections = [...host.querySelectorAll('.component-library .kit-section')];
      sections.forEach((section, i) => { section.id = `sp-section-${i}`; section.setAttribute('data-doc-section', ''); });
      const links = sections.map((section, i) => `<button type="button" data-scroll="sp-section-${i}">${section.querySelector('.section-head h4, .section-head h3')?.textContent || `组件 ${i + 1}`}</button>`).join('');
      for (const selector of ['.sp-component-anchors']) {
        const nav = host.querySelector(selector);
        if (nav && nav.dataset.links !== links) { nav.dataset.links = links; nav.innerHTML = '<strong>组件目录</strong>' + links; }
      }
      if (sections.length && restoreComponentScroll) { target.scrollTop = modeMemory.scroll.components || 0; restoreComponentScroll = false; }
    }
    updateAnchor();
  }

  function scheduleRender() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; render(); });
  }

  const style = document.createElement('style');
  style.textContent = `
    .sp-feedback-control{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px;font-size:13px}.sp-feedback-control>span:first-child{min-width:84px;color:#667085}.sp-feedback-control .ant-segmented{max-width:100%;overflow:auto}.sp-feedback-example>.sp-button-row{margin-top:16px}
    .sp-chart-toolbar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding-bottom:16px}.sp-chart-toolbar>strong{font-size:14px;font-weight:600;margin-right:auto}.sp-chart-preview{height:340px;min-width:0;position:relative;overflow:auto}.sp-chart-preview>.base-chart-frame{height:100%;min-height:300px}.sp-chart-preview.is-disk,.sp-chart-preview.is-temperature{height:440px}.sp-chart-preview .observability-wide-card{box-shadow:none}.sp-chart-metric{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;position:relative;padding:24px}.sp-chart-metric>div{display:flex;gap:8px;align-items:baseline;margin:12px 0}.sp-chart-metric strong{font-size:36px;line-height:48px;font-weight:600}.sp-chart-metric .base-metric-sparkline{position:static;width:160px;height:96px;flex-shrink:0}.sp-chart-detail-table{overflow:auto}.sp-chart-detail-table table{width:100%;min-width:400px;border-collapse:collapse;font-size:14px}.sp-chart-detail-table th,.sp-chart-detail-table td{text-align:left;padding:12px 8px;border-bottom:1px solid #000b2326;white-space:nowrap}.sp-chart-detail-table th{background:#F5F7FA;font-weight:500}.sp-chart-preview.is-score,.sp-chart-preview.is-health,.sp-chart-preview.is-gauge,.sp-chart-preview.is-progress{display:grid;place-items:center}.sp-chart-preview>.base-funnel-visual{height:100%;min-height:260px}.sp-chart-preview>.base-scatter-visual{height:280px;margin:16px 24px 36px 36px}.sp-chart-preview>.base-heatmap-wrap{padding-top:24px}.sp-chart-preview>.base-wordcloud-visual{height:100%}.sp-chart-preview .base-gauge-visual{width:100%}@container(max-width:560px){.sp-chart-toolbar{gap:8px}.sp-chart-toolbar>strong{width:100%}.sp-chart-preview{height:300px}}
    .sp-dark-map table{min-width:940px}.sp-dark-map td:nth-child(2){overflow-wrap:anywhere}.sp-dark-map code{font-size:12px;white-space:normal;overflow-wrap:anywhere}.sp-map-color{display:inline-flex;align-items:center;justify-content:center;width:32px;height:28px;background:#fff;border:1px solid #000b2326;border-radius:3px;vertical-align:middle;margin:0 6px 6px 0}.sp-map-color.on-dark{background:#141414;border-color:#ffffff29}.sp-map-color i{display:block;width:20px;height:16px;border:1px solid #80808040;border-radius:2px}.sp-topic-group h3:hover{background:transparent;color:rgba(0,11,35,.45)}
    .sp-topic-group{margin-top:16px}.sp-topic-group h3{font-size:11px!important;line-height:18px!important;color:rgba(0,11,35,.45);font-weight:400;margin:0 0 4px!important;padding:0 10px;cursor:default}.sp-foundations>section{padding:28px 0!important}.sp-foundations h3{font-size:14px!important;line-height:22px;margin:0 0 8px!important}.sp-foundation-section-head{display:flex;align-items:flex-start;gap:12px;margin-bottom:20px}.sp-foundation-section-head>span{font-size:12px;line-height:24px;color:#64748b;width:24px;flex-shrink:0}.sp-foundation-section-head h2{margin:0 0 8px!important}.sp-foundation-section-head p{margin:0!important;color:rgba(0,11,35,.65)}.sp-primary-colors,.sp-theme-comparison{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin-bottom:16px}.sp-primary-block{display:block;height:64px;border-radius:4px;margin-bottom:12px}.sp-primary-colors strong{font-size:18px;font-weight:600}.sp-primary-colors p{margin:8px 0 0}.sp-foundations .sp-foundation-ramp{grid-template-columns:repeat(10,minmax(0,1fr));gap:8px;margin-bottom:24px}.sp-foundation-ramp .is-primary{outline:2px solid #000b23;outline-offset:3px;border-radius:2px}.sp-foundation-ramp small{display:block;font-size:12px;line-height:18px;margin-top:4px;color:rgba(0,11,35,.65);overflow-wrap:anywhere}.sp-foundation-ramp .is-primary b{font-weight:600}.sp-state-examples{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px 16px;margin-bottom:24px}.sp-state-examples code{font-size:12px;overflow-wrap:anywhere;color:#475569}.sp-state-examples p{margin:6px 0 0}.sp-button-sample{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-width:100px;height:32px;padding:0 16px;border-radius:6px;color:#fff;font-size:14px;line-height:22px;margin:4px 0 16px}.sp-button-sample.is-focus{outline:2px solid #0633C7;outline-offset:2px}.sp-button-sample.is-disabled{color:rgba(0,11,35,.25);border:1px solid #E2E8F0}.sp-loading-symbol{width:12px;height:12px;border:2px solid #ffffff66;border-top-color:#fff;border-radius:50%}.sp-semantic-examples{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px 24px;margin-bottom:16px}.sp-semantic-sample{padding:12px;border:1px solid;display:flex;gap:8px;align-items:center;border-radius:4px;font-size:14px}.sp-semantic-examples dl{font-size:12px;margin:8px 0 0}.sp-semantic-examples dt{color:#64748b}.sp-semantic-examples dd{margin:0 0 4px;overflow-wrap:anywhere}.sp-neutral-ramp{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px;margin-bottom:20px}.sp-neutral-ramp span{display:block;height:40px;border-radius:4px;border:1px solid #000b2326}.sp-neutral-ramp code{font-size:11px;overflow-wrap:anywhere}.sp-theme-sample{background:#fff;color:#000b23;padding:20px;border:1px solid #000b2326;border-radius:4px}.sp-theme-sample.is-dark{background:#141414;color:#fff;border-color:#ffffff29}.sp-theme-sample h3,.sp-theme-sample p{color:inherit!important}.sp-theme-sample strong{font-size:18px;opacity:.85}.sp-theme-sample p{font-size:14px;margin:8px 0!important}.sp-theme-sample .sp-button-sample{margin:12px 0 0}.sp-contrast-sample{display:inline-block;padding:6px 12px;border-radius:4px;margin-right:8px;font-size:14px}.sp-spacing-examples{display:flex;align-items:end;gap:24px;flex-wrap:wrap;margin:20px 0}.sp-spacing-examples>div{display:flex;flex-direction:column;gap:8px;font-size:12px}.sp-spacing-examples i{display:block;height:32px;background:#124DEE}.sp-foundations .sp-table-wrap+ .sp-table-wrap{margin-top:20px}@container(max-width:900px){.sp-foundations .sp-foundation-ramp{grid-template-columns:repeat(5,minmax(0,1fr))}}@container(max-width:560px){.sp-primary-colors,.sp-theme-comparison,.sp-semantic-examples{grid-template-columns:minmax(0,1fr)}.sp-state-examples{grid-template-columns:repeat(2,minmax(0,1fr))}.sp-neutral-ramp{grid-template-columns:repeat(4,minmax(0,1fr))}.sp-foundations .sp-foundation-ramp{grid-template-columns:repeat(5,minmax(0,1fr))}}
    .sp-foundation-ramp{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px;margin-bottom:20px}.sp-foundation-ramp>div{min-width:0}.sp-foundation-ramp span{display:block;height:40px;border-radius:4px}.sp-foundation-ramp b{display:block;font-size:12px;font-weight:500;margin-top:4px}.sp-foundation-ramp code{display:block;font-size:11px;overflow-wrap:anywhere}.sp-foundation-palettes h3{font-size:14px!important;margin:0 0 8px!important}@container(max-width:560px){.sp-foundation-ramp{grid-template-columns:repeat(4,minmax(0,1fr))}}
    .sp-main-paging{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.sp-quick-jump{display:inline-flex;align-items:center;gap:8px;white-space:nowrap}.sp-quick-jump .sp-jump-action{color:rgba(0,11,35,.85);background:transparent;padding-inline:4px}.sp-quick-jump .sp-jump-action:disabled{color:rgba(0,11,35,.85);background:transparent}.sp-quick-jump .sp-jump-action:not(:disabled):hover{color:#124DEE;background:transparent}.sp-quick-jump .sp-jump-action:not(:disabled):active{color:#0020A1}.sp-swatch{display:inline-block;width:20px;height:20px;vertical-align:middle;margin-right:8px;border-radius:4px}.sp-scenario .sp-scene{margin:0}.sp-scenario .sp-scene figcaption{display:none}
    .xd-spec-host{position:fixed;z-index:15;display:none;overflow:auto;background:#fff;color:#344054;font:14px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;letter-spacing:0;--sp-art-height:160px}
    .xd-spec-host.is-open{display:block}.xd-spec-host *{box-sizing:border-box}.sp-document{padding:20px 24px 40px;min-height:100%;width:100%;margin:0}.sp-heading{padding-bottom:16px;border-bottom:1px solid #e8ebef;margin-bottom:24px}.sp-heading h1{font-size:24px;line-height:1.4;margin:0 0 6px;color:#182230;font-weight:650}.sp-heading p{margin:0;color:#667085}.sp-document section{margin:0 0 28px}.sp-document h2{font-size:18px;line-height:1.5;margin:0 0 10px;color:#182230;font-weight:600}.sp-document h2 small{font-size:12px;font-weight:400;color:#8a94a3;margin-left:8px}.sp-document h3{font-size:14px;color:#263445;margin:0 0 8px;font-weight:600}.sp-document p{margin:6px 0 14px}.sp-document a{color:#1677ff;text-decoration:none}.sp-document a:hover{text-decoration:underline}.sp-note,.sp-reference{font-size:12px;color:#667085;margin-top:10px!important}.sp-demo-link{display:inline-block;font-size:13px;margin-top:12px}.sp-table-wrap{overflow:auto;width:100%;border:1px solid #e5e9ef;border-radius:4px;margin:14px 0}.sp-table-wrap table{width:100%;border-collapse:collapse;font-size:13px;min-width:580px}.sp-table-wrap th{background:#f7f8fa;text-align:left;color:#475467;font-weight:600;white-space:nowrap}.sp-table-wrap th,.sp-table-wrap td{padding:11px 14px;border-bottom:1px solid #edf0f3;vertical-align:top}.sp-table-wrap tr:last-child td{border-bottom:0}.sp-yes{color:#17864d;font-weight:700}.sp-no{color:#a3abb7}.sp-index{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:32px}.sp-index a{display:grid;gap:4px;border-bottom:1px solid #e8ebef;padding:18px 0}.sp-index strong{color:#263445;font-size:16px}.sp-index span{color:#667085;font-size:13px}
    .sp-flow{display:flex;align-items:center;gap:20px;padding:20px;background:#f8fafc;border:1px solid #e5e9ef;border-radius:4px;margin:16px 0}.sp-flow div{flex:1;display:grid;gap:4px}.sp-flow small{color:#8a94a3;font-size:12px}.sp-flow strong{font-weight:500;color:#344054}.sp-flow>span{color:#98a2b3}.sp-return{margin:20px 0}.sp-return figcaption{font-size:12px;color:#667085;margin-bottom:8px}.sp-return-crop{display:block;position:relative;width:100%;max-width:900px;aspect-ratio:10;overflow:hidden;border:1px solid #dce3ed;background:#fff;cursor:zoom-in;padding:0}.sp-return-crop img{position:absolute;width:231.333%;max-width:none;left:-33.333%;top:-63.333%}.sp-return-mark{position:absolute;left:2%;top:12%;width:5%;height:58%;border:2px dashed #1677ff;border-radius:3px}.sp-breadcrumb-demo{padding:18px;border:1px solid #e5e9ef;border-radius:4px}.sp-breadcrumb-demo nav{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.sp-breadcrumb-demo button{font:inherit;font-size:13px;color:#1677ff;border:0;background:transparent;cursor:pointer;padding:0}.sp-breadcrumb-demo nav>span{color:#98a2b3;font-size:13px}.sp-breadcrumb-demo p{font-size:12px;color:#667085;margin:12px 0 0}
    .sp-parts{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1px solid #e5e9ef;border-radius:4px;margin-top:14px}.sp-parts>div{padding:16px;min-width:0;border-right:1px solid #e5e9ef}.sp-parts>div:last-child{border-right:0}.sp-parts h3{display:flex;align-items:center;gap:7px}.sp-number{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:#edf4ff;color:#1677ff;border-radius:50%;font-size:11px;font-weight:600}.sp-part-control{display:flex;align-items:center;min-height:76px;overflow:auto}.sp-parts p{font-size:12px;color:#667085;margin:8px 0 0}.sp-native-jump{display:flex;align-items:center;gap:4px;white-space:nowrap;font-size:12px}.sp-demo-state{display:block;font-size:11px;color:#8a94a3;font-weight:400}.sp-live-example{border:1px solid #e5e9ef;border-radius:4px}.sp-controls{display:flex;align-items:end;gap:20px;padding:16px;background:#fafbfc;border-bottom:1px solid #e5e9ef;flex-wrap:wrap}.sp-controls label{display:grid;gap:5px;font-size:12px;color:#667085}.sp-controls .sp-demo-state{padding-bottom:5px}.sp-live-footer{display:flex;justify-content:flex-end;align-items:center;min-height:88px;padding:18px;overflow:auto}.sp-compact-pager{display:flex;align-items:center;gap:12px;white-space:nowrap}.sp-muted{color:#98a2b3;font-size:12px}.sp-form-scene{border:1px solid #e5e9ef;border-radius:4px;padding:24px;background:#fff;margin-top:14px}.sp-form-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.sp-form-group-title{font-size:13px;font-weight:600;margin:0 0 14px;color:#344054}
    .sp-section-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:14px;flex-wrap:wrap}.sp-section-head h2{margin:0}.sp-size-switch{display:flex;border:1px solid #d9e0e8;border-radius:4px;overflow:hidden}.sp-size-switch button{background:white;color:#667085;border:0;border-right:1px solid #d9e0e8;padding:6px 12px;font:inherit;font-size:12px;cursor:pointer}.sp-size-switch button:last-child{border-right:0}.sp-size-switch button[aria-pressed=true]{background:#edf4ff;color:#1677ff}.sp-assets{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}.sp-asset{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:218px;padding:14px 6px;background:#fff;border:1px solid #e5e9ef;border-radius:4px;cursor:zoom-in;font:inherit;color:#344054}.sp-asset:hover{border-color:#91baff}.sp-asset img{height:var(--sp-art-height);width:auto;max-width:100%;object-fit:contain;transition:height .16s}.sp-asset strong{font-weight:500;font-size:13px;margin-top:8px}.sp-asset>span{font-size:10px;color:#98a2b3;margin-top:2px}.sp-centering{height:300px;display:grid;place-items:center;position:relative;border:1px dashed #1677ff;background:#fbfdff;margin-top:18px}.sp-centering-label{position:absolute;left:12px;top:8px;color:#1677ff;font-size:11px}.sp-empty-group{display:flex;flex-direction:column;align-items:center;position:relative;gap:8px}.sp-empty-group img{height:160px;width:240px}.sp-empty-group strong{font-size:14px;line-height:22px;font-weight:600}.sp-gap-mark{position:absolute;left:calc(100% + 10px);top:160px;height:8px;line-height:8px;white-space:nowrap;color:#e5484d;font-size:10px}.sp-centering-note{position:absolute;right:12px;bottom:8px;font-size:11px;color:#667085}.sp-scene{margin:22px 0 32px}.sp-scene figcaption h3{margin-bottom:4px}.sp-scene figcaption p{font-size:13px;color:#667085;margin:0 0 10px}.sp-shot{display:block;position:relative;border:1px solid #d9e0e8;border-radius:4px;overflow:hidden;width:100%;padding:0;background:#fff;cursor:zoom-in}.sp-shot img{width:100%;height:auto;display:block}.sp-boundary{position:absolute;border:1px dashed #1677ff;background:#1677ff03;pointer-events:none}.sp-table-shot .sp-boundary{left:16.3%;top:39.6%;width:81.6%;height:58.8%}.sp-modal-shot .sp-boundary{left:36.7%;top:37.6%;width:26.7%;height:36.2%}.sp-page-shot .sp-boundary{left:14.2%;top:11.7%;width:85.6%;height:88.1%}.sp-zoom-hint{position:absolute;right:10px;bottom:9px;background:#fff;color:#1677ff;border:1px solid #d9e0e8;border-radius:3px;padding:3px 7px;font-size:11px}.sp-image-dialog{border:1px solid #d9e0e8;border-radius:6px;padding:0;max-width:min(1200px,94vw);max-height:92vh;overflow:auto;background:#fff;color:#344054;box-shadow:0 16px 48px #10182830}.sp-image-dialog::backdrop{background:#10182870}.sp-image-dialog header{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:12px 16px;border-bottom:1px solid #e5e9ef;font:13px/1.5 -apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}.sp-image-dialog header strong{font-weight:500}.sp-image-dialog header button{border:0;background:transparent;font-size:24px;line-height:24px;color:#667085;cursor:pointer}.sp-image-dialog>img{display:block;max-width:100%;height:auto;max-height:78vh;object-fit:contain;margin:auto}
    @media(max-width:1000px){.sp-parts{grid-template-columns:repeat(2,minmax(0,1fr))}.sp-parts>div:nth-child(2){border-right:0}.sp-parts>div:nth-child(-n+2){border-bottom:1px solid #e5e9ef}}
    @media(max-width:640px){.sp-document{padding:16px}.sp-heading h1{font-size:21px}.sp-index{grid-template-columns:1fr}.sp-flow{gap:10px;padding:14px}.sp-flow strong{font-size:12px}.sp-parts{grid-template-columns:1fr}.sp-parts>div{border-right:0;border-bottom:1px solid #e5e9ef}.sp-parts>div:last-child{border-bottom:0}.sp-assets{grid-template-columns:1fr}.sp-form-row{grid-template-columns:1fr;gap:0}.sp-form-scene{padding:16px}.sp-live-footer{justify-content:flex-start}.sp-controls{gap:12px}.sp-empty-group img{max-width:100%;height:auto}.sp-return-mark{border-width:1px}}
  `;
  style.textContent += `
    .xd-spec-host{container-type:inline-size;scroll-behavior:smooth}
    .sp-banner{min-height:144px;padding:26px 28px;background:#f3f8fc url("media/097a263658f8c1f88a.webp") center 48%/cover no-repeat;border-bottom:1px solid #edf0f4}
    .sp-banner h1{font-size:28px;line-height:1.4;font-weight:650;color:#182230;margin:0 0 9px;letter-spacing:0}
    .sp-banner p{font-size:13px;line-height:1.8;color:#526071;margin:0;max-width:590px}
    .sp-doc-layout{display:grid;grid-template-columns:164px minmax(0,1fr) 132px;gap:24px;padding:28px 24px 56px;align-items:start}
    .sp-topic-nav,.sp-anchor-nav{position:sticky;top:24px;max-height:calc(100vh - 112px);overflow:auto;min-width:0}
    .sp-topic-nav>strong,.sp-anchor-nav>strong{display:block;font-size:12px;color:#8a94a3;font-weight:500;margin:0 10px 12px}
    .sp-topic-nav a{display:block;font-size:13px;line-height:1.6;padding:10px;margin:2px 0;border-radius:4px;text-decoration:none;color:#475467;overflow-wrap:anywhere}
    .sp-topic-nav a:hover{background:#f6f8fb;color:#1677ff}.sp-topic-nav a[aria-current=page]{color:#1677ff;background:#edf4ff;font-weight:600}
    .sp-topic-nav .sp-back-demo{margin-top:24px;padding-top:16px;border-top:1px solid #edf0f4;border-radius:0;color:#667085;font-size:12px}
    .sp-anchor-nav{border-left:1px solid #e8ebef;padding-left:0}.sp-anchor-nav>strong{margin-left:14px}
    .sp-anchor-nav button{display:block;width:100%;font:inherit;font-size:12px;line-height:1.6;text-align:left;border:0;border-left:2px solid transparent;background:transparent;padding:7px 10px 7px 13px;color:#8a94a3;cursor:pointer;overflow-wrap:anywhere}
    .sp-anchor-nav button:hover{color:#1677ff}.sp-anchor-nav button[aria-current=location]{color:#1677ff;border-left-color:#1677ff;background:#fafcff}
    .sp-document{padding:0;min-width:0;min-height:600px}.sp-heading{border:0;margin:0 0 32px;padding:0}.sp-heading h1{font-size:28px;line-height:1.45;margin-bottom:12px}.sp-heading p{font-size:14px;line-height:1.9;max-width:760px}
    .sp-document section{padding:0 0 32px;margin:0 0 32px;border-bottom:1px solid #edf0f4;scroll-margin-top:24px}.sp-document section:last-child{border-bottom:0}
    .sp-document h2{font-size:19px;margin:0 0 14px;line-height:1.6}.sp-document p{line-height:1.9}.sp-document p strong{font-weight:600;color:#344054}
    .sp-scenario{display:grid;grid-template-columns:minmax(190px,0.8fr) minmax(0,1.2fr);gap:28px;align-items:start}.sp-explanation,.sp-example{min-width:0}.sp-explanation p{font-size:13px;color:#667085}.sp-explanation h2{font-size:18px}.sp-example-caption{font-size:12px;color:#8a94a3;margin-bottom:12px}
    .sp-example .sp-form-scene{margin:0;padding:20px;background:#fafbfc}.sp-example .sp-flow{margin:0;gap:10px;padding:16px}.sp-example .sp-flow strong{font-size:12px}.sp-example .sp-return{margin:16px 0}.sp-example .sp-return-crop{aspect-ratio:8}.sp-return-crop img{top:-50.666%}.sp-example .sp-scene{margin:0}
    .sp-route-example{display:grid;grid-template-columns:82px minmax(0,1fr);gap:0;border-top:1px solid #e5e9ef;border-bottom:1px solid #e5e9ef;background:#fafbfc;font-size:12px;line-height:1.8}
    .sp-route-example span{padding:16px 10px;border-bottom:1px solid #edf0f3}.sp-route-example span:nth-last-child(-n+2){border-bottom:0}.sp-route-example span:nth-child(odd){color:#1677ff;font-weight:500}
    .sp-mini-rules{border-top:1px solid #e5e9ef}.sp-mini-rules>div{display:flex;gap:14px;justify-content:space-between;padding:16px 0;border-bottom:1px solid #e5e9ef;font-size:12px}.sp-mini-rules b{font-weight:500}.sp-mini-rules span{color:#667085;text-align:right}
    .sp-overview-empty{height:260px;border:1px dashed #c3d9f5;background:#fafcff;display:grid;place-items:center}.sp-overview-empty .sp-empty-group img{height:112px;width:168px}
    .sp-table-wire{border:1px solid #e5e9ef;border-radius:4px;overflow:hidden;background:white;font-size:12px;color:#667085}.sp-wire-filter{padding:14px;border-bottom:1px solid #e5e9ef;color:#98a2b3}.sp-wire-head{padding:12px;background:#f6f8fb}.sp-wire-rows{height:112px;background:repeating-linear-gradient(to bottom,#fff 0px,#fff 36px,#edf0f4 36px,#edf0f4 37px)}.sp-wire-short{height:74px}.sp-wire-footer{padding:14px 10px;text-align:right;border-top:1px solid #e5e9ef;color:#475467}
    .sp-parts{grid-template-columns:repeat(2,minmax(0,1fr))}.sp-parts>div:nth-child(2){border-right:0}.sp-parts>div:nth-child(-n+2){border-bottom:1px solid #e5e9ef}.sp-live-footer{justify-content:flex-start;flex-wrap:wrap}.sp-form-row{gap:16px}
    .sp-state-pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;background:#fafbfc;padding:14px;border:1px solid #e5e9ef;border-radius:4px}.sp-state-pair>div{display:flex;flex-direction:column;align-items:center;min-width:0}.sp-state-pair img{width:100%;max-width:168px;height:auto}.sp-state-pair b{font-size:12px;font-weight:500;margin:8px 0 4px}.sp-state-pair span{font-size:11px;color:#8a94a3;text-align:center}
    .sp-assets{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}.sp-asset{min-height:222px}.sp-asset img{max-width:none}.sp-centering{overflow:hidden}.sp-section-head{gap:8px}
    .sp-topic-nav a:focus-visible,.sp-anchor-nav button:focus-visible{outline:2px solid #1677ff;outline-offset:-2px}
    @container (max-width:1100px){.sp-doc-layout{grid-template-columns:148px minmax(0,1fr) 116px;gap:18px;padding:24px 18px 48px}.sp-scenario{gap:20px}.sp-example{max-width:100%}.sp-heading h1{font-size:26px}}
    @container (max-width:940px){.sp-scenario{grid-template-columns:1fr;gap:16px}}
    @container (max-width:800px){.sp-doc-layout{grid-template-columns:140px minmax(0,1fr);gap:20px}.sp-anchor-nav{grid-column:2;grid-row:1;position:static;border-left:0;border-bottom:1px solid #e5e9ef;padding-bottom:12px;max-height:none}.sp-anchor-nav button{display:inline-block;width:auto;padding:6px 9px;border-left:0;border-bottom:2px solid transparent}.sp-anchor-nav button[aria-current=location]{border-bottom-color:#1677ff}.sp-anchor-nav>strong{margin-left:9px}.sp-topic-nav{grid-column:1;grid-row:1 / span 2}.sp-document{grid-column:2;grid-row:2}.sp-parts{grid-template-columns:1fr}.sp-parts>div{border-right:0;border-bottom:1px solid #e5e9ef}.sp-parts>div:last-child{border-bottom:0}}
    @container (max-width:560px){.sp-banner{padding:22px 18px;min-height:144px}.sp-banner h1{font-size:24px}.sp-doc-layout{display:flex;flex-direction:column;padding:18px;gap:22px}.sp-topic-nav{position:static;max-height:none;width:100%;display:flex;flex-wrap:wrap;gap:4px}.sp-topic-nav>strong{width:100%;margin:0 0 4px}.sp-topic-nav a{font-size:12px;padding:7px}.sp-topic-nav .sp-back-demo{margin:0;padding:7px;border:0}.sp-anchor-nav{width:100%}.sp-document{width:100%}.sp-heading h1{font-size:24px}.sp-assets{grid-template-columns:1fr}.sp-form-row{grid-template-columns:1fr;gap:0}.sp-gap-mark{left:calc(100% - 10px)}}
  `;
  style.textContent += `
    .sp-document p{margin:0 0 7px;line-height:1.75}.sp-document h2{margin-bottom:10px}.sp-explanation p:last-child{margin-bottom:0}.sp-document section{padding-bottom:24px;margin-bottom:24px}
    .sp-topic-column{align-self:stretch;min-width:0;border-right:1px solid #e5e9ef;padding-right:12px;min-height:calc(100dvh - 232px)}
    .sp-topic-nav{width:100%;overflow-x:hidden;overflow-y:auto;padding:2px 2px 8px;scrollbar-width:thin}.sp-topic-nav a{width:100%;margin:3px 0;border-radius:5px;padding:9px 10px;line-height:1.7;white-space:normal;overflow-wrap:normal}.sp-topic-nav a[aria-current=page]{border:1px solid #dceaff;padding:8px 9px;border-radius:5px;background:#edf4ff}.sp-topic-nav>strong{margin-left:10px}
    .sp-native-breadcrumb{border:1px solid #e5e9ef;border-radius:4px;padding:20px;background:#fff}.sp-breadcrumb-source{display:flex;align-items:center;gap:12px;margin-bottom:20px;font-size:12px;color:#667085}.sp-breadcrumb-destination{margin:14px 0;color:#667085;font-size:12px}
    .sp-anatomy-scroll{overflow-x:auto;padding:20px 16px 16px;border:1px solid #e5e9ef;border-radius:4px;background:#fff}
    .sp-pagination-anatomy{display:flex;align-items:flex-start;gap:16px;width:max-content;min-width:100%}.sp-anatomy-part{flex:none}.sp-anatomy-control{height:36px;display:flex;align-items:center;white-space:nowrap}.sp-anatomy-label{position:relative;margin-top:28px;display:flex;align-items:center;justify-content:center;gap:6px;font-size:12px;color:#667085;white-space:nowrap}.sp-anatomy-label:before{content:"";position:absolute;left:50%;bottom:calc(100% + 4px);width:1px;height:18px;background:#b6c4d7}.sp-anatomy-label:after{content:"";position:absolute;left:calc(50% - 2px);bottom:calc(100% + 20px);width:5px;height:5px;border-radius:50%;background:#b6c4d7}
    .sp-controls{padding:12px 16px;align-items:center}.sp-controls label{display:flex;align-items:center;gap:10px}.sp-controls .sp-demo-state{padding:0;font-size:12px}.sp-live-footer{min-height:80px;padding:20px 16px}
    @container(max-width:800px){.sp-topic-column{grid-column:1;grid-row:1 / span 2}.sp-topic-nav{display:block;position:sticky;top:20px}.sp-document p{line-height:1.7}}
    @container(max-width:560px){.sp-topic-column{width:100%;min-height:0;border-right:0;border-bottom:1px solid #e5e9ef;padding:0 0 12px}.sp-topic-nav{position:static;display:flex;overflow:visible}.sp-topic-nav a{width:auto}.sp-pagination-anatomy{gap:12px}}
  `;
  style.textContent += `
    .sp-button-example{border:1px solid #e5e9ef;border-radius:4px;background:#fff;padding:20px;min-width:0}.sp-button-group+.sp-button-group{margin-top:20px;padding-top:16px;border-top:1px solid #edf0f4}.sp-button-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.sp-button-group .sp-example-caption{margin-bottom:10px}.sp-button-search{display:grid;gap:12px;max-width:320px}.sp-button-feedback{min-height:20px;margin-top:12px;color:#667085;font-size:12px;line-height:20px}.sp-button-row button{flex-shrink:0}
  `;
  style.textContent += `
    .sp-metrics,.sp-feedback-example{border:1px solid #e5e9ef;border-radius:4px;padding:16px;margin-bottom:16px;background:#fff;min-width:0}.sp-metrics .sp-controls{padding:0 0 16px;display:flex;gap:12px;flex-wrap:wrap}.sp-metrics .sp-note,.sp-feedback-example .sp-note{margin:12px 0 0}.sp-modal-map{position:relative;background:#eef1f5;max-width:720px;margin:auto;min-height:200px;overflow:hidden}.sp-modal-top{position:absolute;top:0;left:0;right:0;text-align:center;display:grid;place-content:center;color:#49617b;font-size:12px}.sp-modal-shape{position:absolute;left:25%;width:50%;display:flex;flex-direction:column;background:white;border:1px solid #b8c7d9;border-radius:4px;box-shadow:0 4px 14px #18314a12;overflow:hidden}.sp-modal-shape>b,.sp-modal-shape>small{padding:6px 12px;font-size:12px;flex:none}.sp-modal-body{flex:1;min-height:0;background:#f7faff;padding:4px 12px;font-size:12px;overflow:auto}.sp-modal-safe{position:absolute;bottom:2px;right:8px;color:#52657b;font-size:10px}.sp-scroll-demo{border:1px solid #dce3ed;border-radius:4px;background:white}.sp-scroll-demo header,.sp-scroll-demo footer{padding:14px 18px}.sp-scroll-demo footer{text-align:right;border-top:1px solid #e5e9ef}.sp-scroll-demo main{height:180px;overflow:auto;border-top:1px solid #e5e9ef;padding:16px}.sp-scroll-demo main>div{margin-bottom:14px;font-size:12px}.sp-scroll-demo main span{display:block;height:28px;border:1px solid #dce3ed;border-radius:3px;margin-top:6px}.sp-page-map{background:#fff0f2;padding:20px 0;text-align:center}.sp-page-shape{margin:auto;background:#eef5ff;border:1px dashed #86b5ff;padding:20px 12px;box-sizing:border-box;font-size:12px}.sp-page-lines{display:grid;gap:10px;margin:16px 0}.sp-page-lines i{display:block;height:16px;background:#bdd8fc}.sp-page-lines i:first-child{width:60%}.sp-page-lines i:last-child{width:80%}.sp-step-diagram{padding:24px 0;text-align:center}.sp-step-diagram>div{max-width:1040px;margin:auto;display:flex;align-items:center;gap:12px;flex-wrap:wrap}.sp-step-diagram span{color:#1677ff;font-size:13px}.sp-step-diagram i{flex:1;min-width:12px;height:1px;background:#ccd7e6}.sp-step-diagram small{display:block;color:#667085;margin-top:16px}
  `;
  style.textContent += `
    .sp-scaled-page{position:relative;width:100%;overflow:hidden;border:1px solid #dce3ed;--sp-preview-scale:0}.sp-scaled-canvas{position:absolute;left:0;top:0;transform:scale(var(--sp-preview-scale));transform-origin:top left;background:#fff;font-size:14px;line-height:1.6}.sp-scaled-canvas *{box-sizing:border-box}.sp-preview-shell{position:absolute;inset:0;background:#fff}.sp-preview-shell>header{height:56px;border-bottom:1px solid #dce3ed;display:flex;align-items:center;justify-content:space-between;padding:0 24px;background:#f7f9fc}.sp-preview-shell>header b{font-size:20px}.sp-preview-rail{position:absolute;top:56px;bottom:0;left:0;width:64px;border-right:1px solid #dce3ed;background:#f7f9fc}.sp-preview-rail>div{padding:22px 0;text-align:center}.sp-preview-nav{position:absolute;top:56px;bottom:0;left:64px;width:216px;padding:24px;border-right:1px solid #dce3ed;background:#f7f9fc}.sp-preview-nav>div{padding:16px 0}.sp-preview-nav>div:nth-child(3){color:#1677ff}.sp-preview-work{position:absolute;left:280px;right:0;top:56px;bottom:0;overflow:auto;overscroll-behavior:contain}.sp-preview-work>h2{margin:24px!important;font-size:24px!important}.sp-preview-content{margin:0 auto;min-height:100%}.sp-preview-content h2{font-size:24px!important;margin:24px 0!important}.sp-preview-form{max-width:640px;padding:24px 0}.sp-preview-columns{display:grid;grid-template-columns:300px minmax(0,1fr);gap:20px;padding:24px 0}.sp-preview-columns>nav{border-right:1px solid #e5e9ef;padding:16px}.sp-preview-columns>form{padding-right:24px}.sp-preview-columns nav p{padding:12px 0}.sp-preview-table-image{width:100%;height:calc(100% - 90px);object-fit:cover;object-position:center}.sp-preview-mask{position:absolute;inset:0;background:#0006}.sp-preview-modal{position:absolute;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;background:white;border-radius:8px;box-shadow:0 16px 48px #0003;overflow:hidden;font-size:14px}.sp-preview-modal>header{padding:20px 24px;font-weight:600;font-size:16px;flex-shrink:0;border-bottom:1px solid #edf0f4}.sp-preview-modal-body{padding:24px;overflow:auto;min-height:0;overscroll-behavior:contain}.sp-preview-modal-body p{font-size:14px!important}.sp-preview-modal>footer{flex-shrink:0;display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid #edf0f4}.sp-spec-notification{box-sizing:border-box}
  `;
  style.textContent += `
    .sp-mode-switch{display:flex;gap:30px;align-items:center;margin-bottom:12px;flex-wrap:wrap}.sp-mode-switch a{font-size:30px;font-weight:600;color:#667085;text-decoration:none;padding:4px 0 10px;border-bottom:3px solid transparent;line-height:1.3}.sp-mode-switch a[aria-current=page]{color:#182230;border-bottom-color:#1677ff}.sp-mode-switch a:hover{color:#1677ff}.sp-mode-switch a:focus-visible{outline:2px solid #1677ff;outline-offset:4px}.sp-banner-components{background-image:url('media/a26a91cd825c3acb95.webp');background-color:#f0faf8}.sp-banner-components .sp-mode-switch a[aria-current=page]{border-bottom-color:#159580}.sp-component-content{min-width:0}.sp-component-content .component-library>.page-heading{display:none}.sp-component-content .kit-section{border-radius:0;box-shadow:none;border:0;border-bottom:1px solid #e5e9ef;padding:0 0 28px;margin-bottom:28px}.sp-component-categories button{display:block;width:100%;border:0;background:none;text-align:left;padding:10px;color:#526071;cursor:pointer}.sp-component-categories button[aria-current=location]{color:#1677ff;background:#edf4ff}.sp-component-content .component-library{width:100%;max-width:none}.sp-component-content .kit-section{scroll-margin-top:24px}@container(max-width:800px){.sp-component-content{grid-column:2;grid-row:2}}@container(max-width:560px){.sp-mode-switch{gap:22px}.sp-mode-switch a{font-size:24px}.sp-component-content{width:100%}}
  `;
  style.textContent += `
    .sp-mode-switch{display:flex;gap:8px;width:max-content;max-width:100%;padding:5px;border:1px solid #ffffffd9;border-radius:8px;background:#e9eef380;margin:0}.sp-mode-switch a{display:flex;flex-direction:column;gap:7px;min-width:190px;padding:14px 20px;border:0!important;border-radius:5px;color:#667085;background:transparent;transition:background .18s,box-shadow .18s}.sp-mode-switch a strong{font-size:27px;line-height:1.3;font-weight:600}.sp-mode-switch a span{font-size:12px;line-height:1.6;font-weight:400;white-space:normal}.sp-mode-switch a[aria-current=page]{background:#fff;color:#182230;box-shadow:0 2px 8px #23334b12}.sp-mode-switch a:hover{background:#ffffffb3;color:#182230}.sp-banner{display:flex;align-items:center;min-height:154px}.sp-component-layout{grid-template-columns:minmax(0,1fr) 136px}.sp-component-content{grid-column:1;grid-row:1}.sp-component-anchors{grid-column:2;grid-row:1}.sp-navigation-demo{border:1px solid #e5e9ef;border-radius:4px;overflow:hidden}.sp-demo-page{background:#fff;min-height:180px}.sp-page-nav-highlight{display:flex;align-items:center;gap:8px;padding:12px 16px;background:#f4f8ff;border-bottom:1px solid #dce8f8;box-shadow:inset 3px 0 #1677ff}.sp-demo-page-body{padding:20px}.sp-navigation-demo>.sp-note{padding:12px 16px;margin:0}.sp-native-breadcrumb.sp-demo-page{padding:0}.sp-breadcrumb-destination{padding:16px}.sp-jumper-only>li:not(.ant-pagination-options){display:none}.sp-jumper-only .ant-pagination-options{margin-inline-start:0}@container(max-width:800px){.sp-component-layout{grid-template-columns:minmax(0,1fr)}.sp-component-content{grid-column:1;grid-row:2}.sp-component-anchors{grid-column:1;grid-row:1}}@container(max-width:560px){.sp-mode-switch{width:100%;gap:4px}.sp-mode-switch a{min-width:0;flex:1;padding:12px}.sp-mode-switch a strong{font-size:21px}}
  `;
  style.textContent += `
    .sp-page-nav-highlight{background:#fff;border-bottom:0;box-shadow:none}.sp-page-nav-highlight>strong{font-size:14px;line-height:22px;font-weight:600}
  `;
  style.textContent += `
    .sp-chart-family-heading{margin-bottom:20px}.sp-chart-family-heading h2{margin-bottom:6px}.sp-chart-family-heading p{color:rgba(0,11,35,.65)}.sp-chart-family-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;align-items:stretch}.sp-chart-card{display:flex;flex-direction:column;min-width:0;padding:20px;background:#fff;border:1px solid rgba(0,11,35,.1);border-radius:8px;box-shadow:0 4px 16px rgba(0,11,35,.08),0 1px 3px rgba(0,11,35,.04)}.sp-chart-card.is-wide{grid-column:1 / -1}.sp-chart-card-heading{margin-bottom:16px}.sp-chart-card-heading h3{font-size:16px;line-height:24px;font-weight:600;margin:0 0 6px}.sp-chart-card-heading p{font-size:13px;line-height:22px;color:rgba(0,11,35,.65);margin:0}.sp-chart-card .sp-chart-preview{height:280px;margin-bottom:16px}.sp-chart-card .sp-chart-preview>.base-chart-frame{min-height:260px}.sp-chart-card .sp-chart-preview.is-metric{height:280px}.sp-chart-card .sp-chart-preview.is-disk,.sp-chart-card .sp-chart-preview.is-temperature{height:auto;overflow:visible;min-height:0}.sp-chart-card .observability-wide-card{border:0;box-shadow:none}.sp-chart-card .observability-wide-card>.ant-card-head{display:none}.sp-chart-card .observability-wide-card>.ant-card-body{padding:0}.sp-chart-card .sp-chart-metric{padding:16px 0;align-items:center;text-align:center}.sp-chart-period{align-self:flex-start;margin-bottom:12px;max-width:100%}.sp-chart-choice-notes{display:grid;gap:6px;margin:auto 0 0;padding-top:14px;border-top:1px solid rgba(0,11,35,.1);font-size:13px;line-height:22px}.sp-chart-choice-notes>div{display:grid;grid-template-columns:32px minmax(0,1fr);gap:8px}.sp-chart-choice-notes dt{color:rgba(0,11,35,.45)}.sp-chart-choice-notes dd{color:rgba(0,11,35,.85);margin:0;overflow-wrap:anywhere}.sp-chart-guidance{margin-top:20px;color:rgba(0,11,35,.65);font-size:13px;line-height:22px}.sp-chart-guidance summary{cursor:pointer;width:max-content;max-width:100%;font-size:13px;margin-bottom:12px}.sp-chart-guidance summary:hover{color:#124DEE}.sp-chart-family-grid .sp-chart-detail-table table{min-width:360px}@container(max-width:760px){.sp-chart-family-grid{grid-template-columns:minmax(0,1fr)}.sp-chart-card.is-wide{grid-column:auto}}@container(max-width:560px){.sp-chart-card{padding:16px}.sp-chart-family-grid{gap:16px}.sp-chart-card .sp-chart-preview{height:260px}.sp-chart-card-heading h3{font-size:16px}}
  `;
  style.textContent += `
    .sp-native-chart-fit{position:relative;width:100%;min-width:0}.sp-native-chart-panel{position:absolute;left:0;top:0;transform-origin:top left}.sp-native-chart-panel .temperature-trend-layout{grid-template-columns:minmax(0,1fr) 220px;gap:12px}.sp-native-chart-panel .temperature-trend-chart,.sp-native-chart-panel .temperature-trend-chart .base-chart-frame{height:264px}.sp-native-chart-panel .temperature-trend-chart .base-chart-frame{flex:0 0 264px}.sp-native-chart-panel .temperature-trend-legend{display:block;max-height:264px;padding-top:0;border-top:0}.sp-native-chart-panel .disk-capacity-layout{grid-template-columns:400px minmax(0,1fr);gap:16px}.sp-native-chart-panel .disk-capacity-gauge .platform-gauge-visual{grid-template-columns:270px max-content}.sp-native-chart-panel .disk-capacity-gauge .platform-gauge-visual svg{width:270px;height:157px}.sp-native-chart-panel .disk-capacity-list-head,.sp-native-chart-panel .disk-capacity-list-row{grid-template-columns:minmax(150px,1fr) 120px 84px 100px;gap:10px;min-width:0}.sp-native-chart-legend{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px}.sp-chart-card .sp-chart-choice-notes{margin-top:0}.sp-chart-card{justify-content:flex-start}.sp-chart-card-heading{flex-shrink:0}.sp-chart-card .sp-chart-metric>span,.sp-chart-card .sp-chart-metric>p{width:100%;text-align:center}
  `;
  style.textContent += `
    .sp-upload-library{margin-top:24px}.sp-upload-section .section-head{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:12px}.sp-upload-section .section-head h4{font-size:16px;line-height:24px;font-weight:600;margin:0}.sp-upload-component-name{font-size:12px;color:rgba(0,11,35,.65)}.sp-upload-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin-top:24px}.sp-upload-example{min-width:0}.sp-upload-example h3{font-size:14px;line-height:22px;font-weight:600;margin:0 0 12px}.sp-upload-example.is-drag{grid-column:1 / -1}.sp-upload-limits{font-size:12px;line-height:20px;color:rgba(0,11,35,.65);margin:0 0 12px}.sp-picture-upload-trigger{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;font-size:14px}.sp-picture-upload-trigger>.anticon{font-size:20px}.sp-upload-error{font-size:14px;line-height:22px;color:#D10007;margin:8px 0 0}.sp-upload-section .ant-upload-list-item-name{min-width:0;overflow:hidden;text-overflow:ellipsis}.sp-upload-section .ant-upload-drag{border-radius:8px}.sp-upload-example .ant-upload-drag p.ant-upload-text{font-size:14px}.sp-upload-example .ant-upload-drag p.ant-upload-hint{font-size:12px}@container(max-width:640px){.sp-upload-grid{grid-template-columns:minmax(0,1fr)}.sp-upload-example.is-drag{grid-column:auto}}
  `;
  document.head.append(style);
  document.addEventListener('click', event => {
    if (!event.target.closest('.xd-native-back')) return;
    const params = new URLSearchParams(location.hash.split('?')[1] || '');
    if (params.get('specDetail') === '1' && params.get('from') === 'spec-navigation') {
      event.preventDefault();
      location.hash = '#kit/spec-navigation';
    }
  }, true);
  addEventListener('hashchange', scheduleRender);
  addEventListener('resize', syncBounds);
  addEventListener('xd-spec-components-ready', scheduleRender);
  new MutationObserver(scheduleRender).observe(document.body, { childList: true, subtree: true });
  scheduleRender();
})();

