const form = document.querySelector('.newsletter form');
const message = document.querySelector('.form-message');
const backToTop = document.querySelector('.back-to-top');
const gardenForm = document.querySelector('.transparent-form');
const gardenMessage = document.querySelector('.footer-form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  message.textContent = `Lovely — a note is on its way to ${email}.`;
  form.reset();
});

gardenForm.addEventListener('submit', (event) => {
  event.preventDefault();
  gardenMessage.textContent = 'Thanks — we’ll be in touch soon.';
  gardenForm.reset();
});

const toggleBackToTop = () => {
  backToTop.classList.toggle('is-visible', window.scrollY > 420);
};

window.addEventListener('scroll', toggleBackToTop, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
toggleBackToTop();
