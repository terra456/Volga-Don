import {addCard, newsContainer} from './admin-main.js';

const baseUrl = 'http://cv08121-django-53po4.tw1.ru';
const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};


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


const renderAdminNews = () => {
    return fetch(`${baseUrl}/articles/`)
    .then(checkAnswer)
    .then(data =>  data.forEach((article) => {
      addCard(article, newsContainer)
    }));
    }

renderAdminNews()
