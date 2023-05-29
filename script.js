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

function enableDesableButton() {
  const button = document.querySelector('#submit-btn');
  const checkbox = document.querySelector('#agreement');
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function verifyCheckBox() {
  const checkbox = document.querySelector('#agreement');
  checkbox.addEventListener('change', enableDesableButton);
}
verifyCheckBox();

function countCaracteres() {
  const textArea = document.querySelector('textarea');
  const countArea = document.querySelector('#counter');
  const span = () => {
    const beforeSpanText = document.querySelector('#counter > span');
    if (beforeSpanText) {
      beforeSpanText.remove();
    } else {
      const spanText = document.createElement('span');
      spanText.innerText = `${textArea.textLength}`;
      countArea.appendChild(spanText);
    }
  };
  textArea.addEventListener('input', span);
}
countCaracteres();
