
import { getAdminProducts, getAdminNews } from './api.js'
import { formatDate } from './utils.js';
export const newsContainerMain = document.querySelector(".admin-main-block__content-news");
export const catalogContainerMain = document.querySelector(".admin-main-block__content-catalog");

// создание карточки новостей
// export const createCardNews = function (array) {
//   const cardTemplateNews = document.querySelector("#template-card-admin").content;
//     const newCard = cardTemplateNews.querySelector(".admin-news-card").cloneNode(true);
//     const newCardImage = newCard.querySelector(".admin-news-card__img");
//     const newCardText = newCard.querySelector(".admin-news-card__text")
//     const newCardDate = newCard.querySelector(".admin-news-card__date");
//     const newCardButtonChange = newCard.querySelector(".admin-btn-change");
//     newCardText.textContent = array["title"]
//     newCardImage.src = array["image"];
//     newCardImage.alt = array["title"];
//     newCardDate.textContent = formatDate(array["created_at"]);
//     return newCard;
//   };

//новая версия шаблона
  export const createCardNews = function (array, card) {
    const cardTemplateNews = document.querySelector(card.id).content;
      const newCard = cardTemplateNews.querySelector(card.article).cloneNode(true);
      const newCardImage = newCard.querySelector(card.img);
      const newCardName = newCard.querySelector(card.name);
      const newCardDate = newCard.querySelector(card.date);
      const newCardText = newCard.querySelector(card.text);
      // const newCardButtonChange = newCard.querySelector(".admin-btn-change");
      newCardName.textContent = array["title"]
      newCardImage.src = array["image"];
      newCardImage.alt = array["title"];
      newCardText.textContent = array["text"];
      newCardDate.textContent = formatDate(array["created_at"]);
      return newCard;
    };

  //создание карточки каталога
  // export const createCardCatalog = function (array) {
  //   const cardTemplateCatalog = document.querySelector("#template-card-admin-catalog").content;
  //   const newCard = cardTemplateCatalog.querySelector(".admin-news-card_type_catalog").cloneNode(true);
  //   const newCardImage = newCard.querySelector(".admin-catalog__img");
  //   const newCardText = newCard.querySelector(".admin-catalog-card__text")
  //   const newCardButtonChange = newCard.querySelector(".admin-btn-change");
  //   newCardText.textContent = array["name"]
  //   newCardImage.src = array["images"]["img1"];
  //   newCardImage.alt = array["name"];
  //   return newCard;
  // };

  export const createCardCatalog = function (array, card) {
    const cardTemplateCatalog = document.querySelector(card.id).content;
    const newCard = cardTemplateCatalog.querySelector(card.article).cloneNode(true);
    const newCardImage = newCard.querySelector(card.img);
    const newCardName = newCard.querySelector(card.name);
    const newCardText = newCard.querySelector(card.text)
    // const newCardButtonChange = newCard.querySelector(".admin-btn-change");
    newCardName.textContent = array["name"];
    newCardText.textContent = array["description"];
    newCardImage.src = array["images"]["img1"];
    newCardImage.alt = array["name"];
    return newCard;
  };

  //добавление новой карточки
  export const addCard = function (array, container, func, card) {
    const newCard = func(array, card);
    container.append(newCard);
  };

  document.addEventListener("DOMContentLoaded", function(){

if (window.location.pathname.endsWith('admin-main.html')){
getAdminProducts().then((data) => {
  const firstThreeProducts = data.slice(0, 5);
  firstThreeProducts.forEach((product) => {
    addCard(product, catalogContainerMain, createCardCatalog);
  });
});

getAdminNews().then((data) => {
  const firstThreeArticles = data.slice(0, 3);
  firstThreeArticles.forEach((article) => {
    addCard(article, newsContainerMain, createCardNews);
  });
});
    }})

