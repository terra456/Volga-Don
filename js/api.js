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
export const addNews = () => {
  const inputName = document.querySelector('.admin-add-card__input-name');
  const inputText = document.querySelector('.admin-add-card__input-text');
  const inputFile = document.querySelector('.admin-add-card__input-file').files[0];
  const formData = new FormData();
  formData.append('title', inputName.value);
  formData.append('text', inputText.value);
  formData.append('image', inputFile);
  formData.append('published', true);
  return fetch(`${baseUrl}/articles/admin/list/`,{
    method: "POST",
   headers:{
    "Authorization": `Bearer ${localStorage.getItem('access')}`,
    "Content-Type": "multipart/form-data; boundary=---",
  },
  body: formData
  })
  .then(checkAnswer)
  .then(res => console.log(res))
}

export const addProduct = () => {
  const inputName = document.querySelector('.admin-add-catalog__input-name');
  const inputText = document.querySelector('.admin-add-catalog__input-text');
  const inputFile = document.querySelector('.admin-add-catalog__input-file').files[0];
  const formData = new FormData();
  formData.append('name', inputName.value);
  formData.append('description', inputText.value);
  formData.append('img1', inputFile);
  formData.append('published', true);
  return fetch(`${baseUrl}/products/admin/add/`,{
   method: "POST",
   headers:{
    "Authorization": `Bearer ${localStorage.getItem('access')}`,
    "Content-Type": "multipart/form-data; boundary=---",
  },
  body: formData
  })
  .then(checkAnswer)
  .then(res => console.log(res))

}

document.addEventListener("DOMContentLoaded", function(){

  if (window.location.pathname.endsWith('admin-news.html')){
    renderAdminNews()
  }
  if (window.location.pathname.endsWith('admin-catalog.html')){
    renderAdminCatalog();
  }
  if (window.location.pathname.endsWith('admin-add-news.html')){
    const btnArchive = document.querySelector('.add-news__btn_type_archive');
    btnArchive.addEventListener('click', addNews)
  }
  if (window.location.pathname.endsWith('admin-add-catalog.html')){
    const btnArchive = document.querySelector('.add-catalog__btn_type_archive');
    btnArchive.addEventListener('click', addProduct)
  }
  })
  