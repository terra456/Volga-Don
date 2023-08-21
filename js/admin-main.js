import { formatDate } from './api.js'
const cardTemplateNews = document.querySelector("#template-card-news").content;
export const newsContainerMain = document.querySelector(".admin-main-block__content-news")

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

  //добавление новой карточки
  export const addCard = function (array, container) {
    const newCard = createCardNews(array);
    container.append(newCard);
  };
 
