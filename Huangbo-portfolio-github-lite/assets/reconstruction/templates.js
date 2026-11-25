
(() => {
 const pages=[{"id":"kit-overview","label":"模型与服务概览","image":"assets/reconstruction/template-library/kit-overview.webp"},{"id":"filter-card","label":"左筛右卡","image":"assets/reconstruction/template-library/filter-card.webp"},{"id":"current-alarm","label":"当前告警","image":"assets/reconstruction/template-library/current-alarm.webp"},{"id":"hardware-resource","label":"硬件资源","image":"assets/reconstruction/template-library/hardware-resource.webp"},{"id":"card-choice","label":"卡片选择","image":"assets/reconstruction/template-library/card-choice.webp"},{"id":"graphic-table","label":"图形化表格","image":"assets/reconstruction/template-library/graphic-table.webp"},{"id":"text-model","label":"AI 对话","image":"assets/reconstruction/template-library/text-model.webp"},{"id":"tree-table","label":"左树右表","image":"assets/reconstruction/template-library/tree-table.webp"},{"id":"complex-table","label":"复杂列表","image":"assets/reconstruction/template-library/complex-table.webp"},{"id":"virtual-machine-detail","label":"对象详情","image":"assets/reconstruction/template-library/virtual-machine-detail.webp"},{"id":"secondary-page","label":"多步骤配置","image":"assets/reconstruction/template-library/secondary-page.webp"},{"id":"anchor-page","label":"锚点表单","image":"assets/reconstruction/template-library/anchor-page.webp"},{"id":"advanced-config","label":"高级配置","image":"assets/reconstruction/template-library/advanced-config.webp"}];
 const tabs=[...document.querySelectorAll('[data-library-template]')];
 const panel=document.getElementById('framework-panel');
 const picture=document.getElementById('framework-page-image');
 const canvas=picture.parentElement;
 const empty=document.querySelector('.framework-empty');
 const error=document.querySelector('.framework-error');
 const tablist=document.querySelector('.framework-tabs');
 const mobile=matchMedia('(max-width:780px)');
 const orient=()=>tablist.setAttribute('aria-orientation',mobile.matches?'horizontal':'vertical');
 orient();mobile.addEventListener('change',orient);
 function select(id,focus=false){
  const page=pages.find(item=>item.id===id);
  if(!page)return;
  const tab=tabs.find(item=>item.dataset.libraryTemplate===id);
  tabs.forEach(item=>{const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1});
  panel.setAttribute('aria-labelledby',tab.id);
  picture.alt=page.label+'：原始页面展示';
  picture.loading='eager';
  error.hidden=true;
  picture.src=page.image;
  canvas.scrollTop=0;canvas.scrollLeft=0;
  document.dispatchEvent(new CustomEvent('portfolio-template-change',{detail:{route:page.id,label:page.label}}));
  if(focus){tab.focus({preventScroll:true});tab.scrollIntoView({block:'nearest',inline:'nearest',behavior:'instant'})}
 }
 picture.addEventListener('error',()=>{error.hidden=false});
 picture.addEventListener('load',()=>{error.hidden=true});
 tabs.forEach(tab=>{
  tab.addEventListener('click',()=>select(tab.dataset.libraryTemplate));
  tab.addEventListener('keydown',event=>{
   const visible=tabs.filter(item=>!item.hidden);
   const current=visible.indexOf(tab);
   let next;
   if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(current+1)%visible.length;
   if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(current+visible.length-1)%visible.length;
   if(event.key==='Home')next=0;
   if(event.key==='End')next=visible.length-1;
   if(next!==undefined){event.preventDefault();select(visible[next].dataset.libraryTemplate,true)}
  });
 });

 const dock=document.querySelectorAll('#thumbs .thumb')[2];
 if(dock)dock.innerHTML='<img src="assets/reconstruction/template-library/kit-overview-thumb.webp" width="176" height="110" alt="">';
})();
