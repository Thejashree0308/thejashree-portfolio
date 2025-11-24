// Basic interactions for Thejashree's portfolio (simplified from Sabo)

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// Close menu when clicking a nav link (on mobile)
navMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Simple active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function onScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${id}"]`);
      active?.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll);

// Typing effect text list (you can edit titles here)
const typingEl = document.getElementById('typing-text');
const roles = [
  'Data & AI Enthusiast',
  'Machine Learning Learner',
  'Power BI Developer',
  'Python Developer'
];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typingEl) return;

  const current = roles[roleIndex];
  if (!deleting) {
    typingEl.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length + 5) deleting = true;
  } else {
    typingEl.textContent = current.slice(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 60 : 120);
}

if (typingEl) {
  typeLoop();
}

// Dynamic footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach(el => observer.observe(el));
} else {
  // Fallback: show all
  revealEls.forEach(el => el.classList.add('visible'));
}
