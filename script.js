const form = document.querySelector('.newsletter form');
const message = document.querySelector('.form-message');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  message.textContent = `Lovely — a note is on its way to ${email}.`;
  form.reset();
});

