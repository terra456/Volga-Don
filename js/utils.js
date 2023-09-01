
export const baseUrl = 'http://cv08121-django-53po4.tw1.ru';

export const refresh = () => {
  return fetch(`${baseUrl}/auth/login/refresh/`,{
  method: "POST",
  headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('refresh')}`
  },
  body: JSON.stringify({
    username: localStorage.getItem('username'),
    password: localStorage.getItem('password'),
    refresh: localStorage.getItem('refresh')
  })
})
.then(checkAnswer)
.then(data => localStorage.setItem('access', data.access))
}


export const checkAnswer = (res) => {
  if (res.status === 401){
    refresh()
  }
  else if (res.ok) {
    return res.json();
  }
   else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export const checkAnswerAuth = (res) => {
  if(res.ok){
    return res.json()
  } else {
    throw new Error('Неверный логин или пароль');
  }
}


export const formatDate = (someDate) => {
const date = new Date(someDate);
const day = date.getDate()
const formatDay = () => {
  if(day < 10){
    return `0${day}`
  } else {
    return day
  }
}
const formattedDate = `${formatDay()}.0${date.getMonth() + 1}.${date.getFullYear().toString().slice(-2)}`;
return formattedDate
}