function validation() {
  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');

  const button = document.querySelector('#buttonSubmit');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
validation();
