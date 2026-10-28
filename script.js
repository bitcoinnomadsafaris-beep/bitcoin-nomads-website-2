// Bitcoin Nomads site interactions.
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

// Destination explorer filters.
const filterButtons = [...document.querySelectorAll('.filter-chip')];
const destinationCards = [...document.querySelectorAll('.destination-card')];
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    destinationCards.forEach(card => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// Clicking a destination carries its name into the trip enquiry.
destinationCards.forEach(card => card.addEventListener('click', () => {
  const experience = document.querySelector('#experience');
  const message = document.querySelector('#message');
  if (message && card.dataset.place) {
    message.value = `I'm interested in exploring ${card.dataset.place}. Please help me plan a trip.`;
  }
  if (experience && card.dataset.category === 'mountain') experience.value = 'Hiking & summits';
  if (experience && card.dataset.category === 'coast') experience.value = 'Beach escape';
  if (experience && card.dataset.category === 'water') experience.value = 'Waterfalls & hidden gems';
  if (experience && card.dataset.category === 'wild') experience.value = 'Safari & wildlife';
}));

document.querySelector('#year').textContent = new Date().getFullYear();

// Contact configuration: replace this placeholder with Bitcoin Nomads' WhatsApp number
// in international format, digits only (e.g. 2547XXXXXXXX), before launch.
const WHATSAPP_NUMBER = 'REPLACE_WITH_YOUR_WHATSAPP_NUMBER';
const form = document.querySelector('#trip-form');
const status = document.querySelector('#form-status');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      'Hello Bitcoin Nomads! I would like to plan a trip.',
      '',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Experience: ${data.get('experience') || 'Not decided yet'}`,
      `Dates: ${data.get('dates') || 'Flexible'}`,
      `More details: ${data.get('message') || 'I would like to discuss options.'}`
    ].join('\n');
    if (WHATSAPP_NUMBER === 'REPLACE_WITH_YOUR_WHATSAPP_NUMBER') {
      status.textContent = 'The form is working, but WhatsApp is not connected yet. Add your WhatsApp number in script.js before launch.';
      status.scrollIntoView({behavior:'smooth', block:'nearest'});
      return;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    status.textContent = 'Your trip enquiry is ready to send in WhatsApp.';
  });
}