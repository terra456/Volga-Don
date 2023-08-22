import {addCard, createCardCatalog, createCardNews, newsContainerMain, catalogContainerMain} from './admin-main.js';
import { newsContainer } from './admin-news.js';
import { catalogContainer} from './admin-catalog.js';

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

// вывод на главную страницу админа первых 3х новостей
export const renderAdminNewsMain = () => {
    return fetch(`${baseUrl}/articles/`)
    .then(checkAnswer);
    }
//вывод на страницу новостей
export const renderAdminNews = () => {
  return fetch(`${baseUrl}/articles/`)
  .then(checkAnswer)
  .then(data =>  {
    data.forEach((article) => {
    addCard(article, newsContainer, createCardNews)
  })});
}
//вывод каталог главная админ
export const renderAdminCatalogMain = () => {
  return fetch(`${baseUrl}/products/`)
  .then(checkAnswer)
}
//вывод на страницу каталог
export const renderAdminCatalog = () => {
  return fetch(`${baseUrl}/products/`)
  .then(checkAnswer)
  .then(data =>  {
    data.forEach((item) => {
    addCard(item, catalogContainer, createCardCatalog)
  })});
}

document.addEventListener("DOMContentLoaded", function(){

if (window.location.pathname.endsWith('admin-news.html')){
  renderAdminNews()
}
if (window.location.pathname.endsWith('admin-catalog.html')){
  renderAdminCatalog();
}
})