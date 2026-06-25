const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const opened = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
}
const loadBtn = document.querySelector('[data-load-members]');
if (loadBtn) {
  loadBtn.addEventListener('click', () => {
    document.querySelectorAll('.hidden-members').forEach(card => card.style.display = 'block');
    loadBtn.style.display = 'none';
  });
}
const membershipForm = document.querySelector('#membershipForm');
if (membershipForm) {
  membershipForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(membershipForm);
    const lines = [
      'Membership interest form',
      '------------------------',
      `Full name: ${data.get('fullName') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone / WhatsApp: ${data.get('phone') || ''}`,
      `Country: ${data.get('country') || ''}`,
      `Affiliation / Institution: ${data.get('affiliation') || ''}`,
      `Current position: ${data.get('position') || ''}`,
      `Membership type: ${data.get('membershipType') || ''}`,
      `Research / professional interest: ${data.get('interest') || ''}`,
      `Short message: ${data.get('message') || ''}`
    ];
    const subject = encodeURIComponent('BBHS Membership Interest');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:bangladeshbiohealthsociety@gmail.com?subject=${subject}&body=${body}`;
  });
}
