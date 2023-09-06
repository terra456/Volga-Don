
import { getAdminProducts, getAdminNews } from './api.js'
import { formatDate } from './utils.js';
// const cardTemplateNews = document.querySelector("#template-card-admin").content;
export const newsContainerMain = document.querySelector(".admin-main-block__content-news");
export const catalogContainerMain = document.querySelector(".admin-main-block__content-catalog");
export const buttonExit = document.querySelector(".admin-btn_type_exit")

// создание карточки новостей
export const createCardNews = function (array) {
  const cardTemplateNews = document.querySelector("#template-card-admin").content;
    const newCard = cardTemplateNews.querySelector(".admin-news-card").cloneNode(true);
    const newCardImage = newCard.querySelector(".admin-news-card__img");
    const newCardText = newCard.querySelector(".admin-news-card__text")
    const newCardDate = newCard.querySelector(".admin-news-card__date");
    const newCardButtonChange = newCard.querySelector(".admin-btn-change");
    newCardText.textContent = array["title"]
    newCardImage.src = array["image"];
    newCardImage.alt = array["title"];
    newCardDate.textContent = formatDate(array["created_at"]);
    return newCard;
  };
  //создание карточки каталога
  export const createCardCatalog = function (array) {
    const cardTemplateCatalog = document.querySelector("#template-card-admin-catalog").content;
    const newCard = cardTemplateCatalog.querySelector(".admin-news-card_type_catalog").cloneNode(true);
    const newCardImage = newCard.querySelector(".admin-catalog__img");
    const newCardText = newCard.querySelector(".admin-catalog-card__text")
    const newCardButtonChange = newCard.querySelector(".admin-btn-change");
    newCardText.textContent = array["name"]
    newCardImage.src = array["images"]["img1"];
    newCardImage.alt = array["name"];
    return newCard;
  };

  //добавление новой карточки
  export const addCard = function (array, container, func) {
    const newCard = func(array);
    container.append(newCard);
  };

  document.addEventListener("DOMContentLoaded", function(){
    if (window.location.pathname.endsWith('admin-main.html')){
      getAdminProducts()
      .then(data => {
        const firstThreeProducts = data.slice(0, 5);
        firstThreeProducts.forEach((product) => {
          addCard(product, catalogContainerMain, createCardCatalog)
        })
    })
    
      getAdminNews()
      .then(data =>  {
          const firstThreeArticles = data.slice(0, 3);
          firstThreeArticles.forEach((article) => {
          addCard(article, newsContainerMain, createCardNews)
        })})
        buttonExit.addEventListener('click', () => {
          localStorage.clear();
          window.location.href = "admin-registration.html"
        })
    }
  })
