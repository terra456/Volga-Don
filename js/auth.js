import { baseUrl, checkAnswer} from "./utils.js";
const login = document.querySelector('.admin-registration__input_type_login');
const password = document.querySelector('.admin-registration__input_type_password');
const enterButton = document.querySelector('.admin-registration__btn')


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
    .then(checkAnswer)
    .then((data) => {
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);})
  }

  enterButton.addEventListener('click', (e) => {
    e.preventDefault()
    auth()
})
console.log(localStorage.removeItem('access'))