import { addCard, createCardNews } from "./admin-main.js";
import {getAdminNews} from "./api.js";
import { exitAuth } from "./utils.js";
const newsContainer = document.querySelector('.admin-news__content');
getAdminNews()
.then(data =>  {
    data.forEach((article) => {
    addCard(article, newsContainer, createCardNews)
  })})
exitAuth()

