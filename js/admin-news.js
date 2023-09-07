import { addCard, createCardNews } from "./admin-main.js";
import {renderAdminNews} from "./api.js"
const newsContainer = document.querySelector('.admin-news__content');
renderAdminNews()
.then(data =>  {
    data.forEach((article) => {
    addCard(article, newsContainer, createCardNews)
  })})

