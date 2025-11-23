document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      if (mobileMenu.classList.contains("hidden")) {
        // buka menu
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("animate-slide-down");
      } else {
        // tutup menu
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("animate-slide-down");
      }
    });
  }
});

// ===== Back to Top Button =====
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
    backToTopButton.classList.remove('invisible');
  } else {
    backToTopButton.classList.add('invisible');
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = document.querySelector('header').offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // close menu after click (on mobile)
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    }
  });
});
// script.js
