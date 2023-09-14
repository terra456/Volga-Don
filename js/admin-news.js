import { addCard, createCardNews } from "./admin-main.js";
import {getAdminNews} from "./api.js";
import { exitAuth } from "./utils.js";
const newsContainerAdmin = document.querySelector('.admin-news__content');
getAdminNews()
.then(data =>  {
    data.forEach((article) => {
    addCard(article, newsContainerAdmin, createCardNews)
  })})
exitAuth()

