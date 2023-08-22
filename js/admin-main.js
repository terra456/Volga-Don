import { formatDate, renderAdminCatalogMain, renderAdminNewsMain } from './api.js'
const cardTemplateNews = document.querySelector("#template-card-admin").content;
export const newsContainerMain = document.querySelector(".admin-main-block__content-news");
export const catalogContainerMain = document.querySelector(".admin-main-block__content-catalog")

// создание карточки новостей

export const createCardNews = function (array) {
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
  export const createCardCatalog = function (array) {
    const newCard = cardTemplateNews.querySelector(".admin-news-card").cloneNode(true);
    const newCardImage = newCard.querySelector(".admin-news-card__img");
    const newCardText = newCard.querySelector(".admin-news-card__text")
    const newCardButtonChange = newCard.querySelector(".admin-btn-change");
    newCardText.textContent = array["title"]
    newCardImage.src = array["image"];
    newCardImage.alt = array["title"];
    return newCard;
  };

  //добавление новой карточки
  export const addCard = function (array, container, func) {
    const newCard = func(array);
    container.append(newCard);
  };

  document.addEventListener("DOMContentLoaded", function(){
    if (window.location.pathname.endsWith('admin-main.html')){
      renderAdminCatalogMain()
      .then(data =>  {
        data.forEach((item) => {
        addCard(item, catalogContainerMain, createCardCatalog)
      })});


      renderAdminNewsMain()
      .then(data =>  {
        const firstThreeArticles = data.slice(0, 3);
        firstThreeArticles.forEach((article) => {
        addCard(article, newsContainerMain, createCardNews)
      })})
    }
  })
