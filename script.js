// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Page Load Log
  console.log(`${document.title} Loaded Successfully`);

  // 2. Sticky Navbar
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });

  // 3. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
