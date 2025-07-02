// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Page loaded console log
  console.log(`${document.title} Loaded Successfully`);

  // 2. Sticky Navbar on scroll
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('sticky', window.scrollY > 50);
  });

  // 3. Smooth Scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
