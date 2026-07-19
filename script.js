const notes = [
  {category:'知识',state:'常青',date:'2026.07.16',title:'如何建立一个真正会生长的知识系统',summary:'从收集信息转向建立连接：关于 MOC、渐进式总结与输出驱动输入的实践。',tags:['知识管理','Obsidian'],links:12},
  {category:'AI',state:'萌芽',date:'2026.07.12',title:'Prompt 不是咒语，而是上下文工程',summary:'稳定的 AI 输出来自任务环境设计，而不是不断寻找一句完美指令。',tags:['Prompt','AI 工作流'],links:8},
  {category:'商业',state:'种子',date:'2026.07.08',title:'一人公司：从技能到最小可售卖产品',summary:'把模糊能力封装成清晰结果，一次小规模商业验证的假设与行动清单。',tags:['商业实验','产品化'],links:5},
  {category:'英语',state:'常青',date:'2026.07.03',title:'深度阅读：从查单词到复述作者逻辑',summary:'一套将外刊阅读转化为表达能力的四步循环，以及我正在使用的复盘模板。',tags:['深度阅读','方法论'],links:16},
  {category:'知识',state:'萌芽',date:'2026.06.28',title:'用问题而不是主题组织学习',summary:'好问题天然连接不同领域，也让笔记在未来更容易被检索和复用。',tags:['学习科学','MOC'],links:7},
  {category:'AI',state:'种子',date:'2026.06.21',title:'我的个人 AI Agent 能力地图',summary:'从工具调用、记忆到评估反馈，拆解构建个人智能助手的关键模块。',tags:['Agent','学习路径'],links:9}
];
const grid=document.querySelector('#noteGrid'),search=document.querySelector('#searchInput'),filters=document.querySelector('#filters');let active='all';
function render(){const q=search.value.trim().toLowerCase();const list=notes.filter(n=>(active==='all'||n.category===active)&&[n.title,n.summary,n.category,...n.tags].join(' ').toLowerCase().includes(q));grid.innerHTML=list.length?list.map(n=>`<article class="note-card"><div class="note-meta"><span class="state">${n.state}</span><span>${n.date}</span></div><h3>${n.title}</h3><p>${n.summary}</p><div class="tags">${n.tags.map(t=>`<span># ${t}</span>`).join('')}</div><div class="note-footer"><span>${n.category}</span><span>↗ ${n.links} 个连接</span></div></article>`).join(''):'<p class="empty">没有找到匹配的知识节点。</p>'}
search.addEventListener('input',render);filters.addEventListener('click',e=>{if(!e.target.matches('button'))return;active=e.target.dataset.filter;filters.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===e.target));render()});render();
const observer=new IntersectionObserver(items=>items.forEach(i=>{if(i.isIntersecting)i.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const dialog=document.querySelector('#privateDialog');document.querySelector('#privateButton').addEventListener('click',()=>dialog.showModal());dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
