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

function captureAndDelete() {
  const spans = document.querySelectorAll('#span');
  for (let i = 0; i < spans.length - 1; i += 1) {
    spans[i].remove();
  }
}

function countCaracteres() {
  const textArea = document.querySelector('#textarea');
  const countArea = document.querySelector('#counter');
  const span = () => {
    const spanText = document.createElement('span');
    spanText.id = 'span';
    spanText.innerText = `${500 - textArea.textLength}`;
    countArea.appendChild(spanText);
    captureAndDelete();
  };
  span();
  const inputEvent = () => { textArea.addEventListener('input', span); };
  textArea.addEventListener('keydown', (e) => {
    const keyboard = e.key;
    if (keyboard !== 'Backspace' || keyboard !== 'Delete') {
      inputEvent();
    }
  });
}
countCaracteres();
