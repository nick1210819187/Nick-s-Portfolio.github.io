window.__xdTopologyAvatar='./assistant.webp';
const modelURLs=new Map();
let modelManifest;
window.__xdTopologyAsset=function(name){
 if(modelURLs.has(name))return modelURLs.get(name);
 const load=(async()=>{
  modelManifest??=fetch('./model-manifest.json').then(r=>{if(!r.ok)throw new Error('模型清单加载失败');return r.json()});
  const item=(await modelManifest)[name];if(!item)throw new Error('模型资源未找到：'+name);
  const url=new URL(item.url,location.href).href;if(!item.gzip)return url;
  const response=await fetch(url);if(!response.ok)throw new Error('模型资源加载失败：'+name);
  const stream=response.body.pipeThrough(new DecompressionStream('gzip'));
  const data=await new Response(stream).arrayBuffer();return URL.createObjectURL(new Blob([data],{type:item.type}));
 })().catch(error=>{modelURLs.delete(name);throw error});modelURLs.set(name,load);return load;
};