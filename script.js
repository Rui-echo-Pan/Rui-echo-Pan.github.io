const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('#nav-links');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open)});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
const anchors=[...links.querySelectorAll('a[href^="#"]')];
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){anchors.forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}}},{rootMargin:'-15% 0px -65% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
