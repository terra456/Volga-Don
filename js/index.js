import { getNews, getProductsCatalog, postFeedback} from "./api.js";
import { createCardNews, addCard, createCardCatalog } from "./admin-main.js";
const newsLink = document.querySelector('#news-link');
const aboutLink = document.querySelector('#about-link');
const newsBlock = document.querySelector('#news');
const aboutBlock = document.querySelector('#about');
const newsContainer = document.querySelector('.section__container_type_news')
const catalogContainer = document.querySelector('.section__container_type_catalog');

// const inputNameFeedback = document.querySelector('.questions__form-input-name').value;
// const inputSurnameFeedback = document.querySelector('.questions__form-input-surname').value;
// const inputPhoneFeedback = document.querySelector('.questions__form-input-number').value;
const btnFeedback = document.querySelector('.btn_type_questions')


function scrollToBlock(block) {
    if (block) {
      window.scrollTo({
        top: block.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  const cardNews = {
    id: '#template-news-card',
    article: '.news__card',
    img: '.news__img',
    text: '.news__about',
    name: '.news__name',
    date: '.news__date'
  }
 export const cardProduct = {
    id: '#template-catalog-card',
    article: '.catalog__card',
    img: '.catalog__img',
    text: '.catalog__about',
    name: '.catalog__name'
  }

if (window.location.pathname.endsWith('pages/') || window.location.pathname.endsWith('index.html')){
  //плавный скролл к якорю
  newsLink.addEventListener('click', function(event){
    event.preventDefault();
    scrollToBlock(newsBlock)
  })
  aboutLink.addEventListener('click', function(event){
  event.preventDefault();
  scrollToBlock(aboutBlock)
})
//убираем ссылку якорь в адресе
aboutBlock.addEventListener('mouseleave', () => {
  history.replaceState(null, null, window.location.pathname);
});
newsBlock.addEventListener('mouseleave', () => {
  history.replaceState(null, null, window.location.pathname);
});

//  получение новостей и товаров с сервера
getNews()
.then(data =>  {
  const firstThreeArticles = data.slice(0, 3);
  firstThreeArticles.forEach((article) => {
  addCard(article, newsContainer, createCardNews, cardNews)
})})
getProductsCatalog()
.then(data => {
  const firstFourProducts = data.slice(0, 4);
  firstFourProducts.forEach((product) => {
    addCard(product, catalogContainer, createCardCatalog, cardProduct)
  })})
  }

  //форма обратной связи
btnFeedback.addEventListener('click', (e) => {
  const inputNameFeedback = document.querySelector('.questions__form-input-name').value;
const inputSurnameFeedback = document.querySelector('.questions__form-input-surname').value;
const inputPhoneFeedback = document.querySelector('.questions__form-input-number').value;
  e.preventDefault();
  postFeedback(inputNameFeedback, inputSurnameFeedback, inputPhoneFeedback)
  .then(data => data)
})

