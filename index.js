const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');
toggle.addEventListener('click', ()=>{menu.classList.toggle('active');});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(section=>{
    const sectionTop = section.offsetTop - 80;
    if(scrollY >= sectionTop){current = section.getAttribute('id');}
  });
  navLinks.forEach(link=>{
    link.classList.remove('active');
    if(link.getAttribute('href') == '#'+current){link.classList.add('active');}
  });
});