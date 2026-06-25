const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    const expanded = menu.classList.contains('is-open');
    navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
}

const loadMoreBtn = document.querySelector('[data-load-members]');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    document.querySelectorAll('.member-card.is-hidden').forEach(card => card.classList.remove('is-hidden'));
    loadMoreBtn.style.display = 'none';
  });
}
