(function(){
  document.documentElement.classList.add('js');
  const profile=window.PROFILE||{};
  const strings=window.I18N||{};
  let lang='zh';
  const $=(s,root=document)=>root.querySelector(s);
  const $$=(s,root=document)=>Array.from(root.querySelectorAll(s));
  function applyProfile(){
    $$('[data-profile="github"]').forEach(a=>{if(profile.github){a.href=profile.github;a.hidden=false}else a.hidden=true});
    $$('[data-profile="scholar"]').forEach(a=>{if(profile.scholar){a.href=profile.scholar;a.hidden=false}else a.hidden=true});
    if(profile.email){
      $$('[data-profile="email"]').forEach(a=>{a.href='mailto:'+profile.email});
      $$('[data-email-text]').forEach(el=>el.textContent=profile.email);
    }
    const cv=$$('.button-secondary, a[data-i18n="downloadCV"]');cv.forEach(a=>a.href=profile.cv||'assets/chenyang-fu-cv.pdf');
    const copy=$('#copy-email');if(copy&&profile.email)copy.hidden=false;
  }
  function setLanguage(next){
    if(!strings[next])return;
    lang=next;document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    document.title=lang==='zh'?'付晨阳 · Chenyang Fu — LLM Agents · Agentic RL · RSI':'Chenyang Fu · 付晨阳 — LLM Agents · Agentic RL · RSI';
    const description=$('meta[name="description"]');if(description)description.content=strings[lang].heroDescription;
    const nav=$('#navigation');if(nav)nav.setAttribute('aria-label',lang==='zh'?'主导航':'Main navigation');
    $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(strings[lang][key]!==undefined)el.innerHTML=strings[lang][key]});
    const b=$('#language-switch'),label=$('#language-label');if(b){label.textContent=lang==='zh'?'EN':'中';b.setAttribute('aria-label',lang==='zh'?'Switch to English':'切换到中文')};
    try{localStorage.setItem('cf-language',lang)}catch(e){}
  }
  function setupMenu(){
    const toggle=$('#menu-toggle'),nav=$('#navigation');if(!toggle||!nav)return;
    toggle.hidden=false;
    const close=()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')};
    toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});
    $$('a',nav).forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){close();toggle.focus()}});
  }
  function setupCopy(){const btn=$('#copy-email'),status=$('#copy-status');if(!btn||!status)return;btn.addEventListener('click',async()=>{const t=strings[lang]||{copied:'已复制邮箱',copyFailed:'请手动复制邮箱'};try{await navigator.clipboard.writeText(profile.email);status.textContent=t.copied}catch(e){status.textContent=t.copyFailed}setTimeout(()=>{status.textContent=''},2600)})}
  function setupScroll(){const bar=$('.reading-progress');if(!bar)return;const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=(max>0?scrollY/max*100:0)+'%'};addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();if(!('IntersectionObserver' in window))return;const sections=$$('main section[id]'),links=$$('.navigation a');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.removeAttribute('aria-current'));const a=$('.navigation a[href="#'+e.target.id+'"]');if(a)a.setAttribute('aria-current','true')}}),{rootMargin:'-42% 0px -48% 0px'});sections.forEach(s=>observer.observe(s))}
  applyProfile();setupMenu();setupCopy();setupScroll();
  const switcher=$('#language-switch');if(switcher&&strings.zh&&strings.en){switcher.hidden=false;switcher.addEventListener('click',()=>setLanguage(lang==='zh'?'en':'zh'))}
  let saved='zh';try{saved=localStorage.getItem('cf-language')||'zh'}catch(e){}setLanguage(saved==='en'?'en':'zh');
  const year=$('#year');if(year)year.textContent=new Date().getFullYear();
})();
