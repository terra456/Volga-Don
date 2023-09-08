
import { baseUrl, checkAnswer } from './utils.js';

// вывод на клиентскую часть новостей
export const getNews = () => {
    return fetch(`${baseUrl}/articles/`)
    .then(checkAnswer);
    }

//вывод на клиентскую страницу каталог
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
export const postAdminNews = (name, text, file, published) => {
  const formData = new FormData();
  formData.append('title', name.value);
  formData.append('text', text.value);
  formData.append('image', file);
  formData.append('published', published);
  return fetch(`${baseUrl}/articles/admin/list/`,{
    method: "POST",
   headers:{
    "Authorization": `Bearer ${localStorage.getItem('access')}`,
    "Content-Type": "multipart/form-data; boundary=---",
  },
  body: formData
  })
  .then(checkAnswer)

}
//post товара
export const postAdminProduct = (name, text, file, published) => {
  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('description', text.value);
  formData.append('img1', file);
  formData.append('published', published);
  return fetch(`${baseUrl}/products/admin/add/`,{
   method: "POST",
   headers:{
    "Authorization": `Bearer ${localStorage.getItem('access')}`,
    "Content-Type": "multipart/form-data; boundary=---",
  },
  body: formData
  })
  .then(checkAnswer)

}

  