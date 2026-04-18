/* ── main.js — En un Mundo Alterno ── */

/* Navbar scroll */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* Mobile menu */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active');
});
// Cerrar al hacer click en enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});

/* ── Toggle letras ── */
function toggleLyrics(id) {
  const el = document.getElementById(id);
  const btn = document.getElementById('btn-lyrics-' + id.replace('lyrics-', ''));
  if (!el) return;
  const isOpen = el.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? 'Ocultar Letra ↑' : 'Ver Letra ↓';
}

/* ── Toggle descripción ── */
function toggleDesc(id) {
  const el = document.getElementById(id);
  const btn = document.getElementById('btn-desc-' + id.replace('desc-', ''));
  if (!el) return;
  const isOpen = el.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? 'Sobre la Canción ↑' : 'Sobre la Canción ↓';
}

/* ── Reveal on scroll ── */
const revealEls = document.querySelectorAll(
  '.belief-card, .song-card, .about-grid, .cta-box, .section-header'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

/* ── Subscribe form ── */
function handleSubscribe(e) {
  e.preventDefault();
  const email = document.getElementById('email-input').value;
  const msg = document.getElementById('form-msg');
  msg.textContent = `✦ ¡Gracias! Te notificaremos en ${email} cuando salgan nuevas canciones.`;
  document.getElementById('email-input').value = '';
  setTimeout(() => { msg.textContent = ''; }, 6000);
}

/* ── Smooth scroll para nav links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
