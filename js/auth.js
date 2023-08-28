import { baseUrl, checkAnswerAuth} from "./utils.js";

const login = document.querySelector('.admin-registration__input_type_login');
const password = document.querySelector('.admin-registration__input_type_password');
const enterButton = document.querySelector('.admin-registration__btn');
const errorMessages = document.querySelectorAll('.admin-registration__error-message');
const loading = document.querySelector('.loading-img');

const authLoadingActive = () => {
  loading.classList.add('loading-img_active')
}
const authLoadingInactive = () => {
  loading.classList.remove('loading-img_active')
}

const validateInput = () => {
  authLoadingActive();
  if (login.validity.valid) {
    errorMessages[0].classList.remove('admin-registration__error-message_active');
    return true
  } else {
    errorMessages[0].classList.add('admin-registration__error-message_active');
    authLoadingInactive()
    return false;
  }
  
}

const validatePassword = () => {
  authLoadingActive();
  if (password.validity.valid) {
    errorMessages[1].classList.remove('admin-registration__error-message_active');
    return true
  } else {
    errorMessages[1].classList.add('admin-registration__error-message_active');
    authLoadingInactive();
    return false
  }
}
export const auth = () => {
    return fetch(`${baseUrl}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login.value,
        password: password.value,
      }),
    })
    .then(checkAnswerAuth) 
    .then((data) => {
      localStorage.clear();
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      localStorage.setItem('username',login.value);
      localStorage.setItem('username', password.value)
      window.location.href = 'admin-main.html'})
      .catch((err) => {
        authLoadingInactive()
        const loginError = document.querySelector('#login + .admin-registration__error-message');
        const passwordError = document.querySelector('#password + .admin-registration__error-message');
        if (loginError) {
          loginError.textContent = err.message;
          loginError.classList.add('admin-registration__error-message_active');
        }
        if (passwordError) {
          passwordError.textContent = err.message;
          passwordError.classList.add('admin-registration__error-message_active');
        }
      })
      
  }


enterButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateInput();
  validatePassword();
  if (validateInput() && validatePassword()) {
    auth();
  }
  
});


