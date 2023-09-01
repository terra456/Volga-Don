import {addCard,  createCardNews, createCardCatalog} from './admin-main.js';
import { newsContainer } from './admin-news.js';
import { baseUrl, checkAnswer } from './utils.js';
import { catalogContainer } from './admin-catalog.js';

// setInterval(auth, 86400000)
// setInterval(() => {                   //обновление токена
//   refresh();
// }, 30 * 60 * 1000);
// console.log(localStorage.getItem('refresh'))
// refresh()


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
          })})
}


export const getAdminProducts = () => {
  return fetch(`${baseUrl}/products/admin/list/`,{
  headers:{
    "Authorization": `Bearer ${localStorage.getItem('access')}`,
    "Content-Type": "application/json"
  }
  })
  .then(checkAnswer)
}

export const getAdminNews = () => {
  return fetch(`${baseUrl}/articles/admin/list/`,{
  headers:{
    "Authorization": `Bearer ${localStorage.getItem('access')}`,
    "Content-Type": "application/json"
  }
  })
  .then(checkAnswer)
}

const btnArchive = document.querySelector('.add-news__btn_type_archive');
export const addNews = () => {
  return fetch(`${baseUrl}/articles/admin/list/`, {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('access')}`

    },
    body: JSON.stringify({
     title: 'Test News',
      text: 'Тестовая новость',
      image: 'https://img.freepik.com/free-vector/link-building-concept_23-2148000680.jpg?w=996&t=st=1693227660~exp=1693228260~hmac=9499f98b1a0948aa47c1c535d45ef32cae95558bf7cf842100ef5fdeffed3843',
      published: false
    })
  })
    .then(checkAnswer)
    .then(res => console.log(res))
}
// btnArchive.addEventListener('click', addNews)
document.addEventListener("DOMContentLoaded", function(){

  if (window.location.pathname.endsWith('admin-news.html')){
    renderAdminNews()
  }
  if (window.location.pathname.endsWith('admin-catalog.html')){
    renderAdminCatalog();
  }
  })
  