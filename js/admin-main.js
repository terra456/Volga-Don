import { formatDate } from './api.js'
const cardTemplateNews = document.querySelector("#template-card-news").content;
export const newsContainer = document.querySelector(".admin-news")

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
    // newCardPrice.textContent = array["price"];
//     newCardButton.addEventListener("touchstart", function () {
//      clickCard(array["link"], array["name"], array["price"], array["data"]);
//    });
    // newCardButton.addEventListener("click", function () {
    //   clickCard(array["link"], array["name"], array["price"], array["data"]);
    // });
    // newCardImage.addEventListener("click", function () {
    //   clickCard(array["link"], array["name"], array["price"], array["data"]);
    // });
    return newCard;
  };

  //добавление новой карточки
  export const addCard = function (array, container) {
    const newCard = createCardNews(array);
    container.append(newCard);
  };
 
