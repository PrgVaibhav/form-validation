const form = document.getElementById('form');
const errorMessage = document.getElementById('error-message');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const button = document.getElementById('submit');

form.addEventListener('submit', (e) => {
  let messages = [];

  // Checking password length
  if (password.value.length <= 6) {
    messages.push('Please enter password bigger than 6 characters!!');
  }

  //   Checking if the password entered is a weak or common password
  if (password.value === 'password' || password.value === 'Password' || password.value === 'passWord' || password.value === 'qwerty' || password.value === 'QWERTY' || password.value === 123456789 || password.value === 'Qwerty') {
    messages.push('The password you entered is very weak.');
    password.style.border = '2px solid red';
  }

  if (password.value !== repassword.value) {
    messages.push('Please check your re-entered password again!');
    repassword.style.border = '2px solid red';
  }

  button.addEventListener('click', () => {
    alert('Sign in successfully');
  });
  if (messages.length > 0) {
    e.preventDefault();
    errorMessage.innerText = messages.join(' and ');
  }
});
