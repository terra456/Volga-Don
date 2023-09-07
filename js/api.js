
import { baseUrl, checkAnswer } from './utils.js';

// вывод на главную страницу админа первых 3х новостей
export const getNews = () => {
    return fetch(`${baseUrl}/articles/`)
    .then(checkAnswer);
    }

//вывод на страницу каталог
export const getProductsCatalog = () => {
  return fetch(`${baseUrl}/products/`)
  .then(checkAnswer)
}

//каталог продуктов админ-панель
export const getAdminProducts = () => {
  return fetch(`${baseUrl}/products/admin/list/`,{
  headers:{
    "Authorization": `Bearer ${localStorage.getItem('access')}`,
    "Content-Type": "application/json"
  }
  })
  .then(checkAnswer)
}
//получение новостей с сервера
export const getAdminNews = () => {
  return fetch(`${baseUrl}/articles/admin/list/`,{
  headers:{
    "Authorization": `Bearer ${localStorage.getItem('access')}`,
    "Content-Type": "application/json"
  }
  })
  .then(checkAnswer)
}
//post новости
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
//post товара
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

  if (window.location.pathname.endsWith('admin-add-news.html')){
    const btnArchive = document.querySelector('.add-news__btn_type_archive');
    btnArchive.addEventListener('click', addNews)
  }
  if (window.location.pathname.endsWith('admin-add-catalog.html')){
    const btnArchive = document.querySelector('.add-catalog__btn_type_archive');
    btnArchive.addEventListener('click', addProduct)
  }
  })
  