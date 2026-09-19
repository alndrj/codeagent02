const form = document.querySelector('.newsletter form');
const message = document.querySelector('.form-message');
const backToTop = document.querySelector('.back-to-top');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  message.textContent = `Lovely — a note is on its way to ${email}.`;
  form.reset();
});

const toggleBackToTop = () => {
  backToTop.classList.toggle('is-visible', window.scrollY > 420);
};

window.addEventListener('scroll', toggleBackToTop, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
toggleBackToTop();
