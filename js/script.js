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
    }
  });
});

function getNestedValue(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

async function setLanguage(lang) {
  console.log('Switch language to:', lang);
  const res = await fetch(`lang/${lang}.json`);
  const dict = await res.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(dict, key);
    if (value) el.innerHTML = value;
  });

  localStorage.setItem('lang', lang);
}

// default language
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "id";
  setLanguage(saved);
});

// script.js
